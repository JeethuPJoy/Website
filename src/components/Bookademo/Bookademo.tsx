"use client";

import styles from "./Bookademo.module.css";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true" focusable="false">
      <rect x="3" y="4.5" width="14" height="12.5" rx="1.5" stroke="#2F3547" strokeWidth="1.25" />
      <path d="M6.5 3V6" stroke="#2F3547" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M13.5 3V6" stroke="#2F3547" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M3 8.5H17" stroke="#2F3547" strokeWidth="1.25" />
      <path d="M7.5 12.5L9.1 14L13 10.5" stroke="#2F3547" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="7.5" stroke="#2F3547" strokeWidth="1.25" />
      <path d="M10 6V10L13 12" stroke="#2F3547" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
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

const countryCodeOptions = allCountries
  .map((country) => ({
    id: country.iso2,
    dialCode: `+${country.dialCode}`,
    label: country.name,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{7,15}$/;

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatIso(year: number, month: number, day: number) {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function formatDisplayDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTH_NAMES[month - 1].slice(0, 3)} ${year}`;
}

type CalendarCell = {
  day: number;
  iso: string | null;
  currentMonth: boolean;
  isPast: boolean;
};

function getCalendarCells(year: number, month: number): CalendarCell[] {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const cells: CalendarCell[] = [];

  for (let i = firstWeekday - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, iso: null, currentMonth: false, isPast: false });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cellDate = new Date(year, month, day);
    cells.push({ day, iso: formatIso(year, month, day), currentMonth: true, isPast: cellDate < startOfToday });
  }

  let trailingDay = 1;
  while (cells.length < 42) {
    cells.push({ day: trailingDay, iso: null, currentMonth: false, isPast: false });
    trailingDay += 1;
  }

  return cells;
}

type NeumorphicCalendarProps = {
  panelId: string;
  selectedDate: string;
  viewYear: number;
  viewMonth: number;
  yearOptions: number[];
  todayIso: string;
  onSelectDate: (iso: string) => void;
  onViewMonthChange: (month: number) => void;
  onViewYearChange: (year: number) => void;
};

function NeumorphicCalendar({ panelId, selectedDate, viewYear, viewMonth, yearOptions, todayIso, onSelectDate, onViewMonthChange, onViewYearChange }: NeumorphicCalendarProps) {
  const cells = getCalendarCells(viewYear, viewMonth);

  return (
    <div className={styles["book-demo-calendar-panel"]} role="dialog" aria-label="Choose a date" id={panelId}>
      <div className={styles["book-demo-calendar-controls"]}>
        <span className={styles["book-demo-calendar-select-wrap"]}>
          <select className={styles["book-demo-calendar-select"]} value={viewMonth} onChange={(event) => onViewMonthChange(Number(event.target.value))} aria-label="Month">
            {MONTH_NAMES.map((name, index) => (
              <option key={name} value={index}>
                {name}
              </option>
            ))}
          </select>
          <ChevronDownIcon className={styles["book-demo-calendar-select-chevron"]} />
        </span>
        <span className={styles["book-demo-calendar-select-wrap"]}>
          <select className={styles["book-demo-calendar-select"]} value={viewYear} onChange={(event) => onViewYearChange(Number(event.target.value))} aria-label="Year">
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <ChevronDownIcon className={styles["book-demo-calendar-select-chevron"]} />
        </span>
      </div>

      <div className={styles["book-demo-calendar-weekdays"]}>
        {WEEKDAY_LABELS.map((label) => (
          <span key={label} className={styles["book-demo-calendar-weekday"]}>
            {label}
          </span>
        ))}
      </div>

      <div className={styles["book-demo-calendar-grid"]}>
        {cells.map((cell, index) => {
          const isSelectable = cell.currentMonth && !cell.isPast;
          const classNames = [styles["book-demo-calendar-day"]];
          if (!cell.currentMonth) classNames.push(styles["book-demo-calendar-day-muted"]);
          if (cell.iso === selectedDate) classNames.push(styles["book-demo-calendar-day-selected"]);
          if (cell.iso === todayIso) classNames.push(styles["book-demo-calendar-day-today"]);
          return (
            <button key={index} type="button" className={classNames.join(" ")} disabled={!isSelectable} onClick={() => cell.iso && onSelectDate(cell.iso)}>
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookADemo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    countryCode: false,
    phone: false,
    date: false,
    time: false,
  });

  const now = new Date();
  const todayIso = formatIso(now.getFullYear(), now.getMonth(), now.getDate());
  const currentYear = now.getFullYear();
  const yearOptions = [currentYear, currentYear + 1, currentYear + 2];

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [viewYear, setViewYear] = useState(currentYear);
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const dateFieldRef = useRef<HTMLDivElement | null>(null);
  const dateButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isCalendarOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (dateFieldRef.current && !dateFieldRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCalendarOpen(false);
        dateButtonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCalendarOpen]);

  const isFullNameValid = fullName.trim().length > 0;
  const isEmailValid = emailPattern.test(email.trim());
  const isCountryCodeValid = countryCode.trim().length > 0;
  const isPhoneValid = phonePattern.test(phone.trim());
  const isDateValid = dateValue.trim().length > 0;
  const isTimeValid = timeValue.trim().length > 0;
  const isFormValid = isFullNameValid && isEmailValid && isCountryCodeValid && isPhoneValid && isDateValid && isTimeValid && consent;

  const markTouched = (field: keyof typeof touched) => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const toggleCalendar = () => {
    setIsCalendarOpen((open) => {
      const next = !open;
      if (next && dateValue) {
        const [year, month] = dateValue.split("-").map(Number);
        setViewYear(year);
        setViewMonth(month - 1);
      }
      return next;
    });
  };

  const handleSelectDate = (iso: string) => {
    setDateValue(iso);
    setIsCalendarOpen(false);
    dateButtonRef.current?.focus();
  };

  const nameId = useId();
  const emailId = useId();
  const countryId = useId();
  const phoneId = useId();
  const dateId = useId();
  const timeId = useId();
  const messageId = useId();
  const consentId = useId();
  const headingId = useId();
  const calendarPanelId = useId();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setTouched({ fullName: true, email: true, countryCode: true, phone: true, date: true, time: true });
    if (!isFormValid) return;
  };

  return (
    <section className={styles["book-demo-section"]} aria-labelledby={headingId}>
      <div className={styles["book-demo-card"]}>
        <div className={styles["book-demo-header"]}>
          <h2 className={styles["book-demo-title"]} id={headingId}>
            Book a Demo
          </h2>
          {/* <p className={styles["book-demo-subtitle"]}>
            <PresentationIcon className={styles["book-demo-subtitle-icon"]} />
            Schedule Your Personalized Demo
          </p> */}
        </div>

        <form className={styles["book-demo-form"]} onSubmit={handleSubmit}>
          <div className={styles["book-demo-field"]}>
            <label htmlFor={nameId} className={styles["book-demo-label"]}>
              Full Name
            </label>
            <div className={styles["book-demo-input-wrap"]}>
              <span className={styles["book-demo-input-icon"]} aria-hidden="true">
                <UserIcon />
              </span>
              <input
                id={nameId}
                type="text"
                className={styles["book-demo-input"]}
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
              <p id={`${nameId}-error`} className={styles["book-demo-error"]} role="alert">
                Please enter your full name.
              </p>
            )}
          </div>

          <div className={styles["book-demo-field"]}>
            <label htmlFor={emailId} className={styles["book-demo-label"]}>
              Email Address
            </label>
            <div className={styles["book-demo-input-wrap"]}>
              <span className={styles["book-demo-input-icon"]} aria-hidden="true">
                <MailIcon />
              </span>
              <input
                id={emailId}
                type="email"
                className={styles["book-demo-input"]}
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
              <p id={`${emailId}-error`} className={styles["book-demo-error"]} role="alert">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <div className={styles["book-demo-field"]}>
            <label htmlFor={phoneId} className={styles["book-demo-label"]}>
              Phone Number
            </label>
            <div className={styles["book-demo-phone-row"]}>
              <div className={styles["book-demo-country-wrap"]}>
                <label htmlFor={countryId} className={styles["sr-only"]}>
                  Country code
                </label>
                <select
                  id={countryId}
                  className={`${styles["book-demo-select-field"]} ${styles["book-demo-country-select"]}`}
                  value={countryCode}
                  onChange={(event) => setCountryCode(event.target.value)}
                  onBlur={() => markTouched("countryCode")}
                  aria-invalid={touched.countryCode && !isCountryCodeValid}
                  aria-describedby={touched.countryCode && !isCountryCodeValid ? `${countryId}-error` : undefined}
                  required>
                  <option value="" disabled>
                    Select
                  </option>
                  {countryCodeOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.dialCode}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className={styles["book-demo-select-chevron"]} />
              </div>
              <div className={`${styles["book-demo-input-wrap"]} ${styles["book-demo-phone-wrap"]}`}>
                <span className={styles["book-demo-input-icon"]} aria-hidden="true">
                  <PhoneIcon />
                </span>
                <input
                  id={phoneId}
                  type="tel"
                  className={styles["book-demo-input"]}
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
            {touched.countryCode && !isCountryCodeValid && (
              <p id={`${countryId}-error`} className={styles["book-demo-error"]} role="alert">
                Please select a country code.
              </p>
            )}
            {touched.phone && !isPhoneValid && (
              <p id={`${phoneId}-error`} className={styles["book-demo-error"]} role="alert">
                Please enter a valid phone number (digits only).
              </p>
            )}
          </div>

          <div className={styles["book-demo-field"]}>
            <label htmlFor={dateId} className={styles["book-demo-label"]}>
              Preferred Demo Date and Time
            </label>
            <div className={styles["book-demo-datetime-row"]}>
              <div className={styles["book-demo-date-wrap"]} ref={dateFieldRef}>
                <button
                  type="button"
                  id={dateId}
                  ref={dateButtonRef}
                  className={`${styles["book-demo-input-wrap"]} ${styles["book-demo-date-trigger"]}`}
                  onClick={toggleCalendar}
                  onBlur={() => markTouched("date")}
                  aria-haspopup="dialog"
                  aria-expanded={isCalendarOpen}
                  aria-controls={calendarPanelId}
                  aria-invalid={touched.date && !isDateValid}
                  aria-describedby={touched.date && !isDateValid ? `${dateId}-error` : undefined}>
                  <span className={styles["book-demo-input-icon"]} aria-hidden="true">
                    <CalendarIcon />
                  </span>
                  <span className={`${styles["book-demo-input"]} ${styles["book-demo-date-display"]}${dateValue ? "" : ` ${styles["book-demo-date-placeholder"]}`}`}>{dateValue ? formatDisplayDate(dateValue) : "Select your preferred Date"}</span>
                </button>
                {isCalendarOpen && (
                  <NeumorphicCalendar
                    panelId={calendarPanelId}
                    selectedDate={dateValue}
                    viewYear={viewYear}
                    viewMonth={viewMonth}
                    yearOptions={yearOptions}
                    todayIso={todayIso}
                    onSelectDate={handleSelectDate}
                    onViewMonthChange={setViewMonth}
                    onViewYearChange={setViewYear}
                  />
                )}
              </div>

              <div className={`${styles["book-demo-input-wrap"]} ${styles["book-demo-time-wrap"]}`}>
                <span className={styles["book-demo-input-icon"]} aria-hidden="true">
                  <ClockIcon />
                </span>
                <label htmlFor={timeId} className={styles["sr-only"]}>
                  Preferred time
                </label>
                <input
                  id={timeId}
                  type="time"
                  className={`${styles["book-demo-input"]} ${styles["book-demo-time-input"]}`}
                  value={timeValue}
                  onChange={(event) => setTimeValue(event.target.value)}
                  onBlur={() => markTouched("time")}
                  aria-invalid={touched.time && !isTimeValid}
                  aria-describedby={touched.time && !isTimeValid ? `${timeId}-error` : undefined}
                  required
                />
              </div>
            </div>
            {touched.date && !isDateValid && (
              <p id={`${dateId}-error`} className={styles["book-demo-error"]} role="alert">
                Please select a preferred date.
              </p>
            )}
            {touched.time && !isTimeValid && (
              <p id={`${timeId}-error`} className={styles["book-demo-error"]} role="alert">
                Please select a preferred time.
              </p>
            )}
          </div>

          <div className={styles["book-demo-field"]}>
            <label htmlFor={messageId} className={styles["book-demo-label"]}>
              Message
            </label>
            <div className={styles["book-demo-textarea-wrap"]}>
              <textarea id={messageId} className={styles["book-demo-textarea"]} placeholder="Type your message here....." value={message} onChange={(event) => setMessage(event.target.value)} rows={5} />
              <ResizeIcon className={styles["book-demo-resize-icon"]} />
            </div>
          </div>

          <div className={styles["book-demo-consent-row"]}>
            <span className={styles["book-demo-checkbox-wrap"]}>
              <input
                id={consentId}
                type="checkbox"
                className={styles["book-demo-checkbox-input"]}
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                aria-label="I agree to be contacted for the platform demo and accept the Privacy Policy of Prgeeq Global Solutions Private Limited."
                required
              />
              <span className={styles["book-demo-checkbox-box"]} aria-hidden="true">
                <CheckIcon className={styles["book-demo-check-icon"]} />
              </span>
            </span>
            <p className={styles["book-demo-consent-text"]}>
              I agree to be contacted for the platform demo and accept the{" "}
              <Link href="/privacy-policy" className={styles["book-demo-privacy-link"]}>
                Privacy Policy
              </Link>{" "}
              of <strong>Prgeeq Global Solutions Private Limited.</strong>
            </p>
          </div>

          <button type="submit" className={styles["book-demo-submit"]} disabled={!isFormValid}>
            Book a Demo
          </button>
        </form>
      </div>
    </section>
  );
}