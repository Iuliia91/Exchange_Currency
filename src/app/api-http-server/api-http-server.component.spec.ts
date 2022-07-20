import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHttpServerComponent } from './api-http-server.component';

describe('ApiHttpServerComponent', () => {
  let component: ApiHttpServerComponent;
  let fixture: ComponentFixture<ApiHttpServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHttpServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHttpServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
