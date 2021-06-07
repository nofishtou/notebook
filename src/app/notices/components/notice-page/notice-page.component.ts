import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticesService } from '../../services/notices.service';

@Component({
  selector: 'app-notice-page',
  templateUrl: './notice-page.component.html',
  styleUrls: ['./notice-page.component.scss']
})
export class NoticePageComponent implements OnInit {
  notice;

  constructor(private noticesService: NoticesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.notice = this.noticesService.getNotice(+this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id, this.notice)
  }

}
