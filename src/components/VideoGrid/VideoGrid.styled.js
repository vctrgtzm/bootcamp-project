import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 30px;
    row-gap: 20px;
    padding: 100px 30px 30px;

    @media(max-width: 768px){
        padding: 100px 10px 10px;
    }
`;
