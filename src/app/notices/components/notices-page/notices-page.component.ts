import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../../services/notices.service';

@Component({
  selector: 'app-notices-page',
  templateUrl: './notices-page.component.html',
  styleUrls: ['./notices-page.component.scss']
})
export class NoticesPageComponent implements OnInit {
  notices;

  constructor(private noticesService: NoticesService) { }

  ngOnInit(): void {
    this.notices = this.noticesService.getNotices()
    console.log(this.noticesService.getNotices());
  }

  getNotice() {

  }

  deleteNotice() {

  }
}
