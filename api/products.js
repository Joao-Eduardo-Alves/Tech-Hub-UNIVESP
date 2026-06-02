import { selectedProducts } from "../src/data/produtos/produtos.js";
import crypto from "crypto";
import { isDeleteExpression } from "typescript";

export default async function handler(req, res) {
  try {
    const appId = process.env.SHOPEE_APP_ID;
    const secret = process.env.SHOPEE_SECRET;

    const timestamp = Math.floor(Date.now() / 1000);

    const responses = await Promise.all(
      selectedProducts.map(async (selectedProduct) => {
        const {
          itemId,
          idPersonalizado,
          title,
          description,
          category,
          icon,
          tag,
          customImage,
        } = selectedProduct;
        const query = `
          query {
            productOfferV2(
              itemId: ${itemId}
            ) {
              nodes {
                imageUrl
                price
                offerLink
                ratingStar
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

        const product = data?.data?.productOfferV2?.nodes?.[0];

        if (!product) return null;

        return {
          ...product,

          itemId: itemId,
          idPersonalizado: idPersonalizado,
          category: category,
          icon: icon,
          tag: tag,
          title: title,
          description: description,
          customImage: customImage,
        };
      }),
    );

    return res.status(200).json(responses);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao buscar produtos",
    });
  }
}
