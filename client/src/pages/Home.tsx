import { Button } from "@/components/ui/button";
import { PawPrint, Heart, Users } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pets } from "@/lib/pets";

export default function Home() {
  const featuredPets = pets.slice(0, 3);

  const stats = [
    { number: "1.240", label: "Animais Resgatados", icon: PawPrint, highlight: false },
    { number: "98%", label: "Taxa de adoção", icon: Heart, highlight: true },
    { number: "45", label: "Cidades Atendidas", icon: Users, highlight: false },
  ];

  const steps = [
    {
      number: 1,
      title: "Escolha",
      description: "Navegue pelos perfis e encontre o amigo que mais combina com seu estilo de vida.",
    },
    {
      number: 2,
      title: "Entrevista",
      description: "Conversamos para entender melhor você e garantir uma adoção perfeita.",
    },
    {
      number: 3,
      title: "Visita",
      description: "Momento emocionante: você conhece pessoalmente o pet antes de levá-lo.",
    },
    {
      number: 4,
      title: "Final Feliz",
      description: "Receba suporte contínuo e acompanhamento após a adoção.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit text-sm font-semibold">
                  <PawPrint className="w-4 h-4" />
                  Encontre seu novo melhor amigo
                </div>

                <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
                  O amor não tem raça,{" "}
                  <span className="text-primary">mas tem endereço.</span>
                </h1>

                <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                  Nossa missão é conectar corações solitários e compartilhar os laços que aguardam ansiosamente por um lar cheio de carinho e segurança.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/adotar">
                    <a className="no-underline">
                      <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-5 text-base">
                        Quero Adotar
                      </Button>
                    </a>
                  </Link>
                  <Link href="/sobre">
                    <a className="no-underline">
                      <Button variant="outline" className="border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary font-semibold rounded-full px-8 py-5 text-base">
                        Ver Galeria
                      </Button>
                    </a>
                  </Link>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="pet" />
                    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="pet" />
                    <img src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="pet" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">500+ Famílias</p>
                    <p className="text-xs text-muted-foreground">felizes conosco</p>
                  </div>
                </div>
              </div>

              {/* Right - Hero Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Cão e gato juntos"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">+500 adoções</p>
                    <p className="text-xs text-muted-foreground">este mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center text-center gap-3 p-8 rounded-2xl shadow-sm ${
                      stat.highlight
                        ? "bg-primary text-white"
                        : "bg-white text-foreground"
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${stat.highlight ? "text-white" : "text-primary"}`} />
                    <p className={`font-display text-4xl ${stat.highlight ? "text-white" : "text-foreground"}`}>
                      {stat.number}
                    </p>
                    <p className={`text-sm font-medium ${stat.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Pets */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-display text-4xl text-foreground mb-2">
                  Amigos que esperam por você
                </h2>
                <p className="text-muted-foreground text-sm">
                  Estes são apenas alguns dos pequenos que buscam um lar cheio de amor.
                </p>
              </div>
              <Link href="/adotar">
                <a className="no-underline hidden md:block">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all">
                    Ver todos os animais →
                  </Button>
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPets.map((pet) => (
                <div key={pet.id} className="pet-card bg-white rounded-3xl overflow-hidden shadow-sm border border-border">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-green">Pronto para adoção</span>
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors">
                      <Heart className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-xl text-foreground mb-1">{pet.name}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="badge-tag">{pet.type}</span>
                      <span className="badge-tag">Porte {pet.size}</span>
                      <span className="badge-tag">{pet.age}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {pet.description}
                    </p>
                    <Link href={`/pet/${pet.id}`}>
                      <a className="no-underline">
                        <Button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full font-semibold transition-all border border-primary/20">
                          Conhecer {pet.name}
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:hidden text-center">
              <Link href="/adotar">
                <a className="no-underline">
                  <Button variant="outline" className="border-primary text-primary rounded-full font-semibold">
                    Ver todos os animais →
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="font-display text-4xl text-foreground mb-3">Como funciona a adoção</h2>
              <p className="text-muted-foreground max-w-xl">
                Adotar um amigo é um processo guiado por amor e responsabilidade. Veja como é simples fazer parte desta jornada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {steps.map((step) => (
                <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="bg-white rounded-2xl p-5 border border-border flex items-center gap-3 max-w-2xl">
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                ✅
              </div>
              <p className="text-sm text-muted-foreground">
                Todos os animais são acompanhados por veterinários cadastrados e vacinados.
              </p>
              <Link href="/adotar">
                <a className="no-underline ml-auto flex-shrink-0">
                  <Button className="bg-foreground hover:bg-foreground/90 text-white rounded-full text-sm font-semibold whitespace-nowrap">
                    Começar processo
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
