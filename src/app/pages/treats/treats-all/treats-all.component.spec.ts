import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatsAllComponent } from './treats-all.component';

describe('TreatsAllComponent', () => {
  let component: TreatsAllComponent;
  let fixture: ComponentFixture<TreatsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatsAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
