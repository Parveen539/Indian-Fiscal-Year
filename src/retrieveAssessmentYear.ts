class AssessmentYear {
    public getIndianAssessmentYear(date : Date) : string {
        let AY : string = '';
        let Month = date.getMonth() + 1;
        switch (true) {
            case Month > 3 && Month <= 12:
                AY = `${date.getFullYear() + 1}-${date.getFullYear() + 2}`;                
                break;
        
            default:
                AY = `${date.getFullYear()}-${date.getFullYear() + 1}`;
                break;
        }
        return AY;
    };
};

export { AssessmentYear };