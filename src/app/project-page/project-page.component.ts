import { Component, OnInit, OnDestroy,ViewEncapsulation,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ProjectPageComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT)private _document) {  }

  ngOnInit(): void {
    this._document.body.classList.add('body-pbg');
  }

  ngOnDestroy() {
    this._document.body.classList.remove('body-pbg');
  }

  covid(){
    return window.open("https://vigneshdemitro.github.io/covid19","mywindow");    
  }

  mind() {
    return window.open("https://github.com/vigneshdemitro/mind_game","mywindow");
  }

  
}
