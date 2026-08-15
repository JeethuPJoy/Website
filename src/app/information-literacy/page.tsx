import type { NextPage } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";
import BookDemoTrigger from "@/components/Bookademo/BookDemoTrigger";
import "./information-literacy.css";

type ThinkingCardData = {
  id: string;
  title: ReactNode;
  description: string;
  accent: string;
};

const THINKING_CARDS: ThinkingCardData[] = [
  {
    id: "source-credibility",
    title: "Source Credibility",
    description: "Identify trustworthy sources across digital platforms",
    accent: "#67096E",
  },
  {
    id: "bias-detection",
    title: "Bias Detection",
    description: "Recognise perspective and intent behind information",
    accent: "#0B9BA0",
  },
  {
    id: "evidence-based-thinking",
    title: (
      <>
        Evidence
        <br />
        Based Thinking
      </>
    ),
    description: "Distinguish evidence based claims from subjective views",
    accent: "#BF1869",
  },
  {
    id: "digital-verification",
    title: "Digital Verification",
    description: "Use tools and techniques to validate online content",
    accent: "#2D4CC8",
  },
];

type JourneyStage = {
  id: string;
  number: number;
  title: ReactNode;
  description: string;
  color: string;
};

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "identify",
    number: 1,
    title: "Identify",
    description: "Identify the information you need",
    color: "#BF1869",
  },
  {
    id: "evaluate",
    number: 2,
    title: "Evaluate",
    description: "Assess source credibility and relevance",
    color: "#67096E",
  },
  {
    id: "synthesise",
    number: 3,
    title: "Synthesise",
    description: "Connect ideas into meaningful insights",
    color: "#907507",
  },
  {
    id: "apply",
    number: 4,
    title: "Apply",
    description: "Apply knowledge with integrity",
    color: "#2A7308",
  },
];

const ThinkingCard = ({ card, index }: { card: ThinkingCardData; index: number }) => {
  return (
    <div className="thinkingCard">
      <div className="thinkingCardSvg">
        <div className="thinkingCardInner">
          <div className={`thinkingCardTitle ${card.id === "evidence-based-thinking" ? "evidenceBasedTitle" : ""}`}>{card.title}</div>
          <div className="thinkingCardDesc">{card.description}</div>
          <span className="thinkingCardTriangle" style={{ ["--triangle-color" as string]: card.accent }} />
        </div>
      </div>
    </div>
  );
};

const SkillCircle = ({ value, label, color }: { value: string; label: string; color: string }) => {
  const progress = parseInt(value.replace("%", ""), 10);

  return (
    <div
      className="skillCircle"
      style={{
        ["--circle-color" as string]: color,
        ["--progress" as string]: progress,
      }}>
      <div className="skillCircleGraphic">
        <div className="skillCircleProgress"></div>

        <div className="skillCircleInner">
          <div className="skillCircleValue">{value}</div>
        </div>
      </div>

      <div className="skillCircleLabel">{label}</div>
    </div>
  );
};

