import React from 'react';
import './ExternalAssistance.css'; // Make sure to import the styles

const ExternalAssistance = () => {
  const organizations = [
    {
      name: 'National Commission for Protection of Child Rights (NCPCR)',
      description: 'NCPCR works to safeguard the rights of children and provides legal assistance to children facing abuse or legal issues related to child protection.',
      website: 'http://www.ncpcr.gov.in/',
      additionalInfo: 'NCPCR works under the Ministry of Women and Child Development and handles issues related to child rights and protection.',
    },
    {
      name: 'All India Legal Aid Forum (AILAF)',
      description: 'AILAF is a network of legal professionals and activists working to ensure that legal aid is available to marginalized and underprivileged communities across India.',
      website: 'http://www.ailaf.org/',
      additionalInfo: 'AILAF focuses on providing free legal advice and support to those in need, especially in rural and underserved areas.',
    },
    {
      name: 'Vakilno1',
      description: 'Vakilno1 is a platform offering legal services and a directory of lawyers, helping individuals find legal assistance across India.',
      website: 'https://www.vakilno1.com/',
      additionalInfo: 'It offers free consultations with lawyers and a platform for users to compare lawyers based on reviews and expertise.',
    },
    {
      name: 'LawRato',
      description: 'LawRato provides legal advice and a directory of lawyers, assisting individuals in finding the right legal professional for their needs.',
      website: 'https://www.lawrato.com/',
      additionalInfo: 'LawRato also allows users to ask free legal queries online, helping them with basic advice and assistance.',
    },
    {
      name: 'Supreme Court of India (SJC)',
      description: 'The Supreme Court of India offers information on social justice issues and legal aid, working to make legal services accessible to underprivileged sections of society.',
      website: 'http://sjc.gov.in/',
      additionalInfo: 'It provides resources and articles related to justice for marginalized groups and helps with understanding constitutional matters.',
    },
    {
      name: 'Lawyers Collective',
      description: 'Lawyers Collective is a prominent non-profit organization in India that works on legal aid, especially focusing on marginalized groups.',
      website: 'https://www.lawyerscollective.org/',
      additionalInfo: 'It provides legal services, advice, and representation in key areas like women’s rights, LGBTQ+ rights, and environmental law.',
    },
    {
      name: 'Indian Kanoon',
      description: 'Indian Kanoon provides access to a vast database of legal documents and judgments. It’s a useful resource for researching laws and understanding case precedents.',
      website: 'https://indiankanoon.org/',
      additionalInfo: 'Indian Kanoon is an essential tool for legal professionals and citizens to research legal cases, judgments, and related laws.',
    },
    {
      name: 'National Legal Services Authority (NALSA) - Lok Adalat',
      description: 'Lok Adalats are alternative dispute resolution mechanisms in India, offering an informal setting where cases are resolved through mutual consent.',
      website: 'https://nalsa.gov.in/lok-adalat',
      additionalInfo: 'NALSA organizes free legal aid clinics and Lok Adalats to resolve disputes in a fast and cost-effective manner.',
    },
    {
      name: 'National Legal Aid Portal',
      description: 'The National Legal Aid Portal provides information about legal aid services in India, including resources for the public to access free legal assistance.',
      website: 'https://www.legalaidservices.in/',
      additionalInfo: 'It helps users navigate the process of applying for free legal aid and provides step-by-step guidance on how to access various services.',
    },
    {
      name: 'National Commission for Women (NCW)',
      description: 'NCW offers legal help for women facing legal challenges, including domestic violence, harassment, and other rights violations.',
      website: 'https://ncw.nic.in/',
      additionalInfo: 'NCW works to promote and protect the rights of women and helps with legal support, counseling, and advice.',
    },
    {
      name: 'e-Courts',
      description: 'e-Courts provides access to online services of the Indian judiciary, where citizens can access court-related information, file cases, and get information about legal aid services provided by the government.',
      website: 'https://ecourts.gov.in/',
      additionalInfo: 'The e-Courts platform provides online case status, judgments, and the ability to file cases electronically for convenience.',
    },
    {
      name: 'SAMPARK',
      description: 'SAMPARK is an online platform offering free legal advice and connecting people with legal professionals for assistance.',
      website: 'https://www.samprekshan.org/',
      additionalInfo: 'SAMPARK focuses on providing quick responses to basic legal queries and connects users with lawyers for more in-depth consultations.',
    },
    {
      name: 'Pro Bono India',
      description: 'Pro Bono India connects individuals who cannot afford legal services with lawyers who provide pro bono (free) legal assistance.',
      website: 'https://probonoindia.org/',
      additionalInfo: 'Pro Bono India helps individuals with no financial means to get legal support through the efforts of legal professionals volunteering their time.',
    },
    {
      name: 'Human Rights Law Network (HRLN)',
      description: 'HRLN provides legal aid to individuals and communities facing human rights violations in India, offering both direct legal representation and advocacy.',
      website: 'https://www.hrln.org/',
      additionalInfo: 'HRLN is a major player in advocating for human rights, offering services to marginalized communities and fighting for justice.',
    },
  ];

  return (
    <div className="external-assistance">
      <h1>External Legal Assistance Resources</h1>
      <div className="organizations-list">
        {organizations.map((org, index) => (
          <div key={index} className="organization-card">
            <h2>{org.name}</h2>
            <p>{org.description}</p>
            <p><strong>Additional Info:</strong> {org.additionalInfo}</p>
            <a href={org.website} target="_blank" rel="noopener noreferrer" className="website-link">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExternalAssistance;
