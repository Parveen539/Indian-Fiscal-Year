import { AssessmentYear } from "./IndianFiscYear/retrieveAssessmentYear.js";
import { IndianCropSeason } from "./IndianFiscYear/retrieveCropSeason.js";
import { RetrieveFinancialYear } from "./IndianFiscYear/retrieveFinancialYear.js";
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
FinYear.Fiscal = new RetrieveFinancialYear();
FinYear._AssesmentYear = new AssessmentYear();
FinYear.CS = new IndianCropSeason();
export default FinYear;
