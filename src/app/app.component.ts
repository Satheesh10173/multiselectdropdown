import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { IListItem, ISelectSettings } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public list:any[]=[];
  public settings = {
    isSearch: false,
    placeholder: 'Select',
    isSelectAll: true,
    isShowImage: false,
    singleSelect: false,
    isCount:true,
    count: 3
  };
  constructor() {
  }
  ngOnInit(): void {
    this.list = [
      { id: 1, name: 'Mumbai', image: 'assets/images/baby.jpg', checked: true},
      { id: 2, name: 'Bangaluru', image: 'assets/images/baby.jpg', checked: true },
      { id: 3, name: 'Pune', image: 'assets/images/baby.jpg', checked: false},
      { id: 4, name: 'Navsari', image: 'assets/images/baby.jpg', checked: true},
      { id: 5, name: 'New Delhi', image: 'assets/images/baby.jpg', checked: true},
      { id: 6, name: 'New Delhisd', image: 'assets/images/baby.jpg', checked: true},
      { id: 7, name: 'New Delhiwer', image: 'assets/images/baby.jpg', checked: true},
      { id: 8, name: 'New Delhifhg', image: 'assets/images/baby.jpg', checked: true},
      { id: 9, name: 'New Delhikjkh', image: 'assets/images/baby.jpg', checked: true}
    ];
  }
}
