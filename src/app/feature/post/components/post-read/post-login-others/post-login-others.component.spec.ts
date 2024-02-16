import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginOthersComponent } from './post-login-others.component';

describe('PostLoginOthersComponent', () => {
  let component: PostLoginOthersComponent;
  let fixture: ComponentFixture<PostLoginOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
