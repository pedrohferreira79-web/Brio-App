import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriaMundialPage } from './historia-mundial.page';

describe('HistoriaMundialPage', () => {
  let component: HistoriaMundialPage;
  let fixture: ComponentFixture<HistoriaMundialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaMundialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
