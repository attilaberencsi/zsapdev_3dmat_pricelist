import cds from '@sap/cds';

class PriceHandler {
    /**
     * Default
     * @Before(event = { "CREATE" }, entity = "priceService.Price")
     * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
    */
    async beforeCreate(request) {
        const { Prices } = cds.entities;
        const newPrice = request.data;

        // Default currency to 'EUR' if not provided
        if (newPrice && !newPrice.currency) {
            newPrice.currency = 'EUR';
        }
    }

    async onValidate(request) {

        const { ID } = request.data;
        if (!ID) {
            return request.error(400, 'ID is required for validation.');
        }

        const { Price } = cds.entities;
        const priceEntity = await SELECT.one.from(Price).where({ ID });

        if (!priceEntity) {
            return request.error(404, 'Price entity not found.');
        }

        if (priceEntity.price === 0) {
            return request.error(400, 'Price cannot be zero.');
        }

        return true;
    }
}

export default PriceHandler;
