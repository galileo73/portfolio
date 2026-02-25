type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`relative rounded-2xl p-[1px] ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/18 via-white/6 to-transparent" />
      <div className="relative rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-8 border border-neutral-900 hover:border-white/25 transition">
        {children}
      </div>
    </div>
  );
}