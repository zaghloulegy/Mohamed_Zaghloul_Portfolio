
import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper'
import './About.scss'
import { images } from '../../constants'

const abouts = [
  {
    title: "web development",
    description: "I am a good web development",
    imgUrl: images.about01
  },
  {
    title: "web Design",
    description: "I am a good web development",
    imgUrl: images.about02
  },
  {
    title: "UI/UX",
    description: "I am a good web development",
    imgUrl: images.about03
  },
  {
    title: "web Animation",
    description: "I am a good web development",
    imgUrl: images.about04
  },
];


const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, "about");