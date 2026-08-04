import Image from "next/image";
import "./FinancialLitracy.css";
import PageScaler from "./PageScaler";

function SectionBadge({ label, className }: { label: string; className?: string }) {
  return <div className={`sectionBadge ${className ?? ""}`.trim()}>{label}</div>;
}

function TickRow({ label, color, tick, stretch = false }: { label: string; color: string; tick: string; stretch?: boolean }) {
  return (
    <div className={stretch ? "frameParent21" : "frameParent19"}>
      <div className={"tickWrap"} style={{ ["--tick-color" as string]: color }}>
        <span className={"tickBg"} aria-hidden />
        <Image className={"tick03Icon"} src={tick} width={24} height={24} alt="" />
      </div>
      <div className={stretch ? "assessRisksBefore" : "understandCreditLoans"}>{label}</div>
    </div>
  );
}

function HabitCard({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <div className={"image20Parent"}>
      <div className={wide ? "image21Container" : "image21Parent"}>
        <div className={wide ? "checkmarkBadge03Container" : "checkmarkBadge03Parent"}>
          <Image className={wide ? "checkmarkBadge03Icon3" : "checkmarkBadge03Icon"} src="/icons/checkmark-badge.svg" width={38} height={38} alt="" />
          <div className={wide ? "smartFinancialPlan" : "saveConsistently"}>{label}</div>
        </div>
      </div>
    </div>
  );
}

function StageIcon({ src, tone }: { src: string; tone: "pink" | "blue" | "purple" | "teal" }) {
  const toneClass = {
    pink: "stageIconInnerPink",
    blue: "stageIconInnerBlue",
    purple: "stageIconInnerPurple",
    teal: "stageIconInnerTeal",
  }[tone];

  return (
    <div className={"stageIcon"}>
      <div className={`stageIconInner ${toneClass}`}>
        <Image className={"stageGlyph"} src={src} width={38} height={38} alt="" />
      </div>
    </div>
  );
}

