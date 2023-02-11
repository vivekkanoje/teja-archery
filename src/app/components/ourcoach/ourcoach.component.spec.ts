import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcoachComponent } from './ourcoach.component';

describe('OurcoachComponent', () => {
  let component: OurcoachComponent;
  let fixture: ComponentFixture<OurcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurcoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
