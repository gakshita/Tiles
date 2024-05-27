import styled from "styled-components";
interface TileProps {
    height: string;
    isSelected: boolean;
}
const Tile = styled.div<TileProps>`
    height: ${(props) => props.height};
    display: flex;
    font-size: 18px;
    // padding: 20px;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
    background-color: ${(props) =>
        props.isSelected ? "lightblue" : "#f6f6f6"};
`;
export { Tile };
