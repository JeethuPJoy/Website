"use client";

import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import "./codingLabs.css";

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
    <div className="neurolabsCodingLabs">
      <div className="frameParent">
        <div className="frameChild" />
        <div className="frameGroup">
          <div className="logo01SynapseSpark1Parent">
            <div className="frameContainer">
              <div className="homeParent">
                <div className="home">Home</div>
              </div>
              <div className="homeParent">
                <div className="home">genZgalaxy</div>
              </div>
              <div className="homeParent">
                <div className="home">NeuroLXP 2.1</div>
              </div>
              <div className="neuroLabsParent">
                <b className="neuroLabs">Neuro Labs</b>
              </div>
              <div className="homeParent">
                <div className="home">Our Customers</div>
              </div>
              <div className="homeParent">
                <div className="home">Features</div>
              </div>
              <div className="homeParent">
                <div className="home">Resources</div>
              </div>
            </div>
          </div>
          <div className="signInHelpWrapper">
            <div className="signInHelp">Sign in Help</div>
          </div>
        </div>
      </div>
      <div className="frameDiv">
        <div className="neuroLabsWrapper">
          <div className="codingLabs">Neuro Labs</div>
        </div>
        <div className="arrowRightDoubleParent">
          <Image src="/icons/arrow-right-double.svg" className="arrowDown01Icon" width={16} height={16} sizes="100vw" alt="arrow" />
          <b className="codingLabs">Coding Labs</b>
        </div>
      </div>
      <div className="image20Parent">
        <div className="image20" />
        <div className="image21Parent">
          <div className="image21" />
          <Image className="groupYoungBusinesspeopleUsiIcon" src="/images/group-young-businesspeople-using-laptop-meeting 1.png" width={1216} height={555} sizes="100vw" alt="" />
          <div className="ellipseParent">
            <div className="frameItem" />
            <div className="frameWrapper">
              <div className="frameWrapper2">
                <div className="frameParent2">
                  <div className="frameParent3">
                    <div className="codingMysteryBadge">Coding Mystery</div>
                    <b className="practiceBuildAnd">
                      Practice! Build! and
                      <br />
                      Master Coding Skills
                    </b>
                  </div>
                  <div className="practiceSolveChallenges">Practice, solve challenges, and master programming through interactive, hands-on coding labs.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent4">
        <div className="frameParent5">
          <div className="frameParent2">
            <div className="learnByCodingBadge">Learn by Coding</div>
            <b className="masterCodingWith">Master Coding with Hands-On Practice</b>
          </div>
          <div className="practiceProgrammingThrough">Practice programming through interactive coding labs that turn concepts into real-world skills.</div>
        </div>
        <div className="frameWrapper3">
          <div className="rectangleParent">
            <div className="rectangleDiv" />
            <div className="frameChild2" />
            <div className="frameChild2" />
            <div className="frameChild2">
              <div className="frameWrapper5">
                <div className="writeTestCodeParent">
                  <div className="writeTestContainer">
                    <ul className="writeTestCode">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#BF1869" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#BF1869" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <li className="writeTest">Write & test code</li>
                    </ul>
                  </div>
                  <div className="writeTestContainer">
                    <ul className="writeTestCode">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#2A7308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#2A7308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <li className="writeTest">Solve real challenges</li>
                    </ul>
                  </div>
                  <div className="exploreCodingSolutionsContainer">
                    <ul className="writeTestCode">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#67096E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#67096E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <li className="writeTest">Explore coding solutions</li>
                    </ul>
                  </div>
                  <div className="buildPracticalProjectsContainer">
                    <ul className="writeTestCode">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5" stroke="#2D4CC8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.75L17.25 21L33 6" stroke="#2D4CC8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <li className="writeTest">Build practical projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image20Group">
        <div className="image202" />
        <div className="frameParent7">
          <div className="frameParent8">
            <div className="frameChild4">What Learners Gain</div>
            <div className="interactiveCodingChallengesParent">
              <b className="interactiveCodingChallenges">Interactive Coding Challenges</b>
              <div className="learnByBuilding">Learn by building, solving, and improving with every challenge.</div>
            </div>
          </div>
          <div className="frameParent9">
            <div className="frameParent10">
              <div className="vectorParent">
                <div className="rectangleIcon"></div>
                <div className="applyConceptsParent">
                  <b className="applyConcepts">Apply concepts</b>
                  <div className="applyCodingConcepts">Apply coding concepts through guided exercises.</div>
                </div>
                <Image className="frameChild5" src="/icons/codepen.svg" width={42} height={42} alt="" />
              </div>
              <div className="vectorGroup">
                <div className="frameChild6"></div>
                <Image className="frameChild7" src="/icons/brain-cog.svg" width={42} height={42} alt="" />
                <div className="problemSolvingParent">
                  <b className="problemSolving">Problem-solving</b>
                  <div className="improveLogicalThinking">Improve logical thinking through guided challenges.</div>
                </div>
              </div>
            </div>
            <div className="frameParent11">
              <div className="vectorParent">
                <div className="frameChild6"></div>
                <div className="problemSolvingParent">
                  <b className="codeEfficiently">Code efficiently</b>
                  <div className="improveLogicalThinking">Learn cleaner and more effective coding techniques.</div>
                </div>
                <Image className="frameChild7" src="/icons/brace.png" width={42} height={42} alt="" />
              </div>
              <div className="vectorGroup">
                <div className="frameChild6"></div>
                <div className="problemSolvingParent">
                  <b className="interviewReady">Interview-ready</b>
                  <div className="improveLogicalThinking">Build confidence for coding tests and technical assessments.</div>
                </div>
                <Image className="frameChild7" src="/icons/checkmark-circle-02.svg" width={42} height={42} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent12">
        <div className="frameParent13">
          <div className="frameWrapper6">
            <div className="checkmarkBadge01Parent">
              <Image className="skillCheckIcon" src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className="writeCleanEfficient">{`Write clean, efficient code `}</div>
            </div>
          </div>
          <div className="frameWrapper7">
            <div className="checkmarkBadge01Parent">
              <Image className="skillCheckIcon" src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className="writeCleanEfficient">Debug and fix programs</div>
            </div>
          </div>
          <div className="frameWrapper8">
            <div className="checkmarkBadge01Container">
              <Image className="skillCheckIcon" src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className="writeCleanEfficient">Strengthen programming logic</div>
            </div>
          </div>
          <div className="frameWrapper9">
            <div className="checkmarkBadge01Parent2">
              <Image className="skillCheckIcon" src="/icons/checkmark-badge-01.svg" width={36} height={36} alt="" />
              <div className="writeCleanEfficient">Build real-world solutions</div>
            </div>
          </div>
        </div>
        <div className="frameParent14">
          <div className="frameParent15">
            <div className="codingMysteryBadge">Code Smarter</div>
            <b className="realWorldSkillDevelopment">
              <br />
              Real-World Skill Development
              <br />
            </b>
          </div>
          <div className="codingLabsSimulate">
            Coding Labs simulate real-world development, helping learners solve practical programming challenges.
            <br />
          </div>
        </div>
      </div>
      <div className="frameParent16">
        <div className="frameParent17">
          <div className="frameParent18">
            <div className="frameParent2">
              <div className="flexibleLearningBadge">Flexible Learning</div>
              <b className="builtForEvery">
                <br />
                Built for Every Learning Environment
              </b>
            </div>
            <div className="perfectForUniversities">
              Perfect for universities, bootcamps,
              <br />
              corporate training, and online coding programs.
            </div>
          </div>
          <div className="frameParent20">
            <div className="frameWrapper10">
              <video className="frameChild14" src={sliderVideos[videoOrder[2]]} muted loop playsInline />
            </div>

            <div className="frameWrapper11">
              <video className="frameChild15" src={sliderVideos[videoOrder[1]]} muted loop playsInline />
            </div>

            <div className="frameWrapper12">
              <video key={videoOrder[0]} className="frameChild16 slideAnimation" src={sliderVideos[videoOrder[0]]} autoPlay muted loop playsInline />
            </div>
          </div>
        </div>
        <div className="sliderArrows">
          <button type="button" className="arrowButton" onClick={previousImage}>
            <Image src="/icons/arrow-left-02.svg" width={32} height={32} alt="Previous" />
          </button>

          <button type="button" className="arrowButton" onClick={nextImage}>
            <Image src="/icons/arrow-right-02.svg" width={32} height={32} alt="Next" />
          </button>
        </div>
      </div>
      <div className="rectangleGroup">
        <Image src="/icons/background coding labs.png" width={1280} height={505} className="ctaBackground" alt="" />

        <div className="frameParent22">
          <div className="neurolabsCodingLabsLearnByParent">
            <b className="neurolabsCodingLabs2">
              NeuroLabs Coding Labs Learn by Coding
              <br />
            </b>
            <div className="buildRealWorldCoding">Build real-world coding skills through hands on practice and interactive challenges.</div>
          </div>
          <div className="frameParent23">
            <div className="frameWrapper13">
              <div className="bookADemo">Book a Demo</div>
            </div>

            <div className="frameWrapper13">
              <div className="bookADemo getStartedButton">Get Started</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent24">
        <div className="frameParent25">
          <div className="frameParent26">
            <div className="frameParent27">
              <div className="frameParent28">
                <div className="logo01SynapseSpark1Group">
                  <div className="frameParent29">
                    <div className="onePlatformParent">
                      <b className="onePlatform">{`One Platform `}</b>
                    </div>
                    <div className="onePlatformParent">
                      <b className="onePlatform">Endless Learning</b>
                    </div>
                    <b className="onePlatform">Limitless Growth</b>
                  </div>
                </div>
                <div className="prgeeqGlobalSolutionsPrivatParent">
                  <b className="prgeeqGlobalSolutions">PRGEEQ Global Solutions Private Limited</b>
                  <div className="prestigeAtlanta1012Container">
                    <span>
                      <b className="blankLine">&nbsp;</b>
                      <span className="blankLine">
                        Prestige Atlanta, 10/12, 80 Feet Rd, 1A Block,
                        <br />
                        Koramangala, Bengaluru, - 560034
                        <br />
                        Karnataka, India.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="frameParent30">
                <div className="frameParent31">
                  <div className="aboutUsParent">
                    <b className="aboutUs">{`About us `}</b>
                    <div className="ourMissionParent">
                      <div className="ourMission">Our Mission</div>
                      <div className="ourMission">{`Our Vision `}</div>
                      <div className="ourMission">Our Story</div>
                      <div className="ourMission">Our Team</div>
                    </div>
                  </div>
                  <div className="quickLinksParent">
                    <b className="quickLinks">Quick Links</b>
                    <div className="ourMissionParent">
                      <div className="ourMission">Privacy Policy</div>
                      <div className="ourMission">Terms of use</div>
                      <div className="ourMission">Terms of Declaration</div>
                    </div>
                  </div>
                  <div className="neurolxpParent">
                    <b className="neurolxp">{`NeuroLXP  `}</b>
                    <div className="ourCustomersGroup">
                      <div className="ourMission">Our Customers</div>
                      <div className="ourMission">Smart Learning Paths</div>
                      <div className="smartContentCreation">Smart Content Creation</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent32"></div>
              </div>
            </div>
            <div className="copyright2026">Copyright @2026 | Prgeeq Global Solutions Pvt Ltd | All right reserved</div>
          </div>
          <div className="frameWrapper14">
            <div className="frameParent26">
              <div className="frameParent27">
                <div className="frameParent28">
                  <div className="logo01SynapseSpark1Group">
                    <div className="frameParent29">
                      <div className="onePlatformParent">
                        <b className="onePlatform">{`One Platform `}</b>
                      </div>
                      <div className="onePlatformParent">
                        <b className="onePlatform">Endless Learning</b>
                      </div>
                      <b className="onePlatform">Limitless Growth</b>
                    </div>
                  </div>
                  <div className="prgeeqGlobalSolutionsPrivatParent">
                    <b className="prgeeqGlobalSolutions">Prgeeq Global Solutions Private Limited</b>
                    <div className="prestigeAtlanta1012Container">
                      <span>
                        <b className="blankLine">&nbsp;</b>
                        <span className="blankLine">
                          Prestige Atlanta, 10/12, 80 Feet Rd, 1A Block,
                          <br />
                          Koramangala, Bengaluru, - 560034
                          <br />
                          Karnataka, India.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="frameParent37">
                  <div className="frameParent38">
                    <div className="aboutUsParent">
                      <b className="aboutUs">{`About us `}</b>
                      <div className="ourMissionGroup">
                        <div className="ourMission">Our Mission</div>
                        <div className="ourMission">{`Our Vision `}</div>
                        <div className="ourMission">Our Story</div>
                        <div className="ourMission">Our Team</div>
                      </div>
                    </div>
                    <div className="quickLinksParent">
                      <b className="quickLinks">Quick Links</b>
                      <div className="ourMissionGroup">
                        <div className="ourMission">Privacy Policy</div>
                        <div className="ourMission">Terms of use</div>
                        <div className="ourMission">Terms of Declaration</div>
                      </div>
                    </div>
                    <div className="neurolxpParent">
                      <div className="neurolxpGroup">
                        <b className="neurolxp2">
                          <span className="neurolxpTxt">
                            <span className="neurolxp3">{`NeuroLXP `}</span>
                            <span className="span">{` `}</span>
                          </span>
                        </b>
                        <b className="tm">TM</b>
                      </div>
                      <div className="ourCustomersContainer">
                        <div className="ourMission">Our Customers</div>
                        <div className="ourMission">Smart Learning Paths</div>
                        <div className="smartContentCreation">Smart Content Creation</div>
                      </div>
                    </div>
                  </div>
                  <div className="frameParent40"></div>
                </div>
              </div>
              <div className="copyright2026">Copyright @2026 | Prgeeq Global Solutions Pvt Ltd | All right reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeurolabsCodingLabs;