const InformationLiteracy: NextPage = () => {
  return (
    <div className="informationLiteracy">
      <div className="image20Parent">
        <div className="image20">
          <Image src="/images/bg2.webp" fill sizes="100vw" alt="" className="researchBackgroundImage" />
        </div>

        <div className="frameParent">
          <div className="frameGroup">
            <div className="frameContainer">
              <div className="researchDiscoveryBadge">Research &amp; Discovery</div>

              <b className="researchSmarterLearn">
                Research Smarter
                <br />
                Learn Better
              </b>
            </div>

            <div className="buildResearchSkills">Build research skills that transform information into meaningful, actionable insights.</div>
          </div>

          <div className="frameDiv">
            <div className="frameWrapper">
              <div className="frameParent2">
                <div className="academicResearchWrapper">
                  <b className="academicResearch">Academic Research</b>
                </div>

                <div className="frameParent3">
                  <div className="frameItem" />
                  <div className="discoverTrustedAcademic">Discover trusted academic sources with confidence</div>
                </div>
              </div>
            </div>

            <div className="frameParent4">
              <div className="frameWrapper2">
                <div className="digitalLibrariesParent">
                  <b className="academicResearch">Digital Libraries</b>
                  <div className="accessCredibleResearchAcrosWrapper">
                    <div className="accessCredibleResearch">Access credible research across diverse disciplines</div>
                  </div>
                </div>
              </div>

              <div className="frameWrapper2">
                <div className="digitalLibrariesParent">
                  <b className="academicResearch">Synthesis Skills</b>
                  <div className="turnResearchIntoClearActiWrapper">
                    <div className="turnResearchInto">Turn research into clear, actionable insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="informationLiteracyChild" width="1440" height="637" viewBox="0 0 1440 637" fill="none" aria-hidden="true">
        <defs>
          <filter id="heroExactInnerShadow" x="-173.223" y="-236" width="1787.45" height="880.94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="8" dy="8" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
            <feOffset dx="-8" dy="-8" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
          </filter>

          <clipPath id="heroShapeClip">
            <path d="M720.5 -228L1430.79 -56.6879L1606.22 328.247L1114.68 636.941H326.317L-165.222 328.247L10.2061 -56.6879L720.5 -228Z" />
          </clipPath>
        </defs>

        <g filter="url(#heroExactInnerShadow)">
          <path d="M720.5 -228L1430.79 -56.6879L1606.22 328.247L1114.68 636.941H326.317L-165.222 328.247L10.2061 -56.6879L720.5 -228Z" fill="#DFE6E9" />

          <image href="/images/bg1.webp" x="-166" y="-228" width="1772" height="865" preserveAspectRatio="xMidYMid slice" opacity="0.1" clipPath="url(#heroShapeClip)" />
        </g>
      </svg>

      <div className="frameParent8">
        <div className="neurolxp21Wrapper">
          <div className="neurolxp212">NeuroLXP 2.1</div>
        </div>
        <div className="arrowRightDoubleParent">
          <svg className="breadcrumbDoubleArrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8.33398 12C8.33398 12 12.334 9.05407 12.334 8C12.334 6.94587 8.33398 4 8.33398 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.66605 12C3.66605 12 7.66602 9.05407 7.66602 8C7.66602 6.94587 3.66602 4 3.66602 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <b className="neurolxp212">Information Literacy</b>
        </div>
      </div>

      <div className="frameParent9">
        <div className="frameWrapper4">
          <div className="frameParent10">
            <div className="frameParent11">
              <div className="informationLiteracyBadge">Information Literacy</div>
              <b className="findEvaluate">{`Find, Evaluate & Use Knowledge Responsibly`}</b>
            </div>
            <div className="neurolxpEquipsLearners">
              NeuroLXP equips learners to cut through digital noise identifying credible sources, thinking critically, and acting on information with confidence.
              <br />
            </div>
          </div>
        </div>
        <div className="frameParent12">
          <BookDemoTrigger className="requestDemoWrapper">
            <div className="requestDemo">Request Demo</div>
          </BookDemoTrigger>
          <div className="frameWrapper5">
            <div className="startLearningWrapper">
              <div className="startLearning">Start Learning</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frameParent13">
        <svg className="statsPanelShape" width="1424" height="279" viewBox="0 0 1424 279" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="statsOuterInnerShadow" x="68" y="-4" width="1288" height="287" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />
            </filter>

            <filter id="statsInnerRaised" x="75" y="6" width="1274" height="266" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix2" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha3" />
              <feOffset dx="10" dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha3" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0.72 0" />
              <feBlend mode="normal" in2="BackgroundImageFix2" result="effect1DropShadow" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha4" />
              <feOffset dx="-10" dy="-10" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha4" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0" />
              <feBlend mode="normal" in2="effect1DropShadow" result="effect2DropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2DropShadow" result="shape2" />
            </filter>
          </defs>

          <g filter="url(#statsOuterInnerShadow)">
            <path d="M712 4 C720 4 728 5 736 6 L1328 70 C1344 72 1352 82 1352 96 V184 C1352 200 1344 208 1328 210 L736 274 C728 275 720 275 712 275 C704 275 696 275 688 274 L96 210 C80 208 72 200 72 184 V96 C72 82 80 72 96 70 L688 6 C696 5 704 4 712 4Z" fill="#DFE6E9" />
          </g>

          <g filter="url(#statsInnerRaised)">
            <path d="M712 32 C720 32 728 33 736 34 L1310 86 C1320 87 1328 94 1328 104 V174 C1328 184 1320 191 1310 192 L736 244 C728 245 720 246 712 246 C704 246 696 245 688 244 L114 192 C104 191 96 184 96 174 V104 C96 94 104 87 114 86 L688 34 C696 33 704 32 712 32Z" fill="#DFE6E9" />
          </g>
        </svg>

        <div className="statsContent">
          <div className="croreParent">
            <b className="crore statsGreen">4 Crore</b>
            <div className="skillDomains">Skill Domains</div>
          </div>

          <div className="statsDivider" />

          <div className="parent">
            <b className="crore statsBlue">100%</b>
            <div className="skillDomains">Digital Ready</div>
          </div>

          <div className="statsDivider" />

          <div className="group">
            <b className="crore statsPink">24/7</b>
            <div className="skillDomains">Learning Access</div>
          </div>
        </div>
      </div>
      <div className="frameParent19">
        <div className="frameParent20">
          <div className="trackOutcomesBadge">Track Learning Outcomes</div>
          <div className="buildConfidenceThroughCritiParent">
            <b className="buildConfidenceThroughContainer">
              <span className="buildConfidenceThrough">{`Build Confidence Through `}</span>
              <span className="criticalThinking">Critical Thinking</span>
            </b>
            <div className="empowerLearnersTo">Empower learners to think critically, verify information, and navigate the digital world with confidence.</div>
          </div>
        </div>
        <div className="frameParent21">
          {THINKING_CARDS.map((card, index) => (
            <ThinkingCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
      <div className="frameParent22">
        <div className="frameParent23">
          <div className="frameParent24">
            <div className="frameParent25">
              <div className="frameChild15" />
              <b className="b5">1</b>
            </div>
            <div className="citationExcellenceParent">
              <b className="citationExcellence">
                Citation Excellence
                <br />
              </b>
              <div className="citeSourcesAccuratelyContainer">
                <span className="citeSourcesAccurately">
                  Cite sources accurately and consistently
                  <br />
                </span>
                <span className="blankLine">&nbsp;</span>
              </div>
            </div>
          </div>
          <div className="frameParent26">
            <div className="frameParent27">
              <div className="frameParent28">
                <div className="frameChild16" />
                <b className="b5">2</b>
              </div>
              <div className="academicIntegrityParent">
                <b className="citationExcellence">
                  Academic Integrity
                  <br />
                </b>
                <div className="createOriginalPlagiarismContainer">
                  <span className="citeSourcesAccurately">
                    Create original, plagiarism free work
                    <br />
                  </span>
                  <span className="blankLine">&nbsp;</span>
                </div>
              </div>
            </div>
            <div className="frameParent29">
              <div className="frameParent25">
                <div className="frameChild17" />
                <b className="b5">3</b>
              </div>
              <div className="intellectualPropertyParent">
                <b className="citationExcellence">
                  Intellectual Property
                  <br />
                </b>
                <div className="citeSourcesAccuratelyContainer">
                  <span className="citeSourcesAccurately">
                    Respect copyright and intellectual property
                    <br />
                  </span>
                  <span className="blankLine">&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent30">
            <div className="frameParent31">
              <div className="frameChild18" />
              <b className="b5">4</b>
            </div>
            <div className="ethicalKnowledgeParent">
              <b className="citationExcellence">
                Ethical Knowledge
                <br />
              </b>
              <div className="citeSourcesAccuratelyContainer">
                <span className="citeSourcesAccurately">
                  Use and share information responsibly
                  <br />
                </span>
                <span className="blankLine">&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="vectorParent">
          <svg className="integrityHexagonSvg" width="662" height="541" viewBox="0 0 662 541" fill="none" aria-hidden="true">
            <g filter="url(#integrityExactInnerShadow)">
              <path d="M324.929 1.19694C328.819 -0.398519 333.181 -0.398513 337.071 1.19695L652.071 130.385C658.077 132.848 662 138.697 662 145.188V395.226C662 401.717 658.077 407.566 652.071 410.029L337.071 539.217C333.181 540.813 328.819 540.813 324.929 539.217L9.92881 410.029C3.92253 407.566 0 401.717 0 395.226V145.188C0 138.697 3.92254 132.848 9.92882 130.385L324.929 1.19694Z" fill="#DFE6E9" />
            </g>
            <defs>
              <filter id="integrityExactInnerShadow" x="-4" y="-4" width="670" height="548.414" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />
                <feOffset dx="-4" dy="-4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
            </defs>
          </svg>

          <div className="integrityContent">
            <div className="ethicsIntegrityBadge">Ethics &amp; Integrity</div>

            <h2 className="integrityTitle">
              Research with <span>Integrity</span>
              <br />
              Cite with Confidence
            </h2>

            <p className="integrityDescription">Build ethical research habits by citing accurately, respecting intellectual property and creating original, trustworthy work.</p>
          </div>
        </div>
      </div>
      <div className="frameParent34">
        <div className="frameParent20">
          <div className="frameChild21">Learning Journey</div>
          <div className="buildConfidenceThroughCritiParent">
            <b className="masterInformationUnlockContainer">
              <span className="buildConfidenceThrough">{`Master Information! `}</span>
              <span className="criticalThinking">Unlock Knowledge</span>
            </b>
            <div className="empowerLearnersTo">From awareness to mastery in four simple stages.</div>
          </div>
        </div>
        <div className="frameParent36">
          <div className="journeyTimeline">
            <div className="journeyTrack" aria-hidden="true" />

            {JOURNEY_STAGES.map((stage) => (
              <div className="journeyStage" key={stage.id} style={{ "--stage-color": stage.color } as React.CSSProperties}>
                <div className="journeyCircle">
                  <span>{stage.number}</span>
                </div>

                <div className="journeyCard">
                  <span className="journeyCorner" aria-hidden="true" />
                  <h3 className="journeyCardTitle">{stage.title}</h3>
                  <p className="journeyCardDescription">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rectangle2" />
      <div className="image203" />
      <div className="informationLiteracyInner" />
      <div className="informationLiteracyInner2">
        <div className="frameWrapper8">
          <div className="frameWrapper9">
            <div className="frameChild31" />
          </div>
        </div>
      </div>
      <div className="frameParent40">
        <div className="builtForTheWayLearnersActParent">
          <div className="learnersThinkBadge">Why NeuroLXP</div>
          <b className="builtForTheContainer">Built for the way learners actually think</b>
          <div className="empowerLearnersTo">NeuroLXP transforms information literacy into practical skills through structured learning and real-world application.</div>
        </div>
      </div>
      <div className="frameParent41">
        <div className="skillCircleRow">
          <SkillCircle value="92%" label="Source Accuracy" color="#2A7308" />
          <SkillCircle value="84%" label="Critical Thinking" color="#2D4CC8" />
          <SkillCircle value="84%" label="Ethical Usage" color="#C05512" />
        </div>
        <div className="frameParent47">
          <div className="frameChild35" />
          <Image className="creativeExcitedBrunetteBusiIcon" src="/images/image6.webp" width={678} height={721} sizes="100vw" alt="" />
        </div>
      </div>
      <TalkToExpertButton />
    </div>
  );
};

export default InformationLiteracy;
