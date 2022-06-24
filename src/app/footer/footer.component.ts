import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: any ={"nombre":"jimmy","apellido":"atoccsa huayhua"};
  constructor() { }

  ngOnInit(): void {
  }

}
