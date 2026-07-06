import { Button } from "@/components/Button";

const services = [
  {
    title: "Concreto usinado",
    description:
      "Fornecimento de concreto com controle de qualidade para obras residenciais, comerciais e industriais.",
  },
  {
    title: "Pisos de concreto",
    description:
      "Execucao de pisos resistentes e bem acabados para galpoes, patios, estacionamentos e areas externas.",
  },
  {
    title: "Bombeamento de concreto",
    description:
      "Aplicacao eficiente em locais de dificil acesso, reduzindo tempo de obra e melhorando a produtividade.",
  },
  {
    title: "Acabamento de pisos",
    description:
      "Nivelamento, desempeno e acabamento tecnico para entregar superficies mais uniformes e duraveis.",
  },
  {
    title: "Atendimento para obras",
    description:
      "Planejamento de entrega, orientacao tecnica e suporte para diferentes etapas da construcao.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-orange py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-normal text-white">
            Nossos servicos
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-4xl">
            Solucoes para cada etapa da sua obra.
          </h2>
          <p className="mt-4 text-base leading-7 text-black-secondary/70">
            Atuamos com concreto, pisos e suporte tecnico para entregar
            resultado, prazo e acabamento com mais previsibilidade.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-lg border border-black-secondary/10 bg-white"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-white-secondary">
                <span className="text-sm font-semibold text-black-secondary/35">
                  Foto do servico
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black-secondary/70">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#contato" variant="secondary" size="lg">
            Ver todos os servicos
          </Button>
        </div>
      </div>
    </section>
  );
}
