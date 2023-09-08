import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ReactFigma from "../../assets/tech_stacks/figma.svg"
import ReactNode from "../../assets/tech_stacks/node.svg"
import ReactReact from "../../assets/tech_stacks/react.svg"
import ReactJS from "../../assets/tech_stacks/js.svg"
import ReactJSGr from "../../assets/tech_stacks/js_gr.svg"
import ReactCSS from "../../assets/tech_stacks/css.svg"
import ReactDart from "../../assets/tech_stacks/dart.svg"
import ReactFlutter from "../../assets/tech_stacks/flutter.svg"
import ReactHtml from "../../assets/tech_stacks/html.svg"
import ReactAI from "../../assets/tech_stacks/ph_ai.png"
import ReactXD from "../../assets/tech_stacks/ph_xd.png"
import ReactPy from "../../assets/tech_stacks/python.svg"

const TechStackCarousel: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();

  const techStacks: any = [
   ReactFlutter, ReactAI, ReactCSS, ReactFigma, ReactDart, ReactJSGr, ReactJS, ReactHtml, ReactNode, ReactFigma, ReactNode, ReactPy, ReactReact, ReactXD
  ];

  const handleScroll = () => {
   
    setScrolling(true);

    controls.start({
      x: -window.innerWidth * (techStacks.length - 1),
      transition: { duration: 0.2, ease: 'linear' },
    });

    setTimeout(() => {
      setScrolling(false);
      controls.start({ x: 0 });
    }, 5000); 
  };

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <motion.div
      className='px-3 py-10'
        style={{
          display: 'flex',
        //   width: `${techStacks.length * 100}vw`,
          position: 'relative',
        }}
        animate={controls}
      >

        {techStacks.map((tech: any, index: number) => (
          <motion.img
            key={index}
            src={tech}
            alt={tech}
            className='mx-12'
            style={{
              flexShrink: 0,
            }}
          />
        ))}
      </motion.div>
      <button
        onClick={handleScroll}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 1,
          cursor: 'pointer',
        }}
      >
        {">>"}
      </button>
    </div>
  );
};

export default TechStackCarousel;
