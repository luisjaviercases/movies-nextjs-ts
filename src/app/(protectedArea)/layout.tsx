export default function ProtectedAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}Protected Layout</main>
    </div>
  );
}
