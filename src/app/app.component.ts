import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AluraPic';

    photos = [
      {
      url: 'https://img.r7.com/images/moya-leao-branco-albino-atracao-glen-garriff-conservation-lion-sanctuary-23032021161516582?dimensions=768x883',
      description: 'branco'
      },
      {
        url: 'https://a-static.mlcdn.com.br/618x463/biblia-leao-colorido-letra-grande-naa-san-maquinaria-editorial-sankto/livrariapontocristao/c8e3c040bcc611eb8dcd4201ac18500e/ac20367b1a21850435acd607374559de.jpg',
        description: 'normal'
      },
      {
        url: 'https://a-static.mlcdn.com.br/618x463/biblia-leao-colorido-letra-grande-naa-san-maquinaria-editorial-sankto/livrariapontocristao/c8e3c040bcc611eb8dcd4201ac18500e/ac20367b1a21850435acd607374559de.jpg',
        description: 'normal'
      }
    ]

}
