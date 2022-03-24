# NgMultiselectAngular

Angular multiselect dropdown component for web applications. Easy to integrate and use. It can be bind to any custom data source.


## Getting Started

# Package Features

dropdown with single/multiple selction option
bind to any custom data source
search item with custom placeholder text
select/un-select all items

# Installation steps

> npm i ng-multiselect-angular

And then add it in your module (see app.module.ts):

> import { NgMultiselectAngularModule } from 'ng-multiselect-angular';

@NgModule({
  imports: [
    NgMultiselectAngularModule
  ]
})
export class AppModule {}

And then add it in your Component (see app.component.ts):

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sample';
  public list:any[]=[];
  public settings = {
    isSearch: false,
    placeholder: 'Select Country',
    isSelectAll: true,
    isShowImage: true,
    singleSelect: true
  };

  ngOnInit(): void {
    this.list = [
      { id: 1, name: 'India', image: 'assets/images/baby.jpg', checked: false},
      { id: 2, name: 'Us', image: 'assets/images/baby.jpg', checked: true },
      { id: 3, name: 'China', image: 'assets/images/baby.jpg', checked: false},
      { id: 4, name: 'Russia', image: 'assets/images/baby.jpg', checked: false},
      { id: 5, name: 'Japan', image: 'assets/images/baby.jpg', checked: false},
      { id: 6, name: 'sriLankan', image: 'assets/images/baby.jpg', checked: false},
    ];
  }
}
```
And then add it in your HTML (see app.component.html):

> <ng-multiselect-angular [dropdownList]="list" [selectSettings]="settings"></ng-multiselect-angular>
