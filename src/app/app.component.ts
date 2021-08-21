import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VehicleService } from './services/vehicle.service';
import { Object } from './models/object';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { DesctriptionComponent } from './components/desctription/desctription.component';


  
function autocompleteObjectValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (typeof control.value === 'string') {
      return { 'invalidAutocompleteObject': { value: control.value } }
    }
    return null  /* valid option selected */
  }
};


@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Comp';
  // Zoom level
  zoom: number = 10;

  // Start position
  lat = 	52.1935161702220;
  lng = 20.9304286193480;

 
  objects: Object[] = [];
  
 
  private subscription = new Subscription();
  public filteredObjectsOptions: Observable<Object[]>
  constructor(private http: VehicleService, public dialog: MatDialog) { }
  
  public contactAutocompleteControl = new FormControl('', 
  { validators: [autocompleteObjectValidator(), Validators.required] })

public validation_msgs = {
  'contactAutocompleteControl': [
    { type: 'invalidAutocompleteObject', message: 'Car name not recognized. Click one of the autocomplete options.' },
    { type: 'required', message: 'Car name is required.' }
  ]
};

  ngOnInit(): any {
    const sub1 = this.http.getObjects().subscribe(objs => {
      this.objects = objs['objects'];
      // console.log(this.objects);
    }, error => console.error(error),
      () => console.log('Complite')
    );
    this.subscription.add(sub1);

    this.filteredObjectsOptions = this.contactAutocompleteControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterObjects(name) : this.objects.slice())
    )
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

  hideCars(): void {
    this.objects =[];
  };

openDialog(obj: any,i:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = [{ data: obj },{indexobj:i}];

    this.dialog.open(DesctriptionComponent, dialogConfig);
};

private _filterObjects(name: string): Object[] {
  if (name === '') {
    return this.objects.slice()
  }
  const filterValue = name.toLowerCase()
  return this.objects.filter(option => option.name.toLowerCase().includes(filterValue))
};
  public displayCarsFn(object: Object): string | undefined {

  
  return object && object ? object.name : undefined
}


addCar(value: Object) {
    console.log(value);
    this.objects =[];
    this.objects.push(value);
};
  
ngOnDestroy() {
    this.subscription.unsubscribe();
  };
  
}
