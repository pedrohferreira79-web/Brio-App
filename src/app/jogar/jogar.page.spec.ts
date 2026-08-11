import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogarPage } from './jogar.page';

describe('JogarPage', () => {
  let component: JogarPage;
  let fixture: ComponentFixture<JogarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
