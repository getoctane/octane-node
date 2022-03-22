#!/usr/bin/env bash

set -euo pipefail

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
    --additional-properties=useSingleRequestParameter=true,typescriptThreePlus=true \
    -o mount \
    -i testbin/openapi.json


# Take the files we care about
# TODO: See if we can just run the generator right into src/codegen
rm -rf src/codegen/
mkdir -p src/codegen/
mv mount/runtime.ts src/codegen/
mv -f mount/apis src/codegen/
mv mount/models/ src/codegen/
mv mount/index.ts src/codegen/

# This file causes issues on build.. comment this out to see the tests
# mv mount/api_test.spec.ts src/codegen/
