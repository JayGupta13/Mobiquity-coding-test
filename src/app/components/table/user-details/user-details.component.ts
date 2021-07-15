import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WheatherService } from 'src/app/service/wheather.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails:any ;
  constructor(private wheatherService: WheatherService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
     this.wheatherService.getEachTableContent(id).subscribe(response => {
       console.log('res ', response)
      this.userDetails = response;
    });
    console.log(this.userDetails, id)
  }

}
