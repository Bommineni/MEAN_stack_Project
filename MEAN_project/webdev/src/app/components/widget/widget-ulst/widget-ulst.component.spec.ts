import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetUlstComponent } from './widget-ulst.component';

describe('WidgetUlstComponent', () => {
  let component: WidgetUlstComponent;
  let fixture: ComponentFixture<WidgetUlstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetUlstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetUlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
