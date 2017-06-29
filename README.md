# Beco Cordova SDK Examples
Example apps for iOS and Android using the Beco Cordova SDK. Main SDK repository and User's Guide located at [https://github.com/becoinc/beco_cordova_sdk](https://github.com/becoinc/beco_cordova_sdk).

### Instructions
The steps to run the examples included in this repository are as follows:

*1.* Insert your SDK Credentials into `www/js/index.js`, the root javascript file for the project you would like to run.

*2.* To retain a clean repository, we have not included preconfigured platform-specific project files. Add Android and/or iOS platforms by running `cordova platform add ios` and `cordova platform add android` in the root folder of the example you'd like to configure.

*3.* After cordova builds the platform projects, you must configure the projects by following the instructions in the [iOS Project Configuration](https://github.com/becoinc/beco_cordova_sdk#ios-project-configuration) and [Android Project Configuration](https://github.com/becoinc/beco_cordova_sdk#android-project-configuration) sections on the Cordova SDK's User Guide.

*4.* Open the platform-specific project for the platform you are testing on, and build/run the project on a device with bluetooth capabilities and a space with beacons configured.

### Main Example
The main example is in the `example` directory.
Once you build and run the example application on a phone and configure your Beco Beacons in your space, you should be able to walk around the space and view realtime location data. This example demonstrates error logging capabilities and uses all of the events that the SDK provides, and is intended as a starting point for building an application with the Beco Cordova SDK.

#### Screenshots
![Screenshot 1](https://raw.githubusercontent.com/becoinc/beco_cordova_examples/master/readme-images/screenshot-1.PNG) ![Screenshot 2](https://raw.githubusercontent.com/becoinc/beco_cordova_examples/master/readme-images/screenshot-2.PNG)

### Minimal Example
A second example is in the `minimal` directory. This example demonstrates the bare minimum required to get location polling working with the Beco Cordova SDK. This example contains no error checking or logging.

#### Screenshots
![Screenshot 5](https://raw.githubusercontent.com/becoinc/beco_cordova_examples/master/readme-images/screenshot-5.PNG) ![Screenshot 6](https://raw.githubusercontent.com/becoinc/beco_cordova_examples/master/readme-images/screenshot-6.PNG)

### Kitchen Example
The third example, in the `kitchen` directory, consists of a minimal program that will display a "Yes/No" text based on whether the user is in a place with a `placeName` of `Kitchen`.

This demonstrates a simple (albeit contrived) usage of location data by checking the object data returned by the `onReceiveLocationData` event.

#### Screenshots

![Screenshot 3](https://raw.githubusercontent.com/becoinc/beco_cordova_examples/master/readme-images/screenshot-3.PNG) ![Screenshot 4](https://raw.githubusercontent.com/becoinc/beco_cordova_examples/master/readme-images/screenshot-4.PNG)

## Appendix
#### License

This document, the Beco Cordova SDK and the included sample application are subject to the Beco SDK license agreement. A copy of this agreement is available at https://www.beco.io/sdk-license-agreement.pdf, and has been included in this repository in `LICENSE.md`.

#### Export Statement
You understand that the Software may contain cryptographic functions that may be subject to export restrictions, and you represent and warrant that you are not located in a country that is subject to United States export restriction or embargo, including Cuba, Iran, North Korea, Sudan, Syria or the Crimea region, and that you are not on the Department of Commerce list of Denied Persons, Unverified Parties, or affiliated with a Restricted Entity.

You agree to comply with all export, re-export and import restrictions and regulations of the Department of Commerce or other agency or authority of the United States or other applicable countries. You also agree not to transfer, or authorize the transfer of, directly or indirectly, the Software to any prohibited country, including Cuba, Iran, North Korea, Sudan, Syria or the Crimea region, or to any person or organization on or affiliated with the Department of
Commerce lists of Denied Persons, Unverified Parties or Restricted Entities, or otherwise in violation of any such restrictions or regulations.
