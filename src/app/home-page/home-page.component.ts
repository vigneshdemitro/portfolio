import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class HomePageComponent implements OnInit,OnDestroy {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this._document.body.classList.add('body_bg');
  }

  ngOnDestroy() {
    this._document.body.classList.remove('body_bg')
  }
}
