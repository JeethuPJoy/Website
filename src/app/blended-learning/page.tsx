import type { NextPage } from 'next';
import Image from "next/image";
import './blended-learning.css';


const BlendedLearning: NextPage = () => {
  	return (
    		<>
			<main id="main-content" className="blendedLearning" tabIndex={-1}>
      			
      			<nav className="frameDiv" aria-label="Breadcrumb">
        				<div className="resourcesWrapper">
          					<div className="useCases">Resources</div>
        				</div>
        				<div className="homeParent">
          					<Image
									className="arrowDown01Icon"
									src="/icons/arrow-right-double.svg"
									width={16}
									height={16}
									sizes="16px"
									alt=""
									aria-hidden="true"
								/>
          					<div className="resourcesWrapper">
            						<div className="useCases">Use cases</div>
          					</div>
        				</div>
        				<div className="arrowRightDoubleGroup">
          					<Image
									className="arrowDown01Icon"
									src="/icons/arrow-right-double.svg"
									width={16}
									height={16}
									sizes="16px"
									alt=""
									aria-hidden="true"
								/>
          					<b className="useCases">Blended Learning</b>
        				</div>
      			</nav>
      			<section className="blendedHero" aria-labelledby="blended-learning-title">
					<div className="blendedHeroContent">
						<div className="blendedHeroBadge">NeuroLXP Blended Learning</div>

						<h1 id="blended-learning-title" className="blendedHeroTitle">
							<span className="blendedHeroTitleLine">Bridge Classroom and</span>
							<span className="blendedHeroTitleLine blendedHeroTitleAccent">Digital Learning</span>
						</h1>

						<p className="blendedHeroDescription">
							Blend classroom and digital learning for flexible, engaging experiences.
						</p>
					</div>

					<div className="blendedHeroVisual">
						<div className="blendedHeroImages">
							<Image
								className="blendedHeroImage"
								src="/images/first.webp"
								width={320}
								height={320}
								alt="Teacher presenting in a classroom"
								priority
							/>

							<div className="blendedHeroPlus" aria-hidden="true">+</div>

							<Image
								className="blendedHeroImage"
								src="/images/secondblend.webp"
								width={320}
								height={320}
								alt="Learner using virtual reality for digital learning"
								priority
							/>
						</div>

						<p className="blendedHeroEquation">
							<span className="blendedHeroEquationBlue">Classroom Learning + </span>
							<span className="blendedHeroEquationPink">Digital Learning</span>
							<span className="blendedHeroEquationEquals"> = </span>
							<span className="blendedHeroEquationGradient">Blended Learning</span>
						</p>
					</div>
				</section>
				<section className="howItWorksSection" aria-labelledby="how-it-works-title">
					<div className="howItWorksHeader">
						<div className="howItWorksBadge">How It Works</div>

						<h2 id="how-it-works-title" className="howItWorksTitle">
							<span>The Smarter Way To </span>
							<span className="howItWorksTitleAccent">Blend Learning</span>
						</h2>

						<p className="howItWorksDescription">
							NeuroLXP unifies classroom learning, digital content, assessments, and analytics.
						</p>
					</div>

					<div className="howItWorksBody">
						<div className="howItWorksTimeline" aria-hidden="true">
							<div className="howItWorksLine" />

							<div className="howItWorksIcon howItWorksIconPink">
								<Image
									src="/icons/alarm-clock.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className="howItWorksIcon howItWorksIconBlue">
								<Image
									src="/icons/gauge.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className="howItWorksIcon howItWorksIconPurple">
								<Image
									src="/icons/target-01purple.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className="howItWorksIcon howItWorksIconGreen">
								<Image
									src="/icons/internetgreen.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>

							<div className="howItWorksIcon howItWorksIconWine">
								<Image
									src="/icons/waterfall-up-01.svg"
									width={44}
									height={44}
									alt=""
								/>
							</div>
						</div>

						<div className="howItWorksCards">
							<article className="howItWorksCard howItWorksCardPink">
								<p className="howItWorksChallenge">CHALLENGE 1</p>
								<h3>Use Classroom Time Better</h3>
								<p className="howItWorksProblem">
									Limited class time restricts deeper learning opportunities.
								</p>

								<div className="howItWorksSolution">
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Move foundational learning online, maximize classroom time.</p>
								</div>
							</article>

							<article className="howItWorksCard howItWorksCardBlue">
								<p className="howItWorksChallenge">CHALLENGE 2</p>
								<h3>Support Every Learning Pace</h3>
								<p className="howItWorksProblem">
									Learners progress differently, requiring flexible learning support.
								</p>

								<div className="howItWorksSolution">
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Learn independently with flexible digital practice.</p>
								</div>
							</article>

							<article className="howItWorksCard howItWorksCardPurple">
								<p className="howItWorksChallenge">CHALLENGE 3</p>
								<h3>Keep Learners Engaged</h3>
								<p className="howItWorksProblem">
									Traditional lectures can reduce engagement and retention.
								</p>

								<div className="howItWorksSolution">
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Interactive learning boosts engagement beyond classrooms.</p>
								</div>
							</article>

							<article className="howItWorksCard howItWorksCardGreen">
								<p className="howItWorksChallenge">CHALLENGE 4</p>
								<h3>Extend Learning Beyond Class</h3>
								<p className="howItWorksProblem">
									Extend learning with structured digital experiences.
								</p>

								<div className="howItWorksSolution">
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Access resources anytime for continuous learning.</p>
								</div>
							</article>

							<article className="howItWorksCard howItWorksCardWine">
								<p className="howItWorksChallenge">CHALLENGE 5</p>
								<h3>Track Progress &amp; Performance</h3>
								<p className="howItWorksProblem">
									Tracking learner engagement and progress is challenging.
								</p>

								<div className="howItWorksSolution">
									<strong>HOW NEUROLXP HELPS</strong>
									<p>Track learner progress and identify learning gaps.</p>
								</div>
							</article>
						</div>
					</div>
				</section>
				<section className="blendedBenefitsSection" aria-labelledby="blended-benefits-title">
					<Image
						className="blendedBenefitsBackground"
						src="/images/blended background.webp"
						alt=""
						fill
						sizes="(max-width: 900px) 100vw, 1280px"
						aria-hidden="true"
					/>

					<div className="blendedBenefitsContent">
						<div className="blendedBenefitsIntro">
							<div className="blendedBenefitsBadge">Benefits</div>

							<h2 id="blended-benefits-title" className="blendedBenefitsTitle">
								Benefits of Blended Learning<br />
								with NeuroLXP
							</h2>

							<p className="blendedBenefitsDescription">
								Institutions adopting blended learning<br />
								through NeuroLXP can:
							</p>
						</div>

						<div className="blendedBenefitsList">
							<div className="blendedBenefitItem">
								<div className="blendedBenefitIcon blendedBenefitIconBlue">
									<Image
										src="/icons/refresh-03blue.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Blend classroom and digital learning</p>
							</div>

							<div className="blendedBenefitItem">
								<div className="blendedBenefitIcon blendedBenefitIconPink">
									<Image
										src="/icons/target-02pink.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Increase learner engagement</p>
							</div>

							<div className="blendedBenefitItem">
								<div className="blendedBenefitIcon blendedBenefitIconPurple">
									<Image
										src="/icons/alarm-clock copy.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Enable self-paced learning</p>
							</div>

							<div className="blendedBenefitItem">
								<div className="blendedBenefitIcon blendedBenefitIconOrange">
									<Image
										src="/icons/idea-01orange.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Reinforce Knowledge Interactively</p>
							</div>

							<div className="blendedBenefitItem">
								<div className="blendedBenefitIcon blendedBenefitIconGold">
									<Image
										src="/icons/chart-line-data-02.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Track progress with learning analytics</p>
							</div>

							<div className="blendedBenefitItem">
								<div className="blendedBenefitIcon blendedBenefitIconWine">
									<Image
										src="/icons/globe-02red.svg"
										width={40}
										height={40}
										alt=""
									/>
								</div>
								<p>Extend learning beyond the classroom</p>
							</div>
						</div>
					</div>
				</section>
				<section className="blendedCtaSection" aria-labelledby="blended-cta-title">
					<div className="blendedCtaHeader">
						<div className="blendedCtaBadge">Smarter Blended Learning</div>

						<h2 id="blended-cta-title" className="blendedCtaTitle">
							<span>Transform Learning With </span>
							<span className="blendedCtaTitleAccent">NeuroLXP</span>
						</h2>

						<p className="blendedCtaDescription">
							Enhance teaching, support learners, and drive better outcomes.
						</p>

						<button className="blendedCtaButton" type="button">
							Book a Demo
						</button>
					</div>

					<div className="blendedCtaImageFrame">
						<div className="blendedCtaImageShell">
							<Image
								className="blendedCtaImage"
								src="/images/ellipse 412.webp"
								width={1280}
								height={726}
								sizes="(max-width: 900px) calc(100vw - 48px), 1280px"
								alt="Learner attending an online lesson using a laptop and headphones"
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default BlendedLearning;
