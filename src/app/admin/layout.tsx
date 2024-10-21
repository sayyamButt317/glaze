// app/admin/layout.tsx
import Sidebar from "./products/_components/Sidebar"; // Sidebar for admin section
import "./globals.css";

export const metadata = {
  title: "Admin Panel | Pony Party",
  description: "Admin Management Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="flex">
          <div className="w-64">
            <Sidebar /> {/* Sidebar only for admin pages */}
          </div>
          <div className="flex-grow p-4">
            {children} {/* Admin content goes here */}
          </div>
        </div>
      </body>
    </html>
  );
}
