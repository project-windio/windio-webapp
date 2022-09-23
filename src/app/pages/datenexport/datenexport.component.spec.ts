import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenexportComponent } from './datenexport.component';

describe('DatenexportComponent', () => {
  let component: DatenexportComponent;
  let fixture: ComponentFixture<DatenexportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenexportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
