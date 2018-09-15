import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SubmitAd.css';
import axios from 'axios';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';
import Login from '../Login/Login';


const catagory = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Motorbike" },
  { id: 3, name: "Animal" },
  { id: 4, name: "Laptop" },
  { id: 5, name: "Home" },
  { id: 6, name: "Furniture" },
  { id: 7, name: "Books" }
];


class SubmitAd extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)


    const date = new Date()
    const monthDate =  date.getDate();
    
    var months = ["January", "February", "March",
                   "April", "May", "June", "July",
                   "August", "September", "October",
                    "November", "December"];
    const monthName = months[date.getMonth()];
    const year = date.getFullYear()


    this.state = {
      userData: {
        email: '',
        product: '',
        phone: '',
        detail: '',
        price: '0',
        milliSeconds: new Date().getTime(),
        date: `${monthDate} ${monthName}, ${year}`,
        location: '',
        featured: false,
        catagory: '',
        name: '',
        profilePic: '',
        uniqueId: '',
        selectedFile: '',
        selectedFile1: '',
        selectedFile2: '',
        selectedFile3: ''

      },
      errors: {},

      displayImages: {
        image1: '',
        showImage1: false,
        image2: '',
        showImage2: false,
        image3: '',
        showImage3: false,
        image4: '',
        showImage4: false

      },
        redirect: false

    }

  }

  validate(data) {
    const errors = {};
    if (!data.email) errors.email = "This field can't be blank";
    if (!data.product) errors.product = "Product name is necessary";
    if (!data.phone) errors.phone = "This field can't be blank";
    if (!data.detail) errors.detail = "This field can't be blank";
    if (data.price <= 0) errors.price = "Please set the price for your product!";
    if (!data.location) errors.location = "Please enter your location";
    if (!data.catagory) errors.catagory = "Select Catagory for product";

    return errors;
  }

  

  handleSubmit(e) {
    e.preventDefault();
    
    const errors = this.validate(this.state.userData);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      const { selectedFile, selectedFile1, selectedFile2, selectedFile3, email, name, profilePic, product, phone,
        detail, price, location, catagory, featured, uniqueId, milliSeconds, date } = this.state.userData;

      let formData = new FormData();

      formData.append('email', email);
      formData.append('name', name);
      formData.append('profilePic', profilePic);
      formData.append('uniqueId', uniqueId);
      formData.append('product', product);
      formData.append('phone', phone);
      formData.append('milliSeconds', milliSeconds);
      formData.append('date', date);
      formData.append('detail', detail);
      formData.append('price', price);
      formData.append('location', location);
      formData.append('featured', featured);
      formData.append('catagory', catagory);
      formData.append('selectedFile', selectedFile);
      formData.append('selectedFile', selectedFile1);
      formData.append('selectedFile', selectedFile2);
      formData.append('selectedFile', selectedFile3);


      axios.post('/api/postAd', formData);
        
      this.setState({redirect: true});
      


    }
  }

  handleStringChange = e => {

    this.setState({ userData: { ...this.state.userData, [e.target.name]: e.target.value } });

  }
  handleNumberChange = e => {

    this.setState({ userData: { ...this.state.userData, [e.target.name]: parseInt(e.target.value, 10) } });

  }


  onChange = (e) => {


    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ userData: { ...this.state.userData, selectedFile: e.target.files[0], name: this.props.auth.name, profilePic: this.props.auth.profilePhoto, uniqueId: this.props.auth.googleId } });
        this.setState({ displayImages: { ...this.state.displayImages, image1: URL.createObjectURL(e.target.files[0]), showImage1: true  } });
        break;

      case 'selectedFile1':

        this.setState({ userData: { ...this.state.userData, selectedFile1: e.target.files[0] } });
        this.setState({ displayImages: { ...this.state.displayImages, image2: URL.createObjectURL(e.target.files[0]), showImage2: true } });
        break;
      case 'selectedFile2':
        this.setState({ userData: { ...this.state.userData, selectedFile2: e.target.files[0] } });
        this.setState({ displayImages: { ...this.state.displayImages, image3: URL.createObjectURL(e.target.files[0]), showImage3: true } });
        break;
      case 'selectedFile3':
        this.setState({ userData: { ...this.state.userData, selectedFile3: e.target.files[0] } });
        this.setState({ displayImages: { ...this.state.displayImages, image4: URL.createObjectURL(e.target.files[0]), showImage4: true } });
        break;
      default:
        return undefined;

    }

  }

  handleCheckBoxChange = () => {
    this.setState({userData: {...this.state.userData, featured: !this.state.userData.featured }})
console.log(this.state.userData);
  }

  render() {
    let { userData, errors, displayImages, redirect } = this.state;
   
    return (

      this.props.auth ? (

        <div style={{ marginTop: '120px' }} className="form-container" >
        <h1> Fill the form to Submit Ad.</h1>

        <form className="ui form"
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
          method='POST'
        >
         {redirect && this.props.history.push("/") }
        
          <div className={errors.email ? "field error" : "field"}>

            <label htmlFor="name">Email Address</label>

            <input

              type="email"
              name='email'
              placeholder="youremail@demo.com"
              value={userData.email}
              onChange={this.handleStringChange} />

            <FormErrorMessage content={errors.email} type="error" />

          </div>

          <div className={errors.productName ? "field error" : "field"}>

            <label htmlFor="ptoduct-name">Product name (With Model)</label>

            <input

              type="text"
              name='product'
              placeholder="Product Name (Model Number)"
              value={userData.product}
              onChange={this.handleStringChange} />

            <FormErrorMessage content={errors.email} type="error" />

          </div>

          <div className={errors.detail ? "field error" : "field"}>
            <label htmlFor='description'>Tell about your product</label>

            <textarea
              rows="3"
              type="text"
              name="detail"
              placeholder="Product Description"
              value={userData.detail}
              onChange={this.handleStringChange} />
            <FormErrorMessage content={errors.detail} type="error" />

          </div>

          <div className="three fields">
            <div className={errors.price ? "field error" : "field"}>
              <label>Price (in Rs.)</label>

              <input type="number"
                name="price"
                value={userData.price}
                onChange={this.handleNumberChange} />
              <FormErrorMessage content={errors.price} type="error" />

            </div>

            <div className={errors.phone ? "field error" : "field"}>
              <label>Phone #</label>

              <input
                placeholder="03xxxxxxxxx"
                type="number"
                name="phone"
                onChange={this.handleNumberChange}
                value={userData.phone} />
              <FormErrorMessage content={errors.phone} type="error" />

            </div>
            <div className={errors.location ? "field error" : "field"}>

              <label>Location</label>

              <input
                type="text"
                name="location"
                value={userData.location}
                onChange={this.handleStringChange}
                placeholder="City name"
              />
              <FormErrorMessage content={errors.location} type="error" />

            </div>
          </div>

          <div className={errors.catagory ? "field error" : "field"}>

            <label>Catagories</label>

            <select
              name="catagory"
              value={userData.catagory}
              onChange={this.handleNumberChange}
            >

              <option value="0">Choose Catagory</option>
              {
                catagory.map(item => <option value={item.id} key={item.id}>{item.name}</option>)
              }

            </select>
          </div>
          <FormErrorMessage content={errors.catagory} type="error" />


{/* // {/*  ================================================================ */}

                  <div className="inline-field">


              <input
                type="checkbox"
                name="featured"
                checked={userData.featured}
                onChange={this.handleCheckBoxChange}
                placeholder="City name"
                />
                <label htmlFor="featured">Featured</label>

            </div>

{ /* ======================================================================*/}


          <div className="upload-image-btn">
            <p style={{ fontWeight: 'bold' }}>Add clear Pictures of your product</p>
            <input type="file" name="selectedFile" onChange={this.onChange} />
            <input type="file" name="selectedFile1" onChange={this.onChange} />
            <input type="file" name="selectedFile2" onChange={this.onChange} />
            <input type="file" name="selectedFile3" onChange={this.onChange} />
          </div>

          <div className="ui small images" style={{ marginLeft: '15%', marginRight: '15%', marginTop: '25px' }}>
            <img alt="img-1" className="ui image" src={displayImages.showImage1 ? displayImages.image1 : 'https://semantic-ui.com/images/wireframe/image.png'} />
            <img alt="img-2" className="ui image" src={displayImages.showImage2 ? displayImages.image2 : 'https://semantic-ui.com/images/wireframe/image.png'} />
            <img alt="img-3" className="ui image" src={displayImages.showImage3 ? displayImages.image3 : 'https://semantic-ui.com/images/wireframe/image.png'} />
            <img alt="img-4" className="ui image" src={displayImages.showImage4 ? displayImages.image4 : 'https://semantic-ui.com/images/wireframe/image.png'} />
          </div>

          <div className="submit-btn">
            <div> <button className="massive ui positive button" type="submit">
              <FontAwesomeIcon icon="paper-plane" /><span style={{ marginLeft: '5px' }}>Submit</span>

            </button></div>

          </div>
        </form>

      </div>
      ) : (
        <div>
          <Login />
        </div>
      )

    );
  }
}

const mapStateToProps = ({ auth }) => {

  return { auth }

}

export default connect(mapStateToProps)(SubmitAd);