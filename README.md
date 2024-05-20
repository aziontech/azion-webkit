<h1 align="center">
  Webkit
</h1>

<p align="center">
  <img src="./doc/images/cover.png" alt="Cover @aziontech/webkit repository"/>
</p>

<p align="center">
  The @aziontech/webkit project is the better way to develop/create/update an app, page, landing to the company front-end necessities.
</p>

## HOW TO INSTALL

### Credentials
If you are Azion internal contributor and the project It isn't not opened,
you need to configure the `.npmrc` file with the your `Personal Access Token`.

**E.G:**
On your file `~/.npmrc` you need the below configuration:

``` bash
//registry=https://npm.pkg.github/aziontech=true
//npm.pkg.github.com/:_authToken=ghp_SprUskNOYknOQWEDJ02qFX1gB5zeaEd3GTIrs
@aziontech:registry=https://npm.pkg.github.com/
```

> Don't forget to replace the `_classic access token` value param. The currently value is an E.G;

### HOW TO USE

``` bash
npm install @aziontech/azion-web-kit
```
or add in the package.json file inside your project in the dependencies key.

``` json
{
  "dependencies": {
    "@aziontech/webkit": "2.0.0",
    ....
  }
}
```


## Folder Structure

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

Live URL: https://z4azz7gp65.map.azionedge.net/storybook-static/

``` javascript
npm run storybook
npm run build-storybook
```

Probabily will enable a url: `http://localhost:6006` or `6007` if before not available;

