import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: String, ): any[] {
    if (text === ''){
      return array;
    }
 
text = text.toLocaleLowerCase();
return array.filter(item=>{
 return item.brand.toLowerCase().includes(text)
  })

}
}
