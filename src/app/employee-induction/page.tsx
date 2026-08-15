import type { NextPage } from "next";
import Image from "next/image";
import "./emp.css";
const EmployeeInduction: NextPage = () => {
  return (
    <main className="employeeInduction">
      <nav className="frameDiv" aria-label="Breadcrumb">
        <div className="resourcesWrapper">
          <div className="useCases">Resources</div>
        </div>
        <div className="homeParent">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <div className="resourcesWrapper">
            <div className="useCases">Use cases</div>
          </div>
        </div>
        <div className="arrowRightDoubleGroup">
          <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />
          <b className="useCases">Employee Induction</b>
        </div>
      </nav>
      <div className="frameParent2">
        <div className="image21Parent">
          <div className="image21" />
          <div className="groupYoungBusinesspeopleUsi" />
          <div className="frameParent3">
            <div className="frameParent4">
              <div className="frameIcon">NeuroLXP Employee Induction</div>
              <b className="transformOnboardingIntoContainer">
                <span className="transformOnboardingInto">{`Transform Onboarding into `}</span>
                <span className="learning">Learning</span>
              </b>
            </div>
            <div className="neurolxpSimplifiesOnboarding">NeuroLXP simplifies onboarding with structured learning from day one.</div>
          </div>
          <div className="businessmenClosingDealWithWrapper">
            <Image className="businessmenClosingDealWithIcon" src="/images/businessmen.webp" width={400} height={441} sizes="100vw" alt="" />
          </div>
        </div>
        <div className="image20" />
      </div>
      <div className="frameParent5">
        <div className="frameParent6">
          <div className="frameWrapper">
            <div className="structuredOnboardingForProdWrapper">
              <b className="structuredOnboardingFor">
                Structured Onboarding for Productive Employees
                <br />
              </b>
            </div>
          </div>
          <div className="neurolxpHelpsOrganizations">NeuroLXP helps organizations turn employee induction into a clear engaging, measurable, and scalable learning journey.</div>
        </div>
        <div className="frameParent7">
          <div className="frameParent8">
            <div className="frameParent9">
              <div className="frameParent10">
                <div className="frameChild2" />
                <div className="frameChild3" />
                <div className="frameParent11">
                  <div className="challenge1Parent">
                    <b className="challenge1">Challenge 1</b>
                    <b className="inconsistentOnboarding">
                      Inconsistent Onboarding
                      <br />
                    </b>
                  </div>
                  <div className="differentTeamsDeliver">Different teams deliver inconsistent induction</div>
                </div>
              </div>
              <div className="frameParent12">
                <div className="frameChild2" />
                <div className="frameChild5" />
                <div className="frameParent13">
                  <div className="challenge1Parent">
                    <b className="challenge1">Challenge 2</b>
                    <b className="informationOverload">Information Overload</b>
                  </div>
                  <div className="newHiresReceive">New hires receive too much information at once</div>
                </div>
              </div>
            </div>
            <div className="frameParent14">
              <div className="frameParent10">
                <div className="frameChild2" />
                <div className="frameChild7" />
                <div className="frameParent13">
                  <div className="challenge1Parent">
                    <b className="challenge1">Challenge 3</b>
                    <b className="informationOverload">Low Engagement</b>
                  </div>
                  <div className="newHiresReceive">Traditional induction can feel passive and lengthy</div>
                </div>
              </div>
              <div className="frameParent17">
                <div className="frameChild2" />
                <div className="frameChild9" />
                <div className="frameParent13">
                  <div className="challenge1Parent">
                    <b className="challenge1">Challenge 4</b>
                    <b className="informationOverload">
                      Progress Tracking
                      <br />
                    </b>
                  </div>
                  <div className="newHiresReceive">Onboarding completion is difficult to monitor</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frameWrapper2">
            <div className="frameParent10">
              <div className="frameChild2" />
              <div className="frameChild11" />
              <div className="frameParent13">
                <div className="challenge1Parent">
                  <b className="challenge1">Challenge 5</b>
                  <b className="informationOverload">Scaling Onboarding</b>
                </div>
                <div className="newHiresReceive">Growing teams make consistent onboarding challenging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="employeeInductionChild" />
      <div className="employeeInductionInner">
        <div className="structuredOnboardingForProdWrapper">
          <b className="structuredOnboardingFor">
            Start Strong! Learn Fast! Succeed Sooner!
            <br />
          </b>
        </div>
      </div>
      <div className="frameParent21">
        <div className="frameParent22">
          <div className="frameParent23">
            <div className="frameChild12">Benefits</div>
            <b className="benefitsOfEmployee">
              Benefits of Employee Induction with NeuroLXP
              <br />
              <br />
            </b>
          </div>
          <div className="organizationsCanAchieve">
            Organizations can achieve several advantages through digital onboarding:
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="frameWrapper3">
          <div className="frameWrapper4">
            <div className="frameWrapper5">
              <div className="frameParent24">
                <div className="frameParent25">
                  <div className="benefitIconCircle">
                    <div className="benefitIconInner">
                      <Image className="benefitIconImage" src="/icons/limitation.svg" width={36} height={36} alt="" />
                    </div>
                  </div>
                  <div className="fasterEmployeeIntegration">Faster Employee Integration</div>
                </div>
                <div className="frameParent25">
                  <div className="benefitIconCircle">
                    <div className="benefitIconInner">
                      <Image className="benefitIconImage" src="/icons/filepink.svg" width={36} height={36} alt="" />
                    </div>
                  </div>
                  <div className="consistentValuesAnd">Consistent Values and Policies</div>
                </div>
                <div className="frameParent25">
                  <div className="benefitIconCircle">
                    <div className="benefitIconInner">
                      <Image className="benefitIconImage" src="/icons/handshake.svg" width={36} height={36} alt="" />
                    </div>
                  </div>
                  <div className="betterOnboardingEngagement">Better Onboarding Engagement</div>
                </div>
                <div className="frameParent25">
                  <div className="benefitIconCircle">
                    <div className="benefitIconInner">
                      <Image className="benefitIconImage" src="/icons/analytics.svg" width={36} height={36} alt="" />
                    </div>
                  </div>
                  <div className="easyProgressTracking">Easy Progress Tracking</div>
                </div>
                <div className="frameParent25">
                  <div className="benefitIconCircle">
                    <div className="benefitIconInner">
                      <Image className="benefitIconImage" src="/icons/setting-green.svg" width={36} height={36} alt="" />
                    </div>
                  </div>
                  <div className="reducedHrWorkload">Reduced HR Workload</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent30">
        <div className="frameParent31">
          <div className="frameChild18">Smarter Employee Onboarding</div>
          <div className="enablingSmarterEmployeeOnboParent">
            <b className="enablingSmarterEmployeeContainer">
              <span className="enablingSmarter">{`Enabling Smarter `}</span>
              <span className="employeeOnboarding">Employee Onboarding</span>
            </b>
            <div className="neurolxpMakesOnboarding">NeuroLXP makes onboarding seamless, engaging, and efficient.</div>
          </div>
        </div>
        <div className="frameWrapper6">
          <a className="frameChild19" href="#book-demo">
            Book a Demo
          </a>
        </div>
      </div>
    </main>
  );
};
export default EmployeeInduction;
