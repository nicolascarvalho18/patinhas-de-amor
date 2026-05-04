import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pets } from "@/lib/pets";

export default function Adoption() {
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const typeOptions = ["Cachorros", "Gatos", "Outros"];
  const sizeOptions = ["Pequeno", "Médio", "Grande"];
  const ageOptions = ["Filhote", "Adulto", "Sênior"];

  const ageMap: Record<string, string[]> = {
    Filhote: ["1 ano", "3 meses", "6 meses"],
    Adulto: ["2 anos", "3 anos", "4 anos"],
    Sênior: ["7 anos", "8 anos", "9 anos", "10 anos"],
  };

  const typeMap: Record<string, string> = {
    Cachorros: "Cachorro",
    Gatos: "Gato",
    Outros: "Coelho",
  };

  const filteredPets = pets.filter((pet) => {
    if (selectedType.length > 0) {
      const mapped = selectedType.map((t) => typeMap[t]);
      if (!mapped.includes(pet.type)) return false;
    }
    if (selectedSize && pet.size !== selectedSize) return false;
    if (selectedAge) {
      const ageList = ageMap[selectedAge] || [];
      if (!ageList.includes(pet.age)) return false;
    }
    return true;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleType = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedType([]);
    setSelectedSize(null);
    setSelectedAge(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <div className="py-10 px-4">
          <div className="container mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Encontre seu novo melhor amigo
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Centenas de patinhas esperam por um lar cheio de amor. Use os filtros abaixo para encontrar o companheiro que mais combina com seu estilo de vida.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-primary" />
                  <h2 className="font-bold text-lg text-foreground">Filtros</h2>
                </div>

                {/* Espécie */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-foreground mb-3">Espécie</h3>
                  <div className="flex flex-col gap-2.5">
                    {typeOptions.map((type) => (
                      <label key={type} className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedType.includes(type)}
                          onChange={() => toggleType(type)}
                          className="w-4 h-4 accent-primary rounded"
                        />
                        <span className="text-sm text-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Porte */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-foreground mb-3">Porte</h3>
                  <div className="flex flex-col gap-2">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium text-left transition-all ${
                          selectedSize === size
                            ? "bg-primary text-white"
                            : "bg-muted text-foreground hover:bg-primary/10"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Idade */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-foreground mb-3">Idade</h3>
                  <div className="flex flex-wrap gap-2">
                    {ageOptions.map((age) => (
                      <button
                        key={age}
                        onClick={() => setSelectedAge(selectedAge === age ? null : age)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          selectedAge === age
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-foreground hover:bg-foreground/80 text-white rounded-xl font-semibold mb-4"
                  onClick={clearFilters}
                >
                  Limpar Filtros
                </Button>

                {/* Dica Pro */}
                <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                  <p className="text-xs font-bold text-secondary mb-1">💡 Dica Pro</p>
                  <p className="text-xs text-muted-foreground">
                    Animais adultos costumam se adaptar mais rápido à rotina da casa!
                  </p>
                </div>
              </div>
            </aside>

            {/* Pet Grid */}
            <div className="md:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Mostrando <span className="font-bold text-foreground">{filteredPets.length}</span> patinhas encontradas
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Ordenar por:</span>
                  <select className="text-sm text-primary font-semibold bg-transparent border-none outline-none cursor-pointer">
                    <option>Mais recentes</option>
                    <option>A-Z</option>
                  </select>
                </div>
              </div>

              {filteredPets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPets.map((pet) => (
                    <div key={pet.id} className="pet-card bg-white rounded-3xl overflow-hidden shadow-sm border border-border">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={pet.image}
                          alt={pet.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="badge-green">Pronto para adoção</span>
                        </div>
                        <button
                          onClick={() => toggleFavorite(pet.id)}
                          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              favorites.includes(pet.id)
                                ? "fill-red-500 text-red-500"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-bold text-lg text-foreground">{pet.name}</h3>
                          <button
                            onClick={() => toggleFavorite(pet.id)}
                            className="text-muted-foreground hover:text-red-500 transition-colors"
                          >
                            <Heart className={`w-4 h-4 ${favorites.includes(pet.id) ? "fill-red-500 text-red-500" : ""}`} />
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className="badge-tag">{pet.age}</span>
                          <span className="badge-tag">Porte {pet.size}</span>
                        </div>
                        <Link href={`/pet/${pet.id}`}>
                          <a className="no-underline">
                            <Button
                              variant="outline"
                              className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all text-sm"
                            >
                              Saiba Mais
                            </Button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Nenhuma patinha encontrada</h3>
                  <p className="text-muted-foreground mb-6">Tente ajustar os filtros para encontrar seu novo amigo.</p>
                  <Button onClick={clearFilters} className="bg-primary hover:bg-primary/90 text-white rounded-full">
                    Limpar Filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
