"use client";

import { FormEvent, useState } from "react";
import { useLang } from "@/lib/i18n";
import { profile, socials, formspreeEndpoint } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

const isConfigured =
  formspreeEndpoint && !formspreeEndpoint.includes("YOUR_FORM_ID");

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Formspree yapılandırılmamışsa: mailto'ya düş (demo davranışı).
    if (!isConfigured) {
      const subject = encodeURIComponent(`Website iletişim — ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-bg px-4 py-3 text-fg outline-none transition placeholder:text-muted focus:border-accent";

  return (
    <section id="contact" className="border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder={t("contact.name")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                required
                placeholder={t("contact.email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <textarea
                required
                rows={5}
                placeholder={t("contact.message")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? t("contact.sending") : t("contact.send")}
                </button>
                {status === "success" && (
                  <p className="text-sm text-accent">{t("contact.success")}</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500">{t("contact.error")}</p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-center">
              <p className="text-muted">{t("contact.or")}</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 font-serif text-2xl font-medium transition hover:text-accent"
              >
                {profile.email}
              </a>

              <div className="mt-8 flex flex-wrap gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
