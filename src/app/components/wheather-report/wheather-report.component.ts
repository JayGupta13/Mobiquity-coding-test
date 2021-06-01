import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WheatherService } from 'src/app/service/wheather.service';

@Component({
  selector: 'app-wheather-report',
  templateUrl: './wheather-report.component.html',
  styleUrls: ['./wheather-report.component.scss']
})
export class WheatherReportComponent implements OnInit {
  wheatherForcast: any;
  cityNames: any;

  constructor(private wheatherService: WheatherService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.wheatherService.getWheatherForcastForNextFiveDays().subscribe((data: any) => {
      this.wheatherForcast = data.list.slice(0, 5);
      this.cityNames = this.wheatherService.city;
    });
  }
  navigateToHome(event: any) {
    event.preventDefault();
    this.router.navigate(['home']);
  }
}
