import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  length=0;
  value2=0;
  password='';
  letters=false;
  numbers=false;
  symbols=false;
  onClickNumber($value:any){
   this.value2=$value.target.value;



   this.length=this.value2;
   console.log(this.length)


  }
  wantLetters(){
    this.letters=!this.letters;
  }
  wantSymbols(){
    this.symbols=!this.symbols;
  }
  wantNumers(){
    this.numbers=!this.numbers;
  }

 onButtonClick(){
  const charNumbers='1234567890';
  const charLetter='abcdefghijklmnopqrstuvwxyz';
  const charSymbols='!@#$%^&*';
  let generated='';
  if(this.letters){
    generated+=charLetter;
  }
  if(this.numbers){
    generated+=charNumbers;
  }
  if(this.symbols){
    generated+=charSymbols;
  }
  let generatedPassword='';
  for(let i=0;i<this.length;i++){
    const index=Math.floor(Math.random()* generated.length)
    generatedPassword+=generated[index]

  }
  console.log(generated);
  console.log(generatedPassword);
  this.password=generatedPassword;

 }
}
