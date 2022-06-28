import { gql, useQuery } from "@apollo/client"
import React from "react"
import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"

interface Lesson {
    id: number
    slug: string
    title: string
    availableAt: string
    lessonType: "live" | "class"
}

export const Sidebar = () => {
    const { data } = useGetLessonsQuery()

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronogramas de aula
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map((item) => (
                    <Lesson
                        key={item.id}
                        title={item.title}
                        slug={item.slug}
                        availableAt={new Date(item.availableAt)}
                        type={item.lessonType}
                    />
                ))}
            </div>
        </aside>
    )
}
