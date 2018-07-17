# generator-jhipster-ant-design
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster blueprint, Ant design system blueprint for JHipster client

# Introduction

This is a [JHipster](http://jhipster.github.io/) blueprint, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-ant-design
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-ant-design
```

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-ant-design
```

To update this blueprint:

```bash
npm update -g generator-jhipster-ant-design
```

# Usage

To use this blueprint, run the below command

```bash
jhipster --blueprint ant-design
```


## Running local Blueprint version for development

During development of blueprint, please note the below steps. They are very important.

1. Link your blueprint globally 

Note: If you do not want to link the blueprint(step 3) to each project being created, use NPM instead of Yarn as yeoman doesn't seem to fetch globally linked Yarn modules. On the other hand, this means you have to use NPM in all the below steps as well.

```bash
cd ant-design
npm link
```

2. Link a development version of JHipster to your blueprint (optional: required only if you want to use a non-released JHipster version, like the master branch or your own custom fork)

You could also use Yarn for this if you prefer

```bash
cd generator-jhipster
npm link

cd ant-design
npm link generator-jhipster
```

3. Create a new folder for the app to be generated and link JHipster and your blueprint there

```bash
mkdir my-app && cd my-app

npm link generator-jhipster-ant-design
npm link generator-jhipster (Optional: Needed only if you are using a non-released JHipster version)

jhipster -d --blueprint ant-design

```

# License

MIT © [Chiho Sin](https://github.com/chihosin)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-ant-design.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-ant-design
[travis-image]: https://travis-ci.org/chihosin/generator-jhipster-ant-design.svg?branch=master
[travis-url]: https://travis-ci.org/chihosin/generator-jhipster-ant-design
[daviddm-image]: https://david-dm.org/chihosin/generator-jhipster-ant-design.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/chihosin/generator-jhipster-ant-design
