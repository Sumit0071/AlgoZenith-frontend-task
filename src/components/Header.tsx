import { Button } from "@/components/ui/button"
import { HelpCircle, Bell, Menu, Calendar, BriefcaseBusiness, CircleUser } from "lucide-react"


interface HeaderProps {
    activeTab: "mentor" | "learning"
    setActiveTab: ( tab: "mentor" | "learning" ) => void
    toggleSidebar: () => void
    isMobile: boolean
}

export default function Header( { activeTab, setActiveTab, toggleSidebar, isMobile }: HeaderProps ) {
    return (
        <header className="bg-white border-b p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                {isMobile && (
                    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                        <Menu className="h-6 w-6" />
                    </Button>
                )}
                <div className="font-semibold text-xl lg:hidden">AlgoZenith</div>
                <div className="hidden lg:flex gap-4">
                    <Button
                        variant={activeTab === "mentor" ? "secondary" : "ghost"}
                        onClick={() => setActiveTab( "mentor" )}
                        className="gap-2"
                    >
                        <Calendar className="h-4 w-4" />
                        Mentor Sessions
                    </Button>
                    <Button
                        variant={activeTab === "learning" ? "secondary" : "ghost"}
                        onClick={() => setActiveTab( "learning" )}
                        className="gap-2"
                    >
                        <BriefcaseBusiness className="h-4 w-4" />
                        Learning Material
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2 hidden sm:flex">
                    <HelpCircle className="h-4 w-4" />
                    How it works
                </Button>
                <Bell className="h-5 w-5 text-gray-500" />
                <CircleUser className="h-8 w-8" />

            </div>
        </header>
    )
}