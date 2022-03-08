import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[svg-animated-circle]',
  templateUrl: './svg-animated-circle.component.html',
  styleUrls: ['./svg-animated-circle.component.css']
})
export class SvgAnimatedCircleComponent implements OnInit {

  @Input()
  cx: number;

  @Input()
  cy: number;

  @Input()
  r: number;

  @Input()
  fillOpacity: number;

  @Input()
  animates: any;

  constructor() { }

  ngOnInit(): void {
  }

}
