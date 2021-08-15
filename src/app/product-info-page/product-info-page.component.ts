import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.css']
})
export class ProductInfoPageComponent implements OnInit {


  emi: EMI[] = [
    { emiPeriod: '3 Months' },
    { emiPeriod: '6 Months' },
    { emiPeriod: '9 Months'},
    { emiPeriod: '1 Year' },
  ]

  num: number = 3;


  constructor() { }

  ngOnInit(): void {
  }
  payment()
  {
    alert("Payment is done")
  }

}

class EMI {
  emiPeriod: string | undefined;


}
