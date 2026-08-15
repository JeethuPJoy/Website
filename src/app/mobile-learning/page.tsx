import type { NextPage } from 'next';
import Image from "next/image";
import styles from "./mobile-learning.module.css";


const MobileLearning: NextPage = () => {
	return (
			<>
		
			<main id="main-content" className={styles.mobileLearning} tabIndex={-1}>
				<nav className={styles.frameDiv} aria-label="Breadcrumb">
					<div className={styles.featuresWrapper}>
						<span className={styles.addOnModules}>Features</span>
					</div>

					<Image
						className={styles.breadcrumbArrow}
						src="/icons/arrow-right-double.svg"
						width={16}
						height={16}
						alt=""
						aria-hidden="true"
					/>

					<div className={styles.featuresWrapper}>
						<span className={styles.addOnModules}>Add-On Modules</span>
					</div>

					<Image
						className={styles.breadcrumbArrow}
						src="/icons/arrow-right-double.svg"
						width={16}
						height={16}
						alt=""
						aria-hidden="true"
					/>

					<div className={styles.arrowRightDoubleGroup}>
						<b className={styles.addOnModules}>Mobile Learning</b>
					</div>
				</nav>
				<section className={styles.mobileHero} aria-labelledby="mobile-learning-title">
				<div className={styles.mobileHeroInner}>
					<div className={styles.mobileHeroContent}>
						<div className={styles.mobileHeroBadge}>Mobile Learning</div>

						<h1 id="mobile-learning-title" className={styles.mobileHeroTitle}>
							<span>Learn Anytime! Anywhere!</span>
							<span className={styles.mobileHeroTitleAccent}>On Any Device!</span>
						</h1>

						<p className={styles.mobileHeroDescription}>
							NeuroLXP enables seamless learning across smartphones and tablets.
						</p>

						<div className={styles.mobileHeroFeatures}>
							<div className={`${styles.mobileHeroFeature} ${styles.mobileHeroFeatureBlue}`}>Mobile First</div>
							<div className={`${styles.mobileHeroFeature} ${styles.mobileHeroFeaturePink}`}>Cloud Access</div>
							<div className={`${styles.mobileHeroFeature} ${styles.mobileHeroFeatureGreen}`}>Flexible Learning</div>
						</div>

						<a className={styles.mobileHeroButton} href="#book-a-demo">
							Book a Demo
						</a>
					</div>

					<div className={styles.mobileHeroVisual}>
						<Image
							className={styles.mobileHeroImage}
							src="/images/imagemobile.webp"
							alt="Learner using a smartphone"
							width={620}
							height={720}
							sizes="(max-width: 900px) 100vw, 48vw"
							priority
						/>
					</div>
				</div>
			</section>
			<section className={styles.routineSection} aria-labelledby="routine-title">
				<div className={styles.routinePanel}>
					<div className={styles.routineHeader}>
						<div className={styles.routineBadge}>Flexible Learning Access</div>
						<h2 id="routine-title" className={styles.routineTitle}>Learning That Fits Your Routine</h2>
						<p className={styles.routineSubtitle}>Learn anytime, anywhere, at your own pace.</p>
					</div>

					<div className={styles.routineStats}>
						<div className={`${styles.routineStat} ${styles.routineStatGreen}`}>
							<div className={styles.routineStatRing}>
								<strong>24/7</strong>
								<span>Learning<br />access</span>
							</div>
						</div>
						<div className={`${styles.routineStat} ${styles.routineStatPurple}`}>
							<div className={styles.routineStatRing}>
								<strong>100%</strong>
								<span>Responsive<br />layout</span>
							</div>
						</div>
						<div className={`${styles.routineStat} ${styles.routineStatPink}`}>
							<div className={styles.routineStatRing}>
								<strong>3+</strong>
								<span>Supported<br />Device</span>
							</div>
						</div>
					</div>

					<div className={styles.routineFeatures}>
						<div className={styles.routineFeature}>
							<Image src="/icons/globe-02.svg" className={styles.routineFeatureIcon} width={34} height={34} alt="" />
							<span>Access courses from anywhere</span>
						</div>
						<div className={styles.routineFeature}>
							<Image src="/icons/refresh-03.svg" className={styles.routineFeatureIcon} width={34} height={34} alt="" />
							<span>Continue learning on the go</span>
						</div>
						<div className={styles.routineFeature}>
							<Image src="/icons/smartphonepurple.svg" className={styles.routineFeatureIcon} width={34} height={34} alt="" />
							<span>Review resources anytime</span>
						</div>
						<div className={styles.routineFeature}>
							<Image src="/icons/chart-uporangeup.svg" className={styles.routineFeatureIcon} width={34} height={34} alt="" />
							<span>Track progress across devices</span>
						</div>
						<div className={styles.routineFeature}>
							<Image src="/icons/user-group-02lightgreen.svg" className={styles.routineFeatureIcon} width={34} height={34} alt="" />
							<span>Connect with Instructors &amp; Peers</span>
						</div>
					</div>
				</div>
			</section>
				<section className={styles.microSection} aria-labelledby="microlearning-title">
					<div className={styles.microContent}>
						<div className={styles.microBadge}>Microlearning</div>

						<h2 id="microlearning-title" className={styles.microTitle}>
							<span>Short Lessons! </span>
							<span className={styles.microTitleAccent}>Focused</span>
							<span className={`${styles.microTitleAccent} ${styles.microTitleSecondLine}`}>Learning!</span>
						</h2>

						<p className={styles.microDescription}>
							Break learning into quick, manageable experiences that fit busy schedules.
						</p>
					</div>

					<div className={styles.microBenefits}>
						<div className={`${styles.microBenefit} ${styles.microBenefitPink}`}>
							<div className={styles.microIconCircle}>
								<Image
									className={styles.microCheckIcon}
									src="/icons/tick-03.svg"
									width={38}
									height={38}
									alt=""
								/>
							</div>
							<span>Learn In Small, Focused Segments</span>
						</div>

						<div className={`${styles.microBenefit} ${styles.microBenefitPurple}`}>
							<div className={styles.microIconCircle}>
								<Image
									className={styles.microCheckIcon}
									src="/icons/tick-03.svg"
									width={38}
									height={38}
									alt=""
								/>
							</div>
							<span>Revise Concepts Quickly</span>
						</div>

						<div className={`${styles.microBenefit} ${styles.microBenefitBlue}`}>
							<div className={styles.microIconCircle}>
								<Image
									className={styles.microCheckIcon}
									src="/icons/tick-03.svg"
									width={38}
									height={38}
									alt=""
								/>
							</div>
							<span>Build Consistent Learning Habits</span>
						</div>

						<div className={`${styles.microBenefit} ${styles.microBenefitTeal}`}>
							<div className={styles.microIconCircle}>
								<Image
									className={styles.microCheckIcon}
									src="/icons/tick-03.svg"
									width={38}
									height={38}
									alt=""
								/>
							</div>
							<span>Stay Engaged, Stress-Free</span>
						</div>
					</div>
				</section>
				<section className={styles.interactiveSection} aria-labelledby="interactive-learning-title">
					<svg
						className={styles.interactiveSectionBackground}
						viewBox="24 0 1440 600"
						fill="none"
						aria-hidden="true"
						preserveAspectRatio="none"
					>
						<g filter="url(#interactiveOuterShadow)">
							<path
								d="M24 30H1464V468.293C1464 468.293 1027.32 572.437 741 575.906C458.343 579.33 24 488.247 24 488.247V30Z"
								fill="#DFE6E9"
							/>
						</g>

						<g filter="url(#interactiveInnerShadow)">
							<path
								d="M24 0H1464V446.32C1464 446.32 1027.32 552.372 741 555.904C458.343 559.391 24 466.64 24 466.64V0Z"
								fill="#DFE6E9"
							/>
							<path
								d="M24 0H1464V446.32C1464 446.32 1027.32 552.372 741 555.904C458.343 559.391 24 466.64 24 466.64V0Z"
								fill="url(#interactiveChevronPattern)"
								fillOpacity="0.11"
							/>
						</g>

						<defs>
							<filter
								id="interactiveOuterShadow"
								x="0"
								y="6"
								width="1488"
								height="594"
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
								<feBlend mode="normal" in2="BackgroundImageFix" result="shadow1" />

								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha2"
								/>
								<feOffset dx="-8" dy="-8" />
								<feGaussianBlur stdDeviation="8" />
								<feComposite in2="hardAlpha2" operator="out" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
								/>
								<feBlend mode="normal" in2="shadow1" result="shadow2" />
								<feBlend mode="normal" in="SourceGraphic" in2="shadow2" result="shape" />
							</filter>

							<filter
								id="interactiveInnerShadow"
								x="16"
								y="-8"
								width="1456"
								height="572"
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
								<feBlend mode="normal" in2="shape" result="inner1" />

								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha2"
								/>
								<feOffset dx="-8" dy="-8" />
								<feGaussianBlur stdDeviation="8" />
								<feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
								/>
								<feBlend mode="normal" in2="inner1" result="inner2" />
							</filter>

							<pattern
								id="interactiveChevronPattern"
								width="40"
								height="24"
								patternUnits="userSpaceOnUse"
							>
								<path
									d="M-10 0L0 10L10 0M10 0L20 10L30 0M30 0L40 10L50 0"
									stroke="#879398"
									strokeWidth="2"
									fill="none"
								/>
								<path
									d="M-10 12L0 22L10 12M10 12L20 22L30 12M30 12L40 22L50 12"
									stroke="#879398"
									strokeWidth="2"
									fill="none"
								/>
							</pattern>
						</defs>
					</svg>
					<div className={styles.interactiveSectionInner}>
						<div className={styles.interactiveIntro}>
							<div className={styles.interactiveBadge}>Interactive Mobile Learning</div>
							<h2 id="interactive-learning-title" className={styles.interactiveTitle}>
								Learn! Interact! Practice!
							</h2>
							<p className={styles.interactiveDescription}>
								Make mobile learning more engaging with interactive activities designed for active participation.
							</p>
						</div>

						<div className={styles.interactiveCards}>
							<div className={styles.interactiveCard}>
								<div className={`${styles.interactiveCardInner} ${styles.interactiveCardPink}`}>
									<strong>Interactive<br />quizzes</strong>
								</div>
							</div>
							<div className={styles.interactiveCard}>
								<div className={`${styles.interactiveCardInner} ${styles.interactiveCardPurple}`}>
									<strong>Gamified<br />learning</strong>
								</div>
							</div>
							<div className={styles.interactiveCard}>
								<div className={`${styles.interactiveCardInner} ${styles.interactiveCardBlue}`}>
									<strong>Discussion<br />forums</strong>
								</div>
							</div>
							<div className={styles.interactiveCard}>
								<div className={`${styles.interactiveCardInner} ${styles.interactiveCardGreen}`}>
									<strong>Interactive<br />explorations</strong>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.modernLearningSection} aria-labelledby="modern-learning-title">
					<div className={styles.modernLearningTop}>
						<div className={styles.modernLearningBadge}>Flexible Learning Access</div>
						<h2
							id="modern-learning-title"
							className={styles.modernLearningTitle}
							aria-label="Learning notifications that fit your routine"
						>
							Learning That Fits Your Routine
						</h2>
						<p className={styles.modernLearningSubtitle}>
							Learn anytime, anywhere, at your own pace.
						</p>

						<div className={styles.modernLearningPills}>
							<div className={`${styles.modernLearningPill} ${styles.modernLearningPillBlue}`}>
								New Course Releases
							</div>
							<div className={`${styles.modernLearningPill} ${styles.modernLearningPillPink}`}>
								Assignment Deadlines
							</div>
							<div className={`${styles.modernLearningPill} ${styles.modernLearningPillOrange}`}>
								Discussion Updates
							</div>
							<div className={`${styles.modernLearningPill} ${styles.modernLearningPillTeal}`}>
								Assessment Reminders
							</div>
							<div className={`${styles.modernLearningPill} ${styles.modernLearningPillPurple}`}>
								Certificates Earned
							</div>
						</div>
					</div>

					<div className={styles.modernLearningBottom}>
						<h2 className={styles.modernBuiltTitle}>Built for Modern Learning</h2>
						<p className={styles.modernBuiltDescription}>
							Mobile accessibility supports continuous learning across academic,
							professional, and remote learning environments.
						</p>

						<div className={styles.modernLearningCards}>
							<div className={styles.modernLearningCard}>
								<div className={`${styles.modernLearningIconShell} ${styles.modernLearningIconPink}`}>
									<Image
										src="/icons/student.svg"
										width={34}
										height={34}
										alt=""
									/>
								</div>
								<strong>Universities</strong>
							</div>

							<div className={styles.modernLearningCard}>
								<div className={`${styles.modernLearningIconShell} ${styles.modernLearningIconOrange}`}>
									<Image
										src="/icons/corporate.svg"
										width={34}
										height={34}
										alt=""
									/>
								</div>
								<strong>Corporate Training</strong>
							</div>

							<div className={styles.modernLearningCard}>
								<div className={`${styles.modernLearningIconShell} ${styles.modernLearningIconTeal}`}>
									<Image
										src="/icons/chart-up.svg"
										width={34}
										height={34}
										alt=""
									/>
								</div>
								<strong>Career Development</strong>
							</div>

							<div className={styles.modernLearningCard}>
								<div className={`${styles.modernLearningIconShell} ${styles.modernLearningIconGreen}`}>
									<Image
										src="/icons/globe-02.svg"
										width={34}
										height={34}
										alt=""
									/>
								</div>
								<strong>Remote Learning</strong>
							</div>

							<div className={styles.modernLearningCard}>
								<div className={`${styles.modernLearningIconShell} ${styles.modernLearningIconPurple}`}>
									<Image
										src="/icons/school.svg"
										width={34}
										height={34}
										alt=""
									/>
								</div>
								<strong>Schools</strong>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.limitsSection} aria-labelledby="learning-without-limits-title">
					<Image
						className={styles.limitsPolygon}
						src="/images/ellipse 402.webp"
						alt=""
						fill
						sizes="(max-width: 900px) 100vw, 1286px"
						aria-hidden="true"
					/>

					<div className={styles.limitsContent}>
						<div className={styles.limitsBadge}>NeuroLXP</div>

						<h2 id="learning-without-limits-title" className={styles.limitsTitle}>
							Learning Without Limits
						</h2>

						<p className={styles.limitsDescription}>
							NeuroLXP enables interactive, mobile-first learning anytime, anywhere
							at your own pace.
						</p>

						<a className={styles.limitsButton} href="#book-a-demo">
							Book a Demo
						</a>
					</div>
				</section>
			</main>
		</>
	);
};

export default MobileLearning;
