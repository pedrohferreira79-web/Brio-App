import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortuguesPage } from './portugues.page';

describe('PortuguesPage', () => {
  let component: PortuguesPage;
  let fixture: ComponentFixture<PortuguesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PortuguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
