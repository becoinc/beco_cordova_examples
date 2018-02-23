#!/bin/bash

echo "--------> Clean script for the Beco Cordova SDK Examples <--------"

CORDOVA=`which cordova`
if [ $? != 0 ]; then
    echo "Cordova executable not found."
    exit 1
fi

pushd example
    rm -rf node_modules
    rm -rf platforms
    rm -rf plugins
    rm -f package-lock.json
popd

pushd kitchen
    rm -rf node_modules
    rm -rf platforms
    rm -rf plugins
    rm -f package-lock.json
popd

pushd minimal
    rm -rf node_modules
    rm -rf platforms
    rm -rf plugins
    rm -f package-lock.json
popd
