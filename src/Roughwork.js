

To use `react-responsive-carousel` to implement slides that automatically start again from the first picture when it reaches the last picture in the carousel, you can modify the code as follows:

1. Create a state variable to keep track of the current slide index and the total number of slides:

```jsx
const [currentSlide, setCurrentSlide] = useState(0);
const [totalSlides, setTotalSlides] = useState(0);
```

2. Use the `Carousel` component and pass in the necessary props:

```jsx
<Carousel
  autoPlay={true}
  interval={3000}
  showArrows={false}
  showStatus={false}
  showThumbs={false}
  onChange={(index) => setCurrentSlide(index)}
  selectedItem={currentSlide}
  onClickItem={(index) => setCurrentSlide(index)}
  onInit={() => setTotalSlides(carouselItems.length)}
>
  {carouselItems.map((item, index) => (
    <div key={index}>
      <img src={item.image} alt={item.caption} />
    </div>
  ))}
</Carousel>
```

In the above code, we're using the `carouselItems` array to render the carousel items dynamically. We're setting the `autoPlay` prop to `true` to enable automatic sliding, and the `interval` prop to `3000` to set the slide duration to 3 seconds. We're also hiding the arrows, status, and thumbs using the `showArrows`, `showStatus`, and `showThumbs` props. We're tracking the current slide index using the `onChange` and `selectedItem` props, and we're setting the total number of slides using the `onInit` prop.

3. Add a `useEffect` hook to automatically reset the slide index to 0 when it reaches the last slide:

```jsx
useEffect(() => {
  if (currentSlide === totalSlides - 1) {
    setTimeout(() => setCurrentSlide(0), 3000);
  }
}, [currentSlide, totalSlides]);
```

In the above code, we're using the `useEffect` hook to check if the current slide index is equal to the total number of slides minus 1 (i.e., the last slide). If it is, we're using `setTimeout` to wait for 3 seconds (the same duration as the slide interval) before resetting the slide index to 0.

That's it! You now have a carousel that automatically starts again from the first picture when it reaches the last picture using `react-responsive-carousel`.



*******************************************************************


To use `react-responsive-carousel` to implement a carousel that slides automatically, you can follow these steps:

1. Install the `react-responsive-carousel` package using npm or yarn:

```
npm install react-responsive-carousel
```

2. Import the necessary components from `react-responsive-carousel`:

```jsx
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
```

3. Create a state variable to keep track of the current slide index:

```jsx
const [currentSlide, setCurrentSlide] = useState(0);
```

4. Use the `Carousel` component and pass in the necessary props:

```jsx
<Carousel
  autoPlay={true}
  interval={3000}
  showArrows={false}
  showStatus={false}
  showThumbs={false}
  onChange={(index) => setCurrentSlide(index)}
  selectedItem={currentSlide}
>
  <div>
    <img src="https://picsum.photos/800/600?img=1" alt="carousel item 1" />
  </div>
  <div>
    <img src="https://picsum.photos/800/600?img=2" alt="carousel item 2" />
  </div>
  <div>
    <img src="https://picsum.photos/800/600?img=3" alt="carousel item 3" />
  </div>
</Carousel>
```

In the above code, we're setting the `autoPlay` prop to `true` to enable automatic sliding, and the `interval` prop to `3000` to set the slide duration to 3 seconds. We're also hiding the arrows, status, and thumbs using the `showArrows`, `showStatus`, and `showThumbs` props. We're tracking the current slide index using the `onChange` and `selectedItem` props.

5. Style the carousel as desired using CSS.

That's it! You now have a carousel that slides automatically using `react-responsive-carousel`.
function Basic() {
  return (
    <div class="content_body_inner_2">
      <p>
        <strong>The IHCMC 2023 will take place in an around&nbsp;</strong>
        <strong>
          2478 Pegasus Rd NE, Calgary, AB T2E 8G8, Canada
          <br />
        </strong>
      </p>
      <p>
        <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/images/39549046/huge/venuev.png" />
      </p>
      <p>
        <strong>
          <br />
        </strong>
      </p>
      <p>
        <br />
      </p>
      <p>
        Calgary International Airport, branded as YYC Calgary International
        Airport, is an international airport that serves the city of Calgary,
        Alberta, Canada. It is located approximately 17 km northeast of downtown
        and covers an area of 21.36 km².
        <br />
      </p>
      <p>
        <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/images/25387263/huge/images.jpg" />
      </p>
      <p>
        The Calgary International Airport is the closest airport to the
        conference venue.
        <br />
        CALGARY AIRPORT SHUTTLE SERVICE
      </p>
      <p>
        Allied Airport Shuttle has the largest fleet of vehicles in the greater
        Calgary and surrounding area to meet any transportation need. They have
        over 40 years of experience providing quality service to the public,
        business community, schools and sports teams with safe, clean and
        professionally-driven vehicles.
      </p>
      <p>
        Allied Airport Shuttle provides affordable, regularly scheduled
        transportation, in fully automated GPS dispatched shuttle buses, between
        designated points within the City of Calgary and the Calgary
        International Airport.&nbsp;
        <br />
      </p>
      <p>
        <img src="https://dk-media.s3.amazonaws.com/media/1vjrh/images/25387326/huge/Transit_1.png" />
      </p>
      <p>
        Delegates who notify the organizers of their itinerary not later than
        March 25, 2023 can benefit from the international delegate airport
        <br />
        pickup from the Calgary International Airport to designated hotels
        booked through the organizers.
      </p>
      <p>
        <br />
      </p>
      <p>
        <strong>Accommodation</strong>
      </p>
      <p>
        We encourage you to book your accommodation as early as possible. The
        conference dates are within the high peak season and therefore rooms
        will be limited unless you book early. We recommend booking your
        accommodation before March 25, 2023.
      </p>
      <p>
        <strong>Options for accommodation</strong>
      </p>
      <p>
        Options for low-cost accommodation for the dates of the conference are
        limited. If you require accommodation please contact the organizers
      </p>
      <p>
        There are a number of hotels in close proximity to the event venue
        <br />
      </p>
      <p>
        &nbsp;Delta Bow Valley - 209-4th Avenue Southeast Calgary, AB (403)
        266-1980
      </p>
      <p>
        {" "}
        International Hotel Suites - 220 4 Avenue Southwest Calgary, AB (403)
        265-9600
      </p>
      <p>
        {" "}
        The Westin Calgary - 320 4 Avenue Southwest Calgary, AB (403) 266-1611
      </p>
      <p>
        {" "}
        Sheraton Suites Calgary - 255 Barclay Parade Southwest Calgary, AB (403)
        266-7200
      </p>
      <p>
        {" "}
        Regency Suites Calgary - 610 4th Avenue SW Calgary, AB T2P 0K1 (403)
        231-1000
      </p>
      <p>
        Sandman Hotel Downtown - 888 7 Avenue Southwest, Calgary (403) 237-8626
        <br />
      </p>
      <p>
        {" "}
        Holiday Inn Express Downtown - 1020 8th Ave SW, Calgary (403) 269-8262
      </p>
      <p>
        Best Western Downtown - 1330 8th St SW Calgary, AB (403) 228-6900
        <br />
      </p>
      <p> Nuvo Hotel - 827 12 Ave SW Calgary, AB</p>
      <p>
        {" "}
        Hilton Garden Inn Calgary Downtown - 711 4th St. S.E., Calgary, AB,
        (587) 352-2020
      </p>
      <p>
        <br />
      </p>
    </div>
  );
}

export default Basic;

