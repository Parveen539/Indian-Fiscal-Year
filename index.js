"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndianFiscalYear = IndianFiscalYear;
exports.IndianCropSeasons = IndianCropSeasons;
var retrieveFinancialYear_js_1 = require("./src/retrieveFinancialYear.js");
var retrieveRabiKharif_js_1 = require("./src/retrieveRabiKharif.js");
function IndianFiscalYear(date) {
    var FinYear = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
    return FinYear.getFinancialYear(date);
}
;
function IndianCropSeasons(date) {
    var CS = new retrieveRabiKharif_js_1.CropSeason();
    return CS.getCropSeason(date);
}
