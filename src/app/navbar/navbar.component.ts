import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Output() Navigate = new EventEmitter();

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }

  ngOnInit(): void {
    window.onscroll = function() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar-collapse").style.paddingTop = "0";
        document.getElementById("navbar").style.backgroundColor = "#777e86";
      } else {
        document.getElementById("navbar-collapse").style.paddingTop = "25px";
        document.getElementById("navbar").style.backgroundColor = "transparent";
      }
    };
    
  }


}
