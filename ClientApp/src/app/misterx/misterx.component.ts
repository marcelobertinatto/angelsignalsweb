import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-misterx',
  templateUrl: './misterx.component.html',
  styleUrls: ['./misterx.component.css']
})
export class MisterxComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public oferta(){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
      Swal.fire({
        icon: 'warning',
        title: 'Temos uma oferta pra você!!',
        text: 'Gostaria de participar da nossa sala VIP por 50% de desconto?',
        confirmButtonColor: '#11ab1e',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        confirmButtonText: 'Claro, manda!',
        cancelButtonText: 'Não, obrigado!'
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'warning',
            title: 'Você não vai acreditar, temos mais uma oferta pra você!!',
              text: 'Gostaria de participar de receber nosso curso do básico ao avançado com 50% de desconto?',
              confirmButtonColor: '#11ab1e',
              cancelButtonColor: '#d33',
              showCancelButton: true,
              confirmButtonText: 'Claro, manda!',
              cancelButtonText: 'Não, obrigado!'
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://bit.ly/CadastroIqOptionn","_blank");  
            swalWithBootstrapButtons.fire(
              'Muito obrigado!',
              'O time da Angel Signals Brasil agradece a preferência :)',
              'success'
            )
          }
          else if (result.dismiss === Swal.DismissReason.cancel) {
            window.open("https://bit.ly/CadastroIqOptionn","_blank");
            swalWithBootstrapButtons.fire(
              'Muito obrigado!',
              'O time da Angel Signals Brasil agradece a preferência :)',
              'success'
            )
          }
        });
      }else if (result.dismiss === Swal.DismissReason.cancel) {
        window.open("https://bit.ly/CadastroIqOptionn","_blank");
        swalWithBootstrapButtons.fire(
          'Muito obrigado!',
          'O time da Angel Signals Brasil agradece a preferência :)',
          'success'
        )
      }
    });    
  }

  

}
