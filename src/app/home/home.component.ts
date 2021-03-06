import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild("home", { static: false }) home;
  @ViewChild("aboutme", { static: false }) aboutme;
  @ViewChild("portfolio", { static: false }) portfolio;
  @ViewChild("experience", { static: false }) experience;
  @ViewChild("education", { static: false }) education;
  @ViewChild("skills", { static: false }) skills;
  @ViewChild("contact", { static: false }) contact;

  navigateTo(element: string) {
    this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  currentDate = new Date().getFullYear();
  age = 0;
  birthYear = 1996;


  ngOnInit(): void {

    

    $(document).ready(function () {
      $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "all") {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
        }
        else {
          //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
          //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.' + value).hide('3000');
          $('.filter').filter('.' + value).show('3000');
        }
      });

      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");
    });

    document.addEventListener('DOMContentLoaded', function (event) {
      // array with texts to type in typewriter
      var dataText = ["Full Stack Developer.", "Software Developer.", "Designer."];
      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to h1
          document.querySelector(".try").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(function () {
            typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
      // start a typewriter animation for a text in the dataText array
      function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
          setTimeout(function () {
            StartTextAnimation(0);
          }, 2000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
          typeWriter(dataText[i], 0, function () {
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          });
        }
      }
      // start the text animation
      StartTextAnimation(0);
    });

    this.calculateAge();


    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.getElementById("img01");

    Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
      item.addEventListener("click", event => {
        modal.style.display = "block";
        modalImg['src'] = event.target['src'];
      });
    });

    document.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  }

  calculateAge() {
    this.age = this.currentDate - this.birthYear;
    return this.age;
  }

  loadMore(){
    
    document.getElementById('more').style.display = "block";
    document.getElementById('link').style.display = "none"
  }

}
