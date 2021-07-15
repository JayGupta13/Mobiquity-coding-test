import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';

import { WheatherService } from 'src/app/service/wheather.service';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { DialogService } from 'src/app/shared/dialog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  searchInput:string = '';
  tableContentDeatils:any = [];
  tableContentHearder:any = [];
  constructor(private wheatherService: WheatherService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.wheatherService.getTableContent().pipe(take(10)
        ).subscribe((data: any) => {
            
      this.tableContentDeatils = data;
    });
    this.wheatherService.getTableHearders().subscribe((data: any) => {
      this.tableContentHearder = Object.values(data);
    });
    console.log('search', this.tableContentHearder );
  }
  searchItem() {
    if(this.searchInput == '') {
      this.ngOnInit();
    } else {
      this.tableContentDeatils = this.tableContentDeatils.filter((text:any) => {
      return text.description && text.description.toLowerCase().includes(
        this.searchInput.toLowerCase());
      })
    }
    
  }
  searchData(value:string) {
    console.log(value);
  }
  confirmOverlay() {
    // this.dialogService.openDialog(ConfirmComponent, {
    //   data: {
    //     heading: 'Confirm Header',
    //     message: 'Are you sure you want to nagivate ?',
    //     action: 'Yes'
    //   },
    //   autoFocus: false,
    //   width: '750px'
    // })
    // .afterClosed().subscribe(action => {
    //   console.log(action);
    // })
  }
}
