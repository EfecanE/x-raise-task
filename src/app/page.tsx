'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { ICard } from "./types/card.interface";
import { useEffect } from "react";
import axios from "axios";
import { addCards } from "@/lib/features/cardSlice";
import CardList from "./components/CardList";
import GridSelector from "./components/GridSelector";
import SearchFilter from "./components/SearchFilter";



export default function Home() {

  const cards = useAppSelector<ICard[]>((state: RootState) => state.cards);
  const appDispatch = useAppDispatch();

  const fetchCards = async () => {
    axios.get(process.env.NEXT_PUBLIC_API_URL! + '/cards')
      .then(({ data }: { data: ICard[] }) => {
        appDispatch(addCards(data))
      }
      ).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (cards.length === 0) { // Added this to avoid many requests to the API
      fetchCards();
    }
    console.log(cards);
  }, [cards]);

  return (
    <>
      <div className="w-full flex justify-between border-b border-slate-400 pb-4">
        <SearchFilter></SearchFilter>
        <GridSelector></GridSelector>
      </div>
      <CardList cards={cards}></CardList>
    </>
  )
}
