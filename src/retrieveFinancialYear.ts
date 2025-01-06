class RetrieveFinancialYear {

    public getFinancialYear(date: Date): string {
        let financialYear : string = '';

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        //let monthDay = date.getDate();
        
        if (month > 3 && month <= 12) {
            financialYear = `${year}-${year + 1}`;
        };

        if (month >= 1 && month < 4) {
            financialYear = `${year - 1}-${year}`;
        };

        return financialYear;
    }
};

export { RetrieveFinancialYear };