#!/bin/bash

echo "--------> Build script for the Beco Cordova SDK Examples <--------"

CORDOVA=`which cordova`
if [ $? != 0 ]; then
    echo "Cordova executable not found."
    exit 1
fi

pushd example
cordova platform add ios \
    && cordova platform add android \
    && cordova build ios \
    && cordova build android
popd

pushd kitchen
cordova platform add ios \
    && cordova platform add android \
    && cordova build ios \
    && cordova build android
popd

pushd minimal
cordova platform add ios \
    && cordova platform add android \
    && cordova build ios \
    && cordova build android
popd
