import React from 'react'
import './Nox.css'
import PictureCard from './PictureCard'

const Nox = () => {
  return (
    <div className='nox'>
      {/* <h2 className="Noix">Noixorgo</h2>
        <h3 className="Week">A weekly feed on nature </h3>
        <p className="para"> Noixorgo is a weekly segment released by the Eco Club every sunday, which gives an
            insight on different environmental matters that have transpired in that week.
            This is one of the oldest segments of the club and has been running for almost two years;
            educating and creating environmental awarness among it's readers.
            A group of dedicated members from this club compile a set of fun and informative articles every week to
            captivate viewers, compelling them to know more of what is happening around them.
            This segment not only aims to promote environmental awarness, but also hopes to bring about an interest
            among the people and allure them to know more about our Mother Earth.</p>
        <p className="cs"><strong> Coming Soon . . .</strong> </p>
        </div> */}

        <>
        <h2 className="Noix">Noixorgo</h2>
        <h3>
          <center>
            A weekly feed on nature

          </center></h3>

        {/* <!-- <hr> --> */}
          <p class="para"> Noixorgo is a weekly segment released by the Eco Club every sunday, which gives an
            insight on different environmental matters that have transpired in that week.
            This is one of the oldest segments of the club and has been running for almost two years;
            educating and creating environmental awarness among it's readers.
            A group of dedicated members from this club compile a set of fun and informative articles every week to
            captivate viewers, compelling them to know more of what is happening around them.
            This segment not only aims to promote environmental awarness, but also hopes to bring about an interest
            among the people and allure them to know more about our Mother Earth.</p>

          <div className="highlight my-5">
            {/* <img className='' src="https://picsum.photos/1800/700?nature" alt="" /> */}
            <PictureCard/>
          </div>
          <div className="imgs d-flex my-5 flex-wrap">
            <PictureCard/>
            <PictureCard/>
            <PictureCard/>
            <PictureCard/>
          </div>
            </>

     </div>
        )
}

        export default Nox
