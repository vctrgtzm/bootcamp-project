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
            searchInputBorderColor: colors.lightColors.dark,
            searchInputFocusBackgroundColor: colors.lightColors.light,
            avatarBackgroundColor: colors.blueColors.light,
            avatarIconColor: colors.blueColors.lighter
        },
        videoCards: {
            backgroundColor: colors.lightColors.lighter,
            backGroundColorHover: colors.lightColors.light
        },
        body: {
            backgroundColor: colors.lightColors.light
        },
        fontColor: colors.darkColors.darker,
        fontColorHover: colors.darkColors.dark,
        loadingIndicator: colors.blueColors.light
    },
    dark: {

    }
}
