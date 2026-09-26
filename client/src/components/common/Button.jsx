export default function Button({ children, variant = "primary", ...props }) {
  const base = variant === "primary" ? "btn-primary" : "btn-outline";
  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
