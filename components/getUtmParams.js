const getUtmParams = () => {
    let utm = [];
    if (typeof window !== 'undefined') {
        const sessionStorage = window.sessionStorage;
        if (sessionStorage.getItem("from")) {
            utm.push(`utm_source=${encodeURIComponent(sessionStorage.getItem("from"))}`)
        }
        if (sessionStorage.getItem("medium")) {
            utm.push(`utm_medium=${encodeURIComponent(sessionStorage.getItem("medium"))}`)
        }
        if (sessionStorage.getItem("campaign")) {
            utm.push(`utm_campaign=${encodeURIComponent(sessionStorage.getItem("campaign"))}`)
        }
        if (sessionStorage.getItem("fbclid")) {
            utm.push(`fbclid=${encodeURIComponent(sessionStorage.getItem("fbclid"))}`)
        }
        return utm.join('&')
    }
}

export default getUtmParams;