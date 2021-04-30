import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Attribute } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ResumePageComponent implements OnInit,OnDestroy {

  constructor(@Inject(DOCUMENT) private _document ) { }

  ngOnInit(): void {
    this._document.body.classList.add('body-bg');
  }

  ngOnDestroy() {
    this._document.body.classList.remove('body-bg');
  }


}
