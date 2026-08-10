import type { NextPage } from "next";
import Image from "next/image";
import "./media.css";

const MediaPresence: NextPage = () => {
  return (
    <>
      <main id="main-content" className="mediaPresence">
        <div className="mediaPresenceChild" aria-hidden="true" />
        <div className="mediaPresenceInner">
          <div className="frameParent">
            <div className="frameGroup">
              <div className="mediaBadge">
                <span>Media Presence</span>
              </div>
              <div className="recognizedInnovationInDigitParent">
                <h1 className="recognizedInnovationIn">Recognized Innovation in Digital Learning</h1>
                <div className="neurolxpIsDriving">NeuroLXP is driving innovation in digital learning and AI-powered education.</div>
              </div>
            </div>
            <div className="frameWrapper">
              <button className="mediaDemoButton" type="button">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        <nav className="frameParent3" aria-label="Breadcrumb">
          <div className="resourcesWrapper">
            <div className="resources2">Resources</div>
          </div>
          <div className="arrowRightDoubleParent">
            <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
            <b className="resources2">{`Media Presence `}</b>
          </div>
        </nav>
        <div className="frameParent4">
          <div className="frameWrapper2">
            <Image className="frameIcon" src="/images/img1-media.png" width={268} height={268} sizes="100vw" alt="" />
          </div>
          <div className="frameWrapper3">
            <Image className="frameChild3" src="/images/img2-media.png" width={368} height={368} sizes="100vw" alt="" />
          </div>
          <div className="frameWrapper4">
            <Image className="frameIcon" src="/images/img3-media.png" width={268} height={268} sizes="100vw" alt="" />
          </div>
        </div>

        <div className="frameParent5">
          <div className="frameWrapper5">
            <div className="frameParent6">
              <div className="frameWrapper6">
                <div className="shapingTheFutureOfLearningParent">
                  <h2 className="shapingTheFuture">Shaping the Future of Learning</h2>
                  <div className="neurolxpDeliversScalable">NeuroLXP delivers scalable customer training that drives product adoption, engagement, and success.</div>
                </div>
              </div>
              <div className="frameChild5" />
            </div>
          </div>
          <div className="rectangleParent">
            <div className="frameChild6" aria-hidden="true" />
            <div className="innovateInspireLeadWrapper">
              <h3 className="innovateInspireLead">Innovate! Inspire! Lead!</h3>
            </div>
            <div className="frameParent7">
              <div className="frameParent8">
                <div className="frameParent9">
                  <div className="frameWrapper7">
                    <div className="brainCircuitParent">
                      <Image className="brainCircuitIcon" src="/icons/braincircuitpurple.svg" width={32} height={32} sizes="100vw" alt="" />
                      <div className="aiPoweredLearning">AI-Powered Learning</div>
                    </div>
                  </div>
                  <div className="frameWrapper8">
                    <div className="globe02Parent">
                      <Image className="brainCircuiticons" src="/icons/internetgreen.svg" width={32} height={32} sizes="100vw" alt="" />
                      <div className="aiPoweredLearning">{`Scalable LMS & LXP`}</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent9">
                  <div className="frameWrapper7">
                    <div className="target02Parent">
                      <Image className="brainCircuitIcon" src="/icons/target-02pink.svg" width={32} height={32} sizes="100vw" alt="" />
                      <div className="aiPoweredLearning">Interactive Learning</div>
                    </div>
                  </div>
                  <div className="frameWrapper7">
                    <div className="studentParent">
                      <Image className="brainCircuitIcon" src="/icons/std.svg" width={32} height={32} sizes="100vw" alt="" />
                      <div className="aiPoweredLearning">Skill Development</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper8">
                <div className="refresh03Parent">
                  <Image className="brainCircuitIcon" src="/icons/refresh-03blue.svg" width={32} height={32} sizes="100vw" alt="" />
                  <div className="aiPoweredLearning">Digital Transformation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent17">
          <div className="frameWrapper19">
            <div className="frameParent18">
              <div className="partnershipsCollaborationWrapper">
                <h2 className="partnershipsCollaboration">Partnerships &amp; Collaboration</h2>
              </div>
              <div className="collaboratingWithInstitution">
                Collaborating with institutions and industry to advance digital learning.
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="frameParent19">
            <div className="frameParent20">
              <div className="frameParent21">
                <div className="frameChild9" />
                <div className="frameParent22">
                  <span className="partnershipIconShell partnershipIconShellPink">
                    <span className="partnershipIconCore">
                      <Image className="partnershipIconImage" src="/icons/student.svg" width={34} height={34} alt="" />
                    </span>
                  </span>
                  <b className="higherEducation">Higher Education</b>
                </div>
              </div>
              <div className="frameParent21">
                <div className="frameChild9" />
                <div className="frameParent24">
                  <span className="partnershipIconShell partnershipIconShellOrange">
                    <span className="partnershipIconCore">
                      <Image className="partnershipIconImage" src="/icons/corporate.svg" width={34} height={34} alt="" />
                    </span>
                  </span>
                  <b className="corporateLearning">Corporate Learning</b>
                </div>
              </div>
            </div>
            <div className="frameParent20">
              <div className="frameParent21">
                <div className="frameChild9" />
                <div className="frameParent22">
                  <span className="partnershipIconShell partnershipIconShellPurple">
                    <span className="partnershipIconCore">
                      <Image className="partnershipIconImage" src="/icons/toolswhite.svg" width={34} height={34} alt="" />
                    </span>
                  </span>
                  <b className="workforceSkills">Workforce Skills</b>
                </div>
              </div>
              <div className="frameParent21">
                <div className="frameChild9" />
                <div className="frameParent29">
                  <span className="partnershipIconShell partnershipIconShellBrown">
                    <span className="partnershipIconCore">
                      <Image className="partnershipIconImage" src="/icons/awardwhite.svg" width={34} height={34} alt="" />
                    </span>
                  </span>
                  <b className="professionalTraining">Professional Training</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image20Parent">
          <div className="image20">
            <svg viewBox="0 0 1232 444" width="1232" height="444" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="mediaDashGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1232" y2="444">
                  <stop offset="0%" stopColor="#BF1869" />
                  <stop offset="35%" stopColor="#8B3FC7" />
                  <stop offset="70%" stopColor="#2D4CC8" />
                  <stop offset="100%" stopColor="#046F73" />
                </linearGradient>
              </defs>
              <path d="M180 1H1044C1139 1 1231 93 1231 188V443H188C84 443 1 360 1 256V188C1 84 84 1 180 1Z" fill="none" stroke="url(#mediaDashGradient)" strokeWidth="2.5" strokeDasharray="8 8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="frameWrapper21">
            <div className="frameChild27" />
          </div>
          <div className="frameParent47">
            <div className="frameParent48">
              <div className="frameChild28">NeuroLXP</div>
              <div className="drivingTheFutureOfLearningParent">
                <h2 className="drivingTheFuture">Driving the Future of Learning</h2>
                <div className="neurolxpEmpowersOrganization">NeuroLXP empowers organizations with smarter, scalable learning ecosystems.</div>
              </div>
            </div>
            <button className="mediaDemoButton" type="button">
              Book a Demo
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MediaPresence;
