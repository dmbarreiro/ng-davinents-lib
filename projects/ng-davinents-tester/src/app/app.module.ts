import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FaInputComponent, MdInputComponent, InputReferenceDirective } from "projects/ng-davinents-lib/src/public-api";

@NgModule({
  declarations: [
    AppComponent,
    FaInputComponent,
    MdInputComponent,
    InputReferenceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
