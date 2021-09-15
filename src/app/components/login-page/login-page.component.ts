import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  //   לנסות בבנאי של מחלקה זו
  //להזריק את השירות הנוויגציה של אנגולר
  //Router
  //צרו אותו כשדה של המחלקה
  //כדי שנוכל לפנות אליו מפונקציית לוגין
  //ואז בפונקציית לוגין לאחר השמירה בלוקאל סטוראז
  //יש לנווט את המשתמש לעמוד לקוחות

  constructor(private r: Router, private auth: AngularFireAuth) {}

  login(username, pass) {
    if (username && pass) {
      this.auth.signInWithEmailAndPassword(username,pass).then(()=>this.r.navigate(['customers'])).catch((error)=>alert(error))
    }
  }
}
