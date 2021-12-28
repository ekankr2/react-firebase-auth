# React-ts-Firebase-CRUD

```
React ⚛️ Typescript starter kit with Firebase 🔥 and Bulma for setting up auth and CRUD template
```

## Table of Contents

- [Getting started](#Getting started)
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

* **Demo: [Demo Link][Planning...]**

[//]: # (  [Demo]: https://esvfront.web.app/)

## Documentation
<!--
<ul>
  <li><a href="https://docs.react-firebase.com/">Introduction</a></li>
    <li><a href="https://docs.react-firebase.com/getting-started">Getting Started</a></li>
</ul>
-->

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
