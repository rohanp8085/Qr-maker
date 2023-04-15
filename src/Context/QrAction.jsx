export const getQr = async(topic) =>{
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${topic}`)
    // const data = await response.json()
    return response.url
    // console.log(response.url);

}