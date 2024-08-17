import React from 'react'
import SectionHeading from './SectionHeading'
import pkg  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";

export default function Experience() {
    const { VerticalTimeline, VerticalTimelineElement } = pkg;
    const { ref } = useSectionInView("Experience");

  return (
    <section id='experience' ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
                contentStyle={{
                    background: 'rgb(23 78 66 / 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgb(10 36 32 / 0.15)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                    borderRight: '0.4rem solid rgb(23 78 66 / 0.25)'
                }}
                date={item.date}
                icon={React.createElement(item.icon)}
                iconStyle={{
                    background: 'rgb(23 78 66 / 0.1)',
                    fontSize: '1.5rem',
                    border: '1px solid rgb(10 36 32 / 0.15)',
                }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-primary-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}