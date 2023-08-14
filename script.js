const entities = [
    {
      city: 'Rostov-on-Don LCD admiral',
      area: '81 m2',
      time: '3.5 months',
      img: 'https://i.ibb.co/31s6rP5/image-1.png'
    },
    {
      city: 'Sochi Thieves',
      area: '105 m2',
      time: '4 months',
      img: 'https://i.ibb.co/jD0H0Nb/image-2.png'
    },
    {
      city: 'Rostov-on-Don Patriotic',
      area: '93 m2',
      time: '3 months',
      img: 'https://i.ibb.co/bQbkBVm/image-3.png'
    }
  ];
  
  const city = document.querySelector('.description_city');
  const area = document.querySelector('.description_area');
  const time = document.querySelector('.description_time');
  const img = document.querySelector('.image');
  const indicators = document.querySelectorAll('.slider_block_indicator');
  const links = document.querySelectorAll('.link');
  
  const setEntity = (index) => {
    index = (index + entities.length) % entities.length;
  
    city.innerText = entities[index].city;
    area.innerText = entities[index].area;
    time.innerText = entities[index].time;
    img.style.backgroundImage = `url(${entities[index].img})`;

    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add('slider_block_indicator_active');
      } else {
        indicator.classList.remove('slider_block_indicator_active');
      }
    });

    links.forEach((link, i) => {
    if (i === index) {
      link.classList.add('link-active');
    } else {
    link.classList.remove('link-active');
    }
  });
};
  
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0;
  
  prev.addEventListener('click', () => {
    currentIndex -= 1;
    setEntity(currentIndex);
  });
  
  next.addEventListener('click', () => {
    currentIndex += 1;
    setEntity(currentIndex);
  });
  
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      currentIndex = i;
      setEntity(currentIndex);
    });
  });
  
  links.forEach((link, i) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      currentIndex = i;
      setEntity(currentIndex);
    });
  });
  setEntity(0); 