import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_core/footer/footer.component';
import { HeaderComponent } from './_core/header/header.component';
import { MainComponent } from './_core/main/main.component';
import { GameComponent } from './_main/game/game/game.component';
import { SpaceComponent } from './_main/space/space/space.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // SpaceComponent,
    MainComponent,
    GameComponent,
    SpaceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
