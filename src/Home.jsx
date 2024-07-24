import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='header'><b>REACT PROJECT</b></div><br />
      <div className='intro'>DATE-24/07/24
        <div>Himanshu Verma</div>
      </div><br />

      <div className='topic'><b><u><marquee scrollamount="13" direction="right">SUMMARY OF PROJECT</marquee></u></b></div><br />
      <div className='basic'>This Project Is Based On HTML,CSS,JS,REACT. In This Project We Will Discuss About The Three HandOn Of React That We Have Learned In Our Intrenship Journey.Their Feature And Functionality And How It Works. These Are The Three HandOn Of This Project</div><br />
      <ol className='list'>
        <li>(1) ROUTER</li>
        <li>(2) COUNTER</li>
        <li>(3) FEEDBACK FORM</li>
      </ol><br />

      <div className='basic'><u>Router</u>:- In the application, React Router Is Utilized To Define Various Routes. When A User Enters A URL Into Your Browser And The URL Route Equals One Of Several 'Pathways' As In The Router Folder, The User Is Sent To That Route</div><br />

      <div className='basic'><u>Counter</u>:- In counter We Import React And The useState Hook To Manage The Count State Within Our Counter Component. The useState Hook Is Initialized With An Initial Count Of 0.We Can Then Define Functions For Incrementing, Decrementing The Count</div><br />

      <div className='basic'><u>Feedback Form</u>:- In This HansOn We Use Four Use State Hooks Name,Apply,Rating,Data.To Store And Render The Data On Web.When A User Input The Data In The Input Tag And The Submit. The Entered Data Will We Shown On The Browser Page.</div>



    </div>
  )
}

export default Home
