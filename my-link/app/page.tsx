import Image from "next/image";
import { Mail, Globe, Terminal, ArrowRight } from "lucide-react";

// Local SVG Icons for Neobrutalism (Black fills)
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
    name: "LUCAS",
    role: "SOFTWARE ENGINEER",
    bio: "Building bold digital experiences. Blending stark engineering with vibrant logic.",
    avatar: "/avatar.png",
  };

  const links = [
    { name: "Portfolio", url: "#", icon: <Globe className="w-6 h-6 shrink-0" />, color: "bg-blue-300" },
    { name: "GitHub", url: "https://github.com/Cyan0101", icon: <GithubIcon className="w-6 h-6 shrink-0" />, color: "bg-emerald-300" },
    { name: "LinkedIn", url: "#", icon: <LinkedinIcon className="w-6 h-6 shrink-0" />, color: "bg-sky-300" },
    { name: "Twitter", url: "#", icon: <TwitterIcon className="w-6 h-6 shrink-0" />, color: "bg-amber-300" },
    { name: "Email Me", url: "mailto:hello@example.com", icon: <Mail className="w-6 h-6 shrink-0" />, color: "bg-rose-300" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] p-6 lg:p-12 font-sans selection:bg-pink-300">
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16 brutal-box bg-white px-6 py-4 rounded-xl">
        <div className="font-extrabold text-2xl tracking-tighter">LV.</div>
        <button className="brutal-box bg-yellow-300 text-black font-bold px-6 py-2 rounded-md">
          HIRE ME
        </button>
      </nav>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Hero Copy */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex brutal-box bg-indigo-300 px-4 py-2 font-bold mb-6 rounded-md w-max items-center gap-2">
            <Terminal className="w-5 h-5 text-black" />
            STATUS: ACTIVE
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
            HELLO, I'M <br/>
            <span className="bg-yellow-300 px-2 leading-none inline-block mt-2 brutal-box">{profile.name}</span>.<br />
            {profile.role}.
          </h1>
          
          <p className="text-xl font-bold text-gray-800 max-w-lg mb-10 leading-snug border-l-4 border-black pl-4">
            {profile.bio}
          </p>
        </div>

        {/* Right Column: Profile Image / Main Feature */}
        <div className="col-span-1 lg:col-span-5 flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-sm aspect-square">
            {/* The brutal box image container */}
            <div className="absolute inset-0 brutal-box bg-pink-300 rounded-3xl z-0 translate-x-4 translate-y-4"></div>
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-3xl border-4 border-black z-10 relative bg-white"
            />
          </div>
        </div>
      </main>

      {/* Grid Links Section */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-black uppercase mb-8 inline-block brutal-box bg-white px-4 py-2">Find Me Here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`brutal-box flex items-center p-6 ${link.color} rounded-2xl group text-black cursor-pointer`}
            >
              <div className="bg-white border-4 border-black p-3 rounded-full mr-4 group-hover:-rotate-12 transition-transform">
                {link.icon}
              </div>
              <div className="flex-1">
                <span className="font-extrabold text-xl lg:text-2xl uppercase tracking-tighter block">{link.name}</span>
              </div>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-24 mb-6">
        <div className="brutal-box bg-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase">
          <p>© {new Date().getFullYear()} {profile.name}. Neobrutalism UI.</p>
          <p className="mt-4 md:mt-0">Built heavily, designed robustly.</p>
        </div>
      </footer>
    </div>
  );
}
