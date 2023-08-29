import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private PowerService: PowerService) {}

  compute(a: number, b: number) {
    this.PowerService.supplyPower(10);
    return a + b;
  }
}
