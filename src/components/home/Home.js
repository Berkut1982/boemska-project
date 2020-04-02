import React from 'react';
import carsService from '../../services/carsService';
import './home.scss';
import CarsList from '../carsList/CarsList';
import { Link } from 'react-router-dom';

// const carsImages = [
//   'https://www.uniquecarrentals.com.au/wp-content/uploads/2019/08/D68_4161.jpg',
//   'https://cars.mclaren.com/content/dam/mclaren-automotive/homepage/homepage-tiles/global/new-gt/New-GT-Homepage-Nov-1920x1080.jpg',
//   'https://redfoxluxurycarhire.com/assets/img/upload/car_images/1497275422.webp'
// ];

class Home extends React.PureComponent {
  state = {
    cars: []
  };
  getData = () => {
    const session = JSON.parse(localStorage.getItem('session'));
    const headers = {
      Authorization: `Bearer ${session.access_token}`
    };
    carsService
      .getData({ headers })
      .then(res => {
        this.setState({ cars: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  };
  removeCar = id => {
    console.log(id);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <section className='home-landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h1 className='large'>PUSH THE BUTTON, CHANGE THE CHANNEL</h1>
              <Link
                to='/carslist'
                className='btn btn-primary'
                onClick={this.getData}
              >
                LOAD CARS
              </Link>
              <CarsList cars={this.state.cars} />
            </div>
          </div>
          <div></div>
        </section>
      </div>
    );
  }
}

export default Home;
