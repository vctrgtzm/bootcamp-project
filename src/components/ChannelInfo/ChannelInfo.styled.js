import styled from "styled-components";

export const ChannelInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 12px;
`;

export const ChannelThumbnail = styled.div`
    width: ${props => props.thumbnailSize};
    height: ${props => props.thumbnailSize};
    border-radius: 50%;
    background-color: ${props => props.theme.videoCards.thumbnailBackgroundColor};
    background-image: url(${props => props.thumbnail});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 12px;
`;

export const ChannelTitle = styled.p`
    font-size: 22px;
    font-weight: normal;
`;
