import { RetrieveFinancialYear } from "./src/retrieveFinancialYear.js";
import { CropSeason } from "./src/retrieveRabiKharif.js";

export function IndianFiscalYear (date : Date) : string {
    let FinYear = new RetrieveFinancialYear();
    return FinYear.getFinancialYear(date);
};

export function IndianCropSeasons (date : Date) : string {
    let CS = new CropSeason();
    return CS.getCropSeason(date);
}
