import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilosofiaPage } from './filosofia.page';

describe('FilosofiaPage', () => {
  let component: FilosofiaPage;
  let fixture: ComponentFixture<FilosofiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilosofiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
