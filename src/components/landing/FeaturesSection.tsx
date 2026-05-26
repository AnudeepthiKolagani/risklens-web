import { motion } from "framer-motion";
import { featureHighlights } from "./data";

const delayStep = 0.08;

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none  absolute left-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.14),_transparent_55%)] blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12  ">
          <p className="text-lg font-bold  text-center uppercase tracking-[0.1em] text-cyan-300/80">
            Key capabilities
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A premium glass experience for modern risk teams.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Explore the analytics, scenario intelligence, and AI assistance that
            power every institutional risk review.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureHighlights.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * delayStep }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative transform-gpu overflow-hidden rounded-[2rem]"
            >
              {/* Glass Border Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-400/40 via-white/20 to-violet-400/40 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

              {/* Inner Card */}
              <div className="relative glass-panel rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.8)] backdrop-blur-3xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]">
                {/* Optional inner glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/5 to-violet-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/70 text-cyan-300 ring-1 ring-white/10 transition-colors group-hover:bg-cyan-400/10 group-hover:text-cyan-200">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-300">
                  {/* <span>Learn more</span> */}
                  {/* <span aria-hidden="true">→</span> */}
                </div>
                <div className="relative z-10">{/* your content */}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
