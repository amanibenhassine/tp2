import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
import { AddItemPage } from '../add-item/add-item.page';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  produits = [{
    titre: 'frais',
    description: 'tres delicie',
    prix: 20
  },
  {
    titre: 'banane',
    description: 'beaucoup d\'energie',
    prix: 15
  },

]
  constructor(public modal: ModalController, private router: Router) {}
  ngOnInit() {
  }
  async addItem(){
    const modal = await this.modal.create({
      component: AddItemPage
    });
    modal.onDidDismiss().then((item) =>{
      console.log(item.data)
      this.produits.push(item.data);
    })
    return await modal.present();
  }
  viewDetails(produit){
    let navigationExtras: NavigationExtras = {state: {item: produit}};
    this.router.navigateByUrl('item-details', navigationExtras);
    console.log(produit)
  }
}
