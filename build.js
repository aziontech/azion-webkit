const fs = require('fs-extra');
const path = require('path');
const pkg = require('./package.json');
const outDir = './dist';


function fileEndsValidator(f) {
  return f === 'package.json' || f.endsWith('d.ts') || f.endsWith('vue') || f.endsWith('js') || f.endsWith('ts') || f.endsWith('json')
};

function copyDependencies(inFolder, outFolder) {
  const srcFolder = path.resolve(__dirname, inFolder);
  const destFolder = path.resolve(__dirname, outFolder);

  copyDependenciesRecursive(srcFolder, destFolder);
}

function copyDependenciesRecursive(srcDir, destDir) {
  // Ensure the destination directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.readdirSync(srcDir, { withFileTypes: true }).forEach((dirent) => {
    const srcPath = path.join(srcDir, dirent.name);
    const destPath = path.join(destDir, dirent.name);

    if (dirent.isDirectory()) {
      // Recursively copy contents of the directory
      copyDependenciesRecursive(srcPath, destPath);
    } else {
      // Check if the file meets the criteria
      if (fileEndsValidator(dirent.name)) {
        fs.copySync(srcPath, destPath);
        console.log(`${srcPath} ⮕ ${destPath}`);
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
    "description": "azion-webkit is an open source UI library for Vue featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, use UI blocks to build spectacular applications in no time.",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/aziontech/azion-webkit.git"
    },
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/aziontech/azion-webkit/issues"
    },
    "keywords": [
      "primevue",
      "vue",
      "vue.js",
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

console.log('Copying templates...');
copyDependencies('./src/templates/', `${outDir}/`);
copyDependencies('./src/components/', `${outDir}/components`);
copyDependencies('./src/blocks/', `${outDir}/blocks`);

fs.copySync(path.resolve(__dirname, './tailwind.config.js'), `${outDir}/tailwind.config.js`);
fs.copySync(path.resolve(__dirname, './src/assets'), `${outDir}/src/assets`);
fs.copySync(path.resolve(__dirname, './src/services'), `${outDir}/src/services`);
fs.copySync(path.resolve(__dirname, './README.md'), `${outDir}/README.md`);
fs.copySync(path.resolve(__dirname, './LICENSE'), `${outDir}/LICENSE`);
fs.copySync(path.resolve(__dirname, './.releaserc'), `${outDir}/.releaserc`);
fs.copySync(path.resolve(__dirname, './.gitignore'), `${outDir}/.gitignore`);
