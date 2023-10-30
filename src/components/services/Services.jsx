// style
import './Services.css'
import { useState, useEffect } from 'react'

function Services() {
  const [services, setServices] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/services')

  console.log(services)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [url])

  return (
    <div className='container'>
      <div className="services center">
        <h1 className='services-title'>УСЛУГИ</h1>
        <div className='services-list'>
          {services &&
            services.map((service) => {
              return (
                <div className='service-box' key={service.id}>
                  <img src={service.img} alt="service-image" />
                  <div className='service-info'>
                  <h3 className='service-title'>{service.name}</h3>
                  <p className='service-description'>{service.description}</p>
                  <button className='btn service-btn'>Подробнее</button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Services
