import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<ConfirmComponent>) {}

  ngOnInit(): void {
    console.log(this.data)
  }
  close() {
    this._dialogRef.close(false);
  }
  action() {
    this._dialogRef.close(true);
  }
}
