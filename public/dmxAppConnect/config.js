dmx.config({
  "main": {
    "cart": [
      {
        "type": "text",
        "name": "sku"
      },
      {
        "type": "text",
        "name": "product_name"
      },
      {
        "type": "number",
        "name": "qty"
      }
    ],
    "data_detail1": {
      "meta": [
        {
          "name": "$id",
          "type": "number"
        },
        {
          "type": "text",
          "name": "sku"
        },
        {
          "type": "text",
          "name": "product_name"
        },
        {
          "type": "number",
          "name": "qty"
        }
      ],
      "outputType": "array"
    }
  }
});
