class AssessmentYear {
    AY : string
    Month : number

    constructor () {
        this.AY = ""
        this.Month = 0
    }

    public getIndianAssessmentYear(date : Date) : string {
        this.Month = date.getMonth() + 1;
        switch (true) {
            case this.Month > 3 && this.Month <= 12:
                this.AY = `${date.getFullYear() + 1}-${date.getFullYear() + 2}`;                
                break;
        
            default:
                this.AY = `${date.getFullYear()}-${date.getFullYear() + 1}`;
                break;
        }
        return this.AY;
    };
};

export { AssessmentYear };