"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveFinancialYear = void 0;
var RetrieveFinancialYear = /** @class */ (function () {
    function RetrieveFinancialYear() {
    }
    RetrieveFinancialYear.prototype.getIndianFiscalYear = function (date) {
        var FY = '';
        var Year = date.getFullYear();
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
    ;
    return RetrieveFinancialYear;
}());
exports.RetrieveFinancialYear = RetrieveFinancialYear;
;
