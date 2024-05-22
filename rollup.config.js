import fs from 'fs-extra';
import path from 'path';

import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

let entries = [];

// const CORE_DEPENDENCIES_PRIMEVUE = {};

const CORE_DEPENDENCIES = {
  'primevue/avatar': 'primevue.avatar',
  'primevue/avatargroup': 'primevue.avatargroup',
  'primevue/button': 'primevue.button',
  'primevue/breadcrumb': 'primevue.breadcrumb',
  'primevue/carousel': 'primevue.carousel',
  'primevue/card': 'primevue.card',
  'primevue/checkbox': 'primevue.checkbox',
  'primevue/dialog': 'primevue.dialog',
  'primevue/divider': 'primevue.divider',
  'primevue/dropdown': 'primevue.dropdown',
  'primevue/fileupload': 'primevue.fileupload',
  'primevue/inputtext': 'primevue.inputtext',
  'primevue/inputgroup': 'primevue.inputgroup',
  'primevue/inputgroup': 'primevue.inputgroupaddon',
  'primevue/inlinemessage': 'primevue.inlinemessage',
  'primevue/overlaypanel': 'primevue.overlaypanel',
  'primevue/dropdown': 'primevue.dropdown',
  'primevue/overlaypanel': 'primevue.overlaypanel',
  'primevue/panelmenu': 'primevue.panelmenu',
  'primevue/menu': 'primevue.menu',
  'primevue/sidebar': 'primevue.sidebar',
  'primevue/tag': 'primevue.tag',
  'primevue/tabmenu': 'primevue.tabmenu',
  'primevue/tabview': 'primevue/tabview',
  'primevue/textarea': 'primevue.textarea',
  'primevue/togglebutton': 'primevue.togglebutton',

  '@aziontech/webkit/ais': '@aziontech.webkit.ais',
  '@aziontech/webkit/aisdialog': '@aziontech.webkit.aisdialog',
  '@aziontech/webkit/aisindexhit': '@aziontech.webkit.aisindexhit',
  '@aziontech/webkit/bignumbers': '@aziontech.webkit.bignumbers',
  '@aziontech/webkit/cardbase': '@aziontech.webkit.cardbase',
  '@aziontech/webkit/cardbaseclickable': '@aziontech.webkit.cardbaseclickable',
  '@aziontech/webkit/cardblog': '@aziontech.webkit.cardblog',
  '@aziontech/webkit/cardcases': '@aziontech.webkit.cardcases',
  '@aziontech/webkit/cardgridblock': '@aziontech.webkit.cardgridblock',
  '@aziontech/webkit/cardgridlist': '@aziontech.webkit.cardgridlist',
  '@aziontech/webkit/cardgridlistwithloadmore': '@aziontech.webkit.cardgridlistwithloadmore',
  '@aziontech/webkit/contentfeedback': '@aziontech.webkit.contentfeedback',
  '@aziontech/webkit/contentlogo': '@aziontech.webkit.contentlogo',
  '@aziontech/webkit/contentquote': '@aziontech.webkit.contentquote',
  '@aziontech/webkit/contentsection': '@aziontech.webkit.contentsection',
  '@aziontech/webkit/contenttabs': '@aziontech.webkit.contenttabs',
  '@aziontech/webkit/emptystateblock': '@aziontech.webkit.emptystateblock',
  '@aziontech/webkit/errorstateblock': '@aziontech.webkit.errorstateblock',
  '@aziontech/webkit/featuredpost': '@aziontech.webkit.featuredpost',
  '@aziontech/webkit/footer': '@aziontech.webkit.footer',
  '@aziontech/webkit/footersimple': '@aziontech.webkit.footersimple',
  '@aziontech/webkit/formbepartner': '@aziontech.webkit.formbepartner',
  '@aziontech/webkit/formcontactus': '@aziontech.webkit.formcontactus',
  '@aziontech/webkit/formjobapplication': '@aziontech.webkit.formjobapplication',
  '@aziontech/webkit/formblock': '@aziontech.webkit.formblock',
  '@aziontech/webkit/gridbento': '@aziontech.webkit.gridbento',
  '@aziontech/webkit/herobase': '@aziontech.webkit.herobase',
  '@aziontech/webkit/heroblogpost': '@aziontech.webkit.heroblogpost',
  '@aziontech/webkit/keyboardkey': '@aziontech.webkit.keyboardkey',
  '@aziontech/webkit/linkbutton': '@aziontech.webkit.linkbutton',
  '@aziontech/webkit/linkiconbutton': '@aziontech.webkit.linkiconbutton',
  '@aziontech/webkit/newslettercard': '@aziontech.webkit.newslettercard',
  '@aziontech/webkit/newslettersingleLine': '@aziontech.webkit.newslettersingleLine',
  '@aziontech/webkit/newsletterwide': '@aziontech.webkit.newsletterwide',
  '@aziontech/webkit/menunavigationblock': '@aziontech.webkit.menunavigationblock',
  '@aziontech/webkit/readablecontent': '@aziontech.webkit.readablecontent',
  '@aziontech/webkit/selectheme': '@aziontech.webkit.selectheme',
  '@aziontech/webkit/selectlang': '@aziontech.webkit.selectlang',
  '@aziontech/webkit/sharerblock': '@aziontech.webkit.sharerblock',
  '@aziontech/webkit/tabmenu': '@aziontech.webkit.tabmenu',
  '@aziontech/webkit/tabmenuwithsearch': '@aziontech.webkit.tabmenuwithsearch',
  '@aziontech/webkit/tabmenuwithsearchlink': '@aziontech.webkit.tabmenuwithsearchlink',
  '@aziontech/webkit/titlelist': '@aziontech.webkit.titlelist',
  '@aziontech/webkit/themeswitcher': '@aziontech.webkit.themeswitcher',
  '@aziontech/webkit/themeswitcherawareimage': '@aziontech.webkit.themeswitcherawareimage'
};

