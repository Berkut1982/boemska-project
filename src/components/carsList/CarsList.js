import React from 'react';

const carsImages = [
  'https://www.uniquecarrentals.com.au/wp-content/uploads/2019/08/D68_4161.jpg',
  'https://cars.mclaren.com/content/dam/mclaren-automotive/homepage/homepage-tiles/global/new-gt/New-GT-Homepage-Nov-1920x1080.jpg',
  'https://redfoxluxurycarhire.com/assets/img/upload/car_images/1497275422.webp'
];

const CarsList = props => {
  return (
    <>
      {props.cars.map((car, i) => {
        return <img className='auto' key={car.name} src={carsImages[i % 3]} />;
      })}
    </>
  );
};

export default CarsList;
