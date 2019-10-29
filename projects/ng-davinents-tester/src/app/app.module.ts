import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  FaInputComponent,
  MdInputComponent,
  InputReferenceDirective,
  HoldButtonComponent,
  HoldableDirective
} from "projects/ng-davinents-lib/src/public-api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FaInputComponent,
    HoldableDirective,
    HoldButtonComponent,
    InputReferenceDirective,
    MdInputComponent,
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
