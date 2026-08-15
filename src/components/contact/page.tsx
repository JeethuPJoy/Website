"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type FormEvent, useMemo, useState } from "react";
import { getCountries, getCountryCallingCode, isPossiblePhoneNumber, type CountryCode } from "libphonenumber-js";
import "./contact.css";

const subjectOptions = ["General Inquiry", "Product Information", "Technical Support", "Account Support", "Partnership", "Billing", "Feedback", "Other"];

const ContactUs: NextPage = () => {
  const router = useRouter();
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const isEmailValid = emailAddress.length > 0 && emailPattern.test(emailAddress);

  const showEmailError = emailTouched && !isEmailValid;

  const countryOptions = useMemo(() => {
    const displayNames = new Intl.DisplayNames(["en"], { type: "region" });

    return getCountries()
      .map((country) => ({
        value: country,
        label: `${displayNames.of(country) || country} (+${getCountryCallingCode(country)})`,
        shortLabel: `${country} (+${getCountryCallingCode(country)})`,
      }))
      .sort((first, second) => first.label.localeCompare(second.label));
  }, []);

  const selectedCountry = countryOptions.find((country) => country.value === countryCode);

  const phoneMaxLength = countryCode === "IN" ? 10 : 15;

  const filteredCountryOptions = useMemo(() => {
    const searchValue = countrySearch.trim().toLowerCase();

    if (!searchValue) {
      return countryOptions;
    }

    return countryOptions.filter((country) => country.label.toLowerCase().includes(searchValue) || country.shortLabel.toLowerCase().includes(searchValue));
  }, [countryOptions, countrySearch]);

  const internationalPhoneNumber = countryCode && phoneNumber ? `+${getCountryCallingCode(countryCode as CountryCode)}${phoneNumber}` : "";

  const isPhoneValid = Boolean(countryCode) && Boolean(phoneNumber) && isPossiblePhoneNumber(internationalPhoneNumber);

  const showPhoneError = phoneTouched && !isPhoneValid;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailTouched(true);

    if (!isEmailValid) {
      document.getElementById("emailAddress")?.focus();
      return;
    }

    setPhoneTouched(true);

    if (!isPhoneValid) {
      document.getElementById("phoneNumber")?.focus();
      return;
    }

    router.push("/thank-you");
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setIsSubjectOpen(false);
  };

  return (
    <main className="before">
      <div className="frameParent">
        <div className="contactUsParent">
          <h1 className="contactUs" style={{ margin: 0, padding: 0, fontSize: "inherit", fontWeight: "bold", fontFamily: "inherit", color: "inherit" }}>
            Contact Us
          </h1>

          <div className="shieldCheckParent">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" >
              <path d="M24.4902 13.042V9.65513C24.4902 7.7418 24.4902 6.78512 24.0188 6.16096C23.5473 5.5368 22.4814 5.23378 20.3494 4.62774C18.8928 4.21369 17.6088 3.71486 16.5829 3.25946C15.1842 2.63857 14.4848 2.32812 13.9902 2.32812C13.4956 2.32812 12.7963 2.63857 11.3976 3.25946C10.3717 3.71486 9.0877 4.21368 7.63112 4.62774C5.49914 5.23378 4.43316 5.5368 3.9617 6.16096C3.49023 6.78512 3.49023 7.7418 3.49023 9.65513V13.042C3.49023 19.6047 9.3968 23.5422 12.3498 25.1008C13.0581 25.4746 13.4123 25.6615 13.9902 25.6615C14.5682 25.6615 14.9223 25.4746 15.6306 25.1008C18.5836 23.5422 24.4902 19.6047 24.4902 13.042Z" stroke="#2D4CC8" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M10.0156 14.8888C10.0156 14.8888 11.0365 14.8888 12.0573 16.8333C12.0573 16.8333 15.2999 11.9722 18.1823 11" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <h2 className="weNeverShare" style={{ margin: 0, padding: 0, fontSize: "inherit", fontWeight: "bold", fontFamily: "inherit", color: "inherit" }}>
              We Never Share Your Data
            </h2>
          </div>
        </div>

        <div className="frameWrapper">
          <form className="frameGroup" onSubmit={handleSubmit} noValidate>
            <div className="frameContainer">
              <div className="frameDiv">
                <div className="frameWrapper2">
                  <div className="frameWrapper3">
                    <div className="fullNameParent">
                      <label className="fullName" htmlFor="fullName">
                        Full Name
                      </label>

                      <div className={`frameChild ${fullName ? "fieldHasValue" : ""}`}>
                        <div className="fieldContent">
                          <span className="fieldIconCircle">
                            <Image className="fieldIcon" src="/icons/user.svg" width={20} height={20} alt="" aria-hidden="true" />
                          </span>

                          <input id="fullName" className="contactInput" type="text" name="fullName" autoComplete="name" placeholder="Enter your name" value={fullName} onChange={(event) => setFullName(event.target.value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " "))} inputMode="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="emailAddressParent emailFieldGroup">
                  <label className="emailAddress" htmlFor="emailAddress">
                    Email Address
                  </label>

                  <div className={`frameWrapper4 ${isEmailValid ? "fieldHasValue" : ""} ${showEmailError ? "fieldHasError" : ""}`}>
                    <div className="frameWrapper5">
                      <div className="frameParent2">
                        <span className="fieldIconCircle">
                          <Image className="fieldIcon" src="/icons/mail.svg" width={20} height={20} alt="" aria-hidden="true" />
                        </span>

                        <input
                          id="emailAddress"
                          className="contactInput"
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="Enter your email address"
                          value={emailAddress}
                          onChange={(event) => {
                            setEmailAddress(event.target.value.trim());
                            if (emailTouched) {
                              setEmailTouched(true);
                            }
                          }}
                          onBlur={() => setEmailTouched(true)}
                          aria-invalid={showEmailError}
                          aria-describedby={showEmailError ? "emailAddressError" : undefined}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {showEmailError && (
                    <small id="emailAddressError" className="emailValidationMessage" role="alert">
                      Enter a valid email address
                    </small>
                  )}
                </div>

                <div className="emailAddressParent">
                  <label className="emailAddress" htmlFor="phoneNumber">
                    Phone Number
                  </label>

                  <div className="frameParent3">
                    <div className={`frameInner countrySelectField ${countryCode ? "fieldHasValue" : ""}`}>
                      <button
                        className="countryCodeSelect"
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={isCountryOpen}
                        onClick={() => {
                          setIsCountryOpen((open) => {
                            const nextOpen = !open;

                            if (nextOpen) {
                              setCountrySearch("");
                            }

                            return nextOpen;
                          });
                        }}>
                        <output className="countryCodeLabel">{selectedCountry?.shortLabel || "Select"}</output>

                        <Image className={`countryArrowIcon ${isCountryOpen ? "countryArrowOpen" : ""}`} src="/icons/arrowdown.svg" width={20} height={20} alt="" aria-hidden="true" />
                      </button>

                      {isCountryOpen && (
                        <div className="countryCodeDropdown" role="listbox" aria-label="Select country code">
                          <div className="countrySearchWrapper">
                            <input className="countrySearchInput" type="search" value={countrySearch} onChange={(event) => setCountrySearch(event.target.value)} placeholder="Search country" aria-label="Search country" autoFocus />
                          </div>

                          <div className="countryOptionsList">
                            {filteredCountryOptions.length > 0 ? (
                              filteredCountryOptions.map((country) => (
                                <button
                                  key={country.value}
                                  className={`countryCodeOption ${countryCode === country.value ? "countryCodeOptionSelected" : ""}`}
                                  type="button"
                                  role="option"
                                  aria-selected={countryCode === country.value}
                                  onClick={() => {
                                    setCountryCode(country.value);
                                    setPhoneNumber("");
                                    setPhoneTouched(false);
                                    setCountrySearch("");
                                    setIsCountryOpen(false);
                                  }}>
                                  {country.label}
                                </button>
                              ))
                            ) : (
                              <p className="countryNoResults" style={{ margin: 0 }}>
                                No country found
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      <input type="hidden" name="countryCode" value={countryCode} />
                    </div>

                    <div className={`frameIcon ${isPhoneValid ? "fieldHasValue" : ""} ${showPhoneError ? "fieldHasError" : ""}`}>
                      <span className="phoneIconCircle">
                        <Image className="phoneIcon" src="/icons/call.svg" width={20} height={20} alt="" aria-hidden="true" />
                      </span>

                      <input
                        id="phoneNumber"
                        className="contactInput phoneNumberInput"
                        type="tel"
                        name="phoneNumber"
                        autoComplete="tel-national"
                        placeholder="XXXXXXXXXX"
                        value={phoneNumber}
                        maxLength={phoneMaxLength}
                        inputMode="numeric"
                        onChange={(event) => {
                          const nextPhoneNumber = event.target.value.replace(/[^0-9]/g, "").slice(0, phoneMaxLength);

                          setPhoneNumber(nextPhoneNumber);

                          if (phoneTouched) {
                            setPhoneTouched(true);
                          }
                        }}
                        onBlur={() => setPhoneTouched(true)}
                        aria-invalid={showPhoneError}
                        aria-describedby={showPhoneError ? "phoneNumberError" : undefined}
                        required
                      />
                    </div>
                  </div>

                  {showPhoneError && (
                    <small id="phoneNumberError" className="phoneValidationMessage" role="alert">
                      Enter a valid phone number for the selected country
                    </small>
                  )}
                </div>

                <div className="emailAddressParent subjectField">
                  <label className="emailAddress" id="subjectLabel">
                    Subject
                  </label>

                  <button className={`frameParent4 ${selectedSubject ? "subjectHasValue" : ""}`} type="button" aria-labelledby="subjectLabel selectedSubjectValue" aria-haspopup="listbox" aria-expanded={isSubjectOpen} onClick={() => setIsSubjectOpen((open) => !open)}>
                    <span className="subjectIconCircle">
                      <Image className="subjectIcon" src="/icons/message.svg" width={20} height={20} alt="" aria-hidden="true" />
                    </span>

                    <output id="selectedSubjectValue" className={`selectedSubjectText ${selectedSubject ? "hasSubjectValue" : ""}`}>
                      {selectedSubject || "Select a subject"}
                    </output>

                    <Image className={`arrowDown01Icon ${isSubjectOpen ? "subjectArrowOpen" : ""}`} src="/icons/arrowdown.svg" width={20} height={20} alt="" aria-hidden="true" />
                  </button>

                  {isSubjectOpen && (
                    <div className="subjectDropdown" role="listbox" aria-labelledby="subjectLabel">
                      {subjectOptions.map((subject) => {
                        const isSelected = selectedSubject === subject;

                        return (
                          <button key={subject} className={`subjectOption ${isSelected ? "subjectOptionSelected" : ""}`} type="button" role="option" aria-selected={isSelected} onClick={() => handleSubjectSelect(subject)}>
                            <span className="subjectRadio">{isSelected && <Image className="subjectRadioTick" src="/icons/bluetick.svg" width={17} height={17} alt="" aria-hidden="true" />}</span>

                            <output className="subjectOptionText">{subject}</output>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <input type="hidden" name="subject" value={selectedSubject} />
                </div>

                <div className="frameParent5">
                  <div className="frameWrapper7">
                    <div className="messageWrapper">
                      <label className="message" htmlFor="message">
                        Message
                      </label>
                    </div>
                  </div>

                  <div className="frameParent6">
                    <div className="frameWrapper8">
                      <div className="typeYourMessageHereWrapper">
                        <textarea id="message" className="typeYourMessage" name="message" placeholder="Type your message here....." rows={6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <label className="frameParent7">
                <span className="checkboxControl">
                  <input className="frameChild2" type="checkbox" name="privacyConfirmation" aria-label="I confirm my information and agree to the Privacy Policy" />
                  <span className="checkboxVisual" aria-hidden="true">
                    <Image className="checkboxTickIcon" src="/icons/tick.svg" width={17} height={17} alt="" aria-hidden="true" />
                  </span>
                </span>

                <p className="iConfirmMyContainer" style={{ margin: 0 }}>
                  <small className="iConfirmMy" style={{ fontSize: "inherit" }}>
                    I confirm my information and agree to the{" "}
                  </small>
                  <a className="privacyPolicy" href="/privacy-policy">
                    Privacy Policy
                  </a>
                </p>
              </label>
            </div>

            <button className="frameWrapper9" type="submit">
              <div className="sendParent">
                <Image className="sendIcon" src="/icons/send.svg" width={24} height={24} alt="" aria-hidden="true" />
                <strong className="sendMessage">Send Message</strong>
              </div>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
