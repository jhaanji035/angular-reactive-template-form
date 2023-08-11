import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})


export class CalculatorComponent implements OnInit{
  constructor(private http: HttpClient) {
  }
  result:any = [];
  currencyUSD: number = 0
  convertedCurrency: number = 0
  @Input() childData: string | undefined;
  @Output() handleParentClick = new EventEmitter()
  ngOnInit(): void {
    this.http.get('http://localhost:4000/currencies').subscribe((response) => {
      this.result = response
    });
  }

  selectedCurrency(event: any) {
    this.http.post('http://localhost:4000/convertCurrency', {
      value: this.currencyUSD,
      currency: "USD"+event.target.value
    }).subscribe((response: any) => {
      this.convertedCurrency = parseFloat(response.value.toFixed(2))
    });
  }

  handleClick() {
    console.log('button clicked');
    this.handleParentClick.emit("Hey Parent")
  }
}