export default function FinancialLiteracyPage() {
  return (
    <PageScaler>
      <div className={"wrapperEllipse359"} aria-hidden="true" />

      <div className={"frameDiv"}>
        <div className={"neurolxp21Wrapper"}>
          <div className={"financialLiteracy"}>NeuroLXP 2.1</div>
        </div>
        <div className={"arrowRightDoubleParent"}>
          <Image className={"arrowDown01Icon"} src="/icons/arrow-right-double.svg" width={16} height={16} alt="" />
          <b className={"financialLiteracy"}>Financial Literacy</b>
        </div>
      </div>

      <div className={"frameParent2"}>
        <div className={"frameParent3"}>
          <div className={"frameParent4"}>
            <SectionBadge label="Financial Literacy" className={"frameItem"} />
            <b className={"empoweringSmarterMoneyContainer"}>
              <span className={"empoweringSmarter"}>Empowering Smarter </span>
              <span className={"money"}>Money</span>
              <span className={"empoweringSmarter"}> Decisions</span>
            </b>
          </div>
          <div className={"buildConfidenceToContainer"}>
            <span className={"buildConfidenceTo"}>Build confidence to budget, save, invest and make smarter financial decisions.</span>
            <b className={"buildConfidenceTo"}>NeuroLXP delivers engaging financial literacy.</b>
          </div>
        </div>
        <div className={"heroOuterCircle"}>
          <div className={"heroInnerCircle"}>
            <Image className={"ellipseIcon"} src="/images/Ellipse 357.png" width={560} height={560} sizes="560px" alt="Confident professional" priority />
          </div>
        </div>
      </div>

      <div className={"frameParent5"}>
        <div className={"frameParent6"}>
          <SectionBadge label="Financial Foundations" className={"frameIcon"} />
          <div className={"buildTheConfidenceToManageParent"}>
            <b className={"buildTheConfidenceContainer"}>
              <span className={"empoweringSmarter"}>
                <span className={"build"}>Build </span>
                <span className={"the"}>the</span>
                <span className={"build"}> confidence </span>
                <span className={"the"}>to</span>
                <span className={"build"}> manage </span>
              </span>
              <span className={"build"}>
                <span className={"money"}>Money</span>
                <span className={"empoweringSmarter"}> wisely</span>
              </span>
            </b>
            <div className={"developPracticalFinancial"}>Develop practical financial skills for everyday decisions and long-term success.</div>
          </div>
        </div>
        <div className={"frameParent7"}>
          <div className={"frameParent8"}>
            <div className={"frameParent9"}>
              {/* <div className={'wrapper'}>
                <b className={'b'}>01</b>
              </div> */}
              {/* <Image
                className={'rectangleIcon'}
                src="/images/rectangle-panel.svg"
                width={552}
                height={146}
                sizes="552px"
                alt=""
              /> */}
              {/* <div className={'rectangleIcon'} aria-hidden="true" width={552}
                height={146}
                sizes="552px" />
              <div className={'smartBudgetingParent'}>
                <b className={'smartBudgeting'}>Smart Budgeting</b>
                <div className={'planIncomeAnd'}>Plan income and expenses</div>
              </div> */}

              <div className={"wrapper"}>
                <b className={"b"}>01</b>
              </div>
              <div className={"rectangleIcon"} aria-hidden="true" />
              <div className={"smartBudgetingParent"}>
                <b className={"smartBudgeting"}>Smart Budgeting</b>
                <div className={"planIncomeAnd"}>Plan income and expenses</div>
              </div>
            </div>
            <div className={"frameParent9"}>
              {/* <div className={'container'}>
                <b className={'b'}>03</b>
              </div>
              <Image
                className={'rectangleIconAlt'}
                src="/images/rectangle-panel.svg"
                width={552}
                height={146}
                sizes="552px"
                alt=""
              />
              <div className={'creditManagementParent'}>
                <b className={'smartBudgeting'}>Credit Management</b>
                <div className={'borrowResponsibly'}>Borrow responsibly</div>
              </div> */}

              <div className={"container"}>
                <b className={"b"}>03</b>
              </div>
              <div className={"rectangleIconAlt"} aria-hidden="true" />
              <div className={"creditManagementParent"}>
                <b className={"smartBudgeting"}>Credit Management</b>
                <div className={"borrowResponsibly"}>Borrow responsibly</div>
              </div>
            </div>
          </div>
          <div className={"frameParent11"}>
            <div className={"frameParent9"}>
              {/* <div className={'frame'}>
                <b className={'b'}>02</b>
              </div>
              <Image
                className={'rectangleIcon'}
                src="/images/rectangle-panel.svg"
                width={552}
                height={146}
                sizes="552px"
                alt=""
              />
              <div className={'savingEssentialsParent'}>
                <b className={'smartBudgeting'}>Saving Essentials</b>
                <div className={'growSavingsAnd'}>Grow savings and investments</div>
              </div> */}

              <div className={"frame"}>
                <b className={"b"}>02</b>
              </div>
              <div className={"rectangleIcon"} aria-hidden="true" />
              <div className={"savingEssentialsParent"}>
                <b className={"smartBudgeting"}>Saving Essentials</b>
                <div className={"growSavingsAnd"}>Grow savings and investments</div>
              </div>
            </div>
            <div className={"frameParent9"}>
              {/* <div className={'wrapper2'}>
                <b className={'b4'}>04</b>
              </div>
              <Image
                className={'rectangleIcon'}
                src="/images/rectangle-panel.svg"
                width={552}
                height={146}
                sizes="552px"
                alt=""
              />
              <div className={'smartBudgetingParent'}>
                <b className={'smartBudgeting'}>Future Planning</b>
                <div className={'achieveFinancialGoals'}>Achieve financial goals</div>
              </div> */}

              <div className={"wrapper2"}>
                <b className={"b4"}>04</b>
              </div>
              <div className={"rectangleIcon"} aria-hidden="true" />
              <div className={"smartBudgetingParent"}>
                <b className={"smartBudgeting"}>Future Planning</b>
                <div className={"achieveFinancialGoals"}>Achieve financial goals</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"frameParent14"}>
        <div className={"frameParent15"}>
          <div className={"frameParent16"}>
            <div className={"frameParent17"}>
              <SectionBadge label="Smart Decisions" className={"frameChild5"} />
              <b className={"makeConfidentFinancialContainer"}>
                <span className={"makeConfidentFinancialContainer2"}>
                  <span className={"empoweringSmarter"}>Make confident </span>
                  <span className={"money"}>financial</span>
                  <span className={"empoweringSmarter"}> choices every day</span>
                </span>
              </b>
            </div>
            <div className={"buildTheSkills"}>Build the skills to compare options, manage risks, and make informed money decisions.</div>
          </div>
          <div className={"frameParent18"}>
            <TickRow label="Understand credit, loans, and interest" color="#67096E" tick="/icons/tick-03-3.svg" />
            <TickRow label="Compare Financial Products" color="#2A7308" tick="/icons/tick-03-2.svg" />
            <TickRow label="Assess risks before making decisions" color="#0B9BA0" tick="/icons/tick-03.svg" stretch />
            <TickRow label="Spend wisely, save for tomorrow" color="#861109" tick="/icons/tick.svg" stretch />
          </div>
        </div>
        <div className={"ellipseParent"}>
          <div className={"frameChild10"} aria-hidden />
          <div className={"ellipseDiv"} aria-hidden />
          <div className={"theseSkillsBuildConfidenceParent"}>
            <b className={"theseSkillsBuildContainer"}>
              <span className={"empoweringSmarter"}>These Skills Build confidence for a stronger </span>
              <span className={"money"}>Financial future</span>
            </b>
          </div>
        </div>
      </div>

      <div className={"frameParent23"}>
        <div className={"buildTheConfidenceToManageParent"}>
          <SectionBadge label="Smart finance" className={"frameChild11"} />
          <div className={"buildResponsibleFinancialHaParent"}>
            <b className={"buildResponsibleFinancial"}>Build Responsible Financial Habits</b>
            <div className={"buildTheSkills"}>Financial literacy helps learners build responsible money habits for long-term financial well-being Learn to:</div>
          </div>
        </div>
        <div className={"frameParent25"}>
          <div className={"frameParent26"}>
            <HabitCard label="Save consistently" />
            <HabitCard label="Borrow Wisely" />
          </div>
          <div className={"frameParent27"}>
            <HabitCard label="Smart Financial Plan" wide />
            <HabitCard label="Spend Wisely" />
          </div>
        </div>
      </div>

      <div className={"frameParent28"}>
        <SectionBadge label="Who We Support" className={"frameChild12"} />
        <div className={"frameParent29"}>
          <div className={"frameParent16"}>
            <div className={"financialLiteracyForEverySWrapper"}>
              <b className={"financialLiteracyForContainer"}>
                <span className={"makeConfidentFinancialContainer2"}>
                  <span className={"empoweringSmarter"}>Financial Literacy</span>
                  <span className={"forEveryStage"}> for Every Stage of Life</span>
                </span>
              </b>
            </div>
            <div className={"buildTheSkills"}>Empowering individuals with practical money skills at every stage of life.</div>
          </div>
          <div className={"frameParent31"}>
            <div className={"frameParent32"}>
              <StageIcon src="/icons/school.svg" tone="pink" />
              <div className={"frameWrapper"}>
                <div className={"schoolsParent"}>
                  <b className={"schools"}>Schools</b>
                  <div className={"buildMoneyHabits"}>Build Money Habits</div>
                </div>
              </div>
            </div>
            <div className={"frameParent32"}>
              <div className={"frameWrapper"}>
                <div className={"universitiesParent"}>
                  <b className={"universities"}>Universities</b>
                  <div className={"buildMoneyHabits"}>Financial Readiness</div>
                </div>
              </div>
              <StageIcon src="/icons/graduation-cap.svg" tone="blue" />
            </div>
            <div className={"frameParent32"}>
              <StageIcon src="/icons/briefcase.svg" tone="purple" />
              <div className={"frameWrapper"}>
                <div className={"workforceParent"}>
                  <b className={"workforce"}>Workforce</b>
                  <div className={"buildMoneyHabits"}>Workplace Wellness</div>
                </div>
              </div>
            </div>
            <div className={"frameParent32"}>
              <div className={"frameWrapper"}>
                <div className={"universitiesParent"}>
                  <b className={"communities"}>Communities</b>
                  <div className={"buildMoneyHabits"}>Financial Inclusion</div>
                </div>
              </div>
              <StageIcon src="/icons/global.svg" tone="teal" />
            </div>
          </div>
        </div>
      </div>

      <div className={"image20Parent3"}>
        <div className={"image20"} />
        <svg className={"ctaBorderFrame"} viewBox="0 0 1232 361" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="ctaBorderGradient" x1="616" y1="0" x2="616" y2="361" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#BF1869" />
              <stop offset="50%" stopColor="#2D4CC8" />
              <stop offset="100%" stopColor="#046F73" />
            </linearGradient>
          </defs>
          <path className={"ctaBorderPath"} d="M9.25 1.25H1031.75A200 200 0 0 1 1230.75 201.25V352.75A8 8 0 0 1 1222.75 359.75H200.25A200 200 0 0 1 1.25 159.75V9.25A8 8 0 0 1 9.25 1.25Z" stroke="url(#ctaBorderGradient)" strokeWidth="2.5" strokeDasharray="8 8" vectorEffect="non-scaling-stroke" />
        </svg>
        <svg className={"ctaBorderFrameMobile"} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="ctaBorderGradientMobile" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#BF1869" />
              <stop offset="50%" stopColor="#2D4CC8" />
              <stop offset="100%" stopColor="#046F73" />
            </linearGradient>
          </defs>
          <path className={"ctaBorderPath"} d="M5 2.5H78A19.5 19.5 0 0 1 97.5 22V95A2.5 2.5 0 0 1 95 97.5H22A19.5 19.5 0 0 1 2.5 78V5A2.5 2.5 0 0 1 5 2.5Z" stroke="url(#ctaBorderGradientMobile)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className={"frameParent36"}>
          <SectionBadge label="NeuroLXP" className={"frameChild18"} />
          <div className={"financialConfidenceStartsHeParent"}>
            <b className={"financialConfidenceStarts"}>Financial Confidence Starts Here</b>
            <div className={"neurolxpEmpowersLearners"}>NeuroLXP empowers learners with practical financial skills for smarter decisions and lasting financial well-being.</div>
          </div>
        </div>
      </div>
    </PageScaler>
  );
}
