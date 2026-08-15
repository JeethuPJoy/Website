import type { NextPage } from "next";
import Image from "next/image";
import styles from "./inter.module.css";

const Interconnectivity: NextPage = () => {
  return (
    <main className={styles.interconnectivity}>
      <nav className={styles.frameDiv} aria-label="Breadcrumb">
        <div className={styles.featuresWrapper}>
          <div className={styles.addOnModules}>Features</div>
        </div>
        <div className={styles.homeParent}>
          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <div className={styles.featuresWrapper}>
            <div className={styles.addOnModules}>Add-On Modules</div>
          </div>
        </div>
        <div className={styles.arrowRightDoubleGroup}>
          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <b className={styles.addOnModules}>Interconnectivity</b>
        </div>
      </nav>
      <div className={styles.frameParent2}>
        <div className={styles.frameParent3}>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.frameIcon}>Learning Platform Integration</div>
              <b className={styles.seamlessInterconnectivityWit}>Seamless Interconnectivity with NeuroLXP</b>
            </div>
            <div className={styles.connectLearnersEducators}>Connect learners, educators, and ecosystems for unified, connected, and scalable learning.</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.bookADemoWrapper}>
              <b className={styles.bookADemo}>Book a Demo</b>
            </div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.ellipseDiv} />
          <div className={styles.hierarchySquare06Parent}>
            <Image className={styles.hierarchySquare06Icon} src="/icons/hierarchy.svg" width={60} height={60} sizes="100vw" alt="" />
            <div className={styles.neurolxpWrapper}>
              <b className={styles.neurolxp}>
                <span className={styles.neurolxpTxt}>
                  <span className={styles.neurolxp2}>NeuroLXP</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.span2}>{` `}</span>
                </span>
              </b>
            </div>
          </div>
          <Image className={styles.smallHierarchyIcon} src="/icons/icon.svg" width={15} height={10} alt="" aria-hidden="true" />
          <div className={styles.ellipseIcon} aria-hidden="true" />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.frameParent6}>
          <div className={styles.userGroup02Parent}>
            <Image className={styles.userGroup02Icon} src="/icons/userpink.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className={styles.learners}>Learners</b>
          </div>
          <div className={styles.bankParent}>
            <Image className={styles.userGroup02Icon} src="/icons/bankblue.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className={styles.learners}>Educators</b>
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.userGroup02Parent}>
            <Image className={styles.userGroup02Icon} src="/icons/plug.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className={styles.learners}>Systems</b>
          </div>
          <div className={styles.analyticsUpParent}>
            <Image className={styles.userGroup02Icon} src="/icons/analyticsyellow.svg" width={32} height={32} sizes="100vw" alt="" />
            <b className={styles.learners}>Insights</b>
          </div>
        </div>
      </div>
      <div className={styles.interconnectivityChild} />
      <div className={styles.frameParent8}>
        <div className={styles.frameParent9}>
          <div className={styles.coreFeaturesBadge}>
            <span>Core Features</span>
          </div>
          <div className={styles.oneConnectedPlatformForModParent}>
            <b className={styles.oneConnectedPlatform}>
              One connected platform for modern learning ecosystems
              <br />
            </b>
            <div className={styles.connectSystemsContent}>Connect systems, content, tools, and people for seamless, collaborative learning.</div>
          </div>
        </div>
        <div className={styles.frameParent10}>
          <div className={styles.frameWrapper2}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameChild4} />
              <div className={styles.unifiedLearningEcosystemParent}>
                <b className={styles.unifiedLearningEcosystem}>Unified Learning Ecosystem</b>
                <div className={styles.enableSharingAnd}>Connect systems content, and tools</div>
              </div>
              <div className={`${styles.featureIconTop} ${styles.featureIconTopBlue}`}>
                <Image className={styles.featureCardIcon} src="/icons/links.svg" width={40} height={40} alt="Unified learning ecosystem" />
              </div>
              <div className={styles.frameChild6} />
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameChild8} />
              <div className={styles.frameChild4} />
              <div className={styles.collaborativeLearningParent}>
                <b className={styles.unifiedLearningEcosystem}>Collaborative Learning</b>
                <div className={styles.enableSharingAnd}>Enable sharing and peer learning</div>
              </div>
              <div className={`${styles.featureIconTop} ${styles.featureIconTopPink}`}>
                <Image className={styles.featureCardIcon} src="/icons/hand.svg" width={40} height={40} alt="Collaborative learning" />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameChild12} />
              <div className={styles.frameChild4} />
              <div className={styles.systemIntegrationsParent}>
                <b className={styles.unifiedLearningEcosystem}>System Integrations</b>
                <div className={styles.connectLmsHrms}>Connect LMS, HRMS and tools</div>
              </div>
              <div className={`${styles.featureIconTop} ${styles.featureIconTopPurple}`}>
                <Image className={styles.featureCardIcon} src="/icons/reloadcircle.svg" width={40} height={40} alt="System integrations" />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild16} />
            <div className={styles.frameChild4} />
            <div className={styles.systemIntegrationsParent}>
              <b className={styles.unifiedLearningEcosystem}>Centralized Data and Insights</b>
              <div className={styles.enableSharingAnd}>Unify data for smarter decisions</div>
            </div>
            <div className={`${styles.featureIconTop} ${styles.featureIconTopGreen}`}>
              <Image className={styles.featureCardIcon} src="/icons/analytic.svg" width={40} height={40} alt="Centralized data and insights" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent11}>
        <div className={styles.frameWrapper5}>
          <div className={styles.frameParent12}>
            <div className={styles.frameParent13}>
              <div className={styles.whyNeuroLxpBadge}>
                <span className={styles.whyNeuroLxpText}>
                  Why NeuroLXP<sup className={styles.whyNeuroLxpTm}>TM</sup>
                </span>
              </div>
              <b className={styles.breakSilosBuildContainer}>
                <span className={styles.breakSilosBuildContainer2}>
                  <span className={styles.breakSilos}>{`Break Silos! `}</span>
                  <span className={styles.buildConnectedLearning}>Build Connected Learning!</span>
                </span>
              </b>
            </div>
            <div className={styles.connectSystemsContent3}>Connect systems, content, users, and data for smarter learning.</div>
          </div>
        </div>
        <div className={styles.keyBenefitsParent}>
          <b className={styles.keyBenefits}>{`Key Benefits `}</b>
          <div className={styles.frameParent14}>
            <div className={styles.frameParent15}>
              <div className={styles.benefitIconFrame}>
                <div className={`${styles.benefitIconCircle} ${styles.benefitPink}`}>
                  <Image className={styles.benefitIconImage} src="/icons/monitor.svg" width={34} height={34} alt="One platform for learning activities" />
                </div>
              </div>
              <b className={styles.onePlatformFor}>One platform for learning activities</b>
            </div>
            <div className={styles.frameParent15}>
              <div className={styles.benefitIconFrame}>
                <div className={`${styles.benefitIconCircle} ${styles.benefitPurple}`}>
                  <Image className={styles.benefitIconImage} src="/icons/linkround.svg" width={34} height={34} alt="Seamless system integration" />
                </div>
              </div>
              <b className={styles.seamlessSystemIntegration}>Seamless system integration</b>
            </div>
            <div className={styles.frameParent15}>
              <div className={styles.benefitIconFrame}>
                <div className={`${styles.benefitIconCircle} ${styles.benefitBlue}`}>
                  <Image className={styles.benefitIconImage} src="/icons/hand.svg" width={34} height={34} alt="Better collaboration and engagement" />
                </div>
              </div>
              <b className={styles.betterCollaborationAnd}>Better collaboration and engagement</b>
            </div>
            <div className={styles.frameParent15}>
              <div className={styles.benefitIconFrame}>
                <div className={`${styles.benefitIconCircle} ${styles.benefitTeal}`}>
                  <Image className={styles.benefitIconImage} src="/icons/analytic.svg" width={34} height={34} alt="Clearer learning performance insights" />
                </div>
              </div>
              <b className={styles.clearerLearningPerformance}>Clearer learning performance insights</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent19}>
        <div className={styles.frameParent20}>
          <div className={styles.useCasesBadge}>
            <span>Use Cases</span>
          </div>
          <div className={styles.builtForDiverseLearningEnvParent}>
            <b className={styles.builtForDiverse}>Built for Diverse Learning Environments</b>
            <div className={styles.aConnectedPlatform}>A connected platform for institutions, enterprises, skill development and flexible learning.</div>
          </div>
        </div>
        <div className={styles.frameParent21}>
          <div className={styles.frameWrapper6}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild25} />
              <Image className={styles.frameChild26} src="/images/img1-inter.webp" width={300} height={204} sizes="100vw" alt="Universities and Higher Education" />
              <b className={styles.universitiesAndHigher}>Universities and Higher Education</b>
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild25} />
              <Image className={styles.frameChild28} src="/images/img2-inter.webp" width={300} height={204} sizes="100vw" alt="Corporate Training Academies" />
              <b className={styles.universitiesAndHigher}>Corporate Training Academies</b>
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild25} />
              <Image className={styles.frameChild28} src="/images/img3-inter.webp" width={300} height={204} sizes="100vw" alt="Skill Development Centers" />
              <b className={styles.universitiesAndHigher}>Skill Development Centers</b>
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild25} />
              <Image className={styles.frameChild28} src="/images/img4-inter.webp" width={300} height={204} sizes="100vw" alt="Hybrid and Remote Learning" />
              <b className={styles.universitiesAndHigher}>{`Hybrid & Remote Learning`}</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent22}>
        <div className={styles.frameParent23}>
          <div className={styles.howItWorksBadge}>
            <span className={styles.howItWorksBadgeText}>How It Works</span>
          </div>
          <div className={styles.connectYourEcosystemInFourParent}>
            <b className={styles.builtForDiverse}>Connect Your Ecosystem in Four Steps</b>
            <div className={styles.connectSystemsPeople}>Connect systems, people, and tools in four simple steps.</div>
          </div>
        </div>
        <div className={styles.frameParent24}>
          <div className={styles.frameParent25}>
            <div className={styles.frameWrapper10}>
              <div className={styles.frameParent26}>
                <div className={styles.image20Parent}>
                  <div className={styles.image20} />
                  <div className={styles.frameChild34} />
                  <div className={styles.integrateExistingSystemsAndWrapper}>
                    <b className={styles.integrateExistingSystems}>Integrate existing systems and tools</b>
                  </div>
                </div>
                <div className={styles.frameParent27}>
                  <div className={styles.image20Wrapper}>
                    <div className={styles.image202} />
                  </div>
                  <div className={styles.div}>1</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper11}>
              <div className={styles.frameParent26}>
                <div className={styles.image20Parent}>
                  <div className={styles.image20} />
                  <div className={styles.frameChild34} />
                  <div className={styles.connectLearnersAndEducatorsWrapper}>
                    <b className={styles.connectLearnersAnd}>
                      Connect Learners and Educators
                      <br />
                    </b>
                  </div>
                </div>
                <div className={styles.frameParent27}>
                  <div className={styles.image20Wrapper}>
                    <div className={styles.image202} />
                  </div>
                  <div className={styles.div2}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent30}>
            <div className={styles.frameWrapper10}>
              <div className={styles.frameParent26}>
                <div className={styles.image20Parent}>
                  <div className={styles.image20} />
                  <div className={styles.frameChild34} />
                  <div className={styles.connectLearnersAndEducatorsWrapper}>
                    <b className={styles.enableCollaborativeLearning}>Enable collaborative learning</b>
                  </div>
                </div>
                <div className={styles.frameParent32}>
                  <div className={styles.image20Wrapper}>
                    <div className={styles.image202} />
                  </div>
                  <div className={styles.div2}>3</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper13}>
              <div className={styles.frameParent26}>
                <div className={styles.image20Parent}>
                  <div className={styles.image20} />
                  <div className={styles.frameChild34} />
                  <div className={styles.connectLearnersAndEducatorsWrapper}>
                    <b className={styles.integrateExistingSystems}>Track performance with unified analytics</b>
                  </div>
                </div>
                <div className={styles.frameParent34}>
                  <div className={styles.image20Wrapper}>
                    <div className={styles.image202} />
                  </div>
                  <div className={styles.div4}>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.connectedLearningEcosystemParent}>
        <b className={styles.connectedLearningEcosystem}>Connected Learning Ecosystem</b>
        <div className={styles.frameParent35}>
          <div className={styles.frameParent36}>
            <div className={styles.frameWrapper14}>
              <div className={styles.frameParent37}>
                <div className={styles.ecosystemIconFrame}>
                  <div className={`${styles.ecosystemIconCircle} ${styles.ecosystemIconPink}`}>
                    <Image className={styles.ecosystemIconImage} src="/icons/student.svg" width={34} height={34} alt="Academic Learning" />
                  </div>
                </div>
                <b className={styles.academicLearning}>Academic Learning</b>
              </div>
            </div>
            <div className={styles.frameWrapper14}>
              <div className={styles.frameParent37}>
                <div className={styles.ecosystemIconFrame}>
                  <div className={`${styles.ecosystemIconCircle} ${styles.ecosystemIconBlue}`}>
                    <Image className={styles.ecosystemIconImage} src="/icons/building-white.svg" width={34} height={34} alt="Training Ecosystems" />
                  </div>
                </div>
                <b className={styles.trainingEcosystems}>Training Ecosystems</b>
              </div>
            </div>
            <div className={styles.frameWrapper14}>
              <div className={styles.frameParent37}>
                <div className={styles.ecosystemIconFrame}>
                  <div className={`${styles.ecosystemIconCircle} ${styles.ecosystemIconTeal}`}>
                    <Image className={styles.ecosystemIconImage} src="/icons/linkround.svg" width={34} height={34} alt="LMS Integration" />
                  </div>
                </div>
                <b className={styles.lmsIntegration}>LMS Integration</b>
              </div>
            </div>
          </div>
          <div className={styles.frameParent40}>
            <div className={styles.frameWrapper14}>
              <div className={styles.frameParent37}>
                <div className={styles.ecosystemIconFrame}>
                  <div className={`${styles.ecosystemIconCircle} ${styles.ecosystemIconOrange}`}>
                    <Image className={styles.ecosystemIconImage} src="/icons/hand.svg" width={34} height={34} alt="Collaborative Learning" />
                  </div>
                </div>
                <b className={styles.collaborativeLearning2}>Collaborative Learning</b>
              </div>
            </div>
            <div className={styles.frameWrapper14}>
              <div className={styles.frameParent37}>
                <div className={styles.ecosystemIconFrame}>
                  <div className={`${styles.ecosystemIconCircle} ${styles.ecosystemIconMaroon}`}>
                    <Image className={styles.ecosystemIconImage} src="/icons/monitor.svg" width={34} height={34} alt="Digital Learning" />
                  </div>
                </div>
                <b className={styles.lmsIntegration}>Digital Learning</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseGroup}>
        <Image className={styles.frameChild43} src="/images/bg-inter.webp" width={1286} height={540} sizes="100vw" alt="" />
        <div className={styles.ellipseContainer}>
          <div className={styles.frameChild44} />
          <div className={styles.frameParent43}>
            <div className={styles.readyToConnectYourLearningParent}>
              <b className={styles.readyToConnectContainer}>
                <span className={styles.breakSilos}>{`Ready To Connect Your `}</span>
                <span className={styles.learningBlue}>Learning Ecosystem</span>
              </b>
              <div className={styles.connectYourEcosystem2}>Connect your ecosystem with NeuroLXP for collaborative data-driven learning.</div>
            </div>
            <a href="/contact" className={styles.bookDemoBtn}>
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Interconnectivity;
