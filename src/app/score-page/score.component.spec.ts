import {
    ComponentFixture,
    TestBed,
    async,
    fakeAsync,
    tick,
    inject,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';

import { ScoreComponent } from './score.component';
import { ScoreService } from './score.service';

let mockSuccessResponse = {
    data: {
        creditReportInfo: {
            score: 500
        }
    }
};

let mockErrorResponse = {
    status: 404
};
class MockScoreService {
    getScore() {
        
    }
}

describe('ScoreComponent', () => {
    let comp: ScoreComponent;
    let fixture: ComponentFixture<ScoreComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let scoreService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScoreComponent],
            providers: [
                {
                    provide: ScoreService, useClass: MockScoreService
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScoreComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('should create the compoenent', () => {
        expect(comp).toBeDefined();
    });

    it('should have the score empty initially', () => {
        comp.ngOnInit();
        fixture.detectChanges();
        expect(comp.score).toBe(null);
    });

    fit('should have the score after receiving data successfully', fakeAsync(inject([ScoreService], (scoreService: ScoreService) => {
        let spy = spyOn(scoreService, 'getScore')
            .and.returnValue(Promise.resolve(mockSuccessResponse));

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            comp.showScore();
            fixture.detectChanges();
            tick(1000);
            fixture.detectChanges();
            expect(spy).toHaveBeenCalled();
            // expect(comp.score).toBe(500);
        });
    })));

    fit('should display an error message if receiving data has failed', async(inject([ScoreService], (scoreService: ScoreService)  => {
        spyOn(scoreService, 'getScore')
            .and.returnValue(Promise.reject(mockErrorResponse));

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            comp.showScore();
            // tick(200);
            fixture.detectChanges();
            expect(scoreService.getScore).toHaveBeenCalled();
            expect(comp.score).toBe(null);
        });
    })));
});