import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UpButton from "../components/Up/UpButton";
import Heading from "../components/Custom/Heading/Heading";
import Paragraph from "../components/Custom/Paragragh/Paragraph";

export default function PrivacyPolicy() {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.4;

      setShowUpButton(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Heading
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[#000F5C]"
            title="Privacy Policy"
          />
          {/* <Link
            to="/"
            className="inline-block text-[#0d6efd] hover:text-black font-semibold text-lg transition-all duration-300"
          >
            ← Back to Home
          </Link> */}
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              1. Introduction
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed"
              title='Bibrow Solution Pvt. Ltd. ("Bibrow Solution," "we," "us," or "our") is committed to protecting the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you access or use our mobile games, websites, and other online services (collectively, the "Services"). Please read this Privacy Policy carefully to understand our practices regarding your information and how we will treat it.'
            />
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              2. Information We Collect
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="We do not directly collect any personal information from you when you use our Services. We do not require you to create an account or provide any personal details to access our games or services."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="The data collected by third parties is non-personally identifiable whenever possible, which can reassure users about their privacy."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="While we do not collect personal information directly, we do work with trusted third-party analytics and advertising partners who may collect certain information automatically as you interact with our Services. This information may include:"
            />

            <div className="ml-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#000F5C] mb-2">
                  a) Device Information
                </h3>
                <Paragraph
                  className="text-[#666F9D] text-lg leading-relaxed"
                  title="Data about the device you use to access our Services, such as device type, operating system, unique device identifiers, IP address, mobile network information, and information about the device's interaction with our Services."
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#000F5C] mb-2">
                  b) Usage Information
                </h3>
                <Paragraph
                  className="text-[#666F9D] text-lg leading-relaxed"
                  title="Data about how you interact with and use our Services, including gameplay data, session lengths, levels reached, in-game purchases, and other usage metrics."
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#000F5C] mb-2">
                  c) Location Information
                </h3>
                <Paragraph
                  className="text-[#666F9D] text-lg leading-relaxed"
                  title="Approximate geolocation data based on your IP address or mobile network information to provide you with location-based services or content."
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#000F5C] mb-2">
                  d) Advertising Data
                </h3>
                <Paragraph
                  className="text-[#666F9D] text-lg leading-relaxed"
                  title="Information about your interactions with advertisements displayed within our Services, including the type of advertisements viewed and whether you interacted with them."
                />
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              3. How We Use Your Information
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="We and our third-party partners use the information collected for various purposes, including:"
            />
            <ul className="list-disc ml-8 space-y-3 text-[#666F9D] text-lg leading-relaxed">
              <li>
                To improve and optimize our Services by analyzing usage trends,
                tracking performance metrics, and identifying areas for
                enhancement or bug fixes.
              </li>
              <li>
                To deliver customized content and personalized gaming
                experiences tailored to your preferences and gameplay behaviors.
              </li>
              <li>
                To serve targeted advertisements within our Services that may be
                more relevant to your interests and preferences based on your
                device information and interactions with our games.
              </li>
              <li>
                To comply with legal obligations, resolve disputes, prevent
                fraud or abuse, and enforce our Terms of Service.
              </li>
            </ul>
          </section>

          {/* Third-Party Analytics and Advertising Partners */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              4. Third-Party Analytics and Advertising Partners
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="We work with trusted third-party analytics and advertising partners to help us understand how our Services are being used, to provide targeted advertising, and to assist with other analytics and marketing efforts. These partners may collect and process information about your use of our Services as described above."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed"
              title="Please note that these third-party partners may have their own privacy policies governing their collection, use, and disclosure of information. We encourage you to review their privacy policies to understand their practices."
            />
          </section>

          {/* Advertising */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              5. Advertising
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="We display advertisements within our games through third-party advertising partners. These advertisements may be targeted based on information collected about your device, gameplay data, and interactions with the advertisements."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="Our advertising partners may use cookies, web beacons, and other tracking technologies to collect information about your interactions with the advertisements and your device. This information may be used to provide you with more relevant advertising content and to measure the effectiveness of advertising campaigns. Please note that these tracking technologies are used exclusively by our third-party partners and not directly by us."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed"
              title="We encourage you to review the privacy policies of our advertising partners to understand how they collect and use your information for advertising purposes. You may have options to control or block such tracking technologies through your device settings or by opting out directly on their websites."
            />
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              6. Children's Privacy
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="Our Services are not directed towards children under the age of 13, and we do not knowingly collect personal information from children under 13."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="If we become aware that we have inadvertently collected personal information from a child under 13 without parental consent, we will take reasonable steps to delete such information from our records as soon as possible."
            />
            <p className="text-[#666F9D] text-lg leading-relaxed">
              If you believe we may have collected personal information from a
              child under 13, please contact us at{" "}
              <a
                href="mailto:bibrowsolutionpvtlimited@gmail.com"
                className="text-[#0d6efd] hover:underline font-semibold"
              >
                bibrowsolutionpvtlimited@gmail.com
              </a>
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              7. Data Security
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed"
              title="We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure. However, no method of data transmission or storage is 100% secure, and we cannot guarantee the absolute security of your information. By using our Services, you acknowledge and accept that we cannot ensure or warrant the security of any information transmitted to or from our Services."
            />
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              8. Data Retention
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="We retain the information collected for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed"
              title="We may retain certain information in aggregated or de-identified form for analytics and statistical purposes."
            />
          </section>

          {/* Your Choices and Rights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              9. Your Choices and Rights
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="Depending on your location and applicable laws, you may have certain rights regarding your information, such as the right to access, correct, delete, or object to the processing of your information."
            />
            <p className="text-[#666F9D] text-lg leading-relaxed">
              If you would like to exercise any of these rights, please contact
              us at{" "}
              <a
                href="mailto:bibrowsolutionpvtlimited@gmail.com"
                className="text-[#0d6efd] hover:underline font-semibold"
              >
                bibrowsolutionpvtlimited@gmail.com
              </a>
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="The updated version will be effective as soon as it is accessible, and we encourage you to review this Privacy Policy periodically for any changes."
            />
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed"
              title="Your continued use of our Services after the effective date of the revised Privacy Policy constitutes your acceptance of the updated terms."
            />
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#000F5C] mb-4">
              11. Contact Us
            </h2>
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed mb-4"
              title="If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:"
            />
            <div className="bg-[#F8FBFF] p-6 rounded-lg border border-[#E0E6F0]">
              <p className="text-[#000F5C] font-bold text-xl mb-2">
                Bibrow Solution Pvt. Ltd.
              </p>
              <p className="text-[#666F9D] text-lg">
                Email:{" "}
                <a
                  href="mailto:bibrowsolutionpvtlimited@gmail.com"
                  className="text-[#0d6efd] hover:underline font-semibold"
                >
                  bibrowsolutionpvtlimited@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Final Note */}
          <section className="border-t border-[#E0E6F0] pt-8">
            <Paragraph
              className="text-[#666F9D] text-lg leading-relaxed italic"
              title="By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions."
            />
          </section>
        </div>
      </div>

      {showUpButton && (
        <div className="fixed md:bottom-12 md:right-12 bottom-4 right-4">
          <UpButton />
        </div>
      )}

      <Footer />
    </div>
  );
}
