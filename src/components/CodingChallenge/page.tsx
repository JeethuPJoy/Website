import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import './CodingChallenge.css';
import InterviewSection from './InterviewSection';
import PageScaler from './PageScaler';

export const metadata: Metadata = {
  title: 'Coding Challenges | Neuro Labs',
  description:
    'Solve real-world coding challenges and build coding confidence with NeuroLabs.',
};

const ASSET = '/coding-challenge';

function SectionBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return <div className={`sectionBadge ${className ?? ''}`.trim()}>{label}</div>;
}

const SKILL_DOTS = {
  topLeft: '#BF1869',
  topRight: '#67096E',
  bottomLeft: '#2D4CC8',
  bottomRight: '#C05512',
} as const;

function SkillCard({
  line1,
  line2,
  corner,
}: {
  line1: string;
  line2: string;
  corner: keyof typeof SKILL_DOTS;
}) {
  return (
    <div
      className={`skillCard skillCard-${corner}`}
      style={{ '--skill-accent': SKILL_DOTS[corner] } as CSSProperties}
    >
      <div
        className={'skillCardDot'}
        style={{ backgroundColor: SKILL_DOTS[corner] }}
        aria-hidden="true"
      />
      <p className={'skillCardLabel'}>
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
}

function PillCard({ label, accent }: { label: string; accent: string }) {
  return (
    <div
      className={'pillCard'}
      style={{ '--pill-accent': accent } as CSSProperties}
    >
      <span className={'pillCardLabel'}>{label}</span>
    </div>
  );
}

function AudienceCard({ label, color }: { label: string; color: string }) {
  return (
    <div
      className={'audienceCard'}
      style={{ '--audience-color': color } as CSSProperties}
    >
      <div className={'audienceCardParent'}>
        <div className={'audienceCardWrapper'} aria-hidden="true" />
        <span className={'audienceCardLabel'}>{label}</span>
      </div>
    </div>
  );
}

export default function CodingChallengePage() {
  return (
    <PageScaler>
      {/* Breadcrumb */}
      <div className={'frameDiv'}>
        <div className={'neuroLabsWrapper'}>
          <b className={'codingChallenges'}>Neuro Labs</b>
        </div>
        <div className={'arrowRightDoubleParent'}>
          <Image
            className={'arrowDown01Icon'}
            src={`${ASSET}/icons/arrow-right-double.svg`}
            
            width={16}
            height={16}
            alt=""
          />
          <b className={'codingChallenges'}>Coding Challenges</b>
        </div>
      </div>

      {/* Hero */}
      <div className={'frameParent2'}>
        <div className={'frameWrapper'}>
          <div className={'frameWrapper'}>
            <div className={'frameWrapper3'}>
              <div className={'image20Parent'}>
                <div className={'image20'} />
                <div className={'image21'} />
                <div className={'frameParent3'}>
                  <div className={'frameParent4'}>
                    <SectionBadge label="Coding Challenges" className={'frameItem'} />
                    <b className={'testImproveContainer'}>
                      <span className={'testImprove'}>Test! Improve &amp; Showcase Your </span>
                      <span className={'codingSkills'}>Coding Skills</span>
                    </b>
                  </div>
                  <div className={'solveRealWorldChallenges'}>
                    Solve real-world challenges and build coding confidence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className={'businessStyleYoungBeautifulIcon'}
          src={`${ASSET}/images/hero-people.png`}
          width={663}
          height={541}
          sizes="663px"
          alt=""
          priority
        />
        <div className={'frameWrapper4'}>
          <div className={'heroTechStripTrack'}>
            <div className={'heroTechStrip'}>
              <div className={`heroStripSeg heroStripPractice`}>
                <Image
                  className={'heroStripShape'}
                  src={`${ASSET}/icons/rect-3.svg`}
                  width={225}
                  height={98}
                  alt=""
                />
                <div className={'heroStripContent'}>
                  <Image
                    className={'heroStripIcon'}
                    src={`${ASSET}/icons/code-xml-1.svg`}
                    width={45}
                    height={43}
                    alt=""
                  />
                  <span className={'heroStripLabel'}>
                    <b>Practice Coding</b>
                  </span>
                </div>
              </div>
              <div className={`heroStripSeg heroStripThink`}>
                <Image
                  className={'heroStripShape'}
                  src={`${ASSET}/icons/rect-3-1.svg`}
                  width={253}
                  height={98}
                  alt=""
                />
                <div className={'heroStripContent'}>
                  <Image
                    className={'heroStripIcon'}
                    src={`${ASSET}/icons/ai-brain-01-1.svg`}
                    width={36}
                    height={36}
                    alt=""
                  />
                  <span className={'heroStripLabel'}>
                    <b>Think Logically</b>
                  </span>
                </div>
              </div>
              <div className={`heroStripSeg heroStripShowcase`}>
                <Image
                  className={'heroStripShape'}
                  src={`${ASSET}/icons/rect-4.svg`}
                  width={253}
                  height={98}
                  alt=""
                />
                <div className={'heroStripContent'}>
                  <Image
                    className={'heroStripIcon'}
                    src={`${ASSET}/icons/champion.svg`}
                    width={41}
                    height={43}
                    alt=""
                  />
                  <span className={'heroStripLabel'}>
                    <b>Showcase Skills</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-world problem solving */}
      <div className={'frameParent5'}>
        <div className={'frameParent6'}>
          <SectionBadge label="Practical Skills" className={'frameIcon'} />
          <div className={'realWorldProblemSolvingParent'}>
            <b className={'realWorldProblemSolving'}>
              Real-World Problem Solving
              <br />
            </b>
            <div className={'codingChallengesSimulate'}>
              Coding challenges simulate real-world development, helping learners apply programming
              concepts to build practical solutions.
            </div>
          </div>
        </div>
        <div className={'frameParent7'}>
          <div className={'frameWrapper5'}>
            <div className={'rectangleParent'}>
              <div className={'rectangleDiv'} />
              <div className={'frameChild2'}>
                <div className={'ellipseParent'}>
                  <div className={'ellipseDiv'} />
                  <Image
                    className={'puzzleIcon'}
                    src={`${ASSET}/icons/puzzle.svg`}
                    width={36}
                    height={36}
                    alt=""
                  />
                  <div className={'solveCodingProblems'}>
                    Solve Coding Problems
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'frameWrapper5'}>
            <div className={'rectangleParent'}>
              <div className={'rectangleDiv'} />
              <div className={'frameChild2'}>
                <div className={'frameWrapper9'}>
                  <div className={'ellipseGroup'}>
                    <div className={'frameChild4'} />
                    <Image
                      className={'search02Icon'}
                      src={`${ASSET}/icons/search-02.svg`}
                      width={36}
                      height={36}
                      alt=""
                    />
                    <div className={'buildOptimizedSolutions'}>
                      Build Optimized Solutions
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'frameWrapper5'}>
            <div className={'rectangleParent'}>
              <div className={'rectangleDiv'} />
              <div className={'frameChild2'}>
                <div className={'ellipseContainer'}>
                  <div className={'frameChild6'} />
                  <Image
                    className={'aiBrain01Icon'}
                    src={`${ASSET}/icons/ai-brain-01.svg`}
                    width={36}
                    height={36}
                    alt=""
                  />
                  <div className={'improveLogicalThinking'}>Improve Logical Thinking</div>
                </div>
              </div>
            </div>
          </div>
          <div className={'frameWrapper5'}>
            <div className={'rectangleParent'}>
              <div className={'rectangleDiv'} />
              <div className={'frameChild2'}>
                <div className={'ellipseParent2'}>
                  <div className={'frameChild8'} />
                  <Image
                    className={'codeXmlIcon'}
                    src={`${ASSET}/icons/code-xml.svg`}
                    width={36}
                    height={36}
                    alt=""
                  />
                  <div className={'buildOptimizedSolutions'}>
                    Strengthen Coding Concepts
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn Compete Grow */}
      <div className={'frameParent8'}>
        <div className={'frameParent9'}>
          <div className={'frameParent10'}>
            <SectionBadge label="Interactive Learning" className={'frameChild9'} />
            <b className={'learnCompeteGrow'}>
              Learn! Compete! Grow!
              <br />
            </b>
          </div>
          <div className={'learnCompeteAnd'}>
            Learn, compete, and grow through coding challenges.
          </div>
        </div>
        <div className={'frameParent11'}>
          <div className={'frameParent12'}>
            <SkillCard line1="Time-based coding" line2="Problems" corner="topLeft" />
            <SkillCard line1="Algorithm and logic" line2="puzzles" corner="topRight" />
          </div>
          <div className={'frameParent12'}>
            <SkillCard
              line1="Programming contests"
              line2="and competitions"
              corner="bottomLeft"
            />
            <SkillCard
              line1="Skill-based coding"
              line2="assessments"
              corner="bottomRight"
            />
          </div>
        </div>
      </div>

      <b className={'thinkSolveAndContainer'}>
        <span className={'thinkSolveAndContainer2'}>
          <span className={'thinkSolveAndPerformLike'}>
            <span className={'thinkSolve'}>Think! solve! </span>
            <span className={'a'}>a</span>
            <span className={'thinkSolve'}>nd perform like </span>
            <span className={'a'}>a</span>
            <span className={'span'}> </span>
          </span>
          <span className={'span'}>
            <span className={'thinkSolveAndPerformLike'}>Developer</span>
          </span>
        </span>
      </b>

      {/* Improve efficiency */}
      <div className={'frameParent14'}>
        <div className={'image20Group'}>
          <div className={'frameWrapper14'}>
            <div className={'frameParent15'}>
              <SectionBadge label="Coding Excellence" className={'frameChild14'} />
              <div className={'improveCodingEfficiencyAcParent'}>
                <b className={'improveCodingEfficiency'}>
                  Improve Coding Efficiency &amp; Accuracy
                </b>
                <div className={'buildBetterCoding'}>
                  Build better coding habits through regular practice and real-world challenges.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'frameParent16'}>
          <PillCard label="Clean Code" accent="#BF1869" />
          <PillCard label="Smart Debugging" accent="#2A7308" />
          <PillCard label="Optimize Algorithms" accent="#C05512" />
          <PillCard label="Scalable Solutions" accent="#2D4CC8" />
        </div>
      </div>

      {/* Interviews */}
      <div className={'frameParent19'}>
        <InterviewSection />
      </div>

      {/* Audience */}
      <div className={'frameParent22'}>
        <div className={'audienceHeader'}>
          <SectionBadge label="Flexible Learning" className={'frameChild20'} />
          <div className={'builtForEveryLearningJournParent'}>
            <b className={'builtForEveryContainer'}>
              <span className={'builtForEvery'}>Built for Every </span>
              <span className={'learning'}>Learning</span>
              <span className={'builtForEvery'}> Journey</span>
            </b>
            <div className={'neurolabsCodingChallenges'}>
              NeuroLabs Coding Challenges are suitable for:
            </div>
          </div>
        </div>
        <div className={'audienceGrid'}>
          <AudienceCard label="Universities & Colleges" color="#2D4CC8" />
          <AudienceCard label="Coding Bootcamps" color="#C05512" />
          <AudienceCard label="Corporate Training" color="#BF1869" />
          <AudienceCard label="Aspiring Developers" color="#2A7308" />
        </div>
      </div>

      {/* CTA */}
      <div className={'rectangleParent4'}>
        <Image
          className={'colleaguesDiscussingWorkProIcon'}
          src={`${ASSET}/images/colleagues.png`}
          width={702}
          height={505}
          sizes="(max-width: 767px) 100vw, 702px"
          alt="Colleagues discussing work at a computer"
        />
        <div className={'frameParent25'}>
          <div className={'ctaTextGroup'}>
            <SectionBadge label="Programming Mastery" className={'frameChild21'} />
            <b className={'challengeYourSkillsContainer'}>
              <span className={'challengeYourSkillsContainer2'}>
                <span className={'challengeYourSkills'}>
                  Challenge Your Skills Build Your{' '}
                </span>
                <span className={'future'}>Future</span>
              </span>
            </b>
          </div>
          <div className={'solveRealCoding'}>
            Solve real coding challenges and grow into a confident programmer.
          </div>
        </div>
      </div>
    </PageScaler>
  );
}
