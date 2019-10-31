import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormComponent } from "./form/form.component";
import { NavigationComponent } from "./navigation/navigation.component";


const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "navigation", component: NavigationComponent },
  { path: "**", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
