# WebGL JavaScript Starter 

This is a simple starter pack for non-js programmers or juniors. With it you can make webgl shaders and mint archived build at https://hicatnunc.xyz.

## Install

You need to Node.js and Git already installed in your system.

1. Clone this project:

```
> git clone https://github.com/zmnv/webgl-js-starter <new-project-folder-name> 
> cd <new-project-folder-name>
```

2. Install node modules:

```
npm i
```

## How to use

Just run `npm start` to development and `npm run build` to build production archive.

```
> npm start         Start development server (host is localhost).
> npm start:local   Start development server (host is local network ip).
> npm lint          Check syntax.
> npm run build     Build production files and archive.
```


## What's inside?

* [**Hot Reloading**](#hot)

* [**Javascript Modules**](#modules) 

* [**Syntax Checker**](#syntax)

* [**Hicatnunc Prepared**](#hen)


<a name="hot"><h3>Hot Reloading</h3></a>

This project contains already configured [Webpack]() and [Webpack Dev Server](). This is the tools to provide realtime development and production builds.

<a name="modules"><h3>Javascript Modules</h3></a>

Your JS modules aliases. You can import from '@name/file' instead of '../../../../file'. If you don't need this you can do nothing or just comment some code in `config/` 

<a name="syntax"><h3>Syntax Checker</h3></a>

This is not required but very useful tool. You can get more information in the official [ESlint documentation]().

<a name="hen"><h2>Hicatnunc Prepared</h2></a>

### Shader Tempalte

This starter pack based on [Hicetnunc Shader Template](https://github.com/hicetnunc2000/hicetnunc/tree/main/templates/html-shader-template). Thanks!



### Development Environment

There are simulated `creator` and `viewer` variables in the development mode. Please check `.env` file and write as you need. Remember that hicatnunc returns stringed 'false' value if viewer is not synced.

**.env**
```
HEN_CREATOR=tz777
HEN_VIEWER=false
```

Then you can use `window.hen.creator` or `window.hen.viewer` anywhere.



### Archive Build

After production build was done via `npm run build` it will be automatically archived to `/archive/archive.zip`. So you can just upload this to [hicatnunc mint page](https://www.hicetnunc.xyz/mint).

You can change output archive name in `/config/archiveBuildToZip.js` file:
```js
const outputFilePath = Path.resolve(sourcePath, 'archive.zip');
```
