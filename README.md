[![Moleculer logo](http://moleculer.services/images/banner.png)](https://github.com/moleculerjs/moleculer)

<br>

🚀 Deploy your [Moleculer](https://moleculer.services/) microservices to multiple [Heroku](https://heroku.com) apps. 

[![NPM version](https://img.shields.io/npm/v/@codeyard/heroculer.svg)](https://www.npmjs.com/package/@codeyard/heroculer)



<br>

# Install

```bash
$ npm install @codeyard/heroculer --save
```

<br>

# Usage

## Initialize remote repositories with your heroculer.yml config file

```bash
$ heroculer init -f heroculer.yml
```

<br>

## heroculer.yml

```yml
version: "1.0"

services:
  - api:
      app_name: heroculer-demo-api
      env_file: demo.env
      environment:
        - SERVICES: api
        - SERVICEDIR: services
        - PORT: 80
        - TRANSPORTER: <TRANSPORTER_LINK>
      processes:
        - web: 1
  - products:
      app_name: heroculer-demo-products
      env_file: demo.env
      environment:
        - SERVICES: products
        - SERVICEDIR: services
        - PORT: 3000
        - TRANSPORTER: <TRANSPORTER_LINK>
      processes:
        - web: 0
        - worker: 1
  - greeter:
      app_name: heroculer-demo-greeter
      env_file: demo.env
      environment:
        - SERVICES: greeter
        - SERVICEDIR: services
        - PORT: 3000
        - TRANSPORTER: <TRANSPORTER_LINK>
      processes:
        - web: 0
        - worker: 1
```

<br>

### Important notes

<br>

> Use *SERVICES* environment variable to manage which microservice should run inside your Heroku application. 

<br>

# License

The project is available under the [MIT license](./LICENSE).

# Contact

Copyright (c) 2016-2019 MoleculerJS

[![@moleculerjs](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)