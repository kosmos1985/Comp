import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Comp';
  lat = 51.678418;
  lng = 8.809007;

  objects ;
  private subscription = new Subscription();
  constructor(private http: VehicleService) { }
  
  ngOnInit(): any {
    const sub1 = this.http.getObjects().subscribe(objs => {
      this.objects = objs;
      console.log(this.objects);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscription.add(sub1);
  };
  ngOnDestroy() {
    this.subscription.unsubscribe();
  };
}
