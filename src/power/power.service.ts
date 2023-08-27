import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  constructor() {}
  supplyPower(watts: number): void {
    console.log(`Supplying ${watts} worth of power.`);
  }
}
