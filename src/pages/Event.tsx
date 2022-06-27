import { ArrowBendDownRight } from "phosphor-react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

interface Params {
    slug: string
}

export const Event = () => {
    const { slug } = useParams<{ slug: string }>()
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 relative">
                {slug ? <Video lessonSlug={slug} /> : <div className="flex-1">
                    <span className="absolute right-1/3 top-20 flex flex-col">
                        <p className="leading-relaxed uppercase">
                            Selecione um video
                        </p>
                        <ArrowBendDownRight size={22} className='absolute -right-3 top-5' />
                    </span>
                </div>}
                <Sidebar />
            </main>
        </div>
    )
}
