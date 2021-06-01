import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WheatherService } from '../../service/wheather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wheatherDetails: any;
  constructor(private wheatherService: WheatherService, private route: ActivatedRoute,
     private router: Router) { }
  ngOnInit(): void {
    // this.wheatherService.getCurrentWheatherData().subscribe((data: any) => {
    //   this.wheatherDetails = data;
    // });
    this.wheatherDetails = this.route.snapshot.data['data'];
  }
  navigateToReport(event: any, city: string) {
    event.preventDefault();
    this.wheatherService.setCity(city);
    this.router.navigate(['wheather-report']);
  }
}
