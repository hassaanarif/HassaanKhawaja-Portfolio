import axios from "axios";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";
import config from "../configuration/config.json";

const topicPresets = [
  "🤖 Generative AI / Agentic Project",
  "⚡ Full-Stack Web Architecture",
  "💼 Senior Engineering Role",
  "☕ General Inquiry / Say Hello",
];

function Contact() {
  const [processing, setProcessing] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  // Calculate local time in Lahore (UTC+5)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const lahoreTime = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setCurrentTime(lahoreTime);
      } catch {
        setCurrentTime("UTC+5");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [event.currentTarget.id]: event.currentTarget.value });
  }

  function handleSelectTopic(topic: string) {
    setSelectedTopic(topic);
    if (!formData.message.startsWith(`[Topic: ${topic}]`)) {
      setFormData((prev) => ({
        ...prev,
        message: `[Inquiry: ${topic}]\n\n${prev.message.replace(/^\[Inquiry:.*?\]\n\n/, "")}`,
      }));
    }
  }

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProcessing(true);

    axios
      .post(config.FormspreeURL, { ...formData })
      .then(() => {
        setFormData({
          name: "",
          email: "",
          telephone: "",
          message: "",
        });
        setSelectedTopic("");

        toast.success("Thank you! Your message has been sent successfully. 🚀", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.error(`Could not send message [${error.message}]. Please reach out directly via email.`, {
          position: "bottom-center",
          autoClose: 4000,
          theme: "dark",
        });
      })
      .finally(() => setProcessing(false));
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("hassaanarif.ha@gmail.com");
    toast.info("Email address copied to clipboard! 📋", {
      position: "bottom-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  return (
    <section id="contact" className="section-container section-spacing">
      <div className="surface-card grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12 shadow-2xl">
        {/* Left Column: Direct Info & Timezone Widget */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="eyebrow mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="section-title text-3xl sm:text-4xl">
              Let's build <span className="gradient-accent-text">something exceptional</span>.
            </h2>
            <p className="muted-copy mt-4 text-sm sm:text-base leading-relaxed">
              Whether you have an ambitious AI project, need full-stack architecture advisory, or are seeking a Senior
              Software Engineer — my inbox is open.
            </p>

            {/* Timezone / Live Status Card */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">LOCATION & TIME</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online
                </span>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <div>
                  <p className="font-bold text-white text-base">Lahore, Pakistan</p>
                  <p className="font-mono text-xs text-slate-400">PKT (UTC+5)</p>
                </div>
                <div className="font-mono text-lg font-bold text-[var(--accent)]">
                  {currentTime || "UTC+5"}
                </div>
              </div>
            </div>

            {/* Direct Email Card with 1-click copy */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md">
              <span className="font-mono text-xs text-slate-400 block mb-1">DIRECT CONTACT</span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <a
                  href="mailto:hassaanarif.ha@gmail.com"
                  className="font-mono text-sm text-[var(--accent)] hover:underline truncate"
                >
                  hassaanarif.ha@gmail.com
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="self-start sm:self-auto rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:bg-white/15 hover:text-white transition-all"
                >
                  Copy Address 📋
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div>
          {/* Preset Topics */}
          <div className="mb-6">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
              Select inquiry topic (optional):
            </span>
            <div className="flex flex-wrap gap-2">
              {topicPresets.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleSelectTopic(topic)}
                  className={`rounded-full px-3 py-1 font-mono text-xs transition-all ${
                    selectedTopic === topic
                      ? "bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-sm"
                      : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-slate-300" htmlFor="name">
                  YOUR NAME <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  autoComplete="off"
                  className="input-surface w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-slate-300" htmlFor="email">
                  YOUR EMAIL <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  id="email"
                  required
                  autoComplete="off"
                  type="email"
                  className="input-surface w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs font-semibold text-slate-300" htmlFor="telephone">
                TELEPHONE (OPTIONAL)
              </label>
              <input
                id="telephone"
                autoComplete="off"
                type="tel"
                className="input-surface w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
                placeholder="+1 (555) 000-0000"
                value={formData.telephone}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs font-semibold text-slate-300" htmlFor="message">
                MESSAGE <span className="text-[var(--accent)]">*</span>
              </label>
              <textarea
                id="message"
                required
                autoComplete="off"
                maxLength={2000}
                rows={5}
                className="input-surface w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
                placeholder="Tell me about the problem, vision, or role..."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] py-3.5 font-bold text-sm text-[var(--accent-contrast)] shadow-lg shadow-[var(--accent)]/20 transition-all duration-200 hover:scale-[1.01] hover:shadow-xl hover:shadow-[var(--accent)]/30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  <span>Dispatching Message...</span>
                </span>
              ) : (
                <span>Send Message ↗</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
