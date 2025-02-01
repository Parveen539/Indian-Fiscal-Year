"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssessmentYear = void 0;
var AssessmentYear = /** @class */ (function () {
    function AssessmentYear() {
    }
    AssessmentYear.prototype.getIndianAssessmentYear = function (date) {
        var AY = '';
        var Month = date.getMonth() + 1;
        switch (true) {
            case Month > 3 && Month <= 12:
                AY = "".concat(date.getFullYear() + 1, "-").concat(date.getFullYear() + 2);
                break;
            default:
                AY = "".concat(date.getFullYear(), "-").concat(date.getFullYear() + 1);
                break;
        }
        return AY;
    };
    ;
    return AssessmentYear;
}());
exports.AssessmentYear = AssessmentYear;
;
