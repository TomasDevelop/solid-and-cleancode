interface PayAmount {
    isDead: boolean,
    isSeparated: boolean,
    isRetired: boolean
}

const getPayAmount = ({ isDead, isSeparated, isRetired }: PayAmount): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return (isRetired) ? 3000 : 4000;
}   