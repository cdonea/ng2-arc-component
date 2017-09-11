import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScoreService {
    private url = 'api/data'; // 'https://5lfoiyb0b3.execute-api.us-west-2.amazonaws.com/prod/mockcredit/values';
    constructor(private http: Http) {

    }
    public getScore(): Promise<any> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.get(this.url, { headers: headers })
            .toPromise();
    }
} 