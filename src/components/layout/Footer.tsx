import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-10">
      <Container className="flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Gianluigi. All rights reserved.</p>
        <p className="text-neutral-600">Built with React + Vite + Tailwind</p>
      </Container>
    </footer>
  );
}