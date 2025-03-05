import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoCadastrarEditarComponent } from './dispositivo-cadastrar-editar.component';

describe('DispositivoCadastrarEditarComponent', () => {
  let component: DispositivoCadastrarEditarComponent;
  let fixture: ComponentFixture<DispositivoCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispositivoCadastrarEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivoCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
