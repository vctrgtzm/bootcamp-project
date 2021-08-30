
export function addToFavorites(item) {
    const user = JSON.parse(localStorage.getItem('user'));
    user.favoriteVideos.push(item);
    localStorage.setItem('user', JSON.stringify(user));
}

export function removeFromFavorites(item) {
    const user = JSON.parse(localStorage.getItem('user'));
    const idx = user.favoriteVideos.findIndex(x => x.id.videoId === item.id.videoId);
    if (idx > -1) {
        user.favoriteVideos.splice(idx, 1);
    }
    localStorage.setItem('user', JSON.stringify(user));
}

export function isInFavorites(item) {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user) return false;
    const idx = user.favoriteVideos.findIndex(x => x.id.videoId === item.id.videoId);
    if (idx > -1) {
        return true;
    }
    return false;
}
