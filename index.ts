import { AssessmentYear } from "./src/retrieveAssessmentYear.js";
import { IndianCropSeason } from "./src/retrieveCropSeason.js";
import { RetrieveFinancialYear } from "./src/retrieveFinancialYear.js";

class FinYear {
  public FY(date: Date): string {
    let FinYear = new RetrieveFinancialYear();
    return FinYear.getIndianFiscalYear(date);
  }

  public CropSeason(date: Date): string {
    let CS = new IndianCropSeason();
    return CS.getCropSeason(date);
  }

  public AY(date: Date): string {
    let _AssesmentYear = new AssessmentYear();
    return _AssesmentYear.getIndianAssessmentYear(date);
  }

  public Qtr(date: Date): string {
    let Qtr = new RetrieveFinancialYear();
    return Qtr.getQuarter(date);
  }

  public Q_Yr(date: Date): string {
    let Q_Yr = new RetrieveFinancialYear();
    return Q_Yr.getQuarterYear(date);
  }
}

export { FinYear };
