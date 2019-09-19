# AngularUsers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Some words on the project

This project is an Angular client side code intended to use this API:
https://github.com/shemerdog/api-skeleton/tree/mysql-master
(It is a Koa server backed by MySql database.)

The project itself is written in Angular 8 and tries to create some interface to control users.
Create (Not implemented yet), Read, Update and Delete (CRUD)
Since this is my first time writing something in Angular, I assume there is much to improve.
Material is used as the design "framework"

The project is pretty straight forward and has mainly only one component.
All other components just serve the main one for users viewing and editing.
As I wanted to experience different aspects of an Angular application -
There are way too many pages than needed:

Home page only refers to users page;
User page shows users and their privileges as required by the main task description;
Privileges page shows available privileges list with their server name and id;
Last page shows the same users and privileges pages but in a "tabs" UI form;
(All pages are really needed buy justifies a routing mechanism that's all);

There are 2 services in use to fetch data from the API - User and Privileges services.
Also, implemented some intermidiate service to allow "snack-bar" messages from different areas in the app;

Next actions required:
* New user creation.
* Updating user privileges.
* TESTS! there are not tests at all.
* Error handling - mostly from faulty HTTP calls