"use client";

import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import styles from "./codingLabs.module.css";

const NeurolabsCodingLabs: NextPage = () => {
  const sliderVideos = ["/videos/women-holding-diploma.mp4", "/videos/secondvideo.mp4", "/videos/third.mp4"];

  const [videoOrder, setVideoOrder] = useState([0, 1, 2]);

  const nextImage = () => {
    setVideoOrder((prev) => [prev[2], prev[0], prev[1]]);
  };

  const previousImage = () => {
    setVideoOrder((prev) => [prev[1], prev[2], prev[0]]);
  };

  return (
    <div className={styles.neurolabsCodingLabs}>
      <div className={styles.frameParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.logo01SynapseSpark1Parent}>
            <div className={styles.frameContainer}>
              <div className={styles.homeParent}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.homeParent}>
                <div className={styles.home}>genZgalaxy</div>
              </div>
              <div className={styles.homeParent}>
                <div className={styles.home}>NeuroLXP 2.1</div>
              </div>
              <div className={styles.neuroLabsParent}>
                <b className={styles.neuroLabs}>Neuro Labs</b>
              </div>
              <div className={styles.homeParent}>
                <div className={styles.home}>Our Customers</div>
              </div>
              <div className={styles.homeParent}>
                <div className={styles.home}>Features</div>
              </div>
              <div className={styles.homeParent}>
                <div className={styles.home}>Resources</div>
              </div>
            </div>
          </div>
          <div className={styles.signInHelpWrapper}>
            <div className={styles.signInHelp}>Sign in Help</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.neuroLabsWrapper}>
          <div className={styles.codingLabs}>Neuro Labs</div>
        </div>
        <div className={styles.arrowRightDoubleParent}>
          <Image src="/icons/arrow-right-double.svg" className={styles.arrowDown01Icon} width={16} height={16} sizes="100vw" alt="arrow" />
          <b className={styles.codingLabs}>Coding Labs</b>
        </div>
      </div>
      <div className={styles.image20Parent}>
        <div className={styles.image20} />
        <div className={styles.image21Parent}>
          <div className={styles.image21} />
          <Image className={styles.groupYoungBusinesspeopleUsiIcon} src="/images/group-young-businesspeople-using-laptop-meeting 1.webp" width={1216} height={555} sizes="100vw" alt="" />
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.frameWrapper}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.codingMysteryBadge}>Coding Mystery</div>
                    <b className={styles.practiceBuildAnd}>
                      Practice! Build! and
                      <br />
                      Master Coding Skills
                    </b>
                  </div>
                  <div className={styles.practiceSolveChallenges}>Practice, solve challenges, and master programming through interactive, hands-on coding labs.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent2}>
            <div className={styles.learnByCodingBadge}>Learn by Coding</div>
            <b className={styles.masterCodingWith}>Master Coding with Hands-On Practice</b>
          </div>
          <div className={styles.practiceProgrammingThrough}>Practice programming through interactive coding labs that turn concepts into real-world skills.</div>
        </div>
        <div className={styles.frameWrapper3}>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild2} />
            <div className={styles.frameChild2} />
            <div className={styles.frameChild2}>
              <div className={styles.frameWrapper5}>
                <div className={styles.writeTestCodeParent}>
                  <div className={styles.writeTestContainer}>
                    <ul className={styles.writeTestCode}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#BF1869" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#BF1869" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <li className={styles.writeTest}>Write & test code</li>
                    </ul>
                  </div>
                  <div className={styles.writeTestContainer}>
                    <ul className={styles.writeTestCode}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#2A7308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#2A7308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <li className={styles.writeTest}>Solve real challenges</li>
                    </ul>
                  </div>
                  <div className={styles.exploreCodingSolutionsContainer}>
                    <ul className={styles.writeTestCode}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#67096E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#67096E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <li className={styles.writeTest}>Explore coding solutions</li>
                    </ul>
                  </div>
                  <div className={styles.buildPracticalProjectsContainer}>
                    <ul className={styles.writeTestCode}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#2D4CC8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#2D4CC8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <li className={styles.writeTest}>Build practical projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image20Group}>
        <div className={styles.image202} />
        <div className={styles.frameParent7}>
          <div className={styles.frameParent8}>
            <div className={styles.frameChild4}>What Learners Gain</div>
            <div className={styles.interactiveCodingChallengesParent}>
              <b className={styles.interactiveCodingChallenges}>Interactive Coding Challenges</b>
              <div className={styles.learnByBuilding}>Learn by building, solving, and improving with every challenge.</div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.frameParent10}>
              <div className={styles.vectorParent}>
                <div className={styles.rectangleIcon}></div>
                <div className={styles.applyConceptsParent}>
                  <b className={styles.applyConcepts}>Apply concepts</b>
                  <div className={styles.applyCodingConcepts}>Apply coding concepts through guided exercises.</div>
                </div>
                <Image className={styles.frameChild5} src="/icons/codepen.svg" width={42} height={42} alt="" />
              </div>
              <div className={styles.vectorGroup}>
                <div className={styles.frameChild6}></div>
                <Image className={styles.frameChild7} src="/icons/brain-cog.svg" width={42} height={42} alt="" />
                <div className={styles.problemSolvingParent}>
                  <b className={styles.problemSolving}>Problem-solving</b>
                  <div className={styles.improveLogicalThinking}>Improve logical thinking through guided challenges.</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.vectorParent}>
                <div className={styles.frameChild6}></div>
                <div className={styles.problemSolvingParent}>
                  <b className={styles.codeEfficiently}>Code efficiently</b>
                  <div className={styles.improveLogicalThinking}>Learn cleaner and more effective coding techniques.</div>
                </div>
                <Image className={styles.frameChild7} src="/icons/brace.png" width={42} height={42} alt="" />
              </div>
              <div className={styles.vectorGroup}>
                <div className={styles.frameChild6}></div>
                <div className={styles.problemSolvingParent}>
                  <b className={styles.interviewReady}>Interview-ready</b>
                  <div className={styles.improveLogicalThinking}>Build confidence for coding tests and technical assessments.</div>
                </div>
                <Image className={styles.frameChild7} src="/icons/checkmark-circle-02.svg" width={42} height={42} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent12}>
        <div className={styles.frameParent13}>
          <div className={styles.frameWrapper6}>
            <div className={styles.checkmarkBadge01Parent}>
              <Image className={styles.skillCheckIcon} src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className={styles.writeCleanEfficient}>{`Write clean, efficient code `}</div>
            </div>
          </div>
          <div className={styles.frameWrapper7}>
            <div className={styles.checkmarkBadge01Parent}>
              <Image className={styles.skillCheckIcon} src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className={styles.writeCleanEfficient}>Debug and fix programs</div>
            </div>
          </div>
          <div className={styles.frameWrapper8}>
            <div className={styles.checkmarkBadge01Container}>
              <Image className={styles.skillCheckIcon} src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className={styles.writeCleanEfficient}>Strengthen programming logic</div>
            </div>
          </div>
          <div className={styles.frameWrapper9}>
            <div className={styles.checkmarkBadge01Parent2}>
              <Image className={styles.skillCheckIcon} src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className={styles.writeCleanEfficient}>Build real-world solutions</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent14}>
          <div className={styles.frameParent15}>
            <div className={styles.codingMysteryBadge}>Code Smarter</div>
            <b className={styles.realWorldSkillDevelopment}>
              <br />
              Real-World Skill Development
              <br />
            </b>
          </div>
          <div className={styles.codingLabsSimulate}>
            Coding Labs simulate real-world development, helping learners solve practical programming challenges.
            <br />
          </div>
        </div>
      </div>
      <div className={styles.frameParent16}>
        <div className={styles.frameParent17}>
          <div className={styles.frameParent18}>
            <div className={styles.frameParent2}>
              <div className={styles.flexibleLearningBadge}>Flexible Learning</div>
              <b className={styles.builtForEvery}>
                <br />
                Built for Every Learning Environment
              </b>
            </div>
            <div className={styles.perfectForUniversities}>
              Perfect for universities, bootcamps,
              <br />
              corporate training, and online coding programs.
            </div>
          </div>
          <div className={styles.frameParent20}>
            <div className={styles.frameWrapper10}>
              <video className={styles.frameChild14} src={sliderVideos[videoOrder[2]]} muted loop playsInline />
            </div>

            <div className={styles.frameWrapper11}>
              <video className={styles.frameChild15} src={sliderVideos[videoOrder[1]]} muted loop playsInline />
            </div>

            <div className={styles.frameWrapper12}>
              <video key={videoOrder[0]} className={`${styles.frameChild16} ${styles.slideAnimation}`} src={sliderVideos[videoOrder[0]]} autoPlay muted loop playsInline />
            </div>
          </div>
        </div>
        <div className={styles.sliderArrows}>
          <button type="button" className={styles.arrowButton} onClick={previousImage}>
            <Image src="/icons/arrow-left-02.svg" width={32} height={32} alt="Previous" />
          </button>

          <button type="button" className={styles.arrowButton} onClick={nextImage}>
            <Image src="/icons/arrow-right-02.svg" width={32} height={32} alt="Next" />
          </button>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <Image src="/icons/background coding labs.webp" width={1280} height={505} className={styles.ctaBackground} alt="" />

        <div className={styles.frameParent22}>
          <div className={styles.neurolabsCodingLabsLearnByParent}>
            <b className={styles.neurolabsCodingLabs2}>
              NeuroLabs Coding Labs Learn by Coding
              <br />
            </b>
            <div className={styles.buildRealWorldCoding}>Build real-world coding skills through hands on practice and interactive challenges.</div>
          </div>
          <div className={styles.frameParent23}>
            <div className={styles.frameWrapper13}>
              <div className={styles.bookADemo}>Book a Demo</div>
            </div>

            <div className={styles.frameWrapper13}>
              <div className={`${styles.bookADemo} ${styles.getStartedButton}`}>Get Started</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeurolabsCodingLabs;
