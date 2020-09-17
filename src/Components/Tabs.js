import React, {useState, useRef} from 'react';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
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

    const[results, setResults] = useState([])
    const[results1, setResults1] = useState([])

    const fetchImages = ()=>{
        fetch(`https://api.unsplash.com/collections/1580860/photos?client_id=7g1B7yQsWu8D2Eqbab4IxEyF4Q4x3ULO9gv0mz9oNmw&orientation=squarish&per_page=999`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setResults(data)
        })
    }

    const fetchImages1 = ()=>{
        fetch(`https://api.unsplash.com/collections/139386/photos?client_id=7g1B7yQsWu8D2Eqbab4IxEyF4Q4x3ULO9gv0mz9oNmw&orientation=squarish&per_page=999`)
        .then(res1=>res1.json())
        .then(data1=>{
            console.log(data1)
            setResults1(data1)
        })
    }

    return (
        <Tabs defaultIndex={0} onSelect={index => console.log(index)} style={{backgroundColor: "#F7F7F7"}}>
            <TabList style={{paddingLeft: "300px", border: "0px"}}>
                <Tab style={{fontSize: "20px",  padding: "20px", fontWeight: 600, border: "0px"}}>Title1</Tab>
                <Tab style={{fontSize: "20px",  padding: "20px", fontWeight: 600, border: "0px", paddingLeft: "20px"}}>Title2</Tab>
            </TabList>
            <TabPanel>
                {fetchImages()}
                <div className="image-gallery" style={{maxWidth: "70%", margin: "auto", backgroundColor: "white"}}>
                    {results.map((item)=>{
                        return (
                        <img className="final-iamges" key={item.id} src={item.urls.regular}/>
                        )
                    })}
                </div>
            </TabPanel>
            <TabPanel>
            {fetchImages1()}
                <div className="image-gallery" style={{maxWidth: "70%", margin: "auto", backgroundColor: "white"}}>
                    {results1.map((item1)=>{
                        return <img className="final-iamges" key={item1.id} src={item1.urls.regular}/>
                    })}
                </div>
            </TabPanel>
        </Tabs>
    );
}

export default Images