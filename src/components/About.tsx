const highlights = [
  "Equipe especializada em concreto e pisos",
  "Atendimento proximo do inicio ao fim da obra",
  "Compromisso com prazo, resistencia e acabamento",
];

export function About() {
  return (
    <section id="quem-somos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-orange">
            Quem somos
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-4xl">
            Uma empresa focada em entregar obras mais fortes, rapidas e bem
            acabadas.
          </h2>

          <p className="mt-5 text-base leading-7 text-black-secondary/70">
            A Lima Mix Construção atua com soluções em concreto usinado, pisos e
            suporte para obras de diferentes portes. Nosso trabalho combina
            conhecimento tecnico, organizacao de entrega e cuidado no acabamento
            para que cada etapa avance com seguranca.
          </p>

          <div className="mt-8 grid gap-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 rounded-md border border-black-secondary/10 bg-white-secondary px-4 py-3"
              >
                <span className="size-2 rounded-full bg-orange" />
                <p className="text-sm font-semibold text-black-secondary">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-black-secondary/10 bg-white-secondary">
          <div className="flex aspect-[4/3] items-center justify-center">
            <span className="text-sm font-semibold text-black-secondary/35">
              Foto da empresa ou equipe
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
