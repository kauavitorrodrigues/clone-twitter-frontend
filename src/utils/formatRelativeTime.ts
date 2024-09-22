export const formatRelativeTime = ( date: Date ) => {

    const now = new Date()
    const diffInMilliSeconds = date.getTime() - now.getTime()

    type Unit = {
        unit: Intl.RelativeTimeFormatUnit;
        milliseconds: number;
    }

    const units: Unit[] = [

        { unit: "year", milliseconds: 1000 * 60 * 60 * 24 * 365.25 },
        { unit: "month", milliseconds: 1000 * 60 * 60 * 24 * 30.44 },
        { unit: "days", milliseconds: 1000 * 60 * 60 * 24 },
        { unit: "hour", milliseconds: 1000 * 60 * 60 },
        { unit: "minute", milliseconds: 1000 * 60 },
        { unit: "second", milliseconds: 1000 },
    
    ]

    for ( const { unit, milliseconds } of units ) {

        const difference = diffInMilliSeconds / milliseconds

        if ( Math.abs(difference) >= 1 ) {

            const relativeFormat = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" } )
            return relativeFormat.format( Math.round(difference), unit )

        }

    }

    return "agora"

}