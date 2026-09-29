import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoldurasPage } from './molduras.page';

describe('MoldurasPage', () => {
  let component: MoldurasPage;
  let fixture: ComponentFixture<MoldurasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
