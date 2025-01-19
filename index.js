"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndianFiscalYear = IndianFiscalYear;
exports.IndianCropSeason = IndianCropSeason;
var retrieveFinancialYear_js_1 = require("./src/retrieveFinancialYear.js");
var retrieveRabiKharif_js_1 = require("./src/retrieveRabiKharif.js");
function IndianFiscalYear(date) {
    var FinYear = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
    return FinYear.getIndianFiscalYear(date);
}
;
function IndianCropSeason(date) {
    var CS = new retrieveRabiKharif_js_1.CropSeason();
    return CS.getCropSeason(date);
}
