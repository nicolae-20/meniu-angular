import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduseInfoComponent } from './produse-info.component';

describe('ProduseInfoComponent', () => {
  let component: ProduseInfoComponent;
  let fixture: ComponentFixture<ProduseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduseInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
