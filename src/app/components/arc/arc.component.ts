import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: '[arc-component]',
    templateUrl: './arc.component.html',
    styleUrls: [ 'arc.component.less']
})

export class ArcComponent implements OnInit{
    public dataProgress: number = 0;
    public scorePercentage: number; // Can't add score yet
    @Input() activated: boolean = false;

    constructor() {}
    
    ngOnInit() {
        
    }
    ngOnChanges() {
        if(this.activated) {
            setTimeout(() => {
                this.randomize();
            }, 1000)
            
        }
    }

    randomize = function() {
        this.scorePercentage = this.getRandomNumber();
        this.dataProgress =  this.getRandomPercentage(this.scorePercentage);
    }
    
    getRandomNumber() { 
        return Math.floor(Math.random() * 700);
    }

    getRandomPercentage(random: number) {
        return Math.floor(random * 100 / 700); 
    }
    
}