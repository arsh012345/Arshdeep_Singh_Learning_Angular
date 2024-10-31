import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from './mock-content';
import { mock_content } from './mock-content';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private contentList: IContent[] = mock_content;

  getItems(): Observable<IContent[]> {
    return of(this.contentList);
  }

  //To add the data
  addItem(item: IContent): void {
    this.contentList.push(item);
  }

//below for update the data
  updateItem(updatedItem: IContent): void {
    const index = this.contentList.findIndex(item => item.id === updatedItem.id);
    if (index > -1) {
      this.contentList[index] = updatedItem;
    }
  }

  //This is to delete it
  deleteItem(id: number): void {
    this.contentList = this.contentList.filter(item => item.id !== id);
  }
}
