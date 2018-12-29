import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { CryptoCalcComponent } from './crypto-calc/crypto-calc.component';

const routes: Routes = [
  { path: 'calculator', component: CryptoCalcComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'quoteGenerator', component: QuoteGeneratorComponent},
  { path: '**', component: CryptoCalcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
