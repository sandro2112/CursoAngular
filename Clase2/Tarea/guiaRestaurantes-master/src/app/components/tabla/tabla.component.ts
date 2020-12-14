import { Component, Input, OnInit } from '@angular/core';
import { Rest } from 'src/app/app.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() array_rest:Rest[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
