import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';

const routes: Routes = [
  { path: 'calculator', component: TestComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'quoteGenerator', component: QuoteGeneratorComponent},
  { path: '**', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
