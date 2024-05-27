import { COLS, TILES } from "./constants";

export interface CumulativeHeights {
    startIndex: number;
    endIndex: number;
}

export const getCumulativeHeights = () => {
    const arr = TILES.reduce(
        (acc: CumulativeHeights[], curr: number, index: number) => {
            if (acc.length < COLS) {
                return [...acc, { startIndex: 0, endIndex: curr }];
            }
            return [
                ...acc,
                {
                    startIndex: acc[index - COLS].endIndex,
                    endIndex: acc[index - COLS].endIndex + curr
                }
            ];
        },
        [] as CumulativeHeights[]
    );
    return arr;
};

export const leftLookUp = (
    tile: number,
    cumulativeHeights: CumulativeHeights[]
) => {
    let leftTile = tile - 1;
    if (
        cumulativeHeights[leftTile].endIndex <
        cumulativeHeights[tile].startIndex
    ) {
        while (leftTile + COLS < TILES.length) {
            leftTile += COLS;
            if (
                cumulativeHeights[leftTile].endIndex >=
                cumulativeHeights[tile].startIndex
            ) {
                break;
            }
        }
    } else if (
        cumulativeHeights[leftTile].startIndex >
        cumulativeHeights[tile].endIndex
    ) {
        while (leftTile - COLS >= 0) {
            leftTile -= COLS;
            if (
                cumulativeHeights[leftTile].startIndex <
                cumulativeHeights[tile].endIndex
            ) {
                break;
            }
        }
    } else {
        leftTile = tile - 1;
    }
    return leftTile;
};

export const rightLookUp = (
    tile: number,
    cumulativeHeights: CumulativeHeights[]
) => {
    let rightTile = tile + 1;
    if (
        cumulativeHeights[rightTile].endIndex <
        cumulativeHeights[tile].startIndex
    ) {
        while (rightTile + COLS < TILES.length) {
            rightTile += COLS;
            if (
                cumulativeHeights[rightTile].endIndex >=
                cumulativeHeights[tile].startIndex
            ) {
                break;
            }
        }
    } else if (
        cumulativeHeights[rightTile].startIndex >
        cumulativeHeights[tile].endIndex
    ) {
        while (rightTile - COLS >= 0) {
            rightTile -= COLS;
            if (
                cumulativeHeights[rightTile].startIndex <
                cumulativeHeights[tile].endIndex
            ) {
                break;
            }
        }
    } else {
        rightTile = tile + 1;
    }
    return rightTile;
};
