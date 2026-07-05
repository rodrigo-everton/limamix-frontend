import Image from "next/image";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="bg-black-secondary">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-normal text-orange">
            Lima Mix Construção
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Concreto usinado e pisos para obras com qualidade do inicio ao fim.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white-secondary/80 sm:text-lg">
            Atendimento agil, equipe especializada e solucoes sob medida para
            construtoras, empresas e projetos residenciais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#whatsapp" size="lg" className="gap-2">
              <Image
                src="/whatsapp-logo.svg"
                alt="WhatsApp Logo"
                width={20}
                height={20}
                className="size-5 object-contain"
              />
              Falar no WhatsApp
            </Button>

            <Button
              href="#servicos"
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent text-orange hover:border-orange-secondary hover:text-orange-secondary"
            >
              Ver servicos
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <Image
            src="/foto-teste.jpg"
            alt="Caminhao de concreto representando servicos da LimaMix"
            width={960}
            height={720}
            className="h-auto w-full rounded-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
