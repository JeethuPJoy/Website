"use client";

import type { NextPage } from 'next';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import './corporate.css';


const challengeCards = [
	{
		id: "rapid",
		title: "Rapid Skill Changes",
		description: <>Continuous workforce<br />upskilling</>,
		dropdown: "Continuous workforce upskilling",
		icon: "/icons/target-11.svg",
		color: "blue",
	},
	{
		id: "distributed",
		title: "Distributed Teams",
		description: <>Centralized scalable<br />learning</>,
		dropdown: "Centralized scalable learning across distributed teams.",
		icon: "/icons/user-group-02.svg",
		color: "pink",
	},
	{
		id: "engagement",
		title: "Low Engagement",
		description: <>Interactive learning<br />experiences</>,
		dropdown: "Interactive learning experiences that improve engagement.",
		icon: "/icons/user-minus-02.svg",
		color: "purple",
	},
	{
		id: "progress",
		title: "Progress Tracking",
		description: <>Actionable learning<br />insights</>,
		dropdown: "Actionable learning insights and progress visibility.",
		icon: "/icons/chart-up.svg",
		color: "orange",
	},
	{
		id: "alignment",
		title: "Learning Alignment",
		description: <>Goal-driven workforce<br />development</>,
		dropdown: "Goal-driven workforce development aligned to business needs.",
		icon: "/icons/book-open-text-1.svg",
		color: "teal",
	},
] as const;

