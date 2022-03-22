#!/usr/bin/env bash

set -euxo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

rm -rf build/
trap "rm -f ${PWD}/tsconfig.tsbuildinfo" EXIT
tsc -p tsconfig.json

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
