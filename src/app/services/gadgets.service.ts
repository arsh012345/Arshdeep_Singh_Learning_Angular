import { Injectable } from '@angular/core';
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
  private gadgets: IContent[] = mockContent;

  constructor() {}

  getGadgets(): IContent[] {
    return this.gadgets;
  }

  getGadgetById(id: number): IContent | undefined {
    return this.gadgets.find(gadget => gadget.id === id);
  }

  //Adding gadgets
  addGadget(gadget: IContent): void {
    this.gadgets.push(gadget);
  }

  //updating gadgets
  updateGadget(updatedGadget: IContent): void {
    const index = this.gadgets.findIndex(gadget => gadget.id === updatedGadget.id);
    if (index !== -1) {
      this.gadgets[index] = updatedGadget;
    }
  }

  //deleting gadgets
  deleteGadget(id: number): void {
    this.gadgets = this.gadgets.filter(gadget => gadget.id !== id);
  }
}
