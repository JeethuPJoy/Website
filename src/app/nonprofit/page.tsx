"use client";

import type { NextPage } from 'next';
import Image from "next/image";
import { useRef, useState } from "react";
import './ngo.css';
const NGO: NextPage = () => {
	const topVideoRef = useRef<HTMLVideoElement>(null);
	const [isTopVideoPlaying, setIsTopVideoPlaying] = useState(false);
	const bottomVideoRef = useRef<HTMLVideoElement>(null);
	const [isBottomVideoPlaying, setIsBottomVideoPlaying] = useState(false);
	const [openSupportCards, setOpenSupportCards] = useState<number[]>([]);

	const toggleSupportCard = (index: number) => {
		setOpenSupportCards((current) =>
			current.includes(index)
				? current.filter((cardIndex) => cardIndex !== index)
				: [...current, index]
		);
	};

	const toggleBottomVideo = () => {
		const video = bottomVideoRef.current;
		if (!video) return;
		if (video.paused) void video.play();
		else video.pause();
	};

	const toggleTopVideo = () => {
		const video = topVideoRef.current;
		if (!video) return;

		if (video.paused) {
			void video.play();
		} else {
			video.pause();
		}
	};
	return (
		<main className='ngoPage' aria-label="Nonprofit organizations page">
			<title>Nonprofit Organizations (NGOs) | NeuroLXP</title>
			<div className={`ngo ${openSupportCards.length > 0 ? "supportCardsExpanded" : ""}`}>
				<div className="ngoInner">
					<div className="image20Parent">
						<div className="image20" aria-hidden="true" />
						<div className="image21" aria-hidden="true" />
						<video
							className="image61Icon"
							ref={topVideoRef}
							src="/videos/video2.mp4"
							preload="metadata"
							muted
							autoPlay
							loop
							aria-hidden="true"
							playsInline
							onClick={toggleTopVideo}
							onPlay={() => setIsTopVideoPlaying(true)}
							onPause={() => setIsTopVideoPlaying(false)}
							onEnded={() => setIsTopVideoPlaying(false)}
						/>
						{!isTopVideoPlaying && (
							<button
								type="button"
								className="frameItem videoPlayButton"
								onClick={toggleTopVideo}
								aria-label="Play nonprofit organizations video"
							>
								<Image
									className="videoPlayIcon"
									src="/icons/videosymbol.svg"
									width={106}
									height={106}
									sizes="106px"
									alt=""
									aria-hidden="true"
								/>
							</button>
						)}
						<div className="frameDiv">
							<div className="frameParent2">
								<div className="frameParent3">
									<div className="frameInner">Nonprofit Organizations (NGOs)</div>
									<h1 className="empoweringNgosThroughContainer" style={{ margin: 0, fontWeight: 700 }}>
										<span className="empowering">Empowering</span>
										<span className="ngos"> NGOs<br /></span>
										<span className="empowering">Through Learning<br /></span>
									</h1>
								</div>
								<div className="empoweringNonprofitsThrough">Empowering nonprofits through scalable digital learning.</div>
							</div>
							<div className="frameWrapper">
								<div className="bookADemoWrapper">
									<div className="bookADemo">Book a Demo</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent4">
					<div className="ourCustomersWrapper">
						<div className="industriesWeServe">Our Customers</div>
					</div>
					<div className="homeParent">
						<Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />
						<div className="ourCustomersWrapper">
							<div className="industriesWeServe">Industries we Serve</div>
						</div>
					</div>
					<div className="arrowRightDoubleGroup">
						<Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />
						<b className="industriesWeServe">Nonprofit Organization</b>
					</div>
				</div>
				<div className="frame">
					<div className="frameInner2">
						<div className="frameWrapper2">
							<div className="missionDrivenLearningParent">
								<h2 className="missionDrivenLearning" style={{ margin: 0, fontWeight: 700 }}>Mission-Driven Learning</h2>
								<div className="empowerStaffVolunteers">Empower staff, volunteers partners, and beneficiaries with scalable digital learning that builds skills, shares knowledge and drives lasting social impact.</div>
							</div>
						</div>
					</div>
					<div className="frameInner3">
						<div className="frameWrapper3">
							<div className="frameWrapper4">
								<div className="missionDrivenLearningParent">
									<h2 className="scaleYourImpact" style={{ margin: 0, fontWeight: 700 }}>Scale your Impact</h2>
									<div className="deliverStructuredTraining">Deliver structured training capacity building, and measurable learning through one platform that empowers nonprofits to grow and achieve their mission.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent5">
					<div className="frameParent6">
						<div className="frameIcon">Key Challenges</div>
						<div className="howNeurolxpSupportsNgosParent">
							<h2 className="howNeurolxpSupports" style={{ margin: 0, fontWeight: 700 }}>How NeuroLXP Supports NGOs</h2>
							<div className="neurolxpHelpsNonprofits">NeuroLXP helps nonprofits deliver scalable training, build skills, and maximize social impact.<br /><br /></div>
						</div>
					</div>
					<div className="frameParent7">
						<div className={`frameWrapper5 supportCard ${openSupportCards.includes(0) ? "supportCardOpen" : ""}`}>
							<div className="supportCardContent">
								<div className="supportIconOuter distributedStaffIconSection">
									<Image className="supportIcon distributedStaffIcon" src="/icons/group-green.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
								</div>
								<h3 id="support-card-title-0" className="supportCardTitle" style={{ margin: 0, fontWeight: 700 }}>Distributed Staff Teams</h3>
								<button type="button" className="supportArrowButton" onClick={() => toggleSupportCard(0)} aria-expanded={openSupportCards.includes(0)} aria-label={`${openSupportCards.includes(0) ? "Hide" : "Show"} Distributed Staff Teams details`} aria-controls="support-card-details-0">
									<Image className="arrowDownDoubleIcon" src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
								</button>
								<div id="support-card-details-0" className="supportCardDetails" role="region" aria-labelledby="support-card-title-0" aria-hidden={!openSupportCards.includes(0)}><div className="supportCardPeak" aria-hidden="true" /><p>Consistent learning across teams.</p></div>
							</div>
						</div>

						<div className={`frameWrapper5 supportCard ${openSupportCards.includes(1) ? "supportCardOpen" : ""}`}>
							<div className="supportCardContent">
								<div className="supportIconOuter limitedTrainingIconSection">
									<Image className="supportIcon limitedTrainingIcon" src="/icons/iconsidea-blue.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
								</div>
								<h3 id="support-card-title-1" className="supportCardTitle" style={{ margin: 0, fontWeight: 700 }}>Limited Training Resources</h3>
								<button type="button" className="supportArrowButton" onClick={() => toggleSupportCard(1)} aria-expanded={openSupportCards.includes(1)} aria-label={`${openSupportCards.includes(1) ? "Hide" : "Show"} Limited Training Resources details`} aria-controls="support-card-details-1">
									<Image className="arrowDownDoubleIcon" src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
								</button>
								<div id="support-card-details-1" className="supportCardDetails" role="region" aria-labelledby="support-card-title-1" aria-hidden={!openSupportCards.includes(1)}><div className="supportCardPeak" aria-hidden="true" /><p>Create once, train everywhere.</p></div>
							</div>
						</div>

						<div className={`frameWrapper5 supportCard ${openSupportCards.includes(2) ? "supportCardOpen" : ""}`}>
							<div className="supportCardContent">
								<div className="supportIconOuter knowledgeTransferIconSection">
									<Image className="supportIcon knowledgeTransferIcon" src="/icons/bookReading.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
								</div>
								<h3 id="support-card-title-2" className="supportCardTitle" style={{ margin: 0, fontWeight: 700 }}>Knowledge Transfer</h3>
								<button type="button" className="supportArrowButton" onClick={() => toggleSupportCard(2)} aria-expanded={openSupportCards.includes(2)} aria-label={`${openSupportCards.includes(2) ? "Hide" : "Show"} Knowledge Transfer details`} aria-controls="support-card-details-2">
									<Image className="arrowDownDoubleIcon" src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
								</button>
								<div id="support-card-details-2" className="supportCardDetails" role="region" aria-labelledby="support-card-title-2" aria-hidden={!openSupportCards.includes(2)}><div className="supportCardPeak" aria-hidden="true" /><p>Capture &amp; share knowledge.</p></div>
							</div>
						</div>

						<div className={`frameWrapper5 supportCard ${openSupportCards.includes(3) ? "supportCardOpen" : ""}`}>
							<div className="supportCardContent">
								<div className="supportIconOuter trainingImpactIconSection">
									<Image className="supportIcon trainingImpactIcon" src="/icons/chart-purple.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />
								</div>
								<h3 id="support-card-title-3" className="supportCardTitle" style={{ margin: 0, fontWeight: 700 }}>Measuring Training Impact</h3>
								<button type="button" className="supportArrowButton" onClick={() => toggleSupportCard(3)} aria-expanded={openSupportCards.includes(3)} aria-label={`${openSupportCards.includes(3) ? "Hide" : "Show"} Measuring Training Impact details`} aria-controls="support-card-details-3">
									<Image className="arrowDownDoubleIcon" src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
								</button>
								<div id="support-card-details-3" className="supportCardDetails" role="region" aria-labelledby="support-card-title-3" aria-hidden={!openSupportCards.includes(3)}><div className="supportCardPeak" aria-hidden="true" /><p>Measure Real Learning Impact.</p></div>
							</div>
						</div>
					</div>
				</div>
				<div className="image20Group">
					<div className="image202" aria-hidden="true" />
					<div className="image21Parent">
						<div className="image212" aria-hidden="true" />
						<div className="wrapperPexelsMbaClassroom2">
							<Image className="pexelsMbaClassroom215566522Icon" src="/images/workingimage.png" width={781} height={552} sizes="100vw" alt="People collaborating with laptops" />
						</div>
						<div className="ellipseDiv" aria-hidden="true" />
						<div className="frameWrapper9">
							<div className="frameWrapper10">
								<div className="frameWrapper11">
									<div className="frameParent16">
										<div className="frameParent17">
											<div className="frameChild6">How NeuroLXP Helps</div>
											<h2 className="collaborativeLearning" style={{ margin: 0, fontWeight: 700 }}>Collaborative Learning<br /></h2>
										</div>
										<div className="createOnceTrainContainer">
											<span className="createOnceTrain">{`Create once, train everywhere Empower teams, share knowledge, and measure impact `}</span>
											<b className="createOnceTrain">all on one platform</b>
											<span className="createOnceTrain">.</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent18">
					<div className="frameParent6">
						<div className="frameChild7">Learning Use Cases</div>
						<div className="howNeurolxpSupportsNgosParent">
							<h2 className="howNeurolxpSupports" style={{ margin: 0, fontWeight: 700 }}>
								<span className="empowering">{`How `}</span>
								<span className="ngos">NGOs</span>
								<span className="empowering"> Can Use NeuroLXP<br /></span>
							</h2>
							<div className="neurolxpHelpsNonprofits">Explore how NeuroLXP helps nonprofits train, collaborate, and create lasting impact through engaging digital learning.</div>
						</div>
					</div>
					<div className="frameParent20">
						<div className="frameParent21">
							<div className="frameParent22">
								<div className="frameWrapper12">
									<div className="frameWrapper13">
										<div className="frameWrapper13">
											<div className="volunteerOnboardingWrapper">
												<div className="volunteerOnboarding">Volunteer Onboarding</div>
											</div>
										</div>
									</div>
								</div>
								<div className="useCaseCheckWrap" aria-hidden="true">
									<Image className="frameChild8" src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
								</div>
							</div>
							<div className="frameParent22">
								<div className="frameWrapper12">
									<div className="frameWrapper13">
										<div className="frameWrapper13">
											<div className="volunteerOnboardingWrapper" />
										</div>
									</div>
									<div className="volunteerOnboarding">Community Learning</div>
								</div>
								<div className="useCaseCheckWrap" aria-hidden="true">
									<Image className="frameChild8" src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
								</div>
							</div>
							<div className="frameParent22">
								<div className="frameWrapper12">
									<div className="frameWrapper13">
										<div className="frameWrapper13">
											<div className="volunteerOnboardingWrapper">
												<div className="leadershipTraining">Leadership Training</div>
											</div>
										</div>
									</div>
								</div>
								<div className="useCaseCheckWrap" aria-hidden="true">
									<Image className="frameChild8" src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
								</div>
							</div>
						</div>
						<div className="frameParent21">
							<div className="frameParent22">
								<div className="frameWrapper12">
									<div className="frameWrapper13">
										<div className="frameWrapper13">
											<div className="volunteerOnboardingWrapper">
												<div className="leadershipTraining">Beneficiary Training</div>
											</div>
										</div>
									</div>
								</div>
								<div className="useCaseCheckWrap" aria-hidden="true">
									<Image className="frameChild8" src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
								</div>
							</div>
							<div className="frameParent22">
								<div className="frameWrapper12">
									<div className="frameWrapper13">
										<div className="frameWrapper13">
											<div className="volunteerOnboardingWrapper">
												<div className="leadershipTraining">Advocacy Training</div>
											</div>
										</div>
									</div>
								</div>
								<div className="useCaseCheckWrap" aria-hidden="true">
									<Image className="frameChild8" src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
								</div>
							</div>
							<div className="frameParent22">
								<div className="frameWrapper12">
									<div className="frameWrapper13">
										<div className="frameWrapper13">
											<div className="volunteerOnboardingWrapper">
												<div className="leadershipTraining">Compliance Training</div>
											</div>
										</div>
									</div>
								</div>
								<div className="useCaseCheckWrap" aria-hidden="true">
									<Image className="frameChild8" src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ngoChild">
					<div className="frameWrapper29">
						<div className="frameParent30">
							<div className="frameParent31">
								<div className="frameChild15">NeuroLXP Benefits</div>
								<h2 className="benefitsForNgosContainer" style={{ margin: 0, fontWeight: 700 }}>
									<span className="empowering">{`Benefits for `}</span>
									<span className="ngos">{`NGOs `}</span>
									<span className="empowering">Organizations<br /></span>
								</h2>
								<div className="neurolxpHelpsNonprofits2">NeuroLXP helps nonprofits build stronger teams, empower communities, and amplify social impact through structured learning.<br /><br /><br /><br /></div>
							</div>
							<div className="frameParent32">
								<div className="frameParent33">
									<div className="frameChild16"><div className="benefitCheckInner" aria-hidden="true"><Image className="benefitCheckIcon" src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
									<div className="empoweredTeams">Empowered Teams</div>
								</div>
								<div className="frameParent33">
									<div className="frameChild16"><div className="benefitCheckInner" aria-hidden="true"><Image className="benefitCheckIcon" src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
									<div className="missionDrivenGrowth">Mission-Driven Growth</div>
								</div>
								<div className="frameParent33">
									<div className="frameChild16"><div className="benefitCheckInner" aria-hidden="true"><Image className="benefitCheckIcon" src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
									<div className="higherLearnerEngagement">Higher Learner Engagement</div>
								</div>
								<div className="frameParent33">
									<div className="frameChild19"><div className="benefitCheckInner" aria-hidden="true"><Image className="benefitCheckIcon" src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
									<div className="smarterLearningManagement">Smarter Learning Management</div>
								</div>
								<div className="frameParent33">
									<div className="frameChild16"><div className="benefitCheckInner" aria-hidden="true"><Image className="benefitCheckIcon" src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>
									<div className="measurableSocialImpact">Measurable Social Impact</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent38">
					<div className="frameParent39">
						<div className="frameChild21">NeuroLXP<sup className="neurolxpTrademark">TM</sup></div>
						<div className="enablingLearningForSocialIParent">
							<h2 className="enablingLearningFor" style={{ margin: 0, fontWeight: 700 }}>Enabling Learning for Social Impact</h2>
							<div className="withFlexibleLearning">With flexible learning tools, collaborative knowledge sharing, and scalable training capabilities, NeuroLXP helps nonprofit organizations build stronger teams, empower communities, and amplify their social impact through learning.<br /><br /><br /><br /></div>
						</div>
					</div>
					<div className="frameWrapper30">
						<div className="happyStudentsGraduationCereParent">
							<div className="happyStudentsGraduationCere" aria-hidden="true" />
							<video className="groupTeenagersDiscussingUniIcon" ref={bottomVideoRef} src="/videos/video1.mp4" preload="metadata" playsInline muted autoPlay loop onClick={toggleBottomVideo} aria-hidden="true" onPlay={() => setIsBottomVideoPlaying(true)} onPause={() => setIsBottomVideoPlaying(false)} onEnded={() => setIsBottomVideoPlaying(false)} />
							{!isBottomVideoPlaying && (
								<button type="button" className="frameChild22 videoPlayButton" onClick={toggleBottomVideo} aria-label="Play NeuroLXP social impact video">
									<Image className="videoPlayIcon" src="/icons/videosymbol.svg" width={106} height={106} sizes="106px" alt="" aria-hidden="true" />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default NGO;
