import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedcourseComponent } from './detailedcourse.component';

describe('DetailedcourseComponent', () => {
  let component: DetailedcourseComponent;
  let fixture: ComponentFixture<DetailedcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
