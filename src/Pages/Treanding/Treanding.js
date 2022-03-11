import React, { useEffect, useState } from 'react'
import "./Treanding.css"
import axios from 'axios'
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';

const Treanding = () => {
  const [page, setPage] = useState([1]);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumofpages] = useState();

  const FetchPopular = async () => {

    const { data } = await axios.get(`https://movie-task.vercel.app/api/popular?page=${page}`);
     
    
    setContent(data.data.results);
    setNumofpages(data.data.total_pages)

  };
  useEffect(() => {
    FetchPopular();
  }, [page]);

  return (
    <div>
      <span className='pageTitle'>Popular</span>
      <div className='trending'>
        {
          content && content.map((c) => (
            <SingleContent 
            key={c.id} 
            id={c.id} 
            poster={c.poster_path} 
            title={c.original_title} 
            date={c.release_date} 
            language={c.original_language}
            vote_average={c.vote_average}
        
            />
          ))
        }
      </div>
       <CustomPagination setPage={setPage}  />
    </div>
  )
}

export default Treanding
