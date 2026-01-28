import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { ArticlesList } from './articles-list';

describe('ArticlesList', () => {
  let component: ArticlesList;
  let fixture: ComponentFixture<ArticlesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesList, ToastrModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
