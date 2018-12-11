import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {PortfolioImg} from './portfolio-block/portfolio-img';
import { Services } from './services/services';

import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

    getImg(): Observable<PortfolioImg[]> {
      return this.http.get('assets/service.json').pipe(map(data => {
        let portfolioImages = data['portfolioImageList'];
        return portfolioImages.map(function (picture: any) {
          return {name: picture.name};
        });
      }));
    }
    getImg2(): Observable<PortfolioImg[]> {
      return this.http.get('assets/service.json').pipe(map(data => {
        let portfolioImages = data['portfolioImageList2'];
        return portfolioImages.map(function (picture: any) {
          return {name: picture.name};
        });
      }));
    }

    getInfo(): Observable<Services[]>{
      return this.http.get('assets/service.json').pipe(map(data =>{
        let servicesList = data['servicesList'];
        return servicesList.map(function (column: any) {
          return { imagePath: column.imagePath, title: column.title, text: column.text };
        });
      }));
    }
  }
  // configUrl = 'assets/service.json';
  // getData(){
  //   return this.http.get(this.configUrl);
  // }

