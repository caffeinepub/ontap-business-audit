import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Clock,
  Phone,
} from "lucide-react";

const CAL_URL = "https://cal.com/braden-roberts-fhewre/business-audits";

export default function App() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #111417 0%, #1B1F23 45%, #2A2F34 100%)",
        color: "#F2F4F7",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <main className="flex-1">
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 md:pt-28 md:pb-24 mx-auto w-full"
          style={{ maxWidth: "960px" }}
        >
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-semibold uppercase tracking-widest animate-fade-in"
            style={{
              background: "rgba(245,124,31,0.12)",
              border: "1px solid rgba(245,124,31,0.4)",
              color: "#FF8A2A",
            }}
          >
            <AlertTriangle size={13} />
            Free Audit — Limited Spots
          </div>

          {/* Main headline */}
          <h1
            className="font-extrabold uppercase tracking-tight animate-fade-up"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
              lineHeight: 1.07,
              letterSpacing: "-0.02em",
              color: "#F2F4F7",
              maxWidth: "880px",
            }}
          >
            Your business is{" "}
            <span style={{ color: "#F57C1F" }}>leaking money.</span>
            <br />
            Let&apos;s find where.
          </h1>

          {/* Sub-headline */}
          <p
            className="mt-7 animate-fade-up-delay"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              lineHeight: 1.65,
              color: "#B7BDC6",
              maxWidth: "640px",
            }}
          >
            I do a free audit of your lead flow, follow-up, scheduling, and
            operations and show you exactly where you&apos;re losing time and
            revenue.
          </p>

          {/* Hero CTAs */}
          <div
            className="mt-10 flex flex-col items-center gap-4 animate-fade-up-slow w-full"
            style={{ maxWidth: "480px" }}
          >
            <a
              href="tel:3174954601"
              data-ocid="hero.primary_button"
              className="w-full inline-flex items-center justify-center gap-3 font-bold uppercase tracking-wide rounded-lg px-8 py-4 text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                background: "linear-gradient(135deg, #F57C1F 0%, #D96512 100%)",
                boxShadow: "0 4px 20px rgba(245,124,31,0.45)",
                letterSpacing: "0.04em",
              }}
            >
              <Phone size={18} />
              Call Now — (317) 495-4601
            </a>
            <span
              className="flex items-center gap-1.5 text-sm"
              style={{ color: "#B7BDC6" }}
            >
              <Clock size={13} />
              Takes less than 30 minutes. Spots are limited.
            </span>

            {/* Cal.com booking link */}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.cal_button"
              className="w-full inline-flex items-center justify-center gap-3 font-bold uppercase tracking-wide rounded-lg px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                color: "#FF8A2A",
                border: "2px solid rgba(255,138,42,0.55)",
                background: "rgba(255,138,42,0.06)",
                letterSpacing: "0.04em",
              }}
            >
              <CalendarDays size={17} />
              Schedule Your Free Audit
              <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* ── BODY COPY ─────────────────────────────────────────── */}
        <section
          className="px-5 py-14 md:py-20 mx-auto w-full"
          style={{ maxWidth: "960px" }}
        >
          <div
            className="mb-12"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(255,138,42,0.3), transparent)",
            }}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(245,124,31,0.15)" }}
              >
                <AlertTriangle size={20} style={{ color: "#F57C1F" }} />
              </div>
              <p
                style={{
                  color: "#B7BDC6",
                  lineHeight: 1.65,
                  fontSize: "0.97rem",
                }}
              >
                Most small business owners are working 60 hour weeks and still
                feel behind. Not because they&apos;re lazy. Because their{" "}
                <strong style={{ color: "#F2F4F7" }}>
                  systems are broken.
                </strong>
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(245,124,31,0.15)" }}
              >
                <CheckCircle size={20} style={{ color: "#F57C1F" }} />
              </div>
              <p
                style={{
                  color: "#B7BDC6",
                  lineHeight: 1.65,
                  fontSize: "0.97rem",
                }}
              >
                I&apos;ve helped businesses{" "}
                <strong style={{ color: "#F2F4F7" }}>
                  stop losing after-hours jobs,
                </strong>{" "}
                close more quotes, and get paid faster.{" "}
                <strong style={{ color: "#F2F4F7" }}>
                  All without hiring anyone new.
                </strong>
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(245,124,31,0.15)" }}
              >
                <Clock size={20} style={{ color: "#F57C1F" }} />
              </div>
              <p
                style={{
                  color: "#B7BDC6",
                  lineHeight: 1.65,
                  fontSize: "0.97rem",
                }}
              >
                In <strong style={{ color: "#F2F4F7" }}>30 minutes</strong>{" "}
                I&apos;ll show you what&apos;s broken and exactly how to fix it.
                No fluff, no upsell. Just answers.
              </p>
            </div>
          </div>
        </section>

        {/* ── OFFER BOX ─────────────────────────────────────────── */}
        <section
          className="px-5 pb-20 md:pb-28 mx-auto w-full"
          style={{ maxWidth: "960px" }}
        >
          <div
            data-ocid="offer.card"
            className="relative rounded-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #16191d 0%, #1e2328 100%)",
              boxShadow:
                "0 0 0 2px #FF8A2A, 0 0 48px 8px rgba(255,138,42,0.18), 0 24px 64px rgba(0,0,0,0.6)",
            }}
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(to right, transparent, #FF8A2A, transparent)",
                opacity: 0.8,
              }}
            />

            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest"
              style={{
                background: "rgba(245,124,31,0.18)",
                border: "1px solid rgba(245,124,31,0.5)",
                color: "#FF8A2A",
              }}
            >
              Zero cost. Zero obligation.
            </div>

            <h2
              className="font-extrabold uppercase mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#F2F4F7",
              }}
            >
              Free Business Audit
            </h2>

            <p
              className="mb-8"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.65,
                color: "#B7BDC6",
                maxWidth: "540px",
              }}
            >
              No pitch. No fluff. Just a straight breakdown of where your
              business is leaking — and what to do about it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="tel:3174954601"
                data-ocid="offer.primary_button"
                className="inline-flex items-center justify-center gap-3 font-bold uppercase tracking-wide rounded-lg px-8 py-4 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  fontSize: "1rem",
                  background:
                    "linear-gradient(135deg, #F57C1F 0%, #D96512 100%)",
                  boxShadow: "0 4px 24px rgba(245,124,31,0.5)",
                  letterSpacing: "0.04em",
                }}
              >
                <Phone size={18} />
                Call Now — (317) 495-4601
              </a>

              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="offer.secondary_button"
                className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide rounded-lg px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  fontSize: "1rem",
                  color: "#FF8A2A",
                  border: "2px solid rgba(255,138,42,0.55)",
                  background: "rgba(255,138,42,0.06)",
                  letterSpacing: "0.04em",
                }}
              >
                Book Your Free Audit Now
                <ArrowRight size={16} />
              </a>
            </div>

            <p
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: "#B7BDC6" }}
            >
              <Clock size={14} style={{ color: "#F57C1F" }} />
              Takes less than 30 minutes. Spots are limited.
            </p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer
        className="w-full px-5 py-8 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p className="text-sm mb-2" style={{ color: "#B7BDC6" }}>
          Braden Roberts | onTap LLC |{" "}
          <a
            href="mailto:ontapaiservices@gmail.com"
            className="hover:underline transition-colors"
            style={{ color: "#F57C1F" }}
          >
            ontapaiservices@gmail.com
          </a>
        </p>
        <p className="text-xs" style={{ color: "rgba(183,189,198,0.5)" }}>
          © {year}. Built with ♥ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "rgba(245,124,31,0.7)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
