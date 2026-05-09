import { motion } from "framer-motion";

const calls = [
  {
    id: 1,
    image: "/IMG_8995.PNG",
    duration: "2h 34m",
    time: "11:48 PM",
    rotate: -4,
  },
  {
    id: 2,
    image: "/IMG_8597.PNG",
    duration: "3h 12m",
    time: "1:17 AM",
    rotate: 2,
  },
  {
    id: 3,
    image: "/IMG_9620.PNG",
    duration: "1h 58m",
    time: "12:03 AM",
    rotate: -2,
  },
];

const stats = [
  { label: "combined call hours", value: "∞" },
  { label: "times we said 'okay bye' (she tells me to get out)", value: "0" },
//   { label: "miles between us", value: "too many" },

];

export default function LongDistance() {
  return (
    <section
      style={{
        background: "#080608",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(48px, 8vw, 80px) clamp(24px, 5vw, 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{
        position: "absolute", top: "20%", left: "10%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(229,152,155,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "8%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(229,152,155,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "clamp(32px, 6vw, 64px)", zIndex: 1, position: "relative" }}
      >
        <p style={{
          fontFamily: "'Georgia', serif", fontStyle: "italic",
          fontSize: "clamp(11px, 1.4vw, 13px)", color: "#e5989b",
          letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 10px 0",
        }}>
          ✦ &nbsp; across the miles &nbsp; ✦
        </p>
        <h2 style={{
          fontFamily: "'Georgia', serif", fontWeight: 700,
          fontSize: "clamp(36px, 6vw, 72px)", color: "#ffffff",
          margin: 0, lineHeight: 1, letterSpacing: "-0.02em",
        }}>
          long{" "}
          <span style={{ fontStyle: "italic", color: "#e5989b" }}>distance</span>
        </h2>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "12px", marginTop: "16px",
        }}>
          <div style={{ height: "1px", width: "60px", background: "rgba(229,152,155,0.3)" }} />
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e5989b" }} />
          <div style={{ height: "1px", width: "60px", background: "rgba(229,152,155,0.3)" }} />
        </div>
        <p style={{
          fontFamily: "'Georgia', serif", fontStyle: "italic",
          fontSize: "clamp(13px, 1.7vw, 16px)", color: "rgba(255,255,255,0.4)",
          margin: "14px 0 0 0", lineHeight: 1.7,
        }}>
          Fun fact: I haven't seen silvia in rl in over 3 year.
          <br />And she prefers attention over the phone regardless (weirdo).
        </p>
      </motion.div>

      {/* FaceTime cards */}
      <div style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "clamp(16px, 3vw, 32px)",
        flexWrap: "wrap",
        zIndex: 1,
        position: "relative",
        marginBottom: "clamp(40px, 6vw, 72px)",
      }}>
        {calls.map((call, i) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, y: 40, rotate: call.rotate - 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: call.rotate }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(229,152,155,0.15)",
              borderRadius: "18px",
              padding: "10px",
              width: "clamp(200px, 26vw, 260px)",
              boxShadow: "0 0 40px rgba(229,152,155,0.08), 0 20px 60px rgba(0,0,0,0.6)",
              cursor: "default",
              willChange: "transform",
            }}
          >
            {/* Screen area */}
            <div style={{
              width: "100%",
              aspectRatio: "9/16",
              borderRadius: "12px",
              background: call.image
                ? `url(${call.image}) center/cover`
                : "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f1a2e 100%)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Placeholder screen content */}
              {!call.image && (
                <>
                  {/* Simulated FaceTime UI */}
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                  }}>
                    {/* Avatar placeholder */}
                    <div style={{
                      width: "64px", height: "64px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #e5989b, #c9747a)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "28px", marginBottom: "12px",
                      boxShadow: "0 0 24px rgba(229,152,155,0.4)",
                    }}>
                      🤍
                    </div>
                    <p style={{
                      fontFamily: "'Georgia', serif", fontStyle: "italic",
                      fontSize: "13px", color: "rgba(255,255,255,0.6)",
                      margin: 0, letterSpacing: "0.05em",
                    }}>
                      Silvia
                    </p>
                  </div>

                  {/* Screen glow overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at 50% 40%, rgba(229,152,155,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />

                  {/* Top bar — time */}
                  <div style={{
                    position: "absolute", top: "12px", left: 0, right: 0,
                    display: "flex", justifyContent: "center",
                  }}>
                    <span style={{
                      fontFamily: "'Georgia', serif", fontSize: "11px",
                      color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em",
                    }}>
                      {call.time}
                    </span>
                  </div>

                  {/* Bottom bar — duration */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "20px 12px 12px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontFamily: "'Georgia', serif", fontStyle: "italic",
                      fontSize: "12px", color: "rgba(255,255,255,0.5)",
                    }}>
                      FaceTime
                    </span>
                    <span style={{
                      fontFamily: "'Georgia', serif", fontSize: "12px",
                      color: "#e5989b", letterSpacing: "0.05em",
                    }}>
                      {call.duration}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Caption */}
            <div style={{
  display: "flex",
  justifyContent: "center",
  padding: "12px 0 4px",
}}>
  <div style={{
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
  }} />
</div>
          </motion.div>
        ))}
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(24px, 5vw, 64px)",
          flexWrap: "wrap",
          zIndex: 1,
          position: "relative",
          borderTop: "1px solid rgba(229,152,155,0.12)",
          paddingTop: "clamp(24px, 4vw, 40px)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            style={{ textAlign: "center" }}
          >
            <p style={{
              fontFamily: "'Georgia', serif", fontWeight: 700,
              fontStyle: "italic", fontSize: "clamp(22px, 3.5vw, 36px)",
              color: "#e5989b", margin: "0 0 4px 0", lineHeight: 1,
            }}>
              {stat.value}
            </p>
            <p style={{
              fontFamily: "'Georgia', serif", fontSize: "clamp(10px, 1.2vw, 12px)",
              color: "rgba(255,255,255,0.3)", margin: 0,
              letterSpacing: "0.15em", textTransform: "uppercase",
              maxWidth: "min(280px, 85vw)",
              lineHeight: 1.45,
            }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}