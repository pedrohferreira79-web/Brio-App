import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilosofiaAntigaPage } from './filosofia-antiga.page';

describe('FilosofiaAntigaPage', () => {
  let component: FilosofiaAntigaPage;
  let fixture: ComponentFixture<FilosofiaAntigaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilosofiaAntigaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
