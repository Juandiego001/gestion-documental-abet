import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit, AfterViewInit {
  imgLogoUao = '../../../assets/imgs/uao-accreditation-negro.svg';  
  @ViewChild('nombreUsuario') inputNombreUsuario: ElementRef = new ElementRef(HTMLInputElement);
  @ViewChild('contrasena') inputContrasena: ElementRef = new ElementRef(HTMLInputElement);

  usuario: any = [];

  constructor(private elem: ElementRef, private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  toggleContrasena(){
    this.inputContrasena.nativeElement.type = this.inputContrasena.nativeElement.type === 'password' ? 'text' : 'password';
  }

  clickIniciarSesion(event?: MouseEvent) {
    let nombreUsuario = this.inputNombreUsuario.nativeElement.value;
    let contrasena = this.inputContrasena.nativeElement.value;
    console.log(`Nombre de usuario: ${nombreUsuario}\nContraseña: ${contrasena}`);

    this.usuarioService.findOne(nombreUsuario, contrasena).subscribe(
      res => {
        this.usuario = res;
        if (this.usuario.length > 0){
          console.log(res);
          alert('Inicio de sesión exitoso!');
          this.router.navigate(['/home']);
        } else {
          alert('Error. Por favor verifique los datos.');
        }    
      },
      err => {
        alert('Ha ocurrido un error en el servidor.');
        console.log(err);
      }
    );
  }

}
