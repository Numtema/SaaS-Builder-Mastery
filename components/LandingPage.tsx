import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Terminal, 
  Layers, 
  ShieldAlert, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Code2, 
  Database, 
  ArrowRight,
  Zap,
  LayoutTemplate,
  Lock,
  MousePointer2
} from 'lucide-react';

// --- Shared Components ---

const Badge = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-6 backdrop-blur-sm">
    {children}
  </span>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-slate-400 text-lg md:text-xl leading-relaxed">{subtitle}</p>}
  </div>
);

// --- Sections ---

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl shadow-purple-900/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="font-semibold text-white tracking-tight hidden sm:block">SaaS Mastery</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#probleme" className="hover:text-white transition-colors">Problème</a>
          <a href="#construction" className="hover:text-white transition-colors">Programme</a>
          <a href="#benefices" className="hover:text-white transition-colors">Bénéfices</a>
        </nav>

        <button className="bg-white text-slate-950 hover:bg-slate-200 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
          Accéder
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full bg-background overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge>Formation Architecture SaaS</Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Construisez sans <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Chaos Technique
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Une formation pratique pour créer une base SaaS propre, stable et évolutive — sans vous perdre dans la stack, Firebase ou les comportements destructeurs des agents IA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Accéder à la formation
              <Zap className="w-5 h-5 fill-current" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
              Voir le programme
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating UI Elements */}
      <motion.div 
        className="absolute bottom-20 left-10 hidden lg:block p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-xs text-slate-400">
          <span className="text-purple-400">const</span> app = <span className="text-blue-400">buildSaaS</span>();<br/>
          app.<span className="text-yellow-400">deploy</span>(<span className="text-green-400">"stable"</span>);
        </div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="w-full bg-slate-950 border-y border-white/5 py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
      
      <div className="flex animate-scroll w-[200%]">
        <div className="flex gap-16 px-8 min-w-full justify-around items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <TechIcon name="React 18" icon={<Code2 />} />
          <TechIcon name="TypeScript" icon={<Terminal />} />
          <TechIcon name="Firebase" icon={<Database />} />
          <TechIcon name="Tailwind" icon={<LayoutTemplate />} />
          <TechIcon name="Vite" icon={<Zap />} />
          <TechIcon name="Auth" icon={<Lock />} />
          {/* Duplicate for seamless loop */}
          <TechIcon name="React 18" icon={<Code2 />} />
          <TechIcon name="TypeScript" icon={<Terminal />} />
          <TechIcon name="Firebase" icon={<Database />} />
          <TechIcon name="Tailwind" icon={<LayoutTemplate />} />
          <TechIcon name="Vite" icon={<Zap />} />
          <TechIcon name="Auth" icon={<Lock />} />
        </div>
      </div>
    </div>
  );
};

const TechIcon = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-xl font-bold text-slate-300">
    {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
    <span>{name}</span>
  </div>
);

