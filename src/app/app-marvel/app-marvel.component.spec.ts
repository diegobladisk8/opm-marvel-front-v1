import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMarvelComponent } from './app-marvel.component';

describe('AppMarvelComponent', () => {
  let component: AppMarvelComponent;
  let fixture: ComponentFixture<AppMarvelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMarvelComponent]
    });
    fixture = TestBed.createComponent(AppMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
