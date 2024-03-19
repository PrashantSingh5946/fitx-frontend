import { Card } from "@nextui-org/react";

export default function PrivacyPolicy() {
  return (
    <>
      <Card className="dark flex flex-col bg-transparent p-5 ">
        <h1>Privacy Policy</h1>
        <p>
          <strong>1. Information We Collect:</strong>
        </p>
        <p>We may collect personal information such as:</p>
        <ol>
          <li>Name</li>
          <li>Email address</li>
          <li>Age</li>
          <li>Gender</li>
          <li>Fitness goals</li>
          <li>Health data from Google Fit API</li>
        </ol>

        <p>
          <strong>2. How We Use Your Information:</strong>
        </p>
        <p>We use the information collected to:</p>
        <ul>
          <li>Provide personalized workout and diet recommendations</li>
          <li>Improve our services</li>
          <li>Respond to user inquiries and support requests</li>
        </ul>

        <p>
          <strong>3. Data Sharing:</strong>
        </p>
        <p>We may share your personal information with:</p>
        <ul>
          <li>
            Our service providers for the purpose of providing the services
          </li>
          <li>Third-party analytics services to analyze usage patterns</li>
        </ul>

        <p>
          <strong>4. Data Security:</strong>
        </p>
        <p>
          We take appropriate measures to secure your personal information, but
          no method of transmission over the internet or electronic storage is
          100% secure.
        </p>

        <p>
          <strong>5. User Rights:</strong>
        </p>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Object to the processing of your personal information</li>
          <li>Lodge a complaint with the relevant supervisory authority</li>
        </ul>
      </Card>
    </>
  );
}
