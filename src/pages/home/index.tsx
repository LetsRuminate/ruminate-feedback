import Banner from './banner'
import Feedback from './feedback';
import Works from './how-it-works';
import Plans from './our-plans';
import Testimonials from './testimonials';

export default function Home() {
  return (
    <>
    <Banner/>
    {/* the below is the detail for yellow feedback section */}
    <Feedback/>
    {/* the below is the detail for green how-it-works section */}
    <Works/>
    {/* the below is the detail for blue our plans section */}
    <Plans/>
    {/* the below is the detail for yellow testimonials section */}
    <Testimonials/>
    </>
  );
}
