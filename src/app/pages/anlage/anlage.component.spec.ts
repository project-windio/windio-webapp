import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlageComponent } from './anlage.component';

describe('AnlageComponent', () => {
  let component: AnlageComponent;
  let fixture: ComponentFixture<AnlageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnlageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
