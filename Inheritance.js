class Bus {
    constructor(driver, wheels, seats){
        this.driver = driver
        this.wheels = wheels
        this.seats = seats
    }
}
class Track {
    constructor(driver, wheels, capacity){
        this.driver = driver
        this.wheels = wheels
        this.capacity = capacity
    }
}
const hanifBus = new Bus('Hanif', 12, 3);
console.log(hanifBus);