import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore'; 
@Component({
  selector: 'app-myshop',
  templateUrl: './myshop.page.html',
  styleUrls: ['./myshop.page.scss'],
})
export class MyshopPage implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }
  createDatabse(items){
    return this.firestore.collection('itemsList').add(items);
}
readDatabse() {
  return this.firestore.collection('policies').snapshotChanges();
}
updateDatabse(items){
  delete items.id;
  this.firestore.doc('itemsList/' + items.id).update(items);
}
deleteItem(itemId: string){
  this.firestore.doc('itemsList/' + itemId).delete();
}

}
