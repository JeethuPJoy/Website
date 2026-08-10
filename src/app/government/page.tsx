"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import "./government.css";

const GovernmentStateInstitutions: NextPage = () => {
  const [openCards, setOpenCards] = useState<boolean[]>([false, false, false, false, false]);

  const toggleCard = (index: number) => {
    setOpenCards((currentCards) => currentCards.map((isOpen, cardIndex) => (cardIndex === index ? !isOpen : isOpen)));
  };

  return (
    <>
      <title>Government &amp; State Institutions | NeuroLXP</title>
      <main className="governmentStateInstitution">
        <style jsx global>{`
          :where([data-semantic-origin="div"]) {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            color: inherit;
          }

          :where([data-semantic-origin="b"]) {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: inherit;
            font-family: inherit;
            font-style: inherit;
            line-height: inherit;
            letter-spacing: inherit;
            color: inherit;
          }
        `}</style>
        <div className="frameDiv">
          <div className="ourCustomersWrapper">
            <p className="industriesWeServe" data-semantic-origin="div">
              Our Customers
            </p>
          </div>
          <div className="homeParent">
            <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />
            <div className="ourCustomersWrapper">
              <p className="industriesWeServe" data-semantic-origin="div">
                Industries we Serve
              </p>
            </div>
          </div>
          <div className="arrowRightDoubleGroup">
            <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />
            <p className="governmentState" data-semantic-origin="b">{`Government & State Institutions`}</p>
          </div>
        </div>
        <div className="colleaguesMaleFemaleSmiling" />
        <div className="vectorParent">
          <div className="frameItem" />
          <div className="frameParent2">
            <div className="frameWrapper">
              <div className="frameParent3">
                <div className="frameParent4">
                  <p className="frameInner" data-semantic-origin="div">
                    Government &amp; State Institutions
                  </p>
                  <h1 className="empoweringGovernmentWorkforcContainer" data-semantic-origin="b">
                    <span className="empowering">{`Empowering `}</span>
                    <span className="governmentWorkforce">{`Government Workforce `}</span>
                    <span className="empowering">Learning</span>
                  </h1>
                </div>
                <p className="neurolxpEnablesGovernments" data-semantic-origin="div">
                  NeuroLXP enables governments with scalable learning for workforce development, compliance, and citizen skilling.
                </p>
              </div>
            </div>
            <div className="frameWrapper2">
              <p className="frameIcon" data-semantic-origin="div">
                Explore Public Learning
              </p>
            </div>
          </div>
          <div className="ellipseParent">
            <div className="ellipseDiv" />
            <Image className="frameChild2" src="/images/pillar.png" width={480} height={487} sizes="100vw" alt="" aria-hidden="true" />
          </div>
        </div>
        <div className="frameParent5">
          <div className="frameParent6">
            <div className="frameWrapper4 topFeatureCard topFeatureCardBlue">
              <div className="trainingAtScaleParent">
                <h2 className="trainingAtScale" data-semantic-origin="div">
                  Training at Scale
                  <br />
                  <br />
                </h2>
                <p className="trainAcrossDepartments" data-semantic-origin="div">
                  Train across departments.
                </p>
              </div>
            </div>
            <div className="frameWrapper4 topFeatureCard topFeatureCardPink">
              <div className="trainingAtScaleParent">
                <h2 className="centralizedLearning" data-semantic-origin="div">
                  Centralized Learning
                  <br />
                </h2>
                <p className="trainAcrossDepartments" data-semantic-origin="div">
                  One learning platform.
                </p>
              </div>
            </div>
          </div>
          <div className="frameParent6">
            <div className="frameWrapper4 topFeatureCard topFeatureCardTeal">
              <div className="trainingAtScaleParent">
                <h2 className="trainingAnalytics" data-semantic-origin="div">
                  Training Analytics
                  <br />
                </h2>
                <p className="trainAcrossDepartments" data-semantic-origin="div">
                  Track progress.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="frameWrapper4 topFeatureCard topFeatureCardPurple">
              <div className="trainingAtScaleParent">
                <h2 className="centralizedLearning" data-semantic-origin="div">
                  Policy Compliance
                  <br />
                </h2>
                <p className="trainAcrossDepartments" data-semantic-origin="div">
                  Ensure compliance.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="textWrapper">
          <div className="text">
            <br />
          </div>
        </div>
        <div className="frameParent8">
          <div className="frameParent9">
            <div className="frameWrapper7">
              <div className="keyChallengesInGovernmentWParent">
                <h2 className="keyChallengesIn" data-semantic-origin="b">
                  Key Challenges in Government Workforce Development
                </h2>
                <p className="neurolxpCentralizesGovernmen" data-semantic-origin="div">
                  NeuroLXP centralizes government learning to improve workforce readiness, compliance, and service delivery
                </p>
              </div>
            </div>
            <div className="frameParent10">
              <div className="challengeGrid">
                <div className={`challengeCard frameWrapper8 ${openCards[0] ? "challengeCardOpen" : ""}`}>
                  <div className="frameParent12">
                    <div className="cardIconOuter">
                      <div className="cardIconInner">
                        <Image className="cardIconGraphic" src="/icons/group.svg" width={34} height={34} sizes="34px" alt="Training at Scale" />
                      </div>
                    </div>
                    <div className="frameParent13">
                      <div className="trainingAtScaleGroup">
                        <h3 className="trainingAtScale2" data-semantic-origin="div">
                          Training at Scale
                        </h3>
                        <p className="trainGovernmentTeams" data-semantic-origin="div">
                          Train government teams statewide.
                        </p>
                      </div>
                      <button type="button" className="challengeToggle" aria-expanded={openCards[0]} aria-controls="challenge-answer-0" onClick={() => toggleCard(0)}>
                        <span className="howNeurolxpHelps">How NeuroLXP Helps</span>
                        <Image className={`arrowDownDoubleIcon ${openCards[0] ? "arrowOpen" : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  {openCards[0] && (
                    <p id="challenge-answer-0" className="challengeAnswer" data-semantic-origin="div">
                      NeuroLXP centralizes structured learning, policy training, and administrative skill development.
                    </p>
                  )}
                </div>

                <div className={`challengeCard frameWrapper8 ${openCards[1] ? "challengeCardOpen" : ""}`}>
                  <div className="frameParent12">
                    <div className="cardIconOuter">
                      <div className="cardIconInner">
                        <Image className="cardIconGraphic" src="/icons/internet.svg" width={34} height={34} sizes="34px" alt="Centralized Training" />
                      </div>
                    </div>
                    <div className="frameParent13">
                      <div className="trainingAtScaleGroup">
                        <h3 className="centralizedTraining" data-semantic-origin="div">
                          Centralized Training
                        </h3>
                        <p className="trainGovernmentTeams" data-semantic-origin="div">
                          Manage learning policies, and skills.
                        </p>
                      </div>
                      <button type="button" className="challengeToggle" aria-expanded={openCards[1]} aria-controls="challenge-answer-1" onClick={() => toggleCard(1)}>
                        <span className="howNeurolxpHelps">How NeuroLXP Helps</span>
                        <Image className={`arrowDownDoubleIcon ${openCards[1] ? "arrowOpen" : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  {openCards[1] && (
                    <p id="challenge-answer-1" className="challengeAnswer" data-semantic-origin="div">
                      NeuroLXP supports digital skilling and career pathways through online learning.
                    </p>
                  )}
                </div>

                <div className={`challengeCard frameWrapper10 ${openCards[2] ? "challengeCardOpen" : ""}`}>
                  <div className="frameParent12">
                    <div className="cardIconOuter">
                      <div className="cardIconInner">
                        <Image className="cardIconGraphic" src="/icons/shield.svg" width={34} height={34} sizes="34px" alt="Policy Compliance" />
                      </div>
                    </div>
                    <div className="frameParent13">
                      <div className="trainingAtScaleGroup">
                        <h3 className="centralizedTraining" data-semantic-origin="div">
                          Policy Compliance
                        </h3>
                        <p className="ensureRegulatoryCompliance" data-semantic-origin="div">
                          Ensure regulatory compliance.
                        </p>
                      </div>
                      <button type="button" className="challengeToggle" aria-expanded={openCards[2]} aria-controls="challenge-answer-2" onClick={() => toggleCard(2)}>
                        <span className="howNeurolxpHelps">How NeuroLXP Helps</span>
                        <Image className={`arrowDownDoubleIcon ${openCards[2] ? "arrowOpen" : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  {openCards[2] && (
                    <p id="challenge-answer-2" className="challengeAnswer" data-semantic-origin="div">
                      NeuroLXP enables compliance training and policy education for informed staff.
                    </p>
                  )}
                </div>

                <div className={`challengeCard frameWrapper8 ${openCards[3] ? "challengeCardOpen" : ""}`}>
                  <div className="frameParent12">
                    <div className="cardIconOuter">
                      <div className="cardIconInner">
                        <Image className="cardIconGraphic" src="/icons/building.svg" width={34} height={34} sizes="34px" alt="Multiple Departments" />
                      </div>
                    </div>
                    <div className="frameParent13">
                      <div className="trainingAtScaleGroup">
                        <h3 className="multipleDepartments" data-semantic-origin="div">
                          Multiple Departments
                        </h3>
                        <p className="trainGovernmentTeams" data-semantic-origin="div">
                          Training for every department.
                        </p>
                      </div>
                      <button type="button" className="challengeToggle" aria-expanded={openCards[3]} aria-controls="challenge-answer-3" onClick={() => toggleCard(3)}>
                        <span className="howNeurolxpHelps">How NeuroLXP Helps</span>
                        <Image className={`arrowDownDoubleIcon ${openCards[3] ? "arrowOpen" : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  {openCards[3] && (
                    <p id="challenge-answer-3" className="challengeAnswer" data-semantic-origin="div">
                      Centralized learning with department-level management and unified reporting.
                    </p>
                  )}
                </div>

                <div className={`challengeCard frameWrapper8 ${openCards[4] ? "challengeCardOpen" : ""}`}>
                  <div className="frameParent12">
                    <div className="cardIconOuter">
                      <div className="cardIconInner">
                        <Image className="cardIconGraphic" src="/icons/chart.svg" width={34} height={34} sizes="34px" alt="Participation Tracking" />
                      </div>
                    </div>
                    <div className="frameParent13">
                      <div className="trainingAtScaleGroup">
                        <h3 className="multipleDepartments" data-semantic-origin="div">
                          Participation Tracking
                        </h3>
                        <p className="trainGovernmentTeams" data-semantic-origin="div">
                          Monitor engagement and results.
                        </p>
                      </div>
                      <button type="button" className="challengeToggle" aria-expanded={openCards[4]} aria-controls="challenge-answer-4" onClick={() => toggleCard(4)}>
                        <span className="howNeurolxpHelps">How NeuroLXP Helps</span>
                        <Image className={`arrowDownDoubleIcon ${openCards[4] ? "arrowOpen" : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  {openCards[4] && (
                    <p id="challenge-answer-4" className="challengeAnswer" data-semantic-origin="div">
                      Advanced analytics track engagement, completion, and assessment outcomes.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="frameParent23">
            <div className="frameParent24">
              <p className="useCasesPill" data-semantic-origin="div">
                Use Cases
              </p>
              <div className="governmentLearningUseCasesWrapper">
                <h2 className="governmentLearningUse" data-semantic-origin="b">
                  Government Learning Use Cases
                </h2>
              </div>
            </div>
            <div className="frameParent25">
              <div className="useCaseGrid">
                <div className="useCaseCard useCaseBlue">
                  <span className="useCaseIconCircle">
                    <Image className="useCaseIconImage" src="/icons/blue.svg" width={24} height={24} sizes="24px" alt="Governance Training" />
                  </span>
                  <h3 className="useCaseTitle" data-semantic-origin="div">
                    Governance Training
                  </h3>
                </div>

                <div className="useCaseCard useCasePink">
                  <span className="useCaseIconCircle">
                    <Image className="useCaseIconImage" src="/icons/pink.svg" width={24} height={24} sizes="24px" alt="Policy Compliance" />
                  </span>
                  <h3 className="useCaseTitle" data-semantic-origin="div">
                    Policy Compliance
                  </h3>
                </div>

                <div className="useCaseCard useCasePurple">
                  <span className="useCaseIconCircle">
                    <Image className="useCaseIconImage" src="/icons/purple.svg" width={24} height={24} sizes="24px" alt="Digital Governance" />
                  </span>
                  <h3 className="useCaseTitle" data-semantic-origin="div">
                    Digital Governance
                  </h3>
                </div>

                <div className="useCaseCard useCaseTeal">
                  <span className="useCaseIconCircle">
                    <Image className="useCaseIconImage" src="/icons/dgreen.svg" width={24} height={24} sizes="24px" alt="Leadership Development" />
                  </span>
                  <h3 className="useCaseTitle" data-semantic-origin="div">
                    Leadership Development
                  </h3>
                </div>

                <div className="useCaseCard useCaseGold">
                  <span className="useCaseIconCircle">
                    <Image className="useCaseIconImage" src="/icons/yellow.svg" width={24} height={24} sizes="24px" alt="Workforce Skills" />
                  </span>
                  <h3 className="useCaseTitle" data-semantic-origin="div">
                    Workforce Skills
                  </h3>
                </div>

                <div className="useCaseCard useCaseGreen">
                  <span className="useCaseIconCircle">
                    <Image className="useCaseIconImage" src="/icons/green.svg" width={24} height={24} sizes="24px" alt="Citizen Service Training" />
                  </span>
                  <h3 className="useCaseTitle" data-semantic-origin="div">
                    Citizen Service Training
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent34">
            <div className="frameParent35">
              <p className="benefitsPill" data-semantic-origin="div">
                Benefits For State Governments
              </p>
              <h2 className="poweringStatewideLearning" data-semantic-origin="b">
                Powering Statewide Learning.
              </h2>
              <p className="theseCapabilitiesHelp" data-semantic-origin="div">
                These capabilities help public institutions improve workforce readiness, citizen education, compliance, and service delivery.
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
            <div className="frameParent36">
              <div className="frameParent37">
                <div className="benefitIconOuter">
                  <div className="benefitIconInner">
                    <Image className="benefitIconImage" src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Scale training statewide" />
                  </div>
                </div>
                <p className="scaleTrainingStatewide" data-semantic-origin="div">
                  Scale training statewide
                </p>
              </div>
              <div className="frameParent37">
                <div className="benefitIconOuter">
                  <div className="benefitIconInner">
                    <Image className="benefitIconImage" src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Ensure policy compliance" />
                  </div>
                </div>
                <p className="ensurePolicyCompliance" data-semantic-origin="div">
                  Ensure policy compliance
                </p>
              </div>
              <div className="frameParent37">
                <div className="benefitIconOuter">
                  <div className="benefitIconInner">
                    <Image className="benefitIconImage" src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Develop workforce skills" />
                  </div>
                </div>
                <p className="developWorkforceSkills" data-semantic-origin="div">
                  Develop workforce skills
                </p>
              </div>
              <div className="frameParent37">
                <div className="benefitIconOuter">
                  <div className="benefitIconInner">
                    <Image className="benefitIconImage" src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Improve public services" />
                  </div>
                </div>
                <p className="improvePublicServices" data-semantic-origin="div">
                  Improve public services
                </p>
              </div>
              <div className="frameParent37">
                <div className="benefitIconOuter">
                  <div className="benefitIconInner">
                    <Image className="benefitIconImage" src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Track learning progress" />
                  </div>
                </div>
                <p className="scaleTrainingStatewide" data-semantic-origin="div">
                  Track learning progress
                  <br />
                  <br />
                </p>
              </div>
              <div className="frameParent37">
                <div className="benefitIconOuter">
                  <div className="benefitIconInner">
                    <Image className="benefitIconImage" src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Drive digital transformation" />
                  </div>
                </div>
                <p className="driveDigitalTransformation" data-semantic-origin="div">
                  Drive digital transformation
                </p>
              </div>
            </div>
          </div>
          <div className="rectangleParent">
            <div className="rectangle" />
            <div className="image20" />
            <div className="groupMultiethnicBusinessPeo" />
            <Image className="pexelsAkhilDasari2160057282Icon" src="/images/gvt.png" width={819} height={525} sizes="100vw" alt="" aria-hidden="true" />
            <div className="frameWrapper19">
              <div className="frameWrapper20">
                <div className="frameParent3">
                  <div className="frameParent44">
                    <p className="frameChild22" data-semantic-origin="div">
                      Public Learning
                    </p>
                    <h2 className="empoweringPublicLearning" data-semantic-origin="b">
                      Empowering Public Learning
                    </h2>
                  </div>
                  <p className="neurolxpEnablesScalable" data-semantic-origin="div">
                    NeuroLXP enables scalable digital learning, workforce development, and advanced analytics for public sector excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent45">
            <p className="frameChild23" data-semantic-origin="div">
              NeuroLXP
            </p>
            <div className="poweringGovernmentWorkforceParent">
              <h2 className="poweringGovernmentWorkforce" data-semantic-origin="b">
                Powering Government Workforce Transformation
              </h2>
              <p className="neurolxpHelpsGovernments" data-semantic-origin="div">
                NeuroLXP helps governments build skilled, compliant, and future-ready workforces through scalable digital learning and data-driven training programs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GovernmentStateInstitutions;
