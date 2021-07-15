import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, from, Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  public city: any;
  private appid = "3d8b309701a13f65b660fa2c64cdc517"; 
  private openWheatherApi = "http://api.openweathermap.org/data/2.5/";
  constructor(private httpClient: HttpClient) { }
  private userDetails = new BehaviorSubject<any>(['']);

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
  public jsonApi()  : Observable<any>{
    const api1 = `https://jsonplaceholder.typicode.com/posts`;
    return this.httpClient.get(api1);
  }
  public jsonApi2()  : Observable<any>{
    const api2 = `https://jsonplaceholder.typicode.com/users`;
    return this.httpClient.get(api2);
  }
  public getTableContent()  : Observable<any>{
    const api = `https://jsonplaceholder.typicode.com/posts`;
    return this.httpClient.get(api);
  }
  public getTableHearders()  : Observable<any>{
    const api = ['Id', 'Title', 'Description', 'UserId'];
    return of(api);
  }
  // setUserDetails(value:any) {
  //   this.userDetails.next(value);
  // }
  // getUserDetails() {
  //   return this.userDetails.asObservable();
  // }
  public getEachTableContent(id:number)  : Observable<any>{
    const api = `https://jsonplaceholder.typicode.com/posts/` + id;
    return this.httpClient.get(api);
  }
  handleError() {

  }
}
