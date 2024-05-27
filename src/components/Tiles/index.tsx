import { TILES } from "../../constants.ts";
import { Tile } from "./style.ts";
import useTiles from "../../hooks/useTiles.ts";
import Grid from "../Grid/index.tsx";

const HEIGHT = 40;
const Tiles = () => {
    const { selectedTile, setSelectedTile } = useTiles();

    return (
        <div>
            <Grid>
                {TILES.map((height: number, index) => {
                    return (
                        <Tile
                            isSelected={selectedTile === index}
                            height={`${height * HEIGHT}px`}
                            key={index}
                            onClick={() => setSelectedTile(index)}
                        >
                            {index}
                        </Tile>
                    );
                })}
            </Grid>
        </div>
    );
};
export default Tiles;
