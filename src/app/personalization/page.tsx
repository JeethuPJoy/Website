"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import "./personlization.css";

const Personalization: NextPage = () => {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".frameParent21 > article"));
    const cardGroup = document.querySelector<HTMLElement>(".frameParent21");

    if (!cards.length || !cardGroup) return;

    const timers: number[] = [];

    const clearTimers = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.length = 0;
    };

    const resetCards = () => {
      clearTimers();
      cards.forEach((card) => {
        card.classList.remove("windCardVisible");
      });
    };

    const playAnimation = () => {
      resetCards();

      requestAnimationFrame(() => {
        cards.forEach((card, index) => {
          const timer = window.setTimeout(() => {
            card.classList.add("windCardVisible");
          }, index * 280);

          timers.push(timer);
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playAnimation();
        } else {
          resetCards();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(cardGroup);

    return () => {
      clearTimers();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skipLink" href="#main-content">
        Skip to main content
      </a>
      <main id="main-content" className="personalization" tabIndex={-1}>
        <nav className="frameParent3" aria-label="Breadcrumb">
          <div className="frameWrapper">
            <span className="learning">Features</span>
          </div>
          <div className="homeParent">
            <Image className="arrowDown01Icon" src="/icons/arrow-right-double.svg" width={16} height={16} alt="" aria-hidden="true" />
            <div className="frameWrapper">
              <span className="learning">Learning</span>
            </div>
          </div>
          <div className="arrowRightDoubleGroup">
            <Image className="arrowDown01Icon" src="/icons/arrow-right-double.svg" width={16} height={16} alt="" aria-hidden="true" />
            <span className="learning">Personalization</span>
          </div>
        </nav>
        <section className="personalizationHero" aria-labelledby="personalization-hero-title">
          <svg className="personalizationHeroFrame" width="1488" height="863" viewBox="24 0 1440 863" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false">
            <g filter="url(#filter0_dd_3295_67)">
              <path d="M24 32C24 27.5817 27.5817 24 32 24H1456C1460.42 24 1464 27.5817 1464 32V681.387C1464 686.704 1459.01 690.583 1453.88 689.163C1387.61 670.797 1010.1 569.46 748 569.256C484.833 569.051 100.788 670.948 34.0624 689.214C28.9448 690.615 24 686.73 24 681.425V32Z" fill="#DFE6E9" />
              <path d="M24 32C24 27.5817 27.5817 24 32 24H1456C1460.42 24 1464 27.5817 1464 32V681.387C1464 686.704 1459.01 690.583 1453.88 689.163C1387.61 670.797 1010.1 569.46 748 569.256C484.833 569.051 100.788 670.948 34.0624 689.214C28.9448 690.615 24 686.73 24 681.425V32Z" fill="url(#pattern0_3295_67)" fillOpacity="0.15" />
            </g>

            <g filter="url(#filter1_dd_3295_67)">
              <path d="M25 715.364C25 711.754 27.2797 708.63 30.7696 707.704C83.6321 693.672 487.996 588.726 755.577 589.001C1018.9 589.271 1406.97 693.551 1458.32 707.672C1461.77 708.622 1464 711.722 1464 715.305V830.975C1464 835.392 1460.69 838.974 1456.27 838.974C1398 838.982 1022.63 839.029 755.577 838.973C487.14 838.918 92.5265 838.964 32.7129 838.972C28.2942 838.973 25 835.391 25 830.972V715.364Z" fill="#DFE6E9" />
            </g>

            <defs>
              <filter id="filter0_dd_3295_67" x="0" y="0" width="1488" height="713.504" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="8" dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3295_67" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-8" dy="-8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3295_67" result="effect2_dropShadow_3295_67" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3295_67" result="shape" />
              </filter>

              <pattern id="pattern0_3295_67" patternContentUnits="objectBoundingBox" width="0.0583333" height="0.131737">
                <use xlinkHref="#image0_3295_67" transform="scale(0.000694444 0.00149701)" />
              </pattern>

              <filter id="filter1_dd_3295_67" x="1" y="565" width="1487" height="298" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="8" dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3295_67" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-8" dy="-8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3295_67" result="effect2_dropShadow_3295_67" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3295_67" result="shape" />
              </filter>

              <image id="image0_3295_67" width="84" height="88" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAPVJREFUeAHt26ENgEAUBcE7Ql8kFE5CZaAwSLICMaPQm8+5N4/jvAaZZZBan4993+bgs+dPd6ExQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhsWtK1XGhM0Jigsd/vO99v/N83qS40JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSN2XrGXGjsBiaoEmMT2B9KAAAAAElFTkSuQmCC" />
            </defs>
          </svg>

          <div className="personalizationHeroContent">
            <p className="personalizationHeroBadge">Personalization</p>
            <h1 id="personalization-hero-title" className="personalizationHeroTitle">
              Learning That Adapts to You
            </h1>
            <p className="personalizationHeroDescription">NeuroLXP personalizes learning based on each learner&apos;s needs, progress, skills, pace, and goals, creating a smarter, more engaging learning experience.</p>
            <button className="personalizationHeroButton" type="button">
              Book a Demo
            </button>
          </div>

          <ul className="personalizationHeroStats" aria-label="Personalization outcomes">
            <li className="personalizationHeroStat personalizationHeroStatGreen">
              <strong>3x</strong>
              <span>Faster Skill Development</span>
            </li>

            <li className="personalizationHeroStat personalizationHeroStatBlue">
              <strong>92%</strong>
              <span>Completion Rate</span>
            </li>

            <li className="personalizationHeroStat personalizationHeroStatPink">
              <strong>40%</strong>
              <span>Better Retention</span>
            </li>
          </ul>
        </section>

        <div className="vectorParent">
          <Image className="rectangleIcon" src="/images/Rectangle 66.png" width={1440} height={668} sizes="100vw" alt="" aria-hidden="true" />
          <div className="frameParent4">
            <div className="xParent">
              <p className="x" style={{ margin: 0 }}>
                3x
              </p>
              <p className="fasterSkillDevelopment" style={{ margin: 0 }}>
                Faster Skill Development
              </p>
            </div>
            <div className="parent">
              <p className="b" style={{ margin: 0 }}>
                92%
              </p>
              <p className="completionRate" style={{ margin: 0 }}>
                Completion Rate
              </p>
            </div>
            <div className="frameWrapper2">
              <div className="group">
                <p className="b2" style={{ margin: 0 }}>
                  40%
                </p>
                <p className="betterRetention" style={{ margin: 0 }}>
                  Better Retention
                </p>
              </div>
            </div>
          </div>
          <div className="wrapperLine9">
            <Image className="wrapperLine9Child" src="/icons/Line 9.svg" width={17} height={225} alt="" aria-hidden="true" />
          </div>
          <div className="wrapperLine10">
            <Image className="wrapperLine10Child" src="/icons/Line 10.svg" width={15} height={225} alt="" aria-hidden="true" />
          </div>
        </div>
        <section className="frameParent5" aria-labelledby="personalized-learning-heading">
          <div className="personalizedLearningCard">
            <div className="personalizedLearningCopy">
              <p className="personalizedLearningBadge">What Is Personalized Learning?</p>
              <h2 id="personalized-learning-heading" className="learningBuiltAroundContainer">
                <span className="learningBuiltAround">Learning Built Around</span>
                <span className="everyLearner">Every Learner</span>
              </h2>
              <p className="personalizedLearningAdapts">Personalized learning adapts the learning journey to each individual&apos;s knowledge, skills, pace, and goals.</p>
            </div>
            <ul className="personalizedLearningChecklist" aria-label="Personalized learning factors">
              <li className="personalizedLearningPill">
                <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />
                <span>Knowledge Level</span>
              </li>

              <li className="personalizedLearningPill">
                <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />
                <span>Learning Pace</span>
              </li>

              <li className="personalizedLearningPill">
                <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />
                <span>Skill Gaps</span>
              </li>

              <li className="personalizedLearningPill">
                <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />
                <span>Learning Goals</span>
              </li>

              <li className="personalizedLearningPill">
                <Image className="checkmarkCircle04Icon" src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />
                <span>Performance</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="frameParent10" aria-labelledby="personalization-action-title">
          <div className="actionIntro">
            <p className="actionEyebrow" style={{ margin: 0 }}>
              How NeuroLXP Personalizes Learning
            </p>
            <h2 id="personalization-action-title" className="personalizationInAction">
              Personalization in
              <br />
              Action
            </h2>
            <p className="everyLearnerIs">Every learner is unique. NeuroLXP adapts paths, content, and support for purposeful progress.</p>
          </div>

          <div className="frameParent12 actionCards">
            <article className="actionCard actionCardSmart">
              <h3 className="actionCardTitle">Smart Learning</h3>
              <p className="actionCardBody">
                Get content matched to
                <br />
                your goals and skills
              </p>
            </article>

            <article className="actionCard actionCardAdaptive">
              <h3 className="actionCardTitle">Adaptive Pathways</h3>
              <p className="actionCardBody">
                Paths adapt to
                <br />
                performance and pace
              </p>
            </article>

            <article className="actionCard actionCardSkill">
              <h3 className="actionCardTitle">Skill-Gap Analysis</h3>
              <p className="actionCardBody">
                Identify skill gaps with
                <br />
                targeted support
              </p>
            </article>

            <article className="actionCard actionCardProgress">
              <h3 className="actionCardTitle">Progress Learning</h3>
              <p className="actionCardBody">
                Content adapts as
                <br />
                learners progress
              </p>
            </article>
          </div>
        </section>

        <div className="frameParent19">
          <div className="frameWrapper9">
            <div className="frameParent20">
              <p className="frameChild11" style={{ margin: 0 }}>
                Stages Of Personalization
              </p>
              <div className="learningThatAdaptsToYouParent">
                <h2 className="learningThatAdapts">From Assessment to Mastery</h2>
                <p className="neurolxpPersonalizesEvery">NeuroLXP personalizes every stage, from assessment to continuous skill development.</p>
              </div>
            </div>
          </div>
          <div className="frameParent21">
            <article className="frameParent22">
              <p className="frameChild12" style={{ margin: 0 }}>
                01
              </p>
              <div className="understandParent">
                <h3 className="understand">Understand</h3>
                <p className="assessKnowledgeSkills">Assess knowledge, skills, and learning goals</p>
              </div>
            </article>
            <article className="frameParent23">
              <p className="frameChild12" style={{ margin: 0 }}>
                02
              </p>
              <div className="adaptParent">
                <h3 className="understand">Adapt</h3>
                <p className="buildALearning">Build a learning path matched to individual needs</p>
              </div>
            </article>
            <article className="frameParent24">
              <p className="frameChild12" style={{ margin: 0 }}>
                03
              </p>
              <div className="optimizeParent">
                <h3 className="understand">Optimize</h3>
                <p className="useLearningData">Use learning data to continuously refine the experience</p>
              </div>
            </article>
            <article className="frameParent25">
              <p className="frameChild12" style={{ margin: 0 }}>
                04
              </p>
              <div className="developParent">
                <h3 className="develop">Develop</h3>
                <p className="closeSkillGaps">Close skill gaps and build job-ready capabilities</p>
              </div>
            </article>
          </div>
        </div>

        <div className="frameParent26">
          <div className="frameParent27">
            <div className="frameChild16" aria-hidden="true" />
            <h2 className="betterLearningBetterContainer" style={{ margin: 0 }}>
              <span className="learningBuiltAround">{`Better Learning! `}</span>
              <span className="everyLearner">Better Outcomes</span>
            </h2>
            <p className="adaptiveLearningImproves" style={{ margin: 0 }}>
              Adaptive learning improves outcomes through personalized, goal-driven journeys.
            </p>
          </div>
          <div className="frameParent28">
            <div className="frameParent29">
              <div className="frameWrapper10">
                <div className="frameParent30">
                  <div className="frameChild17" />
                  <p className="fasterLearning" style={{ margin: 0 }}>
                    Faster Learning
                  </p>
                </div>
              </div>
              <div className="frameWrapper10">
                <div className="frameChild18" />
                <p className="higherEngagement" style={{ margin: 0 }}>
                  Higher Engagement
                </p>
              </div>
            </div>
            <div className="frameParent29">
              <div className="frameWrapper10">
                <div className="frameChild19" />
                <p className="betterRetention2" style={{ margin: 0 }}>
                  Better Retention
                </p>
              </div>
              <div className="frameWrapper10">
                <div className="frameChild18" />
                <p className="strongerSkills" style={{ margin: 0 }}>
                  Stronger Skills
                </p>
              </div>
            </div>
            <div className="frameWrapper10">
              <div className="frameChild18" />
              <p className="careerReadiness" style={{ margin: 0 }}>
                Career Readiness
              </p>
            </div>
          </div>
        </div>
        <div className="frameParent36">
          <div className="frameWrapper9">
            <div className="frameParent20">
              <div className="frameChild22" aria-hidden="true" />
              <div className="learningThatAdaptsToYouParent">
                <h2 className="learningThatAdapts" style={{ margin: 0 }}>
                  Learning That Continuously Improves
                  <br />
                </h2>
                <p className="neurolxpPersonalizesEvery" style={{ margin: 0 }}>
                  NeuroLXP continuously uses learner data to refine and personalize the learning experience.
                </p>
              </div>
            </div>
          </div>
          <div className="frameParent38">
            <div className="frameParent39">
              <div className="image20Parent">
                <div className="image202" />
                <div className="frameParent40">
                  <div className="frameWrapper12">
                    <div className="image21Parent">
                      <div className="image212" />
                      <h3 className="realTimeOptimization" style={{ margin: 0 }}>
                        Real-Time Optimization
                      </h3>
                    </div>
                  </div>
                  <div className="learningPathsAdaptAsProgreWrapper">
                    <p className="knowledgeLevel" style={{ margin: 0 }}>
                      Learning paths adapt as progress changes
                    </p>
                  </div>
                </div>
              </div>
              <div className="image20Parent">
                <div className="image202" />
                <div className="frameParent41">
                  <div className="frameWrapper12">
                    <div className="image21Parent">
                      <div className="image213" />
                      <h3 className="intelligentInsights" style={{ margin: 0 }}>
                        Intelligent Insights
                      </h3>
                    </div>
                  </div>
                  <div className="learningPathsAdaptAsProgreWrapper">
                    <p className="analyticsRevealLearner" style={{ margin: 0 }}>
                      Analytics reveal learner needs and performance patterns
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent39">
              <div className="image20Parent">
                <div className="image202" />
                <div className="frameParent43">
                  <div className="frameWrapper12">
                    <div className="image21Parent">
                      <div className="image212" />
                      <h3 className="precisionLearning" style={{ margin: 0 }}>
                        Precision Learning
                      </h3>
                    </div>
                  </div>
                  <div className="learningPathsAdaptAsProgreWrapper">
                    <p className="analyticsRevealLearner" style={{ margin: 0 }}>
                      Relevant content is delivered at the right time
                    </p>
                  </div>
                </div>
              </div>
              <div className="image20Parent">
                <div className="image202" />
                <div className="frameParent44">
                  <div className="frameWrapper12">
                    <div className="image21Parent">
                      <div className="image213" />
                      <h3 className="continuousFeedback" style={{ margin: 0 }}>
                        Continuous Feedback
                      </h3>
                    </div>
                  </div>
                  <div className="learningPathsAdaptAsProgreWrapper">
                    <p className="everyInteractionImproves" style={{ margin: 0 }}>
                      Every interaction improves the next experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="frameParent45 modernLearningSection" aria-labelledby="modern-learning-title">
          <div className="frameParent46 modernLearningIntro">
            <p className="modernLearningBadge">Built For Modern Learning</p>
            <h2 id="modern-learning-title" className="betterLearningBetterContainer modernLearningHeading">
              <span className="learningBuiltAround">Personalized Learning!</span>
              <span className="everyLearner">Measurable Growth</span>
            </h2>
            <p className="learnYourWay">Learn your way, grow your skills, and track every step of your progress.</p>
          </div>

          <div className="frameParent47 modernLearningFeatures">
            <article className="modernLearningFeature modernLearningFeatureStructured">
              <span className="frameChild24 modernLearningIcon" aria-hidden="true">
                <Image className="modernLearningOuterCircle" src="/images/image.png" width={78} height={78} alt="" />
                <Image className="modernLearningCircleBase" src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />
                <Image className="featureIconSingle" src="/icons/folder-library.svg" width={30} height={30} alt="" />
              </span>
              <div className="modernLearningFeatureText">
                <h3 className="structuredLearning">Structured Learning</h3>
                <p className="clearGoalOrientedLearning">Clear, goal-oriented learning paths</p>
              </div>
            </article>

            <article className="modernLearningFeature modernLearningFeatureAdaptive">
              <span className="frameChild24 modernLearningIcon" aria-hidden="true">
                <Image className="modernLearningOuterCircle" src="/images/image.png" width={78} height={78} alt="" />
                <Image className="modernLearningCircleBase" src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />
                <Image className="featureIconSingle" src="/icons/refresh-04.svg" width={30} height={30} alt="" />
              </span>
              <div className="modernLearningFeatureText">
                <h3 className="adaptiveTechnology">Adaptive Technology</h3>
                <p className="learningThatAdapts2">Learning that adapts to individual needs</p>
              </div>
            </article>

            <article className="modernLearningFeature modernLearningFeatureCompetency">
              <span className="frameChild24 modernLearningIcon" aria-hidden="true">
                <Image className="modernLearningOuterCircle" src="/images/image.png" width={78} height={78} alt="" />
                <Image className="modernLearningCircleBase" src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />
                <Image className="featureIconSingle" src="/icons/champion.svg" width={30} height={30} alt="" />
              </span>
              <div className="modernLearningFeatureText">
                <h3 className="competencyBasedDevelopment">Competency-Based Development</h3>
                <p className="learningAlignedWith">Learning aligned with measurable skills</p>
              </div>
            </article>

            <article className="modernLearningFeature modernLearningFeatureInsights">
              <span className="frameChild24 modernLearningIcon" aria-hidden="true">
                <Image className="modernLearningOuterCircle" src="/images/image.png" width={78} height={78} alt="" />
                <Image className="modernLearningCircleBase" src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />
                <Image className="featureIconSingle" src="/icons/chart-no-axes-combined.svg" width={30} height={30} alt="" />
              </span>
              <div className="modernLearningFeatureText">
                <h3 className="adaptiveTechnology">Data-Driven Insights</h3>
                <p className="realTimeVisibilityInto">Real-time visibility into learner progress</p>
              </div>
            </article>
          </div>
        </section>

        <div className="rectangleParent7">
          <Image className="personalizationCtaBackground" src="/images/Frame 2095586948.png" fill sizes="(max-width: 1440px) 100vw, 1280px" alt="" aria-hidden="true" />
          <div className="rectangle" />
          <div className="image206" />
          <Image className="handHoldingWoodenCubeWithIcon" src="/images/women.png" width={680} height={536} sizes="(max-width: 768px) 48vw, 680px" alt="Person using personalized learning powered by NeuroLXP" />
          <div className="frameParent52">
            <div className="makeLearningPersonalParent">
              <h2 className="makeLearningPersonal" style={{ margin: 0 }}>
                Make Learning Personal
              </h2>
              <p className="createAdaptiveLearning" style={{ margin: 0 }}>
                Create adaptive learning journeys that help every learner progress, develop skills, and achieve their goals.
              </p>
            </div>
            <div className="frameWrapper17">
              <div className="frameWrapper18">
                <div className="bookADemoWrapper">
                  <span className="bookADemo">Book a Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Personalization;
