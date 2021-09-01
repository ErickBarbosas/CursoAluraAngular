import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFormsComponent } from './photo-forms.component';

describe('PhotoFormsComponent', () => {
  let component: PhotoFormsComponent;
  let fixture: ComponentFixture<PhotoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
