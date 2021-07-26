import styled from "styled-components";

export const VideoItemContainer = styled.div`    
border-radius: 10px;
overflow: hidden;
background-color: #f8f9fa;
font-family: 'Amatic SC', Arial;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
cursor: pointer;
color: #03045E;
transition: background-color .3s ease-out;

&:hover {
    background-color: #e9ecef;
}

&:hover > div {
    background-size: 120%;
}

& > h2{
    margin: 12px;
    letter-spacing: 1px;
}

& > p {
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 12px;

}
`;

export const ThumbnailContiner = styled.div`
min-height: 185px;
background-image: url(${props => props.thumbnail});
background-size: 110%;
background-repeat: no-repeat;
background-position: center;

transition: background-size .3s ease-out;
`;

