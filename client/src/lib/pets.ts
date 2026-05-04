export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  size: string;
  weight: string;
  vaccinated: boolean;
  neutered: boolean;
  location: string;
  status: string;
  description: string;
  story: string;
  idealHome: string;
  image: string;
  adoptionFamilies: number;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Thor",
    type: "Cachorro",
    breed: "Golden Retriever",
    age: "2 anos",
    size: "Grande",
    weight: "30kg",
    vaccinated: true,
    neutered: true,
    location: "São Paulo, SP",
    status: "Disponível",
    description: "Doce, amigável e pronto para uma nova aventura.",
    story: "Thor é um Golden Retriever lindo e saudável que estava em situação de rua. Ele é muito amigável, adora brincar e é perfeito para famílias com crianças. Tem ótima saúde e já foi vacinado e castrado.",
    idealHome: "Thor precisa de um lar com espaço para brincar e exercitar-se. Ele adora companhia e não gosta de ficar sozinho por muito tempo. Famílias ativas e amorosas são perfeitas para ele!",
    image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 500
  },
  {
    id: 2,
    name: "Luna",
    type: "Gato",
    breed: "Persa",
    age: "1 ano",
    size: "Pequeno",
    weight: "4kg",
    vaccinated: true,
    neutered: true,
    location: "Rio de Janeiro, RJ",
    status: "Disponível",
    description: "Uma gatinha carinhosa que adora aconchego e tranquilidade.",
    story: "Luna é uma gatinha Persa muito calma e elegante. Ela foi resgatada de um abrigo superlotado e agora busca um lar tranquilo onde possa receber muito carinho e ter seu cantinho favorito para dormir.",
    idealHome: "Luna se adapta bem a apartamentos e ambientes calmos. Ela prefere a companhia de adultos ou crianças mais velhas que saibam respeitar seu espaço.",
    image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 320
  },
  {
    id: 3,
    name: "Pompom",
    type: "Coelho",
    breed: "Holandês",
    age: "1 ano",
    size: "Pequeno",
    weight: "2kg",
    vaccinated: true,
    neutered: false,
    location: "Curitiba, PR",
    status: "Disponível",
    description: "Dócil, silencioso e perfeito para quem mora em apartamento.",
    story: "Pompom é um coelhinho Holandês extremamente dócil. Ele adora comer cenouras fresquinhas e pular pelo jardim. É o companheiro ideal para quem busca um pet silencioso e afetuoso.",
    idealHome: "Pompom precisa de um espaço seguro para circular e brinquedos para roer. Ele se dá muito bem com outros animais calmos.",
    image: "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 150
  },
  {
    id: 4,
    name: "Zeus",
    type: "Cachorro",
    breed: "Labrador",
    age: "3 anos",
    size: "Grande",
    weight: "32kg",
    vaccinated: true,
    neutered: true,
    location: "Belo Horizonte, MG",
    status: "Disponível",
    description: "Atlético, leal e adora nadar e correr.",
    story: "Zeus é um Labrador cheio de energia que adora atividades ao ar livre. Ele é extremamente leal e obediente, sendo o parceiro perfeito para quem gosta de trilhas e esportes.",
    idealHome: "Precisa de uma casa com quintal grande e donos ativos que possam lhe dar muita atenção e exercício físico.",
    image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 410
  },
  {
    id: 5,
    name: "Nina",
    type: "Gato",
    breed: "Siamês",
    age: "2 anos",
    size: "Pequeno",
    weight: "3.5kg",
    vaccinated: true,
    neutered: true,
    location: "Porto Alegre, RS",
    status: "Disponível",
    description: "Elegante, comunicativa e muito apegada aos donos.",
    story: "Nina é uma Siamês clássica: vocal, inteligente e muito carente de atenção. Ela adora 'conversar' com seus humanos e seguir as pessoas pela casa.",
    idealHome: "Um lar onde as pessoas passem bastante tempo em casa e queiram uma gatinha participativa e amorosa.",
    image: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 280
  },
  {
    id: 6,
    name: "Flocos",
    type: "Cachorro",
    breed: "Poodle",
    age: "3 anos",
    size: "Pequeno",
    weight: "6kg",
    vaccinated: true,
    neutered: true,
    location: "Salvador, BA",
    status: "Disponível",
    description: "Inteligente, brincalhão e não solta pelos.",
    story: "Flocos é um Poodle Toy muito esperto que aprende truques em minutos. Ele é dócil com crianças e outros animais, além de ser ideal para quem tem alergias.",
    idealHome: "Se adapta perfeitamente a apartamentos. Precisa de escovação regular e muitos brinquedos interativos.",
    image: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 190
  },
  {
    id: 7,
    name: "Simba",
    type: "Gato",
    breed: "Gato Doméstico",
    age: "3 anos",
    size: "Médio",
    weight: "5kg",
    vaccinated: true,
    neutered: true,
    location: "Fortaleza, CE",
    status: "Disponível",
    description: "Corajoso, independente e um ótimo caçador de brinquedos.",
    story: "Simba foi encontrado em um motor de carro ainda filhote. Hoje é um gato forte, saudável e muito independente, mas que não dispensa um carinho na barriga à noite.",
    idealHome: "Um lar seguro (com telas) onde ele possa explorar e ter seus momentos de tranquilidade.",
    image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 450
  },
  {
    id: 8,
    name: "Apollo",
    type: "Cachorro",
    breed: "Pastor Alemão",
    age: "4 anos",
    size: "Grande",
    weight: "35kg",
    vaccinated: true,
    neutered: true,
    location: "Manaus, AM",
    status: "Disponível",
    description: "Protetor, leal e excelente companheiro para caminhadas.",
    story: "Apollo é um cão de guarda natural, mas com um coração de ouro. Ele é extremamente protetor com sua família e muito inteligente, pronto para aprender qualquer comando.",
    idealHome: "Precisa de um dono experiente que saiba liderar e lhe dar tarefas. Ótimo para casas com quintal vigiado.",
    image: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=800",
    adoptionFamilies: 560
  }
];
