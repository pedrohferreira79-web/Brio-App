import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FotosPerfilPage } from './fotos-perfil.page';

describe('FotosPerfilPage', () => {
  let component: FotosPerfilPage;
  let fixture: ComponentFixture<FotosPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
