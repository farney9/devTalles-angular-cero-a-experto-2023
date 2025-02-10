import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductModel } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';
import { ProductCardComponent } from 'src/app/dashboard/pages/input-output/ui/product-card/product-card.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {

  products = signal<ProductModel[]>([{ id: 1, name: 'Product 1', quantity: 0 }, { id: 2, name: 'Product 2', quantity: 0 }]);

  private intervalSubscription = interval(1000).pipe(
    tap( () => {
      this.products.update((products => [
        ...products,
        { id: products.length + 1, name: `Product ${products.length + 1}`, quantity: 0 }
      ]))
    }),
    take(7) // take sirve para limitar la cantidad de elementos que se emiten
  ).subscribe()

  updateProduct(product: ProductModel, quantity: number) {
    /* Para actualizar la cantidad de un producto,
    el operador map se encarga de recorrer el array de productos y actualizar
    el producto que coincida con el id, si no coincide el id,
    se retorna el mismo producto tal cual está
    */
    this.products.update((products) => products.map((p) => p.id === product.id ? { ...p, quantity } : p));
  }
  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }

}
