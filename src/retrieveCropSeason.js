"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndianCropSeason = void 0;
var IndianCropSeason = /** @class */ (function () {
    function IndianCropSeason() {
    }
    IndianCropSeason.prototype.getCropSeason = function (date) {
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
    return IndianCropSeason;
}());
exports.IndianCropSeason = IndianCropSeason;
;
