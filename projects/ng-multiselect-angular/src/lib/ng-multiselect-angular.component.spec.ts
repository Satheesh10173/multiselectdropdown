import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMultiselectAngularComponent } from './ng-multiselect-angular.component';

describe('NgMultiselectAngularComponent', () => {
  let component: NgMultiselectAngularComponent;
  let fixture: ComponentFixture<NgMultiselectAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMultiselectAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMultiselectAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
