import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  public city: any;
  private appid = "3d8b309701a13f65b660fa2c64cdc517"; 
  private openWheatherApi = "http://api.openweathermap.org/data/2.5/";
  constructor(private httpClient: HttpClient) { }

  public getCurrentWheatherData(): Observable<any>{
    const currentWheatherDetailsApi = `${this.openWheatherApi}weather?q=London&appid=${this.appid}`
    return this.httpClient.get(currentWheatherDetailsApi);
  }

  setCity(city:string) {
    this.city = city;
  }

  public getWheatherForcastForNextFiveDays() : Observable<any>{
    const wheatherForcastApi = `${this.openWheatherApi}forecast?q=${this.city}&appid=${this.appid}`
    return this.httpClient.get(wheatherForcastApi);
  }
}