const ProblemSection = () => {
  const problems = [
    { title: "Stack Confuse", desc: "Des choix technologiques qui paralysent au lieu d'accélérer." },
    { title: "Erreurs Obscures", desc: "Firebase et les intégrations qui cassent sans raison apparente." },
    { title: "Régressions", desc: "Une modification ici casse trois fonctionnalités là-bas." },
    { title: "Chaos IA", desc: "Les agents IA modifient ou suppriment des parties critiques." },
  ];

  return (
    <section id="probleme" className="py-24 md:py-32 container mx-auto px-4 relative">
      <SectionTitle 
        title="Créer un SaaS semble simple... en théorie." 
        subtitle="En pratique, vous passez votre temps à corriger, réparer et douter au lieu d'avancer."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all"></div>
            <AlertTriangle className="w-8 h-8 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const RealityCheck = () => {
  const situations = [
    "“Tout fonctionnait… jusqu’à cette modification.”",
    "“Pourquoi cette dépendance casse tout le projet ?”",
    "“L’agent IA a changé mon code sans prévenir.”",
    "“Je ne sais plus quelle partie du système est instable.”",
    "“Je veux construire, pas survivre en debug permanent.”"
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-y border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="md:w-1/2">
          <div className="relative aspect-square md:aspect-auto md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
             <img 
               src="https://picsum.photos/seed/code-chaos/800/800" 
               alt="Code chaos" 
               className="object-cover w-full h-full opacity-60 hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8">
               <div className="bg-red-500/20 backdrop-blur-md border border-red-500/30 p-4 rounded-xl flex items-start gap-3">
                 <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                 <div>
                    <h4 className="font-bold text-red-200">System Critical Error</h4>
                    <p className="text-xs text-red-300 mt-1 font-mono">Uncaught TypeError: Cannot read properties of undefined (reading 'user')</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <Badge>Réalité Vécue</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ce n'est pas un manque d'effort.<br/>
            C'est un problème de <span className="text-purple-400">structure</span>.
          </h2>
          
          <div className="space-y-4">
            {situations.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                </div>
                <p className="text-slate-300 italic">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const features = [
    { text: "Base SaaS propre et logique", icon: Layers },
    { text: "Architecture anti-régressions", icon: ShieldAlert },
    { text: "Usage IA sécurisé et stable", icon: Cpu },
    { text: "Compréhension totale du code", icon: Terminal },
  ];

  return (
    <section id="benefices" className="py-32 container mx-auto px-4">
      <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Retrouvez clarté et <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">vitesse d'exécution</span>.
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Cette formation ne promet pas de magie. Elle vous apporte une structure solide, des choix rationnels et un environnement de travail où vous êtes enfin aux commandes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-5/12">
             <div className="bg-slate-950 rounded-xl border border-white/10 p-6 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                   </div>
                   <div className="text-xs text-slate-500 font-mono">dashboard.tsx</div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-slate-800 rounded w-1/3 animate-pulse"></div>
                  <div className="h-2 bg-slate-800 rounded w-full animate-pulse delay-75"></div>
                  <div className="h-2 bg-slate-800 rounded w-2/3 animate-pulse delay-100"></div>
                  <div className="h-24 bg-slate-900 border border-slate-800 rounded-lg mt-4 flex items-center justify-center">
                    <span className="text-emerald-500 text-sm font-mono flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4" /> Build Successful
                    </span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const modules = [
    "Structure SaaS claire",
    "Authentification propre",
    "Landing Page Template",
    "Login & Sign-up",
    "Gestion mot de passe",
    "Dashboard Utilisateur"
  ];

  return (
    <section id="construction" className="py-24 container mx-auto px-4">
      <SectionTitle 
        title="Ce que vous allez construire" 
        subtitle="Des composants pensés pour être réutilisables, adaptables et robustes."
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center p-6 text-center hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-default group"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
              <LayoutTemplate className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-semibold text-slate-200">{mod}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  return (
    <div className="relative h-[80vh]" ref={footerRef}>
       <div className="sticky bottom-0 w-full h-[80vh] flex flex-col justify-center bg-black overflow-hidden">
          {/* Footer Background Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-black"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              style={{ opacity: scrollYProgress, scale: scrollYProgress }}
              className="mb-12"
            >
              <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8">
                97 €
              </h2>
              <p className="text-xl text-slate-400 mb-12">Paiement unique. Accès immédiat.</p>
              
              <button className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
                Commencer maintenant
              </button>
            </motion.div>

            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
               <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white">S</div>
                  <span>SaaS Builder Mastery</span>
               </div>
               <div className="flex gap-6">
                 <a href="#" className="hover:text-white transition-colors">Conditions</a>
                 <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                 <a href="#" className="hover:text-white transition-colors">Support</a>
               </div>
            </div>
          </div>
       </div>
    </div>
  );
};

// --- Main Layout Component ---

export const LandingPage = () => {
  return (
    <div className="bg-background min-h-screen relative">
      <Header />
      
      {/* Main Content pushed above sticky footer */}
      <div className="relative z-10 bg-background mb-[80vh] shadow-[0_50px_100px_rgb(0,0,0)] rounded-b-[3rem] overflow-hidden">
        <Hero />
        <Marquee />
        <ProblemSection />
        <RealityCheck />
        <Solution />
        <Curriculum />
        <div className="h-32 bg-background"></div> {/* Spacing */}
      </div>

      <Footer />
    </div>
  );
};