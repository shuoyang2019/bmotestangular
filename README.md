# BMOTestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

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

Below is info from Shuo Yang.

This project is for BMO test and it provides front end part.

It use Angular 8, and use http client to call service provided with https://github.com/shuoyang2019/bmotestbackendapi.git.

To use that, please use git clone to download that to your computer, then start that.

When you start that, you should get a web page with below info:

Welcome to BMO Test Angular!
Author: Shuo Yang

Then you will find a button with 'Person List', click that, you will get three parts:
1. filter for first name and last name. 
2. button for reset to get original person list.
3. current data for the person list, for each person, you can find first name and last name.

When you type in filter in either first name field or last name field, you will find in part 3, content changed. Then you can use the button in part 2 to re-get the original person list from the service provider, with that you can continue your test.

That's all.
