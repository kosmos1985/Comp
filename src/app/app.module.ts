import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgEX5s0ZOVBeQATFOInnYSp1eU6n1wmnI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
