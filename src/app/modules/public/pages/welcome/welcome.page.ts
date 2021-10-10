import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  @ViewChild('mySlide') slide: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  swipeNext(){
    this.slide.slideNext();
  }

}
