const formatStatsNumber = (stats: number) => {

    if (stats > 1000000000) {
        const dividedStats = (stats / 1000).toFixed(1);
        return `${dividedStats} M`
    }

    if (stats > 1000) {
        const dividedStats = (stats / 1000).toFixed(1);
        return `${dividedStats} K`
    }

    return stats;
}

export default formatStatsNumber;