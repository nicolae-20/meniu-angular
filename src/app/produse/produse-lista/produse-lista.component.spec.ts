import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduseListaComponent } from './produse-lista.component';

describe('ProduseListaComponent', () => {
  let component: ProduseListaComponent;
  let fixture: ComponentFixture<ProduseListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduseListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduseListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
