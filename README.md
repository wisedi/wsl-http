# WSL HTTP ![build](https://travis-ci.org/juangamonal/ts-app-template.svg?branch=master)

A simple TypeScript application template

## Table of contents

- [Contains](#contains)
- [Instalation](#instalation)
- [Available commands](#available-commands)

## Contains

- [TSLint](https://github.com/palantir/tslint)
- [TypeDoc](https://github.com/TypeStrong/typedoc)
- [Mocha](https://github.com/mochajs/mocha) & [Chai](https://github.com/chaijs/chai)

## Instalation

```sh
git clone https://github.com/juangamonal/ts-application-template app-name
cd app-name
npm install     # or yarn install
```

## Available commands

```sh
npm run build   # transpile app
npm run docs    # generate docs for your app
npm run lint    # run linter, add --fix flag for fix linting errors
npm run test    # run unit tests, uses Mocha and Chai
npm run watch   # watch any change, for development
```
