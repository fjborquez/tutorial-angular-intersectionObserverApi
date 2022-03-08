import { Component, Input, OnInit } from '@angular/core';
import { IntersectionStatus } from '../intersection-observer/from-intersection-observer';

@Component({
  selector: 'visibility-indicator',
  templateUrl: './visibility-indicator.component.html',
  styleUrls: ['./visibility-indicator.component.css']
})
export class VisibilityIndicatorComponent implements OnInit {
  intersectionStatus = IntersectionStatus;

  constructor() { }
  
  @Input()
  status: string;

  @Input()
  class: any;

  loadingBubblesConfig: any = {
    width: 120,
    height: 30,
    viewBox: '0 0 120 30',
    fill: '#2196F3',
  };

  ngOnInit(): void {
  }

}
