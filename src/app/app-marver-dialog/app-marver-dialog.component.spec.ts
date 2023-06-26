import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMarverDialogComponent } from './app-marver-dialog.component';

describe('AppMarverDialogComponent', () => {
  let component: AppMarverDialogComponent;
  let fixture: ComponentFixture<AppMarverDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMarverDialogComponent]
    });
    fixture = TestBed.createComponent(AppMarverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
