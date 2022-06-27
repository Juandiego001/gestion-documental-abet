import { ComponentFixture, TestBed } from '@angular/core/testing';

import { carpetaEvidenciaComponent } from './carpetaEvidencia.component';

describe('carpetaEvidenciaComponent', () => {
  let component: carpetaEvidenciaComponent;
  let fixture: ComponentFixture<carpetaEvidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ carpetaEvidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(carpetaEvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
