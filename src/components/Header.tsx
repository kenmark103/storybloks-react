import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-3xl mx-auto p-4">
        <div className="flex items-center justify-between h-16">
         
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Home
          </Link>

          <Menu size={24} className="text-gray-500" />
        </div>
      </nav>
    </header>
  );
}
