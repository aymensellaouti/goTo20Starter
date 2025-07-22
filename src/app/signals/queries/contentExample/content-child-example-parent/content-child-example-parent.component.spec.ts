import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildExamplePArentComponent } from './content-child-example-parent.component';

describe('ContentChildExamplePArentComponent', () => {
  let component: ContentChildExamplePArentComponent;
  let fixture: ComponentFixture<ContentChildExamplePArentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildExamplePArentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildExamplePArentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
