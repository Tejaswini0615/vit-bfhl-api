# VIT BFHL API

This project is a solution to the **Full Stack Question Paper – VIT**.

It is a REST API built with **Node.js + Express**, hosted on **Render**, and designed to process an input array via a POST request to `/bfhl`.

---

## Hosted URL

 [https://vit-bfhl-api-3lyb.onrender.com/bfhl](https://vit-bfhl-api-3lyb.onrender.com/bfhl)

---

##  POST Endpoint

**Route:** `/bfhl`  
**Method:** `POST`  
**Status Code:** `200 OK`  
**Content-Type:** `application/json`

---

##  Sample Request

```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
