"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./retail-health.css";

const RetailAndHealthCare: NextPage = () => {
  const [openRetailCard, setOpenRetailCard] = useState<string | null>(null);
  const [isFinalVideoActive, setIsFinalVideoActive] = useState(false);
  const finalVideoSectionRef = useRef<HTMLDivElement | null>(null);

  const toggleRetailCard = (card: string) => {
    setOpenRetailCard((current) => (current === card ? null : card));
  };

  useEffect(() => {
    const section = finalVideoSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFinalVideoActive(entry.isIntersecting);
      },
      {
        threshold: 0.28,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={`retailAndHealthCare ${openRetailCard ? "retailDropdownOpen" : ""}`}>
      <div className="retailHealthcare">
        <div className="frameDiv">
          <div className="ourCustomersWrapper">
            <p className="industriesWeServe" style={{ margin: 0 }}>
              Our Customers
            </p>
          </div>
          <div className="homeParent">
            <Image src="/icons/arrow-right-double.svg" className="arrowDown01Icon" width={16} height={16} sizes="100vw" alt="" />
            <div className="ourCustomersWrapper">
              <p className="industriesWeServe" style={{ margin: 0 }}>
                Industries we Serve
              </p>
            </div>
          </div>
          <div className="arrowRightDoubleGroup">
            <Image src="/icons/arrow-right-double.svg" className="arrowDown01Icon" width={16} height={16} sizes="100vw" alt="" />
            <h1 className="retailHealthcare2" style={{ margin: 0 }}>
              Retail & Healthcare Solutions
            </h1>
          </div>
        </div>
        <div className="frameParent2">
          <div className="frameItem" />
          <div className="smilingYoungFemaleDoctorWeParent">
            <Image src="/images/smiling-young-female-doctor-wearing-medical-robe-stethoscope-sitting-desk-with-medical-tools-laptop-touching-head-with-finger-isolated-white-wall 1.webp" className="smilingYoungFemaleDoctorWeIcon" width={594} height={537} sizes="100vw" alt="Smiling healthcare professional" priority />
            <div className="frameParent3">
              <div className="frameWrapper">
                <div className="frameParent4">
                  <div className="frameParent5">
                    <Image src="/assets/retail and helath/transparent.webp" className="frameInner" width={386.2} height={50.3} sizes="100vw" alt="" />
                    <h1 className="scalableLearningForContainer" style={{ margin: 0 }}>
                      <span className="scalableLearningFor">{`Scalable Learning for `}</span>
                      <span className="serviceDriven">Service-Driven</span>
                      <span className="scalableLearningFor">
                        {" "}
                        Industries
                        <br />
                      </span>
                    </h1>
                  </div>
                  <p className="neurolxpEnablesSmarter" style={{ margin: 0 }}>
                    NeuroLXP enables smarter learning for retail and healthcare, driving faster onboarding, compliance and service excellence.
                  </p>
                </div>
              </div>
              <div className="frameParent6">
                <button type="button" className="requestDemoWrapper">
                  <span className="requestDemo">Request Demo</span>
                </button>
                <div className="frameWrapper2">
                  <div className="startLearningWrapper">
                    <p className="startLearning" style={{ margin: 0 }}>
                      Start Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameChild2" />
          </div>
        </div>
        <div className="retailHealthcareInner">
          <div className="frameParent7">
            <div className="frameWrapper3">
              <div className="kParent">
                <p className="k" style={{ margin: 0, fontWeight: "bold" }}>
                  10K+
                </p>
                <p className="retailLocations" style={{ margin: 0 }}>
                  Retail Locations
                  <br />
                </p>
              </div>
            </div>
            <div className="frameWrapper3">
              <div className="kParent">
                <p className="b" style={{ margin: 0, fontWeight: "bold" }}>
                  500+
                </p>
                <p className="healthcareFacilities" style={{ margin: 0 }}>
                  Healthcare Facilities
                  <br />
                </p>
              </div>
            </div>
            <div className="frameWrapper3">
              <div className="kParent">
                <p className="b" style={{ margin: 0, fontWeight: "bold" }}>
                  5M+
                </p>
                <p className="trainedEmployees" style={{ margin: 0 }}>
                  Trained Employees
                  <br />
                </p>
              </div>
            </div>
            <div className="frameWrapper3">
              <div className="group">
                <p className="b2" style={{ margin: 0, fontWeight: "bold" }}>{`4.9 `}</p>
                <p className="averageRating" style={{ margin: 0 }}>
                  Average Rating
                  <br />
                  <br />
                </p>
                <Image src="/images/transparent.webp" className="starIcon" width={21} height={20} sizes="100vw" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="frameParent8">
          <div className="frameParent9">
            <Image src="/images/transparent.webp" className="frameChild3" width={222.2} height={50.2} sizes="100vw" alt="" />
            <div className="empoweringSmarterRetailLearParent">
              <h2 className="empoweringSmarterRetail" style={{ margin: 0 }}>
                Empowering Smarter Retail Learning
              </h2>
              <p className="retailTeamsNeed" style={{ margin: 0 }}>
                Retail teams need fast onboarding, updated product knowledge and consistent training across multiple locations.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="frameParent10">
            <button type="button" className={`frameWrapper7 retailLearningCard ${openRetailCard === "talent" ? "isOpen" : ""}`} onClick={() => toggleRetailCard("talent")} aria-expanded={openRetailCard === "talent"}>
              <div className="frameParent11">
                <div className="retailCardIcon">
                  <Image src="/icons/user-group-02-1.svg" className="frameChild4" width={46} height={46} sizes="46px" alt="" aria-hidden="true" />
                </div>
                <h3 className="talentRetention" style={{ margin: 0 }}>
                  Talent Retention
                </h3>
                <span className="retailCardChevron" aria-hidden="true">
                  ⌄
                </span>
                <p className="retailCardDropdown" style={{ margin: 0 }}>
                  Simplify new hire onboarding.
                </p>
              </div>
            </button>

            <button type="button" className={`frameWrapper7 retailLearningCard ${openRetailCard === "product" ? "isOpen" : ""}`} onClick={() => toggleRetailCard("product")} aria-expanded={openRetailCard === "product"}>
              <div className="frameParent12">
                <div className="retailCardIcon">
                  <Image src="/icons/ai-brain-01.svg" className="frameChild5" width={46} height={46} sizes="46px" alt="" aria-hidden="true" />
                </div>
                <h3 className="productKnowledge" style={{ margin: 0 }}>
                  Product Knowledge
                </h3>
                <span className="retailCardChevron" aria-hidden="true">
                  ⌄
                </span>
                <p className="retailCardDropdown" style={{ margin: 0 }}>
                  Keep teams product
                  <br />
                  ready.
                </p>
              </div>
            </button>

            <button type="button" className={`frameWrapper7 retailLearningCard ${openRetailCard === "stores" ? "isOpen" : ""}`} onClick={() => toggleRetailCard("stores")} aria-expanded={openRetailCard === "stores"}>
              <div className="frameParent13">
                <div className="retailCardIcon">
                  <Image src="/icons/store-01-1.svg" className="frameChild6" width={46} height={46} sizes="46px" alt="" aria-hidden="true" />
                </div>
                <h3 className="distributedStores" style={{ margin: 0 }}>
                  Distributed Stores
                </h3>
                <span className="retailCardChevron" aria-hidden="true">
                  ⌄
                </span>
                <p className="retailCardDropdown" style={{ margin: 0 }}>
                  Deliver consistent training everywhere.
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="rectangleParent">
          <div className="rectangle" />
          <div className="image20" />
          <div className="frameParent14">
            <Image src="/images/transparent.webp" className="frameChild7" width={235} height={50.2} sizes="100vw" alt="" />
            <h2 className="empoweringSmarterRetail2" style={{ margin: 0 }}>
              Empowering Smarter Retail Learning
              <br />
            </h2>
            <p className="neurolxpEnablesFaster" style={{ margin: 0 }}>
              NeuroLXP enables faster onboarding interactive product training and consistent learning across retail stores and regions.
              <br />
              <br />
            </p>
          </div>
          <Image src="/images/two-female-designers-work 1.webp" className="twoFemaleDesignersWork1Icon" width={615} height={507} sizes="100vw" alt="Retail professionals learning together" />
        </div>
        <div className="frameParent15">
          <div className="frameParent16">
            <Image src="/images/transparent.webp" className="frameChild8" width={209.8} height={50.2} sizes="100vw" alt="" />
            <h2 className="benefitsForRetail" style={{ margin: 0 }}>
              Benefits for Retail Organizations
              <br />
              <br />
            </h2>
            <p className="neurolxpEnablesSmarter2" style={{ margin: 0 }}>
              NeuroLXP enables smarter retail learning with faster onboarding, stronger product knowledge and better customer service.
              <br />
              <br />
            </p>
          </div>
          <div className="frameParent17">
            <div className="frameParent18">
              <span className="retailBenefitIcon retailBenefitBlue">
                <Image src="/icons/graduation-cap.svg" width={25} height={25} alt="" />
              </span>
              <p className="consistentTraining" style={{ margin: 0 }}>
                Consistent Training
                <br />
              </p>
            </div>
            <div className="frameParent19">
              <span className="retailBenefitIcon retailBenefitPink">
                <Image src="/icons/star.svg" width={25} height={25} alt="" />
              </span>
              <p className="betterCustomerExperience" style={{ margin: 0 }}>
                Better Customer Experience
                <br />
                <br />
              </p>
            </div>
            <div className="frameParent19">
              <span className="retailBenefitIcon retailBenefitPurple">
                <Image src="/icons/zap.svg" width={25} height={25} alt="" />
              </span>
              <p className="quickOnboarding" style={{ margin: 0 }}>
                Quick Onboarding
                <br />
              </p>
            </div>
            <div className="frameParent19">
              <span className="retailBenefitIcon retailBenefitOrange">
                <Image src="/icons/target-02.svg" width={25} height={25} alt="" />
              </span>
              <p className="continuousDevelopment" style={{ margin: 0 }}>
                Continuous Development
                <br />
              </p>
            </div>
            <div className="frameParent19">
              <span className="retailBenefitIcon retailBenefitGold">
                <Image src="/icons/analytics-up.svg" width={25} height={25} alt="" />
              </span>
              <p className="performanceTracking" style={{ margin: 0 }}>
                Performance Tracking
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="frameParent23">
          <div className="frameParent24">
            <div className="frameWrapper10">
              <div className="largeHealthcareTeamsParent">
                <Image src="/images/choosing-lunch-dark-haired-young-businessman-checking-menu-choosing-lunch 1.webp" className="frameChild14" width={280} height={162} sizes="100vw" alt="" />
                <h3 className="complianceAndCertification" style={{ margin: 0 }}>
                  Compliance and 
                  <br />
                  Certification
                  <br />
                </h3>
              </div>
            </div>
            <div className="frameParent26">
              <div className="frameWrapper10">
                <div className="largeHealthcareTeamsParent">
                  <div className="continuousMedicalEducationParent">
                    <h3 className="continuousMedicalEducation" style={{ margin: 0 }}>
                      Continuous Medical Education
                      <br />
                    </h3>
                    <Image src="/images/young-businesswoman-her-colleague-wearing-face-masks-while-working-computer-office-virus-epidemic 1.webp" className="youngBusinesswomanHerColleaIcon" width={280} height={162} sizes="100vw" alt="" />
                  </div>
                </div>
              </div>
              <div className="frameWrapper10">
                <div className="largeHealthcareTeamsParent">
                  <h3 className="largeHealthcareTeams" style={{ margin: 0 }}>
                    Large Healthcare Teams
                    <br />
                  </h3>
                  <Image src="/images/medical-team-checking-results-digital-tablet 1.webp" className="frameChild15" width={280} height={162} sizes="100vw" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="frameParent27">
            <Image src="/assets/retail and helath/transparent.webp" className="frameChild16" width={281.6} height={50.2} sizes="100vw" alt="" />
            <h2 className="smarterHealthcareLearning" style={{ margin: 0 }}>
              Smarter Healthcare Learning
            </h2>
            <p className="healthcareOrganizationsNeed" style={{ margin: 0 }}>
              Healthcare organizations need reliable training for compliance certification, clinical skills, and ongoing professional development.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="rectangleGroup">
          <div className="rectangle" />
          <div className="image20" />
          <div className="frameParent28">
            <Image src="/assets/retail and helath/transparent.webp" className="frameChild7" width={235} height={50.2} sizes="100vw" alt="" />
            <h2 className="empoweringHealthcareOrganiza" style={{ margin: 0 }}>
              Empowering Healthcare Organizations
            </h2>
            <p className="neurolxpEnablesFaster" style={{ margin: 0 }}>
              NeuroLXP simplifies healthcare training with compliance, certifications, and continuous learning across healthcare teams.
            </p>
          </div>
          <Image src="/images/male-doctor-nurses-communicating-while-working-digital-tablet-clinic 2.webp" className="maleDoctorNursesCommunicatiIcon" width={583} height={526} sizes="100vw" alt="Healthcare team collaborating" />
        </div>
        <div className="frameParent29">
          <div className="frameParent30">
            <Image src="/images/transparent.webp" className="frameChild18" width={282} height={50.2} sizes="100vw" alt="" />
            <div className="benefitsForHealthcareOrganiParent">
              <h2 className="benefitsForHealthcare" style={{ margin: 0 }}>
                Benefits for Healthcare Organizations
                <br />
              </h2>
              <p className="healthcareOrganizationsNeed2" style={{ margin: 0 }}>
                Healthcare organizations need reliable training for compliance, certification clinical skills, and ongoing professional development.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="frameParent31">
            <div className="frameParent32">
              <Image src="/images/transparent.webp" className="frameChild19" width={240} height={166} sizes="100vw" alt="" />
              <span className="healthArrow healthArrowBlue" aria-hidden="true" />
              <h3 className="complianceTraining" style={{ margin: 0 }}>
                Compliance Training
                <br />
              </h3>
            </div>
            <div className="vectorParent">
              <Image src="/images/transparent.webp" className="rectangleIcon" width={240} height={166} sizes="100vw" alt="" />
              <Image src="/images/transparent.webp" className="frameChild19" width={240} height={166} sizes="100vw" alt="" />
              <Image src="/icons/Polygon 32-2.svg" className="polygonIcon" width={25} height={24} sizes="25px" alt="" />
              <h3 className="professionalDevelopment" style={{ margin: 0 }}>
                Professional Development
                <br />
              </h3>
            </div>
            <div className="vectorParent">
              <Image src="/images/transparent.webp" className="rectangleIcon" width={240} height={166} sizes="100vw" alt="" />
              <Image src="/images/transparent.webp" className="frameChild19" width={240} height={166} sizes="100vw" alt="" />
              <Image src="/icons/Polygon 32-1.svg" className="polygonIcon" width={25} height={24} sizes="25px" alt="" />
              <h3 className="betterPatientCare" style={{ margin: 0 }}>
                Better Patient Care
                <br />
              </h3>
            </div>
            <div className="vectorParent">
              <Image src="/images/transparent.webp" className="rectangleIcon" width={240} height={166} sizes="100vw" alt="" />
              <Image src="/images/transparent.webp" className="frameChild19" width={240} height={166} sizes="100vw" alt="" />
              <Image src="/icons/Polygon 32-3.svg" className="polygonIcon" width={25} height={24} sizes="25px" alt="" />
              <h3 className="certificationTracking" style={{ margin: 0 }}>
                Certification Tracking
                <br />
                <br />
              </h3>
            </div>
            <div className="vectorParent">
              <Image src="/images/transparent.webp" className="rectangleIcon" width={240} height={166} sizes="100vw" alt="" />
              <Image src="/images/transparent.webp" className="frameChild19" width={240} height={166} sizes="100vw" alt="" />
              <h3 className="scalableProgrammes" style={{ margin: 0 }}>
                Scalable Programmes
                <br />
                <br />
                <br />
              </h3>
              <Image src="/icons/Polygon 32.svg" className="polygonIcon" width={25} height={24} sizes="25px" alt="" />
            </div>
          </div>
        </div>
        <div className="frameParent33">
          <div ref={finalVideoSectionRef} className={`image21Parent retailVideoRevealSection ${isFinalVideoActive ? "isRevealActive" : ""}`}>
            <div className="image21" />
            <div className="groupYoungBusinesspeopleUsi" />
            <video className="retailFinalVideo retailFinalVideoSlide" src="/videos/retail.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Retail and healthcare learning video" />
            <div className="frameParent34 retailFinalVideoContent">
              <div className="frameParent4">
                <div className="frameParent36">
                  <Image src="/images/transparent.webp" className="frameChild32" width={170.7} height={50.1} sizes="100vw" alt="" />
                  <h2 className="poweringLearningFor" style={{ margin: 0 }}>
                    Powering Learning for Retail and Healthcare
                  </h2>
                </div>
                <p className="neurolxpHelpsRetail" style={{ margin: 0 }}>
                  NeuroLXP helps retail and healthcare organizations build skilled, compliant future-ready workforces.
                </p>
              </div>
              <div className="frameWrapper14">
                <div className="getStartedWrapper">
                  <p className="getStarted" style={{ margin: 0 }}>{`Get Started `}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image203" />
        </div>
      </div>
      <div className="productKnowledge2">
        <div className="frameParent54">
          <div className="frameParent55">
            <Image src="/icons/store-01-1.svg" className="frameChild43" width={60} height={60} sizes="100vw" alt="" />
            <p className="productKnowledge3">
              Product Knowledge
              <br />
            </p>
          </div>
          <p className="keepTeamsProduct" style={{ margin: 0 }}>
            Keep teams product ready.
          </p>
        </div>
      </div>
      <div className="distributedStores2">
        <div className="frameParent56">
          <div className="frameParent55">
            <Image src="/icons/analytics-up.svg" className="frameChild44" width={60} height={60} sizes="100vw" alt="" />
            <p className="distributedStores3">
              Distributed Stores
              <br />
            </p>
          </div>
          <p className="deliverConsistentTraining" style={{ margin: 0 }}>
            Deliver consistent training everywhere.
          </p>
        </div>
      </div>
      <div className="talentRetention2">
        <div className="frameParent58">
          <div className="frameParent59">
            <Image src="/icons/user-group-02-1.svg" className="frameChild45" width={60} height={60} sizes="100vw" alt="" />
            <h3 className="talentRetention3" style={{ margin: 0 }}>
              Talent Retention
            </h3>
          </div>
          <p className="deliverConsistentTraining" style={{ margin: 0 }}>
            Simplify new hire onboarding.
          </p>
        </div>
      </div>
    </main>
  );
};

export default RetailAndHealthCare;
