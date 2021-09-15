import { Component, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private r: Router,private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged((userDetails)=>{
      this.isLoggedIn=!!userDetails
    })
  }

  logout() {
   this.auth.signOut().then(()=>this.r.navigate(['login']))
  }

  isLoggedIn:boolean = false;
}
