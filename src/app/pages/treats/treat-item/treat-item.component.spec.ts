import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatItemComponent } from './treat-item.component';

describe('TreatItemComponent', () => {
  let component: TreatItemComponent;
  let fixture: ComponentFixture<TreatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
