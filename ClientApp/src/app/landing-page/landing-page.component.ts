import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  registerform: FormGroup;
  public u: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private _router: Router) { }

  ngOnInit() {
    this.validation();
  }

  validation(){

    this.registerform = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      nome: [null, Validators.compose([Validators.required])],
      telefone: [null, Validators.compose([Validators.required,RxwebValidators.mask({mask:'(999)-99999 9999' })])]
    })
  }

  public register() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    if (this.registerform.valid) {
      this.u = this.registerform.value;
      this.userService.registerUser(this.u).subscribe(
        data => {
          swalWithBootstrapButtons.fire({
            title: 'Último passo para você receber seu curso',
            text: "Faça o seu cadastro no link da IQ Option clicando no link abaixo e você será redirecionado "+
            "para a página do mini curso",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Cadastrar na IQOption',            
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'A Angel Signals Brasil Agradece!',
                'Você será redirecionado para o mini curso europeu do nosso Trader X. Aproveite!!',
                'success'
              )
              window.open("https://bit.ly/CadastroIqOptionn","_blank");  
              this._router.navigate(['/video-aulas/'], { fragment: 'header2-0' });
              //this.sendTelegramMessage(this.u);            
            }
          })
        }, error => {

        }
      );
    }
  }

  public sendTelegramMessage(user: User){
    this.userService.sendTelegramMessage(user).subscribe(
      data => {
        
      }
    );
  }

}
