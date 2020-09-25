import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListeComponent } from './document-liste.component';

describe('DocumentListeComponent', () => {
  let component: DocumentListeComponent;
  let fixture: ComponentFixture<DocumentListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
