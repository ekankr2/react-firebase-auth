# React-ts-Firebase-CRUD

```
a template for Firebase Auth and CRUD with React-ts
```

## Table of Contents

<!-- To update this table of contents, ensure you have run `npm install` then `npm run doctoc` -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting started](#Getting-started)
- [Tech Stack](#tech-stack)
    - [Languages](#Languages)
    - [Core](#core)
- [Documentation](#documentation)
- [Demo](#demo)
- [Contributors](#contributors)
- [License](#license)

# Getting started

Clone or download the files

Create new firebase project at [firebase](https://console.firebase.google.com/)

Create .env file and add firebase config object property values to env variables

Check src/firebase/config.ts file to name them properly

Then run `npm i` inside project root folder and after that `npm start`

## Tech Stack

###  Languages:
<p align="center">

<img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="typescript" height="40" style="vertical-align:top; margin:4px">

<img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react" height="40" style="vertical-align:top; margin:4px"/>

<img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="firebase" height="40" style="vertical-align:top; margin:4px"/>
</p>

### Core

- [Create React App](https://github.com/facebook/create-react-app) (★ 76.5k) this project was bootstrapped with create react app (see [user guide](https://create-react-app.dev/docs/getting-started)).
- [Bulma](https://bulma.io/) (★ 38.7k) CSS framework to reduce development time and have a nice UI.
- [Redux](https://redux.js.org/) (★ 52.4k) for in-app state management (see [docs](https://redux.js.org/introduction/getting-started)).
- [React-redux](https://react-redux.js.org/) (★ 19k) official react bindings for redux (see [docs](https://react-redux.js.org/introduction/quick-start)).
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) (★ 14.1k) redux [middleware](https://redux.js.org/advanced/middleware) for asynchronous actions.
- [React-router](https://github.com/ReactTraining/react-router) (★ 39.6k) declarative routing for React.
- [Firebase](https://firebase.google.com/) for serverless architecture - CDN Hosting, Realtime Database, Authentication, Storage and Cloud Functions (see [docs](https://firebase.google.com/docs/web)).
- [cross-env](https://github.com/kentcdodds/cross-env) (★ 4.9k) run scripts that set and use environment variables across platforms (see [docs](https://www.npmjs.com/package/cross-env)).

##  Demo

* **Demo: [Demo Link][Demo]**

[//]: # (  [Demo]: https://esvfront.web.app/)

## Documentation

<ul>
  <li><a href="https://docs.react-firebase.com/">Introduction</a></li>
    <li><a href="https://docs.react-firebase.com/getting-started">Getting Started</a></li>
    <li><a href="https://docs.react-firebase.com/getting-started#react-frontend">React Frontend</a></li>
    <li><a href="https://docs.react-firebase.com/getting-started/cloud-functions">Cloud Functions</a></li>
    <li><a href="https://docs.react-firebase.com/getting-started/continuous-integration-deployment">CI/CD</a></li>
    <li><a href="https://docs.react-firebase.com/features/database-interface">Database Selection</a></li>
    <li><a href="https://docs.react-firebase.com/features/internationalization">Internationalization</a></li>
    <li><a href="https://docs.react-firebase.com/features/file-upload">File Upload</a></li>
    <li><a href="https://docs.react-firebase.com/features/social-media-authentication">Social Media Authentication</a></li>
</ul>

## Contributors

<ul>
  <li><a href="https://github.com/ekankr2">Ikhwan Im</a></li>
</ul>

## Issues

### Redux routing problem
* route push happens before create request
    * reason & solve
        * [Korean](https://blog.naver.com/ekankr2/222601191432)
    * what I learned
        * Redux is useful when making submit loading page because components can share a common state


## Licence

[![license: MIT](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/CreateThrive/react-firebase-admin/blob/feature/badges-rename-workflows/LICENSE.md)
