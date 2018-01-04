import{Spacecraft, Containership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership{
    
    cargoContainers = 1;
    constructor(){
        super('hyperdrive')
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }else{
            console.log('Failed to jump into hyperspace')
        }
    }
}