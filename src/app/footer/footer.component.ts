import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  isMinWidth;
  isCopyright = false;

  ngOnInit(): void {
    this.isMinWidth = window.innerWidth < 767;
  }

  onWindowChange(): void {
    this.isMinWidth = window.innerWidth < 767;
  }

  toggleCopyright(): void {
    this.isCopyright = !this.isCopyright; console.log(this.isCopyright)
  }

}
