import { Component } from '@angular/core';
import { SimpleSmoothScrollOption, SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private simpleSmoothService: SimpleSmoothScrollService) {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('up-arrow').style.display = 'block';
      } else {
        document.getElementById('up-arrow').style.display = 'none';
      }
    }
  }

  onScroll() {
    this.simpleSmoothService.smoothScrollToTop(new SimpleSmoothScrollOption(500, 'ease-out'));
  }
}
