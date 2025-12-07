import LCAPApplicationService from '@sap/low-code-event-handler';
import PriceHandler from './code/price-logic.mjs';

class priceService extends LCAPApplicationService {
  async init() {
    const priceHandler = new PriceHandler();

    this.before('CREATE', 'Price', async (request) => {
      await priceHandler.beforeCreate(request);
    });

    this.before('validate', 'Price', async (request) => {
      await priceHandler.onValidate(request);
    });

    return super.init();
  }
}

export { priceService };
