import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOutlineComponent } from './menu-outline.component';

describe('MenuOutlineComponent', () => {
  let component: MenuOutlineComponent;
  let fixture: ComponentFixture<MenuOutlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOutlineComponent]
    });
    fixture = TestBed.createComponent(MenuOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
