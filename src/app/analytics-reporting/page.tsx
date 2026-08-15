"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import "./analytics-reporting.css";

const AnalyticsReporting: NextPage = () => {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".frameParent15");

    if (!section) {
      return;
    }

    let animationFrame = 0;
    let runId = 0;

    const animateNumber = (element: HTMLElement | null, target: number, suffix: string, duration: number, currentRunId: number) => {
      if (!element) {
        return;
      }

      const startTime = performance.now();

      const update = (time: number) => {
        if (currentRunId !== runId) {
          return;
        }

        const progress = Math.min((time - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * easedProgress);

        element.textContent = `${value}${suffix}`;

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        }
      };

      animationFrame = requestAnimationFrame(update);
    };

    const resetValues = () => {
      const learners = section.querySelector<HTMLElement>(".k");
      const accuracy = section.querySelector<HTMLElement>(".b");
      const percentages = section.querySelectorAll<HTMLElement>(".b2");

      if (learners) learners.textContent = "0K+";
      if (accuracy) accuracy.textContent = "0%";

      percentages.forEach((item) => {
        item.textContent = "0%";
      });
    };

    const startAnimation = () => {
      runId += 1;
      const currentRunId = runId;

      cancelAnimationFrame(animationFrame);
      resetValues();

      section.classList.remove("is-loading");
      void section.offsetWidth;
      section.classList.add("is-loading");

      animateNumber(section.querySelector<HTMLElement>(".k"), 12, "K+", 1500, currentRunId);
      animateNumber(section.querySelector<HTMLElement>(".b"), 98, "%", 1700, currentRunId);

      const percentages = section.querySelectorAll<HTMLElement>(".b2");
      const targets = [86, 74, 91];

      percentages.forEach((item, index) => {
        animateNumber(item, targets[index] ?? 0, "%", 1800, currentRunId);
      });
    };

    const stopAndReset = () => {
      runId += 1;
      cancelAnimationFrame(animationFrame);
      section.classList.remove("is-loading");
      resetValues();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAndReset();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => {
      runId += 1;
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main id="main-content" className="analyticsReporting" tabIndex={-1}>
        <nav className="frameDiv" aria-label="Breadcrumb">
          <div className="featuresWrapper">
            <div className="learningEcoSystem">Features</div>
          </div>
          <div className="homeParent">
            <Image className="breadcrumbDoubleArrow" src="/icons/arrow-right-double.svg" width={16} height={16} alt="" aria-hidden="true" />
            <div className="featuresWrapper">
              <div className="learningEcoSystem">{`Learning Eco-system `}</div>
            </div>
          </div>
          <div className="arrowRightDoubleGroup">
            <Image className="breadcrumbDoubleArrow" src="/icons/arrow-right-double.svg" width={16} height={16} alt="" aria-hidden="true" />
            <b className="learningEcoSystem">{`Analytics & Reporting`}</b>
          </div>
        </nav>
        <div className="frameParent2">
          <div className="frameParent3">
            <div className="frameInner">Why Analytics Matters</div>
            <div className="transformLearningDataIntoMParent">
              <h1 className="transformLearningData">
                Transform Learning Data into Meaningful Analytics
                <br />
              </h1>
              <div className="neurolxpTurnsLearning">NeuroLXP turns learning activity into meaningful insights that improve learner engagement, course quality, and learning outcomes.</div>
            </div>
          </div>
          <div className="frameParent4">
            <div className="frameParent5">
              <div className="rectangleParent">
                <div className="rectangleDiv" />
                <div className="ellipseDiv" />
                <div className="frameParent6">
                  <div className="analyticsIconCircle">
                    <Image className="analyticsCardIcon" src="/icons/chart-up-purple.svg" width={32} height={32} alt="" aria-hidden="true" />
                  </div>
                  <div className="monitorLearnerProgress">Monitor learner progress</div>
                </div>
              </div>
              <div className="rectangleParent">
                <div className="frameChild2" />
                <div className="ellipseDiv" />
                <div className="frameParent7">
                  <div className="analyticsIconCircle">
                    <Image className="analyticsCardIcon" src="/icons/search-02.svg" width={32} height={32} alt="" aria-hidden="true" />
                  </div>
                  <div className="spotKnowledgeGaps">Spot knowledge gaps</div>
                </div>
              </div>
              <div className="rectangleParent">
                <div className="frameChild5" />
                <div className="ellipseDiv" />
                <div className="frameParent8">
                  <div className="analyticsIconCircle">
                    <Image className="analyticsCardIcon" src="/icons/user-group-02green.svg" width={32} height={32} alt="" aria-hidden="true" />
                  </div>
                  <div className="trackEngagement">Track Engagement</div>
                </div>
              </div>
            </div>
            <div className="frameParent9">
              <div className="rectangleParent">
                <div className="frameChild8" />
                <div className="ellipseDiv" />
                <div className="frameParent10">
                  <div className="analyticsIconCircle">
                    <Image className="analyticsCardIcon" src="/icons/chart-bar-lineblue.svg" width={32} height={32} alt="" aria-hidden="true" />
                  </div>
                  <div className="trackEngagement">Analyse Performance</div>
                </div>
              </div>
              <div className="rectangleParent">
                <div className="frameChild11" />
                <div className="ellipseDiv" />
                <div className="frameParent11">
                  <div className="analyticsIconCircle">
                    <Image className="analyticsCardIcon" src="/icons/graduation-cappink.svg" width={32} height={32} alt="" aria-hidden="true" />
                  </div>
                  <div className="improveCurriculum">Improve Curriculum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent12">
          <div className="frameParent13">
            <div className="frameWrapper">
              <div className="frameParent14">
                <div className="frameChild14">Learning Analytics &amp; Reporting</div>
                <div className="turnLearningDataIntoActionParent">
                  <h2 className="turnLearningDataContainer">
                    <span className="turnLearningData">{`Turn Learning Data into `}</span>
                    <span className="actionableInsights">
                      Actionable Insights
                      <br />
                      <br />
                    </span>
                  </h2>
                  <div className="neurolxpsLearningAnalytics">
                    NeuroLXP’s Learning Analytics delivers real-time insights into learner engagement, progress, and performance enabling smarter, data-driven decisions.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <a className="frameChild15" href="#book-a-demo">
              Book a Demo
            </a>
          </div>
          <div className="frameParent15">
            <div className="frameParent16">
              <div className="rectangleParent4">
                <div className="frameChild16" />
                <div className="frameParent17">
                  <div className="frameWrapper">
                    <b className="k">12K+</b>
                  </div>
                  <div className="learnersTrackedWrapper">
                    <div className="learnersTracked">Learners Tracked</div>
                  </div>
                </div>
              </div>
              <div className="rectangleParent5">
                <div className="frameChild16" />
                <div className="frameParent18">
                  <div className="frameWrapper">
                    <b className="b">98%</b>
                  </div>
                  <div className="learnersTrackedWrapper">
                    <div className="reportsAccuracy">{`Reports Accuracy `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameWrapper2">
              <div className="learningProgramsParent">
                <b className="learningPrograms">Learning Programs</b>
                <div className="frameParent19">
                  <div className="engagementParent">
                    <div className="engagement">Engagement</div>
                    <div className="rectangleParent6">
                      <div className="rectangle" />
                      <div className="image20" />
                      <div className="frameChild18" />
                    </div>
                    <b className="b2">86%</b>
                  </div>
                  <div className="engagementParent">
                    <div className="engagement">Completion</div>
                    <div className="rectangleParent6">
                      <div className="rectangle" />
                      <div className="image20" />
                      <div className="frameChild19" />
                    </div>
                    <b className="b2">74%</b>
                  </div>
                  <div className="engagementParent">
                    <div className="engagement">Assessment</div>
                    <div className="rectangleParent6">
                      <div className="rectangle" />
                      <div className="image20" />
                      <div className="frameChild20" />
                    </div>
                    <b className="b2">91%</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="analyticsReportingInner">
          <div className="frameParent20">
            <div className="frameParent21">
              <div className="frameParent22">
                <div className="frameChild21">Total Learning Visibility</div>
                <h2 className="oneDashboardFull">
                  One Dashboard! Full Visibility!
                  <br />
                </h2>
              </div>
              <div className="getRealTimeInsights">Get real-time insights across learners, courses, assessments, and engagement.</div>
            </div>
            <div className="frameParent23">
              <div className="frameParent24">
                <div className="dashboardIconCircle">
                  <Image className="dashboardListIcon" src="/icons/user-group-02 copyblue.svg" width={32} height={32} alt="" aria-hidden="true" />
                </div>
                <div className="learnerActivity">{`Learner activity & engagement`}</div>
              </div>
              <div className="frameParent25">
                <div className="dashboardIconCircle">
                  <Image className="dashboardListIcon" src="/icons/star.svg" width={32} height={32} alt="" aria-hidden="true" />
                </div>
                <div className="courseCompletion">Course completion</div>
              </div>
              <div className="frameParent25">
                <div className="dashboardIconCircle">
                  <Image className="dashboardListIcon" src="/icons/zap.svg" width={32} height={32} alt="" aria-hidden="true" />
                </div>
                <div className="timeSpentLearning">Time spent learning</div>
              </div>
              <div className="frameParent25">
                <div className="dashboardIconCircle">
                  <Image className="dashboardListIcon" src="/icons/chart-02.svg" width={32} height={32} alt="" aria-hidden="true" />
                </div>
                <div className="assessmentPerformance">Assessment performance</div>
              </div>
              <div className="frameParent25">
                <div className="dashboardIconCircle">
                  <Image className="dashboardListIcon" src="/icons/message-02.svg" width={32} height={32} alt="" aria-hidden="true" />
                </div>
                <div className="discussionParticipation">Discussion participation</div>
              </div>
              <div className="frameParent25">
                <div className="dashboardIconCircle">
                  <Image className="dashboardListIcon" src="/icons/award-01-red.svg" width={32} height={32} alt="" aria-hidden="true" />
                </div>
                <div className="gamificationProgress">Gamification progress</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent30">
          <div className="frameParent31">
            <div className="frameChild28">Smarter Learning Reports</div>
            <div className="reportsThatDriveBetterDeciParent">
              <h2 className="reportsThatDrive">
                Reports That Drive Better Decisions
                <br />
                <br />
              </h2>
              <div className="createDetailedCustomizable">
                Create detailed, customizable reports across your learning ecosystem.
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="frameParent32">
            <div className="frameParent33">
              <div className="frameParent34">
                <div className="frameParent35">
                  <div className="frameWrapper3">
                    <div className="frameWrapper4">
                      <div className="image20Parent">
                        <div className="image204" />
                        <div className="learnerPerformance">Learner Performance</div>
                      </div>
                    </div>
                  </div>
                  <div className="reportIconCircle">
                    <Image className="reportCardIcon" src="/icons/user-02-blue.svg" width={48} height={48} alt="" aria-hidden="true" />
                  </div>
                </div>
                <div className="frameParent35">
                  <div className="frameWrapper3">
                    <div className="frameWrapper4">
                      <div className="image20Parent">
                        <div className="image204" />
                        <div className="learnerPerformance">Course Effectiveness</div>
                      </div>
                    </div>
                  </div>
                  <div className="reportIconCircle">
                    <Image className="reportCardIcon" src="/icons/book-open-text-purple.svg" width={48} height={48} alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="frameParent34">
                <div className="frameParent35">
                  <div className="frameWrapper3">
                    <div className="frameWrapper4">
                      <div className="image20Parent">
                        <div className="image204" />
                        <div className="learnerPerformance">Assessment Analytics</div>
                      </div>
                    </div>
                  </div>
                  <div className="reportIconCircle">
                    <Image className="reportCardIcon" src="/icons/chart-up-purple.svg" width={48} height={48} alt="" aria-hidden="true" />
                  </div>
                </div>
                <div className="frameParent35">
                  <div className="frameWrapper3">
                    <div className="frameWrapper4">
                      <div className="image20Parent">
                        <div className="image204" />
                        <div className="learnerPerformance">Instructor Activity</div>
                      </div>
                    </div>
                  </div>
                  <div className="reportIconCircle">
                    <Image className="reportCardIcon" src="/icons/co-present.svg" width={48} height={48} alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent34">
              <div className="frameParent35">
                <div className="frameWrapper3">
                  <div className="frameWrapper4">
                    <div className="image20Parent">
                      <div className="image204" />
                      <div className="learnerPerformance">Department Insight</div>
                    </div>
                  </div>
                </div>
                <div className="reportIconCircle">
                  <Image className="reportCardIcon" src="/icons/building-green.svg" width={48} height={48} alt="" aria-hidden="true" />
                </div>
              </div>
              <div className="frameParent35">
                <div className="frameWrapper3">
                  <div className="frameWrapper4">
                    <div className="image20Parent">
                      <div className="image204" />
                      <div className="learnerPerformance">Programme Performance</div>
                    </div>
                  </div>
                </div>
                <div className="reportIconCircle">
                  <Image className="reportCardIcon" src="/icons/student-green.svg" width={48} height={48} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="analyticsReportingChild">
          <div className="frameWrapper15">
            <div className="frameParent43">
              <div className="frameParent44">
                <div className="frameParent45">
                  <div className="frameChild35">Identify Gaps Early</div>
                  <h2 className="identifyLearningGaps">
                    Identify Learning Gaps!
                    <br />
                    Act Early!
                  </h2>
                </div>
                <div className="aiAnalyticsSpot">AI analytics spot struggling learners early, enabling timely, targeted support.</div>
              </div>
              <Image className="maleCoworkersDoingPaperworkIcon" src="/images/analytics image.webp" width={763} height={421} sizes="(max-width: 768px) 100vw, 763px" alt="Two coworkers reviewing documents" />
            </div>
          </div>
        </div>
        <div className="frameParent46">
          <div className="frameWrapper16">
            <div className="turnDataIntoBetterOutcomesParent">
              <h2 className="turnDataIntoContainer">
                <span className="turnLearningData">{`Turn Data into `}</span>
                <span className="actionableInsights">
                  Better Outcomes
                  <br />
                </span>
              </h2>
              <div className="builtForEvery">Turn learning data into insights that improve courses engagement, completion, and outcomes.</div>
            </div>
          </div>
          <div className="frameParent47">
            <div className="frameParent48">
              <div className="rectangleParent9">
                <div className="frameChild36" />
                <div className="frameChild37" />
                <div className="checkmarkSquare04Parent">
                  <Image className="checkmarkSquare04Icon" src="/icons/checkmark-square-04.svg" width={48} height={48} alt="" aria-hidden="true" />
                  <div className="improveCourseAnd">Improve Course and Curriculum Quality</div>
                </div>
              </div>
              <div className="rectangleParent9">
                <div className="frameChild36" />
                <div className="frameChild39" />
                <div className="checkmarkSquare04Parent">
                  <Image className="checkmarkSquare04Icon" src="/icons/checkmark-square-04-1.svg" width={48} height={48} alt="" aria-hidden="true" />
                  <div className="strengthenTeachingStrategies">Strengthen Teaching Strategies and Practices</div>
                </div>
              </div>
              <div className="rectangleParent9">
                <div className="frameChild36" />
                <div className="frameChild39" />
                <div className="checkmarkSquare04Parent">
                  <Image className="checkmarkSquare04Icon" src="/icons/checkmark-square-04-2.svg" width={48} height={48} alt="" aria-hidden="true" />
                  <div className="increaseOverallLearner">Increase Overall Learner Engagement</div>
                </div>
              </div>
            </div>
            <div className="frameParent48">
              <div className="rectangleParent9">
                <div className="frameChild36" />
                <div className="frameChild39" />
                <div className="checkmarkSquare04Parent">
                  <Image className="checkmarkSquare04Icon" src="/icons/checkmark-square-04-3.svg" width={48} height={48} alt="" aria-hidden="true" />
                  <div className="boostCourseCompletion">Boost Course Completion Rates</div>
                </div>
              </div>
              <div className="rectangleParent9">
                <div className="frameChild36" />
                <div className="frameChild39" />
                <div className="checkmarkSquare04Parent">
                  <Image className="checkmarkSquare04Icon" src="/icons/checkmark-square-04-4.svg" width={48} height={48} alt="" aria-hidden="true" />
                  <div className="strengthenTeachingStrategies">Improve Academic and Training Outcomes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent50">
          <div className="transformLearningDataIntoMParent">
            <h2 className="turnDataIntoContainer">
              Analytics That Scales With You
              <br />
            </h2>
            <div className="builtForEvery">Built for every learning environment—from universities and schools to corporate training and EdTech platforms.</div>
          </div>
          <div className="frameParent51">
            <div className="frameParent52">
              <div className="frameChild46" />
              <div className="universitiesWrapper">
                <b className="universities">Universities</b>
              </div>
            </div>
            <div className="frameParent53">
              <div className="frameChild47" />
              <div className="schoolsWrapper">
                <b className="universities">Schools</b>
              </div>
            </div>
            <div className="frameParent53">
              <div className="frameChild47" />
              <div className="corporateTrainingWrapper">
                <b className="corporateTraining">Corporate Training</b>
              </div>
            </div>
            <div className="frameParent53">
              <div className="frameChild47" />
              <div className="edtechProvidersWrapper">
                <b className="edtechProviders">EdTech Providers</b>
              </div>
            </div>
          </div>
        </div>
        <div className="ellipseParent">
          <Image className="ellipseIcon" src="/icons/ana.webp" width={1286} height={538} sizes="100vw" alt="" priority />
          <div className="frameParent56">
            <div className="frameChild50">Get Started</div>
            <div className="frameParent13">
              <div className="frameParent58">
                <div className="frameWrapper17">
                  <div className="makeEveryLearningDecisionSParent">
                    <h2 className="makeEveryLearning">Make Every Learning Decision Smarter</h2>
                    <div className="goBeyondBasic">Go beyond basic LMS reports with intelligent analytics, real-time dashboards, and actionable insights.</div>
                  </div>
                </div>
                <div className="frameWrapper18">
                  <div className="frameWrapper19">
                    <div className="smarterAnalyticsBetterLearWrapper">
                      <b className="smarterAnalyticsBetterContainer">
                        <span className="span">{` `}</span>
                        <span className="smarterAnalyticsBetter">Smarter Analytics! Better Learning Outcomes!</span>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameWrapper20">
                <a className="frameChild51" href="#book-a-demo">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AnalyticsReporting;
