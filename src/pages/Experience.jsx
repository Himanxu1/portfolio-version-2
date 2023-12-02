import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2022 - Sept 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">EVE (Frontend Developer Intern)</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote,Delhi</h4>
    <p>build various frontend component</p>
    <p>Collaborate with designers and back-end developers to implement user interface</p> 
    <p>Optimized the user interface for increased responsiveness, achieving an improved user experience for
customers</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Oct 2022 - Jan 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Brandfull (Software Developer Intern)</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote,Saudi Arabia</h4>
    <p>Build Reusable component in React js and tailwind css</p>
    <p>Worked on Building some Entity in typeorm</p> 
    <p>Refactor some component in medusa js</p>
  </VerticalTimelineElement>
  </VerticalTimeline>
    </div>
  )
}

export default Experience