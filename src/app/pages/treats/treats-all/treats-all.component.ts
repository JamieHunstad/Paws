import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-treats-all',
  templateUrl: './treats-all.component.html',
  styleUrls: ['./treats-all.component.css']
})
export class TreatsAllComponent implements OnInit {

  constructor(private service: OrderDetailsService) { 
  }

  treatData: any;
  id: number = 0;

  ngOnInit(): void {
    this.treatData = this.service.treatDetails;
  }

}
