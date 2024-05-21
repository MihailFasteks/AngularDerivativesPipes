import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {
ship:string='Icon of the Seas - самый большой в мире корабль! Отправился в свое первое плавание по островам Карибского моря и порта Майами во Флориде.';
car:string='БелАЗ-75710 - самый большой автомобиль в мире! Разработан и создани в Белоруссии, на автомобильном заводе спец техники.';
plane:string='АН-225 или МРИЯ - самый большой в мире самолет украинского производства. Совершал в основном грузоперевозки. Не предназначен для коммерции.'
result:number=0;

setRes1(num:number){
  this.result=num;
}
}
