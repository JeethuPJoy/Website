import type { NextPage } from 'next';
import Image from "next/image";
import "./help.css";
const HelpAndSupport: NextPage = () => {
  	return (
    		<div className="helpAndSupport"><div className="frameDiv">
        				<div className="resourcesWrapper">
          					<div className="resources2">Resources</div>
        				</div>
        				<div className="arrowRightDoubleParent">
          					<Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          					<b className="resources2">Help and Support</b>
        				</div>
      			</div>
      			<div className="frameParent2">
        				<div className="frameParent3">
          					<div className="frameParent4">
            						<div className="frameParent5">
              							<div className="frameIcon">Help &amp; Support</div>
              							<b className="empoweringYouAtContainer">
                								<span className="empoweringYouAt">{`Empowering You at `}</span>
                								<span className="everyStep">Every Step</span>
              							</b>
            						</div>
            						<div className="reliableSupportFor">Reliable support for administrators educators, and learners.</div>
          					</div>
          					<a className="frameChild2" href="/book-a-demo">
							Book a Demo
						</a>
        				</div>
        				<div className="frameParent6">
          					<Image
						className="frameChild3"
						src="/images/bghelp.png"
						width={736}
						height={486}
						sizes="(max-width: 768px) 100vw, 736px"
						alt=""
					/>
          					<div className="welcomeSign1Wrapper">
            						<Image
							className="welcomeSign1Icon"
							src="/images/imagehelp.png"
							width={642}
							height={440}
							sizes="(max-width: 768px) 100vw, 642px"
							alt="Help and support representative"
						/>
          					</div>
        				</div>
      			</div>
      			<div className="comprehensiveSupportParent">
        				<b className="comprehensiveSupport">Comprehensive Support</b>
        				<div className="frameParent7">
							<div className="supportCard supportCardPurple">
								<div className="supportCardInner">
									<div className="supportCardContent">
										<b className="supportCardTitle">Technical<br />Support</b>
										<div className="supportCardText">Resolve platform and<br />technical issues</div>
									</div>
									<div className="supportCardAccent" />
								</div>
							</div>

							<div className="supportCard supportCardPink">
								<div className="supportCardInner">
									<div className="supportCardContent">
										<b className="supportCardTitle">User<br />Onboarding</b>
										<div className="supportCardText">Get started with<br />guided assistance</div>
									</div>
									<div className="supportCardAccent" />
								</div>
							</div>

							<div className="supportCard supportCardGreen">
								<div className="supportCardInner">
									<div className="supportCardContent">
										<b className="supportCardTitle">Feature<br />Guidance</b>
										<div className="supportCardText">Explore Platform<br />Features</div>
									</div>
									<div className="supportCardAccent" />
								</div>
							</div>

							<div className="supportCard supportCardBlue">
								<div className="supportCardInner">
									<div className="supportCardContent">
										<b className="supportCardTitle">Technical<br />Help</b>
										<div className="supportCardText">Quickly resolve<br />common issues</div>
									</div>
									<div className="supportCardAccent" />
								</div>
							</div>
        				</div>
      			</div>
      			<div className="helpAndSupportInner">
					<div className="frameParent8">
						<div className="frameWrapper">
							<div className="frameParent9">
								<div className="knowledgeResourcesWrapper">
									<b className="knowledgeResources">Knowledge &amp; Resources</b>
								</div>
								<div className="accessPracticalResources">
									Access practical resources to manage and use NeuroLXP effectively:
								</div>
							</div>
						</div>

						<div className="frameWrapper2">
							<div className="frameParent10">
								<div className="frameParent11">
									<div className="resourceIcon resourceIconPink">
										<div className="resourceIconInner">
											<Image src="/icons/compasswhite.svg" width={34} height={34} alt="" />
										</div>
									</div>
									<b className="gettingStartedGuides">Getting Started Guides</b>
								</div>

								<div className="frameParent11">
									<div className="resourceIcon resourceIconPurple">
										<div className="resourceIconInner">
											<Image src="/icons/book-plus.svg" width={34} height={34} alt="" />
										</div>
									</div>
									<b className="courseCreationTutorials">Course Creation Tutorials</b>
								</div>

								<div className="frameParent11">
									<div className="resourceIcon resourceIconBlue">
										<div className="resourceIconInner">
											<Image src="/icons/chart-up.svg" width={34} height={34} alt="" />
										</div>
									</div>
									<b className="assessmentReporting">Assessment &amp; Reporting Guides</b>
								</div>

								<div className="frameParent11">
									<div className="resourceIcon resourceIconTeal">
										<div className="resourceIconInner">
											<Image src="/icons/foldernew.svg" width={34} height={34} alt="" />
										</div>
									</div>
									<b className="contentManagementResources">Content Management Resources</b>
								</div>

								<div className="frameParent11">
									<div className="resourceIcon resourceIconGold">
										<div className="resourceIconInner">
											<Image src="/icons/settingswhite.svg" width={34} height={34} alt="" />
										</div>
									</div>
									<b className="contentManagementResources">Platform Configuration Guides</b>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="helpAndSupportChild">
        				<div className="frameParent16">
          					<div className="frameChild13">
							<span className="neurolxpBadgeText">NeuroLXP</span>
							<sup className="neurolxpBadgeTm">TM</sup>
						</div>
          					<div className="supportForYourLearningEcosParent">
            						<b className="supportForYour">Support for Your Learning Ecosystem</b>
            						<div className="fromOnboardingTo">{`From onboarding to daily management, NeuroLXP supports every learning journey. `}</div>
          					</div>
        				</div>
      			</div>
		</div>);
};

export default HelpAndSupport;
