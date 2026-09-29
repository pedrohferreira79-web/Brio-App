import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtesVisuaisPage } from './artes-visuais.page';

describe('ArtesVisuaisPage', () => {
  let component: ArtesVisuaisPage;
  let fixture: ComponentFixture<ArtesVisuaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesVisuaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
