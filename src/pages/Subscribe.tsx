import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { useCreateSubscriberMutation } from '../graphql/generated'

import { Gear } from 'phosphor-react'
import { Logo } from '../components/Logo'

interface FormData {
    name: string
    email: string
}

export const Subscribe = () => {
    const nav = useNavigate()
    const [createSubscriber, { loading }] = useCreateSubscriberMutation()
    const [form, setForm] = useState<FormData>({
        name: "",
        email: ""
    })
    const { name, email } = form

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        nav('/event')
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, id } = e.target

        setForm(prev => ({ ...prev, [id]: value }))
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React</strong></h1>
                    <p className="leading-relaxed mt-4 text-gray-200">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore doloribus cumque laudantium ducimus veritatis, molestias nesciunt minima ullam itaque quam eligendi temporibus fuga aperiam vitae dicta reiciendis, eius nobis dolor.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
                        <input
                            type="text"
                            id='name'
                            name='name'
                            value={name}
                            onChange={handleChange}
                            className="bg-gray-900 rounded px-5 h-14"
                            placeholder='Seu nome completo'
                        />
                        <input
                            type="email"
                            value={email}
                            id='email'
                            name='email'
                            onChange={handleChange}
                            className="bg-gray-900 rounded px-5 h-14"
                            placeholder='Digite seu email'
                        />
                        <button
                            type="submit"
                            className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
                            disabled={loading}
                        > {loading ?
                            (
                                <Gear size={25} className="mx-auto animate-spin text-gray-300" />
                            )
                            : "Garantir minha vaga"} </button>
                    </form>
                </div>
            </div>
            <img src={new URL(`../assets/code-mockup.png`, import.meta.url).href} alt="code mockup" className='mt-10' />
        </div>
    )
}
