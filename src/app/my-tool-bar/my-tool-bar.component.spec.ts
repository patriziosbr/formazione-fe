import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToolBarComponent } from './my-tool-bar.component';

describe('MyToolBarComponent', () => {
  let component: MyToolBarComponent;
  let fixture: ComponentFixture<MyToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyToolBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
