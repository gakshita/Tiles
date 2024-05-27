import { cloneElement } from "react";
import { Column, Row } from "./style";
import { COLS } from "../../constants";

interface GridProps {
    children: any;
}
const Grid: React.FC<GridProps> = ({ children }) => {
    const columnCount = COLS;
    const cols = [...Array(columnCount).keys()];
    const rows = [...Array(Math.ceil(children.length / columnCount)).keys()];
    return (
        <Row>
            {cols.map((col: number, index: number) => (
                <Column key={index}>
                    {rows.map((row: number) => {
                        return (
                            children[row * columnCount + col] &&
                            cloneElement(
                                children[row * columnCount + col] || "div"
                            )
                        );
                    })}
                </Column>
            ))}
        </Row>
    );
};

export default Grid;
