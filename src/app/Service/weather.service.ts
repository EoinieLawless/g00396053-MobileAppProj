import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  GetWeatherData():Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=53.2719&lon=-9.0489&appid=08dcab4acceed424ee4983ed19955cbf')
  }
}
