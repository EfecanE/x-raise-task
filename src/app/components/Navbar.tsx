import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='w-full flex items-center'>
            <div className='border-r border-white p-2'>
                <Link href="/">HOME</Link>
            </div>
            <div className='p-2'>
                <Link href="/add-card">ADD CARD</Link>
            </div>
        </div>
    )
}
