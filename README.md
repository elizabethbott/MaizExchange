# MaizExchange

## Project Dependencies

You'll need to install the project dependencies to run it. You'll also need to install the Expo CLI and the Expo Go app on your phone.

### Step 1: Install Expo

To install everything you need to build and run the app, follow the instructions on this page: https://docs.expo.dev/get-started/installation/. This includes installing Node.js and Yarn if you don't have those yet.

You do not need to continue Expo's setup tutorial beyond the linked Installation page.

### Step 2: Install Dependencies

Run the following in the root MaizExchange directory:

```
yarn install
```

This installs all project dependencies to a folder called `node_modules`. Any time someone else in the repository installs a new package and commits `package.json`, you'll need to rerun this command for it to become installed locally, or else you'll get errors about missing modules when running the app.

### Step 3: Build And Run

After completing steps 1 and 2, you've completed the project setup. To build and run the project, enter the following command in the root MaizExchange directory:

```
expo start
```

This should open a tab in your browser showing a set of developer tools. Here you can click on options such as "Run on iOS simulator", "Run in web browser", etc. You can also scan the QR code to open the project in the Expo Go app and use it from your phone, where there are a bunch of helpful developer tools and features such as Hot Reload and element inspection.

If you're having a hard time loading the app on your phone successfully, make sure that your computer and your phone are on the same WiFi network. Alternatively, you can try switching the connection type from "LAN" to "Tunnel" in the browser dev tools and re-scanning the QR code. If your computer has firewalls enabled, you may also need to either disable them or create rules allowing Expo clients to connect.

## Committing To The Repository

### Directory Structure

Here's an overview of the project's directory structure:

```
.
├── App.js          # The app's entry point. Imports ./src/routes to define tab structure
├── app.json        # Defines app metadata, such as name, version, icon, etc.
├── package.json    # Defines app dependencies and startup scripts
├── assets
│   └── ...
└── src             # Stores the rest of the source code for the app
    ├── AppStyle.js     # Defines classes, color palettes, etc. for global styling
    ├── components      # Reusable components that be included in screens or other components
    │   └── ...
    ├── screens         # Contains root-level "screens", such as a Settings screen
    │   └── ...
    └── routes          # Contains navigators that define "routes" through the app
        └── ...
```

In general, things in the `components` folder are imported by things in the `screens` folder, which are imported by things in the `routes` folder. And everything imports `AppStyle.js`. You should be able to read and break down the source code by tracing it as such: `App.js -> routes -> screens -> components`.

### Adding New Packages

If you want to install a new package, add it with `yard add <package-name>` rather than `npm install <package-name>`. You should then commit the changes that are automatically made to both `package.json` and `yarn.lock` - that way, everyone else's project dependencies will be updated and they can install the new package using `yarn install`.