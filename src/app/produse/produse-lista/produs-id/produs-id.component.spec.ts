import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusIdComponent } from './produs-id.component';

describe('ProdusIdComponent', () => {
  let component: ProdusIdComponent;
  let fixture: ComponentFixture<ProdusIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdusIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdusIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
