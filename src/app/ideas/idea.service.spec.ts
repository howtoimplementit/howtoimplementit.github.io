import { TestBed, inject } from '@angular/core/testing';

import { IdeasService } from './ideas.service';

describe('IdeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeaService]
    });
  });

  it('should ...', inject([IdeaService], (service: IdeaService) => {
    expect(service).toBeTruthy();
  }));
});
