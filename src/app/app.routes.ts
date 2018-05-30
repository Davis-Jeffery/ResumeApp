import { HomeComponent } from "./home/home.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SkillsComponent } from "./skills/skills.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent
  },
  { path: "skills", component: SkillsComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "contact", component: ContactComponent }
  // { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}

export const routedComponents = [
  HomeComponent,
  SkillsComponent,
  PortfolioComponent,
  ExperienceComponent,
  ContactComponent
];
