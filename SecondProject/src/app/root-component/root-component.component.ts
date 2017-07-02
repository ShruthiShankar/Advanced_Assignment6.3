import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent implements OnInit {
	title : string;
	name  : string;
  constructor() { }

  ngOnInit() {
  	this.title = "String interpolation";
  	this.name  = "Angular 2";
  }

}
