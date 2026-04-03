type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-neutral-400 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
