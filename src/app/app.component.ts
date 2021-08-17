import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VehicleService } from './services/vehicle.service';
import { Marker } from './models/marker';
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
  lat = 	53.123482;
  lng = 18.008438;

// Select option
  field_data = {
    select: 'Please select category',
  }
  
  // Markers
  markers: Marker[] = [
    {
      name: 'Opel Kadet',
      lat: 53.123490,
      lng: 18.008440,
      draggable: true,
      category:'avaliable'
    },
    {
      name: 'Renault Clio',
      lat: 53.125490,
      lng: 18.018440,
      draggable: true,
      category:'unavaliable'
    },
    {
      name: 'Ford Mustang',
      lat: 53.125690,
      lng: 18.018840,
      draggable: false,
      category:'avaliable'
    },
  ];

  objects ;
  private subscription = new Subscription();
  constructor(private http: VehicleService,public dialog: MatDialog) { }


  // clickedMarker(marker:Marker,i:number) {
  //   console.log('Clicked Marker: ' +marker+ 'at index' +i);  
  // };
  // mapClicked($event: any) {
  //   const newMarker = {
  //     name: 'Untitle',
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: false
  //   }
  //   this.markers.push(newMarker)
  // };

  // markerDragEnd(marker: any, $event: any) {
  //   console.log('dragEnd', marker, $event);
    

  //   const updMarker = {
  //     name: marker.name,
  //     lat: parseFloat(marker.lat),
  //     lng: parseFloat(marker.lng),
  //     draggable:false
  //   }

  //   const newLat = $event.coords.lat;
  //   const newLng = $event.coords.lng;

  // };

  // Function to filter markers by category
 

// filterMarkers(value) {
//   for (this.markers) {
//     // markers = gmarkers[i];
//     // // If is same category or category not picked
//     if (this.markers.category == value || value.length === 0) {
//       this.markers.setVisible(false);
//     }
//     // Categories don't match 
//     else {
//       this.markers.setVisible(true);
//     }
//   }
// }
showSelect() {
   console.log(this.field_data.select);
   
}

  
  ngOnInit(): any {
    const sub1 = this.http.getObjects().subscribe(objs => {
      this.objects = objs;
      console.log(this.objects);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscription.add(sub1);
  };

  openDialog(marker: any,i:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = [{ data: marker },{indexmarker:i}];

    this.dialog.open(DesctriptionComponent, dialogConfig);
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  };
}
