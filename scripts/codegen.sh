#!/usr/bin/env bash

set -ex

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

OPEN_API_URL="https://api.dev.getoctane.io/docs/openapi.json"

CODEGEN_VERSION="3.0.27"
CODEGEN_SHA="66e956839d84bfff44be2ac269761f755404dfea34c7e4903821fedbc3c06043"
CODEGEN_URL="https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/${CODEGEN_VERSION}/swagger-codegen-cli-${CODEGEN_VERSION}.jar"

mkdir -p testbin/

if [ ! -f "testbin/openapi.json" ]; then
  curl -L "${OPEN_API_URL}" -o "testbin/openapi.json"
fi

if [ ! -f "testbin/codegen.jar" ]; then
  mkdir -p testbin/
  curl -L "${CODEGEN_URL}" -o "testbin/codegen.jar"
fi

shasum -a 256 "testbin/codegen.jar" | grep "^${CODEGEN_SHA}  "

rm -rf mount/
trap "rm -rf ${PWD}/mount" EXIT
mkdir -p mount/

# Generate the typescript files from openapi spec
docker run --rm \
  -v ${PWD}/mount:/mount \
  -v ${PWD}/testbin:/testbin \
  --entrypoint java \
  java:8 \
  -jar /testbin/codegen.jar generate \
  -i /testbin/openapi.json -l typescript-fetch -o /mount

# Replace ModelObject with just Object
cat mount/api.ts | sed 's/ModelObject/Object/g' > mount/api.ts.tmp
mv mount/api.ts.tmp mount/api.ts

# Fix error: "TS2564: Property 'configuration' has no initializer and is not definitely assigned in the constructor."
cat mount/api.ts | sed 's/protected configuration: Configuration;/protected configuration!: Configuration;/g' > mount/api.ts.tmp
mv mount/api.ts.tmp mount/api.ts

# Fix error: "TS2564: Property 'name' has no initializer and is not definitely assigned in the constructor."
cat mount/api.ts | sed 's/name: "RequiredError"/name!: "RequiredError"/g' > mount/api.ts.tmp
mv mount/api.ts.tmp mount/api.ts

# Fix error: "TS6133: 'configuration' is declared but its value is never read."
cat mount/api.ts | sed 's/function (configuration?: Configuration)/function (_configuration?: Configuration)/g' > mount/api.ts.tmp
mv mount/api.ts.tmp mount/api.ts

# Fix isomorphicfetch "default" namespace issue
cat mount/api.ts | sed 's/protected fetch: FetchAPI = isomorphicFetch) {/protected fetch: FetchAPI = isomorphicFetch.default) {/g' > mount/api.ts.tmp
mv mount/api.ts.tmp mount/api.ts

# Fix missing API token issue
cat mount/api.ts | sed 's/return fetch(/localVarFetchArgs.options.headers["Authorization"] = "Bearer " +(configuration?.apiKey || "UNSET"); return fetch(/g' > mount/api.ts.tmp
mv mount/api.ts.tmp mount/api.ts

# Take the files we care about
mv mount/*.ts src/lib/

# This file causes issues on build.. comment this out to see the tests
rm -f src/lib/api_test.spec.ts
