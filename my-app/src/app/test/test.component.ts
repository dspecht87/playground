import { Component, OnInit } from '@angular/core';
import { BtcRateService } from '../services/btc-rate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

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
