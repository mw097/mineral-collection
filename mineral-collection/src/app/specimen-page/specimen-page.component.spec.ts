import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecimenPageComponent } from './specimen-page.component';

describe('MineralPageComponent', () => {
  let component: SpecimenPageComponent;
  let fixture: ComponentFixture<SpecimenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecimenPageComponent]
    });
    fixture = TestBed.createComponent(SpecimenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
