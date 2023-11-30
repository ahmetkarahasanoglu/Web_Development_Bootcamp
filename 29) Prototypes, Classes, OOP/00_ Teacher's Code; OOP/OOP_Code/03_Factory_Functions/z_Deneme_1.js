
function makeCar(engine, modelYear, currentSpeed) {
    car = {};
    car.engine = engine;
    car.modelYear = modelYear;
    car.currentSpeed = currentSpeed;

    car.showSpecifications = function() {
        return `Engine: ${this.engine}, Model Year: ${this.modelYear}, Current Speed: ${this.currentSpeed}`;
    }
    car.speedUp = function() {
        this.currentSpeed += 10;
        return this.currentSpeed;
    }
    return car;    
}

const myCar = makeCar(1.6, 2010, 50);
console.log(myCar);
console.log(myCar.showSpecifications());
console.log(myCar.speedUp())
console.log(myCar.modelYear);