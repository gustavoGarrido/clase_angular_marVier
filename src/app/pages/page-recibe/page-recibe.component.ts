import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-recibe',
  templateUrl: './page-recibe.component.html',
  styleUrls: ['./page-recibe.component.css']
})
export class PageRecibeComponent implements OnInit {

  constructor(public activateRoute: ActivatedRoute) { }

  data1:any = ""
  data2:any = ""

  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.paramMap.get('data'))
    const ob:any = this.activateRoute.snapshot.paramMap.get('data1')
    this.data1 = JSON.parse(ob)
    console.log(this.data1)
    // this.data2 = this.activateRoute.snapshot.paramMap.get('data2');
  }

}
