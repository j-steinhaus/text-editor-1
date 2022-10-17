# Text-Editor
A Text Editor App using Progressive Web Application(PWA).

## Table of Contents

1. [Descriptions](#descriptions)
2. [Installations](#installations)
3. [Tech Use](#techUse)
5. [Visuals](#visuals)
4. [Contributions](#contributions)
6. [References](#references)
7. [Web Deployment](#webDeployment)
8. [Connect With Me](#connectWithMe)


## Descriptions
This is a single-page application features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline. 

## Installations
This app required the following installations.

CodeMirror Themes: is an online editor.
```pip
  npm i code-mirror-themes
```

Express.js: Fast, unopinionated, minimalist web framework for Node.js.
```pip
 npm install express
```

idb: A small wrapper that makes indexedDB usable. IndexedDB is a database that is built into a browser, much more powerful than localStorage . 
```pip
  npm i idb
```

if-env: to simplify development and be able to run npm start in all environments & run the correct scripts.
```pip
  npm install if-env --save
```

Concurrently: is an npm package that allows you to run multiple commands inside the same terminal.
```pip
  npm install concurrently --save
```

Babel loader: This package allows transpiling JavaScript files using Babel and webpack.
```pip
  npm install -D babel-loader @babel/core @babel/preset-env webpack
```

css-loader: The css-loader interprets @import and url() like import/require() and will resolve them.
```pip
  npm install --save-dev css-loader
```

style-loader: Inject CSS into the DOM.
```pip
  npm install --save-dev style-loader
```

html-webpack-plugin: This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
```pip
  npm i --save-dev html-webpack-plugin
```

http-server: is a simple, zero-configuration command-line static HTTP server.
```pip
  npm install http-server
```

Webpack: is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser
```pip
  npm install --save-dev webpack
```

webpack-CLI: webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project.
```pip
 npm install --save-dev webpack-cli
``` 

webpack-dev-server: Use webpack with a development server that provides live reloading. This should be used for development only.
```pip
  npm install webpack-dev-server --save-dev
```

webpack-pwa-manifest: is a webpack plugin that generates a 'manifest.json' for your Progressive Web Application, with auto icon resizing and fingerprinting support.

```pip
  npm install --save-dev webpack-pwa-manifest
```

workbox-webpack-plugin: Workbox provides two webpack plugins: one that generates a complete service worker for you and one that generates a list of assets to precache that is injected into a service worker file.

```pip
  npm i workbox-webpack-plugin
```

## Tech Use
  * IndexedDB
  * Express
  * JavaScript
  * Service Worker
  * WebpackPwaManifest Plugins
  * Heroku

## Visuals

The application's manifest.json file:

![manifest](./images/manifest.png)

The application's registered service worker:

![service-worker](./images/service-worker.png)

The application's IndeedDB storage:

![IndexDB](./images/IndexDB.png)

The application can be used offline:

![Offline](./images/Offline.png)

The app can be used on the browser or as a stand-alone app:

![install](./images/install.png)

![app-version](./images/app-version.png)





## Contributions

 * Mr.Anthony Cooper
 * Slack Support Team

## References
    
  * https://www.npmjs.com/
  * https://www.rockyourcode.com/javascript-development-run-concurrently/


## Web Deployment
  [Heroku](https://frozen-escarpment-36395.herokuapp.com/)


## Connect With me
[LinkedIn](https://www.linkedin.com/in/sasima-patterson-866a441b7/)



