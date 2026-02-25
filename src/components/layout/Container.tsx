type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-8 md:px-12 ${className}`}>
      {children}
    </div>
  );
}