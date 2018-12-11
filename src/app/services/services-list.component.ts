import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import {Services} from './services';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  providers:  [HttpService]
})
export class ServicesListComponent implements OnInit {
  services: Services[] = [];

    constructor(private httpService: HttpService){}

  ngOnInit(){
      this.httpService.getInfo().subscribe(data => this.services = data);
    // this.httpService.getData().subscribe(data => this.services = data["servicesList"]);

    }
}
