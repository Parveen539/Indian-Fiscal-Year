class RetrieveFinancialYear {
  FY : string
  Month : number
  Qtr : string
  QtrYr : string

  constructor () {
    this.FY = ""
    this.Month = 0
    this.Qtr = ""
    this.QtrYr = ""
  }

  public getIndianFiscalYear(date: Date): string {
    this.Month = date.getMonth() + 1;
    switch (true) {
      case this.Month > 3 && this.Month <= 12:
        this.FY = `${date.getFullYear()}-${date.getFullYear() + 1}`;
        break;

      default:
        this.FY = `${date.getFullYear() - 1}-${date.getFullYear()}`;
        break;
    }
    return this.FY;
  }

  public getQuarter(date: Date): string {
    this.Month = date.getMonth() + 1
    switch (true) {
      case this.Month > 0 && this.Month < 4:
        this.Qtr = 'Q4'
        break
      case this.Month > 3 && this.Month < 7:
        this.Qtr = 'Q1'
        break
      case this.Month > 6 && this.Month < 10:
        this.Qtr = 'Q2'
        break
      case this.Month > 9 && this.Month <= 12:
        this.Qtr = 'Q3'
        break
    }
    return this.Qtr
  }

  public getQuarterYear(date: Date): string {
    
    this.Qtr = this.getQuarter(date);
    this.FY = this.getIndianFiscalYear(date)  
    this.QtrYr = `${this.Qtr} FY ${this.FY}`
    
    return this.QtrYr
  }
}

export { RetrieveFinancialYear };
