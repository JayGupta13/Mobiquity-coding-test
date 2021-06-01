import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherReportComponent } from './wheather-report.component';

describe('WheatherReportComponent', () => {
  let component: WheatherReportComponent;
  let fixture: ComponentFixture<WheatherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatherReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
