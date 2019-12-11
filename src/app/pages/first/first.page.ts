import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    const currentUser = this.authService.getUser();
    console.log(currentUser);
    if(currentUser){
      this.router.navigate(["/menu/home"]);
    }
  }

}
