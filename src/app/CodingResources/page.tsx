import type { NextPage } from "next";
import Image from "next/image";
import "./coding-resources.css";

const learningCards = [
  "Programming Guides",
  "Code Examples & Project",
  "Coding Fundamentals",
  "Algorithm Practice",
  "Clean Code Practices",
];

const supportCards = [
  "Practice problems and coding exercises",
  "Code snippets and reusable examples",
  "Step-by-step problem-solving guides",
  "Debugging and optimization tips",
];

const pillars = [
  {
    number: "01",
    title: "Multi-Domain Support",
    lead: "Build Tech Skills",
    items: [
      "Coding Fundamentals",
      "Web development",
      "Software development",
      "Algorithmic Thinking",
    ],
  },
  {
    number: "02",
    title: "Continuous Learning",
    lead: "Learn Today's Tech Trends",
    items: [
      "Modern Frameworks",
      "Best Practices",
      "New development tools",
      "Industry Skills",
    ],
  },
  {
    number: "03",
    title: "Learn! Teach! Grow",
    lead: "Built for Every Learner",
    items: [
      "Universities",
      "Coding Bootcamps",
      "Corporate Training",
      "Career Learners",
    ],
  },
];

const CodingResources: NextPage = () => {
  return (
    <main className="page">
      <div className="shell">
        <div className="breadcrumb">
          <span>Neuro Labs</span>

          <Image
            src="/assets/coding-resources.icons/arrow-right-double.svg"
            width={16}
            height={16}
            alt=""
          />

          <b>Coding Resources</b>
        </div>

        <section className="heroFrame">
          <div className="hero">
            <div className="heroShape" />

            <div className="heroCopy">
              <span className="pill">Coding Resources</span>

              <h1>
                Everything to Learn!
                <br />
                Practice! Master Coding
              </h1>

              <p>
                NeuroLabs Coding Resources provide learners with structured
                materials for every stage of the programming journey.
              </p>
            </div>

            <Image
              className="heroImage"
              src="/assets/coding-resources.icons/coding-resources.png"
              width={1536}
              height={1024}
              priority
              alt="Student learning coding on a laptop"
            />
          </div>
        </section>

        <section className="learning">
          <h2>
            Comprehensive Programming
            <br />
            Learning Materials
          </h2>

          <p>
            NeuroLabs provides coding resources that support both
            <br />
            theoretical understanding and hands-on learning.
          </p>

          <div className="learningCards">
            {learningCards.map((label) => (
              <div className="learningCard" key={label}>
                <Image
                  className="learningCardOuter"
                  src="/assets/coding-resources.icons/Rectangle 40 copy.svg"
                  width={248}
                  height={128}
                  sizes="248px"
                  alt=""
                  aria-hidden="true"
                />

                <div className="learningCardInner">
                  <span className="learningCardText">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="practice">
          <div className="practiceIntro">
            <h2>Practice-Oriented Coding Support</h2>

            <p>
              Master coding through consistent practice. NeuroLabs provides
              hands-on
              <br />
              resources that strengthen skills and build coding confidence.
            </p>
          </div>

          <div className="supportGrid">
            {supportCards.map((item, index) => (
              <div
                className={`supportCard accent${index}`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="practiceOval">
          Strengthen skills through consistent practice
        </div>

        <section className="pillars">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.number}>
              <div className="pillarHead">
                <b>{pillar.number}</b>
                <span>{pillar.title}</span>
              </div>

              <h3>{pillar.lead}</h3>

              <div className="checkList">
                {pillar.items.map((item) => (
                  <div className="checkItem" key={item}>
                    <span className="checkIconCircle">
                      <Image
                        src="/assets/coding-resources.icons/checkmark-circle-02.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="checkIcon"
                      />
                    </span>

                    <span className="checkText">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="growthFrame">
          <div className="growth">
            <div className="growthCopy">
              <span className="pill">Programming Growth</span>

              <h2>
                NeuroLabs Coding
                <br />
                Resources
              </h2>

              <p>
                Build strong programming skills with tutorials, hands-on
                practice, and up-to-date learning resources.
              </p>
            </div>

            <div className="videoVisual">
              <video
                className="growthVideo"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              >
                <source
                  src="/assets/coding-resources.icons/coding-resources.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CodingResources;