import React from 'react';
import DashJobSummary from '../DashJobSummary/DashJobSummary';
import DashResourceSummary from '../DashResourceSummary/DashResourceSummary';
import DashCompanySummary from '../DashCompanySummary/DashCompanySummary';
import DashContactSummary from '../DashContactSummary/DashContactSummary';
import DashEventSummary from '../DashEventSummary/DashEventSummary';
import './SummaryContainer.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
class SummaryContainer extends React.Component {
  render() {
    return (
      <div className="SummaryContainer">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={6}
        >
          <Slider>
            <Slide index={0}>
              <div className='summary-div'>
                <DashJobSummary section="APPLIED JOBS"/>
              </div>
            </Slide>
            <Slide index={1}>
              <div className='summary-div'>
                <DashJobSummary section="JOBS I LIKE"/>
              </div>
            </Slide>
            <Slide index={2}>
              <div className='summary-div'>
                <DashCompanySummary section="COMPANIES OF INTEREST" />
              </div>
            </Slide>
            <Slide index={3}>
              <div className='summary-div'>
                <DashContactSummary section="PROFESSIONAL CONTACTS" />
              </div>
            </Slide>
            <Slide index={4}>
              <div className='summary-div'>
                <DashEventSummary section="NETWORKING EVENTS" />
              </div>
            </Slide>
            <Slide index={5}>
              <div className='summary-div'>
              <DashResourceSummary section="USEFUL RESOURCES" />
              </div>
            </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    )
  }
}

export default SummaryContainer;