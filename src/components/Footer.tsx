import {Home} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="flex flex-col items-center gap-4">
        <Home className="w-8 h-8" />
        <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
