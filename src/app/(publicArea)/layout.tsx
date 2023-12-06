export default function PublicAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}Public layout</main>
    </div>
  );
}
