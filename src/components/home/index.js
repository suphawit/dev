import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import './index.scss';

function Home() {
    const style = {
        height: 30,
        border: "1px solid green",
        margin: 6,
        padding: 8
      };
    const [items, setItems] = useState(Array.from({ length: 20 }));

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setItems(
                [
                    ...items,
                    ...Array.from({ length: 20 })
                ]
            );
        }, 1500);
    };
    return (
        <div className="home">
            <h1>My instagram</h1>
            <ul className="my-friend">
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
                <li className="friend">
                    <Image src="https://api.kwelo.com/v1/media/identicon/suphawit007@hotmail.com" roundedCircle/>
                    <p className="text">Mr. wit</p>
                </li>
            </ul>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }>
                {
                    items.map((i, index) => (
                        <div style={style} key={index}>
                            div - #{index}
                        </div>
                    ))
                }
</InfiniteScroll>

        </div>
    )
}

export default Home;
