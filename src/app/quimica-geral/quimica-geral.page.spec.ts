import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuimicaGeralPage } from './quimica-geral.page';

describe('QuimicaGeralPage', () => {
  let component: QuimicaGeralPage;
  let fixture: ComponentFixture<QuimicaGeralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaGeralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
