import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: "Mon premier post",
      content: "Le super texte du premier post",
      loveIts: 1,
      created_at: new Date(2018,7,30)
    },
    {
      title: "Mon deuxième post",
      content: "Le super texte du deuxieme post",
      loveIts: -1,
      created_at: new Date(2018, 7, 31)
    },
    {
      title: "Encore un post",
      content: "Et le plus important! Le super texte du dernier post",
      loveIts: 0,
      created_at: new Date(2018, 8, 1)
    }
  ];

}
