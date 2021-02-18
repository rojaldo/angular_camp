import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  

  transform(value: unknown, ...args: unknown[]): unknown {
    
    //con esto se controlan las entradas que puedan llegar al pipe
    if(typeof value === 'number')
    {
      //value.toLocaleString('ES-es')
      //value = value.toString().replace('.',','); mejor esto (strings) no por seguridad a la hora de recibir datos, a pesar del filtro de seguridad al aceptar solo number
      if(args.length>0) 
      {
        return '' + value.toLocaleString('es-ES') + args[0];
      }
      return value.toLocaleString('es-ES') + '%';
    } 
    else
    {
      console.error('AbvPipe: ' + value + ' not supported type');
      return value;
    }   
  }
}
