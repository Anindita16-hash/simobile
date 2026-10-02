import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilEditPage } from './profil-edit.page';

describe('ProfilEditPage', () => {
  let component: ProfilEditPage;
  let fixture: ComponentFixture<ProfilEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
