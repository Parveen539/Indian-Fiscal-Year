"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FY = FY;
exports.CropSeason = CropSeason;
exports.AY = AY;
var retrieveAssessmentYear_js_1 = require("./src/retrieveAssessmentYear.js");
var retrieveCropSeason_js_1 = require("./src/retrieveCropSeason.js");
var retrieveFinancialYear_js_1 = require("./src/retrieveFinancialYear.js");
function FY(date) {
    var FinYear = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
    return FinYear.getIndianFiscalYear(date);
}
;
function CropSeason(date) {
    var CS = new retrieveCropSeason_js_1.IndianCropSeason();
    return CS.getCropSeason(date);
}
;
function AY(date) {
    var _AssesmentYear = new retrieveAssessmentYear_js_1.AssessmentYear();
    return _AssesmentYear.getIndianAssessmentYear(date);
}
;
