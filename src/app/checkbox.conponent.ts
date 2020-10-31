import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  groups = ['a', 'b', 'c']
  usersList = [
    { 'name': 'john', 'group': 'a' },
    { 'name': 'mike', 'group': 'a' },
    { 'name': 'doe', 'group': 'b' },
    { 'name': 'tim', 'group': 'c' }]
  groupValue: string[] = []

  newArray = []

  ngOnInit() {
    this.newArray = this.usersList.slice()
  }

  changeGroup(event) {
    const group = event.target.value;
    const index = this.groupValue.indexOf(group);

    if (index > -1) {
      this.groupValue.splice(index, 1);
    } else {
      this.groupValue.push(group);
    }

    this.transform(this.usersList, 'group', this.groupValue)

    if (this.groupValue.length == 0) {
      this.transform(this.usersList, '', this.groupValue)
    }
  }

  transform(items: any[], field: string, value: string[]): any[] {
    console.log(value)
    if (!items) {
      return [];
    }
    if (!field || !value || value.length <= 0) {
      return items;
    }

    this.newArray = items.filter(singleItem => {
      return (singleItem != null && singleItem[field] != null && singleItem[field] != undefined && value.indexOf(singleItem[field]) >= 0);
    });

    return this.newArray
  }
}
