import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public image: string = 'assets/image/hero_right.png';
  constructor() { }

  ngOnInit(): void {
  }

}
