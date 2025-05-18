declare class FinYear {
    private static Fiscal;
    private static _AssesmentYear;
    private static CS;
    static getAssesmentYear(date: Date): string;
    static getFiscalYear(date: Date): string;
    static getCropSeason(date: Date): string;
    static getQuarter(date: Date): string;
    static getQuarterYear(date: Date): string;
    static getTaxYear(date: Date): string;
}
export default FinYear;
