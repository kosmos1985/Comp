import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VehicleService } from './services/vehicle.service';
import { Object } from './models/object';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DesctriptionComponent } from './components/desctription/desctription.component';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Comp';
  // Zoom level
  zoom: number = 10;

  // Start position
  lat = 	52.1935161702220;
  lng = 20.9304286193480;
 

// Select option
  field_data = {
    select: 'Please select category',
  }
  
  
  objects: Object[]=[] ;
  private subscription = new Subscription();
  constructor(private http: VehicleService,public dialog: MatDialog) { }

  ngOnInit(): any {
    const sub1 = this.http.getObjects().subscribe(objs => {
      this.objects = objs['objects'];
      console.log(this.objects);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscription.add(sub1);
};


  showAllCars(): void {
    
    const sub2 = this.http.getObjects().subscribe(objs => {
      this.objects = objs['objects'];
      console.log(this.objects);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscription.add(sub2);

  };

  hideTrucks(): void {
    if (this.objects.filter(obj=> obj.type == 'TRUCK')) {
      console.log(this.objects);
      
    }
    
  };

  hideCars(): void {
    this.objects =[];
  };



openDialog(obj: any,i:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = [{ data: obj },{indexobj:i}];

    this.dialog.open(DesctriptionComponent, dialogConfig);
};

ngOnDestroy() {
    this.subscription.unsubscribe();
  };
  
}
