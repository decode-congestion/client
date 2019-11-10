// Common global style values
export const fonts = {
    display: {
        family: 'Nunito', // Free alternative to Avenir, for now
        size: 20,

        small: {
            size: 16,
        }
    },
    
    text: {
        family: 'Montserrat',
        size: {
            giant: 36,
            large: 24,
            medium: 16,
            small: 15,
            sub_small: 12,
            tiny: 10
        }
    }
}

export const colors = {
    one: 'PaleTurquoise',
    two: 'salmon',
    three: 'lightskyblue',
    four: '#DBF3FF',
    five: 'khaki',
    six: 'mediumturquoise',
    white: '#F7FEFF',
}

export const borders = {
    radius: {
        light: 4,
        regular: 8,
        heavy: 16,
        pill: 20
    }
}

export const shadows = {
    color: '#000000',
    x: 0,
    y: 2,
    blur: 4,
    spread: 0
}

export default {
    fonts,
    colors,
    borders,
    shadows
}