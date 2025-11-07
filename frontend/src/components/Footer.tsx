// components/Layout.tsx
//footer
const currentYear = new Date().getFullYear();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-100 p-8">{children}</main>
      <footer className="bg-orange-700 text-white text-center py-4">
        © {currentYear} SHAR Associates Sdn Bhd
      </footer>
    </div>
  );
}
