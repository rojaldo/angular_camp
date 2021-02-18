import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervezasComponent } from './cervezas.component';

describe('CervezasComponent', () => {
  let component: CervezasComponent;
  let fixture: ComponentFixture<CervezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
