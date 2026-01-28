import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { ArticlePreview } from './article-preview';

describe('ArticlePreview', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArticlePreview,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ArticlePreview).toBeDefined();
  });
});
