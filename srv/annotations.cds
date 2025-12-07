using {priceService as service} from './service';

annotate service.Price with {
    @UI.lineItem: [{ position: 10 }]
    MaterialID;

    @UI.lineItem: [{ position: 20 }]
    materialName;

    @UI.lineItem: [{ position: 30 }]
    price;

    @UI.lineItem: [{ position: 40 }]
    currency;

    @UI.lineItem: [{ position: 50 }]
    validFrom;

    @UI.lineItem: [{ position: 60 }]
    validTo;
}