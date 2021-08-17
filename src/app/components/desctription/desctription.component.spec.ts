import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesctriptionComponent } from './desctription.component';

describe('DesctriptionComponent', () => {
  let component: DesctriptionComponent;
  let fixture: ComponentFixture<DesctriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesctriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesctriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
