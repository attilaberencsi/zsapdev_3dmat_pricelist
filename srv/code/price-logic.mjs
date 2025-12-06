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
}

export default PriceHandler;
