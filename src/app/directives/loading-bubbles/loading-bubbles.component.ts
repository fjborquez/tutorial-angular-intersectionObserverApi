import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-bubbles',
  templateUrl: './loading-bubbles.component.html',
  styleUrls: ['./loading-bubbles.component.css']
})
export class LoadingBubblesComponent implements OnInit {
  
  public circles = [
    {
      cx: 15,
      cy: 15,
      r: 15,
      animates: [
        {
          attributeName: 'r',
          from: 15,
          to: 15,
          begin: '0s',
          dur: '0.8s',
          values: '15;9;15',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        },
        {
          attributeName: 'fill-opacity',
          from: 1,
          to: 1,
          begin: '0s',
          dur: '0.8s',
          values: '1;.5;1',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }
      ]
    },
    {
      cx: 60,
      cy: 15,
      r: 9,
      'fill-opacity': 0.3,
      animates: [
        {
          attributeName: 'r',
          from: 9,
          to: 9,
          begin: '0s',
          dur: '0.8s',
          values: '9;15;9',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        },
        {
          attributeName: 'fill-opacity',
          from: 0.5,
          to: 0.5,
          begin: '0s',
          dur: '0.8s',
          values: '.5;1;.5',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }
      ]
    },
    {
      cx: 105,
      cy: 15,
      r: 15,
      animates: [
        {
          attributeName: 'r',
          from: 15,
          to: 15,
          begin: '0s',
          dur: '0.8s',
          values: '15;9;15',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        },
        {
          attributeName: 'fill-opacity',
          from: 1,
          to: 1,
          begin: '0s',
          dur: '0.8s',
          values: '1;.5;1',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {  }

}
