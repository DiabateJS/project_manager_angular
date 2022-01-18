import {Component, Input, OnInit} from '@angular/core';
import {EMPTY_STRING} from '../model/constants';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input()
  login: string = EMPTY_STRING;

  constructor() { }

  ngOnInit(): void {
  }

}
