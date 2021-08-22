import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-desctription',
  templateUrl: './desctription.component.html',
  styleUrls: ['./desctription.component.scss']
})
export class DesctriptionComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

   
}
