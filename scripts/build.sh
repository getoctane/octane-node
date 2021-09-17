#!/usr/bin/env bash

set -ex

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

rm -rf build/
trap "rm -f ${PWD}/tsconfig.tsbuildinfo" EXIT
tsc -p tsconfig.json

# Fix for bug in v0.5.0
cp src/codegen/custom.d.ts build/codegen/
cat build/codegen/api.d.ts | sed 's/codegen\/custom/\.\/custom/g' \
  > build/codegen/api.d.ts.tmp
mv build/codegen/api.d.ts.tmp build/codegen/api.d.ts

# Remove test files
rm -rf build/resources/__tests__/

cp LICENSE build/
cp README.md build/

# Remove dev-related fields from package.json
node -e "
let j=JSON.parse(require('fs').readFileSync('./package.json'))
delete j['scripts']
delete j['devDependencies']
console.log(JSON.stringify(j,null,2))" > build/package.json
