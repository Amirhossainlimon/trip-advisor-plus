import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Cpu, Sparkles, Code2, GraduationCap, Award, Rocket, Brain, Terminal, Smartphone, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const Portfolio = () => {
  const techStack = [
    { name: "C/C++", icon: Terminal, color: "text-primary" },
    { name: "Dart", icon: Code2, color: "text-accent" },
    { name: "Flutter", icon: Smartphone, color: "text-secondary" },
    { name: "Firebase", icon: Database, color: "text-primary" },
    { name: "AI Prompting", icon: Brain, color: "text-accent" },
    { name: "REST APIs", icon: Zap, color: "text-secondary" },
  ];

  const projects = [
    {
      title: "Scientific Calculator",
      tech: "C++",
      description: "A full-featured scientific calculator built with C++ demonstrating advanced OOP patterns, operator overloading, and mathematical function implementations.",
      tags: ["C++", "OOP", "Algorithms"],
      link: "https://github.com/Amirhossainlimon",
    },
    {
      title: "Banking System",
      tech: "Dart",
      description: "Complete banking management system with account operations, transaction history, and secure authentication logic built in Dart.",
      tags: ["Dart", "Finance", "Security"],
      link: "https://github.com/Amirhossainlimon",
    },
    {
      title: "Payment Gateway",
      tech: "Dart",
      description: "Payment processing system simulating real-world transaction flows, payment validation, and integration patterns.",
      tags: ["Dart", "Payments", "API"],
      link: "https://github.com/Amirhossainlimon",
    },
    {
      title: "Ostad UI Clone",
      tech: "Flutter",
      description: "Pixel-perfect recreation of the Ostad learning platform showcasing advanced Flutter UI techniques and responsive design.",
      tags: ["Flutter", "UI/UX", "Clone"],
      link: "https://github.com/Amirhossainlimon",
    },
    {
      title: "Facebook UI Clone",
      tech: "Flutter",
      description: "Comprehensive Facebook mobile interface clone with feed, stories, navigation, and interaction patterns built in Flutter.",
      tags: ["Flutter", "Social", "UI/UX"],
      link: "https://github.com/Amirhossainlimon",
    },
  ];

  const certifications = [
    {
      title: "AI+ Prompt Engineer (Level 1)",
      issuer: "AICERTS",
      icon: Brain,
      description: "Certified in advanced prompt engineering techniques, custom AI agent development, and AI-driven product workflows.",
    },
    {
      title: "Cyber Security",
      issuer: "NetCom Learning",
      icon: Shield,
      description: "Certified in cybersecurity fundamentals, threat analysis, and secure application development practices.",
    },
    {
      title: "App Development with Flutter",
      issuer: "Ostad",
      icon: Smartphone,
      description: "Comprehensive certification covering Flutter framework, Dart language, state management, and mobile app deployment.",
    },
  ];

  const aiExperiments = [
    {
      title: "AI-Powered Product Visualization",
      description: "Using prompt engineering to create futuristic 3D product renders and mockups from text descriptions, bridging the gap between concept and visual prototype.",
    },
    {
      title: "Custom AI Agents",
      description: "Building task-specific AI agents that automate development workflows—from generating boilerplate code to analyzing UI patterns.",
    },
    {
      title: "AI-Enhanced App Architecture",
      description: "Leveraging AI models to design optimal app architectures, database schemas, and user flow patterns before writing a single line of code.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(165_100%_50%_/_0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(165_100%_50%_/_0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm text-primary font-semibold tracking-wider">AHL</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#stack" className="hover:text-primary transition-colors">Stack</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#ai" className="hover:text-primary transition-colors">AI Lab</a>
            <a href="#certs" className="hover:text-primary transition-colors">Certs</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Amirhossainlimon" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              OPEN TO OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Amir Hossain</span>
            <br />
            <span className="text-primary text-glow-primary">Limon</span>
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Crafting Intelligent Mobile Experiences with
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-2xl md:text-3xl font-semibold mb-10">
            <span className="text-accent">Flutter</span> <span className="text-muted-foreground">&</span> <span className="text-secondary text-glow-secondary">AI</span>
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Amirhossainlimon" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-base box-glow-primary">
                <Github className="mr-2 h-5 w-5" /> View My GitHub
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 px-8 py-6 text-base">
                <Sparkles className="mr-2 h-5 w-5" /> Let's Build Something Intelligent
              </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={5} className="mt-20">
            <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-xs font-mono mb-2">SCROLL</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
              <h2 className="text-sm font-mono text-primary tracking-widest">ABOUT ME</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div className="space-y-4">
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/40 font-mono">AHL</span>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs font-mono text-muted-foreground">CSE Undergraduate</p>
                  <p className="text-xs font-mono text-muted-foreground">Bangladesh University</p>
                </div>
              </div>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-lg text-foreground font-medium">
                  From solving algorithmic puzzles in C++ to building AI-integrated mobile applications—my journey is about evolving with technology.
                </p>
                <p>
                  I'm a CSE undergraduate at Bangladesh University with a relentless passion for building apps that don't just function—they think. My journey started with problem-solving in C/C++, where I built foundational logic and algorithmic thinking. That foundation now powers everything I build.
                </p>
                <p>
                  Today, I specialize in <span className="text-accent font-medium">Flutter & Dart</span> for cross-platform mobile development, combined with <span className="text-secondary font-medium">AI prompt engineering</span> to create intelligent, user-centric experiences. I believe the future of software development lies at the intersection of beautiful design and artificial intelligence.
                </p>
                <p>
                  As a Home Tutor teaching ICT and Higher Mathematics, I've honed my ability to break down complex technical concepts into intuitive, understandable pieces—a skill that directly translates to how I design user experiences.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/30" />
              <h2 className="text-sm font-mono text-accent tracking-widest">CORE STACK</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/30" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    variants={fadeUp}
                    custom={i}
                    className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:box-glow-primary"
                  >
                    <Icon className={`h-8 w-8 ${tech.color} mb-3 group-hover:scale-110 transition-transform`} />
                    <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-secondary/30" />
              <h2 className="text-sm font-mono text-secondary tracking-widest">PROJECTS</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-secondary/30" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  custom={i}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-secondary/40 transition-all duration-300 hover:box-glow-secondary block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono text-secondary px-2 py-0.5 rounded-md bg-secondary/10 border border-secondary/20">
                      {project.tech}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Experiments */}
      <section id="ai" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
              <h2 className="text-sm font-mono text-primary tracking-widest">AI EXPERIMENTS</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              How I leverage AI to enhance development workflows and push the boundaries of what's possible.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {aiExperiments.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  variants={fadeUp}
                  custom={i + 2}
                  className="bg-gradient-to-b from-card to-background border border-border rounded-xl p-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <Cpu className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/30" />
              <h2 className="text-sm font-mono text-accent tracking-widest">CERTIFICATIONS</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/30" />
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    variants={fadeUp}
                    custom={i}
                    className="bg-card border border-border rounded-xl p-6 flex items-start gap-5 hover:border-accent/30 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{cert.title}</h3>
                      <p className="text-xs font-mono text-accent mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} custom={0}>
              <Rocket className="h-10 w-10 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Something <span className="text-primary text-glow-primary">Intelligent</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-10 max-w-lg mx-auto">
              I'm actively looking for opportunities in Flutter development and AI-integrated app development. Let's connect and create something extraordinary.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:amirhossainlimon@gmail.com">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-base box-glow-primary">
                  <Mail className="mr-2 h-5 w-5" /> Get In Touch
                </Button>
              </a>
              <a href="https://github.com/Amirhossainlimon" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-border text-muted-foreground hover:text-primary hover:border-primary/40 px-8 py-6 text-base">
                  <Github className="mr-2 h-5 w-5" /> GitHub Profile
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>&copy; 2025 Amir Hossain Limon. Designed with purpose.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Amirhossainlimon" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:amirhossainlimon@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
