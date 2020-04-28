import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  public  description: string;
  public  title: string;
  public  prix: string;
  constructor(public modal: ModalController) { }
  ngOnInit() {
  }
saveItem(){
  let newItem = {
    description: this.description,
    titre : this.title,
    prix: this.prix
  }
  this.modal.dismiss(newItem);
}
close(){
  this.modal.dismiss();
}

}
