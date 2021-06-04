import React from 'react';


class Imageurl extends React.Component {
    render() {
      const mystyle = {
        width: "100%",
        opacity: "0.9",
    

       
      };

     
    return (
        <div>
            <img style={mystyle} src={process.env.PUBLIC_URL + '/images/handmade.png'} alt="handmade" />
        </div>
        );
    }
  }


export default Imageurl;
