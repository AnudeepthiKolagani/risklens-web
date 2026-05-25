import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import {
  Mail,
  Lock,
  ShieldCheck,
  Globe,
  Link,
  MailCheckIcon,
} from "lucide-react";

interface AuthModalProps {
  mode: "sign-in" | "sign-up";
  open: boolean;
  onClose: () => void;
  onSwitch: () => void;
}

function AuthModal({ mode, open, onClose, onSwitch }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const title =
    mode === "sign-in" ? "Sign in to RiskLens" : "Create your RiskLens account";
  const prompt =
    mode === "sign-in" ? "Don’t have an account?" : "Already have an account?";
  const actionText = mode === "sign-in" ? "Sign In" : "Sign Up";
  const switchText = mode === "sign-in" ? "Sign Up" : "Sign In";

  const emailError = useMemo(() => {
    if (!email) return "";
    return email.includes("@") ? "" : "Enter a valid email.";
  }, [email]);

  const passwordError = useMemo(() => {
    if (!password) return "";
    return password.length >= 8 ? "" : "Password must be 8+ characters.";
  }, [password]);

  const isValid = !emailError && !passwordError && email && password;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-2xl shadow-black/40 backdrop-blur-3xl"
            initial={{ scale: 0.95, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 24, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                  Secure access
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {title}
                </h3>
              </div>
              <button
                className="text-sm text-slate-400 transition hover:text-white"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Mail, label: "GitHub" },
                { icon: Globe, label: "Twitter" },
                { icon: Link, label: "LinkedIn" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="flex min-w-0 items-center justify-center gap-2 rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-slate-900"
                >
                  <item.icon className="h-4 w-4 text-cyan-300" />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="relative my-8 h-px bg-white/10">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 px-3 text-xs uppercase tracking-[0.35em] text-slate-500">
                or continue with email
              </span>
            </div>
            <form className="grid gap-5">
              <label className="grid gap-2 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 text-slate-400">
                  <Mail className="h-4 w-4 text-cyan-300" />
                  Email address
                </span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                  placeholder="your.name@company.com"
                  type="email"
                />
                {emailError ? (
                  <span className="text-xs text-rose-300">{emailError}</span>
                ) : null}
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 text-slate-400">
                  <Lock className="h-4 w-4 text-cyan-300" />
                  Password
                </span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                  placeholder="Enter your password"
                  type="password"
                />
                {passwordError ? (
                  <span className="text-xs text-rose-300">{passwordError}</span>
                ) : null}
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember((value) => !value)}
                    className="h-4 w-4 rounded border-white/20 bg-slate-800 text-cyan-400 focus:ring-cyan-300"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm text-cyan-300 transition hover:text-white"
                >
                  Forgot password?
                </button>
              </div>
              <Button
                type="submit"
                disabled={!isValid}
                className="w-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
                size="lg"
              >
                {actionText}
              </Button>
            </form>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">
              <span>{prompt}</span>
              <button
                type="button"
                className="font-semibold text-white transition hover:text-cyan-300"
                onClick={onSwitch}
              >
                {switchText}
              </button>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                <span>
                  Secure access with enterprise-ready controls and data privacy.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

interface AuthModalsProps {
  openSignIn: boolean;
  openSignUp: boolean;
  onClose: () => void;
  onOpenSignIn: () => void;
  onOpenSignUp: () => void;
}

export function AuthModals({
  openSignIn,
  openSignUp,
  onClose,
  onOpenSignIn,
  onOpenSignUp,
}: AuthModalsProps) {
  return (
    <>
      <AuthModal
        mode="sign-in"
        open={openSignIn}
        onClose={onClose}
        onSwitch={onOpenSignUp}
      />
      <AuthModal
        mode="sign-up"
        open={openSignUp}
        onClose={onClose}
        onSwitch={onOpenSignIn}
      />
    </>
  );
}
