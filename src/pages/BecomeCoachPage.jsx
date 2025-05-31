import React from "react";
import "./BecomeACoachPage.css"; 
import TestimonialCarousel from "./TestimonialCarousel";
import FaqSection from "./FaqSection";

const BecomeCoachPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 bg-white">
      {/* Main Section with Button */}
      <div className="px-12 md:px-36">
        <div className="max-w-4xl">
          <p className="text-blue-600 font-bold mb-3">
            Ready to become a coach?
          </p>
          <h1 className="text-4xl sm:text-6xl leading-tight mb-6">
            <div className="font-normal mb-4">Turn your expertise</div>
            <div>
              <span className="font-normal">into a </span>
              <span className="font-bold">business</span>
            </div>
          </h1>
          <button className="text-white mt-24 outline-none border-none bg-[#1273eb] py-[13px] px-[30px] text-[18px] rounded-[12px] font-medium flex gap-[10px] items-center">
            Apply to coach! →
          </button>
        </div>
      </div>

      {/* Black Banner Section - Full Width */}
      <div className="w-full bg-black text-white text-center py-6 px-4 mt-32">
        <h2 className="text-4xl md:text-5xl font-medium mb-4 flex justify-center items-center gap-2 flex-wrap text-center">
          <span className="w-full md:w-auto">Earn on your</span>
          <span className="block md:inline-block">
            <img
              src="https://instacoach.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection2.fa4e66bc.png&w=640&q=75"
              alt="dollar icon"
              className="mx-auto md:mx-0"
              style={{ width: "110px", height: "130px" }}
            />
          </span>
          <span className="w-full md:w-auto">schedule</span>
        </h2>

        <p className="text-lg mt-2">Earn upwards of $2,500/mo on your terms</p>
      </div>

      {/* What We Offer Section - Full Width */}
      <div className="w-full px-6 md:px-20 py-20 bg-white grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex items-center justify-start md:justify-center">
          <h3 className="text-[30px] font-bold text-left md:text-center">
            What we offer
          </h3>
        </div>

        <div>
          <h3 className="text-[30px] font-bold">24/7 Support</h3>
          <p className="text-[17px] leading-[28px] mt-4">
            Instacoach has a dedicated support staff to help you and your
            customers deal with any issues they have using the app or with their
            lessons.
          </p>
        </div>
        <div>
          <h3 className="text-[30px] font-bold">
            Tools to manage your business
          </h3>
          <p className="text-[17px] leading-[28px] mt-4">
            Our engineering team is always innovating to provide you with the
            tools you need to manage your business on Instacoach.
          </p>
        </div>
      </div>

      {/* Section - Step 2: Book a Session */}

      {/* ✅ Mobile Layout - Only shows on mobile */}
      <section className="how-it-works-steps-section px-6 py-12 block md:hidden">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Step Number & Title */}
          <div className="relative w-full flex justify-center">
            <span className="text-[100px] text-[#e3e3e3] font-bold leading-none select-none">
              1
            </span>
            <h3 className="absolute top-1/2 -translate-y-1/2 text-[24px] font-semibold text-black">
              Get approved
            </h3>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/get-approved.png"
              alt="Get Approved"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Paragraph */}
          <p className="text-[16px] text-left">
            Fill out the coach application, and within 2 weeks your Instacoach
            profile will get approved
          </p>
        </div>
      </section>

      {/* ✅ Desktop Layout - Only shows on md and up */}
      <section className="how-it-works-steps-section px-6 hidden md:block">
        <div className="steps-and-details-container2 px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image */}
          <div className="steps-container w-full md:w-1/2">
            <div className="step-4">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/get-approved.png"
                className="w-full h-auto"
                alt="Group Lesson"
              />
            </div>
          </div>

          {/* Step Number + Text */}
          <div className="step-description2 flex flex-col-reverse md:flex-row gap-6 mt-6 w-full md:w-1/2 items-center md:items-start text-center md:text-left">
            {/* Step Number */}
            <div>
              <span className="text-[60px] md:text-[100px] font-bold text-[#e3e3e3] leading-none">
                1
              </span>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[24px] md:text-[30px] font-semibold mb-2">
                Get approved
              </h3>
              <p className="text-[16px] md:text-[17px] text-gray-700">
                Fill out the coach application, and within 2 weeks your
                Instacoach profile will get approved.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works-steps-section px-6 py-12 block md:hidden">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Step Number & Title */}
          <div className="relative w-full flex justify-center">
            <span className="text-[100px] text-[#e3e3e3] font-bold leading-none select-none">
              2
            </span>
            <h3 className="absolute top-1/2 -translate-y-1/2 text-[24px] font-semibold text-black">
              Coach lessons
            </h3>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/coach-lessons.png"
              alt="Get Approved"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Paragraph */}
          <p className="text-[16px] text-left">
            Effortlessly set up your profile, allowing you to showcase your
            expertise, set your schedule, rates, and connect with aspiring
            athletes around your school or worldwide!
          </p>
        </div>
      </section>
      <section className="how-it-works-steps-section px-6 hidden md:block">
        <div className="steps-and-details-container2">
          <div className="step-description2  gap-8 mt-6 flex items-center content-center justify-center">
            <div className="">
              <span className="text-[100px] font-bold text-[#e3e3e3] mt-[-20px] leading-none">
                2
              </span>
            </div>

            <div>
              <h3 className="text-[30px] font-semibold mb-2">Coach lessons</h3>

              <p className="text-[17px] text-gray-700 ">
                Effortlessly set up your profile, allowing you to showcase your
                expertise, set your schedule, rates, and connect with aspiring
                athletes around your school or worldwide!
              </p>
            </div>
          </div>
          <div className="steps-container">
            <div className="step-4">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/coach-lessons.png"
                className="w-[99%] h-auto"
                alt="Group Lesson"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works-steps-section px-6 py-12 block md:hidden">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Step Number & Title */}
          <div className="relative w-full flex justify-center">
            <span className="text-[100px] text-[#e3e3e3] font-bold leading-none select-none">
              3
            </span>
            <h3 className="absolute top-1/2 -translate-y-1/2 text-[24px] font-semibold text-black">
              Submit and get paid!
            </h3>
          </div>

          {/* Image */}
          <div className="steps-container relative flex justify-center">
            {/* Video (background layer) */}
            <div className="step-card2">
              <video
                className="coach-video"
                controls
                muted
                autoPlay
                loop
                playsInline
              >
                <source
                  src="https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/submit-and-get-paid-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Image (foreground layer) */}
            <img
              src="https://instacoach.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection-4-dollars.fd3cae0f.png&w=640&q=75"
              className="step-8 absolute top-[-40px] z-10"
              alt="Water Polo Player"
            />
            <img
              src="https://instacoach.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection4-payment.8ffbe6cf.png&w=828&q=75"
              className="step-9 absolute top-[-40px] z-10"
              alt="Water Polo Player"
            />
          </div>

          {/* Paragraph */}
          <p className="text-[17px] text-left">
            Record your 30-60 post session video recapping your session and
            setting up your students for their next session with you.
          </p>

          <p className="text-[17px] text-left mt-4">
            Within 24 hours of submitting your post session video get paid
            directly to your bank account!
          </p>
        </div>
      </section>
      <section className="how-it-works-steps-section px-6 py-20 hidden md:block">
        <div className="steps-and-details-container2 px-20">
          <div className="steps-container relative flex justify-center">
            {/* Video (background layer) */}
            <div className="step-card2">
              <video
                className="coach-video"
                controls
                muted
                autoPlay
                loop
                playsInline
              >
                <source
                  src="https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/submit-and-get-paid-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Image (foreground layer) */}
            <img
              src="https://instacoach.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection-4-dollars.fd3cae0f.png&w=640&q=75"
              className="step-8 absolute top-[-40px] z-10"
              alt="Water Polo Player"
            />
            <img
              src="https://instacoach.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection4-payment.8ffbe6cf.png&w=828&q=75"
              className="step-9 absolute top-[-40px] z-10"
              alt="Water Polo Player"
            />
          </div>

          {/* <div className="steps-container">
            <div className="step-card step-1">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/improve-frame1.jpg"
                className="coach-image"
                alt="Water Polo Player"
              />
            </div>

            <div className="step-card step-7">
              <video
                className="coach-video"
                controls
                muted
                autoPlay
                loop
                playsInline
              >
                <source
                  src=""
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div> */}

          <div className="step-description2 custom-max-width  gap-8 mt-6 flex items-center content-center justify-center">
            {/* Styled Number */}
            <div className="">
              <span className="text-[100px] font-bold text-[#e3e3e3] pb-4">
                3
              </span>
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-[30px] font-semibold mb-2">
                Submit and get paid!
              </h3>

              <p className="text-[17px] text-gray-700">
                Record your 30-60 post session video recapping your session and
                setting up your students for their next session with you.
              </p>

              <p className="text-[17px] text-gray-700 mt-4">
                Within 24 hours of submitting your post session video get paid
                directly to your bank account!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="testimonial-section">
        <div className="testimonial-carousel">
          <button className="nav left">←</button>

          <div className="testimonial-card">
            <img
              className="testimonial-img"
              src="https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/testimonial-kennedy-wesley.png"
              alt="Kennedy Wesley"
            />
            <div className="testimonial-text">
              <p>
                "I love Instacoach because it has provided me with the
                opportunity to connect with younger athletes pursuing high
                athletic goals! Instacoach adjusts things quickly to our busy
                schedules and has increased my number of clients significantly!
                I have made thousands of dollars since joining only a few months
                ago and have been so happy with the platform!"
              </p>
              <p className="testimonial-author">
                <strong>Kennedy Wesley, Stanford Soccer</strong>
              </p>
            </div>
          </div>

          <button className="nav right">→</button>
        </div>
      </section> */}
      <TestimonialCarousel />
      <FaqSection />
    </div>
  );
};

export default BecomeCoachPage;
