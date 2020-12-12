import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-film1',
  templateUrl: './film1.component.html',
  styleUrls: ['./film1.component.scss']
})
export class Film1Component implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
