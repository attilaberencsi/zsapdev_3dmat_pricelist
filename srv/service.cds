using {com.sapdev.threedprinter.price as data} from '../db/schema';

@path: '/service/threedprinterpriceSvcs'
service priceService {
    entity Price as projection on data.Price
        actions {
            action validate(ID: UUID) returns Boolean;

        };
}

annotate priceService with @requires: ['authenticated-user'];
