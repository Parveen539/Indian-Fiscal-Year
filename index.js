"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndianFiscalYear = IndianFiscalYear;
var retrieveFinancialYear_js_1 = require("./src/retrieveFinancialYear.js");
function IndianFiscalYear(date) {
    var FinYear = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
    return FinYear.getFinancialYear(date);
}
;
