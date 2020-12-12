import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-film2',
  templateUrl: './film2.component.html',
  styleUrls: ['./film2.component.scss']
})
export class Film2Component implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
