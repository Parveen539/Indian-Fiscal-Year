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
import {FY} from 'indian-fiscal-year';
```

## Input
```js
let date = new Date();
let ify = FY(date);
```

## Output
```js
ify = 2024-2025
```
## Indian Crop Seasons  
```js
import {CropSeason} from 'indian-fiscal-year';
```

## Input
```js
let date = new Date();
let ics = CropSeason(date);
```

## Output
```js
ics = "Kharif" / "Rabi"
```

## Indian Assessment Year  
```js
import {AY} from 'indian-fiscal-year';
```

## Input
```js
let date = new Date();
let iay = AY(date);
```

## Output
```js
iay = 2025-2026
```

For Bug Reports please use [issues](https://github.com/Parveen539/Indian-Fiscal-Year/issues)