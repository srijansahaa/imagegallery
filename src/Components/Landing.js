import React, { Component } from 'react';

class Landing extends Component {
    render() {
//         return <div className="container-fluid">
//         <div className="row row-1">
//             {/* <h1 className="landing-head">Unsplash</h1> <br></br>
//             <p className="landing-description">
//                 Beatiful, free photos, <br/>
//                 Gifted by the world's most generous community of photographer.
//             </p> <br></br>
//             <div className="input-group">
//                 <input type="text" className="form-control">
//                 </input>
//                 <div class="input-group-append">
//     <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
//   </div>
//             </div> */}
//         </div>
//       </div> 
return <div className="row-1">
    <h1 className="landing-head">Unsplash</h1>
    <p className="landing-description">
    Beatiful, free photos, <br/>
    Gifted by the world's most generous community of photographer.
    </p>
    <div className="input-group search-bar">
  <input type="text" className="form-control" placeholder="Search for high-resolution images"/>
  <div className="input-group-append">
  <button type="button" class="btn btn-dark">Search</button>
  </div> 
</div>
<p className="landing-description2">Trending searches: buisness, love, rocks etc.</p>
</div>
    }
}

export default Landing