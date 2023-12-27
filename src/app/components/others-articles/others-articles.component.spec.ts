import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersArticlesComponent } from './others-articles.component';

describe('OthersArticlesComponent', () => {
  let component: OthersArticlesComponent;
  let fixture: ComponentFixture<OthersArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthersArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
