import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1, 'Cynthia', 'Love', 'I love you for all that you are, all that you have been and all that you will be', new Date(2022,2,3), 0, 0),
    new Quote (2, 'Leone', 'Technology', 'Technology is the best when it brings people together', new Date(2022,2,1), 0, 0),
    new Quote (3, 'Lawrence', 'Motivational', 'The greatest glory in living lies not in never falling but in rising every time we fail', new Date(2022,1,31), 0, 0),
    new Quote (4, 'Namenge', 'Time', 'Time is limited so do not waste it living someone elses life ', new Date(2022,2,4), 0, 0)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
