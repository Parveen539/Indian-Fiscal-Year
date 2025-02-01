import { AssessmentYear } from "./src/retrieveAssessmentYear.js";
import { IndianCropSeason } from "./src/retrieveCropSeason.js";
import { RetrieveFinancialYear }  from "./src/retrieveFinancialYear.js";

export function FY (date : Date) : string {
    let FinYear = new RetrieveFinancialYear();
    return FinYear.getIndianFiscalYear(date);
};

export function CropSeason (date : Date) : string {
    let CS = new IndianCropSeason();
    return CS.getCropSeason(date);
};

export function AY (date : Date) : string {
    let _AssesmentYear = new AssessmentYear();
    return _AssesmentYear.getIndianAssessmentYear(date);
};
