import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektyComponent } from './projekty.component';

describe('ProjektyComponent', () => {
  let component: ProjektyComponent;
  let fixture: ComponentFixture<ProjektyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
