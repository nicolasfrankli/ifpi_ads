class Hotel { 
    id: number;
    constructor(id_hotel: number) {
        this.id = id_hotel;
    }
    quantReservas : number = 0; 
    adicionarReserva() : void { 
        this.quantReservas++; 
    } 
} 

let hotel : Hotel = new Hotel(2); 
hotel.quantReservas = 5;
console.log(hotel.quantReservas); 