"use client";

import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import './learning.css';


const LearningCommunitySupport: NextPage = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isVideoPlaying, setIsVideoPlaying] = useState(true);
	const router = useRouter();

	const toggleVideoPlayback = () => {
		const video = videoRef.current;
		if (!video) return;

		if (video.paused) {
			void video.play();
			setIsVideoPlaying(true);
		} else {
			video.pause();
			setIsVideoPlaying(false);
		}
	};

	return (
		<div className="learningCommunitySupport">
			<div className="frameDiv">
				<div className="featuresWrapper">
					<div className="augmentation">Features</div>
				</div>
				<div className="homeParent">
					<Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
					<div className="featuresWrapper">
						<div className="augmentation">Augmentation</div>
					</div>
				</div>
				<div className="arrowRightDoubleGroup">
					<Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
					<h3 className="augmentation" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>{`Learning Community & Support`}</h3>
				</div>
			</div>
			<div className="rectangleParent">
				<div className="rectangle" />
				<div className="image20" />
				<div className="groupMultiethnicBusinessPeo" />
				<div className="frameInner">
					<svg
						className="frameInnerShape"
						width="720"
						height="652"
						viewBox="0 0 720 652"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						focusable="false"
					>
						<g filter="url(#userSupportRightFrameShadow)">
							<path
								d="M96.1406 0H720V652H96.1406C96.1406 652 -3.36036 449.622 0.0875835 311C3.25681 183.584 96.1406 0 96.1406 0Z"
								fill="#DFE6E9"
							/>
						</g>
						<defs>
							<filter
								id="userSupportRightFrameShadow"
								x="-8"
								y="-8"
								width="736"
								height="668"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dx="8" dy="8" />
								<feGaussianBlur stdDeviation="8" />
								<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"
								/>
								<feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dx="-8" dy="-8" />
								<feGaussianBlur stdDeviation="8" />
								<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
								/>
								<feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
							</filter>
						</defs>
					</svg>

					<Image
						className="rectangleIcon"
						src="/images/limage.png"
						width={667}
						height={616}
						sizes="(max-width: 768px) 100vw, 667px"
						alt="Learners collaborating around a laptop"
					/>
				</div>
				<div className="frameParent2">
					<div className="frameWrapper">
						<div className="frameParent3">
							<div className="frameParent4">
								<div className="userSupportSocialLearning">User Support &amp; Social Learning</div>
								<h1 className="learnTogetherStay" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Learn Together! Stay Connected</h1>
							</div>
							<div className="neurolxpCombinesSupport">NeuroLXP combines support, collaboration, and social learning in one connected experience.</div>
						</div>
					</div>
					<div className="frameWrapper2">
						<div className="frameWrapper3">
							<div className="frameWrapper4">
								<div
									className="bookADemoWrapper"
									role="button"
									tabIndex={0}
									onClick={() => router.push("/contact")}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											router.push("/contact");
										}
									}}
								>
									<div className="bookADemo">Book a Demo</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="frameParent5">
				<div className="frameWrapper5">
					<div className="frameWrapper6">
						<div className="frameParent6">
							<div className="frameChild2">
								Always-On Learning Support
							</div>
							<div className="getTheHelpYouNeedWhenYoParent">
								<h2 className="getTheHelp" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Get the help you need! When you need it</h2>
								<div className="neurolxpKeepsLearners">NeuroLXP keeps learners and educators supported with</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent7">
					<div className="frameParent8">
						<div className="ellipseParent">
							<div className="ellipseDiv" />
							<div className="ellipseGroup">
								<div className="frameChild3" />
								<h3 className="helpdeskTechnical" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>{`Helpdesk & technical support`}</h3>
							</div>
						</div>
						<div className="ellipseContainer">
							<div className="ellipseDiv" />
							<div className="ellipseGroup">
								<div className="frameChild3" />
								<h3 className="guidedOnboarding" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Guided onboarding</h3>
							</div>
						</div>
					</div>
					<div className="frameParent9">
						<div className="ellipseParent">
							<div className="ellipseDiv" />
							<div className="ellipseGroup">
								<div className="frameChild3" />
								<h3 className="faqsKnowledge" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>{`FAQs & knowledge base`}</h3>
							</div>
						</div>
						<div className="ellipseParent5">
							<div className="ellipseDiv" />
							<div className="ellipseGroup">
								<div className="frameChild3" />
								<h3 className="inPlatformGuidance" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>In-platform guidance</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="vectorParent">
				<svg
					className="frameChild10"
					width="1440"
					height="574"
					viewBox="0 0 1440 574"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
				>
					<g filter="url(#learningBetterTogetherShadow)">
						<path
							d="M0 24H1440V446.311L717 550L0 465.538V24Z"
							fill="#DFE6E9"
						/>
					</g>

					<defs>
						<filter
							id="learningBetterTogetherShadow"
							x="-24"
							y="0"
							width="1488"
							height="574"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="8" dy="8" />
							<feGaussianBlur stdDeviation="8" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1DropShadow"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="-8" dy="-8" />
							<feGaussianBlur stdDeviation="8" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
							/>
							<feBlend
								mode="normal"
								in2="effect1DropShadow"
								result="effect2DropShadow"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect2DropShadow"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
				<div className="frameParent10">
					<div className="frameWrapper7">
						<div className="frameParent11">
							<div className="frameChild11">Learning Is Better Together</div>
							<div className="getTheHelpYouNeedWhenYoParent">
								<h2 className="connectBeyondThe" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Connect Beyond the Classroom</h2>
								<div className="connectWithPeers">Connect with peers, educators, and experts to share  collaborate, and learn from each other.</div>
							</div>
						</div>
					</div>
					<div className="frameParent12">
						<div className="frameWrapper8 communityCard" tabIndex={0}>
							<div className="discussionForumsParent">
								<h3 className="discussionForums" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Discussion Forums</h3>
								<div className="askQuestionsExchange">Ask questions, exchange ideas, and explore topics together</div>
							</div>
						</div>
						<div className="frameWrapper9 communityCard" tabIndex={0}>
							<div className="learningCommunitiesParent">
								<h3 className="learningCommunities" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Learning Communities</h3>
								<div className="createDedicatedSpaces">Create dedicated spaces for courses, groups, projects and shared interests</div>
							</div>
						</div>
						<div className="frameWrapper10 communityCard" tabIndex={0}>
							<div className="discussionForumsParent">
								<h3 className="discussionForums" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Peer Collaboration</h3>
								<div className="askQuestionsExchange">Learn from different perspectives and solve problems together</div>
							</div>
						</div>
						<div className="frameWrapper11 communityCard" tabIndex={0}>
							<div className="discussionForumsParent">
								<h3 className="discussionForums" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Expert Connect</h3>
								<div className="askQuestionsExchange">Get guidance and insights from educators and experts</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="frameParent13">
				<div className="frameWrapper12">
					<div className="peopleTakingPartBusinessEvParent">
						<div className="peopleTakingPartBusinessEv" />
						<div className="image21" />
						<div className="groupYoungBusinesspeopleUsi" />

						<div className="frameParent14">
							<div className="frameWrapper13">
								<div className="officeDesktopWithLaptopBusParent">
									<video
										ref={videoRef}
										className="officeDesktopWithLaptopBusIcon"
										src="/videos/LerningCommunity-video.mp4"
										autoPlay
										muted
										loop
										playsInline
										preload="metadata"
										onPlay={() => setIsVideoPlaying(true)}
										onPause={() => setIsVideoPlaying(false)}
										aria-label="Learning community collaboration video"
										onClick={toggleVideoPlayback}
									/>
									{!isVideoPlaying && (
										<button
											type="button"
											className="videoControlButton"
											onClick={toggleVideoPlayback}
											aria-label="Play video"
										>
											<Image
												className="videoControlIcon"
												src="/icons/videosymbol.svg"
												width={64}
												height={64}
												sizes="64px"
												alt=""
												aria-hidden="true"
											/>
										</button>
									)}
								</div>
							</div>
							<div className="frameParent15">
								<div className="frameWrapper14">
									<div className="frameWrapper15">
										<div className="frameWrapper16">
											<div className="shareKnowledgeBuildConfideParent">
												<h2 className="shareKnowledgeBuild" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Share Knowledge! Build Confidence</h2>
												<div className="learnersCanActively">Learners can actively contribute to the learning community by sharing what they know and learning from others.</div>
											</div>
										</div>
									</div>
								</div>
								<div className="frameParent16">
									<div className="frameParent17">
										<div className="arrowDownBigParent">
											<Image className="arrowDownBigIcon" src="/icons/arrowpink.svg" width={36} height={36} sizes="100vw" alt="" />
											<div className="shareIdeasAnd">Share ideas and resources</div>
										</div>
										<div className="arrowDownBigParent">
											<Image className="arrowDownBigIcon2" src="/icons/arrowpurple.svg" width={36} height={36} sizes="100vw" alt="" />
											<div className="askQuestionsAnd">Ask questions and seek guidance</div>
										</div>
									</div>
									<div className="frameParent18">
										<div className="arrowDownBigParent">
											<Image className="arrowDownBigIcon" src="/icons/arrowbrown.svg" width={36} height={36} sizes="100vw" alt="" />
											<div className="collaborateOnProjects">Collaborate on projects and problems</div>
										</div>
										<div className="arrowDownBigParent">
											<Image className="arrowDownBigIcon" src="/icons/arrowblue.svg" width={36} height={36} sizes="100vw" alt="" />
											<div className="exchangeKnowledgeAnd">Exchange knowledge and give feedback</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frameParent19">
					<div className="rectangleGroup">
						<div className="rectangle2" />
						<div className="image202" />
						<div className="frameParent20">
							{/* <Image className="frameChild14" width={295.8} height={50.2} sizes="100vw" alt="" /> */}
							<div className="getTheHelpYouNeedWhenYoParent">
								<h2 className="connectBeyondThe" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Connect Beyond the Classroom</h2>
								<div className="connectWithPeers">Connect with peers, educators, and experts to share  collaborate, and learn from each other.</div>
							</div>
						</div>
					</div>
					<Image
						className="safeSpaceBackground"
						src="/images/social_lerningbg.png"
						width={1259}
						height={500}
						sizes="(max-width: 1280px) 100vw, 1259px"
						alt=""
						aria-hidden="true"
					/>
					<div className="rectangleContainer">
						<div className="rectangle3" />
						<div className="image203" />
						<div className="frameParent21">
							<div className="frameParent22">
								<div className="learnWithConfidence">Learn with Confidence</div>
								<div className="safeSpaceContent">
									<h2 className="safeSpaceTitle">A Safe Space to Learn and Participate</h2>
									<p className="neurolxpCreatesSafe">NeuroLXP creates safe, structured communities where learners can confidently ask, share, and collaborate.</p>
								</div>
							</div>
							<p className="everyQuestionMatters">Every Question Matters! Every Voice Counts</p>
						</div>
					</div>
				</div>
			</div>
			<div className="frameParent40">
				<div className="frameParent41">
					<div className="frameParent42">
						<div className="frameParent22">
							<div className="frameChild26">From Support to Social Learning</div>
							<div className="getTheHelpYouNeedWhenYoParent">
								<h2 className="connectBeyondThe" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Everything Learners Need to Stay Connected</h2>
								<div className="neurolxpCreatesSafe">NeuroLXP connects support and collaboration across the learning journey.</div>
							</div>
						</div>
						<div className="frameParent44">
							<div className="frameParent45">
								<div className="frameParent46">
									<div className="frameChild27">
										<div className="supportIconInner">
											<Image
												className="supportIcon"
												src="/icons/headset.svg"
												width={34}
												height={34}
												sizes="34px"
												alt="Get support"
											/>
										</div>
									</div>
									<div className="getSupportParent">
										<h3 className="getSupport" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Get Support</h3>
										<div className="findAnswersAnd">Find answers and guidance when you need them</div>
									</div>
								</div>
								<div className="frameParent47">
									<div className="frameChild27">
										<div className="supportIconInner">
											<Image
												className="supportIcon"
												src="/icons/collabrate.svg"
												width={34}
												height={34}
												sizes="34px"
												alt="Collaborate"
											/>
										</div>
									</div>
									<div className="getSupportParent">
										<h3 className="collaborate" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Collaborate</h3>
										<div className="workTogetherDiscuss">Work together, discuss ideas, and solve problems</div>
									</div>
								</div>
								<div className="frameParent48">
									<div className="frameChild27">
										<div className="supportIconInner">
											<Image
												className="supportIcon"
												src="/icons/plant.svg"
												width={34}
												height={34}
												sizes="34px"
												alt="Grow"
											/>
										</div>
									</div>
									<div className="getSupportParent">
										<h3 className="grow" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Grow</h3>
										<div className="buildConfidenceStrengthen">Build confidence, strengthen skills, and learn together</div>
									</div>
								</div>
							</div>
							<div className="frameParent49">
								<div className="frameParent46">
									<div className="frameChild27">
										<div className="supportIconInner">
											<Image
												className="supportIcon"
												src="/icons/link.svg"
												width={34}
												height={34}
												sizes="34px"
												alt="Connect"
											/>
										</div>
									</div>
									<div className="getSupportParent">
										<h3 className="connect" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Connect</h3>
										<div className="engageWithPeers">Engage with peers, educators, and mentors</div>
									</div>
								</div>
								<div className="frameParent51">
									<div className="frameChild27">
										<div className="supportIconInner">
											<Image
												className="supportIcon"
												src="/icons/share.svg"
												width={34}
												height={34}
												sizes="34px"
												alt="Share"
											/>
										</div>
									</div>
									<div className="getSupportParent">
										<h3 className="share" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Share</h3>
										<div className="findAnswersAnd">Exchange knowledge, resources, and experiences</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="frameParent52">
						<div className="builtForEveryoneInTheLearWrapper">
							<h2 className="builtForEveryone" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Built for Everyone in the Learning Ecosystem</h2>
						</div>
						<div className="frameParent53">
							<article className="ecosystemCard">
								<div className="ecosystemCardTop">
									<div className="ecosystemNumber">01</div>
									<h3 className="ecosystemTitle">For Learners</h3>
								</div>
								<p className="ecosystemDescription">
									Get support, connect with peers, and learn through collaboration
								</p>
							</article>

							<article className="ecosystemCard">
								<div className="ecosystemCardTop">
									<div className="ecosystemNumber">02</div>
									<h3 className="ecosystemTitle">For Educators</h3>
								</div>
								<p className="ecosystemDescription">
									Guide learners, facilitate discussions, and build active learning communities
								</p>
							</article>

							<article className="ecosystemCard">
								<div className="ecosystemCardTop">
									<div className="ecosystemNumber">03</div>
									<h3 className="ecosystemTitle">For Institutions</h3>
								</div>
								<p className="ecosystemDescription">
									Strengthen engagement, communication, and a connected learning culture
								</p>
							</article>
						</div>
					</div>
				</div>
				<div className="frameParent61">
					<div className="frameWrapper20">
						<div className="frameWrapper16">
							<div className="shareKnowledgeBuildConfideParent">
								<h2 className="moreThanAn" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>More Than an LMS! A Learning Community</h2>
								<div className="traditionalLmsPlatforms">Traditional LMS platforms deliver content. NeuroLXP connects learners to learn, collaborate, and grow together.<br /><br /><br /><br /></div>
							</div>
						</div>
					</div>
					<div
						className="requestADemoWrapper"
						role="button"
						tabIndex={0}
						onClick={() => router.push("/contact")}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								router.push("/contact");
							}
						}}
					>
						<h3 className="requestADemo" style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Request a Demo</h3>
					</div>
				</div>
			</div>
		</div>);
};

export default LearningCommunitySupport;
