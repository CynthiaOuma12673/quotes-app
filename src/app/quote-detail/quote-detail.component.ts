import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Input() quoter!: Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }

  upCounter(){
    this.quoter.upCount+=1;
  }

  downCounter(){
    this.quoter.downCount+=1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
