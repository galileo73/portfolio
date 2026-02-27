type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`relative rounded-2xl p-[1px] ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/14 via-white/6 to-transparent" />
      <div className="relative rounded-2xl border border-neutral-900 bg-neutral-950/60 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.03)]">
        {children}
      </div>
    </div>
  );
}