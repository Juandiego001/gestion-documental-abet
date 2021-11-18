import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'Reporte',
    templateUrl: './Reporte.html',
    styleUrls: ['./Reporte.css'],
    providers: [NgbModalConfig, NgbModal]
})

export class Reporte {
    //datos materias
    public Materia1: string;
    public Materia2: string;
    public Materia3: string;
    //perido
    public periodo1: string;
    public periodo2: string;
    //Student Outcomes
    public student1: string;
    public student2: string;
    public student3: string;
    public student4: string;
    public student5: string;
    public student6: string;
    public student7: string;
    //indicadores de desempeño
    public pi1: string;
    public pi2: string;
    public pi3: string;
    public pi4: string;
    public pi5: string;
    public pi6: string;
    public pi7: string;
    //xD
    


    constructor(public router: Router, public modal: NgbModal) {
        this.Materia1="Fundamentos de ingeniería multimedia";
        this.Materia2="Seminario taller multimedia";
        this.Materia3="Computación gráfica";
        this.periodo1="2021-01";
        this.periodo2="2021-03";
        this.student1="RAE-1. Problemas complejos de ingeniería";
        this.student2="RAE-2. Diseño en ingeniería";
        this.student3="RAE-3. Comunicación efectiva";
        this.student4="RAE-4. Responsabilidades éticas y profesionales";
        this.student5="RAE-5. Trabajo en equipo";
        this.student6="RAE-6. Experimentación";
        this.student7="RAE-7. Autoaprendizaje";
        this.pi1="1.1 Identificar y formular problemas complejos";
        this.pi2="2.1 Aplica procesos estructurados de diseño";
        this.pi3="3.1 Produce documentos con estructura, gramática y claridad";
        this.pi4="4.1 Reconoce su responsabilidad ética y profesional";
        this.pi5="5.1 El grupo de trabajo funciona de manera efectiva";
        this.pi6="6.1 Desarrolla y dirige experimentos apropiados";
        this.pi7="7.1 Investiga y aprende nuevos conocimientos por su cuenta";

        let datos=`${this.Materia1} ${this.Materia2} ${this.Materia3} ${this.periodo1}  ${this.periodo2}  ${this.student1}  ${this.student2}  ${this.student3}  ${this.student4}  ${this.student5}  ${this.student6}  ${this.student7} ${this.pi1} ${this.pi2} ${this.pi3} ${this.pi4} ${this.pi5} ${this.pi6} ${this.pi7}.`
    }
    navegate(url: String) {
        this.router.navigate([`/${url}`]);
    }
    ngOnInit(): void {
    }
    openSM(contenido: any) {
        this.modal.open(contenido, { size: 'lg', centered: true });
    }
}