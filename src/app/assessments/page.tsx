"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import "./assissments.css";

const Assessments: NextPage = () => {
  const audienceCards = [
    {
      title: "Corporate Learning",
      subtitle: "and Development.",
      image: "/icons/Rectangle 77.png",
      className: "audiencePurple",
    },
    {
      title: "Universities and Higher",
      subtitle: "Education",
      image: "/icons/boy fifth image.png",
      className: "audiencePink",
    },
    {
      title: "EdTech & Course",
      subtitle: "Providers",
      image: "/icons/Rectangle 78-2.png",
      className: "audienceOrange",
    },
    {
      title: "Schools and Online",
      subtitle: "Learning",
      image: "/icons/Rectangle 78-3.png",
      className: "audienceBlue",
    },
    {
      title: "Professional",
      subtitle: "Certification",
      image: "/icons/fourth assessments.png",
      className: "audienceGreen",
    },
  ];

  const cardCount = audienceCards.length;
  const [audiencePosition, setAudiencePosition] = useState(cardCount);
  const [audienceTransition, setAudienceTransition] = useState(true);
  const [audiencePaused, setAudiencePaused] = useState(false);

  useEffect(() => {
    if (audiencePaused) return;

    const intervalId = window.setInterval(() => {
      setAudienceTransition(true);
      setAudiencePosition((current) => current + 1);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [audiencePaused]);

  const moveAudience = (direction: number) => {
    setAudienceTransition(true);
    setAudiencePosition((current) => current + direction);
  };

  const handleAudienceTransitionEnd = () => {
    if (audiencePosition >= cardCount * 2) {
      setAudienceTransition(false);
      setAudiencePosition(cardCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAudienceTransition(true));
      });
    } else if (audiencePosition <= 0) {
      setAudienceTransition(false);
      setAudiencePosition(cardCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAudienceTransition(true));
      });
    }
  };

  return (
    <>
      <main id="main-content" className="assessments" tabIndex={-1}>
        <nav className="frameDiv" aria-label="Breadcrumb">
          <div className="featuresWrapper">
            <div className="learningEcoSystem">Features</div>
          </div>
          <div className="homeParent">
            <Image className="arrowDown01Icon" src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <div className="featuresWrapper">
              <div className="learningEcoSystem">{`Learning Eco-system `}</div>
            </div>
          </div>
          <div className="arrowRightDoubleGroup">
            <Image className="arrowDown01Icon" src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <b className="learningEcoSystem">Assessments</b>
          </div>
        </nav>
        <div className="frameParent2">
          <div className="ellipseParent">
            <Image className="frameInner" src="/icons/assessments-hero-oval.svg" width={1280} height={573} sizes="(max-width: 768px) 100vw, 1280px" alt="" aria-hidden="true" priority />
            <div className="ellipseGroup">
              <div className="ellipseDiv" />
              <div className="frameParent3">
                <div className="frameWrapper">
                  <div className="frameParent4">
                    <div className="frameParent5">
                      <div className="heroAssessmentBadge">Advanced Online Assessments</div>
                      <b className="moreThan60Container">
                        <span className="blankLine">{`More than 60 Assessment Formats in a Powerful `}</span>
                        <span className="aiDrivenLms">
                          AI-Driven LMS
                          <br />
                        </span>
                        <span className="blankLine">&nbsp;</span>
                      </b>
                    </div>
                    <div className="neurolxpOffers60">NeuroLXP offers 60+ assessment formats to evaluate knowledge measure skills, and boost engagement.</div>
                  </div>
                </div>
                <div className="frameWrapper2">
                  <button type="button" className="heroBookDemoButton">
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent6">
            <div className="frameWrapper3">
              <div className="frameParent7">
                <div className="wrapper">
                  <b className="b">
                    60+
                    <br />
                  </b>
                </div>
                <div className="assessmentFormatsWrapper">
                  <div className="assessmentFormats">
                    Assessment formats
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="frameWrapper4">
              <div className="frameParent7">
                <div className="wrapper">
                  <b className="b">
                    AI
                    <br />
                    <br />
                  </b>
                </div>
                <div className="assessmentFormatsWrapper">
                  <div className="assessmentFormats">
                    Question generation
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="frameWrapper5">
              <div className="frameParent9">
                <div className="container">
                  <b className="b">
                    5+
                    <br />
                  </b>
                </div>
                <div className="learningSectorsWrapper">
                  <div className="assessmentFormats">
                    Learning sectors
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent10">
          <div className="frameWrapper6">
            <div className="frameWrapper7">
              <div className="frameParent11">
                <div className="assessmentSectionBadge">Why Assessments Matter</div>
                <div className="modernLmsAssessmentsGoBeyoParent">
                  <b className="modernLmsAssessments">
                    Modern LMS Assessments Go Beyond Simple Tests
                    <br />
                  </b>
                  <div className="interactiveGamifiedAnd">
                    Interactive, gamified, and adaptive assessments that measure critical thinking, knowledge, and problem-solving.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent12">
            <div className="frameParent13">
              <div className="frameParent14">
                <div className="benefitCardTop" aria-hidden="true">
                  <Image className="benefitIconCircle" src="/icons/ellipse 334-4.svg" width={61} height={61} alt="" />
                  <Image className="benefitIconGlyph" src="/icons/sparkles.svg" width={25} height={25} alt="" />
                </div>
                <div className="frameWrapper8">
                  <div className="frameWrapper9">
                    <div className="frameWrapper10">
                      <div className="image20Parent">
                        <div className="image20" />
                        <div className="interactiveAndEngaging">
                          Interactive and engaging
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent14">
                <div className="benefitCardTop" aria-hidden="true">
                  <Image className="benefitIconCircle" src="/icons/ellipse 334-3.svg" width={61} height={61} alt="" />
                  <Image className="benefitIconGlyph" src="/icons/target-01.svg" width={25} height={25} alt="" />
                </div>
                <div className="frameWrapper11">
                  <div className="frameWrapper12">
                    <div className="frameWrapper10">
                      <div className="image20Group">
                        <div className="image20" />
                        <div className="alignedWithLearning">
                          Aligned with learning outcomes
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent14">
                <div className="benefitCardTop" aria-hidden="true">
                  <Image className="benefitIconCircle" src="/icons/ellipse 334-2.svg" width={61} height={61} alt="" />
                  <Image className="benefitIconGlyph" src="/icons/globe-02.svg" width={25} height={25} alt="" />
                </div>
                <div className="frameWrapper11">
                  <div className="frameWrapper12">
                    <div className="frameWrapper10">
                      <div className="image20Group">
                        <div className="image20" />
                        <div className="onlineRemote">{`Online & remote learning`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent17">
              <div className="frameParent14">
                <div className="image20Wrapper">
                  <div className="image20" />
                </div>
                <div className="benefitCardTop" aria-hidden="true">
                  <Image className="benefitIconCircle" src="/icons/ellipse 334-1.svg" width={61} height={61} alt="" />
                  <Image className="benefitIconGlyph" src="/icons/chart-up.svg" width={25} height={25} alt="" />
                </div>
                <div className="frameWrapper8">
                  <div className="frameWrapper9">
                    <div className="frameWrapper10">
                      <div className="image20Group">
                        <div className="image20" />
                        <div className="scalableForEducation">Scalable for education and corporate training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent14">
                <div className="benefitCardTop" aria-hidden="true">
                  <Image className="benefitIconCircle benefitIconCircleInset" src="/icons/ellipse 334.svg" width={61} height={61} alt="" />
                  <Image className="benefitIconGlyph" src="/icons/clipboard-list copy.svg" width={25} height={25} alt="" />
                </div>
                <div className="frameWrapper8">
                  <div className="frameWrapper21">
                    <div className="frameWrapper10">
                      <div className="image20Group">
                        <div className="image20" />
                        <div className="idealForExams">Ideal for exams and skill development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessmentsChild" />
        <div className="frameParent20">
          <div className="frameWrapper23">
            <div className="frameWrapper7">
              <div className="frameParent11">
                <div className="formatsSectionBadge">Transform The Way You Assess</div>
                <div className="modernLmsAssessmentsGoBeyoParent">
                  <b className="onlineAssessmentFormats">
                    60+ Online Assessment Formats
                    <br />
                  </b>
                  <div className="interactiveGamifiedAnd">
                    NeuroLXP enables instructors to create flexible, engaging, and meaningful evaluation experiences across multiple learning contexts.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent22">
            <div className="frameParent23">
              <div className="frameWrapper25">
                <div className="frameParent24">
                  <div className="frameWrapper26">
                    <div className="frameChild10" />
                  </div>
                  <div className="frameWrapper27">
                    <div className="frameParent25">
                      <Image className="frameChild11 formatCardIcon" src="/icons/clipboard-list1.svg" width={100} height={100} sizes="100px" alt="Popular online quiz formats" />
                      <b className="popularOnlineQuiz">
                        Popular Online Quiz Formats
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper28">
                <div className="frameParent26">
                  <div className="frameWrapper26">
                    <div className="frameChild10" />
                  </div>
                  <div className="frameWrapper27">
                    <div className="frameParent25">
                      <Image className="frameChild11 formatCardIcon" src="/icons/puzzle.svg" width={100} height={100} sizes="100px" alt="Multimedia-based assessments" />

                      <b className="popularOnlineQuiz">
                        Multimedia-Based
                        <br />
                        Assessments
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper31">
                <div className="frameParent26">
                  <div className="frameWrapper26">
                    <div className="frameChild10" />
                  </div>
                  <div className="frameWrapper27">
                    <div className="frameParent25">
                      <Image className="frameChild11 formatCardIcon" src="/icons/images.svg" width={100} height={100} sizes="100px" alt="Multimedia-based assessments" />
                      <b className="popularOnlineQuiz">
                        Multimedia-Based Assessments
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent30">
              <div className="frameWrapper25">
                <div className="frameParent26">
                  <div className="frameWrapper26" />
                  <div className="frameWrapper27">
                    <div className="frameParent25">
                      <Image className="frameChild11 formatCardIcon" src="/icons/briefcase-01.svg" width={100} height={100} sizes="100px" alt="Real-world application assessments" />
                      <b className="popularOnlineQuiz">
                        Real-World Application Assessments
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper36">
                <div className="frameParent26">
                  <div className="frameWrapper26">
                    <div className="frameChild10" />
                  </div>
                  <div className="frameWrapper27">
                    <div className="frameParent25">
                      <Image className="frameChild11 formatCardIcon" src="/icons/user-group-02.svg" width={100} height={100} sizes="100px" alt="Collaborative and continuous learning" />
                      <b className="popularOnlineQuiz">
                        Collaborative and Continuous Learning
                        <br />
                        <br />
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessmentsInner">
          <div className="frameParent35">
            <div className="frameParent36">
              <div className="frameParent37">
                <div className="aiSectionBadge">AI Intelligence</div>
                <b className="aiPoweredAssessmentIntellig">
                  AI-Powered Assessment Intelligence
                  <br />
                </b>
              </div>
              <div className="neurolxpGoesBeyond">NeuroLXP goes beyond basic LMS testing with AI-driven assessments for smarter, adaptive learning.</div>
            </div>
            <div className="frameParent38">
              <div className="frameParent39">
                <div className="image20Parent4 aiHoverCard aiGenerateCard">
                  <div className="image207" />
                  <div className="frameParent40">
                    <Image className="aiCardIcon aiCardIconBlue" src="/icons/file-question-mark.svg" width={60} height={60} sizes="60px" alt="Generate exam questions" />
                    <div className="generateExamQuestions">Generate Exam Questions</div>
                  </div>
                </div>
                <div className="image20Parent5 aiHoverCard aiPracticeCard">
                  <div className="image207" />
                  <div className="frameParent40">
                    <Image className="aiCardIcon aiCardIconPink" src="/icons/clipboard-list.svg" width={60} height={60} sizes="60px" alt="Create practice quizzes" />
                    <div className="createPracticeQuizzes">
                      Create Practice Quizzes
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent39">
                <div className="image20Parent5 aiHoverCard aiSmartCard">
                  <div className="image207" />
                  <div className="frameParent40">
                    <Image className="aiCardIcon aiCardIconOrange" src="/icons/idea-01.svg" width={60} height={60} sizes="60px" alt="Recommend smart questions" />
                    <div className="recommendSmartQuestions">
                      Recommend Smart Questions
                      <br />
                    </div>
                  </div>
                </div>
                <div className="image20Parent5 aiHoverCard aiAdaptiveCard">
                  <div className="image207" />
                  <div className="frameParent40">
                    <Image className="aiCardIcon aiCardIconPurple" src="/icons/target-02.svg" width={60} height={60} sizes="60px" alt="Enable adaptive testing" />
                    <div className="enableAdaptiveTesting">Enable Adaptive Testing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="frameParent45 audienceSection" aria-labelledby="audience-section-title">
          <div className="audienceHeader">
            <div className="audienceSectionBadge">Who Can Benefit From NeuroLXP?</div>
            <h2 id="audience-section-title" className="audienceTitle">
              Designed for Every <span>Learning Need</span>
            </h2>
            <p className="audienceDescription">Modern digital learning with exams, assessments, skills evaluation, and certification.</p>
          </div>

          <div className="audienceCarouselViewport" onMouseEnter={() => setAudiencePaused(true)} onMouseLeave={() => setAudiencePaused(false)} onFocusCapture={() => setAudiencePaused(true)} onBlurCapture={() => setAudiencePaused(false)}>
            <div className={`audienceCarouselTrack ${audienceTransition ? "" : "audienceCarouselTrackNoTransition"}`} style={{ "--audience-index": audiencePosition } as CSSProperties} onTransitionEnd={handleAudienceTransitionEnd}>
              {[...audienceCards, ...audienceCards, ...audienceCards].map((card, index) => {
                const isFeatured = index === audiencePosition + 1;
                return (
                  <article className={`audienceCard ${card.className} ${isFeatured ? "audienceCardFeatured" : ""}`} key={`${card.title}-${index}`}>
                    <div className="audienceImageWrap">
                      <Image className="audienceImage" src={card.image} width={473} height={258} sizes="(max-width: 767px) 88vw, 473px" alt="" />
                    </div>
                    <div className="audienceCardTitle">
                      <span>{card.title}</span>
                      <span>{card.subtitle}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="audienceControls" role="group" aria-label="Audience carousel controls">
            <button type="button" className="audienceArrowButton" onClick={() => moveAudience(-1)} aria-label="Show previous audience">
              <Image src="/icons/arrow-left-big.svg" width={40} height={40} alt="" aria-hidden="true" />
            </button>
            <div className="audienceControlLine" aria-hidden="true" />
            <button type="button" className="audienceArrowButton" onClick={() => moveAudience(1)} aria-label="Show next audience">
              <Image src="/icons/arrow-right-big.svg" width={40} height={40} alt="" aria-hidden="true" />
            </button>
          </div>
        </section>
        <div className="frameParent49">
          <div className="frameWrapper45">
            <div className="frameWrapper46">
              <div className="aSmarterLmsForDigitalLearParent">
                <b className="aSmarterLms">
                  A Smarter LMS for Digital Learning
                  <br />
                </b>
                <div className="traditionalLmsPlatforms">Traditional LMS platforms offer limited question types. NeuroLXP provides 60+ assessment formats for interactive, engaging online evaluations.</div>
              </div>
            </div>
          </div>
          <div className="requestADemoWrapper">
            <b className="requestADemo">Request a Demo</b>
          </div>
        </div>
      </main>
    </>
  );
};

export default Assessments;
