import { AssessmentYear } from "./IndianFiscYear/retrieveAssessmentYear.js";
import { IndianCropSeason } from "./IndianFiscYear/retrieveCropSeason.js";
import { RetrieveFinancialYear } from "./IndianFiscYear/retrieveFinancialYear.js";
declare class FinYear {
    FinYear: RetrieveFinancialYear;
    _AssesmentYear: AssessmentYear;
    CS: IndianCropSeason;
    constructor();
    AY(date: Date): string;
    FY(date: Date): string;
    CropSeason(date: Date): string;
    Qtr(date: Date): string;
    Q_Yr(date: Date): string;
    TY(date: Date): string;
}
export default FinYear;
