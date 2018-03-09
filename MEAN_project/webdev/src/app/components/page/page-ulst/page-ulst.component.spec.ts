import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUlstComponent } from './page-ulst.component';

describe('PageUlstComponent', () => {
  let component: PageUlstComponent;
  let fixture: ComponentFixture<PageUlstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUlstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
