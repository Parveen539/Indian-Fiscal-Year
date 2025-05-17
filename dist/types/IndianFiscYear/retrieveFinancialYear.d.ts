declare class RetrieveFinancialYear {
    FY: string;
    Month: number;
    Qtr: string;
    QtrYr: string;
    constructor();
    getIndianFiscalYear(date: Date): string;
    getQuarter(date: Date): string;
    getQuarterYear(date: Date): string;
}
export { RetrieveFinancialYear };
