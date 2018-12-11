import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { PortfolioImg} from './portfolio-img';

@Component({
  selector: 'app-portfolio-img',
  templateUrl: './portfolio-img.component.html',
  styleUrls: ['./portfolio-img.component.css'],
  providers: [HttpService]
})
export class PortfolioImgComponent implements OnInit {
  images: PortfolioImg[] = [];
  images2: PortfolioImg[] = [];
  constructor(private httpService: HttpService){}


  ngOnInit() {
    // this.httpService.getData().subscribe(data => this.images = data["portfolioImageList"]);
    // this.httpService.getData().subscribe(data => this.images2 = data["portfolioImageList2"]);
    this.httpService.getImg().subscribe(data => this.images = data);
    this.httpService.getImg2().subscribe(data => this.images2 = data);
   }
}
