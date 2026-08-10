import type { NextPage } from "next";
import Image from "next/image";
import "./customer-training.css";

const CustomerTraining: NextPage = () => {
  return (
    <main className="customerTraining">
      <nav className="frameDiv" aria-label="Breadcrumb">
        <div className="resourcesWrapper">
          <div className="useCases">Resources</div>
        </div>
        <Image className="breadcrumbArrow" src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
        <div className="resourcesWrapper">
          <div className="useCases">Use cases</div>
        </div>
        <Image className="breadcrumbArrow" src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
        <b className="useCases">Customer Training</b>
      </nav>
      <div className="frameParent2">
        <section className="vectorParent" aria-labelledby="customer-training-title">
          <Image className="polygonIcon" src="/images/customer-training-hero.svg" width={1280} height={450} sizes="(max-width: 1280px) 100vw, 1280px" alt="" aria-hidden="true" priority />
          <div className="frameWrapper">
            <div className="frameParent3">
              <div className="frameParent4">
                <div className="frameIcon">Customer Training</div>
                <div className="turnProductKnowledgeIntoCuParent">
                  <h1 id="customer-training-title" className="turnProductKnowledgeContainer">
                    <span className="turnProductKnowledge">Turn Product Knowledge Into </span>
                    <span className="customerSuccess">Customer Success</span>
                  </h1>
                  <p className="neurolxpDeliversScalable">NeuroLXP delivers scalable customer training that drives product adoption, engagement, and success.</p>
                </div>
              </div>
              <div className="frameWrapper2">
                <button className="frameChild2" type="button">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="frameParent5">
          <div className="frameWrapper3">
            <div className="empowerCustomersDriveAdoptWrapper">
              <b className="empowerCustomersDrive">
                Empower Customers! Drive Adoption! Build Success!
                <br />
              </b>
            </div>
          </div>
          <div className="neurolxpDeliversSelfService">NeuroLXP delivers self-service customer learning with courses, tutorials, and analytics.</div>
        </div>
      </div>
      <Image className="customerTrainingChild" src="/images/customer-training-divider.svg" width={1440} height={5} sizes="100vw" alt="" aria-hidden="true" />
      <div className="image20Parent">
        <div className="image20" />
        <div className="frameParent6">
          <div className="frameWrapper4">
            <div className="frameWrapper5">
              <div className="frameParent7">
                <div className="frameParent8">
                  <div className="frameIcon">Customer Training</div>
                  <div className="turnProductKnowledgeIntoCuParent">
                    <b className="turnProductKnowledgeContainer">
                      <span className="turnProductKnowledge">{`Turn Product Knowledge into `}</span>
                      <span className="customerSuccess">Customer Success</span>
                    </b>
                    <div className="neurolxpDeliversScalable">NeuroLXP delivers scalable customer training that drives product adoption, engagement, and success.</div>
                  </div>
                </div>
                <div className="frameChild4" />
              </div>
            </div>
          </div>
          <div className="frameParent9">
            <div className="frameParent10">
              <div className="frameParent11">
                <div className="frameParent12">
                  <div className="frameChild5" />
                  <div className="frameParent13">
                    <div className="challenge1Parent">
                      <b className="challenge1">Challenge 1</b>
                      <b className="simplifyProducts">Simplify Products</b>
                    </div>
                    <div className="helpCustomersLearn">Help customers learn products and features faster.</div>
                  </div>
                </div>
                <div className="frameParent14">
                  <div className="frameChild6" />
                  <div className="frameParent13">
                    <div className="challenge1Parent">
                      <b className="challenge1">Challenge 3</b>
                      <b className="simplifyProducts">
                        Drive Adoption
                        <br />
                      </b>
                    </div>
                    <div className="helpCustomersLearn">Guide customers to discover more product value.</div>
                  </div>
                </div>
              </div>
              <div className="frameParent16">
                <div className="frameParent12">
                  <div className="frameChild7" />
                  <div className="frameParent13">
                    <div className="challenge1Parent">
                      <b className="challenge1">Challenge 2</b>
                      <b className="simplifyProducts">
                        Reduce Support
                        <br />
                      </b>
                    </div>
                    <div className="helpCustomersLearn">Enable self-service learning and fewer support requests.</div>
                  </div>
                </div>
                <div className="frameParent19">
                  <div className="frameChild8" />
                  <div className="frameParent13">
                    <div className="challenge1Parent">
                      <b className="challenge1">Challenge 4</b>
                      <b className="simplifyProducts">
                        Scale Globally
                        <br />
                      </b>
                    </div>
                    <div className="helpCustomersLearn">Deliver consistent training to customers worldwide.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent21">
              <div className="frameChild9" />
              <div className="frameParent13">
                <div className="challenge1Parent">
                  <b className="challenge1">Challenge 5</b>
                  <b className="simplifyProducts">
                    Track Outcomes
                    <br />
                  </b>
                </div>
                <div className="helpCustomersLearn">Measure progress, completion, and learning performance.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frameParent23">
        <div className="frameParent24">
          <div className="frameParent25">
            <div className="benefitsBadge">Benefits</div>
            <b className="benefitsOfCustomer">
              Benefits of Customer Training
              <br />
              with NeuroLXP
            </b>
          </div>

          <p className="improveProductAdoption">Improve product adoption, reduce support needs, and drive customer success.</p>
        </div>

        <div className="frameParent26">
          <div className="frameParent27">
            <div className="benefitIconOuter">
              <div className="benefitIconInner">
                <Image className="benefitIcon" src="/icons/chart-upblue.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className="increaseProductUsage">Increase product usage</div>
          </div>

          <div className="frameParent28">
            <div className="benefitIconOuter">
              <div className="benefitIconInner">
                <Image className="benefitIcon" src="/icons/headset-pink.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className="lowerSupportRequests">Lower support requests</div>
          </div>

          <div className="frameParent28">
            <div className="benefitIconOuter">
              <div className="benefitIconInner">
                <Image className="benefitIcon" src="/icons/scale.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className="trainAtScale">Train at scale</div>
          </div>

          <div className="frameParent28">
            <div className="benefitIconOuter">
              <div className="benefitIconInner">
                <Image className="benefitIcon" src="/icons/idea-01orange.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className="unlockProductValue">Unlock product value</div>
          </div>

          <div className="frameParent28">
            <div className="benefitIconOuter">
              <div className="benefitIconInner">
                <Image className="benefitIcon" src="/icons/chart-column-big.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className="measureLearning">Measure learning</div>
          </div>

          <div className="frameParent28">
            <div className="benefitIconOuter">
              <div className="benefitIconInner">
                <Image className="benefitIcon" src="/icons/agreement-02.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className="strengthenEngagement">Strengthen engagement</div>
          </div>
        </div>
      </div>

      <div className="frameParent50">
        <div className="frameParent51">
          <div className="frameParent4">
            <div className="frameChild27">Drive Customer Success</div>
            <div className="turnProductKnowledgeIntoCuParent">
              <b className="turnCustomerEducationContainer">
                <span className="turnProductKnowledge">{`Turn Customer Education into `}</span>
                <span className="customerSuccess">Customer Success</span>
              </b>
              <div className="neurolxpDeliversScalable">NeuroLXP drives customer success through structured learning, self-service training, and actionable analytics.</div>
            </div>
          </div>
          <div className="frameWrapper2">
            <button className="frameChild2" type="button">
              Book a Demo
            </button>
          </div>
        </div>
        <Image className="frameChild29" src="/images/rectangle 73(1).png" width={935} height={498} sizes="(max-width: 935px) 100vw, 935px" alt="Customer Success" priority />
      </div>
    </main>
  );
};

export default CustomerTraining;
