import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilmodelleComponent } from './teilmodelle.component';

describe('TeilmodelleComponent', () => {
  let component: TeilmodelleComponent;
  let fixture: ComponentFixture<TeilmodelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeilmodelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeilmodelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
