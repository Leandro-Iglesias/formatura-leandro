"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Formatura() {
  const starsRef = useRef<HTMLDivElement>(null);
  const [fotos, setFotos] = useState<string[]>([]);
  const [loadingFotos, setLoadingFotos] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api/fotos")
      .then((res) => res.json())
      .then((data) => {
        setFotos(data.fotos);
        setLoadingFotos(false);
      })
      .catch(() => setLoadingFotos(false));
  }, []);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 70; i++) {
      const star = document.createElement("div");
      const size = 1 + Math.random() * 2.5;
      Object.assign(star.style, {
        position: "absolute",
        background: "#c9a227",
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: "0",
        animation: `twinkle ${(2 + Math.random() * 4).toFixed(1)}s ease-in-out ${(Math.random() * 6).toFixed(1)}s infinite`,
      });
      container.appendChild(star);
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentIndex, fotos]);

  const goNext = () => setCurrentIndex((p) => (p + 1) % fotos.length);
  const goPrev = () =>
    setCurrentIndex((p) => (p - 1 + fotos.length) % fotos.length);

  const Divider = () => (
    <div className="flex items-center gap-4 my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />
      <div className="w-1.5 h-1.5 bg-[#c9a227] rotate-45" />
      <div className="w-1.5 h-1.5 bg-[#c9a227]/40 rotate-45" />
      <div className="w-1.5 h-1.5 bg-[#c9a227] rotate-45" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />
    </div>
  );

  return (
    <main
      className="relative min-h-screen bg-[#0a0a0a] text-[#f5f0e8] overflow-x-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Bebas+Neue&family=Montserrat:wght@300;400;600&display=swap"
      />

      {/* Stars */}
      <div
        ref={starsRef}
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      />

      <div className="relative z-10 max-w-xl mx-auto px-6 pb-20">
        {/* ═══════════════════════════════════════
            BLOCO 1 — ABERTURA: quem é e o que aconteceu
        ════════════════════════════════════════ */}
        <section className="text-center pt-20 pb-4 animate-fade-up-2">
          {/* Linha de contexto */}
          <p className="text-[10px] font-semibold tracking-[6px] text-[#c9a227]/70 uppercase mb-10">
            E depois de anos de dedicação e esforço, chegou a hora de celebrar
            uma conquista incrível!
          </p>

          {/* Nome em destaque — protagonista */}
          <h1
            className="text-[#f5f0e8] leading-none mb-3"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(72px, 18vw, 112px)",
              letterSpacing: "6px",
            }}
          >
            Leandro
          </h1>
          <h2
            className="text-[#f5f0e8]/60 leading-none mb-10"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 9vw, 56px)",
              letterSpacing: "4px",
            }}
          >
            Iglesias
          </h2>

          {/* Ícones representando tecnologia/computação */}
          <div className="flex justify-center items-center gap-8 my-10 animate-fade-up-3">
            {/* Computador */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <rect
                x="4"
                y="6"
                width="36"
                height="24"
                rx="2"
                stroke="#c9a227"
                strokeWidth="1.5"
                fill="none"
              />
              <line
                x1="14"
                y1="30"
                x2="10"
                y2="38"
                stroke="#c9a227"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="30"
                x2="34"
                y2="38"
                stroke="#c9a227"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="9"
                y1="38"
                x2="35"
                y2="38"
                stroke="#c9a227"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <text
                x="14"
                y="22"
                fill="#c9a227"
                fontSize="10"
                fontFamily="monospace"
              >
                &lt;/&gt;
              </text>
            </svg>

            {/* Capelo */}
            <svg
              width="52"
              height="52"
              viewBox="0 0 200 160"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 0 12px rgba(201,162,39,0.5))" }}
            >
              <polygon points="100,20 200,70 100,95 0,70" fill="#c9a227" />
              <ellipse cx="100" cy="95" rx="70" ry="35" fill="#a07d15" />
              <line
                x1="94"
                y1="26"
                x2="94"
                y2="85"
                stroke="#c9a227"
                strokeWidth="3"
              />
              <path
                d="M 94 85 Q 70 110 55 120"
                stroke="#c9a227"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 55 120 Q 48 128 44 135"
                stroke="#c9a227"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <ellipse cx="44" cy="137" rx="6" ry="6" fill="#c9a227" />
            </svg>

            {/* Diploma/arquivo */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <rect
                x="8"
                y="4"
                width="28"
                height="36"
                rx="2"
                stroke="#c9a227"
                strokeWidth="1.5"
                fill="none"
              />
              <line
                x1="14"
                y1="14"
                x2="30"
                y2="14"
                stroke="#c9a227"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <line
                x1="14"
                y1="20"
                x2="30"
                y2="20"
                stroke="#c9a227"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <line
                x1="14"
                y1="26"
                x2="24"
                y2="26"
                stroke="#c9a227"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle
                cx="28"
                cy="33"
                r="5"
                stroke="#c9a227"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M24 38 L26 36 M32 38 L30 36"
                stroke="#c9a227"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* O fato */}
          <div className="mt-2">
            <p className="text-[13px] font-semibold tracking-[4px] text-[#c9a227] uppercase">
              Bacharel em Ciência da Computação
            </p>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════
            BLOCO 2 — MEMÓRIAS (galeria)
        ════════════════════════════════════════ */}
        <section className="animate-fade-up-5">
          <p
            className="text-center text-[28px] font-light italic text-[#f5f0e8]/80 mb-2 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Uma jornada de dedicação,
          </p>
          <p
            className="text-center text-[28px] font-light italic text-[#c9a227] mb-10 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            superação e conquista.
          </p>

          {/* Título galeria */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
            <p className="text-[9px] font-semibold tracking-[5px] text-[#c9a227]/80 uppercase">
              Memórias
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
          </div>

          {/* Carregando */}
          {loadingFotos && (
            <div className="flex flex-col items-center gap-6">
              <div className="w-72 h-72 rounded-full bg-[#c9a227]/10 animate-pulse-gold border border-[#c9a227]/20" />
            </div>
          )}

          {/* Sem fotos */}
          {!loadingFotos && fotos.length === 0 && (
            <div className="text-center py-12 border border-[#c9a227]/10 bg-[#c9a227]/5 rounded-sm">
              <p
                className="text-[18px] italic text-[#f5f0e8]/30"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Nenhuma foto encontrada
              </p>
              <p className="text-[9px] tracking-[2px] text-[#c9a227]/30 uppercase mt-2">
                Adicione imagens em{" "}
                <code className="text-[#c9a227]/50">public/fotos/</code>
              </p>
            </div>
          )}

          {/* Carrossel circular */}
          {!loadingFotos && fotos.length > 0 && (
            <div className="flex flex-col items-center gap-8">
              <div
                className="relative flex items-center justify-center"
                style={{ width: 340, height: 340 }}
              >
                {/* Anéis decorativos */}
                <div
                  className="absolute rounded-full border border-[#c9a227]/20 animate-spin-slow"
                  style={{ width: 320, height: 320 }}
                />
                <div
                  className="absolute rounded-full border border-dashed border-[#c9a227]/10 animate-spin-slow-reverse"
                  style={{ width: 338, height: 338 }}
                />

                {/* Foto */}
                <div
                  className="relative overflow-hidden rounded-full border-2 border-[#c9a227]/50"
                  style={{
                    width: 288,
                    height: 288,
                    boxShadow:
                      "0 0 50px rgba(201,162,39,0.12), 0 0 100px rgba(201,162,39,0.05)",
                  }}
                >
                  <Image
                    key={currentIndex}
                    src={`/fotos/${fotos[currentIndex]}`}
                    alt={`Foto ${currentIndex + 1}`}
                    fill
                    className="object-cover animate-fade-in"
                  />
                </div>

                {/* Botão anterior */}
                <button
                  onClick={goPrev}
                  className="absolute left-0 w-10 h-10 rounded-full border border-[#c9a227]/30 bg-[#0a0a0a] flex items-center justify-center text-[#c9a227] text-2xl hover:bg-[#c9a227]/10 hover:border-[#c9a227] transition-all duration-300"
                >
                  ‹
                </button>

                {/* Botão próximo */}
                <button
                  onClick={goNext}
                  className="absolute right-0 w-10 h-10 rounded-full border border-[#c9a227]/30 bg-[#0a0a0a] flex items-center justify-center text-[#c9a227] text-2xl hover:bg-[#c9a227]/10 hover:border-[#c9a227] transition-all duration-300"
                >
                  ›
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 items-center">
                {fotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === currentIndex ? 20 : 6,
                      height: 6,
                      background:
                        i === currentIndex ? "#c9a227" : "rgba(201,162,39,0.2)",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        <Divider />

        {/* ═══════════════════════════════════════
            BLOCO 3 — O CONVITE
        ════════════════════════════════════════ */}
        <section className="animate-fade-up-8 text-center">
          <p className="text-[10px] font-semibold tracking-[6px] text-[#c9a227]/70 uppercase mb-6">
            Você está convidado
          </p>

          <p
            className="text-[32px] font-light italic text-[#f5f0e8] leading-snug mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Venha celebrar
          </p>
          <p
            className="text-[32px] font-light italic text-[#c9a227] leading-snug mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            essa conquista conosco.
          </p>

          {/* Cards data e hora */}
          <div className="grid grid-cols-2 gap-0.5 mb-0.5">
            {[
              { label: "Data", main: "10 ABR", sub: "2026" },
              { label: "Horário", main: "21H00", sub: "Recepção" },
            ].map((card, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative overflow-hidden border border-[#c9a227]/20 p-8 text-center transition-colors duration-300 cursor-default ${
                  hoveredCard === i ? "bg-[#c9a227]/10" : "bg-[#c9a227]/5"
                }`}
              >
                <div
                  className={`absolute top-0 h-full w-[3px] bg-[#c9a227] ${i === 0 ? "left-0" : "right-0"}`}
                />
                <span className="text-xl mb-3 block text-[#c9a227]/50">◇</span>
                <p className="text-[9px] font-semibold tracking-[5px] text-[#c9a227] uppercase mb-2">
                  {card.label}
                </p>
                <p
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  className="text-[36px] tracking-[2px] text-[#f5f0e8] leading-none mb-1"
                >
                  {card.main}
                </p>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-[15px] text-[#f5f0e8]/50 italic"
                >
                  {card.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Local */}
          <div className="bg-[#c9a227]/5 border border-[#c9a227]/20 border-t-0 p-8 text-center">
            <p className="text-[9px] font-semibold tracking-[5px] text-[#c9a227] uppercase mb-3">
              Local
            </p>
            <p
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              className="text-[26px] tracking-[3px] text-[#c9a227] mb-2"
            >
              Salão de Eventos Pinga Fogo
            </p>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[16px] italic text-[#f5f0e8]/60 leading-relaxed"
            >
              Avenida Duque de Caxias, 1120
              <br />
              Entre Lomas e Angustura
            </p>
          </div>
        </section>

        <Divider />

        {/* ═══════════════════════════════════════
            BLOCO 4 — CONFIRMAÇÃO
        ════════════════════════════════════════ */}
        <section className="animate-fade-up-10 text-center">
          <p
            className="text-[28px] font-light italic text-[#f5f0e8]/80 mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Sua presença é o melhor presente.
          </p>

          {!confirmed ? (
            <button
              onClick={() => setConfirmed(true)}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className={`text-[10px] font-semibold tracking-[5px] uppercase px-12 py-5 border border-[#c9a227] transition-all duration-300 cursor-pointer ${
                btnHovered
                  ? "bg-[#c9a227] text-[#0a0a0a]"
                  : "bg-transparent text-[#c9a227]"
              }`}
            >
              Confirmar Presença
            </button>
          ) : (
            <p
              className="animate-fade-in text-[24px] italic text-[#c9a227]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              ✦ Obrigado! Até lá! ✦
            </p>
          )}
        </section>

        {/* Rodapé */}
        <div className="flex items-center gap-3 mt-16 justify-center">
          <div className="w-14 h-px bg-[#c9a227]/30" />
          <p className="text-[8px] tracking-[4px] text-[#c9a227]/30 uppercase">
            Formatura · 2026
          </p>
          <div className="w-14 h-px bg-[#c9a227]/30" />
        </div>
      </div>
    </main>
  );
}
