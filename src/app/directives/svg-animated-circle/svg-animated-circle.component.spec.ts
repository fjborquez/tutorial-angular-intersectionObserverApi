import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAnimatedCircleComponent } from './svg-animated-circle.component';

describe('SvgAnimatedCircleComponent', () => {
  let component: SvgAnimatedCircleComponent;
  let fixture: ComponentFixture<SvgAnimatedCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgAnimatedCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAnimatedCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
