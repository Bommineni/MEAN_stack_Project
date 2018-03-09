import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteUlstComponent } from './website-ulst.component';

describe('WebsiteUlstComponent', () => {
  let component: WebsiteUlstComponent;
  let fixture: ComponentFixture<WebsiteUlstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteUlstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteUlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

