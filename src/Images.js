import React, { useState, useEffect } from "react";
import Axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

export default function Images() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(30);

  useEffect(() => {
    Axios.get(
      `https://imageseeker.herokuapp.com/api/photos/?per_page=${count}&page=${page}`
    ).then(res => {
      console.log(res.data)
      setImages(images.concat(res.data));
    }).catch(err=>console.log(err));
  }, [page]);

  const fetchImages = () => setPage(page + 1);
  return (
    <div className="images">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {images.map(image => (
          <Image key={image.id} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
