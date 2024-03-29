import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Detail from "./Detail";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slide (movieName){
    const [animes, setAnimes] = useState([]);
    const [arr, setArr] = useState([]);
    const show= true;

    let list = []
    const handleClick = (image, title, type, url, time, description) => {
        list['image'] = image;
        list['title'] = title;
        list['type'] = type;
        list['url'] = url;
        list['time'] = time;
        list['description'] = description;
        list['show'] = show;
        setArr(list);
            console.log(12312312312313)
    };
    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime?q='+ movieName.movieName)
            .then(res => res.json())
            .then(anime => {
                setAnimes(anime.data)
            })
    }, [])
    return (
        <div className="list">
            <h2 className="title">{movieName.movieName}</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={5}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {animes.map((anime, index) => (
                    <SwiperSlide key={index}>
                        <div className="image"
                            onClick={() => handleClick(
                                anime.images.jpg.large_image_url,
                                anime.title,
                                anime.type,
                                anime.url,
                                anime.duration,
                                anime.synopsis
                            )}
                        >
                            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <Detail array={arr} />
            </div>
        </div>
    )
}
export default Slide;