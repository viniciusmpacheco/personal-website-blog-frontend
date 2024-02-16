import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginFormComponent } from './post-login-form.component';

describe('PostLoginFormComponent', () => {
  let component: PostLoginFormComponent;
  let fixture: ComponentFixture<PostLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
