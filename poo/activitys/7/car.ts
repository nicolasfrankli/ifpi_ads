class vehicle{
    private licensePlates: String;
    private year: number;

    constructor(licenseplate: string, year: number){
        this.licensePlates = licenseplate;
        this.year = year;
    }
}

class car extends vehicle{
    public model: String;
}

class eletricCar extends car{
    public batteryLife: number;
}

/*2. Questão da calculadora está na pasta 6, apenas implementei a nova classe.
3. Questão do banco está fora dessa pasta, na Activitys.*/