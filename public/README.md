
# METODOS DE GRAPHQL

## getLinkedTactics

Retorna un array de tacticas vinculadas filtradas por
- medio de venta (sales_channel_code) _string_
- numero de oferta (offer_number) _int_
- codigo de estrategia (strategy_code) _string_
- cantidad de tacticas (quantity) _int_

## getDetailByCUV

Retorna un array de tacticas vinculadas filtradas por
- codigo de pais (country_iso) _string_
- codigo de campaña (campaign_code) _int_
- medio de venta (sales_mean_type_code) _int_
- filtrar solo tacticas vinculadas (only_linked_tactics) _bool_
- codigo unico de venta (cuv) _int_

## getCUVByCountryCampaignCatalogStrategy

Retorna un array de cuv's filtrado por
- codigo de pais (country_iso) _string_
- codigo de campaña (campaign_code) _int_
- medio de venta (sales_mean_type_code) _int_

# EJEMPLOS

### getLinkedTactics
```
{
  getLinkedTactics(
    sales_channel_code: "V"
    offer_number: 0
    strategy_code: "0"
    quantity: 10
  ) {
    country_iso
    campaign_code
  }
}
```

### getDetailByCUV
```
{
  getDetailByCUV(
    country_iso: "PA"
    campaign_code: 201913
    sales_mean_type_code: 9
    only_linked_tactics: true
    cuv: 29169
  ) {
    sales_channel_code
    country_iso
    campaign_code
    offer_number
    strategy_code
    page_number
    digital_page_number
    adjustment_type
    strategy_description
    sales_mean_type_code
    strategy_products {
      sku
      cuv
      sales_mean_type_code
      sales_mean_description
    }
    condition {
      sales_mean_type_code
      condition_units
    }
    supported {
      sku
      cuv
      offer_price
    }
  }
}
```

### getCUVByCountryCampaignCatalogStrategy
```
{
  getCUVByCountryCampaignCatalogStrategy(
    country_iso: "PA"
    campaign_code: 201913
    sales_mean_type_code: 9
    only_linked_tactics: true
  ) {
  cuv
  }
}
```
