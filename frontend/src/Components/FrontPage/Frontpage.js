import React from 'react';
import Image from '../FrontPage/Image';

function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
  }

class Frontpage extends React.Component {
    render() {
      const mystyle = {
        marginBottom: "40px",
        fontFamily: "Poppins",
        fontSize: "25px",
        color: "#344B32",
      };

     
      return (
        <div style={mystyle}>
           
            <div style={{...padding(30, 0, 0, 0), 
                color: "black", 
                textAlign: "center", 
                background: "#b5a1a3",
                width: "100%",
                }}> 
                <p>Unique products from independent sellers from <b>Nordic</b></p>
                {/* <hr></hr>
                <p style={{fontSize: "20px", color: "white", paddingTop: "20px"}}><i>Find things you'll love ...</i></p>  */}
            </div>
            < Image />

        </div>
      );
    }
  }


export default Frontpage;

            