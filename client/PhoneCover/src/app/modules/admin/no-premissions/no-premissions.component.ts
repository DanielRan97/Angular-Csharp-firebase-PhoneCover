import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-premissions',
  templateUrl: './no-premissions.component.html',
  styleUrls: ['./no-premissions.component.scss']
})
export class NoPremissionsComponent implements OnInit {

  constructor(private router:Router) { }


  back(){
    this.router.navigate(['home'])
  }

  ngOnInit(): void {
  }

}
