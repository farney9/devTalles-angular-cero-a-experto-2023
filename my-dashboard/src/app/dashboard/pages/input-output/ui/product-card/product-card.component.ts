import { ChangeDetectionStrategy, Component, effect, input, Input, output } from '@angular/core';
import { ProductModel } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  // forma antigua de declarar un input
  // @Input({required: true}) product!: ProductModel;

  // forma nueva de declarar un input
  product = input.required<ProductModel>();

  // forma antigua de declarar un output
  // @Output() onIncrementQuantity = new EventEmitter<number>();

    // forma nueva de declarar un output
    onIncrementQuantityEvent = output<number>();

    onIncrementQuantityHandler() {
      this.onIncrementQuantityEvent.emit(this.product().quantity + 1);
    }

   /* Otra beneficio de trabajar con inputs y outputs de la forma nueva es que como
   product es una señal, se tiene la posibilidad de trabajar con efectos, por ejemplo
   cuando el producto cambia de valor, se puede ejecutar una función que se encargue
   de hacer algo con el nuevo valor del producto.
    */

   consoleLogEffect = effect(() => {
    console.log('Product changed', this.product().name);
   })

 }
