import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  sortOrders: string[] = ["Year", "Title", "Author"];
  selectedSortOrder: string = "Year";
  constructor() { }

  ngOnInit() {
  }
  onClick(){
   console.log('onOpenChange');
  }
  ChangeSortOrder(newSortOrder: string) {
    this.selectedSortOrder = newSortOrder;
  }
}
