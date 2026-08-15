"use client";

import type { NextPage } from 'next';
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import './career.css';


const CareerPathwaysSkilling: NextPage = () => {
  	const router = useRouter();
	const targetAudienceItems = [
		{
			title: "Training Institutes",
			image: "/images/seminar.webp",
			accentClass: "targetAudienceBlue",
		},
		{
			title: "Universities",
			image: "/images/building.webp",
			accentClass: "targetAudiencePink",
		},
		{
			title: "Corporate Learning",
			image: "/images/business.webp",
			accentClass: "targetAudiencePurple",
		},
		{
			title: "EdTech Providers",
			image: "/images/careers.webp",
			accentClass: "targetAudienceOrange",
		},
	];
	const [targetAudienceIndex, setTargetAudienceIndex] = useState(1);

	const moveTargetAudience = (direction: number) => {
		setTargetAudienceIndex((currentIndex) =>
			(currentIndex + direction + targetAudienceItems.length) %
			targetAudienceItems.length
		);
	};

	const getTargetAudienceItem = (offset: number) =>
		targetAudienceItems[
			(targetAudienceIndex + offset + targetAudienceItems.length) %
				targetAudienceItems.length
		];

  	return (
    		<div className="careerPathwaysSkilling">
			<title>Career Pathways &amp; Skilling | NeuroLXP</title>
      			
      			<div className="frameDiv">
        				<div className="featuresWrapper">
          					<div className="learningEcoSystem">Features</div>
        				</div>
        				<div className="homeParent">
          					<Image className="arrowDown01Icon" src="/icons/arrowright.svg"  width={16} height={16} sizes="100vw" alt="" />
          					<div className="featuresWrapper">
            						<div className="learningEcoSystem">{`Learning Eco-system `}</div>
          					</div>
        				</div>
        				<div className="arrowRightDoubleGroup">
          					<Image className="arrowDown01Icon" src="/icons/arrowright.svg"  width={16} height={16} sizes="100vw" alt="" />
          					<strong className="learningEcoSystem">{`Career Pathways & Skilling`}</strong>
        				</div>
      			</div>
      			<div className="frameParent2">
        				<div className="frameWrapper">
          					<Image className="frameIcon" src="/images/group.webp" width={934} height={532} sizes="100vw" alt="" />
        				</div>
        				<div className="frameWrapper2">
          					<div className="frameParent3">
            						<div className="frameWrapper3">
              							<div className="frameWrapper4">
                								<div className="frameParent4">
                  									<div className="frameParent5">
                    										<div className="frameChild2">Career Pathways &amp; Skilling</div>
                    										<h1 style={{ display: "contents" }}><strong className="buildSkillsFollowContainer">
                      											<span className="buildSkillsFollow">Build Skills! Follow Your Path!</span>
                      											<span className="becomeCareerReady">Become Career Ready!</span>
                    										</strong></h1>
                  									</div>
                  									<div className="neurolxpConnectsLearning">NeuroLXP connects learning, skills, and career goals through personalized industry-aligned pathways.</div>
                								</div>
              							</div>
            						</div>
            						<div className="frameParent6">
								<button
									type="button"
									className="frameChild3 heroActionButton bookDemoButton"
									onClick={() => router.push("/contact")}
								>
									Book a Demo
								</button>
								<button
									type="button"
									className="frameWrapper5 heroActionButton startLearningButton"
									onClick={() => router.push("/learning")}
								>
									Start Learning
								</button>
							</div>
          					</div>
        				</div>
      			</div>
      			<div className="frameParent7">
        				<div className="frameParent8">
          					<div className="frameChild4Title">Learning-To-Career Journey</div>
          					<div className="fromLearningToCareerReadinParent">
            						<h2 style={{ display: "contents" }}><strong className="fromLearningTo">From Learning to Career Readiness</strong></h2>
            						<div className="turnLearningInto">Turn learning into measurable skills and meaningful career outcomes.</div>
          					</div>
        				</div>
        				<div className="frameParent9">
          					<div className="frameParent10">
            						<div className="frameChild5" />
            						<div className="frameWrapper6">
              							<div className="rectangleParent">
                								<div className="rectangleDiv" />
                								<div className="buildStrongCoreKnowledgeAnWrapper">
                  									<div className="buildStrongCore">Build Strong Core Knowledge and Skills</div>
                								</div>
                								<div className="learnWrapper">
                  									<h3 style={{ display: "contents" }}><strong className="learn">Learn</strong></h3>
                								</div>
                								<div className="frameChild6" />
              							</div>
            						</div>
          					</div>
          					<div className="frameParent10">
            						<div className="frameChild5" />
            						<div className="frameWrapper6">
              							<div className="rectangleParent">
                								<div className="frameChild8" />
                								<div className="frameChild9" />
                								<div className="buildStrongCoreKnowledgeAnWrapper">
                  									<div className="developPracticalJobReady">Develop Practical Job-Ready Skills</div>
                								</div>
                								<div className="buildSkillsWrapper">
                  									<h3 style={{ display: "contents" }}><strong className="buildSkills">Build Skills</strong></h3>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="frameParent10">
            						<div className="frameChild5" />
            						<div className="frameWrapper6">
              							<div className="rectangleParent">
                								<div className="frameChild8" />
                								<div className="frameChild12" />
                								<div className="buildStrongCoreKnowledgeAnWrapper">
                  									<div className="validateSkillsAnd">Validate Skills and  Certifications</div>
                								</div>
                								<div className="proveCompetencyWrapper">
                  									<h3 style={{ display: "contents" }}><strong className="proveCompetency">Prove Competency</strong></h3>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="frameParent10">
            						<div className="frameChild5" />
            						<div className="frameWrapper6">
              							<div className="rectangleParent">
                								<div className="frameChild14" />
                								<div className="frameChild15" />
                								<div className="buildStrongCoreKnowledgeAnWrapper">
                  									<div className="trackProgressToward">Track Progress Toward Career Readiness</div>
                								</div>
                								<div className="careerReadyWrapper">
                  									<h3 style={{ display: "contents" }}><strong className="careerReady">Career Ready</strong></h3>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="careerPathwaysSkillingChild" />
      			<div className="frameParent14">
        				<div className="frameWrapper10">
          					<div className="frameParent15">
            						<div className="frameChild16Title">Skill Development</div>
            						<div className="fromLearningToCareerReadinParent">
              							<h2 style={{ display: "contents" }}><strong className="fromLearningTo">Build Skills That Matter</strong></h2>
              							<div className="createIndustryAlignedLearni">Create industry-aligned learning experiences that move beyond theory and develop practical expertise.</div>
            						</div>
          					</div>
        				</div>
        				<div className="frameParent16">
          					<div className="frameParent17">
            						<div className="rectangleParent3">
              							<div className="frameChild17" />
              							<div className="frameChild18" />
              							<div className="coreKnowledgeParent">
                								<h3 style={{ display: "contents" }}><strong className="coreKnowledge">Core Knowledge</strong></h3>
                								<div className="buildFoundationsThrough">Build Foundations Through Targeted Learning</div>
              							</div>
              							<div className="wrapper">
                								<strong className="b">01</strong>
              							</div>
            						</div>
            						<div className="rectangleParent4">
              							<div className="frameChild17" />
              							<div className="frameChild18" />
              							<div className="coreKnowledgeParent">
                								<h3 style={{ display: "contents" }}><strong className="skillDevelopment">Skill Development</strong></h3>
                								<div className="developTechnicalAnd">Develop technical and professional competencies</div>
              							</div>
              							<div className="container">
                								<strong className="b">02</strong>
              							</div>
            						</div>
            						<div className="rectangleParent5">
              							<div className="frameChild17" />
              							<div className="frameChild18" />
              							<div className="coreKnowledgeParent">
                								<h3 style={{ display: "contents" }}><strong className="practiceAndApply">Practice and Apply</strong></h3>
                								<div className="applyKnowledgeThrough">Apply Knowledge Through Real-World Practice</div>
              							</div>
              							<div className="frame">
                								<strong className="b3">03</strong>
              							</div>
            						</div>
          					</div>
          					<div className="frameParent18">
            						<div className="rectangleParent3">
              							<div className="frameChild17" />
              							<div className="frameChild18" />
              							<div className="coreKnowledgeParent">
                								<h3 style={{ display: "contents" }}><strong className="assessAndValidate">Assess and Validate</strong></h3>
                								<div className="measureSkillsThrough">Measure Skills Through Practical Assessments</div>
              							</div>
              							<div className="frameChild25" />
              							<div className="frameWrapper11">
                								<div className="frameWrapper12">
                  									<div className="frameWrapper12">
                    										<div className="frameWrapper12">
                      											<strong className="b3">04</strong>
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className="rectangleParent7">
              							<div className="frameChild17" />
              							<div className="frameChild18" />
              							<div className="coreKnowledgeParent">
                								<h3 style={{ display: "contents" }}><strong className="practiceAndApply">Certify and Progress</strong></h3>
                								<div className="recognizeAchievementsAnd">Recognize Achievements and Track Career Readiness</div>
              							</div>
              							<div className="wrapper3">
                								<strong className="b3">05</strong>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="frameParent19">
        				<div className="frameParent20">
          					<div className="frameParent21">
            						<div className="frameChild28Title">Personalized Pathways</div>
            						<h2 style={{ display: "contents" }}><strong className="personalizedLearningAnd">Personalized Learning and Career Pathways</strong></h2>
          					</div>
          					<div className="guideLearnersThrough">Guide learners through structured pathways aligned with their skills, interests, and career goals.</div>
        				</div>
        				<div className="rectangleParent8">
          					<div className="frameChild29" />
          					<div className="frameParent22">
            						<div className="pathwayItem pathwayItemPink">
              							<Image
                								className="pathwayArrow pathwayArrowPink"
                                                src="/icons/arrowpink.svg" 
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Follow guided learning journeys</span>
            						</div>
            						<div className="pathwayItem pathwayItemTeal">
              							<Image
                								className="pathwayArrow pathwayArrowTeal"
                                   src="/icons/arrowdarkgreen.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Identify required skills and competencies</span>
            						</div>
            						<div className="pathwayItem pathwayItemOrange">
              							<Image
                								className="pathwayArrow pathwayArrowOrange"
                                   src="/icons/arrowbrown.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Track Courses &amp; Milestones</span>
            						</div>
            						<div className="pathwayItem pathwayItemGreen">
              							<Image
                								className="pathwayArrow pathwayArrowGreen"
                                   src="/icons/arrowgreen.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Monitor career readiness</span>
            						</div>
            						<div className="pathwayItem pathwayItemBlue">
              							<Image
                								className="pathwayArrow pathwayArrowBlue"
                                  src="/icons/arrowblue.svg"
                								width={30}
                								height={30}
                								alt=""
              							/>
              							<span>Build personalized development plans</span>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="frameParent23">
        				<div className="frameWrapper10">
          					<div className="frameParent15">
            						<div className="frameChild35Title">Progress &amp; Competency Tracking</div>
            						<div className="fromLearningToCareerReadinParent">
              							<h2 style={{ display: "contents" }}><strong className="fromLearningTo">Track Skills! Measure Progress!</strong></h2>
              							<div className="giveLearnersAnd">Give learners and educators clear visibility into skill development and career readiness.</div>
            						</div>
          					</div>
        				</div>
        				<div className="learningAnalyticsParent">
          					<div className="learningAnalytics">
            						<div className="learningAnalytics2" />
            						<div className="trackPanelContent">
              							<div className="trackTitlePill">Track</div>
              							<div className="trackItemsGrid">
                								<div className="trackItem trackItemPink">
                  									<Image
                    										className="trackItemIcon trackItemIconPink"
                    										src="/icons/arrowpink.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Skill development</span>
                								</div>
                								<div className="trackItem trackItemOrange">
                  									<Image
                    										className="trackItemIcon trackItemIconOrange"
                    										src="/icons/arrowbrown.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Learning milestones</span>
                								</div>
                								<div className="trackItem trackItemBlue">
                  									<Image
                    										className="trackItemIcon trackItemIconBlue"
                    										src="/icons/arrowblue.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Competency growth</span>
                								</div>
                								<div className="trackItem trackItemTeal">
                  									<Image
                    										className="trackItemIcon trackItemIconTeal"
                    										src="/icons/arrowdarkgreen.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Certifications &amp; Awards</span>
                								</div>
                								<div className="trackItem trackItemPurple">
                  									<Image
                    										className="trackItemIcon trackItemIconPurple"
                    										src="/icons/arrowpurple.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Assessment performance</span>
                								</div>
                								<div className="trackItem trackItemNavy">
                  									<Image
                    										className="trackItemIcon trackItemIconNavy"
                    										src="/icons/arrownavy.svg"
                    										width={30}
                    										height={30}
                    										alt=""
                  									/>
                  									<span>Career readiness</span>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="frameParent29">
            						<div className="frameParent30">
              							<div className="ellipseParent">
                								<div className="ellipseDiv" />
                								<div className="frameChild42" />
                								<div className="frameChild43" />
                								<div className="parent">
                  									<strong className="b6">89%</strong>
                  									<h3 style={{ display: "contents" }}><strong className="technicalSkills">Technical Skills</strong></h3>
                								</div>
                								<svg className="progressRing progressRingTechnical" viewBox="0 0 176 176" aria-hidden="true" focusable="false">
									<circle className="progressRingTrack" cx="88" cy="88" r="72" />
									<circle className="progressRingValue" cx="88" cy="88" r="72" pathLength="452.39" />
								</svg>
              							</div>
              							<div className="ellipseGroup">
                								<div className="ellipseDiv" />
                								<div className="frameChild45" />
                								<svg className="progressRing progressRingPractical" viewBox="0 0 176 176" aria-hidden="true" focusable="false">
									<circle className="progressRingTrack" cx="88" cy="88" r="72" />
									<circle className="progressRingValue" cx="88" cy="88" r="72" pathLength="452.39" />
								</svg>
                								<div className="frameChild43" />
                								<div className="group">
                  									<strong className="b7">78%</strong>
                  									<h3 style={{ display: "contents" }}><strong className="practicalSkills">Practical Skills</strong></h3>
                								</div>
              							</div>
            						</div>
            						<div className="ellipseParent">
              							<div className="ellipseDiv" />
              							<div className="frameChild48" />
              							<div className="frameChild43" />
              							<div className="parent2">
                								<strong className="b8">84%</strong>
                								<h3 style={{ display: "contents" }}><strong className="careerReadiness">Career Readiness</strong></h3>
              							</div>
              							<svg className="progressRing progressRingCareer" viewBox="0 0 176 176" aria-hidden="true" focusable="false">
									<circle className="progressRingTrack" cx="88" cy="88" r="72" />
									<circle className="progressRingValue" cx="88" cy="88" r="72" pathLength="452.39" />
								</svg>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="careerPathwaysSkillingInner">
					<div className="aiRecommendationsFrame">
						<div className="aiRecommendationsContent">
							<div className="aiRecommendationsLeft">
								<div className="aiRecommendationsHeadingGroup">
									<div className="aiRecommendationsPill">
										AI Recommendations
									</div>
									<h2 className="aiRecommendationsTitle">
										AI-Guided Learning Recommendations
									</h2>
								</div>
								<p className="aiRecommendationsDescription">
									Use intelligent insights to help learners identify the right next step in their learning journey. NeuroLXP can help surface:
								</p>
							</div>

							<div className="aiRecommendationsList">
								<div className="aiRecommendationItem">
									<div className="aiRecommendationIconFrame">
										<div className="aiRecommendationIconInner">
											<Image
												className="aiRecommendationIcon"
												 src="/icons/compass.svg" 
												width={34}
												height={34}
												alt=""
											/>
										</div>
									</div>
									<h3>Relevant Courses &amp; Tracks</h3>
								</div>

								<div className="aiRecommendationItem">
									<div className="aiRecommendationIconFrame">
										<div className="aiRecommendationIconInner">
											<Image
												className="aiRecommendationIcon"
												 src="/icons/chartuppink.svg" 
												width={32}
												height={32}
												alt=""
											/>
										</div>
									</div>
									<h3>Skills to Improve</h3>
								</div>

								<div className="aiRecommendationItem">
									<div className="aiRecommendationIconFrame">
										<div className="aiRecommendationIconInner">
											<Image
												className="aiRecommendationIcon"
												 src="/icons/target-purple.svg" 
												width={32}
												height={32}
												alt=""
											/>
										</div>
									</div>
									<h3>Career-Aligned Learning</h3>
								</div>

								<div className="aiRecommendationItem">
									<div className="aiRecommendationIconFrame">
										<div className="aiRecommendationIconInner">
											<Image
												className="aiRecommendationIcon"
												 src="/icons/certificateorange.svg" 
												width={32}
												height={32}
												alt=""
											/>
										</div>
									</div>
									<h3>Career-Boosting Certifications</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent39">
        				<div className="frameWrapper10">
          					<div className="frameParent15">
            						<div className="frameChild55 practicalLearningPill">Practical Learning</div>
            						<div className="fromLearningToCareerReadinParent">
              							<h2 style={{ display: "contents" }}><strong className="fromLearningTo">
                								<span className="learnThrough">{`Learn Through `}</span>
                								<span className="realWorldPractice">Real-World Practice</span>
              							</strong></h2>
              							<div className="giveLearnersAnd">Turn knowledge into practical expertise through engaging learning experiences.</div>
            						</div>
          					</div>
        				</div>
        				<div className="frameParent41">
          					<div className="frameParent26">
            						<div className="rectangleParent3">
              							<div className="frameChild56" />
              							<div className="frameChild57" />
              							<strong className="b9">01</strong>
              							<div className="interactiveActivitiesParent">
                								<h3 style={{ display: "contents" }}><strong className="assessAndValidate">Interactive Activities</strong></h3>
                								<div className="buildFoundationsThrough">Build understanding through active participation</div>
              							</div>
            						</div>
            						<div className="rectangleParent10">
              							<div className="frameChild56" />
              							<div className="frameChild57" />
              							<strong className="b10">02</strong>
              							<div className="scenarioLearningParent">
                								<h3 style={{ display: "contents" }}><strong className="scenarioLearning">Scenario Learning</strong></h3>
                								<div className="applyKnowledgeThrough">Apply knowledge to realistic situations</div>
              							</div>
            						</div>
            						<div className="rectangleParent11">
              							<div className="frameChild56" />
              							<div className="frameChild57" />
              							<strong className="b11">03</strong>
              							<div className="scenarioLearningParent">
                								<h3 style={{ display: "contents" }}><strong className="coreKnowledge">Simulations</strong></h3>
                								<div className="applyKnowledgeThrough">Practise skills in safe controlled environments</div>
              							</div>
            						</div>
          					</div>
          					<div className="frameParent43">
            						<div className="rectangleParent3">
              							<div className="frameChild56" />
              							<div className="frameChild57" />
              							<strong className="b12">04</strong>
              							<div className="interactiveActivitiesParent">
                								<h3 style={{ display: "contents" }}><strong className="coreKnowledge">{`Projects & Cases`}</strong></h3>
                								<div className="buildFoundationsThrough">Develop Problem-Solving and Practical Skills</div>
              							</div>
            						</div>
            						<div className="rectangleParent7">
              							<div className="frameChild56" />
              							<div className="frameChild57" />
              							<strong className="b13">05</strong>
              							<div className="scenarioLearningParent">
                								<h3 style={{ display: "contents" }}><strong className="coreKnowledge">Skill Tests</strong></h3>
                								<div className="applyKnowledgeThrough">Measure competency beyond traditional testing</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="frameParent44">
        				<div className="frameParent45">
          					<div className="frameChild66 analyticsReportingPill">Analytics &amp; Reporting</div>
          					<h2 style={{ display: "contents" }}><strong className="measureWhatMatters">Measure What Matters</strong></h2>
          					<div className="learningAnalyticsHelp">Learning analytics help educators track learner progress, skill mastery, and career readiness.<br/><br/><br/><br/></div>
        				</div>
        				<div className="frameParent46">
          					<div className="frameParent47">
            						<div className="frameChild54 analyticsCheckOuter">
									<div className="analyticsCheckInner">
										<Image
											className="analyticsCheckIcon"
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className="trackSkillAcquisition">Track skill acquisition</div>
          					</div>
          					<div className="frameParent48">
            						<div className="frameChild54 analyticsCheckOuter">
									<div className="analyticsCheckInner">
										<Image
											className="analyticsCheckIcon"
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className="identifyCompetencyGaps">Identify competency gaps</div>
          					</div>
          					<div className="frameParent48">
            						<div className="frameChild54 analyticsCheckOuter">
									<div className="analyticsCheckInner">
										<Image
											className="analyticsCheckIcon"
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className="monitorLearnerProgress">Monitor learner progress</div>
          					</div>
          					<div className="frameParent48">
            						<div className="frameChild54 analyticsCheckOuter">
									<div className="analyticsCheckInner">
										<Image
											className="analyticsCheckIcon"
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className="measureAssessmentPerformance">Measure assessment performance</div>
          					</div>
          					<div className="frameParent48">
            						<div className="frameChild54 analyticsCheckOuter">
									<div className="analyticsCheckInner">
										<Image
											className="analyticsCheckIcon"
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className="trackCredentials">Track Credentials</div>
          					</div>
          					<div className="frameParent48">
            						<div className="frameChild54 analyticsCheckOuter">
									<div className="analyticsCheckInner">
										<Image
											className="analyticsCheckIcon"
											src="/icons/greenmarkicon.svg"
											width={34}
											height={34}
											alt=""
										/>
									</div>
								</div>
            						<div className="evaluateCareerReadiness">Evaluate career readiness</div>
          					</div>
        				</div>
      			</div>
      			<div className="frameParent53">
        				<div className="frameParent54">
          					<div className="frameWrapper17">
            						<div className="frameParent15">
              							<div className="targetAudiencesPill">Target Audiences</div>
              							<div className="fromLearningToCareerReadinParent">
                								<h2 style={{ display: "contents" }}><strong className="fromLearningTo">Connect Education with Industry</strong></h2>
                								<div className="alignLearningProgrammes">Align learning programmes with the skills and competencies required in the modern workforce.</div>
              							</div>
            						</div>
          					</div>
          					<div className="targetAudienceCarousel">
						<div className="targetAudienceCards" aria-live="polite">
							{[-1, 0, 1].map((offset) => {
								const item = getTargetAudienceItem(offset);
								const positionClass =
									offset === 0
										? "targetAudienceCardCenter"
										: offset < 0
											? "targetAudienceCardLeft"
											: "targetAudienceCardRight";

								return (
									<div
										className={`targetAudienceCard ${positionClass} ${item.accentClass}`}
										key={`${item.title}-${targetAudienceIndex}-${offset}`}
									>
										<div className="targetAudienceImageFrame">
											<Image
												className="targetAudienceImage"
												src={item.image}
												width={473}
												height={315}
												sizes="100vw"
												alt={item.title}
											/>
										</div>
										<div className="targetAudienceTitle">{item.title}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
        				<div className="neurolxpNavigation" role="navigation" aria-label="Career pathway navigation">
        					<div className="neurolxpNavigationBar" aria-hidden="true" />

        					<button
        						type="button"
        						className="neurolxpNavButton neurolxpNavLeft"
        						onClick={() => moveTargetAudience(-1)}
        						aria-label="Show previous target audience"
        					>
        						<span className="neurolxpNavInner">
        							<Image
        								src="/icons/arrow-left-big.svg"
        								alt=""
        								width={42}
        								height={42}
        							/>
        						</span>
        					</button>

        					<button
        						type="button"
        						className="neurolxpNavButton neurolxpNavRight"
        						onClick={() => moveTargetAudience(1)}
        						aria-label="Show next target audience"
        					>
        						<span className="neurolxpNavInner">
        							<Image
        								src="/icons/arrow-right-big.svg"
        								alt=""
        								width={42}
        								height={42}
        							/>
        						</span>
        					</button>
        				</div>
      			</div>
      			<div className="frameParent64">
        				<div className="frameChild79Title">NeuroLXP<sup style={{fontSize:"0.45em",verticalAlign:"top",marginLeft:"2px",fontWeight:700,lineHeight:1}}>TM</sup></div>
        				<div className="frameParent65">
          					<div className="frameParent66">
            						<div className="frameWrapper18">
              							<div className="turnLearningIntoCareerGrowParent">
                								<h2 style={{ display: "contents" }}><strong className="turnLearningIntoContainer">
                  									<span className="buildSkillsFollow">{`Turn Learning into `}</span>
                  									<span className="becomeCareerReady">Career Growth</span>
                								</strong></h2>
                								<div className="neurolxpConnectsLearning2">NeuroLXP connects learning, skills, and career readiness helping<br />learners move from education to employment.</div>
              							</div>
            						</div>
            						<div className="frameWrapper19">
              							<div className="frameWrapper20">
                								<div className="buildSkillsShapeCareersEWrapper">
                  									<h2 style={{ display: "contents" }}><strong className="buildSkillsShape">Build Skills!  Shape Careers!  Empower Futures!</strong></h2>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="frameWrapper21">
            						<button
              								type="button"
              								className="frameChild80"
              								onClick={() => router.push("/contact")}
            							>
              								Book a Demo
            							</button>
          					</div>
        				</div>
      			</div>
      			
    		</div>);
};

export default CareerPathwaysSkilling ;
