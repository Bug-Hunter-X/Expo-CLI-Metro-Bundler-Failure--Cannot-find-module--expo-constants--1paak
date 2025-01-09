# Expo CLI Metro Bundler Failure: Cannot find module 'expo-constants'

This repository demonstrates a bug where the Expo CLI's Metro bundler fails to start, reporting that it cannot find the module 'expo-constants', even though the module is listed as a dependency in package.json.  The issue seems related to inconsistencies between the Expo Go app version, Expo CLI version, and the project's dependencies.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run `expo start`.

The Metro bundler will fail to start, and you'll see the error message in the console.

## Solution

The solution involves clearing the Expo cache and ensuring all dependencies are correctly installed. See the `bugSolution.js` file for a detailed breakdown of the fix.