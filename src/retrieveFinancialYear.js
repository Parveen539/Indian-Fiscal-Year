"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveFinancialYear = void 0;
var RetrieveFinancialYear = /** @class */ (function () {
    function RetrieveFinancialYear() {
    }
    RetrieveFinancialYear.prototype.getIndianFiscalYear = function (date) {
        var FY = "";
        var Month = date.getMonth() + 1;
        switch (true) {
            case Month > 3 && Month <= 12:
                FY = "".concat(date.getFullYear(), "-").concat(date.getFullYear() + 1);
                break;
            default:
                FY = "".concat(date.getFullYear() - 1, "-").concat(date.getFullYear());
                break;
        }
        return FY;
    };
    RetrieveFinancialYear.prototype.getQuarter = function (date) {
        var Qtr = "";
        var Month = date.getMonth() + 1;
        switch (true) {
            case Month > 0 && Month < 4:
                Qtr = 'Q4';
                break;
            case Month > 3 && Month < 7:
                Qtr = 'Q1';
                break;
            case Month > 6 && Month < 10:
                Qtr = 'Q2';
                break;
            case Month > 9 && Month <= 12:
                Qtr = 'Q3';
                break;
        }
        return Qtr;
    };
    RetrieveFinancialYear.prototype.getQuarterYear = function (date) {
        var Qtr = this.getQuarter(date);
        var FY = this.getIndianFiscalYear(date);
        var QtrYr = "".concat(Qtr, " FY ").concat(FY);
        return QtrYr;
    };
    return RetrieveFinancialYear;
}());
exports.RetrieveFinancialYear = RetrieveFinancialYear;
