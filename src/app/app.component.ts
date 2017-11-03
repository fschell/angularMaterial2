import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})

export class AppComponent {
  state = 0; // 1 = invalid, 2 = reset, 3 = valid, 4 = continue
  constructor(private loginService: LoginService) { }
  onEnter
  login(event, uid, pwd){
    //alert('login ' + uid + pwd);

    if (this.loginService.evaluate(uid, pwd)){
        this.state = 3;
        setTimeout(()=> this.state = 4, 1000);
        return;
    }
    this.state = 1;
    setTimeout(()=> this.state = 2, 1000);
    console.log(event);
  }

}
