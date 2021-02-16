import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInputsComponent } from './hero-inputs.component';

describe('HeroInputsComponent', () => {
  let component: HeroInputsComponent;
  let fixture: ComponentFixture<HeroInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
