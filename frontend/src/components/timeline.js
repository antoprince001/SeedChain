import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Timeline extends Component{
    render()
    {
        return (
            <div background-colour = "#c8e6c9">
                <h1>
                    <center> Track your seed here </center>
                </h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c8e6c9', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="SG"
    iconStyle={{ background: '#388e3c', color: '#fff' }}
  >
      <center>
      <h1 className="vertical-timeline-element-title"> Seed Grower</h1>
      </center>
   <center>
   <img src="https://merriam-webster.com/assets/ld/word_of_the_day/images/2777/large.jpg" width="150px" height="150px"
   />
   <h2>
        Owner: <br/>
        Crop: <br/>
        Variety <br/>
        Source Location <br/>
    </h2>
   </center>

  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c8e6c9', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="SPA"
    iconStyle={{ background: '#388e3c', color: '#fff' }}
  >
      <center>
      <h1 className="vertical-timeline-element-title">Seed Processing Agency </h1>
      </center>
   <center>
   <img src="https://s-media-cache-ak0.pinimg.com/originals/37/60/c8/3760c85ec21e6a1a99b55e73d3eb9c62.jpg" width="150px" height="150px"
    style={{ borderRadius : '5px!important'}}/> <br/>
    <h2>
    processing Date: <br/>
    SPA name: <br/>
    </h2>

       </center>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c8e6c9', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="SCA"
    iconStyle={{ background: '#388e3c', color: '#fff' }}
  >
      <center>
      <h1 className="vertical-timeline-element-title"> Seed Certification Agency </h1>
      </center>
   <center>
   <img src="https://previews.123rf.com/images/arcady31/arcady311812/arcady31181200160/114186200-certified-vector-stamp.jpg" width="150px" height="150px"
    style={{ borderRadius : '5px!important'}}/>
       </center>
       <br/>
       <h2>
       Certificate Number <br/>
       Date of issue <br/>
       Certificated Agency <br/>
       </h2>

  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#c8e6c9', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="STL"
    iconStyle={{ background: '#388e3c', color: '#fff' }}
  >
      <center>
      <h1 className="vertical-timeline-element-title"> Seed Testing Lab: </h1>
      </center>

   <img src="https://www.nova-seedlab.com/wp-content/uploads/2018/12/logo.png"
    style={{ borderRadius : '5px!important'}}/>



       <h2>
       SamplePassed: <br/>
       SampleSecreteCode <br/>
        SampleTestDate <br/>
       </h2>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: '#388e3c', color: '#fff' }}
  />
</VerticalTimeline>
            </div>

        )
    }
}
