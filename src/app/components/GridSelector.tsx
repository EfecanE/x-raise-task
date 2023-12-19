import { setGridType } from "@/lib/features/gridTypeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { GridType } from "../types/grid-type.enum";
import { RootState } from "@/lib/store";
import { useEffect } from "react";

export default function GridSelector() {

    const gridType = useAppSelector<GridType>((state: RootState) => state.gridType);
    const appDispatch = useAppDispatch();

    const setGrid = (gridType: GridType) => {
        appDispatch(setGridType(gridType))
    }

    useEffect(() => {
        console.log(gridType);
    }
        , [gridType]);

    return (
        <div className='flex gap-3'>
            <div onClick={() => setGrid(GridType.SMALL)} className={"w-7 h-7 flex justify-center items-center p-1 border border-white cursor-pointer " + (gridType === 0 ? 'bg-white text-black' : '')}>
                <p>S</p>
            </div>
            <div onClick={() => setGrid(GridType.MEDIUM)} className={"w-7 h-7 flex justify-center items-center p-1 border border-white cursor-pointer " + (gridType === 1 ? 'bg-white text-black' : '')}>
                <p>M</p>
            </div>
            <div onClick={() => setGrid(GridType.LARGE)} className={"w-7 h-7 flex justify-center items-center p-1 border border-white cursor-pointer " + (gridType === 2 ? 'bg-white text-black' : '')}>
                <p>L</p>
            </div>
        </div>
    )
}
