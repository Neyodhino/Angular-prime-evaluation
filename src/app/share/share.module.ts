import { NgModule } from '@angular/core';
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

@NgModule ({
  declarations: [
  ],
  imports: [
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxAvatarModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxComboModule,
    IgxToastModule,
  ],
  exports: [
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
    IgxAvatarModule,
  ]
})

export class ShareModule {}

