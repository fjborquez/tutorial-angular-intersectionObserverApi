import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityIndicatorComponent } from './visibility-indicator.component';

describe('VisibilityIndicatorComponent', () => {
  let component: VisibilityIndicatorComponent;
  let fixture: ComponentFixture<VisibilityIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilityIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
