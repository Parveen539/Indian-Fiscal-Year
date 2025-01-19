"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropSeason = void 0;
var CropSeason = /** @class */ (function () {
    function CropSeason() {
    }
    CropSeason.prototype.getCropSeason = function (date) {
        var CropSeason = "";
        switch (true) {
            case (date.getMonth() + 1) > 3 && (date.getMonth() + 1) < 11:
                CropSeason = "Kharif";
                break;
            default:
                CropSeason = "Rabi";
                break;
        }
        return CropSeason;
    };
    ;
    return CropSeason;
}());
exports.CropSeason = CropSeason;
;
