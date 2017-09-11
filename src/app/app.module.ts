import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule }  from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score-page/score.component';
import { ScoreService } from './score-page/score.service';
import { ArcModule } from './components/arc';
import { InMemoryDataService } from './score-page/in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CommonModule,
        HttpClientModule,
        InMemoryWebApiModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        ArcModule,
    ],
    declarations: [
        AppComponent,
        ScoreComponent,
    ],
    providers: [
        ScoreService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }