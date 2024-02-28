import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthorsResumeComponent } from './post-authors-resume.component';

describe('PostAuthorsResumeComponent', () => {
  let component: PostAuthorsResumeComponent;
  let fixture: ComponentFixture<PostAuthorsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAuthorsResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAuthorsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
