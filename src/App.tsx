
import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import ChapterList from "./components/ChapterList"
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
          <ChapterList />
        </div>
      </div>
    </div>
  )
}

export default App
