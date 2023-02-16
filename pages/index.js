import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

import GithubIcon from '../components/icons/Github.js';
import TwitterIcon from '../components/icons/Twitter.js';
import LinkedinIcon from '../components/icons/Linkedin.js';

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={['Jr. Front End Developer', 2000, 'React Developer', 2000]}
      />
    );
  },
  (props, prevProps) => true
);
export default function Home() {
  return (
    <Layout title={'Portfolio / Projects'} description={'My Portfolio'}>
      <main className="w-full h-full flex items-center justify-center  ">
        <section className="h-full max-w-5xl  ">
          <div className="flex flex-col   mt-52 items-center justify-center">
            <h4 className="text-lg text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal uppercase md:text-4xl md:mt-3 text-white">
              Erdem Doruk
            </h1>

            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/realerdemdoruk"
                target={'_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center  transition-colors duration-300 text-gray-100 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={'w-8 h-8 fill-current'} />
              </motion.a>

              <motion.a
                href="https://twitter.com/realerdemdoruk"
                target={'_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center  transition-colors duration-300 text-gray-100 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className={'w-8 h-8 fill-current'} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/erdem-doruk-2954b7227/"
                target={'_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center  transition-colors duration-300 text-gray-100 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={'w-8 h-8 fill-current'} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
