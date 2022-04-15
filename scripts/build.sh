#!/usr/bin/env bash

set -euxo pipefail

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

rm -rf build/
trap "rm -f ${PWD}/tsconfig.tsbuildinfo" EXIT
tsc -p tsconfig.json