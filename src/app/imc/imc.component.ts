import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  altura: number = 0;
  peso: number = 0;
  resultado: string = "";

  enviar()
  {
    var imc = this.peso/(this.altura*this.altura);
    var situacao;
    if(imc < 18.5)
    {
        situacao = "Magreza";
    }
    else
    {
      if(imc < 25)
      {
        situacao = "Normal";
      }
      else
      {
          if(imc < 30)
          {
            situacao = "Sobrepeso";
          }
          else
          {
              if(imc < 35)
              {
                situacao = "Obesidade grau 1";
              }
              else
              {
                  if(imc < 40)
                  {
                    situacao = "Obesidade grau 2";
                  }
                  else
                  {
                    situacao = "Obesidade grau 3";
                  }
              }
          }
      }
    }
    this.resultado = imc.toFixed(2) + " -> " + situacao;
  }

}
