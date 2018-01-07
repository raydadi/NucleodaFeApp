import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
import { MenuItemComponent } from './menu-item/menu-item';
@NgModule({
	declarations: [LoadingSpinnerComponent,
    MenuItemComponent],
	imports: [],
	exports: [LoadingSpinnerComponent,
    MenuItemComponent]
})
export class ComponentsModule {}
