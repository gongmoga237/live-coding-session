import "./templateCard.css";

import templateImage from "../../assets/images/card_template.jpg";
import attendeeImage from "../../assets/images/default_attendee.svg";

interface TemplateCardProps {
  firstname?: string;
  lastname?: string;
  image_url?: string;
}

export default function TemplateCard({
  image_url,
  firstname,
  lastname,
}: TemplateCardProps) {
  const templateWidth = 2560;
  const templateHeight = 2557;

  const attendeeWidth = 470.2;
  const attendeeHeight = 311.4667;

  return (
    <section className="card">
      <img
        className="template"
        src={templateImage}
        alt="Template image"
        width={templateWidth}
        height={templateHeight}
      />

      <div className="attendee">
        <img
          src={image_url || attendeeImage}
          alt="Attendant image"
          width={attendeeWidth}
          height={attendeeHeight}
        />

        <div className="attendee_name">
          <span>{firstname}</span>
          {lastname && <span>{lastname}</span>}
        </div>
      </div>
    </section>
  );
}
