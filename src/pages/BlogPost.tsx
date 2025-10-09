/**
 * Blog Post Component
 * Title: "Distraction Blocker with a Twist"
 * Description: A conceptual blog post about a fun project idea - a website blocker that yells at you
 */

import { Volume2, Code, Zap, Smartphone, Clock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogimg from "../public/images/blog1.png";

const BlogPost = () => {
  // Mock data for dynamic rendering (future use)
  const mockData = {
    title: "Distraction Blocker",
    subtitle: "A Fun Project Idea: Making Your Computer Yell at You",
    distractingSites: ["YouTube", "Twitter", "Instagram", "TikTok"],
  };

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      {/* Floating Navigation */}
      <nav className="fixed top-8 right-8 z-50 glass-card rounded-2xl p-4 hidden lg:block animate-fade-in">
        <div className="flex flex-col gap-2">
          {[
            { id: "intro", label: "Intro" },
            { id: "why", label: "Why" },
            { id: "what", label: "What" },
            { id: "how", label: "How" },
            { id: "tech", label: "Tech" },
            { id: "experience", label: "Experience" },
            { id: "cool", label: "Cool" },
            { id: "skills", label: "Skills" },
            { id: "upgrades", label: "Upgrades" },
          ].map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className="text-sm hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {section.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Cover Image */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-background z-10"></div>
        <img
          src="/images/blog1.png"
          alt="Coding workspace with laptop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 -mt-32 relative z-20 pb-12 text-center animate-fade-in-up">
        <div className="glass-card-hover rounded-3xl p-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent leading-tight">
            {mockData.title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-medium">
            {mockData.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        {/* Introduction */}
        <section id="intro" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Introduction</span>
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Ever caught yourself sneaking onto YouTube “just for a quick
              break,” only to resurface hours later wondering what actually
              happened to your day? Or maybe you intended to scroll Instagram
              for five minutes, and suddenly your productivity vanished into the
              void? We’ve all been there—staring blankly at our screens,
              regretting every cat video and meme we didn’t need. Now, imagine
              if your computer didn’t just sit there silently as you
              procrastinate. What if it could literally yell at you like a
              digital drill sergeant, snapping you back to reality with every
              attempt to waste time? That’s the idea behind the “Distraction
              Blocker That Yells at Me”—a quirky, fun, and slightly aggressive
              way to keep your focus sharp, your deadlines safe, and your inner
              procrastinator trembling in fear. Think of it as a personal
              productivity alarm with attitude, combining practicality with just
              enough absurdity to make staying on task actually entertaining.
            </p>
          </div>
        </section>

        {/* Why This Idea Came to Me */}
        <section id="why" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Why <span className="text-primary">This Idea</span> Came to Me
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              One late night, I was supposed to be finishing a project, but
              somehow I found myself lost in a rabbit hole of random videos for
              the third time that evening. You know the drill: one “quick break”
              turns into twenty, and suddenly hours have vanished without a
              trace. As I sheepishly closed the tab (again), a ridiculous
              thought popped into my head: “What if my computer actually
              screamed at me every time I did this?” The mental image was so
              absurd that I couldn’t stop laughing. I pictured a tiny digital
              drill sergeant, perched inside my laptop, ready to yell at me the
              moment I dared stray from my tasks. Traditional website blockers
              are boring, predictable, and honestly, so easy to ignore. But a
              loud, sudden sound? That’s not just a blocker — that’s motivation
              with personality, a tool that doesn’t just stop you from
              procrastinating but shouts, protests, and refuses to let you sneak
              in those “five minutes” that always turn into hours. In a world
              full of silent productivity apps, I wanted something bold,
              ridiculous, and strangely delightful: a Distraction Blocker That
              Yells at Me, turning procrastination into a hilarious battle of
              wills between me and my own computer.
            </p>
          </div>
        </section>

        {/* What the Project Does */}
        <section id="what" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              What the <span className="text-primary">Project Does</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">-</span>
                <p className="text-lg">
                  <strong>Blocks distracting websites</strong> by modifying your
                  system's hosts file (redirecting them to localhost)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">-</span>
                <p className="text-lg">
                  <strong>Triggers a loud alert sound</strong> (like a scream,
                  alarm, or funny voice clip) when you try to visit a blocked
                  site
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">-</span>
                <p className="text-lg">
                  <strong>Unblocks sites automatically</strong> after your
                  designated "focus time" ends
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">-</span>
                <p className="text-lg">
                  <strong>Unlike typical blockers:</strong> This one doesn't
                  just silently block — it makes a memorable impression so you
                  actually think twice next time!
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* How It Would Work */}
        <section id="how" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              How It Would <span className="text-primary">Work</span> (Concept)
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Detect the Attempt",
                  desc: "The script monitors when you try to access a distracting website (via hosts file or browser extension).",
                },
                {
                  step: "2",
                  title: "Block the Site",
                  desc: "Redirect the URL to a custom local page that shows a humorous warning message.",
                },
                {
                  step: "3",
                  title: "Trigger the Alert",
                  desc: "Play a loud sound (scream, alarm, custom audio clip) to really get your attention.",
                },
                {
                  step: "4",
                  title: "Unblock After Focus Time",
                  desc: "Once your work session ends (e.g., after 2 hours), the blocker automatically removes the restrictions.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Tech Stack</span> I Would Use
              (Conceptual)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Python",
                  desc: "Easy scripting for file manipulation and system automation.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Hosts File",
                  desc: "Simple way to block sites at the system level without browser extensions.",
                },
                {
                  icon: <Volume2 className="w-8 h-8" />,
                  title: "Audio Alerts",
                  desc: "Libraries like pygame or playsound for triggering loud sound effects.",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Browser Extension",
                  desc: "For future versions to detect visits and trigger alerts in real-time.",
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-primary">{tech.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Imagine the Final Experience */}
        <section id="experience" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Imagine the <span className="text-primary">Final Experience</span>{" "}
              ✨
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              You're deep in work mode. Your blocker is active. Out of habit,
              you type "youtube.com" into your browser. Instead of the homepage
              loading, you see a big, bold warning screen with a giant stop
              sign. And then—BOOM—a loud scream plays from your speakers!
              Embarrassed and startled, you close the tab immediately. The next
              time your muscle memory tries to open that site, you think twice.
              Mission accomplished!
            </p>

            {/* Mock Demo Card */}
            <div className="glass-card rounded-2xl p-8 border-2 border-destructive/50 bg-destructive/5">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center animate-float">
                    <Volume2 className="w-10 h-10 text-destructive" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-destructive">
                  ⚠️ BLOCKED! ⚠️
                </h3>
                <p className="text-xl mb-4">
                  YouTube is blocked during focus time!
                </p>
                <p className="text-lg font-semibold">Get back to work! 😡</p>
                <p className="text-sm text-muted-foreground mt-4">
                  (A loud scream plays through your speakers)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Idea Is Cool */}
        <section id="cool" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Why This Idea Is <span className="text-primary">Cool</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="glass-card rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">🎉</span>
                <h3 className="font-semibold mb-2">Fun & Memorable</h3>
                <p className="text-sm text-muted-foreground">
                  It's not just functional — it's entertaining and creates a
                  real deterrent
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">🛠️</span>
                <h3 className="font-semibold mb-2">Easy to Prototype</h3>
                <p className="text-sm text-muted-foreground">
                  Can be built in a weekend with basic Python and system
                  scripting
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">💪</span>
                <h3 className="font-semibold mb-2">Actually Useful</h3>
                <p className="text-sm text-muted-foreground">
                  Helps build better focus habits in a way that's hard to ignore
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills to Learn */}
        <section id="skills" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Skills</span> Someone Could Learn
              from Building It
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                "System automation & scripting logic",
                "Editing system files (hosts file manipulation)",
                "Playing audio alerts & handling user notifications",
                "Python scripting and file I/O operations",
                "Timer-based task scheduling",
                "Building simple UX with meaningful feedback",
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-lg">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Possible Upgrades */}
        <section id="upgrades" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Possible <span className="text-primary">Upgrades</span> & Future
              Versions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "GUI Interface",
                  desc: "Add a simple desktop app to manage blocked sites and sound preferences",
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Chrome Extension",
                  desc: "Real-time detection and blocking without modifying system files",
                },
                {
                  icon: <Volume2 className="w-6 h-6" />,
                  title: "Voice Assistant",
                  desc: 'Have it literally say "Stop procrastinating!" in different voices',
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Timer-Based Modes",
                  desc: "Pomodoro integration with automatic blocking during work intervals",
                },
                {
                  icon: <BarChart className="w-6 h-6" />,
                  title: "Usage Analytics",
                  desc: "Track how often you try to visit blocked sites and visualize focus trends",
                },
              ].map((upgrade, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{upgrade.icon}</div>
                    <h3 className="font-semibold">{upgrade.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {upgrade.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-12 animate-fade-in-up">
          <div className="glass-card-hover rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Conclusion</span>
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-justify">
              Sometimes the best solutions are the ones that make you laugh,
              grin, or even jump in surprise. After all, productivity doesn’t
              always have to be serious or boring — in fact, a little humor can
              make staying focused way more enjoyable. That’s exactly why the
              idea of a distraction blocker that yells at you is so appealing.
              It’s not just a quirky, fun concept; it’s also a clever and
              creative approach to solving a very real problem: procrastination.
              Traditional methods, like silent website blockers or timers, often
              fail because they lack personality and can be easily ignored. But
              a tool that reacts, makes noise, or surprises you forces you to
              pay attention while adding a dash of entertainment to your day.
              The beauty of this project is that it’s completely customizable,
              and it encourages you to think outside the box: What sound would
              make you stop scrolling? How could it be even more motivating or
              hilarious? Imagining your own version allows you to experiment,
              innovate, and maybe even invent a productivity tool that’s
              uniquely yours. So why settle for ordinary when you can make focus
              fun, memorable, and a little outrageous? Take the idea, run with
              it, and see how far your imagination can push it — after all, the
              best projects are often the ones that start with a simple, funny
              “what if?”
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="text-center animate-fade-in-up">
          <p className="mt-8 text-muted-foreground">
            Written with curiosity and a touch of humor by your's{" "}
            <span className="text-primary">azi</span>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default BlogPost;
