import {Component, OnInit} from '@angular/core';
import {ClientServiceService} from '../../service/httpclient/clientService.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logHtml: SafeHtml;
  hidden = true;

  constructor(private client: ClientServiceService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  serviceGetLogHtml() {
    this.hidden = false;
    this.client.logGetHtml().subscribe(html => {
      this.logHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    }, error => {
      console.log(error);
    });

  }

  swouwHidden() {
    this.hidden = !this.hidden;
  }
}
