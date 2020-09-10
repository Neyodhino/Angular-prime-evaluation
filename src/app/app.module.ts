import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { 	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
  IgxSwitchModule,

	IgxCheckboxModule,
	IgxDatePickerModule,
	IgxDialogModule,
	IgxComboModule,
  IgxToastModule,
} from 'igniteui-angular';
import { PagingSampleComponent } from './grid/grid-paging-template/grid-paging-sample.component';
import { GridSortingIndicatorsComponent } from './grid-two/grid-sorting-indicators/grid-sorting-indicators';
import { GridCustomFilteringComponent } from './grid-three/grid-custom-filtering/grid-custom-filtering.component';
import { GridEditingSampleComponent } from './grid-four/grid-editing-sample/grid-editing-sample.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PagingSampleComponent,
    GridSortingIndicatorsComponent,
    GridCustomFilteringComponent,
    GridEditingSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
		IgxAvatarModule,
	  IgxBadgeModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxProgressBarModule,
		IgxRippleModule,
    IgxSwitchModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxComboModule,
    IgxToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
