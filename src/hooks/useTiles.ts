import { useState, useEffect, useRef } from "react";
import { COLS, TILES } from "../constants";
import {
    CumulativeHeights,
    getCumulativeHeights,
    leftLookUp,
    rightLookUp
} from "../utility";

const useTiles = () => {
    const [selectedTile, setSelectedTile] = useState<number>(0);
    const cumulativeHeights = useRef<CumulativeHeights[]>([]);
    console.log(cumulativeHeights.current);
    const handleKeyDown = (e: KeyboardEvent) => {
        console.log(e.key);
        switch (e.key) {
            case "ArrowUp":
                setSelectedTile((prev) =>
                    prev - COLS < 0 ? prev : prev - COLS
                );
                break;
            case "ArrowDown":
                console.log(selectedTile);
                setSelectedTile((prev) =>
                    prev + COLS > TILES.length ? prev : prev + COLS
                );
                break;
            case "ArrowLeft":
                setSelectedTile((prev) =>
                    prev == 0
                        ? TILES.length - 1
                        : leftLookUp(prev, cumulativeHeights.current)
                );
                break;
            case "ArrowRight":
                setSelectedTile((prev) =>
                    prev == TILES.length - 1
                        ? 0
                        : rightLookUp(prev, cumulativeHeights.current)
                );
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        cumulativeHeights.current = getCumulativeHeights();
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return { selectedTile, setSelectedTile };
};

export default useTiles;
