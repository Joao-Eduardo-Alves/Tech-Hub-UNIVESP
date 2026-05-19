import crypto from "crypto";

export default async function handler(req, res) {
  try {
    const appId = process.env.SHOPEE_APP_ID;
    const secret = process.env.SHOPEE_SECRET;

    const timestamp = Math.floor(Date.now() / 1000);

    const query = `
      query {
        productOfferV2(
          page: 1
          limit: 12
        ) {
          nodes {
            itemId
            productName
            imageUrl
            price
            offerLink
            sales
            ratingStar
            commissionRate
          }
        }
      }
    `;

    const payload = JSON.stringify({
      query,
    });

    const baseString = `${appId}${timestamp}${payload}${secret}`;

    const signature = crypto
      .createHash("sha256")
      .update(baseString)
      .digest("hex");

    const response = await fetch(
      "https://open-api.affiliate.shopee.com.br/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `SHA256 Credential=${appId},Timestamp=${timestamp},Signature=${signature}`,
        },
        body: payload,
      },
    );

    const data = await response.json();

    return res.status(200).json(data.data.productOfferV2.nodes);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao buscar produtos",
    });
  }
}
