'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ICard } from '../types/card.interface'
import Card from './Card'
import { RootState } from '@/lib/store';
import { GridType } from '../types/grid-type.enum';
import { useEffect, useState } from 'react';
import SearchFilter from './SearchFilter';


export default function CardList({ cards }: { cards: ICard[] }) {

    const [allCards, setAllsCards] = useState<ICard[]>(cards);
    const gridType = useAppSelector<GridType>((state: RootState) => state.gridType);
    const filterBy = useAppSelector<string>((state: RootState) => state.filter.filter);

    useEffect(() => {
        setAllsCards(cards);
    }, [cards]);

    const setGrid = (gridType: GridType) => {
        switch (gridType) {
            case GridType.SMALL:
                return 'grid-cols-8'
            case GridType.MEDIUM:
                return 'grid-cols-6'
            case GridType.LARGE:
                return 'grid-cols-4'
        }
    }

    return (
        <>
            <div className={"grid gap-2 py-3 " + setGrid(gridType)}>
                {
                    allCards.filter((card) => filterBy ? card.title.toLowerCase().includes(filterBy.toLowerCase()) : true)
                        .map((card) => {
                            return <Card key={card.id} card={card}></Card>
                        })
                }
            </div>
        </>
    )
}
