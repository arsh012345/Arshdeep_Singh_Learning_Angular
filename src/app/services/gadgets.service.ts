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
    const gadget = mockContent.find(gadget => gadget.id === id);
    return of(gadget);
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
      const removedGadget = mockContent[index];
      mockContent.splice(index, 1);
      return of(removedGadget);
    }
    return of(undefined);
  }
}
