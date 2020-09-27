import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productdata: any[];
  imageurls: any[];
  addeditemlst: any[];
  subtotallist: any[];

  constructor() { }

  ngOnInit() {
    this.productdata = [
      { 'name': 'comuter', 'price': '130', 'category': 'computers', 'description': '', 'image': 'comuter.jpg' },
      // { 'name': 'sweater', 'price': '1', 'category': 'Clothing', 'description': 'fashion, clothes , sweater, wool, cardigan,…'},
      { 'name': 'tie', 'price': '46', 'category': 'Clothing', 'description': 'fashion, tie, clothes, accessory , accessoire,…', 'image': 'tie.jpeg' },
      { 'name': 'jacket', 'price': '190', 'category': 'Clothing', 'description': 'winter  jacket ', 'image': 'jacket.jpeg' },
      { 'name': 'jacket men', 'price': '225', 'category': 'Clothing', 'description': 'fashion  man  jacket ', 'image': 'jacket_men.jpg' },
      { 'name': 'grapes', 'price': '18', 'category': 'fruits', 'description': 'food ,  leaf,  grape,s  wet,  green', 'image': 'grapes.jpeg' },
      { 'name': 'strawberries', 'price': '15', 'category': 'fruits', 'description': 'healthy  red sweet  strawberries', 'image': 'strawberries.jpeg' },
      { 'name': 'kiwi', 'price': '50', 'category': 'fruits', 'description': 'fruit  kiwi ', 'image': 'kiwi.jpeg' },
      { 'name': 'mouse', 'price': '80', 'category': 'computers', 'description': 'apple   mouse  ', 'image': 'mouse.jpg' },
      { 'name': 'keyboard', 'price': '80', 'category': 'computers', 'description': 'apple mac  keyboard', 'image': 'keyboard.jpg' },
      { 'name': 'headphone', 'price': '120', 'category': 'computers', 'description': 'music headphone', 'image': 'headphone.jpg' },
      { 'name': 'motherboard', 'price': '179', 'category': 'computers', 'description': 'pc motherboard with 16 Gb RAM', 'image': 'motherboard.jpg' },
      { 'name': 'notebook', 'price': '760', 'category': 'computers', 'description': 'macbook  notebook  computer', 'image': 'notebook.jpg' },
      { 'name': 'computer repair', 'price': '350', 'category': 'services', 'description': 'standard computer repairing', 'image': 'computer_repair.jpeg' },
      { 'name': 'gift folding', 'price': '7', 'category': 'services', 'description': '', 'image': 'gift_folding.jpeg' },
      { 'name': 'Clothing', 'price': '100', 'category': 'Clothing', 'description': '', 'image': 'clothing.jpg' },
      // { 'name': 'nivea pocket', 'price': '7', 'category': 'services', 'description': ''},
      // { 'name': 'nivea pocket bleu', 'price': '8', 'category': 'Catégorie', 'description': ''},
      // { 'name': 'chilli hot pizza', 'price': '200', 'category': 'pizza', 'description': ''}
    ];
    this.imageurls = [];
    this.addeditemlst = [];
    for (const row of this.productdata) {
      const url = 'assets/images/' + row.image;
      row.url = url;
      row.itemcount = 1;
      row.price = parseInt(row.price);
      row.totalprice = row.price;
    }
    this.imageurls = this.productdata;
    this.subtotallist = [
      { 'title': 'SubTotal', 'value': '0.000 EUR', 'subtotal': '0 items'},
      { 'title': 'VAT Tax', 'value': '10%', 'subtotal': '0.000 EUR'},
      { 'title': 'Discount', 'value': '10%', 'subtotal': '0.000 EUR'},
      { 'title': 'Total', 'value': '0.000 EUR', 'subtotal': ''}
    ];
  }

  add(itemdetail: any): void {
    this.addeditemlst.filter(x => x.name === itemdetail.name)[0].itemcount++;
    const totalprice = this.addeditemlst.filter(x => x.name === itemdetail.name)[0].totalprice++;
    this.addeditemlst.filter(x => x.name === itemdetail.name)[0].totalprice = totalprice + itemdetail.price;
  }

  remove(itemdetail: any): void {
    const itemcount = this.addeditemlst.filter(x => x.name === itemdetail.name)[0].itemcount;
    if (itemcount !== 0) {
      this.addeditemlst.filter(x => x.name === itemdetail.name)[0].itemcount--;
      const totalprice = this.addeditemlst.filter(x => x.name === itemdetail.name)[0].totalprice++;
      this.addeditemlst.filter(x => x.name === itemdetail.name)[0].totalprice = totalprice - itemdetail.price;
    }
  }

  addItem(itemdetail: any): void {
    const count = this.addeditemlst.filter(x => x.name === itemdetail.name).length;
    if (count > 0) {
      this.addeditemlst.filter(x => x.name === itemdetail.name)[0].itemcount++;
      const totalprice = this.addeditemlst.filter(x => x.name === itemdetail.name)[0].totalprice++;
      this.addeditemlst.filter(x => x.name === itemdetail.name)[0].totalprice = totalprice + itemdetail.price;
      return;
    }
    const itemjson = {
      'name': itemdetail.name,
      'price': itemdetail.price,
      'category': itemdetail.category,
      'description': itemdetail.description,
      'image': itemdetail.image,
      'itemcount': itemdetail.itemcount,
      'totalprice': itemdetail.totalprice,
      'url': itemdetail.url
    }
    this.addeditemlst.push(itemjson);
  }

  removeItem(itemdetail: any): void {
    this.addeditemlst = this.addeditemlst.filter(x => x.name !== itemdetail.name);
  }
}
