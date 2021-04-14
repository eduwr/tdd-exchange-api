import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrenciesRepository } from './currencies.repository';
import { Currencies } from './currencies.entity';
import { CurrenciesInputType } from './types/currencies-input.type';

@Injectable()
export class CurrenciesService {
  constructor(private currenciesRepository: CurrenciesRepository) {}

  async getCurrency(currency: string): Promise<Currencies> {
    return await this.currenciesRepository.getCurrency(currency);
  }

  async createCurrency({
    currency,
    value,
  }: CurrenciesInputType): Promise<Currencies> {
    if (value <= 0) {
      throw new BadRequestException('Value must be greater than zero');
    }
    return await this.currenciesRepository.createCurrency({ currency, value });
  }
  async updateCurrency({
    currency,
    value,
  }: CurrenciesInputType): Promise<Currencies> {
    if (value <= 0) {
      throw new BadRequestException('Value must be greater than zero');
    }
    return await this.currenciesRepository.updateCurrency({ currency, value });
  }

  async deleteCurrency(currency: string): Promise<void> {
    return await this.currenciesRepository.deleteCurrency(currency);
  }
}
