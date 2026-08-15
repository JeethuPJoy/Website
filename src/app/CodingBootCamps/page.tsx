"use client";

import type { NextPage } from "next";
import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import "./bootcamp.css";

const Bootcamp: NextPage = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (cardNumber: number) => {
    setOpenCards((current) => (current.includes(cardNumber) ? current.filter((number) => number !== cardNumber) : [...current, cardNumber]));
  };

  const firstCardOpen = openCards.includes(1);
  const secondCardOpen = openCards.includes(2);
  const thirdCardOpen = openCards.includes(3);

  const firstRowHeight = firstCardOpen ? 601 : secondCardOpen ? 594 : 198;

  const thirdCardHeight = thirdCardOpen ? 553 : 198;

  const accordionExtraHeight = firstRowHeight - 198 + (thirdCardHeight - 198);

  const accordionStyle = {
    "--accordion-extra-height": `${accordionExtraHeight}px`,
    "--first-row-height": `${firstRowHeight}px`,
    "--third-card-height": `${thirdCardHeight}px`,
  } as CSSProperties;

  return (
    <div className="bootcamp" style={accordionStyle}>
      <b className="text">
        <br />
      </b>
      <div className="bootcampOuterFrame">
        <div className="bootcampInner">
          <div className="rectangleParent">
            <div className="frameDiv">
              <div className="frameParent2">
                <div className="frameItem">Coding Bootcamps</div>
                <b className="masterSoftwareDevelopmentContainer">
                  <span className="masterSoftwareDevelopment">{`Master Software Development Through `}</span>
                  <span className="intensiveLearning">Intensive Learning</span>
                </b>
              </div>
              <div className="neurolabsCodingBootcamps">NeuroLabs Coding Bootcamps build job-ready programming skills through intensive, hands-on learning, real-world coding, interactive labs, and expert mentorship.</div>
            </div>

            <Image className="image33Icon" src="/images/student.webp" width={366} height={578} sizes="366px" alt="Coding bootcamp student" priority />
          </div>
        </div>
      </div>
      <div className="frameParent3">
        <div className="neuroLabsWrapper">
          <div className="codingBootcamps">Neuro Labs</div>
        </div>
        <span className="breadcrumbChevron" aria-hidden="true">
          <span />
          <span />
        </span>
        <div className="arrowRightDoubleParent">
          <b className="codingBootcamps">Coding Bootcamps</b>
        </div>
      </div>
      <div className="frameParent4">
        <div className="rectangleGroup">
          <div className="frameInner" />
          <Image className="rectangleIcon" src="/icons/design.png" width={131.9} height={93.5} sizes="100vw" alt="" />
          <div className="ellipseDiv" />
          <div className="div">1</div>
          <div className="practicalCodingParent">
            <b className="practicalCoding">Practical Coding</b>
            <div className="problemSolving">Problem solving</div>
          </div>
        </div>
        <div className="rectangleGroup">
          <div className="frameInner" />
          <Image className="rectangleIcon" src="/icons/design.png" width={131.9} height={93.5} sizes="100vw" alt="" />
          <div className="ellipseDiv" />
          <div className="div2">2</div>
          <div className="projectLearningParent">
            <b className="projectLearning">Project Learning</b>
            <div className="handsOnPractice">Hands -on Practice</div>
          </div>
        </div>
        <div className="rectangleGroup">
          <div className="frameInner" />
          <Image className="rectangleIcon" src="/icons/design.png" width={131.9} height={93.5} sizes="100vw" alt="" />
          <div className="ellipseDiv" />
          <div className="div3">3</div>
          <div className="careerReadinessParent">
            <b className="careerReadiness">Career Readiness</b>
            <div className="technologyCareers">Technology Careers</div>
          </div>
        </div>
      </div>
      <div className="bootcampChild" />
      <div className="frameParent5">
        <div className="frameParent6">
          <div className="frameIcon">Practical Learning</div>
          <div className="learnByBuildingRealProjectParent">
            <b className="learnByBuilding">
              Learn by Building Real Projects
              <br />
            </b>
            <div className="buildRealProjects">Build real projects and solve coding challenges that mirror real-world development.</div>
          </div>
        </div>
        <div className="frameParent7">
          <div className="frameParent8">
            <div className="frameParent9">
              <div className="frameWrapper">
                <div className="writingAndTestingCodeWrapper">
                  <b className="writingAndTesting">Writing and Testing code</b>
                </div>
              </div>
              <div className="frameChild7 iconBlue">
                <div className="codeIconCircle">
                  <Image className="codeBoxImage" src="/icons/brace.webp" alt="Code" width={40} height={40} />
                </div>
              </div>
            </div>
            <div className="frameParent9">
              <div className="frameWrapper">
                <div className="webAppDevelopmentWrapper">
                  <b className="webApp">{`Web & App Development`}</b>
                </div>
              </div>
              <div className="frameChild7 iconPurple">
                <div className="codeIconCircle">
                  <Image className="codeBoxImage" src="/icons/globe.webp" alt="Code" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent8">
            <div className="frameParent9">
              <div className="frameWrapper">
                <div className="debugOptimizeWrapper">
                  <b className="debugOptimize">{`Debug & Optimize`}</b>
                </div>
              </div>
              <div className="frameChild7 iconPink">
                <div className="codeIconCircle">
                  <Image className="codeBoxImage" src="/icons/icon.webp" alt="Code" width={40} height={40} />
                </div>
              </div>
            </div>
            <div className="frameParent9">
              <div className="frameWrapper">
                <div className="programmingChallengeWrapper">
                  <b className="programmingChallenge">Programming Challenge</b>
                </div>
              </div>
              <div className="frameChild7 iconGreen">
                <div className="codeIconCircle">
                  <Image className="codeBoxImage" src="/icons/icon2.webp" alt="Code" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bootcampInner2">
        <svg className="careerFrameInlineSvg" aria-hidden="true" width="1304" height="303" viewBox="0 0 1304 303" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_903_12470)">
            <path d="M650.266 12.0932C651.419 11.9676 652.581 11.9676 653.733 12.0932L1277.73 80.0995C1285.85 80.9842 1292 87.8397 1292 96.0053V206.803C1292 214.969 1285.85 221.824 1277.73 222.709L653.733 290.715C652.581 290.841 651.419 290.841 650.266 290.715L26.2665 222.709C18.149 221.824 12 214.969 12 206.803V96.0053C12 87.8397 18.1489 80.9842 26.2665 80.0995L650.266 12.0932Z" fill="#DFE6E9" />
            <g filter="url(#filter1_ii_903_12470)">
              <path d="M651.609 44.9043L1268.61 97.1543V201.654L651.609 253.904L34.6094 201.654V97.1543L651.609 44.9043Z" fill="#DFE6E9" />
            </g>
          </g>
          <defs>
            <filter id="filter0_dd_903_12470" x="0" y="-0.0957031" width="1304" height="302.904" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_12470" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_903_12470" result="effect2_dropShadow_903_12470" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_903_12470" result="shape" />
            </filter>
            <filter id="filter1_ii_903_12470" x="30.6094" y="40.9043" width="1242" height="217" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_903_12470" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.776471 0 0 0 0 0.788235 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_903_12470" result="effect2_innerShadow_903_12470" />
            </filter>
          </defs>
        </svg>
        <div className="prepareForHighDemandCareerWrapper">
          <b className="prepareForHighDemand">Prepare for high-demand careers in software and data technology</b>
        </div>
      </div>
      <div className="frameParent14">
        <div className="frameParent15" style={{ height: firstRowHeight }}>
          <div className={`frameWrapper5 accordionCardSpace ${openCards.includes(1) ? "isExpanded" : "isCollapsed"}`}>
            <div className="frameParent16">
              <div className={`frameWrapper6 expandableCardPanel ${openCards.includes(1) ? "isOpen" : ""}`}>
                <div className="bootcampLearningTypicallyInParent">
                  <b className="bootcampLearningTypically">
                    Bootcamp learning typically includes:
                    <br />
                  </b>
                  <div className="frameParent17">
                    <div className="frameParent18">
                      <div className="frameChild12" />
                      <div className="codingFundamentals">Coding Fundamentals</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild12" />
                      <div className="codingFundamentals">Coding Challenges</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild12" />
                      <div className="codingFundamentals">Hands-On Labs</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild12" />
                      <div className="codingFundamentals">Real Projects</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild16" />
                      <div className="performanceFeedback">Performance Feedback</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`frameParent23 expandableCardTrigger ${openCards.includes(1) ? "isActive" : ""}`}>
                <button type="button" className={`frameChild17 cardOpenArrow accordionArrow ${openCards.includes(1) ? "isOpen" : ""}`} onClick={() => toggleCard(1)} aria-expanded={openCards.includes(1)} aria-label={openCards.includes(1) ? "Collapse card 1" : "Expand card 1"}>
                  <svg className="accordionArrowSvg" width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">
                    <path d="M5 3.5L12 10.5L19 3.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 9.5L12 16.5L19 9.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="frameParent24">
                  <div className="frameParent25">
                    <div className="parent">
                      <b className="b">01</b>
                      <div className="frameChild18" />
                    </div>
                    <div className="frameChild19" aria-hidden="true" />
                  </div>
                  <div className="structuredAcceleratedLearnParent">
                    <div className="structuredAccelerated">{`Accelerated Learning`}</div>
                    <div className="fromCodingBasics">From coding basics to real-world applications.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`frameWrapper7 accordionCardSpace ${openCards.includes(2) ? "isExpanded" : "isCollapsed"}`}>
            <div className="frameParent26">
              <div className={`frameWrapper8 expandableCardPanel ${openCards.includes(2) ? "isOpen" : ""}`}>
                <div className="bootcampLearningTypicallyInParent">
                  <b className="bootcampLearningTypically">Career-Focused Training Includes:</b>
                  <div className="frameParent17">
                    <div className="frameParent18">
                      <div className="frameChild12" />
                      <div className="codingFundamentals">Software developer</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild12" />
                      <div className="codingFundamentals">Web developer</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild16" />
                      <div className="performanceFeedback">Application developer</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild12" />
                      <div className="codingFundamentals">Technology analyst</div>
                    </div>
                    <div className="frameParent18">
                      <div className="frameChild16" />
                      <div className="performanceFeedback">Programming specialist</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`frameParent33 expandableCardTrigger ${openCards.includes(2) ? "isActive" : ""}`}>
                <button type="button" className={`frameChild17 cardOpenArrow accordionArrow ${openCards.includes(2) ? "isOpen" : ""}`} onClick={() => toggleCard(2)} aria-expanded={openCards.includes(2)} aria-label={openCards.includes(2) ? "Collapse card 2" : "Expand card 2"}>
                  <svg className="accordionArrowSvg" width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">
                    <path d="M5 3.5L12 10.5L19 3.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 9.5L12 16.5L19 9.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="frameParent24">
                  <div className="frameParent25">
                    <div className="parent">
                      <b className="b">02</b>
                      <div className="frameChild18" />
                    </div>
                    <div className="frameChild19" aria-hidden="true" />
                  </div>
                  <div className="careerFocusedTechnologyTraiParent">
                    <div className="structuredAccelerated">Career Tech Training</div>
                    <div className="buildPracticalCareerReady">Build practical, career-ready technology skills.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`frameWrapper9 accordionCardSpace ${openCards.includes(3) ? "isExpanded" : "isCollapsed"}`}>
          <div className="frameParent36">
            <div className={`frameWrapper10 expandableCardPanel ${openCards.includes(3) ? "isOpen" : ""}`}>
              <div className="usedLearningEnvironmentsInParent">
                <b className="usedLearningEnvironments">
                  Used learning environments, including:
                  <br />
                </b>
                <div className="frameParent17">
                  <div className="frameParent18">
                    <div className="frameChild16" />
                    <div className="performanceFeedback">{`Universities & Colleges`}</div>
                  </div>
                  <div className="frameParent18">
                    <div className="frameChild12" />
                    <div className="codingFundamentals">{`Technical Academies `}</div>
                  </div>
                  <div className="frameParent18">
                    <div className="frameChild12" />
                    <div className="codingFundamentals">{`Corporate Programs `}</div>
                  </div>
                  <div className="frameParent18">
                    <div className="frameChild12" />
                    <div className="codingFundamentals">Upskilling Programs</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`frameParent23 expandableCardTrigger ${openCards.includes(3) ? "isActive" : ""}`}>
              <button type="button" className={`frameChild17 cardOpenArrow accordionArrow ${openCards.includes(3) ? "isOpen" : ""}`} onClick={() => toggleCard(3)} aria-expanded={openCards.includes(3)} aria-label={openCards.includes(3) ? "Collapse card 3" : "Expand card 3"}>
                <svg className="accordionArrowSvg" width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">
                  <path d="M5 3.5L12 10.5L19 3.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 9.5L12 16.5L19 9.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="frameParent24">
                <div className="frameParent25">
                  <div className="parent">
                    <b className="b">03</b>
                    <div className="frameChild18" />
                  </div>
                  <div className="frameChild19" aria-hidden="true" />
                </div>
                <div className="builtForEducationEnterpriseParent">
                  <div className="builtForEducationTitle">{`Education & Enterprise Ready`}</div>
                  <div className="builtForEducationDescription">Deploy across diverse learning environments.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangleParent3">
        <div className="rectangle2" />
        <Image className="image202" src="/images/bootbg.webp" alt="NeuroLabs Coding Bootcamp Background" width={1280} height={800} priority />

        <div className="frameParent45">
          <div className="neurolabsCodingBootcampsFasParent">
            <b className="neurolabsCodingBootcamps2">NeuroLabs Coding Bootcamps Fast-Track Your Coding Journey</b>
            <div className="accelerateYourCoding">Accelerate your coding journey with hands-on projects, expert guidance, and industry-ready training.</div>
          </div>
          <div className="frameWrapper11">
            <div className="frameWrapper12">
              <div className="bookADemoWrapper">
                <div className="bookADemo">Book a Demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangleParent4">
        <div className="rectangle3" />
        <div className="image20" />
        <div className="image21Parent">
          <div className="image21" />
          <div className="futureReadyTechCareersParent">
            <b className="futureReadyTechCareers">Future-Ready Tech Careers</b>
            <Image className="image24Icon" src="/images/tech.webp" width={1216} height={548} sizes="100vw" alt="" />
          </div>
          <div className="frameChild35" />
        </div>
      </div>

      <style jsx global>{`
        .accordionArrow::before,
        .accordionArrow::after {
          display: none !important;
          content: none !important;
        }

        .expandableCardTrigger {
          cursor: default !important;
        }

        .accordionArrow {
          position: absolute !important;
          left: 50% !important;
          right: auto !important;
          top: auto !important;
          bottom: 14px !important;
          width: 34px !important;
          height: 30px !important;
          margin: 0 !important;
          padding: 5px !important;
          border: 0 !important;
          outline: 0;
          background: transparent !important;
          box-shadow: none !important;
          transform: translateX(-50%);
          cursor: pointer;
          z-index: 20;
          appearance: none;
          -webkit-appearance: none;
        }

        .accordionArrowSvg {
          display: block;
          width: 24px;
          height: 20px;
          pointer-events: none;
        }

        .accordionArrow.isOpen {
          transform: translateX(-50%) rotate(180deg);
        }

        .accordionArrow:focus-visible {
          outline: 2px solid #2d4cc8;
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Bootcamp;
