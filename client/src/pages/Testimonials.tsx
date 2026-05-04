import { Button } from "@/components/ui/button";
import { Quote, Send, Image } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    id: 1,
    quote: "Mudou meu mundo",
    text: "O Max chegou em um momento difícil e trouxe luz para a minha casa. Nunca imaginei que um animal de abrigo pudesse ter tanta gratidão nos olhos.",
    author: "Mariana Silva",
    role: "Adotou Max (Golden Mix)",
    avatar: "M",
    petImage: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=400",
    big: true,
  },
  {
    id: 2,
    quote: null,
    text: "A Luna é a rainha da casa agora. Agradeço imensamente ao Patinhas por esse encontro.",
    author: "Ricardo Mendes",
    role: "Luna",
    avatar: "R",
    petImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400",
    big: false,
  },
  {
    id: 3,
    quote: "A alegria que faltava!",
    text: "Nossos fins de semana agora são cheios de trilhas e brincadeiras no parque.",
    author: "Família Oliveira",
    role: "Adotou Pinga",
    avatar: null,
    petImage: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400",
    big: false,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Histórias de Sucesso
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 max-w-2xl mx-auto">
              Histórias de Final Feliz
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Cada adoção é o início de um novo capítulo cheio de esperança. Conheça as vidas que foram transformadas pelo amor incondicional de um companheiro de quatro patas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/adotar">
                <a className="no-underline">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-semibold">
                    Quero Adotar
                  </Button>
                </a>
              </Link>
              <Button variant="outline" className="border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary rounded-full px-8 font-semibold">
                Ver Galeria
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Big card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden">
                  <img
                    src={testimonials[0].petImage}
                    alt="Pet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <Quote className="w-8 h-8 text-primary/30 mb-3" />
                    <h3 className="font-bold text-lg text-foreground mb-2">"{testimonials[0].quote}"</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{testimonials[0].text}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[0].avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{testimonials[0].author}</p>
                      <p className="text-xs text-muted-foreground">{testimonials[0].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-6">
                {/* Small card 1 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-row">
                  <div className="w-28 h-28 flex-shrink-0 overflow-hidden">
                    <img src={testimonials[1].petImage} alt="Pet" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">"{testimonials[1].text}"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs">
                        {testimonials[1].avatar}
                      </div>
                      <p className="text-xs font-bold text-foreground">{testimonials[1].author}</p>
                    </div>
                  </div>
                </div>

                {/* Small card 2 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-row">
                  <div className="w-28 h-28 flex-shrink-0 overflow-hidden">
                    <img src={testimonials[2].petImage} alt="Pet" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <h4 className="font-bold text-sm text-foreground mb-1">{testimonials[2].quote}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">"{testimonials[2].text}"</p>
                    <p className="text-xs font-bold text-foreground mt-2">{testimonials[2].author}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[2].role}</p>
                  </div>
                </div>

                {/* Quote block */}
                <div className="bg-primary rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-3">🐾</div>
                  <blockquote className="text-white font-semibold text-lg leading-snug italic">
                    "Adotar é o ato mais puro de dar uma segunda chance ao amor. Não salvamos apenas um animal, salvamos a nós mesmos."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submit story */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left */}
                <div className="bg-primary p-10 text-white">
                  <h2 className="font-display text-2xl mb-4">Envie seu depoimento</h2>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Você já adotou um amiguinho conosco? Queremos muito conhecer a história de vocês e inspirar novos adotantes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Image className="w-4 h-4" />
                      <span>Prepare uma foto bem bonita</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Send className="w-4 h-4" />
                      <span>Escreva sua história</span>
                    </div>
                  </div>
                </div>

                {/* Right - Form */}
                <div className="p-10">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Seu Nome</label>
                      <input
                        type="text"
                        placeholder="Ex: Ana Souza"
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Nome do Animal</label>
                      <input
                        type="text"
                        placeholder="Ex: Pipoca"
                        className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Sua História</label>
                    <textarea
                      rows={4}
                      placeholder="Conte como foi o encontro de vocês..."
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold">
                    Enviar História
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
