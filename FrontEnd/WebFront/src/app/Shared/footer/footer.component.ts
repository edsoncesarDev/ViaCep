import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public imgWhats: string = 'assets/image/whats.png';
  public url: string = 'https://api.whatsapp.com/send?phone=5585998639160&text=Ol%C3%A1%20peguei%20seu%20contato%20no%20site';
  constructor() { }

  ngOnInit(): void {
  }

}
