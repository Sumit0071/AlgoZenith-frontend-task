import { Button } from "@/components/ui/button"
import {  AlignJustify,LayoutGrid,Lightbulb ,Clipboard,ChartNoAxesColumnIncreasing,  Users, Star, X } from "lucide-react"


interface SidebarProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  isMobile: boolean
}

export default function Sidebar({ isSidebarOpen, toggleSidebar, isMobile }: SidebarProps) {
  return (
    <div
      className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transform transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 z-30 w-64 bg-white border-r lg:relative lg:translate-x-0`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center gap-2 font-semibold text-xl">
          <AlignJustify className="h-5 w-5" />
          AlgoZenith
        </div>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>
      <nav className="p-4 space-y-2">
        {[
          { icon: LayoutGrid, label: "Dashboard" },
          { icon:Lightbulb, label: "Learn" },
          { icon: Users, label: "Forums" },
          { icon: Clipboard, label: "Upskill" },
          { icon: ChartNoAxesColumnIncreasing, label: "Contest" },
          { icon: Star, label: "Leaderboard" },
        ].map((item) => (
          <Button
            key={item.label}
            variant={item.label === "Learn" ? "secondary" : "ghost"}
            className="w-full justify-start gap-3"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  )
}