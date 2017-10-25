import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css'],
  
})
export class AcercaComponent implements OnInit {
  vegetables = [
    {name: 'Carrot', type: 'vegetable'},
    {name: 'Onion', type: 'vegetable'},
    {name: 'Potato', type: 'vegetable'},
    {name: 'Capsicum', type: 'vegetable'}];
    gifs =[
      {name:"pesho",type:"gifs",url:"http://www.gimnasiototal.com/animaciones/ejerciciosparapecho3.gif",dia:"lunes"},
      {name:"pecho",type:"gifs",url:"https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho5.gif",dia:"lunes"}
    ];
    fruits = [
      {name: 'Apple', type: 'fruit'},
      {name: 'Orange', type: 'fruit'},
      {name: 'Mango', type: 'fruit'},
      {name: 'Banana', type: 'fruit'}];
    
  droppedItemsLunes:Array<any> = [];
  droppedItemsMartes:Array<any> = [];
  droppedItemsMiercoles:Array<any> = [];
  droppedItemsJueves:Array<any> = [];
  droppedItemsViernes:Array<any> = [];
  droppedItemsSabado:Array<any> = [];
  droppedItemsDomingo:Array<any> = [];
  onAnyDropLunes(e: any) {
    this.droppedItemsLunes.push(e.dragData);
  }
  onAnyDropMartes(e: any) {
    this.droppedItemsMartes.push(e.dragData);
  }
  onAnyDropMiercoles(e: any) {
    this.droppedItemsMiercoles.push(e.dragData);
  }
  onAnyDropJueves(e: any) {
    this.droppedItemsJueves.push(e.dragData);
  }
  onAnyDropViernes(e: any) {
    this.droppedItemsViernes.push(e.dragData);
  }
  onAnyDropSabado(e: any) {
    this.droppedItemsSabado.push(e.dragData);
  }
  onAnyDropDomingo(e: any) {
    this.droppedItemsDomingo.push(e.dragData);
  }
  onDeleteDrop(e: any) {
    if(this.droppedItemsLunes.includes(e.dragData)){
      this.removeItemL(e.dragData, this.droppedItemsLunes);
    }
    if(this.droppedItemsMartes.includes(e.dragData)){
      this.removeItemM(e.dragData, this.droppedItemsMartes);
    }
    if(this.droppedItemsMiercoles.includes(e.dragData)){
      this.removeItemMi(e.dragData, this.droppedItemsMiercoles);
    }
    if(this.droppedItemsJueves.includes(e.dragData)){
      this.removeItemJ(e.dragData, this.droppedItemsJueves);
    }
    if(this.droppedItemsViernes.includes(e.dragData)){
      this.removeItemV(e.dragData, this.droppedItemsViernes);
    }
    if(this.droppedItemsSabado.includes(e.dragData)){
      this.removeItemS(e.dragData, this.droppedItemsSabado);
    }
    if(this.droppedItemsDomingo.includes(e.dragData)){
      this.removeItemD(e.dragData, this.droppedItemsDomingo);
    }
  }

  removeItemL(item: any,  list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  removeItemM(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  removeItemMi(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  removeItemJ(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  removeItemV(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  removeItemS(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  removeItemD(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
