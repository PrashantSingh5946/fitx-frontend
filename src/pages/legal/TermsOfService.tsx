import { Card } from "@nextui-org/react";

export default function TermsOfService() {
  return (
    <>
      <Card className="dark flex flex-col bg-transparent p-5 ">
        <p>
          <h2>Terms of Service</h2>
          <p>
            <strong>1. Use of Service:</strong>
          </p>
          <p>
            By using our service, you agree to comply with these terms and any
            applicable laws and regulations.
          </p>

          <p>
            <strong>2. User Accounts:</strong>
          </p>
          <p>
            You may be required to create an account to access certain features
            of the service. You are responsible for maintaining the
            confidentiality of your account credentials.
          </p>

          <p>
            <strong>3. Intellectual Property:</strong>
          </p>
          <p>
            All content and materials provided through the service are owned or
            licensed by us and may not be reproduced without permission.
          </p>

          <p>
            <strong>4. Limitation of Liability:</strong>
          </p>
          <p>
            We are not liable for any damages arising from the use of the
            service, including but not limited to indirect, incidental, or
            consequential damages.
          </p>

          <p>
            <strong>5. Changes to Terms:</strong>
          </p>
          <p>
            We reserve the right to update or modify these terms at any time.
            Continued use of the service after any changes constitutes
            acceptance of the modified terms.
          </p>

          <p>
            <strong>6. Governing Law:</strong>
          </p>
          <p>
            These terms are governed by and construed in accordance with the
            laws of [your jurisdiction].
          </p>
        </p>
      </Card>
    </>
  );
}
