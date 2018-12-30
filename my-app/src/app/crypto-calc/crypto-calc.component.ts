import { Component, OnInit } from '@angular/core';
import { BtcRateService } from '../services/btc-rate.service';

@Component({
  selector: 'app-crypto-calc',
  templateUrl: './crypto-calc.component.html',
  styleUrls: ['./crypto-calc.component.scss']
})
export class CryptoCalcComponent implements OnInit {

  bitcoin: number;
  euro: number;

  factor: number;

  constructor(private btcRateService: BtcRateService) {

  }

  ngOnInit() {
    this.btcRateService.getRateBtcToEur().subscribe(data => {
      console.log(data);
      const rate = +(data['bpi'].EUR.rate as String).replace(',','');
      console.log(rate);
      this.factor = rate;
    });
  }

  calculate() {
    this.euro = this.bitcoin * this.factor;
  }

}
