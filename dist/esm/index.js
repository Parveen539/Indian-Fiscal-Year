import { AssessmentYear } from "./IndianFiscYear/retrieveAssessmentYear.js";
import { IndianCropSeason } from "./IndianFiscYear/retrieveCropSeason.js";
import { RetrieveFinancialYear } from "./IndianFiscYear/retrieveFinancialYear.js";
class FinYear {
    constructor() {
        this.FinYear = new RetrieveFinancialYear();
        this._AssesmentYear = new AssessmentYear();
        this.CS = new IndianCropSeason();
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
export default FinYear;
