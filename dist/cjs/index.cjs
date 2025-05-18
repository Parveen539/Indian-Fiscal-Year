"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retrieveAssessmentYear_js_1 = require("./IndianFiscYear/retrieveAssessmentYear.js");
const retrieveCropSeason_js_1 = require("./IndianFiscYear/retrieveCropSeason.js");
const retrieveFinancialYear_js_1 = require("./IndianFiscYear/retrieveFinancialYear.js");
class FinYear {
    // constructor() {
    //   this.Fiscal = new RetrieveFinancialYear();
    //   this._AssesmentYear = new AssessmentYear();
    //   this.CS = new IndianCropSeason();
    // }
    static getAssesmentYear(date) {
        return this._AssesmentYear.getIndianAssessmentYear(date);
    }
    static getFiscalYear(date) {
        return this.Fiscal.getIndianFiscalYear(date);
    }
    static getCropSeason(date) {
        return this.CS.getCropSeason(date);
    }
    static getQuarter(date) {
        return this.Fiscal.getQuarter(date);
    }
    static getQuarterYear(date) {
        return this.Fiscal.getQuarterYear(date);
    }
    static getTaxYear(date) {
        return this.Fiscal.getIndianFiscalYear(date);
    }
}
FinYear.Fiscal = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
FinYear._AssesmentYear = new retrieveAssessmentYear_js_1.AssessmentYear();
FinYear.CS = new retrieveCropSeason_js_1.IndianCropSeason();
exports.default = FinYear;
