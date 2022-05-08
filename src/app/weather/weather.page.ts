import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
weathers:any = [];
temps:any = [];
winds:any = [];
galwayWeather:any = null;

  constructor(private service:WeatherService) { }

  ngOnInit() {
    this.service.GetWeatherData().subscribe((data)=>{
      this.weathers = data.weather;
      this.galwayWeather = this.weathers[0];
      this.temps = data.main;
      this.winds = data.wind;
      console.log(this.weathers);
      console.log(this.temps);
      console.log(this.winds);
  })}

}
