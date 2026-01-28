import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { ToastService } from './toast.service';

describe('ToasterService', () => {
  let toastService: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
    });
    toastService = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(toastService).toBeTruthy();
  });
});
