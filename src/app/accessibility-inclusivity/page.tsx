import type { NextPage } from 'next';
import Image from "next/image";
import styles from "./access.module.css";


const AccessibilityInclusivity: NextPage = () => {
	return (
		<main className={styles.accessibilityInclusivity}>
			<nav className={styles.frameDiv} aria-label="Breadcrumb">
				<div className={styles.featuresWrapper}>
					<div className={styles.addOnModules}>Features</div>
				</div>
				<div className={styles.homeParent}>
					<Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg"  width={16} height={16} sizes="100vw" alt="" />
					<div className={styles.featuresWrapper}>
						<div className={styles.addOnModules}>Add-On Modules</div>
					</div>
				</div>
				<div className={styles.arrowRightDoubleGroup}>
					<Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg"  width={16} height={16} sizes="100vw" alt="" />
					<b className={styles.addOnModules}>{`Accessibility & Inclusivity`}</b>
				</div>
			</nav>
			<div className={styles.image20Parent}>
				<div className={styles.image20} />
				<div className={styles.frameParent2}>
					
					<div className={styles.peopleTakingPartBusinessEvParent}>
						
						<div className={styles.peopleTakingPartBusinessEv} />
						<div className={styles.image21} />
						<div className={styles.groupYoungBusinesspeopleUsi} />
						<Image className={styles.frameInner} src="/images/bg-access.webp" width={1216} height={621} sizes="100vw" alt="" />
						<Image className={styles.youngAdultWatchingTvShowWIcon} src="/images/work.webp" width={572} height={652} sizes="100vw" alt="" />
					</div>
					<div className={styles.frameParent3}>
						<div className={styles.frameParent4}>
							<div className={styles.frameParent5}>
								<div className={styles.frameIcon}>Accessibility and Inclusivity</div>
								<b className={styles.learningDesignedFor}>Learning Designed for Everyone<br /><br /><br /></b>
							</div>
							<div className={styles.neurolxpEnsuresEvery}>NeuroLXP ensures every learner can engage learn, and succeed through inclusive design and accessible learning experiences.
							</div>
						</div>
						<div className={styles.frameWrapper}>
							<div className={styles.bookADemoWrapper}>
								<div className={styles.bookADemo}>Book a Demo</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.frameParent6}>
				<div className={styles.frameWrapper2}>
					<div className={styles.frameParent4}>
						<div className={styles.accessibleLearningForDiversWrapper}>
							<b className={styles.learningDesignedFor}>Accessible Learning for Diverse Needs<br /></b>
						</div>
						<div className={styles.designedToMake}>Designed to make learning materials easier to access, navigate, and understand for all learners.<br /><br /></div>
					</div>
				</div>
				<div className={styles.frameParent8}>
					<div className={styles.frameParent9}>
						<div className={styles.frameWrapper3}>
							<div className={styles.compassParent}>
								<Image className={styles.compassIcon} src="/icons/compasspink.svg" width={50} height={50} sizes="100vw" alt="" />
								<div className={styles.easyNavigationWrapper}>
									<div className={styles.easyNavigation}>Easy Navigation</div>
								</div>
							</div>
						</div>
						<div className={styles.frameWrapper3}>
							<div className={styles.compassParent}>
								<Image className={styles.compassIcon} src="/icons/library.svg" width={50} height={50} sizes="100vw" alt="" />
								<div className={styles.easyNavigationWrapper}>
									<div className={styles.multiFormatLearning}>Multi-Format Learning</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.frameParent9}>
						<div className={styles.frameWrapper3}>
							<div className={styles.compassParent}>
								<Image className={styles.compassIcon} src="/icons/mousepurple.svg" width={50} height={50} sizes="100vw" alt="" />
								<div className={styles.easyNavigationWrapper}>
									<div className={styles.easyNavigation}>Interactive Content</div>
								</div>
							</div>
						</div>
						<div className={styles.frameWrapper3}>
							<div className={styles.compassParent}>
								<Image className={styles.compassIcon} src="/icons/clipboardorange.svg" width={50} height={50} sizes="100vw" alt="" />
								<div className={styles.easyNavigationWrapper}>
									<div className={styles.unlimitedAssessments}>Unlimited Assessments</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.frameParent11}>
				<div className={styles.frameWrapper7}>
					<div className={styles.frameWrapper8}>
						<div className={styles.frameParent12}>
							<div className={styles.frameChild2}>Flexible Learning Formats</div>
							<div className={styles.multipleContentFormatsForFParent}>
								<b className={styles.multipleContentFormats}>Multiple Content Formats for Flexible Learning<br /><br /></b>
								<div className={styles.deliverEngagingLearning}>Deliver engaging learning experiences with diverse content formats that suit every learner.</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.frameParent13}>
					<div className={styles.frameParent14}>
						<div className={styles.frameWrapper9}>
							<div className={styles.frameParent15}>
								<div className={styles.frameWrapper10}>
									<div className={styles.frameChild3} />
								</div>
								<div className={styles.frameParent16}>
									<div className={styles.formatIconOuter}>
										<div className={`${styles.formatIconInner} ${styles.formatIconGreen}`}>
											<Image
												className={styles.formatIconImage}
												src="/icons/files.svg"
												width={33.97}
												height={33.97}
												sizes="100vw"
												alt="Text and structured notes"
											/>
										</div>
									</div>
									<b className={styles.textStructured}>Text &amp; structured notes</b>
								</div>
							</div>
						</div>
						<div className={styles.frameWrapper11}>
							<div className={styles.frameParent15}>
								<div className={styles.frameWrapper10}>
									<div className={styles.frameChild3} />
								</div>
								<div className={styles.frameParent16}>
									<div className={styles.formatIconOuter}>
										<div className={`${styles.formatIconInner} ${styles.formatIconPurple}`}>
											<Image
												className={styles.formatIconImage}
												src="/icons/video.svg"
												width={33.97}
												height={33.97}
												sizes="100vw"
												alt="Interactive video learning"
											/>
										</div>
									</div>
									<b className={styles.interactiveVideoLearning}>Interactive Video Learning<br /></b>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.frameParent19}>
						<div className={styles.frameWrapper9}>
							<div className={styles.frameParent15}>
								<div className={styles.frameWrapper10}>
									<div className={styles.frameChild3} />
								</div>
								<div className={styles.frameParent16}>
									<div className={styles.formatIconOuter}>
										<div className={`${styles.formatIconInner} ${styles.formatIconOrange}`}>
											<Image
												className={styles.formatIconImage}
												src="/icons/image.svg"
												width={33.97}
												height={33.97}
												sizes="100vw"
												alt="Visual learning aids"
											/>
										</div>
									</div>
									<b className={styles.interactiveVideoLearning}>Visual learning aids<br /><br /></b>
								</div>
							</div>
						</div>
						<div className={styles.frameWrapper15}>
							<div className={styles.frameParent15}>
								<div className={styles.frameWrapper10}>
									<div className={styles.frameChild3} />
								</div>
								<div className={styles.frameParent16}>
									<div className={styles.formatIconOuter}>
										<div className={`${styles.formatIconInner} ${styles.formatIconPink}`}>
											<Image
												className={styles.formatIconImage}
												src="/icons/headphone.svg"
												width={33.97}
												height={33.97}
												sizes="100vw"
												alt="Audio-supported content"
											/>
										</div>
									</div>
									<b className={styles.interactiveVideoLearning}>Audio-supported content
									</b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.accessibilityInclusivityInner}>
				<div className={styles.frameParent24}>
					<div className={styles.frameParent25}>
						<div className={styles.frameParent26}>
							<div className={styles.accessibleLearningForDiversWrapper}>
								<b className={styles.learningDesignedFor}>Inclusive Learning Experiences<br /><br /></b>
							</div>
							<div className={styles.designedToMake}>Collaborative tools allow learners to share ideas and contribute meaningfully to learning environments.<br /><br /><br /><br /></div>
						</div>
						<div className={styles.frameParent27}>
							<div className={`${styles.inclusiveItem} ${styles.inclusiveItemPink}`}>
								<Image
									className={styles.inclusiveArrow}
									src="/icons/arrowpink.svg"
									width={32}
									height={32}
									sizes="100vw"
									alt=""
								/>
								<span>Equal participation in discussions</span>
							</div>
							<div className={`${styles.inclusiveItem} ${styles.inclusiveItemBlue}`}>
								<Image
									className={styles.inclusiveArrow}
									src="/icons/arrowblue.svg"
									width={32}
									height={32}
									sizes="100vw"
									alt=""
								/>
								<span>Diverse perspectives and collaboration</span>
							</div>
							<div className={`${styles.inclusiveItem} ${styles.inclusiveItemPurple}`}>
								<Image
									className={styles.inclusiveArrow}
									src="/icons/arrowpurple.svg"
									width={32}
									height={32}
									sizes="100vw"
									alt=""
								/>
								<span>Respectful learning environments</span>
							</div>
						</div>
					</div>
					<div className={styles.learningAnalytics}>
						<Image
								className={styles.teamSupportingInvalidWoman}
								src="/images/Learning.webp"
								width={530}
								height={488}
								sizes="100vw"
								alt="Inclusive Learning"
							/>
					</div>
				</div>
			</div>
			<div className={styles.frameParent28}>
				<div className={styles.frameWrapper17}>
					<div className={styles.frameWrapper18}>
						<div className={styles.frameParent29}>
							<div className={styles.supportingInstitutionsInIncWrapper}>
								<b className={styles.supportingInstitutionsInContainer}>
									<span className={styles.supportingInstitutionsIn}>Supporting Institutions in</span>
									<span className={styles.inclusiveEducation}> Inclusive Education</span>
									<span className={styles.supportingInstitutionsIn}>&nbsp;</span>
								</b>
							</div>
							<div className={styles.enableAccessibleFlexible}>Enable accessible, flexible learning experiences that support diverse learner needs and promote inclusive education for everyone.<br /></div>
						</div>
					</div>
				</div>
				<div className={styles.frameParent30}>
					<div className={`${styles.institutionCard} ${styles.institutionCard1}`}>
						<div className={styles.institutionCardContent}>
							<div className={styles.institutionIconOuter}>
								<div className={`${styles.institutionIconInner} ${styles.institutionIconPink}`}>
									<Image
										className={styles.institutionIconImage}
										src="/icons/globe-round.svg"
										width={33.97}
										height={33.97}
										sizes="100vw"
										alt="Deliver accessible online courses"
									/>
								</div>
							</div>
							<div className={`${styles.institutionCardText} ${styles.institutionTextPink}`}>
								Deliver accessible online courses
							</div>
						</div>
					</div>

					<div className={`${styles.institutionCard} ${styles.institutionCard2}`}>
						<div className={styles.institutionCardContent}>
							<div className={styles.institutionIconOuter}>
								<div className={`${styles.institutionIconInner} ${styles.institutionIconPurple}`}>
									<Image
										className={styles.institutionIconImage}
										src="/icons/accessibility.svg"
										width={33.97}
										height={33.97}
										sizes="100vw"
										alt="Create inclusive learning environments"
									/>
								</div>
							</div>
							<div className={`${styles.institutionCardText} ${styles.institutionTextPurple}`}>
								Create inclusive learning environments
							</div>
						</div>
					</div>

					<div className={`${styles.institutionCard} ${styles.institutionCard3}`}>
						<div className={styles.institutionCardContent}>
							<div className={styles.institutionIconOuter}>
								<div className={`${styles.institutionIconInner} ${styles.institutionIconTeal}`}>
									<Image
										className={styles.institutionIconImage}
										src="/icons/user-group-02-1.svg"
										width={33.97}
										height={33.97}
										sizes="100vw"
										alt="Support learners with diverse abilities"
									/>
								</div>
							</div>
							<div className={`${styles.institutionCardText} ${styles.institutionTextTeal}`}>
								Support learners with diverse abilities
							</div>
						</div>
					</div>

					<div className={`${styles.institutionCard} ${styles.institutionCard4}`}>
						<div className={styles.institutionCardContent}>
							<div className={styles.institutionIconOuter}>
								<div className={`${styles.institutionIconInner} ${styles.institutionIconBlue}`}>
									<Image
										className={styles.institutionIconImage}
										src="/icons/student.svg"
										width={33.97}
										height={33.97}
										sizes="100vw"
										alt="Expand learning opportunities globally"
									/>
								</div>
							</div>
							<div className={`${styles.institutionCardText} ${styles.institutionTextBlue}`}>
								Expand learning opportunities globally
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.frameParent31}>
				<div className={styles.neurolxpBadge}><span className={styles.neurolxpBadgeText}>NeuroLXP<span className={styles.neurolxpTm}>™</span></span></div>
				<div className={styles.empoweringInclusiveLearningParent}>
					<b className={styles.empoweringInclusiveLearning}>Empowering Inclusive Learning</b>
					<div className={styles.neurolxpHelpsInstitutions}>NeuroLXP helps institutions create learning ecosystems where every learner has the opportunity to succeed without barriers.<br /><br /></div>
				</div>
			</div>
		</main>);
};

export default AccessibilityInclusivity;