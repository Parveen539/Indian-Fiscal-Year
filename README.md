>Easily convert the Date to Fiscal Year for India

## Features  
- Get Indian Fiscal Year for a date.
- 1.7k minified/602b gzipped
- No Dependencies.
- Built with Typescript.

## Install  
#### NPM 

```bash
$ npm install indian-fiscal-year 
``` 

## Usage
## Import Modules
ESModule:  
```js
import FinYear from 'indian-fiscal-year';
```
CommonJS  
```js 
const FinYear = require ('indian-fiscal-year').default
```

## Indian Fiscal Year  
## Input
```js
let date = new Date();
let ify = FinYear.getFiscalYear(date)
```

## Output
```js
ify = 2025-2026
```
## Indian Crop Seasons  
## Input
```js
let date = new Date();
let cs = FinYear.getCropSeason(date)
```

## Output
```js
cs = 'Kharif' or 'Rabi'
```

## Indian Assessment Year  
## Input
```js
let date = new Date();
let iay = FinYear.getAssesmentYear(date)
```

## Output
```js
iay = 2026-2027
```

## Indian Tax Year  
## Input
```js
let date = new Date();
let ity = FinYear.getTaxYear(date)
```

## Output
```js
ity = 2025-2026
```

## Indian Fiscal Quarter  
## Input
```js
let date = new Date();
let qtr = FinYear.getQuarter(date)
```

## Output
```js
qtr = 'Q1' or 'Q2' or 'Q3' or 'Q4'
```

## Indian Fiscal Quarter Year  
## Input
```js
let date = new Date();
let qtrYear = FinYear.getQuarterYear(date)
```

## Output
```js
qtrYear = `Q1 FY 2025-2026`
```  


For Bug Reports and Suggestions please use [issues](https://github.com/Parveen539/Indian-Fiscal-Year/issues)