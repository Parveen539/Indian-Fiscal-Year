import {RetrieveFinancialYear}  from "./src/retrieveFinancialYear.js";

export function IndianFiscalYear (date : Date) {
    let FinYear = new RetrieveFinancialYear();
    return FinYear.getFinancialYear(date);
};
