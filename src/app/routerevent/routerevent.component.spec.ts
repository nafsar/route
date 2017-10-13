import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterEventComponent } from './routerevent.component';

describe('RoutereventComponent', () => {
  let component: RouterEventComponent;
  let fixture: ComponentFixture<RouterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
