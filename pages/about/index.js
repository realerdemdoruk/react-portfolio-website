import React from "react";
import Layout from "../../components/Layout";

const about = () => {
  return (
    <Layout title={"Portfolio / About"} description={"My Portfolio"}>
      <main className="w-full h-full flex items-center justify-center">
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            maxWidth: "64rem",
            paddingTop: "1.25rem",
          }}
        >
          <div className="p-9">
            <h6 className="font-bold cursor-pointer  text-pinkish-200 transition-colors duration-300  hover:text-white">
              WHO AM I !
            </h6>
            <p className="mt-5">
              Hello, my name is Erdem Doruk. I was born on February 20th, 2003
              in Istanbul, Turkey. I'm currently a sophomore studying Computer
              Programming at Manisa Celal Bayar University.
            </p>

            <p className="mt-5">
              My passion for the world of computer programming has led me to
              learn various programming languages such as React JS, HTML, CSS,
              C#, and Java. Through using these languages, I have participated
              in several projects.
            </p>
            <p className="mt-5">
              However, I have always love to challenge myself to develop my
              skills in the best way possible. As a result, I am always open to
              learning new things and improving my own skills. Continuously
              improving myself, keeping up with the innovations in the industry,
              and implementing these innovations into my projects is very
              important to me.
            </p>
            <p>
              Please visit my portfolio to learn more about me and see my work.
            </p>
            <h6 className="mt-5 font-bold transition-colors duration-300 cursor-pointer  hover:text-pinkish-200">
              Education:
            </h6>
            <p>
              <ul className="mt-5 flex gap-2 flex-col ">
                <li>
                  Sinop/Gerze Vocational and Technical Anatolian High School
                </li>
                <li>Manisa Celal Bayar University - Computer Programming</li>
              </ul>
            </p>
            <p className="">
              <h3 className="font-bold mt-5 transition-colors duration-300 cursor-pointer hover:text-pinkish-200">
                Connect with me:
              </h3>
              <p className="flex gap-2 mt-5 ">
                <a href="https://twitter.com/realerdemdoruk" target="blank">
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                    alt="realerdemdoruk"
                    className="hover:scale-110"
                    height="20"
                    width="30"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/erdem-doruk-2954b7227"
                  target="blank"
                >
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                    alt="erdem-doruk-2954b7227"
                    className="hover:scale-110"
                    height="20"
                    width="30"
                  />
                </a>
                <a href="https://fb.com/realerdemdoruk" target="blank">
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
                    alt="realerdemdoruk"
                    className="
                    hover:scale-110
                  "
                    height="20"
                    width="30"
                  />
                </a>
                <a href="https://instagram.com/realerdemdoruk" target="blank">
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                    alt="realerdemdoruk"
                    className="
                      hover:scale-110
                    "
                    height="20"
                    width="30"
                  />
                </a>
                <a href="https://discord.gg/2263" target="blank">
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
                    alt="2263"
                    className="hover:scale-110"
                    height="20"
                    width="30"
                  />
                </a>
              </p>
            </p>

            <p className=" flex flex-col font-bold ">
              <h3 className="mt-5 cursor-pointer font-bold transition-colors duration-300 hover:text-pinkish-200">
                Languages and Tools:
              </h3>
              <p className="flex mt-5 gap-1">
                <a
                  href="https://getbootstrap.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.w3schools.com/cs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                    alt="csharp"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                    alt="firebase"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a href="https://www.java.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                    alt="java"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.python.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="python"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://sass-lang.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                    alt="sass"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="tailwind"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                    alt="nextjs"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="40"
                    height="40"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://reactnative.dev/img/header_logo.svg"
                    alt="reactnative"
                    width="40"
                    height="40"
                    className="w-10 h-10 hover:scale-110"
                  />
                </a>
              </p>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default about;
