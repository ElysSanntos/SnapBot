import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoListarComponent } from './dispositivo-listar.component';

describe('DispositivoListarComponent', () => {
  let component: DispositivoListarComponent;
  let fixture: ComponentFixture<DispositivoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispositivoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
