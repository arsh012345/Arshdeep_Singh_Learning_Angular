import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IContent } from './mock-content';
import { mock_content } from './mock-content';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsSubject: BehaviorSubject<IContent[]> = new BehaviorSubject(mock_content);
  items$: Observable<IContent[]> = this.itemsSubject.asObservable();

  getItems(): Observable<IContent[]> {
    return this.items$;
  }

  addItem(newItem: IContent): void {
    const currentItems = this.itemsSubject.getValue();
    this.itemsSubject.next([...currentItems, newItem]);
  }

  updateItem(updatedItem: IContent): void {
    const currentItems = this.itemsSubject.getValue();
    const index = currentItems.findIndex(item => item.id === updatedItem.id);
    currentItems[index] = updatedItem;
    this.itemsSubject.next([...currentItems]);
  }

  deleteItem(id: number): void {
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.id !== id);
    this.itemsSubject.next(updatedItems);
  }
}
