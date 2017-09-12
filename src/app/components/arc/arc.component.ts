import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: '[arc-component]',
    templateUrl: './arc.component.html',
    styleUrls: [ 'arc.component.less']
})

export class ArcComponent implements OnInit{
    public dataProgress: number = 0;
    public scorePercentage: number; // Can't add score yet

    constructor() {}
    
    ngOnInit() {
        this.randomize();
    }

    randomize = function() {
        this.scorePercentage = this.getRandomNumber();
        this.dataProgress =  this.getRandomPercentage(this.scorePercentage);
    }
    
    getRandomNumber() { 
        let number = Math.floor(Math.random() * 700);
        console.log(number);
        
        return number;
    }

    getRandomPercentage(random: number) {
        let percentage = Math.floor(random * 100 / 700);
        console.log(percentage);
        
        return percentage; 
    }
    
}