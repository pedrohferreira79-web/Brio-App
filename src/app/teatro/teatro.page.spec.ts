import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeatroPage } from './teatro.page';

describe('TeatroPage', () => {
  let component: TeatroPage;
  let fixture: ComponentFixture<TeatroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
