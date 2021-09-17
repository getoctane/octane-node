#!/usr/bin/env bash

set -ex

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

cd testdata/simple-typescript-app/
npm install

# Manually copy the "octane-node" dependency from our built version
rm -rf node_modules/octane-node/
mkdir node_modules/octane-node/
cp -r ../../build/* node_modules/octane-node/

# See if we can build
npm run-script build

# See if we can run
npm start
