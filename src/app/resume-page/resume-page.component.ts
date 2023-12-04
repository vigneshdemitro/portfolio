import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import companiesData from '../../assets/data/companies-data.json';
import skillsData from '../../assets/data/skills-data.json';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ResumePageComponent implements OnInit,OnDestroy {

  constructor(@Inject(DOCUMENT) private _document ) { }
  
  companiesData: any;
  skillsData: any;

  ngOnInit(): void {
    this.companiesData = companiesData;
    this.skillsData = skillsData;
    this._document.body.classList.add('body-bg');
  }

  ngOnDestroy() {
    this._document.body.classList.remove('body-bg');
  }


}
