import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Share2, MessageCircle, MapPin, Calendar, Syringe, Home as HomeIcon } from "lucide-react";
import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pets } from "@/lib/pets";

/**
 * Pet Detail Page
 * Design: Warm Minimalism - Full pet profile with story and adoption info
 * Features: Single cover photo, technical info, story, ideal home, contact
 */
export default function PetDetail() {
  const [, params] = useRoute("/pet/:id");
  const [isFavorite, setIsFavorite] = useState(false);

  // Find pet based on params.id
  const pet = pets.find((p) => p.id === parseInt(params?.id || "1")) || pets[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Photo + Actions */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFavorite
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
                <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-2 rounded-full font-heading text-sm">
                  Disponível
                </div>
              </div>

              {/* Share & Actions */}
              <div className="flex gap-4 mb-12">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                  Adotar {pet.name}
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading">
                  <Share2 className="w-5 h-5 mr-2" />
                  Compartilhar
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Dúvidas
                </Button>
              </div>

              {/* Story Section */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-foreground mb-6">Minha História</h2>
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">
                  {pet.story}
                </p>
              </div>

              {/* Ideal Home Section */}
              <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <HomeIcon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">O Lar Ideal</h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {pet.idealHome}
                </p>
              </div>
            </div>

            {/* Right: Technical Info & Contact */}
            <div className="lg:col-span-1">
              {/* Pet Card */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border mb-8 sticky top-24">
                {/* Name & Type */}
                <div className="mb-8">
                  <h1 className="font-display text-4xl text-foreground mb-2">
                    {pet.name}
                  </h1>
                  <p className="text-lg text-muted-foreground font-body">
                    {pet.type} • {pet.breed}
                  </p>
                </div>

                {/* Technical Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 pb-4 border-b border-border">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-heading text-muted-foreground uppercase">Idade</p>
                      <p className="font-body text-foreground">{pet.age}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b border-border">
                    <div className="w-5 h-5 text-primary flex-shrink-0 mt-1">📏</div>
                    <div>
                      <p className="text-xs font-heading text-muted-foreground uppercase">Tamanho</p>
                      <p className="font-body text-foreground">{pet.size} ({pet.weight})</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b border-border">
                    <Syringe className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-heading text-muted-foreground uppercase">Vacinação</p>
                      <p className="font-body text-foreground">
                        {pet.vaccinated ? "✓ Completa" : "Pendente"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b border-border">
                    <div className="w-5 h-5 text-primary flex-shrink-0 mt-1">🏥</div>
                    <div>
                      <p className="text-xs font-heading text-muted-foreground uppercase">Castração</p>
                      <p className="font-body text-foreground">
                        {pet.neutered ? "✓ Realizada" : "Pendente"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-heading text-muted-foreground uppercase">Localização</p>
                      <p className="font-body text-foreground">{pet.location}</p>
                    </div>
                  </div>
                </div>

                {/* Adoption Info */}
                <div className="bg-muted/30 rounded-lg p-4 mb-8 border border-border">
                  <p className="text-xs font-heading text-muted-foreground uppercase mb-2">
                    Famílias Adotantes
                  </p>
                  <p className="font-display text-2xl text-foreground">
                    {pet.adoptionFamilies}+
                  </p>
                  <p className="text-xs font-body text-muted-foreground mt-1">
                    Pets felizes em seus novos lares
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading py-6">
                    Adotar {pet.name}
                  </Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 font-heading py-6">
                    Ter Dúvidas
                  </Button>
                </div>
              </div>

              {/* Donation Card */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="font-display text-xl text-foreground mb-4">
                  Sua doação salva vidas
                </h3>
                <p className="text-sm font-body text-muted-foreground mb-6">
                  Ajude-nos a resgatar e cuidar de mais pets em situação de rua.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                  Doar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
