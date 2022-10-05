class Salutation{
    text: String;
    destinatary: String;

    constructor(text: String, destinatary: String){
        this.text = text;
        this.destinatary = destinatary;
    }

    getSalutation(){
        return `${this.text} ${this.destinatary}`;
    }
}

let abacate: Salutation = new Salutation('Sr.', 'Nicolas');
console.log(abacate.getSalutation());