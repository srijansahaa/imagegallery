import React, {useState, useRef} from 'react';
import axios from 'axios';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-tabs/style/react-tabs.css';

// 7g1B7yQsWu8D2Eqbab4IxEyF4Q4x3ULO9gv0mz9oNmw

// class Images extends Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         results: []
//     //     }
//     //     this.fetchImages = this.fetchImages.bind(this)
//     // }
//     const[results, setResults] = useState([])

//     fetchImages = ()=>{
//         fetch(`https://api.unsplash.com/collections/1580860/photos?client_id=7g1B7yQsWu8D2Eqbab4IxEyF4Q4x3ULO9gv0mz9oNmw`)
//         .then(res=>res.json())
//         .then(data=>{
//             // console.log(data)
//             this.setState = {
//                 results: [data.results]
//             }
//         })
//     }

//     render() {
//         return (
//             <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
//                 <TabList>
//                     <Tab>Title1</Tab>
//                     <Tab>Title2</Tab>
//                 </TabList>
//                 <TabPanel>
//                     <button onClick={()=>this.fetchImages()}>Show Images</button>
//                     <div>
//                         {results.map((item)=>{
//                             return <img src={item.urls.regular}/>
//                         })}
//                     </div>
//                 </TabPanel>
//                 <TabPanel>Text for 2</TabPanel>
//             </Tabs>
//         );
//     }
// }

function Images() {

    const [images, setImages] = React.useState([]);
    const [images1, setImages1] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);
    const [loaded1, setIsLoaded1] = React.useState(false);

    // const[results1, setResults1] = useState([])

    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "{input access key here}";
    
        axios
          .get(`https://api.unsplash.com/collections/1580860/photos?client_id=7g1B7yQsWu8D2Eqbab4IxEyF4Q4x3ULO9gv0mz9oNmw&orientation=squarish&per_page=999`)
          .then (res => {
            setImages([...images, ...res.data]);
            setIsLoaded(true);
          });
    };

    const fetchImages1 = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "{input access key here}";
    
        axios
          .get(`https://api.unsplash.com/collections/139386/photos?client_id=7g1B7yQsWu8D2Eqbab4IxEyF4Q4x3ULO9gv0mz9oNmw&orientation=squarish&per_page=999`)
          .then (res => {
            setImages1([...images1, ...res.data]);
            setIsLoaded1(true);
          });
    };

    const UnsplashImage = ({ url, key }) => (
        <div className="image-item" key={key} >
          <img src={url} />
        </div>
      );

      React.useEffect(() => {
        fetchImages();
        fetchImages1();
    }, []);

    // const fetchImages1 = ()=>{
    //     fetch(`https://api.unsplash.com/collections/139386/photos?client_id=7g1B7yQsWu8D2Eqbab4IxEyF4Q4x3ULO9gv0mz9oNmw&orientation=squarish&per_page=999`)
    //     .then(res1=>res1.json())
    //     .then(data1=>{
    //         console.log(data1)
    //         setResults1(data1)
    //     })
    // }

    return (
        <Tabs defaultIndex={0} onSelect={index => console.log(index)} style={{backgroundColor: "#F7F7F7"}}>
            <TabList style={{paddingLeft: "300px", border: "0px"}}>
                <Tab style={{fontSize: "20px",  padding: "20px", fontWeight: 600, border: "0px", backgroundColor: "white"}}>Trending</Tab>
                <Tab style={{fontSize: "20px",  padding: "20px", fontWeight: 600, border: "0px", paddingLeft: "20px"}}>New</Tab>
            </TabList>
            <TabPanel style={{backgroundColor: "white"}}>
                {fetchImages()}
                <InfiniteScroll
                    className="image-gallery"
                    dataLength={images}
                    next={() => fetchImages(5)}
                    hasMore={true}
                    loader={
                    <img
                        className="final-iamges"
                        src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                        alt="loading"
                    />}
                >
                <div className="image-grid" style={{ marginTop: "30px" }}>
                    {loaded ?
                        images.map((image, index) => (
                            <UnsplashImage url={image.urls.regular} key={index} />
                        )): ""}
                </div>
        </InfiniteScroll>
            </TabPanel>
            <TabPanel>
            {fetchImages1()}
                <InfiniteScroll
                    className="image-gallery"
                    dataLength={images1}
                    next={() => fetchImages1(5)}
                    hasMore={true}
                    loader={
                    <img
                        className="final-iamges"
                        src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                        alt="loading"
                    />}
                >
                <div className="image-grid" style={{ marginTop: "30px" }}>
                    {loaded1 ?
                        images.map((image, index) => (
                            <UnsplashImage url={image.urls.regular} key={index} />
                        )): ""}
                </div>
        </InfiniteScroll>
            </TabPanel>
        </Tabs>
    );
}

export default Images