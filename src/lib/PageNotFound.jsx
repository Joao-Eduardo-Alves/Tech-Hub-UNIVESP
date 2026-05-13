import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function PageNotFound({}) {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          {/* 404 Error Code */}
          <div className="space-y-2">
            <h1 className="text-7xl font-heading font-bold text-muted-foreground/30">
              404
            </h1>
            <div className="h-0.5 w-16 bg-border mx-auto"></div>
          </div>

          {/* Main Message */}
          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-foreground">
              Página não encontrada
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A página{" "}
              <span className="font-medium text-foreground">"{pageName}"</span>{" "}
              não foi encontrada.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors duration-200"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
