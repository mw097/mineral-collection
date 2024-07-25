import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralPageComponent } from './mineral-page.component';

describe('MineralPageComponent', () => {
  let component: MineralPageComponent;
  let fixture: ComponentFixture<MineralPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineralPageComponent]
    });
    fixture = TestBed.createComponent(MineralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
