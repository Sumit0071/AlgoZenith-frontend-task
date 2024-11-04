
import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import ChapterList from "./components/ChapterList"
import { Button } from "./components/ui/button"
function App() {
  const [activeTab, setActiveTab] = useState<"mentor" | "learning">( "learning" )
  const [isSidebarOpen, setIsSidebarOpen] = useState( false )
  const [isMobile, setIsMobile] = useState( false )

  useEffect( () => {
    const checkIsMobile = () => {
      setIsMobile( window.innerWidth < 1024 )
      if ( window.innerWidth >= 1024 ) {
        setIsSidebarOpen( false )
      }
    }

    checkIsMobile()
    window.addEventListener( 'resize', checkIsMobile )
    return () => window.removeEventListener( 'resize', checkIsMobile )
  }, [] )

  const toggleSidebar = () => {
    setIsSidebarOpen( !isSidebarOpen )
  }


  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
        <div className="flex-1 overflow-auto p-6">
          {activeTab !== "mentor" ? <ChapterList /> :
            <div className="flex flex-col items-center">
              <img
                src="https://media.istockphoto.com/id/1397741497/vector/team-building-activity-isolated-cartoon-vector-illustrations.jpg?s=612x612&w=0&k=20&c=kwBEtR42YfT0UF1Mb0M_wEaob_Tkn2w20MRn77C1T_s="
                alt="logo"
                className="h-[300px] w-[250px] object-cover mb-4"
              />
              <Button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md">
                Click here to Join the Zoom meeting
              </Button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
