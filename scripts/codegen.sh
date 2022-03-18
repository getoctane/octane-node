#!/usr/bin/env bash

set -ex

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

OPEN_API_URL="${OPEN_API_URL:-https://api.cloud.getoctane.io/docs/openapi.json}"

CODEGEN_VERSION="3.0.27"
CODEGEN_SHA="66e956839d84bfff44be2ac269761f755404dfea34c7e4903821fedbc3c06043"
CODEGEN_URL="https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/${CODEGEN_VERSION}/swagger-codegen-cli-${CODEGEN_VERSION}.jar"

mkdir -p testbin/

if [ ! -f "testbin/openapi.json" ]; then
  curl -L "${OPEN_API_URL}" -o "testbin/openapi.json"
fi

# TODO: See if we can just generate this straight into `src/codegen` instead.
rm -rf mount/
trap "rm -rf ${PWD}/mount" EXIT
mkdir -p mount/

# Generate the typescript files from openapi spec
npx @openapitools/openapi-generator-cli generate -g typescript-fetch \
    --skip-validate-spec \
    --additional-properties=useSingleRequestParameter=true \
    -o mount \
    -i testbin/openapi.json


# TODO: No sed please

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
mkdir -p src/codegen/
mv mount/api.ts src/codegen/
mv mount/runtime.ts src/codegen/
mv mount/apis src/codegen/
mv mount/models/ src/codegen/
mv mount/index.ts src/codegen/

# This file causes issues on build.. comment this out to see the tests
# mv mount/api_test.spec.ts src/codegen/
