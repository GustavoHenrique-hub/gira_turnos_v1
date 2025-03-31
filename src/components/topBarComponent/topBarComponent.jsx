import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export default function ButtonsTopBarComponent({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [expandedItem, setExpandedItem] = useState();

  return (
    <aside className="h-screen">
      <nav
        className={`h-[6%] w-[95%] transition-all opacity-100 flex rounded-lg bg-white drop-shadow-lg`}
      >
        <SidebarContext.Provider
          value={{
            expanded,
            activeItem,
            setActiveItem,
            expandedItem,
            setExpandedItem,
          }}
        >
          <ul className="flex-1 px-2 flex gap-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function ButtonsTopBarItem({ icon, text, index, hoverText, children }) {
  const { expanded, activeItem, setActiveItem, expandedItem, setExpandedItem } =
    useContext(SidebarContext);

  const isActive = activeItem === index;
  const isExpandedItem = expandedItem === index;

  return (
    <div
      onClick={() => {
        setActiveItem(index), setExpandedItem(index);
      }}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group h-12
        ${
          isActive === true
            ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800"
            : "hover:bg-green-50 text-[#002039]"
        }
    `}
    >
      {icon}
      <span className={`overflow-hidden transition-all w-60 ml-3`}>{text}</span>
    </div>
  );
}
