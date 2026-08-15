"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./contentintelligence.css";

const compatibilityCards = [
  {
    id: "documents",
    circleIcon: "/icons/Ellipse 334-10.svg",
    title: "Documents & Presentations",
    icon: "/icons/document-validation.svg",
    openIcon: "/icons/remove-02-5.svg",
    checkIcon: "/icons/blue.svg",
    colorClass: "compatibilityBlue",
    items: ["DOC / DOCX", "PPT / PPTX", "Google Slides", "Digital manuals", "Collaborative documents"],
  },
  {
    id: "video",
    circleIcon: "/icons/Ellipse 334-5.svg",
    title: "Video & Media",
    icon: "/icons/video-01.svg",
    openIcon: "/icons/remove-02-1.svg",
    checkIcon: "/icons/pink.svg",
    colorClass: "compatibilityPink",
    items: ["MP4 video", "Interactive video", "Short-form video", "Live streaming", "Digital media content"],
  },
  {
    id: "elearning",
    circleIcon: "/icons/Ellipse 334-6.svg",
    title: "E-Learning Standards",
    icon: "/icons/online-learning-03.svg",
    openIcon: "/icons/remove-02.svg",
    checkIcon: "/icons/darkyellow.svg",
    colorClass: "compatibilityOrange",
    items: ["SCORM 1.2", "SCORM 2004", "xAPI", "cmi5", "LTI"],
  },
  {
    id: "web",
    circleIcon: "/icons/Ellipse 334-8.svg",
    title: "Web & Modern Content",
    icon: "/icons/monitor.svg",
    openIcon: "/icons/remove-02-4.svg",
    checkIcon: "/icons/purple.svg",
    colorClass: "compatibilityPurple",
    items: ["Web-based presentations", "Progressive Web Apps", "API-driven content", "Mobile learning"],
  },
  {
    id: "interactive",
    circleIcon: "/icons/Ellipse 334-1.svg",
    title: "Interactive Learning",
    icon: "/icons/user-group-02.svg",
    openIcon: "/icons/remove-02-3.svg",
    checkIcon: "/icons/green.svg",
    colorClass: "compatibilityGreen",
    items: ["Microlearning", "Gamified content", "Scenario-based learning", "Interactive presentations"],
  },
  {
    id: "knowledge",
    circleIcon: "/icons/Ellipse 334-3.svg",
    title: "Knowledge Content",
    icon: "/icons/brain-cog-1.svg",
    openIcon: "/icons/remove-02-2.svg",
    checkIcon: "/icons/yellow.svg",
    colorClass: "compatibilityGold",
    items: ["Visual storytelling", "Wikis", "Dynamic knowledge bases", "Digital documentation"],
  },
];

