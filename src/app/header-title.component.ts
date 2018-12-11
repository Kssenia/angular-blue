import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styles: [`
    h1 {
      padding: 220px 0;
      font-size: 42px;
      line-height: 75px;
      text-align: center;
      color: #fff;
    }

    @media (max-width: 540px) {
      h1 {
        padding-top: 84px;
      }
    }

    @media (max-width: 456px) {
      h1 {
        padding-top: 44px;
      }
    }

    h1 span {
      background: #49535b;
    }

    @media (max-width: 990px) {
      h1 span {
        font-size: 35px;
      }
    }

    @media (max-width: 732px) {
      h1 span {
        font-size: 28px;
      }
    }

    @media (max-width: 540px) {
      h1 span {
        font-size: 23px;
      }
    }

    @media (max-width: 456px) {
      h1 span {
        font-size: 18px;
      }
    }
  `]
})
export class HeaderTitleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
