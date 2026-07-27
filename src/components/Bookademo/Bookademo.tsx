"use client";

import "./Bookademo.css";
import Link from "next/link";
import { useId, useState } from "react";
import { allCountries } from "country-telephone-data";

function PresentationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true" focusable="false">
      <rect x="2.92" y="4.08" width="22.17" height="15.17" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M14 19.25V23.33" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8.17 23.33H19.83" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="10" cy="6.5" r="3.25" stroke="#2F3547" strokeWidth="1.25" />
      <path d="M3.75 16.75C3.75 13.16 6.55 10.75 10 10.75C13.45 10.75 16.25 13.16 16.25 16.75" stroke="#2F3547" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="#2F3547" strokeWidth="1.25" />
      <path d="M3.5 5.5L10 11L16.5 5.5" stroke="#2F3547" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"
        fill="#2F3547"
      />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="7.5" stroke="#2F3547" strokeWidth="1.25" />
      <circle cx="10" cy="10" r="4.5" stroke="#2F3547" strokeWidth="1.25" />
      <circle cx="10" cy="10" r="1.5" fill="#2F3547" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="#2F3547" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ResizeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M19 5L5 19M19 11L11 19M19 17L17 19" stroke="#2F3547" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const primaryRequirementOptions = ["Dummy Option 1", "Dummy Option 2", "Dummy Option 3", "Dummy Option 4"];

