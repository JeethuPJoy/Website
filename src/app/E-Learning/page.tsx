"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import "./e-learning.css";

export default function ELearningPage() {
  const futureReadyVideoRef = useRef<HTMLVideoElement>(null);
  const [isFutureReadyVideoPaused, setIsFutureReadyVideoPaused] = useState(false);

  const toggleFutureReadyVideo = () => {
    const video = futureReadyVideoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play().then(() => {
        setIsFutureReadyVideoPaused(false);
      });
    } else {
      video.pause();
      setIsFutureReadyVideoPaused(true);
    }
  };

  return (
    <main className="eLearning">
      <title>E-Learning Solutions | NeuroLXP</title>
      <Image className="eLearningChild" src="/icons/elearning-hero-frame.svg" width={1487} height={1413} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} priority />
      <div className="frameParent">
        <div className="frameWrapper">
          <div className="frameGroup">
            <div className="frameContainer">
              <div className="frameChild">E-Learning Solutions</div>
              <h1 className="deliverEngagingDigitalContainer" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                <span className="deliverEngaging">Deliver Engaging</span>
                <span className="digitalLearning">{` Digital Learning `}</span>
                <span className="deliverEngaging">
                  Experiences
                  <br />
                </span>
              </h1>
            </div>
            <div className="neurolxpEmpowersOrganization">{`NeuroLXP empowers organizations with interactive, scalable, and engaging digital learning experiences. `}</div>
          </div>
        </div>
        <div className="frameDiv">
          <a href="/book-demo" className="bookDemoButton">
            Book a Demo
          </a>
          <div className="frameWrapper2">
            <div className="startLearningWrapper">
              <div className="startLearning">Start Learning</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent5">
        <div className="ourCustomersWrapper">
          <div className="solutionsFor">Our Customers</div>
        </div>
        <div className="homeParent">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
          <div className="ourCustomersWrapper">
            <div className="solutionsFor">Solutions for</div>
          </div>
        </div>
        <div className="arrowRightDoubleGroup">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
          <span className="solutionsFor">{`E-Learning `}</span>
        </div>
      </div>
      <div className="eLearningInner">
        <div className="learningStats">
          <div className="learningStat learningStatBlue">
            <strong>50k+</strong>
            <span>Active learners</span>
          </div>

          <div className="learningStat learningStatPink">
            <strong>92%</strong>
            <span>Completion</span>
          </div>

          <div className="learningStat learningStatGreen">
            <strong>24/7</strong>
            <span>Learning Access</span>
          </div>
        </div>
      </div>
      <div className="frameParent6">
        <div className="frameParent7">
          <div className="keyChallengesBadge">Key Challenges</div>
          <div className="addressingKeyChallengesInEParent">
            <h2 className="addressingKeyChallenges" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
              Addressing Key Challenges in E-Learning
              <br />
            </h2>
            <div className="neurolxpHelpsOrganizations">NeuroLXP helps organizations deliver engaging, accessible, and measurable learning experiences.</div>
          </div>
        </div>
        <div className="frameParent8 challengeSection">
          <div className="challengeTimeline">
            <div className="challengeLine" />

            <div className="challengeIconNode challengeIconPink">
              <Image className="challengeIconImage" src="/icons/ideapink.svg" width={40} height={40} alt="Passive online learning challenge" />
            </div>

            <div className="challengeIconNode challengeIconBlue">
              <Image className="challengeIconImage" src="/icons/layers.svg" width={40} height={40} alt="Learning content management challenge" />
            </div>

            <div className="challengeIconNode challengeIconPurple">
              <Image className="challengeIconImage" src="/icons/champion-1.svg" width={40} height={40} alt="Learner engagement challenge" />
            </div>

            <div className="challengeIconNode challengeIconGreen">
              <Image className="challengeIconImage" src="/icons/chart.svg" width={40} height={40} alt="Learning effectiveness challenge" />
            </div>
          </div>

          <div className="challengeCards">
            <article className="challengeCard">
              <div className="challengeMainContent">
                <span className="challengeNumber challengeNumberPink">CHALLENGE 1</span>
                <h3>Passive Online Learning</h3>
                <p>Static content reduces engagement and knowledge retention.</p>
              </div>
              <div className="challengeSolution challengeSolutionPink">
                <strong>HOW NEUROLXP HELPS</strong>
                <span>Interactive learning boosts engagement and retention.</span>
              </div>
            </article>

            <article className="challengeCard">
              <div className="challengeMainContent">
                <span className="challengeNumber challengeNumberBlue">CHALLENGE 2</span>
                <h3>Managing Large Learning Content</h3>
                <p>Managing videos, PDFs, presentations, and assessments is complex.</p>
              </div>
              <div className="challengeSolution challengeSolutionBlue">
                <strong>HOW NEUROLXP HELPS</strong>
                <span>Centralized content management, organization, and delivery.</span>
              </div>
            </article>

            <article className="challengeCard">
              <div className="challengeMainContent">
                <span className="challengeNumber challengeNumberPurple">CHALLENGE 3</span>
                <h3>Low Learner Engagement</h3>
                <p>Maintaining learner motivation is challenging.</p>
              </div>
              <div className="challengeSolution challengeSolutionPurple">
                <strong>HOW NEUROLXP HELPS</strong>
                <span>Gamification, social learning, and interactive assessments boost engagement and motivation.</span>
              </div>
            </article>

            <article className="challengeCard">
              <div className="challengeMainContent">
                <span className="challengeNumber challengeNumberGreen">CHALLENGE 4</span>
                <h3>Measuring Learning Effectiveness</h3>
                <p>Tracking learning outcomes is challenging.</p>
              </div>
              <div className="challengeSolution challengeSolutionGreen">
                <strong>HOW NEUROLXP HELPS</strong>
                <span>Advanced analytics deliver actionable learning insights.</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="eLearningItem" />
      <div className="eLearningInner2">
        <div className="frameChild14" />
      </div>
      <div className="frameParent15">
        <div className="frameParent16">
          <div className="frameParent17">
            <div className="frameParent18">
              <div className="platformFeaturesBadge">Platform Features</div>
              <div className="keyFeaturesOfNeurolxpELeaWrapper">
                <h2 className="keyFeaturesOf" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                  Key Features of NeuroLXP E-Learning Platform
                  <br />
                  <br />
                </h2>
              </div>
            </div>
            <div className="frameParent19">
              <div className="frameParent20">
                <div className="ellipseParent">
                  <div className="ellipseDiv" />
                  <div className="frameChild18" />
                  <div className="frameParent21">
                    <div className="ellipseGroup">
                      <div className="frameChild16" />
                      <h3 className="aiPoweredContent" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                        AI-Powered Content
                        <br />
                      </h3>
                      <Image className="aiBookIcon" src="/icons/ai-book.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                    </div>
                    <div className="smartContentCuration">Smart content curation.</div>
                  </div>
                </div>
                <div className="ellipseParent">
                  <div className="ellipseDiv" />
                  <div className="frameChild18" />
                  <div className="frameParent21">
                    <div className="ellipseGroup">
                      <div className="frameChild19" />
                      <h3 className="aiPoweredContent" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                        Mobile Learning
                        <br />
                        <br />
                      </h3>
                      <Image className="aiBookIcon" src="/icons/smart-phone.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                    </div>
                    <div className="smartContentCuration">Learn anytime, anywhere.</div>
                  </div>
                </div>
              </div>
              <div className="frameParent20">
                <div className="ellipseParent">
                  <div className="ellipseDiv" />
                  <div className="frameChild18" />
                  <div className="frameParent21">
                    <div className="ellipseGroup">
                      <div className="frameChild22" />
                      <h3 className="aiPoweredContent" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                        Skill Pathways
                        <br />
                        <br />
                        <br />
                      </h3>
                      <Image className="aiBookIcon" src="/icons/graduation-cap.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                    </div>
                    <div className="smartContentCuration">Career-ready skills</div>
                  </div>
                </div>
                <div className="ellipseParent">
                  <div className="ellipseDiv" />
                  <div className="frameChild18" />
                  <div className="frameParent21">
                    <div className="ellipseGroup">
                      <div className="frameChild25" />
                      <h3 className="aiPoweredContent" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                        Scalable Platform
                        <br />
                      </h3>
                      <Image className="aiBookIcon" src="/icons/justice.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                    </div>
                    <div className="smartContentCuration">Scalable digital learning.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent7">
            <div className="idealForBadge">Ideal For</div>
            <div className="addressingKeyChallengesInEParent">
              <h2 className="addressingKeyChallenges" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                Ideal for Diverse Learning Environments
                <br />
                <br />
                <br />
              </h2>
              <div className="neurolxpSupportsA">
                NeuroLXP supports a wide range of digital learning initiatives.
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent27">
          <div className="frameParent28">
            <div className="frameWrapper12">
              <div className="rectangleParent">
                <div className="rectangleDiv" />
                <div className="frameChild27" />
                <div className="frameParent29">
                  <div className="ourCustomersWrapper">
                    <Image className="mortarboard01Icon" src="/icons/cap.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                  </div>
                  <div className="onlineEducationParent">
                    <h3 className="onlineEducation" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                      Online Education
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </h3>
                    <div className="universitiesSchools">{`Universities & schools.`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameWrapper13">
              <div className="rectangleParent">
                <div className="rectangleDiv" />
                <div className="frameChild29" />
                <div className="frameParent30">
                  <div className="ourCustomersWrapper">
                    <Image className="mortarboard01Icon" src="/icons/university-usergroup.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                  </div>
                  <div className="corporateTrainingParent">
                    <h3 className="corporateTraining" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                      Corporate Training
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </h3>
                    <div className="employeeDevelopment">Employee development.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameWrapper14">
              <div className="rectangleParent">
                <div className="rectangleDiv" />
                <div className="frameChild29" />
                <div className="frameParent30">
                  <div className="ourCustomersWrapper">
                    <div className="ourCustomersWrapper">
                      <Image className="mortarboard01Icon" src="/icons/certificate.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                    </div>
                  </div>
                  <div className="corporateTrainingParent">
                    <h3 className="corporateTraining" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                      Certification Programs
                      <br />
                    </h3>
                    <div className="professionalCertifications">Professional certifications.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent32">
            <div className="frameWrapper16">
              <div className="rectangleParent">
                <div className="rectangleDiv" />
                <div className="frameChild29" />
                <div className="frameParent29">
                  <div className="ourCustomersWrapper">
                    <Image className="mortarboard01Icon" src="/icons/idea.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                  </div>
                  <div className="onlineEducationParent">
                    <h3 className="skillDevelopment" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                      Skill Development
                      <br />
                    </h3>
                    <div className="universitiesSchools">Workforce upskilling.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameWrapper16">
              <div className="rectangleParent">
                <div className="rectangleDiv" />
                <div className="frameChild29" />
                <div className="frameParent29">
                  <div className="ourCustomersWrapper">
                    <Image className="mortarboard01Icon" src="/icons/chat.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />
                  </div>
                  <div className="onlineEducationParent">
                    <h3 className="customerEducation" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                      Customer Education
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </h3>
                    <div className="customerPartner">{`Customer & partner training.`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent35">
        <div className="peopleTakingPartBusinessEvParent">
          <div className="peopleTakingPartBusinessEv" />
          <div className="image21" />
          <div className="groupYoungBusinesspeopleUsi" />
          <div className="frameParent36">
            <div className="frameParent37">
              <div className="frameParent38">
                <div className="neuroLxpBadge">
                  <span>NeuroLXP</span>
                  <sup>TM</sup>
                </div>
                <h2 className="futureReadyELearning" style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>
                  <span className="deliverEngaging">{`Future-Ready `}</span>
                  <span className="digitalLearning">
                    E-Learning
                    <br />
                  </span>
                  <span className="deliverEngaging">&nbsp;</span>
                </h2>
              </div>
              <div className="interactiveScalableLearning">Interactive, scalable learning that drives better outcomes.</div>
            </div>
            <div className="frameWrapper18">
              <div className="getStartedWrapper">
                <div className="getStarted">{`Get Started `}</div>
              </div>
            </div>
          </div>
          <div className="futureReadyVideoWrapper">
            <video ref={futureReadyVideoRef} className="futureReadyVideo" src="/videos/video-1.mp4" autoPlay muted loop playsInline preload="auto" onPlay={() => setIsFutureReadyVideoPaused(false)} onPause={() => setIsFutureReadyVideoPaused(true)} onEnded={() => setIsFutureReadyVideoPaused(true)} onClick={toggleFutureReadyVideo}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="image20" />
      </div>
    </main>
  );
}
