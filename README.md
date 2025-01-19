>Easily convert the Date to Fiscal Year for India

## Features  
- Get Indian Fiscal Year for a date.
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

## Indian Fiscal Year  
```js
import FinYear from 'indian-fiscal-year';
```

## Input
```js
let date = new Date();
let ify = FinYear.IndianFiscalYear(date);
```

## Output
```js
ify = 2024-2025
```
## Indian Crop Seasons  
```js
import FinYear from 'indian-fiscal-year';
```

## Input
```js
let date = new Date();
let ics = FinYear.IndianCropSeason(date);
```

## Output
```js
ics = "Kharif" / "Rabi"
```

For Bug Reports please use [issues section] 