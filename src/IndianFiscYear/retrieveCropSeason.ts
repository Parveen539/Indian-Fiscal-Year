class IndianCropSeason {
    CropSeason : string

    constructor () {
        this.CropSeason = ""
    }

    public getCropSeason(date : Date): string {
        switch (true) {
            case (date.getMonth()+1) > 3 && (date.getMonth()+1) < 11:
                this.CropSeason = "Kharif"
                break;
        
            default:
                this.CropSeason = "Rabi"
                break;
        }
        return this.CropSeason;
    };
};

export { IndianCropSeason };