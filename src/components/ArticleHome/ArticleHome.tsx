import React from "react";
import { Link, useParams } from "react-router-dom";
interface Iprops {
  id: number;
  title: string;
  body: string;
  tags: [string];
}

const ArticleHome = ({ id, title, body, tags }: Iprops) => {
  return (
    <article className='col-12 col-md-6 bm-post'>
      <hr className='bm-hr-primary' />
      <Link to={`/posts/${id}`} className='effect-lily bm-post-link bm-pt-60'>
        <div className='bm-post-link-inner'>
          <img src='img/img-01.jpg' alt='Image' className='img-fluid' />
        </div>
        {/* <span className='position-absolute bm-new-badge'>New</span> */}
        <h2 className='bm-pt-30 bm-color-primary bm-post-title'>{title}</h2>
      </Link>
      <p className='bm-pt-30'>{body}</p>
      <div className='d-flex justify-content-between bm-pt-45'>
        <span className='bm-color-primary'>{tags[0]}</span>
        {/* <span className='bm-color-primary'>June 24, 2020</span> */}
      </div>
      <hr />
      {/* <div className='d-flex justify-content-between'>
        <span>36 comments</span>
        <span>by Admin Nat</span>
      </div> */}
    </article>
  );
};

export default ArticleHome;
