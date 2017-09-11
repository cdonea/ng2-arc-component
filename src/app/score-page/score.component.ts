import { OnInit, Component } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
    selector: '[score-component]',
    templateUrl: './score.component.html',
})

export class ScoreComponent implements OnInit{
    public score: number;
    constructor(
        private scoreService: ScoreService
    ) {}

    ngOnInit() {
        this.score = null;
    }

    showScore() {
        this.scoreService.getScore()
        .then((response) => {
            let jsonResponse = response.json().data; 
            console.log('******success');
            this.score =  jsonResponse.creditReportInfo ? jsonResponse.creditReportInfo.score : -1;
        })
        .catch((err) => {
            //handle error 
            this.score = null;
            console.log('******err');
        });
    }

}