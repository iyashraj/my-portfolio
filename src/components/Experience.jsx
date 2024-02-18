import React from "react";
import styled from "styled-components";

const experiencde_data = [
  {
    key: 1,
    company: "Brimming Grace",
    designation: "Frontend Developer",
    tenure: "Oct 2022 - Current",
  },
  {
    key: 2,
    company: "Valyu Ai",
    designation: "Frontend Developer Intern",
    tenure: "Jun 2022 - Sept 2022",
  },
  {
    key: 3,
    company: "Freelance",
    designation: "Freelance Frontend Developer",
    tenure: "May 2022 - May 2022",
  },
];

const SectionWrapper = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  .section {
    flex: 1;
    border: 1px solid gray;
    padding: 2% 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .company_name {
      font-size: 18px;
    }
    .designation,
    .tenure {
      font-size: 14px;
      color: gray;
    }
  }
`;

const Experience = () => {
  return (
    <SectionWrapper>
      {experiencde_data?.map((exp_data) => {
        const { company, designation, key, tenure } = exp_data;
        return (
          <div class="section" key={key}>
            <div className="company_name">{company}</div>
            <div className="designation">{designation}</div>
            <div className="tenure">{tenure}</div>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Experience;
