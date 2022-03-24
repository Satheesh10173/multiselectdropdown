import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { IListItem, ISelectSettings } from './ng-multiselect-angular.model';

@Component({
  selector: 'ng-multiselect-angular',
  templateUrl: './ng-multiselect-angular.component.html',
  styleUrls: ['./ng-multiselect-angular.component.scss']
})
export class NgMultiselectAngularComponent implements OnInit {
  title = 'multi';
  public isOpen: boolean = false;
  public isSearch: boolean = true;
  public savedList: any[] = [];
  public copySavedList: any[] = [];
  public searchData: any = '';
  public isCheckedAll: boolean = false;
  public showCount: number = 0
  @Input() dropdownList: IListItem[] = [];
  @Input() selectSettings: ISelectSettings = {
    isSearch: false,
    placeholder: 'Select',
    isSelectAll: false,
    isShowImage: false,
    singleSelect: true,
    isCount: false,
    count: 10
  };
  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.isOpen = false;
  };
  @Output('onSelectAll')
  onSelectAll: EventEmitter<Array<IListItem>> = new EventEmitter<Array<IListItem>>();
  @Output('onSelect')
  onSelect: EventEmitter<IListItem> = new EventEmitter<IListItem>();
  @Output('onUnSelectAll')
  onUnSelectAll: EventEmitter<Array<IListItem>> = new EventEmitter<Array<IListItem>>();
  @Output('onSelect')
  onUnSelect: EventEmitter<IListItem> = new EventEmitter<IListItem>();
  constructor() {
  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    const change: any = changes;
    const currentChange = JSON.stringify(change.dropdownList.currentValue);
    const previewsChange = JSON.stringify(change.dropdownList.previousValue);
    if (currentChange !== previewsChange) {
      if (change.dropdownList.currentValue.length) {
        if (!this.selectSettings.singleSelect) {
          this.savedList = change.dropdownList.currentValue.filter((x: IListItem) => x.checked === true);
          if (this.savedList.length === this.dropdownList.length) {
            this.isCheckedAll = true;
          }
        } else {
          this.savedList.push(change.dropdownList.currentValue.find((x: IListItem) => x.checked === true));
          this.dropdownList.forEach((element) => {
            element.checked = element.id !== this.savedList[0].id ? false : true;
          });
        }
      }
    }
    if (this.selectSettings.count && this.selectSettings.count < this.savedList.length) {
      this.showCount = this.savedList.length - this.selectSettings.count;
      if (this.showCount) {
        for (const it of this.savedList) {
          if (this.copySavedList.length <= this.selectSettings.count) { }
          this.copySavedList.push(it);
        }
      } else {
        this.copySavedList = this.savedList;
      }
    } else {
      this.copySavedList = this.savedList;
    }
  }
  public onClickArrow(value: boolean) {
    this.isOpen = value === true ? false : true;
  }

  public onCheckChange(checked: any, value: any) {
    if (!this.selectSettings.singleSelect) {
      const data = this.savedList.find((x) => x.id === value.id);
      if (checked) {
        if (this.savedList.length && !data) {
          value.checked = true;
          this.savedList.push(value);
        } else if (!this.savedList.length) {
          value.checked = true;
          this.savedList.push(value);
        }
      } else if (!checked && value) {
        value.checked = false;
        this.savedList.splice(this.savedList.findIndex((d) => d.id === value.id), 1);
      }
      this.isCheckedAll = (this.savedList.length === this.dropdownList.length) ? true : false;
      this.onSelect.emit(value);
    } else {
      value.checked = true;
      this.dropdownList.forEach((ele:any) => {
        ele.checked = ele.id !== value.id ? false : true;
      });
      this.savedList = [value];
      this.onSelect.emit(value);
    }
  }

  public onRemove(index: number, value: any) {
    this.savedList.splice(index, 1);
    const data = this.dropdownList.find((s) => s.id === value.id);
    if (data) {
      data.checked = false;
      this.dropdownList = this.dropdownList.map((a) => ({ ...a }));
    }
    this.isCheckedAll = (this.savedList.length === this.dropdownList.length) ? true : false;
    // if (this.selectSettings.count && this.selectSettings.count < this.savedList.length) {
    //   this.showCount = this.savedList.length - this.selectSettings.count;
    //   for (const it of this.savedList) {
    //     if (this.copySavedList.length <= this.selectSettings.count) { }
    //     this.copySavedList.push(it);
    //   }
    // }
  }

  public onCheckAllChange(check: boolean) {
    if (check) {
      this.isCheckedAll = true;
      for (const it of this.dropdownList) {
        const data = this.savedList.find((d) => d.id === it.id);
        if (!data) {
          it.checked = true;
          this.savedList.push(it);
        }
      }
    } else {
      this.isCheckedAll = false;
      this.savedList = [];
      this.dropdownList.forEach((x) => x.checked = false);
    }
    this.dropdownList = this.dropdownList.map((a) => ({ ...a }));
    if(this.savedList.length) {
      this.onSelectAll.emit(this.savedList);
    } else {
      this.onUnSelectAll.emit(this.savedList);
    }
    
  }
}
