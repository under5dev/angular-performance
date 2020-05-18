import { Injectable } from '@angular/core';
import {Observable, of, ReplaySubject, Subject} from "rxjs";
import { TableStandardItem } from "./table-standard-item";

@Injectable({
  providedIn: 'root'
})
export class LoopDataProviderService {

  // TODO: replace this with real data from your application
  public ExampleData: TableStandardItem[] = [
    {id: 1, name: 'Hydrogen'},
    {id: 2, name: 'Helium'},
    {id: 3, name: 'Lithium'},
    {id: 4, name: 'Beryllium'},
    {id: 5, name: 'Boron'},
    {id: 6, name: 'Carbon'},
    {id: 7, name: 'Nitrogen'},
    {id: 8, name: 'Oxygen'},
    {id: 9, name: 'Fluorine'},
    {id: 10, name: 'Neon'},
    {id: 11, name: 'Sodium'},
    {id: 12, name: 'Magnesium'},
    {id: 13, name: 'Aluminum'},
    {id: 14, name: 'Silicon'},
    {id: 15, name: 'Phosphorus'},
    {id: 16, name: 'Sulfur'},
    {id: 17, name: 'Chlorine'},
    {id: 18, name: 'Argon'},
    {id: 19, name: 'Potassium'},
    {id: 20, name: 'Calcium'},
  ];
  public ImmutableData$: ReplaySubject<TableStandardItem[]>;

  constructor() {
    this.ImmutableData$ = new ReplaySubject<TableStandardItem[]>(1);
    this.ImmutableData$.next(this.ExampleData);
  }

  public mutateItem(id: number, name: string) {
    let result = this.ExampleData.filter( item => item.id === id);
    if (result !== undefined && result.length > 0) {
      result[0].name = name;
    }
  }

  public updateImmutableData(id: number, name: string){
    let newData = this.ExampleData.map(item =>
    {
      return {
        id: item.id,
        name: item.name
      }
    });
    this.ImmutableData$.next(newData);
  }
}
