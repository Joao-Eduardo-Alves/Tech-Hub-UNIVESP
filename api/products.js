import crypto from "crypto";

export default async function handler(req, res) {
  try {
    const appId = process.env.SHOPEE_APP_ID;
    const secret = process.env.SHOPEE_SECRET;

    const timestamp = Math.floor(Date.now() / 1000);

    const selectedProducts = [
      {
        // notebook
        itemId: 58206754488,
        category: "geral",
        icon: "laptop",
        tag: "Tecnologia",
      },

      {
        // placa mdf decorativa
        itemId: 22799181312,
        category: "geral",
        icon: "coffee",
        tag: "Decoração",
      },
    ];

    const responses = await Promise.all(
      selectedProducts.map(async (selectedProduct) => {
        const { itemId, category, icon, tag } = selectedProduct;
        const query = `
          query {
            productOfferV2(
              itemId: ${itemId}
            ) {
              nodes {
                productName
                imageUrl
                price
                offerLink
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
          category: category,
          icon: icon,
          tag: tag,
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
