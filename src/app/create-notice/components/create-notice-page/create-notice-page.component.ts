import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateNoticeService } from '../../services/create-notice.service';

@Component({
  selector: 'app-create-notice-page',
  templateUrl: './create-notice-page.component.html',
  styleUrls: ['./create-notice-page.component.scss']
})
export class CreateNoticePageComponent implements OnInit {
  noticeForm : FormGroup;
  constructor(private createNoticeService: CreateNoticeService){
      this.noticeForm = new FormGroup(
        {
          "title": new FormControl("", [
            Validators.required
          ]),
          "description": new FormControl("", [
            Validators.required,
          ]),
        }
      );
  }

  ngOnInit(): void {
  }

  submitHandler(){
    console.log(this.noticeForm.value);
    this.createNoticeService.createNotice(this.noticeForm.value);
  }
}
