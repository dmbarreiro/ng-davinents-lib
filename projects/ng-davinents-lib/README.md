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

- `FaInputComponent`: Input component with a font awesome icon preceding the input box.
- `MdInputComponent`: Input component with a material icon preceding the input box.
