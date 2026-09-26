import { useEffect, useState } from "react";

const TEST_CARDS = {
  "4111111111111111": "success",
  "4000000000000002": "failed",
};

export default function MockPaymentModal({
  open,
  amount,
  donorName,
  email,
  phone,
  onClose,
  onSuccess,
  onFailure,
}) {
  const [method, setMethod] = useState("card");
  const [processing, setProcessing] = useState(false);

  // Card form
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: donorName || "",
  });

  // UPI form
  const [upiId, setUpiId] = useState("");

  // Netbanking
  const [bank, setBank] = useState("");

  useEffect(() => {
    if (open) {
      setMethod("card");
      setProcessing(false);
      setCard({
        number: "",
        expiry: "",
        cvv: "",
        name: donorName || "",
      });
      setUpiId("");
      setBank("");
    }
  }, [open, donorName]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const formattedAmount = Number(amount || 0).toLocaleString("en-IN");

  const formatCard = (v) =>
    v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (v) => {
    const cleaned = v.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3) return cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    return cleaned;
  };

  const process = (forcedResult) => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);

      let result = forcedResult;
      if (!result && method === "card") {
        const digits = card.number.replace(/\s/g, "");
        result = TEST_CARDS[digits] || "success";
      }
      if (!result) result = "success";

      const txnId = "MOCK_" + Math.random().toString(36).slice(2, 11).toUpperCase();
      const payload = {
        transactionId: txnId,
        paymentMethod: method,
        method,
      };

      if (result === "success") {
        onSuccess(payload);
      } else {
        onFailure(payload);
      }
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === "card") {
      if (
        !card.number ||
        card.number.replace(/\s/g, "").length < 16 ||
        !card.expiry ||
        card.expiry.length < 5 ||
        card.cvv.length < 3
      ) {
        alert("Please fill in complete card details.");
        return;
      }
    }
    if (method === "upi" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }
    if (method === "netbanking" && !bank) {
      alert("Please select a bank.");
      return;
    }
    process();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget && !processing) onClose();
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-ink-900 to-ink-800 px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-lg font-bold ring-1 ring-white/20">
                Y
              </div>
              <div>
                <p className="text-sm font-semibold">Yatan NGO</p>
                <p className="text-xs text-white/60">Secure Payment</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              disabled={processing}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 disabled:opacity-40"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-xs text-white/60">Amount to pay</span>
            <span className="text-2xl font-extrabold tabular-nums">
              ₹{formattedAmount}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 border-b border-black/5 bg-ink-50 text-xs font-bold tracking-wider">
          {[
            { id: "card", label: "CARD" },
            { id: "upi", label: "UPI" },
            { id: "netbanking", label: "NETBANKING" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              disabled={processing}
              onClick={() => setMethod(t.id)}
              className={
                "relative py-3.5 transition " +
                (method === t.id
                  ? "text-brand-600"
                  : "text-ink-500 hover:text-ink-700")
              }
            >
              {t.label}
              {method === t.id && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-600" />
              )}
            </button>
          ))}
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* CARD */}
          {method === "card" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold tracking-wider text-ink-500">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="4111 1111 1111 1111"
                  value={card.number}
                  onChange={(e) =>
                    setCard({ ...card, number: formatCard(e.target.value) })
                  }
                  disabled={processing}
                  className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-mono text-sm tracking-wider text-ink-900 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold tracking-wider text-ink-500">
                    EXPIRY
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="MM/YY"
                    value={card.expiry}
                    onChange={(e) =>
                      setCard({ ...card, expiry: formatExpiry(e.target.value) })
                    }
                    disabled={processing}
                    className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-mono text-sm text-ink-900 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-wider text-ink-500">
                    CVV
                  </label>
                  <input
                    type="password"
                    inputMode="numeric"
                    placeholder="•••"
                    maxLength={3}
                    value={card.cvv}
                    onChange={(e) =>
                      setCard({
                        ...card,
                        cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                      })
                    }
                    disabled={processing}
                    className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-mono text-sm text-ink-900 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold tracking-wider text-ink-500">
                  NAME ON CARD
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={card.name}
                  onChange={(e) => setCard({ ...card, name: e.target.value })}
                  disabled={processing}
                  className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-ink-900 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div className="rounded-lg bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-700">
                🧪 <strong>Demo mode:</strong> Use <code>4111 1111 1111 1111</code> for success,{" "}
                <code>4000 0000 0000 0002</code> for failure. Any future expiry, any CVV.
              </div>
            </div>
          )}

          {/* UPI */}
          {method === "upi" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold tracking-wider text-ink-500">
                  UPI ID
                </label>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  disabled={processing}
                  className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-ink-900 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                  <button
                    key={app}
                    type="button"
                    disabled={processing}
                    onClick={() => setUpiId(`demo@${app.toLowerCase()}`)}
                    className="rounded-lg border border-black/10 bg-white py-3 text-[11px] font-bold text-ink-700 transition hover:border-brand-400 hover:bg-brand-50"
                  >
                    {app}
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-700">
                🧪 <strong>Demo mode:</strong> Any UPI ID works — use a preset above or type
                any value like <code>test@upi</code>.
              </div>
            </div>
          )}

          {/* NETBANKING */}
          {method === "netbanking" && (
            <div className="space-y-4">
              <label className="text-xs font-bold tracking-wider text-ink-500">
                SELECT BANK
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "HDFC Bank",
                  "ICICI Bank",
                  "SBI",
                  "Axis Bank",
                  "Kotak",
                  "Punjab National Bank",
                ].map((b) => (
                  <button
                    key={b}
                    type="button"
                    disabled={processing}
                    onClick={() => setBank(b)}
                    className={
                      "rounded-lg border px-3 py-3 text-xs font-bold transition " +
                      (bank === b
                        ? "border-brand-600 bg-brand-50 text-brand-600"
                        : "border-black/10 bg-white text-ink-700 hover:border-brand-400")
                    }
                  >
                    {b}
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-700">
                🧪 <strong>Demo mode:</strong> Pick any bank — the payment simulates
                success.
              </div>
            </div>
          )}

          {/* Processing overlay */}
          {processing && (
            <div className="absolute inset-0 grid place-items-center bg-white/85 backdrop-blur-sm">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-brand-100 border-t-brand-600" />
                <p className="mt-4 text-sm font-semibold text-ink-700">
                  Processing payment...
                </p>
                <p className="mt-1 text-xs text-ink-500">
                  Please don't close this window
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={processing}
              className="flex-1 rounded-lg border-2 border-ink-200 py-3 text-sm font-bold text-ink-700 transition hover:border-ink-400 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={processing}
              className="btn-shine group relative flex-1 overflow-hidden rounded-lg bg-brand-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-700 disabled:opacity-60"
            >
              {processing ? "Processing..." : `Pay ₹${formattedAmount}`}
            </button>
          </div>

          <p className="mt-3 text-center text-[10px] text-ink-400">
            🔒 Secured by <strong>MockPay</strong> · Demo mode only
          </p>
        </form>
      </div>
    </div>
  );
}
