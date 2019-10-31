import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  FaInputComponent,
  MdInputComponent,
  InputReferenceDirective,
  HoldButtonComponent,
  HoldableDirective,
  TabContainerComponent,
  TabComponent
} from "projects/ng-davinents-lib/src/public-api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./navigation/navigation.component";
import { FormComponent } from "./form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    FaInputComponent,
    HoldableDirective,
    HoldButtonComponent,
    InputReferenceDirective,
    MdInputComponent,
    NavigationComponent,
    FormComponent,
    TabComponent,
    TabContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
