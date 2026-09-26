import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import MockPaymentModal from "../components/donation/MockPaymentModal.jsx";

const QR_IMAGE =
  "https://yatan.org/wp-content/uploads/2025/12/QrCode.jpeg";

const PRESETS = [500, 1000, 2500, 5000, 10000];

const BANK = {
  accountName: "YATAN – AN EFFORT",
  accountNumber: "XXXXXXXXXXXX",
  ifsc: "XXXX0000000",
  bankName: "XXXX Bank",
  branch: "Gurugram, Haryana",
  upiId: "yatan@upi",
};

const IMPACT_TIERS = [
  { amount: 500, label: "Feeds a child for a month", icon: "🍲" },
  { amount: 1000, label: "Provides a warm blanket this winter", icon: "🧥" },
  { amount: 2500, label: "Funds a month of learning", icon: "📚" },
  { amount: 5000, label: "Supports a woman's skill training", icon: "🛠️" },
];

export default function Donate() {
  const [amount, setAmount] = useState(500);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [form, setForm] = useState({
    donorName: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
  });
  const [status, setStatus] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [receiptId, setReceiptId] = useState("");

  useScrollReveal();

  const finalAmount = custom ? Number(custom) || 0 : amount;

  const openPayment = (e) => {
    e.preventDefault();
    if (!form.donorName || !form.email) {
      setStatus("missing");
      return;
    }
    if (!finalAmount || finalAmount < 100) {
      setStatus("min");
      return;
    }
    setStatus(null);
    setModalOpen(true);
  };

  const handleSuccess = async ({ transactionId, paymentMethod }) => {
    setModalOpen(false);
    setStatus("loading");
    try {
      const res = await fetch(
        (import.meta.env.VITE_API_URL || "http://localhost:5000/api") + "/donate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            donorName: form.donorName,
            email: form.email,
            phone: form.phone,
            pan: form.pan,
            address: form.address,
            amount: finalAmount,
            frequency,
            paymentMethod,
            transactionId,
            status: "success",
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error("Failed");
      setReceiptId(data.receiptId || "YTN-DEMO");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleFailure = ({ transactionId, paymentMethod }) => {
    setModalOpen(false);
    setStatus("payment-failed");
  };

  return (
    <div className="overflow-x-hidden bg-white">
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cream to-white">
        <span className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative py-16 md:py-24">
          <div className="reveal text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold tracking-wider text-brand-700 ring-1 ring-brand-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-600" />
              MAKE A DIFFERENCE
            </span>
            <h1 className="h-display mt-6 font-extrabold text-ink-900">
              Your smallest contribution makes a{" "}
              <span className="relative inline-block text-brand-600">
                big difference
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-brand-100" />
              </span>
            </h1>
            <p className="p-lead mx-auto mt-6 max-w-3xl text-ink-600">
              Every rupee you give becomes a meal, a blanket, a book, a future.
              Support Yatan's mission to empower underprivileged children, youth
              and women across India.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold tracking-wider text-ink-500">
              <span className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600">✓</span>
                80G TAX EXEMPTION
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600">✓</span>
                REGISTERED SOCIETY
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600">✓</span>
                ACTIVE FOR 10 YEARS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FORM + QR ============ */}
      <section className="section-py">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {/* LEFT — QR + Bank */}
            <div className="reveal reveal-d1 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 sm:p-8">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[10px] font-extrabold tracking-wider text-brand-600 ring-1 ring-brand-100">
                  SCAN &amp; DONATE
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink-900">
                  Pay via UPI / QR
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  Scan the QR code with any UPI app (PhonePe, Google Pay,
                  Paytm, BHIM).
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-black/5 bg-white p-3">
                  <img
                    src={QR_IMAGE}
                    alt="Yatan donation QR code"
                    className="mx-auto block h-auto w-full max-w-[220px]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-center text-xs text-ink-500">
                  UPI ID: <span className="font-semibold text-ink-700">{BANK.upiId}</span>
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 sm:p-8">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[10px] font-extrabold tracking-wider text-brand-600 ring-1 ring-brand-100">
                  BANK TRANSFER
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink-900">
                  Direct bank transfer
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex justify-between gap-4 border-b border-black/5 pb-2">
                    <span className="text-ink-500">Account Name</span>
                    <span className="text-right font-medium text-ink-900">{BANK.accountName}</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-black/5 pb-2">
                    <span className="text-ink-500">Account No.</span>
                    <span className="text-right font-medium text-ink-900">{BANK.accountNumber}</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-black/5 pb-2">
                    <span className="text-ink-500">IFSC</span>
                    <span className="text-right font-medium text-ink-900">{BANK.ifsc}</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-black/5 pb-2">
                    <span className="text-ink-500">Bank</span>
                    <span className="text-right font-medium text-ink-900">{BANK.bankName}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-ink-500">Branch</span>
                    <span className="text-right font-medium text-ink-900">{BANK.branch}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border-l-4 border-brand-600 bg-brand-50/70 p-5 text-sm italic text-ink-700">
                YATAN is a non profit society registered under the societies
                registration act of 1850. All donations are eligible for tax
                exemption under Section 80G of the Income Tax Act.
              </div>
            </div>

            {/* RIGHT — Donation form */}
            <div className="reveal reveal-d2 lg:col-span-2">
              <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 sm:p-8 md:p-10">
                <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
                  DONATE ONLINE
                </span>
                <h2 className="h-section mt-4 font-extrabold text-ink-900">
                  Choose your contribution
                  <span className="mt-3 block h-1 w-16 rounded-full bg-brand-600" />
                </h2>

                <form onSubmit={openPayment} className="mt-8 space-y-6">
                  {/* Frequency */}
                  <div>
                    <label className="text-sm font-semibold text-ink-900">
                      Donation Frequency
                    </label>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {[
                        { id: "one-time", label: "One-time" },
                        { id: "monthly", label: "Monthly" },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFrequency(f.id)}
                          className={
                            "rounded-lg border-2 px-4 py-3 text-sm font-bold transition " +
                            (frequency === f.id
                              ? "border-brand-600 bg-brand-50 text-brand-600"
                              : "border-black/10 text-ink-700 hover:border-brand-300")
                          }
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="text-sm font-semibold text-ink-900">
                      Amount (₹)
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {PRESETS.map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => {
                            setAmount(a);
                            setCustom("");
                          }}
                          className={
                            "rounded-full border px-5 py-2.5 text-sm font-semibold transition " +
                            (amount === a && !custom
                              ? "border-brand-600 bg-brand-600 text-white shadow-md"
                              : "border-black/10 text-ink-700 hover:border-brand-400")
                          }
                        >
                          ₹{a.toLocaleString("en-IN")}
                        </button>
                      ))}
                    </div>

                    <div className="mt-3 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-ink-400">
                        ₹
                      </span>
                      <input
                        type="number"
                        min="100"
                        placeholder="Or enter custom amount (min ₹100)"
                        value={custom}
                        onChange={(e) => setCustom(e.target.value)}
                        className="w-full rounded-lg border border-black/10 bg-white py-3.5 pl-8 pr-4 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>

                    {finalAmount >= 100 && (
                      <p className="mt-3 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-700">
                        Your ₹{finalAmount.toLocaleString("en-IN")} can{" "}
                        {finalAmount < 1000
                          ? "help feed a child for a week"
                          : finalAmount < 2500
                          ? "provide a warm blanket this winter"
                          : finalAmount < 5000
                          ? "fund a month of learning for a child"
                          : "support a woman's skill training"}{" "}
                        🧡
                      </p>
                    )}
                  </div>

                  {/* Donor details */}
                  <div className="border-t border-black/5 pt-6">
                    <h3 className="text-sm font-bold tracking-wider text-ink-500">
                      YOUR DETAILS (FOR 80G RECEIPT)
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <input
                        required
                        placeholder="Full Name *"
                        value={form.donorName}
                        onChange={(e) =>
                          setForm({ ...form, donorName: e.target.value })
                        }
                        className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email *"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                      <input
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                      <input
                        placeholder="PAN (for 80G receipt)"
                        value={form.pan}
                        onChange={(e) =>
                          setForm({ ...form, pan: e.target.value })
                        }
                        className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                    <input
                      placeholder="Address (optional)"
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      className="mt-4 w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary btn-shine group w-full disabled:opacity-60"
                  >
                    <span>
                      {status === "loading"
                        ? "Saving your donation..."
                        : `Donate ₹${finalAmount.toLocaleString("en-IN")}`}
                    </span>
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </button>

                  {status === "missing" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      ❌ Please enter your name and email first.
                    </div>
                  )}
                  {status === "min" && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                      Minimum donation is ₹100.
                    </div>
                  )}
                  {status === "payment-failed" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      ❌ Payment failed. Try a different card or method.
                    </div>
                  )}
                  {status === "success" && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                      <p className="text-base font-bold text-green-800">
                        ✅ Thank you for your donation!
                      </p>
                      <p className="mt-1 text-sm text-green-700">
                        Receipt No: <strong>{receiptId}</strong>
                      </p>
                      <p className="mt-2 text-xs text-green-700">
                        An 80G receipt will be emailed to {form.email}. We're
                        truly grateful for your support.
                      </p>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}

                  <p className="text-xs leading-relaxed text-ink-500">
                    By donating, you agree to our donation policy. Donations are
                    voluntary and non-refundable. Tax exemption under 80G.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHERE YOUR MONEY GOES ============ */}
      <section className="relative overflow-hidden bg-ink-50 section-py">
        <span className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative">
          <div className="reveal text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
              YOUR IMPACT
            </span>
            <h2 className="h-section mt-4 font-extrabold text-ink-900">
              Where your money goes
              <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-brand-600" />
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_TIERS.map((t, i) => (
              <div
                key={t.amount}
                className={`reveal reveal-d${i + 1} group rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200`}
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-orange-50 text-2xl ring-1 ring-brand-100/60 transition-transform duration-500 group-hover:scale-110">
                  {t.icon}
                </div>
                <p className="mt-5 text-2xl font-extrabold text-brand-600">
                  ₹{t.amount.toLocaleString("en-IN")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="container-x py-16 md:py-20">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-center text-white md:px-16">
          <span className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="h-section font-extrabold">
              Every rupee counts. Every life matters.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-300">
              Tax exemption under 80G. Active for 10 years. Present in 3 states.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/support-our-cause" className="btn-primary btn-shine group">
                <span>Explore Causes</span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="btn-ghost !border-white/80 !text-white hover:!bg-white hover:!text-ink-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MOCK PAYMENT MODAL ============ */}
      <MockPaymentModal
        open={modalOpen}
        amount={finalAmount}
        donorName={form.donorName}
        email={form.email}
        phone={form.phone}
        onClose={() => setModalOpen(false)}
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      />
    </div>
  );
}
