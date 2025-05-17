class RetrieveFinancialYear {
  public getIndianFiscalYear(date: Date): string {
    let FY: string = "";
    let Month = date.getMonth() + 1;
    switch (true) {
      case Month > 3 && Month <= 12:
        FY = `${date.getFullYear()}-${date.getFullYear() + 1}`;
        break;

      default:
        FY = `${date.getFullYear() - 1}-${date.getFullYear()}`;
        break;
    }
    return FY;
  }

  public getQuarter(date: Date): string {
    let Qtr: string = "";
    let Month = date.getMonth() + 1
    switch (true) {
      case Month > 0 && Month < 4:
        Qtr = 'Q4'
        break
      case Month > 3 && Month < 7:
        Qtr = 'Q1'
        break
      case Month > 6 && Month < 10:
        Qtr = 'Q2'
        break
      case Month > 9 && Month <= 12:
        Qtr = 'Q3'
        break
    }
    return Qtr
  }

  public getQuarterYear(date: Date): string {
    
    let Qtr : string = this.getQuarter(date);
    let FY : string = this.getIndianFiscalYear(date)  
    let QtrYr : string = `${Qtr} FY ${FY}`
    
    return QtrYr
  }
}

export { RetrieveFinancialYear };
