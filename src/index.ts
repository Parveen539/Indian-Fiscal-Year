import { AssessmentYear } from "./IndianFiscYear/retrieveAssessmentYear.js";
import { IndianCropSeason } from "./IndianFiscYear/retrieveCropSeason.js";
import { RetrieveFinancialYear } from "./IndianFiscYear/retrieveFinancialYear.js";

class FinYear {
  FinYear: RetrieveFinancialYear;
  _AssesmentYear: AssessmentYear;
  CS: IndianCropSeason;

  constructor() {
    this.FinYear = new RetrieveFinancialYear();
    this._AssesmentYear = new AssessmentYear();
    this.CS = new IndianCropSeason();
  }

  public AY(date: Date): string {
    return this._AssesmentYear.getIndianAssessmentYear(date);
  }

  public FY(date: Date): string {
    return this.FinYear.getIndianFiscalYear(date);
  }

  public CropSeason(date: Date): string {
    return this.CS.getCropSeason(date);
  }

  public Qtr(date: Date): string {
    return this.FinYear.getQuarter(date);
  }

  public Q_Yr(date: Date): string {
    return this.FinYear.getQuarterYear(date);
  }

  public TY(date: Date): string {
    return this.FinYear.getIndianFiscalYear(date);
  }
}

export default FinYear ;
