import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.component.html',
  styleUrls: ['./haircut.component.scss']
})
export class HaircutComponent implements OnInit {


  constructor(private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle('Барбершоп | Стрижка');
  }

}