const countryCodeOptions = allCountries
  .map((country) => ({
    id: country.iso2,
    dialCode: `+${country.dialCode}`,
    label: country.name,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const defaultCountryOption = countryCodeOptions.find((option) => option.id === "in") ?? countryCodeOptions[0];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{7,15}$/;

export default function BookADemo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState(defaultCountryOption.id);
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    requirement: false,
  });

  const isFullNameValid = fullName.trim().length > 0;
  const isEmailValid = emailPattern.test(email.trim());
  const isPhoneValid = phonePattern.test(phone.trim());
  const isRequirementValid = requirement.trim().length > 0;
  const isFormValid = isFullNameValid && isEmailValid && isPhoneValid && isRequirementValid && consent;

  const markTouched = (field: keyof typeof touched) => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const nameId = useId();
  const emailId = useId();
  const countryId = useId();
  const phoneId = useId();
  const requirementId = useId();
  const messageId = useId();
  const consentId = useId();
  const headingId = useId();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTouched({ fullName: true, email: true, phone: true, requirement: true });
    if (!isFormValid) return;
  };

  return (
    <section className="book-demo-section" aria-labelledby={headingId}>
      <div className="book-demo-card">
        <div className="book-demo-header">
          <h2 className="book-demo-title" id={headingId}>
            Book a Demo
          </h2>
          <p className="book-demo-subtitle">
            <PresentationIcon className="book-demo-subtitle-icon" />
            Schedule Your Personalized Demo
          </p>
        </div>

        <form className="book-demo-form" onSubmit={handleSubmit}>
          <div className="book-demo-field">
            <label htmlFor={nameId} className="book-demo-label">
              Full Name
            </label>
            <div className="book-demo-input-wrap">
              <span className="book-demo-input-icon" aria-hidden="true">
                <UserIcon />
              </span>
              <input
                id={nameId}
                type="text"
                className="book-demo-input"
                placeholder="Enter your name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                onBlur={() => markTouched("fullName")}
                aria-invalid={touched.fullName && !isFullNameValid}
                aria-describedby={touched.fullName && !isFullNameValid ? `${nameId}-error` : undefined}
                required
              />
            </div>
            {touched.fullName && !isFullNameValid && (
              <p id={`${nameId}-error`} className="book-demo-error" role="alert">
                Please enter your full name.
              </p>
            )}
          </div>

          <div className="book-demo-field">
            <label htmlFor={emailId} className="book-demo-label">
              Email Address
            </label>
            <div className="book-demo-input-wrap">
              <span className="book-demo-input-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <input
                id={emailId}
                type="email"
                className="book-demo-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => markTouched("email")}
                aria-invalid={touched.email && !isEmailValid}
                aria-describedby={touched.email && !isEmailValid ? `${emailId}-error` : undefined}
                required
              />
            </div>
            {touched.email && !isEmailValid && (
              <p id={`${emailId}-error`} className="book-demo-error" role="alert">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div className="book-demo-field">
            <label htmlFor={phoneId} className="book-demo-label">
              Phone Number
            </label>
            <div className="book-demo-phone-row">
              <div className="book-demo-country-wrap">
                <label htmlFor={countryId} className="sr-only">
                  Country code
                </label>
                <select id={countryId} className="book-demo-select-field book-demo-country-select" value={countryCode} onChange={(event) => setCountryCode(event.target.value)}>
                  {countryCodeOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {`${option.dialCode} ${option.label}`}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="book-demo-select-chevron" />
              </div>
              <div className="book-demo-input-wrap book-demo-phone-wrap">
                <span className="book-demo-input-icon" aria-hidden="true">
                  <PhoneIcon />
                </span>
                <input
                  id={phoneId}
                  type="tel"
                  className="book-demo-input"
                  placeholder="XXXXXXXXX"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  onBlur={() => markTouched("phone")}
                  aria-invalid={touched.phone && !isPhoneValid}
                  aria-describedby={touched.phone && !isPhoneValid ? `${phoneId}-error` : undefined}
                  required
                />
              </div>
            </div>
            {touched.phone && !isPhoneValid && (
              <p id={`${phoneId}-error`} className="book-demo-error" role="alert">
                Please enter a valid phone number (digits only).
              </p>
            )}
          </div>

          <div className="book-demo-field">
            <label htmlFor={requirementId} className="book-demo-label">
              Primary Requirement
            </label>
            <div className="book-demo-input-wrap">
              <span className="book-demo-input-icon" aria-hidden="true">
                <TargetIcon />
              </span>
              <select
                id={requirementId}
                className="book-demo-select-field"
                value={requirement}
                onChange={(event) => setRequirement(event.target.value)}
                onBlur={() => markTouched("requirement")}
                aria-invalid={touched.requirement && !isRequirementValid}
                aria-describedby={touched.requirement && !isRequirementValid ? `${requirementId}-error` : undefined}
                required>
                <option value="" disabled>
                  Select Primary Requirement
                </option>
                {primaryRequirementOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="book-demo-select-chevron" />
            </div>
            {touched.requirement && !isRequirementValid && (
              <p id={`${requirementId}-error`} className="book-demo-error" role="alert">
                Please select a primary requirement.
              </p>
            )}
          </div>

          <div className="book-demo-field">
            <label htmlFor={messageId} className="book-demo-label">
              Message
            </label>
            <div className="book-demo-textarea-wrap">
              <textarea id={messageId} className="book-demo-textarea" placeholder="Type your message here....." value={message} onChange={(event) => setMessage(event.target.value)} rows={5} />
              <ResizeIcon className="book-demo-resize-icon" />
            </div>
          </div>

          <div className="book-demo-consent-row">
            <span className="book-demo-checkbox-wrap">
              <input
                id={consentId}
                type="checkbox"
                className="book-demo-checkbox-input"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                aria-label="I agree to be contacted for the platform demo and accept the Privacy Policy of Prgeeq Global Solutions Private Limited."
                required
              />
              <span className="book-demo-checkbox-box" aria-hidden="true">
                <CheckIcon className="book-demo-check-icon" />
              </span>
            </span>
            <p className="book-demo-consent-text">
              I agree to be contacted for the platform demo and accept the{" "}
              <Link href="/privacy-policy" className="book-demo-privacy-link">
                Privacy Policy
              </Link>{" "}
              of <strong>Prgeeq Global Solutions Private Limited.</strong>
            </p>
          </div>

          <button type="submit" className="book-demo-submit" disabled={!isFormValid}>
            Book a Demo
          </button>
        </form>
      </div>
    </section>
  );
}