#Refreshes the local install for cordova plugin
#Only used for testing purposes
cordova plugin remove beco-cordova-plugin
cordova plugin add https://github.com/becoinc/beco_cordova_sdk.git
cordova build
