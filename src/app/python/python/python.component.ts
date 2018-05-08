import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/python/search']);
  }
  register() {
    this.router.navigate(['/python/register']);
  }
}
