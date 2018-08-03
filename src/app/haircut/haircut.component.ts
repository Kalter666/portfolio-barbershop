import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  SimpleSmoothScrollOption,
  SimpleSmoothScrollService
} from 'ng2-simple-smooth-scroll/lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.component.html',
  styleUrls: ['./haircut.component.scss']
})
export class HaircutComponent implements OnInit {

  constructor(
    private titleService: Title,
    private simpleSmoothService: SimpleSmoothScrollService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Барбершоп | Стрижка');
    this.simpleSmoothService.smoothScrollToTop(
      new SimpleSmoothScrollOption(300, 'ease-in')
    );
  }
}
