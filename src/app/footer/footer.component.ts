import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  constructor() { }

  isMinWidth;

  ngOnInit(): void {
    this.isMinWidth = window.innerWidth < 767;
  }

  onWindowChange(): void {
    this.isMinWidth = window.innerWidth < 767;
  }

}
