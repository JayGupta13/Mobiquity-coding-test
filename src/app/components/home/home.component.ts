import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, observable, of } from 'rxjs';
import { take, mergeMap, concatMap } from 'rxjs/operators';
import { WheatherService } from '../../service/wheather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wheatherDetails: any;
   api1 = `https://jsonplaceholder.typicode.com/posts`;
   api2 = `https://jsonplaceholder.typicode.com/users`;
   homeworld: any;
  constructor(private wheatherService: WheatherService, private route: ActivatedRoute,
     private router: Router, private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.wheatherDetails = this.route.snapshot.data['data'];
   const obs1 =   of(this.wheatherService.jsonApi());
   const obs2 = of( this.wheatherService.jsonApi2());
   this.homeworld = this.httpClient
   .get(this.api1)
   .pipe(mergeMap(character => { return this.httpClient.get(this.api2)}));

   this.homeworld.subscribe((res1:any) => {
    console.log("res1 ", res1);
    // console.log("res2 ", res2);
  })
  }
  navigateToReport(event: any, city: string) {
    event.preventDefault();
    this.wheatherService.setCity(city);
    this.router.navigate(['wheather-report']);
  }
}
