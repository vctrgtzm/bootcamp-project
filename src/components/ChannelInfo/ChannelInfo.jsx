
import { ChannelInfoContainer, ChannelThumbnail, ChannelTitle } from "./ChannelInfo.styled";

const ChannelInfo = ({ thumbnail, title, thumbnailSize, style }) => {
    return (
        <ChannelInfoContainer style={style}>
            <ChannelThumbnail
                thumbnail={thumbnail}
                thumbnailSize={thumbnailSize ?? '35px'}
            />
            <ChannelTitle>{title}</ChannelTitle>
        </ChannelInfoContainer>
    );
}

export default ChannelInfo;
