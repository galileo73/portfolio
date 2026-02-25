type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12">
      {children}
    </div>
  );
}