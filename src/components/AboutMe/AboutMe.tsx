import React from "react";
import TextBox from "../TextBox";
import SlideInOnViewWrapper from "../SlideInOnViewWrapper";

type Props = {};

const index = ({}: Props) => {
  return (
    <>
      <SlideInOnViewWrapper triggerProp="show">
        <TextBox
          title="Embarking upon..."
          list={[
            "Studying biology at the Technical University of Braunschweig",
            "Working in the department of cellular neurobiology for my bachelor thesis",
            "Expanding my logical thinking and analytical skills",
          ]}
          img={"/assets/about-me/me-lab_640x640.jpg"}
          imgSize={640}
        />
      </SlideInOnViewWrapper>
      <SlideInOnViewWrapper triggerProp="show" reverse>
        <TextBox
          title="Progressing through..."
          list={[
            "Learning Perl, Python, R, Java, C/C++, PHP+MySQL and Javascript",
            "Writing small scripts e.g. flash cards",
            "Implementing small projects using Raspberry Pi and Arduino",
          ]}
          img={"/assets/about-me/rpi_640x640.jpg"}
          imgSize={640}
          isReversed
        />
      </SlideInOnViewWrapper>
      <SlideInOnViewWrapper triggerProp="show">
        <TextBox
          title="Ultimately leading to..."
          list={[
            "Thriving as a web developer",
            "Creating web pages and apps including CMS, localizations and Tracking",
            "Developing mobile apps",
          ]}
          img={"/assets/about-me/coding_640x640.webp"}
          imgSize={640}
        />
      </SlideInOnViewWrapper>
    </>
  );
};

export default index;
