import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Utensils, Ambulance, X } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Donation Page
 * Design: Warm Minimalism - Donation options with tabs and impact information
 * Features: Donation tabs, impact metrics, donation form
 */
export default function Donation() {
  const [activeTab, setActiveTab] = useState<"emergency" | "food">("emergency");
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const donationOptions = [50, 100, 250, 500];

  const tabs = [
    {
      id: "emergency" as const,
      title: "Resgate Emergencial",
      icon: Ambulance,
      description:
        "Ajude-nos a resgatar pets em situação de rua e oferecer cuidados veterinários essenciais.",
      impact:
        "R$ 50 = Resgate de 1 pet | R$ 100 = Vacinação completa | R$ 250 = Cirurgia de castração | R$ 500 = Acompanhamento por 3 meses",
      color: "from-red-50 to-orange-50",
      accentColor: "text-red-600",
    },
    {
      id: "food" as const,
      title: "Alimentação Suplementar",
      icon: Utensils,
      description:
        "Garanta que todos os nossos pets recebam alimentação de qualidade durante sua permanência conosco.",
      impact:
        "R$ 50 = Ração para 5 pets/mês | R$ 100 = Ração premium para 10 pets/mês | R$ 250 = Suplementos nutricionais | R$ 500 = Alimentação completa para 1 mês",
      color: "from-green-50 to-emerald-50",
      accentColor: "text-green-600",
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab);
  const Icon = currentTab?.icon || Heart;

  const handleDonate = (amount: number) => {
    setDonationAmount(amount);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-heading">Sua Doação Salva Vidas</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight mb-6">
                Transforme vidas com generosidade
              </h1>

              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Somos uma organização sem fins lucrativos. 100% das suas doações vão diretamente para o cuidado, resgate e bem-estar dos nossos pets.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Tabs */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            {/* Tab Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                    activeTab === tab.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-white hover:border-primary/50"
                  }`}
                >
                  <tab.icon className={`w-8 h-8 mb-3 ${activeTab === tab.id ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="font-heading text-lg text-foreground">{tab.title}</h3>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {currentTab && (
              <div className={`bg-gradient-to-br ${currentTab.color} rounded-2xl p-12 mb-12 border border-border`}>
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-display text-3xl text-foreground mb-4">
                    {currentTab.title}
                  </h2>
                  <p className="text-lg text-muted-foreground font-body mb-8">
                    {currentTab.description}
                  </p>

                  <div className="bg-white rounded-xl p-8 border border-border">
                    <h3 className="font-heading text-lg text-foreground mb-6">
                      Seu impacto:
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {currentTab.impact}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Donation Amount Selection */}
            <div className="max-w-2xl mx-auto mb-12">
              <h3 className="font-heading text-2xl text-foreground mb-8 text-center">
                Escolha um valor:
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {donationOptions.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleDonate(amount)}
                    className={`p-6 rounded-xl border-2 transition-all font-heading text-lg ${
                      donationAmount === amount
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-foreground hover:border-primary"
                    }`}
                  >
                    R$ {amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="flex gap-4 mb-8">
                <input
                  type="number"
                  placeholder="Outro valor"
                  min="1"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => {
                    const value = e.target.value ? parseInt(e.target.value) : null;
                    setDonationAmount(value);
                  }}
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading px-8">
                  Doar
                </Button>
              </div>

              {/* Thank You Message */}
              {showThankYou && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <p className="text-green-700 font-heading text-lg">
                    ❤️ Obrigado pela sua doação de R$ {donationAmount}!
                  </p>
                  <p className="text-green-600 font-body text-sm mt-2">
                    Você está ajudando a salvar vidas de animais.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-foreground mb-12 text-center">
              Seu impacto em números
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  number: "1.240+",
                  label: "Animais Resgatados",
                  description: "Vidas transformadas desde nossa fundação",
                },
                {
                  number: "98%",
                  label: "Taxa de Sucesso",
                  description: "Pets felizes em seus novos lares",
                },
                {
                  number: "500+",
                  label: "Famílias Adotantes",
                  description: "Comunidade crescente de amor",
                },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white rounded-xl p-8 shadow-md border border-border text-center"
                >
                  <h3 className="font-display text-4xl text-primary mb-2">
                    {metric.number}
                  </h3>
                  <p className="font-heading text-lg text-foreground mb-2">
                    {metric.label}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-foreground mb-12 text-center">
              Perguntas sobre doações
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "Minha doação é segura?",
                  a: "Sim! Utilizamos plataformas de pagamento seguras e certificadas. Seus dados estão protegidos.",
                },
                {
                  q: "Posso acompanhar minha doação?",
                  a: "Sim! Você receberá relatórios mensais sobre como sua doação está ajudando os pets.",
                },
                {
                  q: "Posso fazer doações recorrentes?",
                  a: "Claro! Você pode configurar doações mensais e fazer uma diferença contínua.",
                },
                {
                  q: "Há deduções fiscais?",
                  a: "Sim, somos uma ONG registrada. Você pode deduzir suas doações no imposto de renda.",
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

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Pronto para fazer a diferença?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              Cada doação, por menor que seja, salva vidas e transforma histórias.
            </p>
            <Link href="/adotar">
              <a className="no-underline">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading px-8 py-6 text-lg mr-4">
                  Adotar um Pet
                </Button>
              </a>
            </Link>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading px-8 py-6 text-lg">
              Voluntariar
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
