import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  treatDetails = [
    {
      id: 0,
      treatName: "Scooby Snacks",
      treatDetail: "Made by Mystery Inc., using a scary good mixture of ingredients.",
      treatPrice: "$24.99",
      treatImage: "assets/scoobysnack.jpg"
    },
    {
      id: 1,
      treatName: "Frosty Paws",
      treatDetail: "Everyone needs ice cream, even our furry friends!",
      treatPrice: "$19.99",
      treatImage: "assets/frostypaws.jpg"
    },
    {
      id: 2,
      treatName: "Puppy Chow",
      treatDetail: "Isn't it time the puppies finally get to have some?",
      treatPrice: "$29.99",
      treatImage: "assets/puppychow.jpg"
    }

  ]

}
