# Introduction

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/mgechev/angular-seed.svg?branch=master)](https://travis-ci.org/mgechev/angular-seed)
[![Build Status](https://ci.appveyor.com/api/projects/status/jg5vg36w0klpa00e/branch/master?svg=true)](https://ci.appveyor.com/project/mgechev/angular2-seed)
[![Join the chat at https://gitter.im/mgechev/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mgechev/angular2-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/mgechev/angular-seed.svg)](https://david-dm.org/mgechev/angular-seed)
[![devDependency Status](https://david-dm.org/mgechev/angular-seed/dev-status.svg)](https://david-dm.org/mgechev/angular-seed#info=devDependencies)

Provides fast, reliable and extensible starter for the development of Angular projects.

`angular-seed` provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Supports multiple Angular applications with shared codebase in a single instance of the seed.
- Official Angular i18n support.
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- **Ahead-of-Time** compilation support.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using @types.
- Has autoprefixer and css-lint support.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start the seed use:


```bash
$ git clone --depth 1 https://github.com/mgechev/angular-seed.git
$ cd angular-seed

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start
# api document for the app
# npm run build.docs

# to start deving with livereload site and coverage as well as continuous testing
$ npm run start.deving

# dev build
$ npm run build.dev
# prod build
$ npm run build.prod
# prod build with AoT compilation
$ npm run build.prod.exp

# dev build of multiple applications (by default the value of --app is "app")
$ npm start -- --app baz
$ npm start -- --app foo
$ npm start -- --app bar
```

_Does not rely on any global dependencies._

# Table of Contents

- [Introduction](#introduction)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Environment Configuration](#environment-configuration)
- [Tools documentation](#tools-documentation)
- [How to extend?](#how-to-extend)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Advanced Seed Option](#advanced-seed-option)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [Contributors](#contributors)
  - [Wiki Contributors](#wiki-contributors)
- [Change Log](#change-log)
- [License](#license)

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
$ npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# How to extend?

Visit the [Wiki page](https://github.com/mgechev/angular-seed/wiki) of the project.

# How to update?
```
git remote add upstream https://github.com/mgechev/angular2-seed
git pull upstream master
```

# Running tests

```bash
$ npm test

# Development. Your app will be watched by karma
# on each change all your specs will be executed.
$ npm run test.watch
# NB: The command above might fail with a "EMFILE: too many open files" error.
# Some OS have a small limit of opened file descriptors (256) by default
# and will result in the EMFILE error.
# You can raise the maximum of file descriptors by running the command below:
$ ulimit -n 10480


# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
$ npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor
# Make sure you do have Java in your PATH (required for webdriver)

# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
$ npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular-seed/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# Advanced Seed Option

An [advanced option to this seed exists here](https://github.com/NathanWalker/angular-seed-advanced) which mirrors the latest changes here but adds core support for:

- [ngrx/store](https://github.com/ngrx/store) RxJS powered state management, inspired by **Redux**
- [ngrx/effects](https://github.com/ngrx/effects) Side effect model for @ngrx/store
- [ng2-translate](https://github.com/ocombe/ng2-translate) for i18n
  - Usage is optional but on by default
  - Up to you and your team how you want to utilize it. It can be easily removed if not needed.
- [angulartics2](https://github.com/angulartics/angulartics2) Vendor-agnostic analytics for Angular applications.
  - Out of box support for [Segment](https://segment.com/)
    - When using the seed, be sure to change your `write_key` [here](https://github.com/NathanWalker/angular-seed-advanced/blob/master/src/client/index.html#L24)
  - Can be changed to any vendor, [learn more here](https://github.com/angulartics/angulartics2#supported-providers)
- [lodash](https://lodash.com/) Helps reduce blocks of code down to single lines and enhances readability
- [NativeScript](https://www.nativescript.org/) cross platform mobile (w/ native UI) apps. [Setup instructions here](#nativescript-app).
- [Electron](http://electron.atom.io/) cross platform desktop apps (Mac, Windows and Linux). [Setup instructions here](#electron-app).

You may use it to learn how to extend this seed for your own use cases or use the advanced seed if your project needs those features.

# Examples

Forks of this project demonstrate how to extend and integrate with other libraries:

 - https://github.com/mgechev/switching-to-angular2 - code samples for the book ["Switching to Angular 2"](https://www.packtpub.com/web-development/switching-angular-2).
 - https://github.com/DeviantJS/angular2-seed-postcss - Extending PostCSS with precss / cssnext for Sass-like features.
 - https://github.com/DeviantJS/angular2-seed-material2 - integration with [Angular2-Material](https://github.com/angular/material2).
 - https://github.com/AngularShowcase/angular2-sample-app - sample Angular application.
 - https://github.com/AngularShowcase/ng2-bootstrap-sbadmin - ng2-bootstrap-sbadmin.
 - https://github.com/AngularShowcase/angular2-seed-ng2-highcharts - Simple application including a [Highcharts](http://www.highcharts.com) graph.
 - https://github.com/tarlepp/angular-sailsjs-boilerplate-frontend-angular2 - Example application for [Sails.js](http://sailsjs.org/) integration.
 - https://github.com/ludohenin/ng2-wp-blog - Angular application using Wordpress [JSON-API](http://v2.wp-api.org) backend..
 - https://github.com/AngularShowcase/angular2-seed-example-mashup - Angular application demonstrating the use of [Redux](http://redux.js.org/), [D3](https://github.com/mbostock/d3), [socket io](https://github.com/socketio), [Google Charts](https://developers.google.com/chart/), and [RxJs](https://github.com/Reactive-Extensions/RxJS).
 - https://github.com/tiagomapmarques/angular2-seed-phaser/tree/releases - integration with [Phaser](http://phaser.io/).
 - https://github.com/vyakymenko/angular2-seed-express - integration with [Express](https://expressjs.com/) full-stack development.
 - https://github.com/UIUXEngineering/angular2-jspm-typescript-seed - integration with [JSPM](http://jspm.io/).

