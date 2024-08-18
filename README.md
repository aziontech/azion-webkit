<h1 align="center">azion-webkit</h1>

![production](https://github.com/aziontech/azion-webkit/actions/workflows/release.yml/badge.svg)
![storybook production](https://github.com/aziontech/azion-webkit/actions/workflows/storybook.yml/badge.svg)

<p align="center">
  <img src="./doc/images/cover.png" alt="Cover @aziontech/webkit repository"/>
</p>

> Package azion-web-kit deprecated
> Package @aziontech/webkit deprecated

<p align="center">
  The azion-webkit project is the best way to develop, create and update an app, page, and other Front-End necessities.
</p>

## HOW TO INSTALL

[To Do]

### HOW TO USE

``` bash
npm install azion-webkit
```
or add in the package.json file inside your project in the dependencies key.

``` json
{
  "dependencies": {
    "azion-webkit": "ˆ1.35.4",
    ....
  }
}
```


## Folder Structure

To Do

**./src/**
- **index.js:**
  -  where all templates blocks or components are exported;
- **helpers:**
  -  is an utils functions/methods/class that will be used to abstract something;
- **mock:**
    - to create the specific components params value to be used in the views examples during development;
- **stories:**
    - to import and enable the component visualization in the Storybook in a sort format;
- **templates:**
    - to code the blocks used to build the apps/pages;
- **views:**
    - to mount an organized visible gallery of blocks, pages, and components available;


## Storybook
We are using Storybook to organize our template blocks components.

``` javascript
npm run storybook
npm run build:storybook
```

Probabily will enable a url: `http://localhost:6006` or `6007` if before not available;

