// import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slide1.png'
import styles from './Carousel.css'
// import slide2 from '../images/slide2.png'
// import slide3 from '../images/slide3.png'

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img src={slide1} alt="" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={slide2} alt="" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={slide3} alt="" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;

function Carousel() {
  return (
    <div className="container">
      <section className="carousel">
        <div
          id="carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-text">
              <h1>Анализатор ABL800 FLEX</h1>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <button type="submit" class="btn btn-carousel">
                Подробнее
              </button>
            </div>
            <div className="carousel-item active">
              <img className="carousel-img" src={slide1} alt="" />
              <div className="carousel-item__decor"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Carousel
