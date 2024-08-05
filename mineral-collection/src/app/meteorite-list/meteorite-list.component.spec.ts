import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoriteListComponent } from './meteorite-list.component';

describe('MeteoriteListComponent', () => {
  let component: MeteoriteListComponent;
  let fixture: ComponentFixture<MeteoriteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteoriteListComponent]
    });
    fixture = TestBed.createComponent(MeteoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
