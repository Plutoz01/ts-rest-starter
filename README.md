# Welcome to ts-rest-starter

Aim of this project is to serve as starter for any future node.js REST API written with Typescript and some other cool stuff.

## Some (but not all ) cool stuff:
1. Dependency Injection with `@Inject` and `@Autowired` decorators. See [typescript-ioc](https://github.com/thiagobustamante/typescript-ioc) for more.
2. Decorator based REST Controllers ( `@Path`, `@GET`, `@POST`, `@PUT`, `@DELETE`... )See [typescript-rest](https://github.com/thiagobustamante/typescript-rest) for more.
3. Swagger ( soon ). See [typescript-rest-swagger](https://github.com/thiagobustamante/typescript-rest-swagger) for more.

# Usage

## Install dependencies
1. (optional, if yarn is not present ) `npm run yarn -g`
2. Run command `yarn`

## Build
Run command `npm run build`

## Start server
Run command `npm run serve`
From now application runs on port 3000 and can serve requests, for example `GET localhost:3000/users`.

# TODO
* Unified error handling
* Tests
* Configurable ( for ex. Port number )
* Errors give back some info based on sourceMap instead of generated js.