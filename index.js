"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinYear = void 0;
var retrieveAssessmentYear_js_1 = require("./src/retrieveAssessmentYear.js");
var retrieveCropSeason_js_1 = require("./src/retrieveCropSeason.js");
var retrieveFinancialYear_js_1 = require("./src/retrieveFinancialYear.js");
var FinYear = /** @class */ (function () {
    function FinYear() {
    }
    FinYear.prototype.FY = function (date) {
        var FinYear = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
        return FinYear.getIndianFiscalYear(date);
    };
    FinYear.prototype.CropSeason = function (date) {
        var CS = new retrieveCropSeason_js_1.IndianCropSeason();
        return CS.getCropSeason(date);
    };
    FinYear.prototype.AY = function (date) {
        var _AssesmentYear = new retrieveAssessmentYear_js_1.AssessmentYear();
        return _AssesmentYear.getIndianAssessmentYear(date);
    };
    FinYear.prototype.Qtr = function (date) {
        var Qtr = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
        return Qtr.getQuarter(date);
    };
    FinYear.prototype.Q_Yr = function (date) {
        var Q_Yr = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
        return Q_Yr.getQuarterYear(date);
    };
    return FinYear;
}());
exports.FinYear = FinYear;
