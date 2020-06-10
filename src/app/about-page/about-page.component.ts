import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject, } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AboutPageComponent implements OnInit,OnDestroy {

  constructor(@Inject(DOCUMENT) private _document ) { }

  ngOnInit(): void {
    this._document.body.classList.add('body-bag');
  }

  ngOnDestroy() {
    this._document.body.classList.remove('body-bag');
  }

}
