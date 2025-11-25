This is the minimal reproduction repo for Expo EAS Updates issues with NX monorepo.

Currently we did all the fixes discussed previously:
1. @nx/expo  (remove) from metro.config.js
2. compilerOptions.paths (unchanged)
3. package.json[“react-native”]: “src/index.ts"
4. expo.experiments.autolinkingModuleResolution: true

This fixed the error we got while running `eas update` command:
Error: Unable to resolve module @test-eas/utils from
<app-path>/src/main.tsx: @test-eas/utils could not be
found within the project or in these directories:
[expo-cli] ../../node_modules

Now `eas update` command works and publishes an update, but metro is not able to resolve entry file for the app in Debug and Release builds:
<img width="395" height="841" alt="image" src="https://github.com/user-attachments/assets/b99c8edf-f801-434b-83bb-296204ae6c50" />

To run the project:

1. `yarn install`
2. `npx nx sync-deps testEAS`
3. Delete `apps/testEAS/node_modules`
4. `cd apps/testEAS/ios`
5. `pod install`
6. `cd ../../..`
7. `yarn start`
