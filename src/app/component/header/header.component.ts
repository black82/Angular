import {Component, OnInit} from '@angular/core';
import {ClientServiceService} from '../../service/httpclient/clientService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message: string;
  url: string;
  isColapset: boolean;
  // tslint:disable-next-line:variable-name
  _client: ClientServiceService;

  constructor(client: ClientServiceService) {
    this._client = client;
    this.url = 'dother compani home url';
    this.isColapset = true;
    this.message = 'Company DataBasse';
  }

  ngOnInit() {
  }

  teox(event) {
    this.isColapset = !this.isColapset;
  }

  logout() {
    this._client.logout();
  }

}
