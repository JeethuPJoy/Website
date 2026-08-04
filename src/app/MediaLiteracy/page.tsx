import type { NextPage } from "next";
import Image from "next/image";
import "./medialiteracy.css";

const MediaLiteracy: NextPage = () => {
  return (
    <>
      <main id="main-content" className="mediaLiteracy">
          <div className="mediaLiteracyInner">
            <div className="frameWrapper">
              <div className="image20Parent">
                <div className="image20" />
                <div className="frameContainer">
                  <div className="image21Parent">
                    <div className="image21" />
                    <div className="frameDiv">
                      <Image className="frameChild" src="/images/person.png" width={547} height={640} sizes="(max-width: 768px) 100vw, 547px" alt="People reviewing information on a laptop" priority />
                    </div>
                    <div className="frameParent">
                      <div className="frameGroup">
                        <div className="frameWrapper2">
                          <div className="frameParent2">
                            <div className="spotBiasVerifyFactsBuildWrapper">
                              <b className="spotBiasVerify">Spot Bias! Verify Facts Build Trust</b>
                            </div>
                            <div className="questionHeadlinesVerify">Question Headlines! Verify Facts! Think Critically.</div>
                          </div>
                        </div>
                        <div className="frameItem">Spot Misinformation</div>
                      </div>
                      <div className="frameParent3">
                        <div className="frameParent4">
                          <div className="frameInner frameInnerGreen">
                            <Image className="tickIcon" src="/icons/tick-03-2.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" />
                          </div>
                          <div className="recognizeCredibleSources">Recognize Credible Sources</div>
                        </div>
                        <div className="frameParent4">
                          <div className="frameInner frameInnerPurple">
                            <Image className="tickIcon" src="/icons/tick-03-3.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" />
                          </div>
                          <div className="recognizeCredibleSources">Spot Misleading Content</div>
                        </div>
                        <div className="frameParent6">
                          <div className="frameInner frameInnerCyan">
                            <Image className="tickIcon" src="/icons/tick-03.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" />
                          </div>
                          <div className="recognizeCredibleSources">Verify Facts with Confidence</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent10">
            <div className="neurolxp21Wrapper">
              <div className="neurolxp212">NeuroLXP 2.1</div>
            </div>
            <div className="arrowRightDoubleParent">
              <Image className="arrowRightDoubleIcon" src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" unoptimized />
              <b className="neurolxp212">Media Literacy</b>
            </div>
          </div>
          <section className="heroSection">
            <div className="heroContent">
              <div className="heroCopy">
                <div className="heroBadge">Media literacy</div>

                <h1 className="heroTitle">
                  Think Critically Navigate
                  <span>Confidently</span>
                </h1>

                <p className="heroDescription">Build critical media skills to evaluate information and navigate the digital world confidently.</p>

                <div className="heroStats">
                  <div className="heroStatCard">
                    <div className="heroStatCircle">
                      <strong className="heroStatBlue">87%</strong>
                    </div>
                    <span>Verify News</span>
                  </div>

                  <div className="heroStatCard">
                    <div className="heroStatCircle">
                      <strong className="heroStatGreen">3x</strong>
                    </div>
                    <span>Verify Sources</span>
                  </div>

                  <div className="heroStatCard">
                    <div className="heroStatCircle">
                      <strong className="heroStatOrange">
                        4.9 <span aria-hidden="true">★</span>
                      </strong>
                    </div>
                    <span>Learners Rating</span>
                  </div>
                </div>
              </div>

              <div className="heroImages" >
                <svg className="heroFramePolygon" width="524" height="526" viewBox="0 0 524 526" fill="none" aria-hidden="true" focusable="false">
                  <g filter="url(#filter0_ii_2022_2)">
                    <path d="M261.973 0L523.945 131.5V394.5L261.973 526L-3.05176e-05 394.5V131.5L261.973 0Z" fill="#DFE6E9" />
                  </g>

                  <defs>
                    <filter id="filter0_ii_2022_2" x="-8" y="-8" width="539.945" height="542" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-8" dy="-8" />
                      <feGaussianBlur stdDeviation="8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2022_2" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="8" dy="8" />
                      <feGaussianBlur stdDeviation="8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect1_innerShadow_2022_2" result="effect2_innerShadow_2022_2" />
                    </filter>
                  </defs>
                </svg>

                <div
                  className="heroPhotoPolygon"
                  style={{
                    backgroundImage: "url('/images/polygon1.png')",
                  }}
                  role="img"
                  aria-label="Media literacy learner"
                />
              </div>
            </div>
          </section>
          <div className="frameParent20">
            <div className="frameParent21">
              <div className="frameParent15">
                <div className="frameChild11" aria-hidden="true" />
                <b className="understandTheSystems">Understand the Systems Behind Every Story</b>
              </div>
              <div className="buildEssentialMedia">Build essential media literacy for today's digital world.</div>
            </div>
            <div className="frameParent23">
              <div className="frameParent24">
                <div className="frameParent25">
                  <div className="frameWrapper6">
                    <div className="frameChild12" />
                  </div>
                  <div className="frameChild13" />
                  <div className="platformAwarenessParent">
                    <b className="platformAwareness">
                      Platform Awareness
                      <br />
                    </b>
                    <div className="understandMediaPlatforms">
                      Understand media platforms and their reach
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="frameParent26">
                  <div className="frameWrapper6">
                    <div className="frameChild14" />
                  </div>
                  <div className="frameChild15" />
                  <div className="culturalInfluenceParent">
                    <b className="platformAwareness">
                      Cultural Influence
                      <br />
                    </b>
                    <div className="exploreMediasImpact">Explore media's impact on society</div>
                  </div>
                </div>
              </div>
              <div className="frameParent27">
                <div className="frameParent25">
                  <div className="frameParent28">
                    <div className="frameWrapper6">
                      <div className="frameChild14" />
                    </div>
                    <div className="frameChild17" />
                    <div className="messageIntentParent">
                      <b className="messageIntent">
                        Message Intent
                        <br />
                      </b>
                      <div className="identifyPurposeAudience">Identify purpose, audience, and framing</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent25">
                  <div className="frameWrapper6">
                    <div className="frameChild14" />
                  </div>
                  <div className="frameChild19" />
                  <div className="digitalEcosystemsParent">
                    <b className="platformAwareness">
                      Digital Ecosystems
                      <br />
                    </b>
                    <div className="exploreMediasImpact">
                      Track how content spreads online
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent30">
            <div className="frameParent31">
              <div className="frameParent32">
                <div className="frameChild20">Critical Thinking</div>
                <b className="questionUnderstandEvaluate">
                  {" "}
                  Question! Understand! Evaluate
                  <br />
                </b>
              </div>
              <div className="strengthenYourAbility">
                <br /> Strengthen your ability to analyze information
                <br /> and make informed decisions.
              </div>
            </div>
            <div className="frameParent33">
              <div className="frameWrapper11">
                <div className="frameParent34">
                  <div className="search02Wrapper">
                    <Image className="search02Icon" src="/icons/search-02-1.svg" width={56} height={56} sizes="56px" alt="" aria-hidden="true" />
                  </div>
                  <div className="frameWrapper12">
                    <div className="questionParent">
                      <b className="question">{`Question `}</b>
                      <div className="assessFacts">Assess facts</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper11">
                <div className="frameParent34">
                  <div className="search02Wrapper">
                    <Image className="search02Icon" src="/icons/balance-scale.svg" width={56} height={56} sizes="56px" alt="" aria-hidden="true" />
                  </div>
                  <div className="frameWrapper14">
                    <div className="evaluateParent">
                      <b className="evaluate">{`Evaluate `}</b>
                      <div className="compareViews">
                        {" "}
                        Compare views
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper11">
                <div className="frameParent34">
                  <div className="search02Wrapper">
                    <Image className="search02Icon" src="/icons/brain-01.svg" width={56} height={56} sizes="56px" alt="" aria-hidden="true" />
                  </div>
                  <div className="frameWrapper16">
                    <div className="evaluateParent">
                      <b className="recognize">{`Recognize `}</b>
                      <div className="spotInfluence">
                        Spot influence
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper11">
                <div className="frameParent34">
                  <div className="search02Wrapper">
                    <Image className="search02Icon" src="/icons/chatting-01.svg" width={56} height={56} sizes="56px" alt="" aria-hidden="true" />
                  </div>
                  <div className="frameWrapper18">
                    <div className="evaluateParent">
                      <b className="evaluate">Engage</b>
                      <div className="compareViews">Act responsibly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangleParent">
            <div className="rectangle" />
            <div className="image202" />
            <div className="image21Group">
              <div className="image212" />
              <Image className="image24Icon" src="/images/working.png" width={1216} height={824} sizes="(max-width: 768px) 100vw, 1216px" alt="People working together" />
              <div className="frameParent38">
                <div className="frameParent15">
                  <div className="frameChild21">Responsible Content Creation</div>
                  <b className="createResponsiblyInspireContainer">
                    <span className="thinkCriticallyNavigate">Create Responsibly</span>
                    <br />
                    <span className="thinkCriticallyNavigate">Inspire </span>
                    <span className="confidently">Trust</span>
                  </b>
                </div>
                <div className="createEthicalCredible">
                  Create ethical, credible content
                  <br />
                  with confidence.
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent40">
            <div className="rectangleGroup">
              <div className="rectangle2" />
              <div className="image203" />
              <div className="frameParent41">
                <div className="frameWrapper19">
                  <div className="frameParent42">
                    <div className="navigateMediaWithConfidenceWrapper">
                      <b className="navigateMediaWithContainer">
                        Navigate Media with Confidence
                      </b>
                    </div>
                    <div className="questionHeadlinesVerify">Interactive learning that builds skills to evaluate, engage, and create.</div>
                  </div>
                </div>
                <div className="frameChild22">Why NeuroLXP</div>
              </div>
            </div>
            <div className="frameParent43">
              <div className="frameParent44">
                <div className="misinformationDefenseParent">
                  <b className="misinformationDefense">Misinformation Defense</b>
                  <div className="detectResistAndContainer">
                    <span className="detectResistAnd">
                      Detect, resist, and report misinformation with confidence.
                      <br />
                    </span>
                    <span className="blankLine">&nbsp;</span>
                  </div>
                </div>
                <div className="frameChild23" aria-hidden="true">
                  <Image className="featureEllipse" src="/icons/ellipse%20354-1.svg" alt="" fill sizes="161px" />
                  <Image className="featureIcon" src="/icons/search-02.svg" alt="" width={72} height={72} />
                </div>
              </div>
              <div className="frameParent45">
                <div className="frameChild24" />
                <div className="certifiedDigitalCitizenParent">
                  <b className="misinformationDefense">
                    Certified Digital Citizen
                    <br />
                  </b>
                  <div className="detectResistAndContainer">
                    <span className="detectResistAnd">
                      Earn recognition for ethical and responsible media engagement
                      <br />
                    </span>
                    <span className="blankLine">&nbsp;</span>
                  </div>
                </div>
                <div className="frameChild25" aria-hidden="true">
                  <Image className="featureEllipse" src="/icons/ellipse%20354.svg" alt="" fill sizes="161px" />
                  <Image className="featureIcon" src="/icons/award-04.svg" alt="" width={72} height={72} />
                </div>
              </div>
            </div>
          </div>
          <div className="mediaLiteracyChild">
            <Image src="/icons/arrow-up-01.svg" width={28} height={28} sizes="28px" alt="Back to top" />
          </div>
      </main>
    </>
  );
};

export default MediaLiteracy;
