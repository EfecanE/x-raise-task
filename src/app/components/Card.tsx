import Image from 'next/image'
import { ICard } from '../types/card.interface'

export default function Card({ card }: { card: ICard }) {
    return (
        <div className='flex flex-col'>
            <Image src={card.imageUrl} alt='Card Image' width={300} height={150} />
            <div className='bg-black flex justify-between items-center'>
                <div className='flex flex-col'>
                    <p className='text-sm'>{card.class}</p>
                    <h2>{card.title.toUpperCase()}</h2>
                    <div className='flex gap-1'>
                        {
                            card.tags.map((tag, index) => {
                                return <span key={index} className='text-xs text-gray-400'>@{tag}</span>
                            }
                            )
                        }
                    </div>
                </div>
                <div>
                    <Image src={'/images/qr-code.png'} alt='qr code' width={50} height={50}></Image>
                </div>
            </div>
        </div>
    )
}
