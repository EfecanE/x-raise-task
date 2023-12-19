'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { setFilter } from '@/lib/features/filterSlice';


export default function SearchFilter() {

    const filter = useAppSelector<string>((state: RootState) => state.filter.filter);
    const appDispatch = useAppDispatch();

    return (
        <>
            <input className='text-white md:min-w-[500px] bg-[#191919] border border-white px-1' type="text" value={filter} onChange={(e) => appDispatch(setFilter(e.target.value))} placeholder='SEARCH' />
        </>
    )
}
