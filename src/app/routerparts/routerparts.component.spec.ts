import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPartsComponent } from './routerparts.component';

describe('RouterpartsComponent', () => {
  let component: RouterPartsComponent;
  let fixture: ComponentFixture<RouterPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