const ContentIntelligenceManagement: NextPage = () => {
  const learningOrganizationCards = [
    {
      title: "Higher Education",
      description: "Manage academic content and learning programs at scale.",
      image: "/images/firstlady.webp",
      alt: "Graduate holding a diploma",
    },
    {
      title: "Schools & Digital Learning",
      description: "Create structured and engaging digital education experiences.",
      image: "/images/second.webp",
      alt: "Learners using digital learning resources",
    },
    {
      title: "Corporate",
      description: "Support employee growth and upskilling.",
      image: "/images/third.webp",
      alt: "Professionals collaborating in a workplace",
    },
  ];

  const [activeLearningCard, setActiveLearningCard] = useState(0);
  const [learningSlideDirection, setLearningSlideDirection] = useState<"next" | "previous">("next");
  const [openCompatibilityCard, setOpenCompatibilityCard] = useState<string | null>(null);

  const previousLearningCard = (activeLearningCard - 1 + learningOrganizationCards.length) % learningOrganizationCards.length;
  const nextLearningCard = (activeLearningCard + 1) % learningOrganizationCards.length;

  const showPreviousLearningCard = () => {
    setLearningSlideDirection("previous");
    setActiveLearningCard((current) => (current - 1 + learningOrganizationCards.length) % learningOrganizationCards.length);
  };

  const showNextLearningCard = () => {
    setLearningSlideDirection("next");
    setActiveLearningCard((current) => (current + 1) % learningOrganizationCards.length);
  };

  const showLearningCard = (index: number) => {
    if (index === activeLearningCard) return;

    setLearningSlideDirection(index > activeLearningCard ? "next" : "previous");
    setActiveLearningCard(index);
  };

  useEffect(() => {
    const autoSlideTimer = window.setTimeout(() => {
      setLearningSlideDirection("next");
      setActiveLearningCard((current) => (current + 1) % learningOrganizationCards.length);
    }, 4000);

    return () => window.clearTimeout(autoSlideTimer);
  }, [activeLearningCard, learningOrganizationCards.length]);
  return (
    <>
      <main className={`contentIntelligenceManagem${openCompatibilityCard ? " compatibilityCardIsOpen" : ""}`}>
        <div className="frameParent">
          <Image className="frameChild" src="/images/content-experience-header.svg" width={1488} height={671} sizes="100vw" alt="" aria-hidden="true" />
          <div className="frameGroup">
            <div className="frameContainer">
              <p className="headerContentExperienceBadge">Content Experience</p>
              <div className="onePlatformManyFormatSmaParent">
                <h1 className="onePlatformMany semanticBoldHeading">One Platform! Many Format! Smarter Learning</h1>
                <div className="bringContentTogether">{`Bring content together and transform it into engaging learning experiences. `}</div>
              </div>
            </div>
            <div className="frameWrapper">
              <button className="headerBookDemoButton" type="button">
                <span>Book a Demo</span>
              </button>
            </div>
          </div>
        </div>

        <div className="frameParent4">
          <div className="featuresWrapper">
            <div className="augmentation">Features</div>
          </div>

          <div className="homeParent">
            <Image className="arrowDown01Icon" src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <div className="featuresWrapper">
              <div className="augmentation">Augmentation</div>
            </div>
          </div>

          <div className="arrowRightDoubleGroup">
            <Image className="arrowDown01Icon" src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <span className="augmentation">Content Intelligence &amp; Management</span>
          </div>
        </div>

        <div className="frameParent22">
          <div className="frameWrapper3">
            <div className="frameWrapper4">
              <div className="frameParent23">
                <div className="frameChild12" aria-hidden="true" />
                <div className="onePlatformManyFormatSmaParent">
                  <h2 className="turnExistingKnowledge semanticBoldHeading">Turn Existing Knowledge into Better Learning</h2>
                  <div className="neurolxpTransformsContent">NeuroLXP transforms content across formats into structured, learner-focused experiences.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent24">
            <div className="frameParent25">
              <div className="frameParent26">
                <div className="frameWrapper5">
                  <div className="frameWrapper6">
                    <div className="frameWrapper7">
                      <div className="image20Parent">
                        <div className="image20" />
                        <div className="makeComplexContent">Make complex content easy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frameWrapper8">
                  <div className="frameWrapper9">
                    <div className="frameWrapper10">
                      <div className="image21Parent">
                        <div className="image21" />
                        <h3 className="smartSummaries semanticBoldHeading">Smart Summaries</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent26">
                <div className="frameWrapper5">
                  <div className="frameWrapper6">
                    <div className="frameWrapper7">
                      <div className="image20Parent">
                        <div className="image20" />
                        <div className="highlightEssentialConcepts">Highlight essential concepts</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frameWrapper14">
                  <div className="frameWrapper9">
                    <div className="frameWrapper10">
                      <div className="image21Parent">
                        <div className="image21" />
                        <h3 className="keyInsights semanticBoldHeading">Key Insights</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent26">
                <div className="frameWrapper5">
                  <div className="frameWrapper6">
                    <div className="frameWrapper7">
                      <div className="image20Parent">
                        <div className="image20" />
                        <div className="highlightEssentialConcepts">Organize clear learning journeys</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frameWrapper20">
                  <div className="frameWrapper9">
                    <div className="frameWrapper10">
                      <div className="image21Parent">
                        <div className="image21" />
                        <h3 className="smartStructure semanticBoldHeading">Smart Structure</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent29">
              <div className="frameParent26">
                <div className="frameWrapper5">
                  <div className="frameWrapper6">
                    <div className="frameWrapper7">
                      <div className="image20Parent">
                        <div className="image20" />
                        <div className="createFocusedPractice">Create focused practice resources</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frameWrapper26">
                  <div className="frameWrapper9">
                    <div className="frameWrapper10">
                      <div className="image21Parent">
                        <div className="image21" />
                        <h3 className="examReady semanticBoldHeading">Exam Ready</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent26">
                <div className="frameWrapper5">
                  <div className="frameWrapper6">
                    <div className="frameWrapper7">
                      <div className="image20Parent">
                        <div className="image20" />
                        <div className="inspireDeeperThinking">Inspire deeper thinking and exploration</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frameWrapper26">
                  <div className="frameWrapper9">
                    <div className="frameWrapper10">
                      <div className="image21Parent">
                        <div className="image21" />
                        <h3 className="explore semanticBoldHeading">Explore</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangleParent">
          <Image className="frameChild13" src="/images/image-shadow.webp" width={1196} height={595} sizes="100vw" alt="" aria-hidden="true" />
          <div className="frameParent32">
            <div className="frameWrapper35">
              <div className="frameContainer">
                <p className="contentCreationBadge">Content Creation</p>
                <div className="onePlatformManyFormatSmaParent">
                  <h1 className="onePlatformMany semanticBoldHeading">
                    <span className="buildEngaging">Build Engaging</span>
                    <span className="learningExperiences"> Learning Experiences</span>
                  </h1>
                  <div className="bringContentTogether">Give educators and instructional designers the tools to create learning experiences that go beyond static content.</div>
                </div>
              </div>
            </div>
            <div className="rectangleGroup">
              <div className="frameChild15" aria-hidden="true" />
              <div className="createEngageLearnParent">
                <h2 className="createEngageLearn semanticBoldHeading">Create! Engage! Learn</h2>
                <div className="frameParent34">
                  <div className="frameParent35">
                    <div className="frameWrapper36">
                      <div className="checkmarkCircle04Parent">
                        <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className="interactiveLearning">Interactive learning</div>
                      </div>
                    </div>
                    <div className="frameWrapper37">
                      <div className="checkmarkCircle04Group">
                        <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className="interactiveLearning">Multimedia lessons</div>
                      </div>
                    </div>
                    <div className="frameWrapper37">
                      <div className="checkmarkCircle04Container">
                        <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className="interactiveLearning">Clickable content</div>
                      </div>
                    </div>
                  </div>
                  <div className="frameParent35">
                    <div className="frameWrapper36">
                      <div className="checkmarkCircle04Parent">
                        <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className="interactiveLearning">Smart Assessments</div>
                      </div>
                    </div>
                    <div className="frameWrapper36">
                      <div className="checkmarkCircle04Parent3">
                        <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className="interactiveLearning">Gamified activities</div>
                      </div>
                    </div>
                    <div className="frameWrapper36">
                      <div className="checkmarkCircle04Parent4">
                        <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className="interactiveLearning">Real Scenarios</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent37">
          <div className="frameWrapper42">
            <div className="frameWrapper43">
              <div className="frameParent38">
                <div className="frameParent39">
                  <p className="contentCompatibilityBadge">Content Compatibility</p>
                  <h2 className="contentThatWorks semanticBoldHeading">Content That Works for Every Learner</h2>
                </div>
                <div className="neurolxpSupportsDiverse">NeuroLXP supports diverse content formats for seamless learning delivery.</div>
              </div>
            </div>
          </div>
          <div className="frameParent40 compatibilitySwitchGrid">
            {compatibilityCards.map((card) => {
              const isOpen = openCompatibilityCard === card.id;

              return (
                <article className={`compatibilitySwitchCard ${card.colorClass}${isOpen ? " compatibilitySwitchCardOpen" : ""}`} key={card.id}>
                  <div className="compatibilitySwitchHeader">
                    <div className="compatibilitySwitchTitle">
                      <span className="contentFormatIcon" aria-hidden="true">
                        {isOpen ? <Image className="contentFormatOpenIcon" src={card.openIcon} width={24} height={24} sizes="24px" alt="" /> : <Image className="contentFormatGlyph" src={card.icon} width={28} height={28} sizes="28px" alt="" />}
                      </span>

                      <h3 className="documentsPresentations semanticBoldHeading">{card.title}</h3>
                    </div>

                    <button className="compatibilitySwitchButton" type="button" onClick={() => setOpenCompatibilityCard((currentCard) => (currentCard === card.id ? null : card.id))} aria-expanded={isOpen} aria-label={`${isOpen ? "Close" : "Open"} ${card.title}`}>
                      <Image className="arrowDownDoubleIcon" src="/icons/arrow-down-double.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="compatibilitySwitchDetails" id={`${card.id}-details`}>
                      <ul className="compatibilitySwitchList">
                        {card.items.map((item) => (
                          <li className="compatibilitySwitchItem" key={item}>
                            <span className="compatibilitySwitchCheck" aria-hidden="true">
                              <Image src={card.checkIcon} width={24} height={24} sizes="24px" alt="" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="frameParent55">
          <div className="frameParent56">
            <div className="frameParent57">
              <p className="centralizedContentBadge">Centralized Content Management</p>
              <h2 className="organizeLearningContent semanticBoldHeading">Organize Learning Content in One Place</h2>
            </div>
            <div className="manageLearningResources">Manage learning resources efficiently through a centralized content environment.</div>
          </div>
          <div className="frameWrapper62">
            <div className="frameWrapper63">
              <div className="frameWrapper64">
                <div className="frameParent58">
                  <div className="frameParent59">
                    <span className="managementCheckIcon" aria-hidden="true">
                      <Image className="managementCheckMark" src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className="organizeByCourse">Organize by course or subject</div>
                  </div>
                  <div className="frameParent59">
                    <span className="managementCheckIcon" aria-hidden="true">
                      <Image className="managementCheckMark" src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className="manageFromOne">Manage from one workspace</div>
                  </div>
                  <div className="frameParent59">
                    <span className="managementCheckIcon" aria-hidden="true">
                      <Image className="managementCheckMark" src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className="maintainContentVersions">Maintain content versions</div>
                  </div>
                  <div className="frameParent59">
                    <span className="managementCheckIcon" aria-hidden="true">
                      <Image className="managementCheckMark" src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className="updateWithoutDisruption">Update without disruption</div>
                  </div>
                  <div className="frameParent59">
                    <span className="managementCheckIcon" aria-hidden="true">
                      <Image className="managementCheckMark" src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className="keepContentStructured">Keep content structured</div>
                  </div>
                  <div className="frameParent59">
                    <span className="managementCheckIcon" aria-hidden="true">
                      <Image className="managementCheckMark" src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className="ensureConsistencyAcross">Ensure consistency across teams</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image20Parent4">
          <div className="image206" />
          <div className="arrowDownBig" />
          <div className="frameParent65">
            <div className="frameWrapper3">
              <div className="frameWrapper66">
                <div className="frameParent23">
                  <p className="contentValueBadge">Content Value</p>
                  <div className="onePlatformManyFormatSmaParent">
                    <h2 className="turnExistingContent semanticBoldHeading">Turn Existing Content into Better Learning</h2>
                    <div className="neurolxpHelpsInstitutions">NeuroLXP helps institutions and educators get more value from their existing learning resources.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent67">
              <div className="frameParent68">
                <div className="frameParent69">
                  <div className="frameChild31" />
                  <div className="rectangleContainer">
                    <div className="rectangleDiv" aria-hidden="true" />
                    <div className="buildEngagingExperiences">Build engaging experiences</div>
                  </div>
                  <div className="createWrapper">
                    <h3 className="create semanticBoldHeading">Create</h3>
                  </div>
                </div>
                <div className="frameWrapper67">
                  <div className="frameParent70">
                    <div className="rectangleParent2">
                      <div className="frameChild32" aria-hidden="true" />
                      <div className="curateWrapper">
                        <h3 className="curate semanticBoldHeading">Curate</h3>
                      </div>
                    </div>
                    <div className="transformExistingResources">Transform existing resources</div>
                  </div>
                </div>
              </div>
              <div className="frameParent71">
                <div className="frameWrapper68">
                  <div className="frameParent72">
                    <div className="rectangleParent2">
                      <div className="frameChild33" aria-hidden="true" />
                      <div className="organizeWrapper">
                        <div className="organize">Organize</div>
                      </div>
                    </div>
                    <div className="structureLearningJourneys">Structure learning journeys</div>
                  </div>
                </div>
                <div className="frameParent73">
                  <div className="frameChild34" aria-hidden="true" />
                  <div className="frameParent74">
                    <div className="deliverWrapper">
                      <h3 className="deliver semanticBoldHeading">Deliver</h3>
                    </div>
                    <div className="enableFlexibleLearning">Enable flexible learning</div>
                  </div>
                </div>
              </div>
              <div className="frameParent75">
                <div className="frameWrapper68">
                  <div className="frameParent72">
                    <div className="rectangleParent2">
                      <div className="frameChild35" aria-hidden="true" />
                      <div className="organizeWrapper">
                        <h3 className="measure semanticBoldHeading">Measure</h3>
                      </div>
                    </div>
                    <div className="structureLearningJourneys">Track content performance</div>
                  </div>
                </div>
                <div className="frameParent73">
                  <div className="frameChild34" aria-hidden="true" />
                  <div className="frameParent74">
                    <div className="improveWrapper">
                      <h3 className="improve semanticBoldHeading">Improve</h3>
                    </div>
                    <div className="enableFlexibleLearning">Enhance learning content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent79">
          <div className="frameParent80">
            <div className="frameParent81">
              <div className="frameParent57">
                <p className="learningScaleBadge">Built for Learning at Scale</p>
                <h2 className="onePlatformFor semanticBoldHeading">One Platform for Every Learning Organization</h2>
              </div>
              <div className="neurolxpSupportsOrganization">NeuroLXP supports organizations managing diverse learning content and large digital learning ecosystems.</div>
            </div>

            <div className="frameParent83">
              <div className="frameParent84">
                <button className="learningArrowButton learningArrowButtonLeft" type="button" onClick={showPreviousLearningCard} aria-label="Show previous learning organization">
                  <span className="learningArrowInner" aria-hidden="true">
                    <Image className="learningArrowIcon" src="/icons/arrow-left-02.svg" width={32} height={32} sizes="32px" alt="" />
                  </span>
                </button>

                <button className="learningArrowButton learningArrowButtonRight" type="button" onClick={showNextLearningCard} aria-label="Show next learning organization">
                  <span className="learningArrowInner" aria-hidden="true">
                    <Image className="learningArrowIcon" src="/icons/arrow-right-02.svg" width={32} height={32} sizes="32px" alt="" />
                  </span>
                </button>
              </div>

              <div className="frameParent85">
                <div className={`frameParent86 learningCarouselMotion learningCarouselMotion-${learningSlideDirection}`} key={`${activeLearningCard}-${learningSlideDirection}`}>
                  <div className="frameParent87">
                    <Image className="frameChild40" src={learningOrganizationCards[nextLearningCard].image} width={322} height={229} sizes="322px" alt={learningOrganizationCards[nextLearningCard].alt} />
                    <div className="corporateParent">
                      <h3 className="corporate semanticBoldHeading">{learningOrganizationCards[nextLearningCard].title}</h3>
                      <div className="supportEmployeeGrowth">{learningOrganizationCards[nextLearningCard].description}</div>
                    </div>
                  </div>

                  <div className="frameParent88">
                    <Image className="frameChild41" src={learningOrganizationCards[previousLearningCard].image} width={405} height={283} sizes="405px" alt={learningOrganizationCards[previousLearningCard].alt} />
                    <div className="schoolsDigitalLearningParent">
                      <h3 className="corporate semanticBoldHeading">{learningOrganizationCards[previousLearningCard].title}</h3>
                      <div className="createStructuredAnd">{learningOrganizationCards[previousLearningCard].description}</div>
                    </div>
                  </div>

                  <div className="frameWrapper70">
                    <div className="frameParent89">
                      <Image className="frameChild42" src={learningOrganizationCards[activeLearningCard].image} width={469} height={377} sizes="469px" alt={learningOrganizationCards[activeLearningCard].alt} />
                      <div className="higherEducationParent">
                        <h3 className="corporate semanticBoldHeading">{learningOrganizationCards[activeLearningCard].title}</h3>
                        <div className="createStructuredAnd">{learningOrganizationCards[activeLearningCard].description}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <nav className="frameParent90" aria-label="Learning organization slides">
                  {learningOrganizationCards.map((card, index) => (
                    <button className={index === activeLearningCard ? "frameChild43" : "ellipseDiv"} type="button" key={card.title} onClick={() => showLearningCard(index)} aria-label={`Show ${card.title}`} aria-current={index === activeLearningCard ? "true" : undefined} />
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="frameParent91">
            <div className="frameWrapper4">
              <div className="frameParent23">
                <p className="whyNeurolxpBadge">Why NeuroLXP?</p>
                <div className="onePlatformManyFormatSmaParent">
                  <h2 className="turnExistingContent semanticBoldHeading">
                    <span className="buildEngaging">{`From Content to `}</span>
                    <span className="learningExperiences">Intelligence</span>
                  </h2>
                  <div className="neurolxpHelpsInstitutions">Traditional LMS platforms store content. NeuroLXP transforms, creates, manages, and improves learning experiences.</div>
                </div>
              </div>
            </div>
            <div className="rectangleParent5">
              <div className="frameChild48" />
              <div className="frameChild49" />
              <div className="frameParent93">
                <span className="intelligenceFeatureIcon intelligenceFeatureGreen" aria-hidden="true">
                  <Image className="combinedIntelligenceIcon" src="/icons/educator-green-complete.svg" width={70} height={70} sizes="70px" alt="" />
                  <Image className="embeddedFeatureGlyph" src="/icons/teacher.svg" width={32} height={32} sizes="32px" alt="" />
                </span>
                <div className="forEducatorsParent">
                  <h3 className="forEducators semanticBoldHeading">
                    For Educators
                    <br />
                  </h3>
                  <div className="lessContentWork">Less content work. More teaching</div>
                </div>
              </div>
              <div className="frameChild51" />
              <div className="frameParent94">
                <span className="intelligenceFeatureIcon intelligenceFeatureOrange" aria-hidden="true">
                  <Image className="learnerCombinedIcon" src="/icons/student-saffron-circle.svg" width={70} height={70} sizes="70px" alt="" />
                </span>
                <div className="forEducatorsParent">
                  <h3 className="forEducators semanticBoldHeading">
                    For Learners
                    <br />
                  </h3>
                  <div className="accessFocusedResources">Access focused resources, practice, and learn deeper</div>
                </div>
              </div>
              <div className="frameParent95">
                <span className="intelligenceFeatureIcon intelligenceFeatureBlue" aria-hidden="true">
                  <Image className="combinedIntelligenceIcon" src="/icons/social-blue-bg.svg" width={70} height={70} sizes="70px" alt="" />
                  <Image className="embeddedFeatureGlyph" src="/icons/building-03.svg" width={32} height={32} sizes="32px" alt="" />
                </span>
                <div className="forEducatorsParent">
                  <h3 className="forEducators semanticBoldHeading">
                    For Institutions
                    <br />
                    <br />
                  </h3>
                  <div className="manageContentAt">
                    Manage content
                    <br />
                    at scale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent96">
          <div className="frameWrapper72">
            <div className="frameWrapper73">
              <div className="onePlatformSmarterLearningParent">
                <h2 className="contentThatWorks semanticBoldHeading">One Platform! Smarter Learning</h2>
                <div className="neurolxpBringsContent">
                  NeuroLXP brings content intelligence, creation, management, assessments, and analytics together in one platform.
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="requestADemoWrapper">
            <div className="requestADemo">Request a Demo</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContentIntelligenceManagement;
