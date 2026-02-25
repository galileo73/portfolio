type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-14">
      <h3 className="text-3xl font-semibold">{title}</h3>
      {subtitle && (
        <p className="mt-3 text-neutral-400 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}