# NgDavinentsLib

Contains davinents Angular component library and a test project where the library is used, both can be found under `projects` folder.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Install

To install the library using npm:

```
npm install ng-davinents-lib
```

For some components (like `FaInputComponent` or `MdInputComponent`) that use icons, you need to import [Font-Awesome](https://fontawesome.com/icons?d=gallery) or [Material Icons](https://material.io/resources/icons/?style=baseline) in your base `index.html`.

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```

Skip the above and install the icons in your environment if you prefer to have then locally.

## Component list

- `FaInputComponent`: Input component with a font awesome icon preceding the input box. You need to import `InputReferenceDirective` to make this component work properly. Check example app.
- `MdInputComponent`: Input component with a material icon preceding the input box. You need to import `InputReferenceDirective` to make this component work properly. Check example app.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build ng-davinents-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Take into account it will run the tests for both projects by default.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
