import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';

  imageUrl:string="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="

classe:string="rouge";

bouton:boolean=true;

  cliquer(){
    console.log("bouton cliqué");
  }
  utilisateurs:any[]=[
    {"nom":"Dupont","prenom":"Jean","email":"jd@mail.fr","telephone":"0102030405","age":28},
    {"nom":"Durand","prenom":"Sophie","email":"sd@mail.fr","telephone":"0202030405","age":28}
  ]

  detailBouton:boolean=true;
 
  cacherDetails():void{
    // if (this.detailBouton)
    // {
    //   this.detailBouton=false;
    // }else{
    //   this.detailBouton=true;
    // }
    this.detailBouton=!this.detailBouton
  }

  msg:string="";

  oUtil:{nom:string, prenom:string,email:string,telephone:string,age:number}=
  {"nom":"test", "prenom":"test","email":"test@test.fr","telephone":"test","age":25};

  ajout:boolean=true;

  ajouterU():void{
    this.oUtil.nom=this.msg;
    this.utilisateurs.push(this.oUtil);
  }
}
