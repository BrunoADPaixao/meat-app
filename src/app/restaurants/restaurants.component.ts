import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {
  restaurants : Restaurant[]

  constructor(private restaurantsServices: RestaurantsService) { }

  ngOnInit() { // quando o componente é iniciado faz o subscribe do observable, o mesmo faz a requisição get e retorna o observable que é transformado em um array de restaurants com a função map
    this.restaurantsServices.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
