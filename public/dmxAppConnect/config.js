dmx.config({
  "index": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "price_id"
        },
        {
          "type": "text",
          "name": "stripe_currency"
        },
        {
          "type": "text",
          "name": "stripe_interval"
        },
        {
          "type": "number",
          "name": "stripe_interval_count"
        },
        {
          "type": "number",
          "name": "unit_amount"
        },
        {
          "type": "text",
          "name": "stripe_id"
        }
      ],
      "outputType": "array"
    },
    "selected_product": {
      "meta": [
        {
          "name": "product_id",
          "type": "number"
        },
        {
          "name": "stripe_id",
          "type": "text"
        },
        {
          "name": "stripe_name",
          "type": "text"
        },
        {
          "name": "stripe_description",
          "type": "text"
        },
        {
          "name": "prices",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "price_id"
            },
            {
              "type": "text",
              "name": "stripe_currency"
            },
            {
              "type": "text",
              "name": "stripe_interval"
            },
            {
              "type": "number",
              "name": "stripe_interval_count"
            },
            {
              "type": "number",
              "name": "unit_amount"
            },
            {
              "type": "text",
              "name": "stripe_id"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "selected_price": {
      "meta": [
        {
          "type": "number",
          "name": "price_id"
        },
        {
          "type": "text",
          "name": "stripe_currency"
        },
        {
          "type": "text",
          "name": "stripe_interval"
        },
        {
          "type": "number",
          "name": "stripe_interval_count"
        },
        {
          "type": "number",
          "name": "unit_amount"
        },
        {
          "type": "text",
          "name": "stripe_id"
        }
      ],
      "outputType": "array"
    }
  },
  "subscription": {
    "repeat1": {
      "meta": [
        {
          "name": "product_id",
          "type": "number"
        },
        {
          "name": "stripe_id",
          "type": "text"
        },
        {
          "name": "stripe_name",
          "type": "text"
        },
        {
          "name": "stripe_description",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "row_repeat_value": {
      "meta": null,
      "outputType": "object"
    },
    "repeat2": {
      "meta": [
        {
          "name": "product_id",
          "type": "number"
        },
        {
          "name": "stripe_id",
          "type": "text"
        },
        {
          "name": "stripe_name",
          "type": "text"
        },
        {
          "name": "stripe_description",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  }
});
