namespace com.sapdev.threedprinter.price;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    managed,
    temporal
}
from '@sap/cds/common';

entity Price : cuid, managed, temporal
{
    MmterialID : String(20);
    materialName : String(40);
    @Semantics.amount.currencyCode: 'Currency'
    price : Decimal(15,2);
    currency : Currency;
    validFrom : Date;
    validTo : Date;
    createdBy : User;
    createdAt : Timestamp;
    modifiedBy : User;
    modifiedAt : Timestamp;
}