import LCAPApplicationService from '@sap/low-code-event-handler';
import PriceHandler from './code/price-logic.mjs';

class priceService extends LCAPApplicationService {
  async init() {
    const priceHandler = new PriceHandler();

    this.before('CREATE', 'Prices', async (request) => {
      await priceHandler.beforeCreate(request);
    });

    return super.init();
  }
}

export { priceService };
