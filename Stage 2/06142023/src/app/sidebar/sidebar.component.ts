import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarItems: string[] = ['Home', 'About', 'Services', 'Contact'];
  selectedItem: string="";
  selectItem(item: string) {
    this.selectedItem = item;
    // Add logic to handle item selection (e.g., navigate to a specific route)
  
  }  
  constructor() { }

  ngOnInit() {
  }

}
