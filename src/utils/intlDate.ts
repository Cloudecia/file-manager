import intlFormat from "date-fns/intlFormat"

function intlDate(timestamp) {
    return intlFormat(timestamp, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

}

export default intlDate