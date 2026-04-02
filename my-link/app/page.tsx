import Image from "next/image";
import { Mail, Globe, Terminal } from "lucide-react";

// Custom SVG Icons for Brands
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Profile() {
  const profile = {
    name: "Lucas",
    role: "Software Developer",
    bio: "Building innovative and scalable applications. Passionate about AI, web development, and crafting elegant code.",
    avatar: "/avatar.png",
  };

  const links = [
    { name: "Portfolio", url: "#", icon: <Globe className="w-5 h-5 group-hover:text-amber-400 transition-colors" /> },
    { name: "GitHub", url: "https://github.com/Cyan0101", icon: <GithubIcon className="w-5 h-5 group-hover:text-emerald-400 transition-colors" /> },
    { name: "LinkedIn", url: "#", icon: <LinkedinIcon className="w-5 h-5 group-hover:text-blue-400 transition-colors" /> },
    { name: "Twitter", url: "#", icon: <TwitterIcon className="w-5 h-5 group-hover:text-sky-400 transition-colors" /> },
    { name: "Email Me", url: "mailto:hello@example.com", icon: <Mail className="w-5 h-5 group-hover:text-rose-400 transition-colors" /> },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 overflow-hidden bg-[#0a0a0c]">
      {/* Background ambient glow effect */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <main className="w-full max-w-[420px] flex flex-col items-center animate-fade-in-up mt-12 mb-12">
        {/* Profile Avatar */}
        <div className="relative group perspective">
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={128}
            height={128}
            priority
            className="relative rounded-full object-cover border-2 border-zinc-900 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-8 text-center flex flex-col items-center">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            {profile.name}
          </h1>
          <div className="mt-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <Terminal className="w-4 h-4" /> {profile.role}
          </div>
          <p className="mt-5 text-zinc-400 text-[15px] leading-relaxed max-w-[320px]">
             {profile.bio}
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full mt-10 flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel group relative flex items-center w-full p-4 rounded-2xl text-zinc-200 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-white/20 overflow-hidden"
            >
              {/* Subtle hover gradient spread */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] skew-x-12 group-hover:animate-shine" />
              
              <div className="z-10 flex bg-white/5 p-2 rounded-xl text-zinc-300 group-hover:bg-white/10 transition-colors shadow-sm">
                {link.icon}
              </div>
              <div className="z-10 flex-1 text-center pr-8">
                <span className="font-semibold tracking-wide text-[16px] group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-xs text-zinc-500 font-medium">
        <p>© {new Date().getFullYear()} {profile.name}. Designed with care.</p>
      </footer>
    </div>
  );
}
