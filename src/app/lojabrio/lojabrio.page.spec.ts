import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LojabrioPage } from './lojabrio.page';

describe('LojabrioPage', () => {
  let component: LojabrioPage;
  let fixture: ComponentFixture<LojabrioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LojabrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
