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

  //using observable below
  getGadgets(): Observable<IContent[]> {
    return of(mockContent);
  }

  getGadgetById(id: number): IContent | undefined {
    return mockContent.find(gadget => gadget.id === id);
  }

  addGadget(gadget: IContent): void {
    mockContent.push(gadget);
  }

  updateGadget(updatedGadget: IContent): void {
    const index = mockContent.findIndex(gadget => gadget.id === updatedGadget.id);
    if (index !== -1) {
      mockContent[index] = updatedGadget;
    }
  }

  deleteGadget(id: number): void {
    const index = mockContent.findIndex(gadget => gadget.id === id);
    if (index !== -1) {
      mockContent.splice(index, 1);
    }
  }
}
