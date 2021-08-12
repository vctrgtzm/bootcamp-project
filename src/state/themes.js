const colors = {
    lightColors: {
        darker: '#ADB5BD',
        dark: '#DEE2E6',
        light: '#E9ECEF',
        lighter: '#F8F9FA'
    },
    darkColors: {
        darker: '#212529',
        dark: '#343A40',
        light: '#495057',
        lighter: '#6C757D'
    },
    blueColors: {
        dark: '#0096C7',
        light: '#00B4D8',
        lighter: '#48CAE4'
    }
}

export const themes = {
    light: {
        header: {
            backgroundColor: colors.lightColors.dark,
            searchInputBorderColor: colors.lightColors.darker,
            searchInputFocusBackgroundColor: colors.lightColors.light,
            avatarBackgroundColor: colors.blueColors.light,
            avatarIconColor: colors.blueColors.lighter
        },
        videoCards: {
            backgroundColor: colors.lightColors.lighter,
            backgroundColorHover: colors.lightColors.light,
            thumbnailBackgroundColor: colors.blueColors.lighter
        },
        body: {
            backgroundColor: colors.lightColors.light
        },
        fontColor: colors.darkColors.darker,
        fontColorHover: colors.darkColors.lighter,
        fontFam: 'Amatic SC',
        loadingIndicatorColor: colors.blueColors.light,
        placeholderColor: colors.darkColors.lighter,
    },
    dark: {
        header: {
            backgroundColor: colors.darkColors.darker,
            searchInputBorderColor: colors.darkColors.dark,
            searchInputFocusBackgroundColor: colors.darkColors.dark,
            avatarBackgroundColor: colors.blueColors.light,
            avatarIconColor: colors.blueColors.lighter
        },
        videoCards: {
            backgroundColor: colors.darkColors.darker,
            backgroundColorHover: colors.darkColors.dark,
            thumbnailBackgroundColor: colors.blueColors.lighter
        },
        body: {
            backgroundColor: colors.darkColors.dark
        },
        fontColor: colors.lightColors.light,
        fontColorHover: colors.lightColors.darker,
        fontFam: 'Amatic SC',
        loadingIndicatorColor: colors.blueColors.light,
        placeholderColor: colors.lightColors.darker,
    }
}
