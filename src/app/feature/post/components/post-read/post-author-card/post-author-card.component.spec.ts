import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthorCardComponent } from './post-author-card.component';

describe('PostAuthorCardComponent', () => {
  let component: PostAuthorCardComponent;
  let fixture: ComponentFixture<PostAuthorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAuthorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAuthorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
