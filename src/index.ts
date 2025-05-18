import { AssessmentYear } from "./IndianFiscYear/retrieveAssessmentYear.js";
import { IndianCropSeason } from "./IndianFiscYear/retrieveCropSeason.js";
import { RetrieveFinancialYear } from "./IndianFiscYear/retrieveFinancialYear.js";

class FinYear {
  private static Fiscal = new RetrieveFinancialYear();
  private static _AssesmentYear = new AssessmentYear();
  private static CS = new IndianCropSeason();

  // constructor() {
  //   this.Fiscal = new RetrieveFinancialYear();
  //   this._AssesmentYear = new AssessmentYear();
  //   this.CS = new IndianCropSeason();
  // }

  public static getAssesmentYear(date: Date): string {
    return this._AssesmentYear.getIndianAssessmentYear(date);
  }

  public static getFiscalYear(date: Date): string {
    return this.Fiscal.getIndianFiscalYear(date);
  }

  public static getCropSeason(date: Date): string {
    return this.CS.getCropSeason(date);
  }

  public static getQuarter(date: Date): string {
    return this.Fiscal.getQuarter(date);
  }

  public static getQuarterYear(date: Date): string {
    return this.Fiscal.getQuarterYear(date);
  }

  public static getTaxYear(date: Date): string {
    return this.Fiscal.getIndianFiscalYear(date);
  }
}

export default FinYear ;
