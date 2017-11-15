#!/bin/bash

ionic cordova platform remove android
ionic cordova platform add android

sed -i 's/play-services-auth:+/play-services-auth:11.0.1/g' platforms/android/project.properties
sed -i 's/play-services-identity:+/play-services-identity:11.0.1/g' platforms/android/project.properties

cp google-services.json platforms/android

ionic cordova run android
