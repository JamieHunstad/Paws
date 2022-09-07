import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-treat-item',
  templateUrl: './treat-item.component.html',
  styleUrls: ['./treat-item.component.css']
})
export class TreatItemComponent implements OnInit {

  constructor(private service: OrderDetailsService, private route: ActivatedRoute) { }

  treatData: any;
  id: number = 0;

  ngOnInit(): void {
    this.treatData = this.service.treatDetails;
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.id = +params['id']
      }
    )
  }
}
