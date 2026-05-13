/// <reference types="vite/client" />
import SectionHeader from "@/components/shared/SectionHeader";
import { Link, ExternalLink } from "lucide-react";

export default function Manual() {
  const Url = import.meta.env.VITE_MANUAL_URL || "";

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Boas-vindas"
          title="Manual do Aluno"
          description="Tudo o que você precisa saber para começar sua jornada na UNIVESP: Aulas, atividades, provas presenciais, estágio e datas importantes."
        />

        {Url ? (
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
            <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border/50">
              <span className="text-xs text-muted-foreground truncate">
                {Url}
              </span>
              <a
                href={Url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-primary font-medium shrink-0 ml-4 hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Abrir em nova aba
              </a>
            </div>
            <iframe
              src={Url}
              title="Manual do Aluno"
              className="w-full"
              style={{ width: "100%", height: "650px", border: "none" }}
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-16 text-center">
            <Link className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Nenhum link configurado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
