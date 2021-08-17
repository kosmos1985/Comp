import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgEX5s0ZOVBeQATFOInnYSp1eU6n1wmnI'
    }),
    AgmJsMarkerClustererModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
