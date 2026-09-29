import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrammarPage } from './grammar.page';

describe('GrammarPage', () => {
  let component: GrammarPage;
  let fixture: ComponentFixture<GrammarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
