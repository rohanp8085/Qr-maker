import React, { useContext, useEffect, useState } from 'react'
import QrContext from '../Context/QrContext'
import { getQr } from '../Context/QrAction'
import { BsDownload, BsQrCode } from "react-icons/bs";


const Card = () => {

  const { qrMaker, dispatch } = useContext(QrContext)

  const [text, setText] = useState("")


  const handleClick = async (e) => {
    e.preventDefault()
    const data = await getQr(text)
    console.log(data);
    dispatch({
      type: "GET_QR",
      payload: data
    })
    setText("")
  }


  // useEffect(()=>{
  //   handleClick()

  // },[])

  // if (!qrMaker || length === 0) {
  //   return (
  //     <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://https://github.com/rohanp8085/Qr-maker"  alt="" />
  //   )
  // }



  return (
    <form className='container ' onSubmit={(e) => handleClick(e)}>
      <h3 className='qr-maker'><BsQrCode className='qrimage' />QR MAKER</h3>
      <span>
        <input value={text} required type="text" placeholder='Enter your URL' onChange={(e) => setText(e.target.value)} />
        <p>Generate your Qr Code</p>
      </span>
      <div className='input-sec'>
        <div className='image-sec'>
          <img src={qrMaker}  alt="" />
          <a href="" className='down-btn' download={qrMaker}>download <BsDownload className='down-icon' /></a>
          <button className='submit-btn' > Submit</button>

        </div>
      </div>
    </form>
  )
}

export default Card

