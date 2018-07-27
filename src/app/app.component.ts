import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { SimpleSmoothScrollOption, SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isBrowser;

  constructor(private simpleSmoothService: SimpleSmoothScrollService,
              @Inject(PLATFORM_ID) private platformId
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  onScroll() {
    this.simpleSmoothService.smoothScrollToTop(new SimpleSmoothScrollOption(500, 'ease-out'));
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const scrollFunction = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          document.getElementById('up-arrow').style.display = 'flex';
        } else {
          document.getElementById('up-arrow').style.display = 'none';
        }
      };
      window.onscroll = function () {
        scrollFunction();
      };
    }
  }
}
