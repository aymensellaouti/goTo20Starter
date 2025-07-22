import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildExampleSonComponent } from './content-child-example-son.component';

describe('ContentChildExampleSonComponent', () => {
  let component: ContentChildExampleSonComponent;
  let fixture: ComponentFixture<ContentChildExampleSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildExampleSonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildExampleSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
