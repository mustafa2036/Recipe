import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function News() {

  const [newSports, setNewsSports] = useState([])

  async function getNewsSport()
  {
    let {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=842a361439a443c68f2c38f7c8d21436`);
    setNewsSports(data.articles)
    // console.log(data.articles);
  }
  useEffect(() => {
    getNewsSport()
  } , [])

  return (
    <>
    <div className="row">
       {newSports.map((sport) => <div className='col-md-2'>
          <img className='w-100' src={sport.urlToImage} alt="" />
          <h3 className='h5 py-2'>{sport.title}</h3>
        </div> )}
    </div>
    </>
  )
}
