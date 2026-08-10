import type { NextPage } from "next";
import Image from "next/image";
import "./extend.css";

const ExtendedEnterpriseLearning: NextPage = () => {
  return (
    <div className="extendedEnterpriseLearning">
      <div className="frameDiv">
        <div className="resourcesWrapper">
          <div className="useCases">Resources</div>
        </div>
        <div className="homeParent">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <div className="resourcesWrapper">
            <div className="useCases">Use cases</div>
          </div>
        </div>
        <div className="arrowRightDoubleGroup">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <b className="useCases">Extended Enterprise Learning</b>
        </div>
      </div>
      <div className="vectorParent">
        <svg className="groupChild" width="1440" height="475" viewBox="0 0 1440 475" fill="none" aria-hidden="true">
          <g filter="url(#extendedEnterpriseFrameShadow)">
            <path d="M1 304.682C1 301.92 2.15567 299.521 4.51122 298.078C46.7033 272.244 459.73 23.6761 731.577 24.0003C999.262 24.3196 1395.87 272.158 1436.59 298.06C1438.88 299.515 1440 301.879 1440 304.591V442.97C1440 447.388 1436.69 450.97 1432.27 450.97C1374 450.979 998.628 451.033 731.577 450.969C463.141 450.904 68.5273 450.959 8.71312 450.968C4.29435 450.968 1 447.386 1 442.967V304.682Z" fill="#DFE6E9" />
          </g>
          <defs>
            <filter id="extendedEnterpriseFrameShadow" x="-23" y="0" width="1487" height="475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="8" dy="8" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1DropShadow" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
              <feOffset dx="-8" dy="-8" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha2" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1DropShadow" result="effect2DropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2DropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
        <div className="frameParent2">
          <div className="frameParent3">
            <div className="frameIcon">Extended Enterprise Learning</div>
            <div className="extendLearningBeyondYourWoParent">
              <b className="extendLearningBeyond">Extend Learning Beyond Your Workforce</b>
              <div className="trainPartnersVendors">Train partners, vendors, distributors, and customers on one connected platform.</div>
            </div>
          </div>

          <div className="frameParent4">
            <div className="frameChild2 heroPillBlue">Partner Training</div>
            <div className="frameChild2 heroPillPink">Product Knowledge</div>
            <div className="frameChild4 heroPillGreen">Certifications</div>
            <div className="frameChild4 heroPillPurple">Compliance</div>
          </div>
        </div>
      </div>
      <div className="frameParent5">
        <div className="frameParent6">
          <div className="frameWrapper">
            <div className="onePlatformEveryStakeholdeWrapper">
              <b className="onePlatformEvery">One Platform! Every Stakeholder!</b>
            </div>
          </div>
          <div className="neurolxpConnectsYour">NeuroLXP connects your ecosystem with consistent learning and stronger performance.</div>
        </div>
        <div className="frameParent7">
          <div className="frameChild6">
            <div className="stakeholderTimelineRail" />

            <div className="stakeholderTimelineNode stakeholderTimelineNode1">
              <div className="stakeholderTimelineInner stakeholderTimelineInnerPink">
                <Image className="stakeholderTimelineIcon" src="/icons/ideapink.svg" width={40} height={40} alt="" />
              </div>
            </div>

            <div className="stakeholderTimelineNode stakeholderTimelineNode2">
              <div className="stakeholderTimelineInner stakeholderTimelineInnerBlue">
                <Image className="stakeholderTimelineIcon" src="/icons/globeblue.svg" width={40} height={40} alt="" />
              </div>
            </div>

            <div className="stakeholderTimelineNode stakeholderTimelineNode3">
              <div className="stakeholderTimelineInner stakeholderTimelineInnerPurple">
                <Image className="stakeholderTimelineIcon" src="/icons/target-purple.svg" width={40} height={40} alt="" />
              </div>
            </div>

            <div className="stakeholderTimelineNode stakeholderTimelineNode4">
              <div className="stakeholderTimelineInner stakeholderTimelineInnerGreen">
                <Image className="stakeholderTimelineIcon" src="/icons/chartup-green.svg" width={40} height={40} alt="" />
              </div>
            </div>
          </div>
          <div className="frameParent8">
            <div className="frameWrapper2">
              <div className="stakeholderCardContent">
                <div className="stakeholderChallenge stakeholderChallengePink">CHALLENGE 1</div>
                <b className="stakeholderCardTitle">Inconsistent Knowledge</b>
                <div className="stakeholderCardDescription">Partners may lack up-to-date product and process knowledge.</div>
              </div>
              <div className="stakeholderHelpBox stakeholderHelpPink">
                <b className="stakeholderHelpTitle stakeholderHelpTitlePink">HOW NEUROLXP HELPS</b>
                <div className="stakeholderHelpText">Centralized training keeps partners informed and aligned.</div>
              </div>
            </div>

            <div className="frameWrapper2">
              <div className="stakeholderCardContent">
                <div className="stakeholderChallenge stakeholderChallengeBlue">CHALLENGE 2</div>
                <b className="stakeholderCardTitle">Global Training</b>
                <div className="stakeholderCardDescription">Global partners often lack consistent training across regions.</div>
              </div>
              <div className="stakeholderHelpBox stakeholderHelpBlue">
                <b className="stakeholderHelpTitle stakeholderHelpTitleBlue">HOW NEUROLXP HELPS</b>
                <div className="stakeholderHelpText">Deliver consistent learning anytime, anywhere.</div>
              </div>
            </div>

            <div className="frameWrapper2">
              <div className="stakeholderCardContent">
                <div className="stakeholderChallenge stakeholderChallengePurple">CHALLENGE 3</div>
                <b className="stakeholderCardTitle">Product &amp; Brand Consistency</b>
                <div className="stakeholderCardDescription">Poor training can lead to inconsistent messaging and product usage.</div>
              </div>
              <div className="stakeholderHelpBox stakeholderHelpPurple">
                <b className="stakeholderHelpTitle stakeholderHelpTitleBlue">HOW NEUROLXP HELPS</b>
                <div className="stakeholderHelpText">Build product expertise through training and certifications.</div>
              </div>
            </div>

            <div className="frameWrapper2">
              <div className="stakeholderCardContent">
                <div className="stakeholderChallenge stakeholderChallengeGreen">CHALLENGE 4</div>
                <b className="stakeholderCardTitle">Progress Tracking</b>
                <div className="stakeholderCardDescription">Track partner training, certifications, and compliance with ease.</div>
              </div>
              <div className="stakeholderHelpBox stakeholderHelpGreen">
                <b className="stakeholderHelpTitle stakeholderHelpTitleBlue">HOW NEUROLXP HELPS</b>
                <div className="stakeholderHelpText">Solution: Track completion, certifications, and compliance with analytics.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent13">
        <div className="frameParent14">
          <div className="frameChild15">Benefits</div>
          <div className="benefitsOfExtendedEnterprisParent">
            <b className="benefitsOfExtendedContainer">
              <span className="benefitsOfExtended">Benefits of Extended</span>
              <span className="enterpriseLearning"> Enterprise Learning</span>
            </b>
            <div className="aUnifiedLearning">
              A unified learning environment strengthens collaboration and performance across the full enterprise network.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="frameParent15">
          <div className="frameParent16">
            <div className="frameParent17">
              <div className="frameChild16">
                <div className="benefitIconInner">
                  <Image className="benefitIconImage" src="/icons/check.svg" width={34} height={34} alt="" />
                </div>
              </div>
              <div className="consistentTrainingParent">
                <b className="consistentTraining">Consistent Training</b>
                <div className="standardizeLearningAcross">Standardize learning across your ecosystem.</div>
              </div>
            </div>
            <div className="frameParent18">
              <div className="frameChild16">
                <div className="benefitIconInner">
                  <Image className="benefitIconImage" src="/icons/security-check.svg" width={34} height={34} alt="" />
                </div>
              </div>
              <div className="consistentTrainingParent">
                <b className="consistentTraining">Brand Consistency</b>
                <div className="deliverConsistentCustomer">Deliver consistent customer experiences.</div>
              </div>
            </div>
            <div className="frameParent19">
              <div className="frameChild16">
                <div className="benefitIconInner">
                  <Image className="benefitIconImage" src="/icons/chartdarkgreen.svg" width={34} height={34} alt="" />
                </div>
              </div>
              <div className="consistentTrainingParent">
                <b className="complianceTracking">Compliance Tracking</b>
                <div className="monitorCertificationsAnd">Monitor certifications and training completion.</div>
              </div>
            </div>
          </div>
          <div className="frameParent20">
            <div className="frameParent17">
              <div className="frameChild16">
                <div className="benefitIconInner">
                  <Image className="benefitIconImage" src="/icons/bulbpurple.svg" width={34} height={34} alt="" />
                </div>
              </div>
              <div className="betterProductKnowledgeParent">
                <b className="consistentTraining">Better Product Knowledge</b>
                <div className="improveProductUnderstanding">Improve product understanding and expertise.</div>
              </div>
            </div>
            <div className="frameParent22">
              <div className="frameChild16">
                <div className="benefitIconInner">
                  <Image className="benefitIconImage" src="/icons/globe-02.svg" width={34} height={34} alt="" />
                </div>
              </div>
              <div className="consistentTrainingParent">
                <b className="globalScale">Global Scale</b>
                <div className="standardizeLearningAcross">Train external audiences worldwide.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent23">
        <div className="frameParent24">
          <div className="empowerYourExtendedEnterpriParent">
            <b className="empowerYourExtended">
              Empower Your
              <br />
              Extended Enterprise
            </b>
            <div className="neurolxpConnectsTrains">
              NeuroLXP connects, trains, and empowers
              <br />
              your entire business ecosystem.
            </div>
          </div>

          <a className="frameWrapper10" href="/book-a-demo">
            <span className="frameChild21">Book a Demo</span>
          </a>
        </div>

        <div className="empowerImageWrapper">
          <Image className="departmentMeeting1Icon" src="/images/meeting.png" width={633} height={496} sizes="(max-width: 768px) 100vw, 633px" alt="Business team reviewing reports around a table" />
        </div>
      </div>
    </div>
  );
};

export default ExtendedEnterpriseLearning;
