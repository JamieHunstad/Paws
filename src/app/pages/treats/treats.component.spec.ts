import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatsComponent } from './treats.component';

describe('TreatsComponent', () => {
  let component: TreatsComponent;
  let fixture: ComponentFixture<TreatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
