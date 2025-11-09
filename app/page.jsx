"use client"

import { useState } from "react"
import {
  Menu,
  X,
  BookOpen,
  Calendar,
  Globe,
  BookMarked,
  Users,
  Heart,
  Eye,
  Sparkles,
  Mail,
  Newspaper,
  MessageCircle,
  Feather,
  Award,
  TrendingUp,
} from "lucide-react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#grupo", label: "Apresentação" },
    { href: "#autor", label: "Sobre o Autor" },
    { href: "#livro", label: "O Livro" },
    { href: "#personagens", label: "Personagens" },
    { href: "#generos", label: "Gêneros Textuais" },
    { href: "#conclusao", label: "Conclusão" },
  ]

  const characters = [
    {
      name: "Pedro",
      role: "Protagonista",
      icon: Users,
      description: "Gêmeo conservador, monarquista, representa a tradição. Apaixonado por Flora.",
      traits: ["Conservador", "Tradicional", "Impetuoso"],
    },
    {
      name: "Paulo",
      role: "Protagonista",
      icon: Users,
      description: "Gêmeo liberal, republicano, representa a mudança. Também apaixonado por Flora.",
      traits: ["Liberal", "Progressista", "Idealista"],
    },
    {
      name: "Flora",
      role: "Protagonista Feminina",
      icon: Heart,
      description: "Jovem indecisa entre os dois irmãos, simboliza o Brasil dividido entre duas visões.",
      traits: ["Indecisa", "Sensível", "Enigmática"],
    },
    {
      name: "Conselheiro Aires",
      role: "Narrador-Observador",
      icon: Eye,
      description: "Diplomata aposentado que narra e comenta os eventos com ironia e sabedoria.",
      traits: ["Cético", "Observador", "Irônico"],
    },
    {
      name: "Natividade",
      role: "Mãe dos Gêmeos",
      icon: Sparkles,
      description: "Mãe ambiciosa que consulta uma cabocla sobre o destino de seus filhos.",
      traits: ["Ambiciosa", "Maternal", "Supersticiosa"],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-secondary font-bold text-xl tracking-wider">
              ESAÚ E JACÓ
            </a>

            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground hover:text-secondary transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button className="md:hidden text-primary-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-primary-foreground hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="grupo" className="hero-gradient min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] shadow-2xl rounded-lg overflow-hidden bg-muted">
                  <img
                    src="/classic-book-cover-esau-e-jaco-machado-de-assis-vi.jpg"
                    alt="Capa do livro Esaú e Jacó"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-primary-foreground space-y-6">
                <div className="space-y-2">
                  <h1 className="font-serif text-5xl md:text-7xl font-bold text-secondary text-balance">
                    MACHADO DE ASSIS
                  </h1>
                  <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">ESAÚ E JACÓ</h2>
                </div>

                <div className="h-px section-divider my-6" />

                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-primary-foreground/90">
                    Bem-vindos à nossa exploração literária de uma das obras-primas do realismo brasileiro.
                  </p>

                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 space-y-3">
                    <h3 className="font-semibold text-secondary flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Apresentação do Grupo
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Integrantes:</strong> Ana Silva, Carlos Souza, Mariana Costa, Pedro Santos
                      </p>
                      <p>
                        <strong>Professora:</strong> Dra. Julia Mendes
                      </p>
                      <p>
                        <strong>Disciplina:</strong> Literatura Brasileira II
                      </p>
                    </div>
                  </div>

                  <p className="text-primary-foreground/90 text-sm italic">
                    Este site apresenta uma análise aprofundada do romance "Esaú e Jacó", explorando seus personagens,
                    contexto histórico e relevância literária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section id="autor" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Sobre o Autor</h2>
              <div className="h-px section-divider max-w-xs mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 space-y-4 bg-card rounded-lg border border-secondary/20 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Feather className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">Estilo Literário</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Realismo psicológico, ironia refinada e crítica social perspicaz caracterizam a obra machadiana.
                </p>
              </div>

              <div className="p-6 space-y-4 bg-card rounded-lg border border-secondary/20 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">Principais Obras</h3>
                <ul className="text-muted-foreground leading-relaxed space-y-1 text-sm">
                  <li>• Dom Casmurro (1899)</li>
                  <li>• Memórias Póstumas de Brás Cubas (1881)</li>
                  <li>• Quincas Borba (1891)</li>
                  <li>• Esaú e Jacó (1904)</li>
                </ul>
              </div>

              <div className="p-6 space-y-4 bg-card rounded-lg border border-secondary/20 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">Importância</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fundador da Academia Brasileira de Letras e maior nome da literatura brasileira do século XIX.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">Joaquim Maria Machado de Assis</strong> (1839-1908) revolucionou a
                literatura brasileira com seu estilo único que combina humor, ironia e profunda análise psicológica. Sua
                obra representa o ápice do Realismo brasileiro, oferecendo críticas sociais sutis e explorações
                complexas da natureza humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Book */}
      <section id="livro" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Sobre o Livro</h2>
              <div className="h-px section-divider max-w-xs mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 space-y-3 bg-card rounded-lg border border-secondary/20">
                <Calendar className="h-8 w-8 text-secondary" />
                <h3 className="font-serif text-lg font-bold text-primary">Publicação</h3>
                <p className="text-muted-foreground text-sm">
                  Publicado em 1904, próximo ao fim da vida de Machado de Assis
                </p>
              </div>

              <div className="p-6 space-y-3 bg-card rounded-lg border border-secondary/20">
                <Globe className="h-8 w-8 text-secondary" />
                <h3 className="font-serif text-lg font-bold text-primary">Contexto</h3>
                <p className="text-muted-foreground text-sm">
                  Retrata a transição do Império para a República no Brasil
                </p>
              </div>

              <div className="p-6 space-y-3 bg-card rounded-lg border border-secondary/20">
                <BookMarked className="h-8 w-8 text-secondary" />
                <h3 className="font-serif text-lg font-bold text-primary">Tema Central</h3>
                <p className="text-muted-foreground text-sm">A dualidade, rivalidade e destino de irmãos gêmeos</p>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-lg text-primary-foreground border border-secondary/20">
              <h3 className="font-serif text-2xl font-bold text-secondary mb-4">Contexto Histórico</h3>
              <div className="space-y-4 leading-relaxed">
                <p>
                  <strong className="text-secondary">Esaú e Jacó</strong> se passa durante um dos períodos mais
                  turbulentos da história brasileira: a transição do Império para a República em 1889. Machado de Assis
                  utiliza a rivalidade entre os irmãos gêmeos Pedro e Paulo como alegoria para as tensões políticas e
                  sociais da época.
                </p>
                <p>
                  A obra reflete sobre as mudanças superficiais e as permanências profundas na sociedade brasileira,
                  questionando se a proclamação da República realmente transformou as estruturas sociais ou apenas
                  alterou as aparências do poder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section id="personagens" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Personagens</h2>
              <div className="h-px section-divider max-w-xs mx-auto" />
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Os personagens de <em>Esaú e Jacó</em> representam diferentes visões de mundo e simbolizam os conflitos
                políticos e sociais do Brasil do final do século XIX.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character) => {
                const Icon = character.icon
                return (
                  <div
                    key={character.name}
                    className="p-6 space-y-4 bg-card rounded-lg border border-secondary/20 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-primary">{character.name}</h3>
                        <p className="text-sm text-secondary font-medium">{character.role}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{character.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {character.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full font-medium"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="p-8 bg-muted rounded-lg border border-secondary/20">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Resumo da Obra</h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">Esaú e Jacó</strong> conta a história dos irmãos gêmeos Pedro e
                  Paulo, que desde o ventre materno já demonstravam rivalidade. A mãe, Natividade, consulta uma cabocla
                  sobre o futuro dos filhos, que profetiza grandes destinos para ambos.
                </p>
                <p>
                  Os irmãos crescem em constante competição, divergindo em tudo, especialmente em política: Pedro
                  torna-se monarquista conservador, enquanto Paulo se torna republicano liberal. Ambos se apaixonam pela
                  mesma mulher, Flora, que não consegue escolher entre eles.
                </p>
                <p>
                  Narrado pelo diplomata aposentado Conselheiro Aires através de seu memorial, o romance retrata não
                  apenas a rivalidade fraterna, mas também o Brasil em transformação, questionando se as mudanças
                  políticas realmente alteram a essência das relações humanas e sociais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Genres */}
      <section id="generos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Gêneros Textuais</h2>
              <div className="h-px section-divider max-w-xs mx-auto" />
              <p className="text-muted-foreground leading-relaxed">
                Explorando a obra através de diferentes perspectivas narrativas
              </p>
            </div>

            {/* Carta */}
            <div className="p-8 space-y-4 bg-card rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary">Carta</h3>
                  <p className="text-sm text-muted-foreground">Pedro escreve para Flora após sua indecisão</p>
                </div>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-sm text-muted-foreground mb-2 italic">Rio de Janeiro, 1888</p>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p className="italic">Minha cara Flora,</p>
                  <p>
                    Escrevo-lhe com o coração pesado, pois não posso mais suportar esta incerteza que paira sobre nós.
                    Sei que meu irmão Paulo também nutre sentimentos por você, mas acredito que meu amor é mais
                    verdadeiro e constante.
                  </p>
                  <p>
                    Você me conhece desde sempre - sabe de meus princípios, de minhas convicções monárquicas, de meu
                    apreço pela tradição. Não sou como Paulo, que muda de opinião conforme o vento da moda republicana.
                    Meu amor por você é tão firme quanto minhas crenças políticas.
                  </p>
                  <p>Imploro-lhe uma resposta, Flora. Esta hesitação nos consome a todos.</p>
                  <p className="italic">Seu devotado, Pedro</p>
                </div>
              </div>
            </div>

            {/* Artigo de Opinião */}
            <div className="p-8 space-y-4 bg-card rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3">
                <Newspaper className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary">Artigo de Opinião</h3>
                  <p className="text-sm text-muted-foreground">Paulo expõe sua visão sobre a República</p>
                </div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="font-bold text-lg text-primary mb-3">A República e o Futuro do Brasil</h4>
                <p className="text-xs text-muted-foreground mb-4 italic">
                  Por Paulo, publicado no Jornal do Commercio, 16 de novembro de 1889
                </p>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>
                    A proclamação da República representa não apenas uma mudança de regime, mas uma transformação
                    fundamental no espírito nacional. Libertamo-nos finalmente das amarras do Império, sistema
                    ultrapassado que perpetuava privilégios aristocráticos e impedia o progresso democrático.
                  </p>
                  <p>
                    Há quem tema estas mudanças, apegando-se nostalgicamente ao passado. Porém, a história não espera
                    pelos hesitantes. A República traz consigo a promessa de igualdade, de representatividade popular,
                    de um Brasil moderno e soberano.
                  </p>
                  <p>
                    Críticos dirão que mudamos apenas o rótulo, que as mesmas elites permanecem no poder. Respondo: toda
                    grande transformação começa com um primeiro passo. A República é este passo, e cabe a nós, jovens
                    idealistas, garantir que suas promessas se concretizem.
                  </p>
                </div>
              </div>
            </div>

            {/* Entrevista */}
            <div className="p-8 space-y-4 bg-card rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary">Entrevista</h3>
                  <p className="text-sm text-muted-foreground">Diálogo entre Conselheiro Aires e Natividade</p>
                </div>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-secondary space-y-4">
                <p className="text-sm text-muted-foreground italic">
                  O diplomata Aires conversa com Natividade sobre o destino de seus filhos
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Conselheiro Aires:</p>
                    <p className="text-foreground leading-relaxed pl-4 border-l-2 border-secondary/30">
                      Minha cara Natividade, observo seus filhos há anos. Diga-me, a profecia da cabocla ainda a
                      inquieta?
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Natividade:</p>
                    <p className="text-foreground leading-relaxed pl-4 border-l-2 border-accent/30">
                      Oh, Aires, como não me inquietar? Ela disse que seriam grandes, mas sua rivalidade é constante.
                      Nem mesmo Flora consegue uni-los.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Conselheiro Aires:</p>
                    <p className="text-foreground leading-relaxed pl-4 border-l-2 border-secondary/30">
                      Talvez a grandeza não esteja na união, mas precisamente na oposição. Pedro e Paulo representam
                      forças complementares - como o Império e a República, a tradição e o progresso.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Natividade:</p>
                    <p className="text-foreground leading-relaxed pl-4 border-l-2 border-accent/30">
                      Complementares? Eles mal conseguem estar na mesma sala! E pobre Flora, dividida entre dois amores
                      irreconciliáveis.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Conselheiro Aires:</p>
                    <p className="text-foreground leading-relaxed pl-4 border-l-2 border-secondary/30">
                      Ah, Flora... ela é como o próprio Brasil, eternamente indecisa entre o passado e o futuro. Sua
                      hesitação não é fraqueza, é sabedoria. Alguns conflitos, minha cara, não têm resolução - apenas
                      convivência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusao" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Conclusão</h2>
              <div className="h-px section-divider max-w-xs mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 space-y-3 text-center bg-card rounded-lg border border-secondary/20">
                <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <BookOpen className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">Importância no Realismo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Obra-prima que consolida o Realismo brasileiro através da análise psicológica profunda
                </p>
              </div>

              <div className="p-6 space-y-3 text-center bg-card rounded-lg border border-secondary/20">
                <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <TrendingUp className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">Relevância Atual</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reflexões sobre dualidade política e social permanecem atuais no Brasil contemporâneo
                </p>
              </div>

              <div className="p-6 space-y-3 text-center bg-card rounded-lg border border-secondary/20">
                <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <Heart className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">Valor Literário</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Combinação magistral de ironia, crítica social e profundidade psicológica
                </p>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-lg text-primary-foreground space-y-6 border border-secondary/20">
              <h3 className="font-serif text-2xl font-bold text-secondary">Reflexão Final</h3>
              <div className="space-y-4 leading-relaxed">
                <p>
                  <strong className="text-secondary">Esaú e Jacó</strong> transcende sua época ao apresentar questões
                  fundamentais sobre a natureza humana e social. Machado de Assis utiliza a rivalidade dos gêmeos Pedro
                  e Paulo como alegoria para as divisões políticas e ideológicas que marcaram o Brasil do século XIX - e
                  que, surpreendentemente, continuam relevantes hoje.
                </p>
                <p>
                  A indecisão de Flora reflete a própria hesitação do Brasil entre tradição e modernidade,
                  conservadorismo e progresso. O olhar cético e irônico do Conselheiro Aires nos lembra que mudanças
                  superficiais frequentemente mascaram permanências profundas nas estruturas de poder.
                </p>
                <p>
                  A importância de obras clássicas como <em>Esaú e Jacó</em> reside justamente nesta capacidade de
                  dialogar com diferentes épocas, oferecendo lentes críticas para compreendermos não apenas o passado,
                  mas também nosso presente. A literatura de Machado de Assis permanece viva porque suas questões são
                  atemporais: como lidar com nossas dualidades internas? É possível superar divisões artificiais?
                  Mudamos realmente ou apenas mudamos de máscaras?
                </p>
              </div>
            </div>

            <div className="text-center space-y-4 pt-8">
              <div className="h-px section-divider max-w-md mx-auto" />
              <p className="text-muted-foreground italic text-lg">
                "Há em cada adolescente um mundo a se descobrir, e em cada livro, um espelho da alma humana."
              </p>
              <p className="text-sm text-secondary font-semibold">— Machado de Assis</p>
              <div className="h-px section-divider max-w-md mx-auto mt-8" />
              <p className="text-muted-foreground text-sm pt-4">
                Agradecemos pela atenção e esperamos que esta exploração de <em>Esaú e Jacó</em> tenha despertado seu
                interesse pela obra magistral de Machado de Assis.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-16 py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground">
              Trabalho acadêmico desenvolvido para a disciplina de Literatura Brasileira II
            </p>
          </div>
        </footer>
      </section>
    </main>
  )
}
