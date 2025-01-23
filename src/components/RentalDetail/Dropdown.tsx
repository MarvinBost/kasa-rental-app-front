import {ReactNode} from "react";
import {ChevronDown} from "lucide-react";

interface DropdownProps {
  title: string;
  children: ReactNode;
}

export default function Dropdown({title, children}: DropdownProps) {
  return (
    <details className="group">
      <summary className="flex items-center justify-between bg-[#FF6060] text-white p-4 rounded-lg cursor-pointer">
        {title}
        <ChevronDown className="transform group-open:rotate-180 transition-transform" />
      </summary>
      <div className="p-4 bg-gray-100 rounded-b-lg mt-[-4px]">{children}</div>
    </details>
  );
}
