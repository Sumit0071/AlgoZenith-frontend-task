import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, BarChart, ChevronDown, ChevronUp, PlayCircle, FileText, HelpCircle, Code, Files } from "lucide-react"

interface Chapter {
  id: number
  title: string
  duration: string
  difficulty: "Easy" | "Medium" | "Hard"
  completed: number
  content: {
    type: "video" | "article" | "quiz" | "coding" | "resource"
    title: string
    duration: string
  }[]
  contentNumber: number,
  chapter: string,
  totalDuration: string
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "PART 1",
    duration: "02:00:00",
    difficulty: "Medium",
    completed: 45,
    content: [
      { type: "video", title: "Video 1", duration: "10:00" },
      { type: "article", title: "Article 1", duration: "10:00" },
      { type: "quiz", title: "Quiz 1", duration: "10:00" },
      { type: "coding", title: "Coding Exercise 1", duration: "10:00" },
      { type: "resource", title: "Combined Resource 1", duration: "10:00" },
    ],
    contentNumber: 5,
    chapter: "Chapter 1",
    totalDuration: "05:00:00"
  },
  {
    id: 2,
    title: "PART 2",
    duration: "02:00:00",
    difficulty: "Medium",
    completed: 20,
    content: [],
    contentNumber: 12,
    chapter: "Chapter 1",
    totalDuration: ""

  },
  {
    id: 3,
    title: "PART 3",
    duration: "02:00:00",
    difficulty: "Medium",
    completed: 0,
    content: [],
    contentNumber: 12,
    chapter: "Chapter 1",
    totalDuration: ""

  },
]

export default function ChapterList() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>( 1 )

  return (
    <div className="grid md:grid-cols-[240px,1fr] grid-cols-1 gap-4 border border-blue-300 p-4 rounded-sm bg-gradient-to-r from-transparent to-blue-50 overflow-hidden ">
      {/* Chapter List */}
      <div className="space-y-2">
        {chapters.map( ( chapter ) => (
          <button
            key={chapter.id}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between ${expandedChapter === chapter.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            onClick={() => setExpandedChapter( chapter.id )}
          >
            <span>{`Chapter ${chapter.id}`}</span>

            <span className="flex items-center">
              <Clock className="h-4 w-4" />
              {chapter.totalDuration}</span>
          </button>
        ) )}
      </div>
      {/* Chapter content */}
      <div className="space-y-4">
        {chapters.map( ( chapter ) => (
          <Card key={chapter.id} className="overflow-hidden">
            <div
              className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer hover:bg-gray-50 space-y-2 sm:space-y-0"
              onClick={() => setExpandedChapter( expandedChapter === chapter.id ? null : chapter.id )}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-medium">{chapter.title}</span>
                <span className="text-gray-500 text-sm sm:text-base">Lorem Ipsum Dolor Sit Amet</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  {chapter.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BarChart className="h-4 w-4" />
                  {chapter.difficulty}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Files className="h-4 w-4" />
                  {chapter.contentNumber}
                </div>
                <div className="text-sm text-gray-500 border border-blue-400 rounded-sm p-0.5">{chapter.completed}% Completed</div>
                {expandedChapter === chapter.id ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </div>
            <Progress value={chapter.completed} className="h-1 mt-4 " aria-label={`${chapter.title} progress`} />
            {expandedChapter === chapter.id && chapter.content.length > 0 && (
              <div className="border-t">
                {chapter.content.map( ( item, index ) => (
                  <div
                    key={index}
                    className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-gray-50 cursor-pointer space-y-2 sm:space-y-0"
                  >
                    <div className="flex items-center gap-3">
                      {item.type === "video" && <PlayCircle className="h-4 w-4" />}
                      {item.type === "article" && <FileText className="h-4 w-4" />}
                      {item.type === "quiz" && <HelpCircle className="h-4 w-4" />}
                      {item.type === "coding" && <Code className="h-4 w-4" />}
                      {item.type === "resource" && <Files className="h-4 w-4" />}
                      {item.title}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {item.duration}
                    </div>
                  </div>
                ) )}
              </div>
            )}
          </Card>
        ) )}
      </div>
    </div>
  )
}
