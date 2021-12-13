import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import newsApi from "../../api/newsApi";
import LoadingScreen from "../LoandingScreen";

const StyleBox = styled(Box)({
    // padding: '10px 255px',
    width: '900px',
    margin: '0 auto',
    backgroundColor: 'white',
    height: 'auto',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'colurmn',
    position: 'relative',
    zIndex: '100'
});

const StyleBoxContent = styled(Box)({
    display: 'flex',
    width: '900px',
    margin: '0 auto',
    paddingTop: '20px'
});

export default function NewsDetail() {

    const [news, setNews] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await newsApi.getNews(pathname.split('/').pop());
                const { news, prevNews, nextNews } = response
                setNews({
                    current: news,
                    prevNews,
                    nextNews
                });

            } catch (error) {
                console.log('Failed to get news: ', error);
            }
        }

        getNews();
    }, [pathname]);

    function handleClick(newsCurrent) {
        if (newsCurrent == null) {
            return `/news`
        }
        else {
            return `/news/${newsCurrent.slug}`
        }
    }

    return (
        <>
            {news && (
                <>
                    <StyleBox >
                        <img className="img-news-detail"
                            src={`${process.env.REACT_APP_IMAGE_URL}/${news.current.image}`}
                            alt={news.current.name}
                        />
                        <StyleBoxContent>
                            <Box sx={{ width: '100%'}}>
                                <Typography className="section-title" sx={{ fontWeight: '900' }} >
                                    {news.current.title}
                                </Typography>
                                <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D' }}>
                                    <div className="scrollbar scrollbar-detail" id="style-4">
                                        <div className="force-overflow"
                                            dangerouslySetInnerHTML={{ __html: `${news.current.description}` }}
                                        >
                                            
                                        </div>
                                    </div>
                                </Typography>
                            </Box>

                        </StyleBoxContent>
                    </StyleBox>
                    <div className='pagination'>
                        <a

                            href={handleClick(news.prevNews)}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </a>

                        <a

                            href={handleClick(news.nextNews)}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </>
            )}
            {!news && (<LoadingScreen />)}
        </>

    )
}