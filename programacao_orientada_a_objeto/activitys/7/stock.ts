class Product {
    private _id: String;
    private description: String;
    private quantityInStock: number;
    private unitaryValue: number;

    constructor(id: String, text: String, quantity: number, price: number){
        this._id = id;
        this.description = text;
        this.quantityInStock = quantity;
        this.unitaryValue = price;
    }

    get id(){
        return this._id;
    }
    get name(){
        return this.description;
    }
    get quantity(){
        return this.quantityInStock;
    }

    replenish(quantity: number): void{
        this.quantityInStock = this.quantityInStock + quantity;
    }
    writeOff(quantity: number): void{
        this.quantityInStock = this.quantityInStock - quantity;
    }
}

class perishableProduct extends Product{
    public ExpirationDate: Date;

    constructor(id: String, description: String, quantity: number, price: number, expiration: Date){
        super(id, description, quantity, price);
        this.ExpirationDate = expiration;
    }
    
    isValid(): boolean{
        let date: Date = new Date(); 
        if (this.ExpirationDate.getMilliseconds() < date.getMilliseconds()){
            return true;
        } else {
            return false;
        }
    }
    replenish(quantity: number): void {
        if(this.isValid()){
            super.replenish(quantity);
        }
    }
    writeOff(quantity: number): void {
        if(this.isValid()){
            super.writeOff(quantity);
        }
    }
}

class Stock {
    private _products: Array<perishableProduct|Product> = new Array<perishableProduct|Product>();
    
    public register(product: Product): void{
        if(!this.searchProduct(product.id)){
            let count = 0;
            for (let index = 0; index < this._products.length; index++) {
                const element = this._products[index].name;
                if (element == product.name){
                    count = 1;
                    break;
                } 
            }
            if (count = 0){
                this._products.push(product);
            } else {
                throw new Error('Name already existing!')
            }
        } else {
            throw new Error('ID already existing!')
        }
    }

    public searchProduct(id_to_find: String): boolean{
        let count = 0;
        for (let index = 0; index < this._products.length; index++) {
            const product = this._products[index];
            if(id_to_find == product.id){
                count = 1;
                break;
            }
        }
        if (count = 1){
            return true;
        } else {
            return false;
        }
    }

    public deleteProduct(id: String) {
        if(!this.searchProduct(id)){throw new Error('Product does not exist!')}
        else {
            for (let index = 0; index < this._products.length; index++) {
                if(this._products[index].id == id){
                    this._products.splice(0, index);
                    break;
                }
                
            }
        }
    }
    
    public reset(id: String, quantity: Number){
        if(!this.searchProduct(id)){throw new Error('Product does not exist!')}
        else {
            for (let index = 0; index < this._products.length; index++) {
                if(this._products[index].id == id){
                    this._products[index].quantity += quantity;
                    break;
                }
                
            }
        }
    }
    public writeOff(id: String, quantity: Number){
        if(!this.searchProduct(id)){throw new Error('Product does not exist!')}
        else {
            for (let index = 0; index < this._products.length; index++) {
                if(this._products[index].id == id){
                    this._products[index].quantity -= quantity;
                    break;
                }
                
            }
        }
    }
    public expiredProducts(){
        for (let index = 0; index < this._products.length; index++) {
            const product = this._products[index]
            if(product instanceof perishableProduct){
                if(!product.isValid()){
                    console.log(product);
                }
            }
        }
    }
}