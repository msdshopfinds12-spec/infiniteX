import { Bell, Search } from "lucide-react";

export default function TopBar({ title }: { title: string }) {
  return (
    <header className="topbar">
      <h1 className="topbar-title">{title}</h1>
      <div className="topbar-actions">
        <div className="search">
          <Search size={14} />
          <input placeholder="Search agents, runs, logs..." />
        </div>
        <button className="icon-btn" aria-label="Notifications">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}
