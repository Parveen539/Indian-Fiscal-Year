>Easily convert the Date to Fiscal Year for India

## Features  
- Get Indian Fiscal Year and Crop Season for a date.
- 773b minified/420b gzipped
- No Dependencies.
- Built with Typescript.

## Install  
#### NPM 

```bash
$ npm install indian-fiscal-year 
``` 

## Usage
if you are using a module loader you will need to import the module.  

```js
import FinYear from 'indian-fiscal-year';
```
## Get Finance Year  

## Input
```js
let date = new Date()
let ify = FinYear.IndianFiscalYear(date);
```

## Output
```js
ify = 2024-2025
```

## Get Indian Crop Season
## Input
```js
let date = new Date()
let icy = FinYear.IndianCropSeasons(date);
```

## Output
```js
icy = "Kharif" / "Rabi"
```


For Bug Reports please use [issues section] (https://github.com/Parveen539/Indian-Fiscal-Year/issues).