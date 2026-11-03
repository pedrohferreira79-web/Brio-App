import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesafioPortuguesPage } from './desafio-portugues.page';

describe('DesafioPortuguesPage', () => {
  let component: DesafioPortuguesPage;
  let fixture: ComponentFixture<DesafioPortuguesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioPortuguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
