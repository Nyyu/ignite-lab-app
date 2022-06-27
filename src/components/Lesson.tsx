import { Link, useParams } from "react-router-dom"

import { CheckCircle, Lock } from "phosphor-react"

import { isPast, format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import classNames from 'classnames'

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: "live" | "class"
}

export const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
    const isLessonAvailable: boolean = isPast(availableAt)
    const { slug: linkSlug } = useParams<{ slug: string }>()
    const availableDateFormatted = format(
        availableAt,
        "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
        {
            locale: ptBR,
        }
    )

    const isActive = slug === linkSlug

    return (
        <Link to={`/event/lesson/${slug}`} className={`group`}>
            <span className="text-gray-300">{availableDateFormatted}</span>
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                "bg-green-500": isActive
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames("text-sm font-medium flex items-center gap-2", {
                            "text-white": isActive,
                            "text-blue-500": !isActive
                        })}>
                            <CheckCircle size={20} />
                            Counteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border font-bold", {
                        "border-green-300": !isActive,
                        "border-white": isActive
                    })}>
                        {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>
                <strong className={classNames("block mt-5", {
                    "text-grey-200": !isActive,
                    "text-white": isActive,
                })}>{title}</strong>
            </div>
        </Link>
    )
}
