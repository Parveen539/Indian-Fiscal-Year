"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveFinancialYear = void 0;
var RetrieveFinancialYear = /** @class */ (function () {
    function RetrieveFinancialYear() {
    }
    RetrieveFinancialYear.prototype.getFinancialYear = function (date) {
        var financialYear = '';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        //let monthDay = date.getDate();
        if (month > 3 && month <= 12) {
            financialYear = "".concat(year, "-").concat(year + 1);
        }
        ;
        if (month >= 1 && month < 4) {
            financialYear = "".concat(year - 1, "-").concat(year);
        }
        ;
        return financialYear;
    };
    return RetrieveFinancialYear;
}());
exports.RetrieveFinancialYear = RetrieveFinancialYear;
;