// dependencies
const GLOBAL_DEPENDENCIES = {
  vue: 'Vue'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
  ...GLOBAL_DEPENDENCIES,
  ...CORE_DEPENDENCIES
};

// externals
const EXTERNAL = [
  'vue',
  'veeValidate',
  'yup',
  'algoliasearch'
];

const EXTERNAL_COMPONENT = [
  ...EXTERNAL,
  ...Object.keys(CORE_DEPENDENCIES)
];

const BABEL_PLUGIN_OPTIONS = {
  extensions: ['.vue'],
  exclude: 'node_modules/**',
  presets: ['@babel/preset-env'],
  plugins: [],
  skipPreflightCheck: true,
  babelHelpers: 'runtime',
  babelrc: false
};

const POSTCSS_PLUGIN_OPTIONS = {
  sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
  compress: {
    keep_infinity: true,
    pure_getters: true,
    reduce_funcs: false
  }
};

const PLUGINS = [
  // resolve(),
  // commonjs(),
  vue(),
  postcss(POSTCSS_PLUGIN_OPTIONS),
  babel(BABEL_PLUGIN_OPTIONS)
];

function addEntry(folder, inFile, outFile) {
  // console.log('folder', folder);
  // console.log('inFile', inFile);
  // console.log('outFile', outFile);
  // console.log('');

  // const exports = inFile === 'PrimeVue.js' || folder === 'passthrough/tailwind' ? 'named' : 'auto';
  const exports = 'auto';
  const plugins = PLUGINS;
  const external = EXTERNAL_COMPONENT;
  const inlineDynamicImports = true;

  const input = `src/templates/${folder}/${inFile}`;
  const output = `dist/${folder}/${outFile}`;

  const getEntry = (isMinify) => {
    return {
      input,
      plugins: [
        ...plugins,
        isMinify && terser(TERSER_PLUGIN_OPTIONS),
        // useCorePlugin && corePlugin()
      ],
      external,
      inlineDynamicImports
    };
  };

  const get_CJS_ESM = (isMinify) => {
    return {
      ...getEntry(isMinify),
      output: [
        {
          format: 'cjs',
          file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
          exports
        },
        {
          format: 'esm',
          file: `${output}.esm${isMinify ? '.min' : ''}.js`,
          exports
        }
      ]
    };
  };

  const get_IIFE = (isMinify) => {
    return {
      ...getEntry(isMinify),
      output: [
        {
          format: 'iife',
          name: 'aziontech.' + folder.replaceAll('/', '.'),
          file: `${output}${isMinify ? '.min' : ''}.js`,
          globals: GLOBAL_COMPONENT_DEPENDENCIES,
          exports
        }
      ]
    };
  };

  entries.push(get_CJS_ESM());
  entries.push(get_IIFE());

  // Minify
  entries.push(get_CJS_ESM(true));
  entries.push(get_IIFE(true));
}

function addSFC() {
  fs.readdirSync(path.resolve(__dirname, './src/templates'), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {

      fs.readdirSync(path.resolve(__dirname, './src/templates/' + folderName)).forEach((file) => {
        let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
        if (/\.vue$/.test(file) && name === folderName) {
          addEntry(folderName, file, name);
        }
      });
    });
}

function addPackageJson() {
  const outputDir = 'dist';
  const packageJson = `{
    "name": "@aziontech/webkit",
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

  !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
  fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson);
}

addSFC();
addPackageJson();

export default entries;
