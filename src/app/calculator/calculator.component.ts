import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isAllowed = true
  result = '';
  num1 = 0;
  num2 = 0;
 
  constructor() { }

  ngOnInit() {}
  calculate(){
    this.result = "RESULT = "+ (this.num1+this.num2)

  }
 
}
