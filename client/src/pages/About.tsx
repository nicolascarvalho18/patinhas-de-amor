import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Zap } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * About Page
 * Design: Warm Minimalism - Project story, mission, and team
 * Features: Project background, mission statement, team info, values
 */
export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Amor Incondicional",
      description:
        "Acreditamos que todo animal merece amor e cuidado. Nossas ações são guiadas pela compaixão.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Somos fortes juntos. Nossa comunidade de adotantes, voluntários e parceiros faz a diferença.",
    },
    {
      icon: Target,
      title: "Responsabilidade",
      description:
        "Promovemos adoção responsável e educamos sobre os compromissos de ter um pet.",
    },
    {
      icon: Zap,
      title: "Impacto Real",
      description:
        "Cada ação conta. Medimos nosso sucesso pelas vidas transformadas.",
    },
  ];

  const team = [
    {
      name: "Nicolas Carvalho Ferreira",
      role: "Fundador & Proprietário",
      bio: "Idealizador e desenvolvedor principal do Patinhas de Amor, Nicolas criou este projeto com o objetivo de unir tecnologia e compaixão para transformar a vida de animais abandonados.",
    }
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
                  <span className="text-sm font-heading">Nossa História</span>
                </div>

                <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
                  Patinhas de Amor
                </h1>

                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Um projeto de faculdade que se tornou uma missão de vida: transformar a realidade dos animais abandonados através da adoção responsável.
                </p>

                <Link href="/adotar">
                  <a className="no-underline w-fit">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                      Adotar um Pet
                    </Button>
                  </a>
                </Link>
              </div>

              {/* Right Image */}
              <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-9xl">🐾</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Origin */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl text-foreground mb-8 text-center">
                Como Tudo Começou
              </h2>

              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  Patinhas de Amor nasceu como um projeto de conclusão de curso com uma visão simples mas poderosa: criar uma plataforma que facilitasse a adoção responsável de animais e reduzisse o abandono nas ruas.
                </p>

                <p>
                  Nossos fundadores perceberam que muitos animais precisavam de um lar, mas as pessoas não tinham um lugar confiável e organizado para encontrá-los. Ao mesmo tempo, muitos adotantes potenciais não sabiam por onde começar.
                </p>

                <p>
                  Assim surgiu a ideia: criar uma plataforma que conectasse corações nobres a companheiros que precisavam de amor. Não apenas um site de adoção, mas uma comunidade comprometida com a responsabilidade e o bem-estar animal.
                </p>

                <p>
                  Hoje, após meses de desenvolvimento e dedicação, estamos aqui para transformar vidas - tanto de animais quanto de pessoas. Porque acreditamos que adotar é um ato de amor que muda tudo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Mission */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 border border-primary/20">
                <h3 className="font-display text-3xl text-foreground mb-6">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Conectar animais abandonados com famílias amorosas, promovendo adoção responsável e reduzindo o abandono animal através de uma plataforma acessível, confiável e compassiva.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-12 border border-secondary/20">
                <h3 className="font-display text-3xl text-foreground mb-6">
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Um mundo onde nenhum animal é abandonado, onde a adoção é a primeira escolha e onde cada pet tem a oportunidade de viver uma vida plena de amor e cuidado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-foreground mb-12 text-center">
              Nossos Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-foreground mb-12 text-center">
              Nosso Time
            </h2>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 max-w-sm w-full">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-6xl">👤</div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-heading mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-foreground mb-12 text-center">
              Nosso Impacto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  number: "1.240+",
                  label: "Animais Resgatados",
                },
                {
                  number: "500+",
                  label: "Famílias Felizes",
                },
                {
                  number: "98%",
                  label: "Taxa de Sucesso",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-8 shadow-md border border-border text-center"
                >
                  <h3 className="font-display text-5xl text-primary mb-3">
                    {stat.number}
                  </h3>
                  <p className="font-heading text-lg text-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Faça Parte da Nossa Missão
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              Você pode ajudar de várias formas: adotando, doando, voluntariando ou compartilhando nossa causa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/adotar">
                <a className="no-underline">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading px-8 py-6 text-lg">
                    Adotar Agora
                  </Button>
                </a>
              </Link>
              <Link href="/donation">
                <a className="no-underline">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading px-8 py-6 text-lg">
                    Fazer Doação
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
