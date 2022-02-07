import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // quoting = new Quote (0, '', '', '', new Date(), 0, 0);
  // @Output() add = new EventEmitter<Quote>();

  newQuote = new Quote (0,'', '', '', '', new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  // addNewQuote(){
  //   this.add.emit(this.quoting);
  //   this.quoting = new Quote (0, '', '', '', new Date(), 0, 0);
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
