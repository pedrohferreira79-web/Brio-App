import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtesPage } from './artes.page';

describe('ArtesPage', () => {
  let component: ArtesPage;
  let fixture: ComponentFixture<ArtesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
