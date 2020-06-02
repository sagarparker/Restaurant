import { Component, OnInit, Inject} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  selLead : Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leadservice: LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish);    
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion )
    this.leadservice.getFeaturedLeader()
      .subscribe(selLead => this.selLead = selLead);
  }

}
