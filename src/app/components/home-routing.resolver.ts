import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { WheatherService } from '../service/wheather.service';

@Injectable({
  providedIn: 'root'
})
export class HomeRoutingResolver implements Resolve<any> {
  constructor( private wheatherService: WheatherService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.wheatherService.getCurrentWheatherData();
  }
}
