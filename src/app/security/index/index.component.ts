import { Component, OnInit } from '@angular/core';
import { TokenService } from '../Service/token.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';

  constructor(private tokenService: TokenService) { }

  ngOnInit(){
    if(this.tokenService.getToken() || !this.tokenService.getToken()) {
      this.isLogged = true;
      if (this.tokenService.getUserName() || !this.tokenService.getUserName()) {
        this.nombreUsuario;
      }
    } 
  }

}
