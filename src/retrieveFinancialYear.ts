class RetrieveFinancialYear {
    public getIndianFiscalYear(date : Date) : string {
        let FY : string = '';
        let Year = date.getFullYear();
        let Month = date.getMonth() + 1;
        switch (true) {
            case Month > 3 && Month <= 12:
                FY = `${date.getFullYear()}-${date.getFullYear() + 1}`;                
                break;
        
            default:
                FY = `${date.getFullYear() - 1}-${date.getFullYear()}`;
                break;
        }
        return FY;
    };
};

export { RetrieveFinancialYear }