import React from "react";
import Section from "../section/Section";
import Card from "../card/Card";
import { UserRoundCheck, Users } from "lucide-react";

function CardSection() {
  return (
    <Section>
      <div className="flex flex-wrap justify-start items-center gap-5">
        <Card title="Appointments Done" icon={<UserRoundCheck className='size-4' />} statsNumber={46} />
        <Card title="Total Appointments" icon={<Users className='size-4' />} statsNumber={59} />
      </div>
    </Section>
  );
}

export default CardSection;
