'use client'
import { ICard } from '../types/card.interface';
import { FormEvent } from 'react';
import axios from 'axios';
import { useAppDispatch } from '@/lib/hooks';
import { addCard } from '@/lib/features/cardSlice';
import { useRouter } from 'next/navigation';


export default function AddCard() {

    const appDispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const card: ICard = {
            id: Math.random() * 1000,
            title: formData.get('title') as string,
            class: formData.get('class') as string,
            imageUrl: formData.get('imageUrl') as string,
            tags: formData.get('tags')?.toString().split(',') as string[],
        }

        appDispatch(addCard(card));



        axios.post('http://localhost:3004/cards', card).then((res) => {
            router.push('/');
        }
        ).catch((err) => {
            console.log(err);
        })

    };

    return (

        <form action="" onSubmit={handleSubmit}>
            <h1 className='text-center text-3xl mb-5'>ADD CARD</h1>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="title">Title</label>
                    <input className='bg-black text-white border border-w rounded-md md:min-w-[350px] text-center' type="text" id="title" name="title" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Class</label>
                    <input className='bg-black text-white border border-w rounded-md md:min-w-[350px] text-center' type="text" id="class" name="class" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Image Url</label>
                    <input className='bg-black text-white border border-w rounded-md md:min-w-[350px] text-center' type="text" id="imageUrl" name="imageUrl" />
                </div>
                <div className='flex flex-col gap-2 '>
                    <div>
                        <label htmlFor="name">Tags: </label>
                        <p>(separate with comma)</p>
                    </div>
                    <input className='bg-black text-white border border-w rounded-md md:min-w-[350px] text-center' type="text" id="tags" name="tags" />
                </div>
                <button className='border border-white p-3 rounded' type='submit'>Add</button>
            </div>
        </form>

    )
}
