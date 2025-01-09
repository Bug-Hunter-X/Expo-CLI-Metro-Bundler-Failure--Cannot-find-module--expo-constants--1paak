The solution was found to be a combination of clearing the cache and reinstalling the packages.  Here are the steps to resolve the issue:

1. **Clear the Expo cache:**
   ```bash
expo prebuild --clean
```
2. **Clear the npm or yarn cache:** (Optional but can help)
   ```bash
npm cache clean --force  // or yarn cache clean
```
3. **Reinstall dependencies:**
   ```bash
npm install  // or yarn install
```
4. **Restart Expo:**
    ```bash
expo start
```

By clearing the cache, Expo is forced to rebuild its environment, resolving the dependency conflicts and allowing the Metro bundler to find 'expo-constants' correctly. Reinstalling dependencies helps ensure everything is up to date.  Sometimes, updating Expo Go to the latest version also aids in resolving the issue.