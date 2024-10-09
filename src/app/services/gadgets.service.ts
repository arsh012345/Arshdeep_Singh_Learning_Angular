import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockContent } from '../data/mock-content';

export interface IContent {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {
  constructor() {}

  getGadgets(): Observable<IContent[]> {
    return of(mockContent);
  }

  getGadgetById(id: number): Observable<IContent | undefined> {
    const item = mockContent.find(gadget => gadget.id === id);
    return of(item);
  }

  addGadget(gadget: IContent): Observable<IContent[]> {
    mockContent.push(gadget);
    return of(mockContent);
  }

  updateGadget(updatedGadget: IContent): Observable<IContent[]> {
    const index = mockContent.findIndex(gadget => gadget.id === updatedGadget.id);
    if (index !== -1) {
      mockContent[index] = updatedGadget;
    }
    return of(mockContent);
  }

  deleteGadget(id: number): Observable<IContent | undefined> {
    const index = mockContent.findIndex(gadget => gadget.id === id);
    if (index !== -1) {
      const removedItem = mockContent.splice(index, 1)[0];
      return of(removedItem);
    }
    return of(undefined);
  }
}
