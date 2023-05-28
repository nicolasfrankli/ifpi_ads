var Hotel = /** @class */ (function () {
    function Hotel(id_hotel) {
        this.quantReservas = 0;
        this.id = id_hotel;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
hotel.quantReservas = 5;
console.log(hotel.quantReservas);
//Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo  quantReservas. 
hotel.quantReservas = 5;
