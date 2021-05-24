import React, { useState } from 'react';
//import TextField from '@material-ui/core/TextField';

// function Addproduct (){

//     const [name, setName] = useState("");
//     // const [price, setPrice] = useState("");
//     // const [stock, setStock] = useState("");
//     // const [description, setDescription] = useState("");
//     //const [image, setImage] = useState("");

//     // function handleChange(field){
//     //     field(e.target.value);
//     // }
    

//     function handleSubmit(event) {
//         event.preventDefault();
//         console.log(name);
//     }

//     return (
        
//         <form onSubmit={ handleSubmit } noValidate autoComplete="off">
//         <TextField onChange={ e => setName(e.target.value)} id="name" label="name" value={name} variant="outlined" />
//         {/* <TextField onChange={ setPrice(e.target.value) } id="price" label="price" variant="outlined" />
//         <TextField onChange={ setStock(e.target.value) } id="stock" label="stock" variant="outlined" />
//         <TextField onChange={ setDescription(e.target.value) } id="description" label="description" variant="outlined" /> */}
//         {/* <TextField id="image" label="image" variant="outlined" /> */}
//         {/* <button type="submit">Submit new product</button> */}
//         </form>
        

//     );
// };


// export default Addproduct;


  function AddProductForm(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleSubmit= (e) => {
      
      e.preventDefault();
      console.log(e.target.input.value);
    }
  
    return (
      <form onSubmit={e => {handleSubmit(e)}}>
        <label>Name</label>
        <br />
        <input 
          name='name' 
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <label>Price</label>
        <br />
        <input 
          name='price' 
          type='number'
          value={price} 
          onChange={e => setPrice(e.target.value)}
        />
        <br />
        <label>Stock</label>
        <br />
        <input
          name='stock' 
          type='number'
          value={stock}
          onChange={e => setStock(e.target.value)}
        />
        <br/>
        <input 
          className='submitButton'
          type='submit' 
          value='submit' 
        />
      </form>
    )
  }

  export default AddProductForm;



// class Addproduct extends Component{

//     return(
    
//     )

// }

// import { Divider } from '@material-ui/core';
// import React, { Component } from 'react';
// import '/App.css';
// import axios from 'axios';

//     state = {
//         selectedFile: null
//     }
//     fileSelectHandler = event => {
//         this.setState({
//             selectedFile: event.target.files[o]
//         })
//     }
//     fileUpLoadHandler = () =>{
//         const fd = new FormData();
//         fd. append('image', this.state.selectedFile, this.state.selectedFile.name )
//         .then(res => {
//             console.log(res);
//         });
//         axios.post('restapi endpoint url', fd);
//           onUploadProgress: progressEvent =>{
//               console.log('Upload Progress:' + Math.round(progressEvent.loaded / progressEvent.total *100) + '%')
//           }
//     }
    
//     render () {
//         return (
//             <div className="Addproduct">
//                 <input 
//                   style={{display: 'none'}} 
//                   type="file" 
//                   onChange={this.fileSelectHandler}
//                   ref={fileInput => this.fileInput = fileInput}
//                 />
//                 <button onClick={() => this.fileInput.click()}>Pick File</button>
//                 <button onClick={this.fileUploadHandler}>Upload</button>
//             </div>
            