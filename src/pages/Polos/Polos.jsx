import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeader from "../../components/shared/SectionHeader";
import { drps, generalGroupLink } from "../../data/drps/drps.js";

export default function Polos() {
  const [polos, setPolos] = useState([]);
  const [busca, setBusca] = useState("");
  const [exibindoDrp, setExibindoDrp] = useState("todos");
  const [isSearching, setIsSearching] = useState(false);

  const cacheRef = useRef({});
  const debounceTimerRef = useRef(null);

  const loadDRP = async (drpId) => {
    if (cacheRef.current[drpId]) return cacheRef.current[drpId];

    const module = await import(`../../data/drps/${drpId}.js`);
    cacheRef.current[drpId] = module.default;

    return cacheRef.current[drpId];
  };

  useEffect(() => {
    async function buscarPolos() {
      if (exibindoDrp === "") {
        setPolos([]);
        return;
      }

      if (exibindoDrp === "todos") {
        const results = await Promise.all(
          drps.map(async (drp) => {
            const data = await loadDRP(drp.id);
            return data.map((p) => ({
              ...p,
              drpId: drp.id,
            }));
          }),
        );

        setPolos(results.flat());
      } else {
        const data = await loadDRP(exibindoDrp);

        setPolos(
          data.map((p) => ({
            ...p,
            drpId: exibindoDrp,
          })),
        );
      }
    }

    buscarPolos();
  }, [exibindoDrp]);

  const drpMap = useMemo(() => {
    const map = {};
    drps.forEach((d) => {
      map[d.id] = d;
    });
    return map;
  }, []);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    setIsSearching(true);

    debounceTimerRef.current = setTimeout(() => {
      const searchTerm = busca.trim().toLowerCase();
      const result = polos.filter((polo) =>
        polo.city.toLowerCase().includes(searchTerm),
      );
      setFiltered(result);
      setIsSearching(false);
    }, 300);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [polos, busca]);

  const displayPolos = [...filtered].sort((a, b) => {
    const aHasGroup = Boolean(a.wpp);
    const bHasGroup = Boolean(b.wpp);

    if (aHasGroup === bHasGroup) return 0;
    return aHasGroup ? -1 : 1;
  });

  const selectedDrp = drpMap[exibindoDrp];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Comunidade"
          title="Guia de Polos"
          description="Encontre seu polo por DRP, conecte-se com outros estudantes e participe de grupos de estudo no WhatsApp."
        />

        {/* GRUPO CENTRALIZADO */}
        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-xl text-center p-6 rounded-2xl border border-border/50 bg-card shadow-lg shadow-primary/5">
            <p className="text-sm text-muted-foreground mb-3">
              {exibindoDrp === "todos"
                ? "Grupo geral de todos os polos"
                : `Grupo geral do ${selectedDrp?.id}`}
            </p>

            <h2 className="text-lg font-semibold mb-4 text-foreground">
              {exibindoDrp === "todos"
                ? "Conecte-se com toda a comunidade UNIVESP"
                : `Conecte-se com o ${selectedDrp?.id}`}
            </h2>

            {exibindoDrp === "todos" ? (
              generalGroupLink ? (
                <Button
                  asChild
                  variant="whatsapp"
                  size="sm"
                  className="rounded-xl h-10 px-8"
                >
                  <a
                    href={generalGroupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1" />
                    Entrar no grupo geral
                  </a>
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-xl px-5"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScWCHR_vDhnxym--OyRa3mn7rCljOucrLdgqKUpYJPZiGM5HQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar criação do grupo geral
                  </a>
                </Button>
              )
            ) : selectedDrp?.wpp ? (
              <Button
                asChild
                variant="whatsapp"
                size="sm"
                className="rounded-xl h-10 px-8"
              >
                <a
                  href={selectedDrp.wpp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1" />
                  Entrar no grupo do DRP
                </a>
              </Button>
            ) : (
              <>
                <p className="text-sm text-gray-600 text-center">
                  Ainda não existe grupo para este DRP 😕.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-xl px-5"
                >
                  <a
                    href={`https://docs.google.com/forms/d/e/1FAIpQLScWCHR_vDhnxym--OyRa3mn7rCljOucrLdgqKUpYJPZiGM5HQ/viewform?usp=pp_url&entry.1017508856=${
                      selectedDrp?.id || "DRP01"
                    }&entry.1752308132=teste`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar inclusão do grupo do DRP
                  </a>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Filtro DRPs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            onClick={() => {
              setExibindoDrp("todos");
              setBusca("");
            }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              exibindoDrp === "todos"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            Todos os polos
          </Button>

          {drps.map((drp) => (
            <Button
              key={drp.id}
              onClick={() => {
                setExibindoDrp(drp.id);
                setBusca("");
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                exibindoDrp === drp.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {drp.id}
            </Button>
          ))}
        </div>

        {/* Busca */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar polo por cidade..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-11 h-12 rounded-xl bg-card border-border/50"
            />
          </div>
        </div>

        {/* Label */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            {exibindoDrp === "todos" ? "Todos os polos" : selectedDrp?.id}
          </span>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isSearching ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-card border border-border/50 space-y-4"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Skeleton className="w-10 h-10 rounded-xl" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="w-3/4 h-4 rounded" />
                      <Skeleton className="w-1/2 h-3 rounded" />
                    </div>
                  </div>
                  <Skeleton className="w-32 h-8 rounded-xl" />
                </div>
              ))}
            </>
          ) : filtered.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                Nenhum polo encontrado para "{busca}"
              </p>
            </div>
          ) : (
            displayPolos.map((polo, i) => (
              <motion.div
                key={`${polo.drpId}-${polo.city}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm">{polo.city}</h3>
                    <span className="text-xs text-muted-foreground">
                      {drpMap[polo.drpId]?.id}
                    </span>
                  </div>
                </div>

                {polo.wpp ? (
                  <Button
                    asChild
                    size="sm"
                    variant="whatsapp"
                    className="rounded-xl text-xs h-8"
                  >
                    <a
                      href={polo.wpp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                ) : (
                  <div className="text-xs text-muted-foreground">
                    <p>Ainda não existe grupo para este polo 😕</p>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="mt-2"
                    >
                      <a
                        href={`https://docs.google.com/forms/d/e/1FAIpQLSeEIeYDnadlpAzTP5JUYpXZnJyjPqWzx5nFP-jfG-yyd_jaOA/viewform?entry.239070013=${encodeURIComponent(
                          polo.drpId,
                        )}&entry.468941104=${encodeURIComponent(polo.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar inclusão de grupo
                      </a>
                    </Button>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
