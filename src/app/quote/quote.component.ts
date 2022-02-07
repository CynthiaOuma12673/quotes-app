import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1, 'Cynthia', 'Love', 'I love you for all that you are, all that you have been and all that you will be', 'Cynthia Ouma', new Date(2021,12,3), 0, 0),
    new Quote (2, 'Leone', 'Technology', 'Technology is the best when it brings people together','Bill Gates', new Date(2022,1,1), 0, 0),
    new Quote (3, 'Lawrence', 'Motivational', 'The greatest glory in living lies not in never falling but in rising every time we fail','Maya Angelou',new Date(2022,1,31), 0, 0),
    new Quote (4, 'Namenge', 'Time', 'Time is limited so do not waste it living someone elses life ','Robert Chris', new Date(2022,2,4), 0, 0)
  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;

  }
    // sorting quotes according to date
  get sortingQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.quoteDate) - <any>new Date(a.quoteDate);
    });
  }  

  //delete btn
  deleteQuote(isComplete:any, index:any){
    if (isComplete){
      let toDelete = confirm (`Are you sure you want to delete ${this.quotes[index].quotetitle}?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quoteDate = new Date(quote.quoteDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
