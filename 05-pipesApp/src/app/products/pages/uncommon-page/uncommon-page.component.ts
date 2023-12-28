import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  importationCommon = `import { CommonModule } from '@angular/common';`

  //i18nSelect
  name = 'Farney';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'initarla'
  }


  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPLural
  clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Luis', 'Eduardo', 'Melissa', 'Natalia'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient() {
    this.clients.shift()
  }

  //KeyValue Pipe

  person = {
    adress: 'Calle 96B sur # 55-102',
    age: 41,
    city: 'La Estrella',
    country: 'Colombia',
    department: 'Antioquia',
    name: 'Farney',
  }

  //Async Pipe

  myObservableTimer:Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log('tap',value))
    )

  promiseValue:Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa')
      console.log('Tenemos data en la promesa');
      this.person.name = 'otro nombre';

    }, 2000);
  })



}
