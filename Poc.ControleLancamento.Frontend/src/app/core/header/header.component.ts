import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classeActive: string = '';

  ngOnInit(): void {
    this.classeActive = 'cadastro'
  }

  rotaChange(rota: string) {
    this.classeActive = rota;
  }
}