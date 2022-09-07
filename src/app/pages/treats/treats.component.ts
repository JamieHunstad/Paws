import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treats',
  templateUrl: './treats.component.html',
  styleUrls: ['./treats.component.css']
})
export class TreatsComponent implements OnInit {

  constructor() { }

  treatData: any;

  ngOnInit(): void {
  }

}
