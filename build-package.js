const fs = require('fs-extra');
const path = require('path');
const pkg = require('./package.json');
const outDir = './dist';


function fileEndsValidator(f) {
  return f === 'package.json' || f.endsWith('d.ts') || f.endsWith('vue') || f.endsWith('js')
};

function copyDependencies(inFolder, outFolder, subFolder) {
  const folder = path.resolve(__dirname, inFolder);

  fs.readdirSync(folder, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
      const dirname = path.resolve(__dirname, inFolder + folderName);
      console.log(`\nReading dir: ${dirname}`);

      fs.readdirSync(dirname).forEach((file) => {
        if (fileEndsValidator(file)) {
          const inputFilePath = path.resolve(__dirname, inFolder + folderName) + '/' + file;
          const outputFilePath = outFolder + folderName + '/' + file;

          fs.copySync(inputFilePath, outputFilePath);
          console.log(`${inputFilePath} ⮕ ${outputFilePath}`);
        }
      });

      if (subFolder) {
        try {
          let subfolder = path.resolve(__dirname, inFolder + folderName + subFolder);
          console.log(`\nReading dir: ${subfolder}`);

          fs.readdirSync(subfolder).forEach((subFile) => {
            if (fileEndsValidator(subFile)) {
              const inputFile = path.resolve(__dirname, inFolder + folderName + subFolder) + '/' + subFile;
              const outputFile = outFolder + folderName + subFolder + '/' + subFile;

              fs.copySync(inputFile, outputFile);
              console.log(`${inputFile} ⮕ ${outputFile}`);
            }
          });
        } catch(error) {
          console.log(error);
        }
      }
    });
}

function addPackageJson() {
  const filename = 'package.json';
  const packageJson = `{
    "name": "${pkg.name}",
    "version": "${pkg.version}",
    "private": false,
    "description": "@aziontech/webkit is an open source UI library for Vue featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, use UI blocks to build spectacular applications in no time.",
    "repository": {
        "type": "git",
        "url": "https://github.com/aziontech/webkit.git"
    },
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/aziontech/webkit/issues"
    },
    "publishConfig": {
      "registry": "https://npm.pkg.github.com/"
    },
    "keywords": [
        "primevue",
        "vue",
        "vue.js",
        "vue2",
        "vue3",
        "ui library",
        "component library",
        "material",
        "bootstrap",
        "fluent",
        "tailwind",
        "unstyled",
        "passthrough"
    ],
    "peerDependencies": {
      "vue": "^3.0.0"
    }
  }`;

  !fs.existsSync(outDir) && fs.mkdirSync(outDir);
  console.log(`Writting ${filename} into ${outDir}`);
  fs.writeFileSync(path.resolve(outDir, filename), packageJson);
}

addPackageJson();
copyDependencies('./src/templates/', `${outDir}/`);
fs.copySync(path.resolve(__dirname, './src/assets'), `${outDir}/src/assets`);
fs.copySync(path.resolve(__dirname, './src/services'), `${outDir}/src/services`);
fs.copySync(path.resolve(__dirname, './README.md'), `${outDir}/README.md`);
fs.copySync(path.resolve(__dirname, './LICENSE'), `${outDir}/LICENSE`);
