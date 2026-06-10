import { getProducts } from "@/services/api";
import { useMemo, useEffect, useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Download,
  Upload,
  Palette,
  CheckCircle,
  ShoppingCart,
  ExternalLink,
  FileCog,
  Link,
  MailQuestion,
} from "lucide-react";

import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { produtosPersonalizados } from "@/data/produtos/produtosPersonalizados";

export default function ComoComprar() {
  const { tag } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);

  const offerLinkFromState = location.state?.offerLink;

  useEffect(() => {
    if (offerLinkFromState) return;

    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, [offerLinkFromState]);

  const categoria = produtosPersonalizados[tag];
  const inputModelo = searchParams.get("modelo");
  console.log(categoria);

  const product = useMemo(() => {
    const baseProduct = categoria?.modelo?.[inputModelo];
    return {
      ...baseProduct,
      tag,
      offerLink:
        offerLinkFromState ||
        products.find((p) => p?.idPersonalizado === inputModelo)?.offerLink,
    };
  }, [categoria, inputModelo, tag, products, offerLinkFromState]);

  if (!categoria || !product?.name) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Personalização"
          title={categoria.title}
          description={categoria.description}
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Adquira seu item personalizado em 4 passos simples
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Baixe gratuitamente a arte do seu curso e personalize o produto
              diretamente na plataforma de compra. O processo é simples e leva
              apenas alguns minutos.
            </p>
          </section>
          <div className="grid gap-6">
            <div className="mt-6">
              {tag === "Vestuário" ? (
                <div className="flex gap-6 flex-wrap">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Logo costas
                    </p>

                    <div className="w-[600px] h-[600px] flex items-center justify-center rounded-2xl overflow-hidden border border-border bg-card">
                      <img
                        src={product.previewLogoCostas}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Logo frente
                    </p>

                    <div className="w-[600px] h-[600px] flex items-center justify-center rounded-2xl overflow-hidden border border-border bg-card">
                      <img
                        src={product.previewLogoFrente}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Logo</p>

                  <div className="w-[600px] h-[600px] flex items-center justify-center rounded-2xl overflow-hidden border border-border bg-card">
                    <img
                      src={product.previewLogo}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* PASSOS */}
            {/* DOWNLOAD */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50">
              <Download className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div className="w-full">
                <h3 className="font-semibold text-lg text-foreground">
                  1. Baixe a arte do modelo escolhido
                </h3>

                <p className="text-muted-foreground">
                  Clique no botão de download e salve o arquivo .zip com os
                  arquivos da arte em seu computador ou celular.
                </p>

                <a
                  href={product.modelFile}
                  download
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                >
                  <Download className="w-4 h-4" />
                  Baixar modelo
                </a>
              </div>
            </div>

            {/* PERSONALIZAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50">
              <Palette className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Adicione seu nome na arte personalizada
                </h3>

                <p className="text-muted-foreground">
                  Após baixar os arquivos, abra a imagem "logoCostas" em um
                  editor de imagens (como o Canva), e adicione seu nome na parte
                  inferior da imagem (Recomenda-se a fonte "GRADUATE" para o
                  nome). Salve a imagem editada.
                </p>
                <a
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                  href="https://www.canva.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link className="w-4 h-4" />
                  Acesse aqui o Canva
                </a>
              </div>
            </div>
            {/* PERSONALIZAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50">
              <FileCog className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Remova o fundo da imagem
                </h3>

                <p className="text-muted-foreground">
                  Após personalizar a logo das costas com seu nome, acesse o
                  link abaixo, faça upload da imagem ja editada, remova o fundo
                  e baixe o arquivo.
                </p>
                <a
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                  href="https://www.photoroom.com/pt-br/tools/background-remover?utm_source=google&utm_medium=search&utm_id=23359963677&utm_campaign=Web_Search_AI-Max_BAU_BR_pt_tROAS&utm_content=788485004792&adset_name=Add-Background&ad_name=NA&adset_id=188917621646&utm_term=recortar%20fundo&matchtype=b&network=g&device=c&placement=&gad_source=1&gad_campaignid=23359963677&gbraid=0AAAAABrDMJh72tQpGTKxkdYc9Io50CtY4&gclid=CjwKCAjw857RBhAgEiwAI-1yKKC-Q9VHo26huI4M-ntrHkgNDrqyYb_UPRTn5jAUy6YaqHpkPuPlaRoCwIIQAvD_BwE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link className="w-4 h-4" />
                  Remova aqui o fundo da imagem
                </a>
              </div>
            </div>

            {/* ENVIO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50">
              <Upload className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Envie o arquivo
                </h3>

                <p className="text-muted-foreground">
                  Envie sua logo personalizada (sem fundo) e as demais artes
                  baixadas (incluindo a imagem de referencia) pelo chat do
                  pedido na Shopee conforme orientação do anúncio (Qualquer
                  dúvida entrar em contato diretamente com vendedor).
                </p>
              </div>
            </div>

            {/* FINALIZAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50">
              <ShoppingCart className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Aguarde a produção
                </h3>

                <p className="text-muted-foreground">
                  Após o envio da arte, o pedido será produzido.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50">
              <MailQuestion className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Dúvidas?
                </h3>

                <p className="text-muted-foreground">
                  Em caso de dúvida ou qualquer imprevisto ao adquirir seu
                  produto ou personalizar sua arte, fale comigo através da opção
                  "Fale comigo" localizada no rodapé do site. Será um prazer
                  ajudar!
                </p>
              </div>
            </div>
          </div>

          {/* DICAS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Considerações importantes
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Certifique-se de enviar o arquivo correto",
                "A qualidade final da personalização depende da plataforma e do fornecedor escolhido.",
                "Evite textos muito pequenos",
                "Confira cuidadosamente o tamanho do vestuário antes de finalizar a compra.",
                "Em caso de dúvidas sobre a personalização, entre em contato diretamente com o vendedor antes de concluir o pedido.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card"
                >
                  <CheckCircle className="text-primary mt-1 shrink-0 w-5 h-5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-border pt-8 text-center">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Pronto para fazer seu pedido?
              </h2>

              <p className="text-muted-foreground mb-6">
                Acesse o anúncio e envie sua arte personalizada após a compra.
              </p>

              <Button
                asChild
                size="lg"
                className="px-10 py-6 text-base font-semibold rounded-xl"
              >
                <a
                  href={product.offerLink}
                  target={product.tag === "vestuário" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Agora
                </a>
              </Button>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
