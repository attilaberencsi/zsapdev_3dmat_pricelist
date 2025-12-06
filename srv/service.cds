using { com.sapdev.threedprinter.price as data } from '../db/schema';

@path : '/service/threedprinterpriceSvcs'
service priceService
{
    entity Price as
        projection on data.Price;
}

annotate priceService with @requires :
[
    'authenticated-user'
];
