export function ShareCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            background: "#00e9b0",
            marginRight: 14,
          }}
        />
        <div style={{ fontSize: 32, fontWeight: 700, color: "#10262a" }}>Dharmik Joshi</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: 64,
            height: 6,
            borderRadius: 4,
            background: "#00e9b0",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#10262a",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            maxWidth: 980,
          }}
        >
          Back-office work that runs itself.
        </div>
      </div>
      <div style={{ fontSize: 28, color: "#4a5a5d" }}>Bangalore, India</div>
    </div>
  );
}