const CorporateTraining: NextPage = () => {
	const [openChallengeCard, setOpenChallengeCard] = useState<string | null>(null);
	const [trainingLoadProgress, setTrainingLoadProgress] = useState(0);
	const [isCorporateVideoPlaying, setIsCorporateVideoPlaying] = useState(true);
	const trainingSectionRef = useRef<HTMLDivElement | null>(null);
	const corporateVideoRef = useRef<HTMLVideoElement | null>(null);

	const toggleChallengeCard = (cardId: string) => {
		setOpenChallengeCard((current) => (current === cardId ? null : cardId));
	};

	const toggleCorporateVideo = () => {
		const video = corporateVideoRef.current;

		if (!video) {
			return;
		}

		if (video.paused) {
			void video.play();
		} else {
			video.pause();
		}
	};

	useEffect(() => {
		const section = trainingSectionRef.current;

		if (!section) {
			return;
		}

		let animationFrame = 0;
		let startTime = 0;
		const duration = 1800;

		const runCounter = (time: number) => {
			if (!startTime) {
				startTime = time;
			}

			const elapsed = time - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = 1 - Math.pow(1 - progress, 3);

			setTrainingLoadProgress(easedProgress);

			if (progress < 1) {
				animationFrame = window.requestAnimationFrame(runCounter);
			}
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					window.cancelAnimationFrame(animationFrame);
					startTime = 0;
					setTrainingLoadProgress(0);
					animationFrame = window.requestAnimationFrame(runCounter);
				} else {
					window.cancelAnimationFrame(animationFrame);
					startTime = 0;
					setTrainingLoadProgress(0);
				}
			},
			{
				threshold: 0.3,
			}
		);

		observer.observe(section);

		return () => {
			observer.disconnect();
			window.cancelAnimationFrame(animationFrame);
		};
	}, []);

	const completionValue = Math.round(94 * trainingLoadProgress);
	const scoreValue = (4.8 * trainingLoadProgress).toFixed(1);
	const timeValue = Math.round(12 * trainingLoadProgress);
	const leadershipValue = Math.round(94 * trainingLoadProgress);
	const complianceValue = Math.round(98 * trainingLoadProgress);
	const techValue = Math.round(78 * trainingLoadProgress);
	const salesValue = Math.round(85 * trainingLoadProgress);

	return (
		<div className="corporateTraining">
			<div className="rectangleParent">
				<div className="rectangle" />
				<div className="image20" />
				<div className="groupMultiethnicBusinessPeo" />
			</div>
			<nav className="frameDiv corporateBreadcrumb" aria-label="Breadcrumb">
				<div className="ourCustomersWrapper">
					<span className="solutionsFor">Our Customers</span>
				</div>

				<Image
					src="/icons/arrow-right-double.svg"
					className="corporateBreadcrumbArrow"
					width={16}
					height={16}
					alt=""
					aria-hidden="true"
				/>

				<div className="ourCustomersWrapper">
					<span className="solutionsFor">Solutions For</span>
				</div>

				<Image
					src="/icons/arrow-right-double.svg"
					className="corporateBreadcrumbArrow"
					width={16}
					height={16}
					alt=""
					aria-hidden="true"
				/>

				<div className="arrowRightDoubleGroup">
					<span className="solutionsFor corporateBreadcrumbCurrent">
						Corporate Training
					</span>
				</div>
			</nav>
			<div className="businesspeopleDiscussingDigiParent">
				<Image
					className="businesspeopleDiscussingDigiIcon"
					src="/images/businesspeople-discussing-digital-tablet 1.png"
					width={1184}
					height={615}
					sizes="100vw"
					alt="Corporate training team"
					priority
				/>
				<div className="frameParent2">
					<div className="frameWrapper">
						<div className="frameParent3">
							<div className="frameParent4">
								<div className="frameItem">Corporate Training Solutions</div>
								<h2 className="empoweringWorkforce">Empowering Workforce</h2>
							</div>
							<div className="buildFutureReadyWorkforces">Build future-ready workforces with scalable digital learning.</div>
						</div>
					</div>
					<div className="frameParent5">
						<button type="button" className="frameInner requestDemoButton">
							Request Demo
						</button>
						<div className="frameWrapper2">
							<div className="startLearningWrapper">
								<div className="startLearning">Start Learning</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rectangle2" />
			<div className="image202" />
			<div className="frameParent6">
				<div className="frameParent7">
					<div className="ellipseParent">
						<div className="ellipseDiv" />
						<div className="ellipseGroup">
							<div className="frameChild2" />
							<div className="frameParent8">
								<div className="frameParent9">
									<div className="frameIcon iconBadge iconBadgeBlue"><Image src="/icons/building-03.svg" width={25} height={25} alt="Enterprise Clients" /></div>
									<h2 className="b">500+</h2>
								</div>
								<div className="enterpriseClients">Enterprise Clients</div>
							</div>
							<Image className="ellipseIcon" src="/icons/Ellipse 377-3.svg" width={82} height={15} sizes="100vw" alt="" />
						</div>
					</div>
					<div className="ellipseContainer">
						<div className="ellipseDiv" />
						<div className="ellipseGroup">
							<div className="frameChild2" />
							<Image className="ellipseIcon" src="/icons/Ellipse 377-2.svg" width={82} height={15} sizes="100vw" alt="" />
							<div className="frameParent8">
								<div className="frameParent9">
									<div className="frameIcon iconBadge iconBadgePink"><Image src="/icons/user-group-02.svg" width={25} height={25} alt="Learners Trained" /></div>
									<h2 className="b">2M+</h2>
								</div>
								<div className="learnersTrained">Learners Trained<br /></div>
							</div>
						</div>
					</div>
					<div className="ellipseParent3">
						<div className="ellipseDiv" />
						<div className="ellipseGroup">
							<div className="frameChild2" />
							<Image className="ellipseIcon" src="/icons/Ellipse 377.svg" width={82} height={15} sizes="100vw" alt="" />
							<div className="frameParent8">
								<div className="frameParent9">
									<div className="frameIcon iconBadge iconBadgePurple"><Image src="/icons/star-white.svg" width={25} height={25} alt="Satisfaction Rate" /></div>
									<h2 className="b">98%</h2>
								</div>
								<div className="learnersTrained">Satisfaction Rate<br /></div>
							</div>
						</div>
					</div>
					<div className="ellipseParent5">
						<div className="ellipseDiv" />
						<div className="ellipseGroup">
							<div className="frameChild2" />
							<Image className="ellipseIcon" src="/icons/Ellipse 377-1.svg" width={82} height={15} sizes="100vw" alt="" />
							<div className="frameParent8">
								<div className="frameParent9">
									<div className="frameIcon iconBadge iconBadgeOrange"><Image src="/icons/arrow-up-narrow-wide.svg" width={25} height={25} alt="Productivity Boost" /></div>
									<h2 className="b">40%</h2>
								</div>
								<div className="productivityBoost">Productivity Boost<br /></div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent16">
					<div className="frameParent17">
						<div className="frameChild15">Key Challenges</div>
						<div className="keyChallengesInCorporateTrParent">
							<h2 className="keyChallengesInContainer">
								<span className="keyChallengesIn">{`Key Challenges in `}</span>
								<span className="everyNeed">Corporate Training</span>
							</h2>
							<div className="neurolxpHelpsOrganizations">NeuroLXP helps organizations overcome the most pressing corporate training barriers with intelligent, scalable learning solutions.<br /><br /></div>
						</div>
					</div>
					<div className="frameParent18 corporateChallengeCards">
						<div className="frameParent19 corporateChallengeRow corporateChallengeRowTop">
							{challengeCards.slice(0, 3).map((card) => {
								const isOpen = openChallengeCard === card.id;

								return (
									<article
										key={card.id}
										className={`frameWrapper3 corporateChallengeCard corporateChallengeCard--${card.color} ${isOpen ? "isOpen" : ""
											}`}
									>
										<div className="frameWrapper4 corporateChallengeCardSurface">
											<div className="corporateChallengeHeader">
												<div className={`challengeIcon challengeIcon--${card.color}`}>
													<Image src={card.icon} width={30} height={30} alt="" aria-hidden="true" />
												</div>
												<h3 className="rapidSkillChanges">{card.title}</h3>
											</div>

											<p className="continuousWorkforceUpskillin">{card.description}</p>

											<button
												type="button"
												className="howNeurolxpHelpsParent corporateChallengeToggle"
												onClick={() => toggleChallengeCard(card.id)}
												aria-expanded={isOpen}
												aria-controls={`challenge-dropdown-${card.id}`}
											>
												<span className="howNeurolxpHelps">How NeuroLXP Helps</span>
												<span className="corporateChallengeChevron" aria-hidden="true">
													<span className="corporateChevronLine corporateChevronLine1" />
													<span className="corporateChevronLine corporateChevronLine2" />
													<span className="corporateChevronLine corporateChevronLine3" />
													<span className="corporateChevronLine corporateChevronLine4" />
												</span>
											</button>

											<div
												id={`challenge-dropdown-${card.id}`}
												className="corporateChallengeDropdown"
												aria-hidden={!isOpen}
											>
												<p>{card.dropdown}</p>
											</div>
										</div>
									</article>
								);
							})}
						</div>

						<div className="frameParent29 corporateChallengeRow corporateChallengeRowBottom">
							{challengeCards.slice(3).map((card) => {
								const isOpen = openChallengeCard === card.id;

								return (
									<article
										key={card.id}
										className={`frameWrapper3 corporateChallengeCard corporateChallengeCard--${card.color} ${isOpen ? "isOpen" : ""
											}`}
									>
										<div className="frameWrapper4 corporateChallengeCardSurface">
											<div className="corporateChallengeHeader">
												<div className={`challengeIcon challengeIcon--${card.color}`}>
													<Image src={card.icon} width={30} height={30} alt="" aria-hidden="true" />
												</div>
												<h3 className="rapidSkillChanges">{card.title}</h3>
											</div>

											<p className="continuousWorkforceUpskillin">{card.description}</p>

											<button
												type="button"
												className="howNeurolxpHelpsParent corporateChallengeToggle"
												onClick={() => toggleChallengeCard(card.id)}
												aria-expanded={isOpen}
												aria-controls={`challenge-dropdown-${card.id}`}
											>
												<span className="howNeurolxpHelps">How NeuroLXP Helps</span>
												<span className="corporateChallengeChevron" aria-hidden="true">
													<span className="corporateChevronLine corporateChevronLine1" />
													<span className="corporateChevronLine corporateChevronLine2" />
													<span className="corporateChevronLine corporateChevronLine3" />
													<span className="corporateChevronLine corporateChevronLine4" />
												</span>
											</button>

											<div
												id={`challenge-dropdown-${card.id}`}
												className="corporateChallengeDropdown"
												aria-hidden={!isOpen}
											>
												<p>{card.dropdown}</p>
											</div>
										</div>
									</article>
								);
							})}
						</div>
					</div>
					<div className="frameParent36">
						<div className="frameParent37">
							<div className="frameChild21">Corporate Training Use Cases</div>
							<div className="keyChallengesInCorporateTrParent">
								<h2 className="keyChallengesInContainer">
									<span className="keyChallengesIn">Learning Programs</span>
									<span className="for">{` for `}</span>
									<span className="everyNeed">Every Need<br /></span>
								</h2>
								<div className="organizationsCanUse">Organizations can use NeuroLXP to deliver a wide range of corporate learning programs, including:<br /><br /></div>
							</div>
						</div>
						<div className="frameParent38">
							<div className="frameParent39">
								<div className="frameParent40">
									<div className="frameChild22 useCaseIcon useCaseIconPink">
										<svg
											className="employeeOnboardingIcon"
											width="53"
											height="53"
											viewBox="0 0 53 53"
											fill="none"
											aria-hidden="true"
											focusable="false"
										>
											<circle cx="26.5" cy="17" r="9.5" stroke="currentColor" strokeWidth="2.5" />
											<path
												d="M10.5 44C11.8 34.4 18 29 26.5 29C35 29 41.2 34.4 42.5 44"
												stroke="currentColor"
												strokeWidth="2.5"
												strokeLinecap="round"
											/>
										</svg>
									</div>
									<div className="employeeOnboardingParent">
										<h2 className="employeeOnboarding">Employee Onboarding</h2>
										<div className="accelerateNewHire">Accelerate new hire readiness with onboarding.</div>
									</div>
								</div>
								<div className="frameParent40">
									<div className="frameChild22 useCaseIcon useCaseIconBlue"><Image src="/icons/shield-check.svg" width={53} height={53} alt="Compliance Training" /></div>
									<div className="complianceTrainingParent">
										<h2 className="employeeOnboarding">Compliance Training</h2>
										<div className="accelerateNewHire">Ensure compliance with mandatory learning.</div>
									</div>
								</div>
								<div className="frameParent40">
									<div className="frameChild22 useCaseIcon useCaseIconTeal"><Image src="/icons/brain-11.svg" width={53} height={53} alt="Product and Sales Training" /></div>
									<div className="complianceTrainingParent">
										<h2 className="employeeOnboarding">Product & Sales Training</h2>
										<div className="accelerateNewHire">Equip teams with product and sales skills.</div>
									</div>
								</div>
							</div>
							<div className="frameParent43">
								<div className="frameParent44">
									<div className="frameChild22 useCaseIcon useCaseIconGreen"><Image src="/icons/user-ai.svg" width={53} height={53} alt="Leadership Development" /></div>
									<div className="leadershipDevelopmentParent">
										<h2 className="employeeOnboarding">Leadership Development</h2>
										<div className="accelerateNewHire">Develop confident leaders through training.</div>
									</div>
								</div>
								<div className="frameParent45">
									<div className="frameChild22 useCaseIcon useCaseIconPurple"><Image src="/icons/code.svg" width={53} height={53} alt="Technical Skill Development" /></div>
									<div className="technicalSkillDevelopmentParent">
										<h2 className="employeeOnboarding">Technical Skill Development</h2>
										<div className="accelerateNewHire">Upskill teams with role-specific technical training.</div>
									</div>
								</div>
								<div className="frameParent40">
									<div className="frameChild22 useCaseIcon useCaseIconOrange">
										<Image
											src="/icons/chatting-01 copy.svg"
											width={53}
											height={53}
											alt="Customer Service Excellence"
										/>
									</div>
									<div className="customerServiceExcellenceParent">
										<h2 className="employeeOnboarding">Customer Service Excellence</h2>
										<div className="accelerateNewHire">Improve customer service through training.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						ref={trainingSectionRef}
						className={`frameParent46 trainingLoadSection ${trainingLoadProgress > 0 ? "isLoadingActive" : ""
							}`}
					>
						<div className="wrapper">
							<div className="frameParent47">
								<div className="frameChild28">Benefits of Corporate Training With NeuroLXP</div>
								<div className="whyOrganizationsChooseNeuroParent">
									<h2 className="keyChallengesInContainer">
										<span className="keyChallengesIn">Why Organizations Choose</span>
										<span className="everyNeed"> NeuroLXP<br /></span>
									</h2>
									<div className="neurolxpHelpsOrganizations">Organizations can use NeuroLXP to deliver a wide range of corporate learning programs.<br /><br /></div>
								</div>
							</div>
						</div>
						<div className="frameParent48">
							<div className="frameParent49">
								<div className="rectangleGroup">
									<div className="rectangleDiv" />
									<div className="frameParent50">
										<div className="wrapper">
											<h2 className="b4">{completionValue}%</h2>
										</div>
										<div className="completionWrapper">
											<div className="completion">{`Completion `}</div>
										</div>
									</div>
								</div>
								<div className="rectangleContainer">
									<div className="rectangleDiv" />
									<div className="frameParent51">
										<div className="wrapper">
											<h2 className="b5">{scoreValue}/5</h2>
										</div>
										<div className="completionWrapper">
											<div className="averageScore">Average Score</div>
										</div>
									</div>
								</div>
								<div className="rectangleParent2">
									<div className="rectangleDiv" />
									<div className="frameParent52">
										<div className="hWrapper">
											<h2 className="h">{timeValue}h</h2>
										</div>
										<div className="completionWrapper">
											<div className="averageTime">Average Time</div>
										</div>
									</div>
								</div>
							</div>
							<div className="frameWrapper19">
								<div className="topTrainingProgramsParent">
									<h2 className="topTrainingPrograms">Top Training Programs</h2>
									<div className="frameParent53">
										<div className="leadershipDevParent">
											<div className="leadershipDev">Leadership Dev</div>
											<div className="rectangleParent3">
												<div className="rectangle3" />
												<div className="image203" />
												<div className="frameChild31 trainingProgressFill trainingProgress94" />
											</div>
											<h2 className="b6">{leadershipValue}%</h2>
										</div>
										<div className="leadershipDevParent">
											<div className="leadershipDev">Compliance</div>
											<div className="rectangleParent3">
												<div className="rectangle3" />
												<div className="image203" />
												<div className="frameChild32 trainingProgressFill trainingProgress98" />
											</div>
											<h2 className="b6">{complianceValue}%</h2>
										</div>
										<div className="leadershipDevParent">
											<div className="leadershipDev">Tech Upskilling</div>
											<div className="rectangleParent3">
												<div className="rectangle3" />
												<div className="image203" />
												<div className="frameChild33 trainingProgressFill trainingProgress78" />
											</div>
											<h2 className="b6">{techValue}%</h2>
										</div>
										<div className="leadershipDevParent">
											<div className="leadershipDev">{`Sales Enablement `}</div>
											<div className="rectangleParent3">
												<div className="rectangle3" />
												<div className="image203" />
												<div className="frameChild34 trainingProgressFill trainingProgress85" />
											</div>
											<h2 className="b6">{salesValue}%</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="frameParent54">
						<div className="peopleTakingPartBusinessEvParent">
							<div className="peopleTakingPartBusinessEv" />
							<div className="image21" />
							<video
								ref={corporateVideoRef}
								className="groupYoungBusinesspeopleUsi"
								src="/videos/video-4.mp4"
								autoPlay
								muted
								loop
								playsInline
								preload="metadata"
								onClick={toggleCorporateVideo}
								onPlay={() => setIsCorporateVideoPlaying(true)}
								onPause={() => setIsCorporateVideoPlaying(false)}
								aria-label="Corporate learning session"
							/>
							<div className="frameParent55">
								<div className="frameParent56">
									<div className="frameParent57">
										<div className="frameChild36">NeuroLXP<sup>TM</sup></div>
										<h2 className="neurolxpTransformingCorporat">NeuroLXP-Transforming Corporate Learning<br /></h2>
									</div>
									<div className="buildSkilledEngaged">Build skilled, engaged, and future ready workforces with NeuroLXP.</div>
								</div>
								<div className="frameWrapper20">
									<div className="getStartedWrapper">
										<div className="getStarted">{`Get Started `}</div>
									</div>
								</div>
							</div>
							{!isCorporateVideoPlaying && (
								<button
									type="button"
									className="frameChild37 corporateVideoControl"
									onClick={toggleCorporateVideo}
									aria-label="Play corporate learning video"
								>
									<img
										src="/icons/vsymbol.svg"
										width={106}
										height={106}
										alt=""
										aria-hidden="true"
									/>
								</button>
							)}
						</div>
						<div className="image207" />
					</div>
				</div>
			</div>
		</div>
	);

};

export default CorporateTraining;
