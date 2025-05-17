"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retrieveAssessmentYear_js_1 = require("./IndianFiscYear/retrieveAssessmentYear.js");
const retrieveCropSeason_js_1 = require("./IndianFiscYear/retrieveCropSeason.js");
const retrieveFinancialYear_js_1 = require("./IndianFiscYear/retrieveFinancialYear.js");
class FinYear {
    constructor() {
        this.FinYear = new retrieveFinancialYear_js_1.RetrieveFinancialYear();
        this._AssesmentYear = new retrieveAssessmentYear_js_1.AssessmentYear();
        this.CS = new retrieveCropSeason_js_1.IndianCropSeason();
    }
    AY(date) {
        return this._AssesmentYear.getIndianAssessmentYear(date);
    }
    FY(date) {
        return this.FinYear.getIndianFiscalYear(date);
    }
    CropSeason(date) {
        return this.CS.getCropSeason(date);
    }
    Qtr(date) {
        return this.FinYear.getQuarter(date);
    }
    Q_Yr(date) {
        return this.FinYear.getQuarterYear(date);
    }
    TY(date) {
        return this.FinYear.getIndianFiscalYear(date);
    }
}
exports.default = FinYear;
