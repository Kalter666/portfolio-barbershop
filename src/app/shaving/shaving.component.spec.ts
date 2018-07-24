import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavingComponent } from './shaving.component';

describe('ShavingComponent', () => {
  let component: ShavingComponent;
  let fixture: ComponentFixture<ShavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
