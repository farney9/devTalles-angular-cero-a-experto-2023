import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DragonBallZModule } from './dragon-ball-z/dragon-ball-z.module';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DragonBallZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
