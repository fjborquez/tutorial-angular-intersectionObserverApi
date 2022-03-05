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

  ngOnInit(): void {
  }

}
