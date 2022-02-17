import { Component, OnInit } from '@angular/core';
import {IonSlides}          from '@ionic/angular';
import {ViewChild } from '@angular/core';


@Component({
  selector: 'app-automatic-three-slider',
  templateUrl: './automatic-three-slider.component.html',
  styleUrls: ['./automatic-three-slider.component.scss'],
})
export class AutomaticThreeSliderComponent implements OnInit {
  @ViewChild('mySlider') slider: IonSlides;
  img: any;

  sliderOpts = {
    autoplay: true,
    zoom: {
      maxRatio: 5
    }
  };

  constructor() { }

  ngOnInit() {}

}
