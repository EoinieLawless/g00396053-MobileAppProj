import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
})
export class FlashlightPage implements OnInit {

  constructor(private flashlight: Flashlight) { }

  Flashlight() {

    this.flashlight.toggle();
    
  }

  ngOnInit() {
  }

}
