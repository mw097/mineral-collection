import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralLabelComponent } from './mineral-label.component';

describe('MineralLabelComponent', () => {
  let component: MineralLabelComponent;
  let fixture: ComponentFixture<MineralLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineralLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineralLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
