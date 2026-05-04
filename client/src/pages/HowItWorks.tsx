import { Button } from "@/components/ui/button";
import { CheckCircle, Heart } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * How It Works Page
 * Design: Warm Minimalism - Adoption process steps and donation section
 * Features: 4-step process, donation benefits, testimonials
 */
export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Escolha",
      description:
        "Navegue por nossos perfis de pets e encontre aquele que mais combina com você. Cada perfil contém informações detalhadas sobre o animal.",
      icon: "🔍",
    },
    {
      number: 2,
      title: "Entrevista",
      description:
        "Converse com nosso time para garantir uma ótima compatibilidade. Queremos ter certeza de que é a melhor combinação possível.",
      icon: "💬",
    },
    {
      number: 3,
      title: "Visita",
      description:
        "Conheça pessoalmente seu novo amigo antes de levar para casa. Você terá tempo para criar uma conexão especial.",
      icon: "🏠",
    },
    {
      number: 4,
      title: "Final Feliz",
      description:
        "Receba suporte contínuo e acompanhamento após a adoção. Estamos aqui para ajudar em cada etapa da jornada.",
      icon: "❤️",
    },
  ];

  const donationBenefits = [
    {
      title: "Resgate Emergencial",
      description:
        "Sua doação ajuda a resgatar pets em situação de rua e oferece cuidados veterinários essenciais.",
      icon: "🚑",
    },
    {
      title: "Alimentação Suplementar",
      description:
        "Garantimos que todos os nossos pets recebam alimentação de qualidade durante sua permanência conosco.",
      icon: "🍖",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8">
                <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full w-fit">
                  <span className="text-sm font-heading">Processo Simples</span>
                </div>

                <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
                  Transforme uma vida hoje.
                </h1>

                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Nosso processo de adoção é cuidadoso e transparente. Queremos garantir que cada adoção seja bem-sucedida e que você e seu novo amigo sejam felizes juntos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/adotar">
                    <a className="no-underline">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                        Ver Procuração de Adoção
                      </Button>
                    </a>
                  </Link>
                  <Button variant="outline" className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary/10 font-heading">
                    Quero Voluntariar
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-9xl">🐕‍🦺</div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                Como Adotar
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Seguimos um processo cuidadoso em 4 passos para garantir que cada adoção seja bem-sucedida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex flex-col gap-6">
                  {/* Step Number */}
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-display text-4xl shadow-lg">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-3">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-32 bg-gradient-to-b from-primary to-transparent transform translate-x-10" />
                  )}
                </div>
              ))}
            </div>

            {/* Timeline Visual */}
            <div className="mt-16 p-8 bg-muted/30 rounded-2xl border border-border">
              <h3 className="font-heading text-lg text-foreground mb-6">
                Tempo Estimado: 2-4 semanas
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-primary rounded-full" />
                <span className="text-sm font-body text-muted-foreground whitespace-nowrap">
                  Da escolha ao lar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                  🍖
                </div>
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                  🏥
                </div>
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                  🐕
                </div>
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                  💚
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                    Sua doação salva vidas
                  </h2>
                  <p className="text-lg text-muted-foreground font-body">
                    Não temos fins lucrativos. 100% das doações vão diretamente para o cuidado dos nossos pets.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-6">
                  {donationBenefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground font-body">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className="w-full md:w-fit bg-primary hover:bg-primary/90 text-primary-foreground font-heading px-8 py-6 text-lg">
                  Doar Agora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
              Perguntas Frequentes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "Qual é a taxa de adoção?",
                  a: "A taxa de adoção é simbólica e cobre os custos veterinários (vacinação, castração, etc). Valores variam conforme o pet.",
                },
                {
                  q: "Posso devolver o pet se não der certo?",
                  a: "Sim! Se por algum motivo não funcionar, podemos receber o pet de volta sem julgamentos. Sua felicidade é nossa prioridade.",
                },
                {
                  q: "Vocês fazem acompanhamento após a adoção?",
                  a: "Sim! Fazemos acompanhamento contínuo e estamos sempre disponíveis para dúvidas e suporte.",
                },
                {
                  q: "Como vocês escolhem as famílias?",
                  a: "Fazemos uma entrevista para entender seu estilo de vida e garantir que o pet seja compatível com sua rotina.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-heading text-lg text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground font-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              Explore nossos pets disponíveis e encontre seu novo melhor amigo hoje mesmo.
            </p>
            <Link href="/adotar">
              <a className="no-underline">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading px-8 py-6 text-lg">
                  Explorar Pets
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
