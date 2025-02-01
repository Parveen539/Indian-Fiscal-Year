class IndianCropSeason {
    public getCropSeason(date : Date): string {
        let CropSeason : string = "";
        switch (true) {
            case (date.getMonth()+1) > 3 && (date.getMonth()+1) < 11:
                CropSeason = "Kharif"
                break;
        
            default:
                CropSeason = "Rabi"
                break;
        }
        return CropSeason;
    };
};

export { IndianCropSeason };