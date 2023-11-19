import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto_Biblioteca';
  isSideNavCollapsed= false;
  screeWidth=0;
  
  onToggleSideNav(data: SideNavToggle):void{
    this.screeWidth = data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
