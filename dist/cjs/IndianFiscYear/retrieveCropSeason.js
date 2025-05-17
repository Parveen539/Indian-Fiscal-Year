"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndianCropSeason = void 0;
class IndianCropSeason {
    constructor() {
        this.CropSeason = "";
    }
    getCropSeason(date) {
        switch (true) {
            case (date.getMonth() + 1) > 3 && (date.getMonth() + 1) < 11:
                this.CropSeason = "Kharif";
                break;
            default:
                this.CropSeason = "Rabi";
                break;
        }
        return this.CropSeason;
    }
    ;
}
exports.IndianCropSeason = IndianCropSeason;
;
