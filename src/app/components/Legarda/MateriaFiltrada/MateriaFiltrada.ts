import { Component, ElementRef, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef, TemplateRef, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";

// Para añadir los componentes de manera dinámica
// se añade la clase creada componentMateria.directive
import { ComponentMateriaDirective } from '../componentMateria.directive';
// Se añade el componente de componentMateria
import { componentMateria } from '../componentMateria';

@Component({
    selector: 'MateriaFiltrada',
    templateUrl: './MateriaFiltrada.html',
    styleUrls: ['./MateriaFiltrada.css'],
})

export class Materiafiltrada{
    togglearContenedor: boolean = true;
    // Se utilizan para añadir de manera dinámica
    // las tarjetas al contenedor de creación de tarjetas
    tarjetasActuales: number = 3;
    contadorFilas: number = 1;

    // Inputs para obtener la información
    // de la creación de las tarjetas 
    @ViewChild('nombreAsignatura') nomAsignatura: ElementRef = new ElementRef(HTMLInputElement);
    @ViewChild('creditosAsignatura') creAsignatura: ElementRef = new ElementRef(HTMLInputElement);
    @ViewChild('programaAsignatura') proAsignatura: ElementRef = new ElementRef(HTMLInputElement);
    @ViewChild('codigoAsignatura') codAsignatura: ElementRef = new ElementRef(HTMLInputElement);

    // Contenedor general para obtener la última fila
    @ViewChild('contenedorAsigaturas') conAsignaturas: ElementRef = new ElementRef(HTMLDivElement);

    // Constante de periodo académico
    periodoAcademico: String = '2021-03';

    // Direcciones de las imagenes en assetss
    srcsImgs: any = ['../../../assets/fun.png', '../../../assets/sem.png', '../../../assets/comp.png'];

    @ViewChild(ComponentMateriaDirective, {static: true}) comMateriaHost!: ComponentMateriaDirective;

    constructor(private router: Router, private comFactory: ComponentFactoryResolver){
    }

    togglerContenedorAsignatura() {
        this.togglearContenedor = !this.togglearContenedor;
    }

    // Método para añadir tarjetas al componente
    addCard() {
        let nombre = this.nomAsignatura.nativeElement.value;
        let creditos = this.creAsignatura.nativeElement.value;
        let programa = this.proAsignatura.nativeElement.value;
        let codigo = this.codAsignatura.nativeElement.value;

        // Por si acaso se muestran los créditos, programa y código de la asignatura
        console.log(creditos, programa, codigo);
        
        if (this.tarjetasActuales == 3) {
            this.contadorFilas += 1;
            this.tarjetasActuales = 1;
            let src = this.srcsImgs[0];

            const factorizado = this.comFactory.resolveComponentFactory(componentMateria);            
            const componente = this.comMateriaHost.viewContainer.createComponent<componentMateria>(factorizado);
            componente.instance.cantidadCursos = 1;
            componente.instance.nombreAsignatura = nombre;
            componente.instance.codigoAsignatura = 34999;
            componente.instance.periodoAcademico = this.periodoAcademico;
            componente.instance.srcImg = src;
        } else {
            this.tarjetasActuales += 1;
            let src = this.srcsImgs[this.tarjetasActuales - 1];

            let creacionColumna: ElementRef = new ElementRef(HTMLDivElement);
            creacionColumna.nativeElement.className = 'col';

            // Se añade la columna creada
            this.conAsignaturas.nativeElement.children[this.contadorFilas - 1].insertAdjacentHTML('beforeend', creacionColumna);
            const factorizado = this.comFactory.resolveComponentFactory(componentMateria);
            const componente = this.comMateriaHost.viewContainer.createComponent<componentMateria>(factorizado);
            componente.instance.cantidadCursos = 55;
            componente.instance.nombreAsignatura = nombre;
            componente.instance.codigoAsignatura = 23;
            componente.instance.periodoAcademico = this.periodoAcademico;
            componente.instance.srcImg = src;            
        }


        this.togglerContenedorAsignatura();
    }
   
}