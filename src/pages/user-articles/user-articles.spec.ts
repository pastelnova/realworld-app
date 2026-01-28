import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';

import { UserArticles } from './user-articles';

describe('UserArticles', () => {
  let component: UserArticles;
  let fixture: ComponentFixture<UserArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserArticles, ToastrModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ username: 'test' }) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
