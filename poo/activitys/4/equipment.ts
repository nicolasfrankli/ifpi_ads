class Equipment {
    on: boolean;

    turnsOn(){
        if (this.isOn() === false){
            this.on = true;
        } 
    }
    turnsOff(){
        if (this.isOn() === true){
            this.on = false;
        }
    }
    inverse(){
        this.on = !this.on;
    }
    isOn(){
        return this.on;
    }
}

let equipment1: Equipment = new Equipment();
equipment1.on = true;
console.log(equipment1.isOn());
equipment1.turnsOff();
console.log(equipment1.isOn());