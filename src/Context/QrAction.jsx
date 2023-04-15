export const getQr = async(topic) =>{
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://${topic}`)
    // const data = await response.json()
    return response.url
}