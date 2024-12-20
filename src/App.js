import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import SectionDisplay from "./components/SectionDisplay";
import NewsSection from "./components/NewsSection";
import FloatingChatbot from "./components/FloatingChatbot";
import Footer from "./components/Footer";
import YourRightsInAction from "./components/YourRightsInAction";
import GuessThePenalty from "./components/GuessThePenalty";
import GamesSection from "./components/GamesSection";
import SpotTheLawbreaker from "./components/SpotTheLawbreaker";
import ExternalAssistance from './components/ExternalAssistance';
import "./App.css";

const sections = [
    {
        "sectionNumber": "Section 268 and 290",
        "text": "Under section 268,A person is guilty of a public nuisance who does any act or is guilty of an illegal omission which causes any common injury, danger or annoyance to the public or to the people in general who dwell or occupy property in the vicinity, or which must necessarily cause injury, obstruction, danger or annoyance to persons who may have occasion to use any public right.",
        "example": "Playing Loud Music: Playing loud music in India is not illegal as long as it does not exceed the permissible noise levels and does not disturb the peace and tranquillity of the neighbourhood. However, The Supreme Court has banned loud music playing between 10 pm and 6 am without permission from the authorities.",
        "punishment": "Whoever commits a public nuisance in any case not otherwise punishable by this Code, shall be punished with fine which may extend to two hundred rupees. The offence is bailable as well"

    },
    {
        "sectionNumber": "Section 63 of copyright act",
        "text": "Under the Section 63 of the Copyright Act, 1957 (the “Act”) any person who knowingly infringes or abets the infringement of the copyright in any work commits criminal offence.",
        "example": "Downloading copyrighted images/videos/music from the internet.",
        "punishment": "A person who knowingly infringes copyright or abets the infringement can be punished with imprisonment of at least six months and a fine of at least ₹50,000. The maximum imprisonment is three years and the maximum fine is ₹200,000.The offence is non bailable."

    },
    {
        "sectionNumber": "Section 117 of motor vehicle act",
        "text": "The state government or an authorized authority can determine where motor vehicles can stop for a specified period of time or indefinitely.They can also determine where public service vehicles can stop for longer than necessary for passengers to board and exit.When making these determinations, the state government or authorized authority must consider the safety of road users and the free flow of traffic.",
        "example": "Parking your vehicles in no parking areas.",
        "punishment": "The car may be towed, and the owner may have to pay a fine to get it back."

    },
    {
        "sectionNumber": "Section 128 of motor vehicle act",
        "text": "No driver of a two-wheeled motorcycle can carry more than one person in addition to themselves. The extra person must sit on a proper seat that is securely fixed behind the driver's seat.",
        "example": "More than 1 pillion rider",
        "punishment": "A fine of one thousand rupees and he shall be disqualified for holding licence for a period of three months."
    },
    {
        "sectionNumber": "Section 185 of Motor Vehicles Act, 1988",
        "text": "Driving by a person under the influence of alcohol or drugs is prohibited. If a person drives or attempts to drive a motor vehicle while under the influence of intoxicating substances to such an extent as to be incapable of exercising proper control over the vehicle, it is punishable.",
        "example": "Drunk driving: Driving a vehicle after consuming alcohol beyond the legally permissible limit of 30 mg per 100 ml of blood.",
        "punishment": "Imprisonment up to 6 months or a fine of up to ₹10,000 for the first offence. For a subsequent offence within three years, imprisonment up to 2 years or a fine up to ₹15,000 or both."
    },
    {
        "sectionNumber": "Section 279 of IPC",
        "text": "Rash driving or riding on a public road that endangers human life or is likely to cause harm or injury to any other person is prohibited under this section.",
        "example": "Overspeeding or dangerous driving on a busy public road.",
        "punishment": "Imprisonment up to 6 months, or a fine up to ₹1,000, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 188 of IPC",
        "text": "Disobedience to an order duly promulgated by a public servant, if it causes or tends to cause danger to human life, health, or safety, is punishable under this section.",
        "example": "Violating a curfew order during a lockdown.",
        "punishment": "Imprisonment up to 1 month, or a fine up to ₹200, or both. If disobedience results in danger to human life, imprisonment may extend to 6 months, or fine up to ₹1,000, or both."
    },
    {
        "sectionNumber": "Section 138 of Negotiable Instruments Act, 1881",
        "text": "Dishonour of a cheque for insufficiency of funds or for any reason is a punishable offence if the cheque was issued to discharge a legally enforceable debt or liability.",
        "example": "Issuing a cheque that gets dishonoured due to insufficient balance in the account.",
        "punishment": "Imprisonment up to 2 years, or a fine that may extend to twice the amount of the cheque, or both."
    },
    {
        "sectionNumber": "Section 11 of Prevention of Cruelty to Animals Act, 1960",
        "text": "Any person who treats an animal cruelly, including beating, overloading, or subjecting it to unnecessary pain or suffering, is punishable under this act.",
        "example": "Overloading a bullock cart beyond its capacity or beating a stray dog.",
        "punishment": "A fine of up to ₹100 for the first offence, and a fine between ₹200 and ₹500 or imprisonment up to 3 months for subsequent offences."
    },
    {
        "sectionNumber": "Section 292 of IPC",
        "text": "Selling, distributing, exhibiting, or possessing obscene material with the intention to distribute is a punishable offence under this section.",
        "example": "Selling pirated adult DVDs or distributing obscene content online.",
        "punishment": "Imprisonment up to 2 years, or fine up to ₹2,000, or both for the first offence. For subsequent offences, imprisonment up to 5 years and a fine up to ₹5,000."
    },
    {
        "sectionNumber": "Section 11 of Domestic Violence Act, 2005",
        "text": "Any act of domestic violence, including physical, emotional, or economic abuse, is punishable under this act.",
        "example": "A husband repeatedly insulting his wife and controlling her finances to harass her.",
        "punishment": "A protection order can be issued, and violation may lead to imprisonment up to 1 year or fine up to ₹20,000 or both."
    },
    {
        "sectionNumber": "Section 324 of IPC",
        "text": "Voluntarily causing hurt by dangerous weapons or means is punishable under this section.",
        "example": "Attacking someone with a knife during a dispute.",
        "punishment": "Imprisonment up to 3 years, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 138 of the Railways Act, 1989",
        "text": "Traveling without a valid ticket in a train is a punishable offence.",
        "example": "A person caught traveling in a train without purchasing a ticket.",
        "punishment": "A fine up to ₹500 or an additional charge equivalent to the ticket fare for the journey."
    },
    {
        "sectionNumber": "Section 294 of IPC",
        "text": "Obscene acts and songs in public places causing annoyance to others are punishable under this section.",
        "example": "Singing vulgar songs loudly in a public area.",
        "punishment": "Imprisonment up to 3 months, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 497 of IPC (before decriminalization)",
        "text": "Adultery, defined as a man having sexual relations with a married woman without her husband’s consent, was considered a criminal offence under this section.",
        "example": "A married man having an affair with another man's wife without the husband's consent.",
        "punishment": "Imprisonment up to 5 years or fine or both. (Note: Adultery was decriminalized by the Supreme Court in 2018.)"
    },
    {
        "sectionNumber": "Section 145 of CrPC",
        "text": "If there is a dispute concerning land or water which is likely to cause a breach of peace, an executive magistrate may intervene under this section.",
        "example": "A dispute between neighbors over the boundary of their properties leading to threats of violence.",
        "punishment": "Preventive measures such as restraining orders may be applied; violations could lead to imprisonment for contempt of court."
    },
    {
        "sectionNumber": "Section 125 of IPC",
        "text": "Waging war against any Asiatic power in alliance with the Government of India is punishable under this section.",
        "example": "An Indian citizen attempting to incite a rebellion against a friendly neighboring country.",
        "punishment": "Imprisonment for life and fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 153A of IPC",
        "text": "Promoting enmity between different groups on grounds of religion, race, place of birth, residence, language, etc., is a punishable offence.",
        "example": "Making hate speeches to incite violence against a particular religious group.",
        "punishment": "Imprisonment up to 3 years, or fine, or both. For certain cases, imprisonment may extend to 5 years."
    },
    {
        "sectionNumber": "Section 336 of IPC",
        "text": "Any act that endangers human life or the personal safety of others is punishable under this section.",
        "example": "Bursting crackers in crowded public places or reckless shooting during celebrations.",
        "punishment": "Imprisonment up to 3 months, or fine up to ₹250, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 66C of IT Act, 2000",
        "text": "Identity theft, including fraudulently using another person's electronic signature, password, or other unique identification features, is a punishable offence.",
        "example": "Using someone else’s Aadhaar or PAN details for financial transactions without their knowledge.",
        "punishment": "Imprisonment up to 3 years and a fine up to ₹1,00,000."
    },
    {
        "sectionNumber": "Section 67A of IT Act, 2000",
        "text": "Publishing or transmitting material containing sexually explicit acts in electronic form is a punishable offence.",
        "example": "Sharing pornographic videos over messaging platforms.",
        "punishment": "Imprisonment up to 5 years and a fine up to ₹10,00,000 for the first offence. Subsequent offences may lead to imprisonment up to 7 years."
    },
    {
        "sectionNumber": "Section 304A of IPC",
        "text": "Causing death by negligence, such as rash or negligent acts not amounting to culpable homicide, is a punishable offence.",
        "example": "Accidentally hitting a pedestrian while driving negligently.",
        "punishment": "Imprisonment up to 2 years, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 376 of IPC",
        "text": "Rape, defined as sexual intercourse with a woman without her consent or under coercion, is a severe criminal offence under this section.",
        "example": "A man forcibly engaging in sexual activity with a woman without her consent.",
        "punishment": "Rigorous imprisonment of not less than 10 years, which may extend to life imprisonment, along with a fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 498B of IPC",
        "text": "Enticing or taking away a married woman with the intent of having illicit relations is punishable under this section.",
        "example": "Convincing a married woman to leave her husband and live with another man for an extramarital affair.",
        "punishment": "Imprisonment up to 2 years, or fine, or both."
    },
    {
        "sectionNumber": "Section 304B of IPC",
        "text": "If a woman dies due to burns or bodily injury or under suspicious circumstances within seven years of her marriage, and it is shown that she was subjected to cruelty or harassment by her husband or his relatives in connection with dowry demands, it is considered dowry death.",
        "example": "A woman dying under suspicious circumstances in her in-laws' house after repeated demands for dowry.",
        "punishment": "Imprisonment for a term not less than 7 years but which may extend to life imprisonment. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 509 of IPC",
        "text": "Word, gesture, or act intended to insult the modesty of a woman is a punishable offence.",
        "example": "Making sexually suggestive remarks or gestures towards a woman in a public space.",
        "punishment": "Imprisonment up to 1 year, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 279 of IPC",
        "text": "Rash driving or riding on a public road that endangers human life or the safety of others is punishable under this section.",
        "example": "Driving at a high speed in a busy market area, causing potential danger to pedestrians.",
        "punishment": "Imprisonment up to 6 months, or fine up to ₹1,000, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 171E of IPC",
        "text": "Bribery during an election, which includes giving or accepting gratification as a motive for voting or refraining from voting, is a punishable offence.",
        "example": "Offering money to voters to secure votes during an election campaign.",
        "punishment": "Imprisonment up to 1 year, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 146 of IPC",
        "text": "Rioting, defined as the unlawful assembly of persons with the intent to use force or violence, is punishable under this section.",
        "example": "A group of people vandalizing property during a political protest.",
        "punishment": "Imprisonment up to 2 years, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 11 of Child Labour (Prohibition and Regulation) Act, 1986",
        "text": "Prohibits the employment of children under the age of 14 in hazardous occupations and processes.",
        "example": "Employing a 12-year-old child to work in a factory with dangerous machinery.",
        "punishment": "Imprisonment for a term of 3 months to 1 year, or fine between ₹10,000 and ₹20,000, or both."
    },
    {
        "sectionNumber": "Section 354 of IPC",
        "text": "Assault or criminal force to a woman with the intent to outrage her modesty is a punishable offence.",
        "example": "A man pulling a woman’s dupatta in a public place with malicious intent.",
        "punishment": "Imprisonment of 1 to 5 years and fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 182 of IPC",
        "text": "Giving false information to a public servant with the intent to cause them to use their lawful power to the injury or annoyance of another person is punishable under this section.",
        "example": "Filing a fake police complaint against a neighbor over a fabricated issue.",
        "punishment": "Imprisonment up to 6 months, or fine up to ₹1,000, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 65 of IT Act, 2000",
        "text": "Tampering with computer source documents, including intentional concealment, destruction, or alteration, is punishable under this section.",
        "example": "Modifying software source code without proper authorization.",
        "punishment": "Imprisonment up to 3 years, or fine up to ₹2,00,000, or both."
    },
    {
        "sectionNumber": "Section 498 of IPC",
        "text": "Enticing or taking away a married woman with the intent of having illicit relations is punishable under this section.",
        "example": "Convincing a married woman to leave her husband and live with another man for an extramarital affair.",
        "punishment": "Imprisonment up to 2 years, or fine, or both."
    },
    {
        "sectionNumber": "Section 370 of IPC",
        "text": "Trafficking of persons for exploitation, including slavery, sexual exploitation, or forced labor, is punishable under this section.",
        "example": "Forcing individuals into bonded labor or prostitution after deceitfully transporting them across borders.",
        "punishment": "Rigorous imprisonment of 7 to 10 years and a fine. In certain cases, imprisonment may extend to life."
    },
    {
        "sectionNumber": "Section 269 of IPC",
        "text": "Negligently doing any act known to be likely to spread infection of any disease dangerous to life is punishable under this section.",
        "example": "A person hosting a public gathering despite being aware of having a contagious disease like COVID-19.",
        "punishment": "Imprisonment up to 6 months, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 87 of Wildlife Protection Act, 1972",
        "text": "Hunting wild animals without prior authorization or license is punishable under this act.",
        "example": "Killing a deer in a protected forest area without a permit.",
        "punishment": "Imprisonment up to 3 years, or fine up to ₹25,000, or both."
    },
    {
        "sectionNumber": "Section 354D of IPC",
        "text": "Stalking, including monitoring or contacting a woman against her will, is a punishable offence.",
        "example": "Repeatedly following a woman to her workplace despite her objections.",
        "punishment": "Imprisonment up to 3 years for the first conviction, and up to 5 years for subsequent convictions, along with a fine."
    },
    {
        "sectionNumber": "Section 3 of Prevention of Damage to Public Property Act, 1984",
        "text": "Causing mischief to public property, such as roads, bridges, or government buildings, is punishable under this act.",
        "example": "Vandalizing a public bus during a political protest.",
        "punishment": "Imprisonment up to 5 years and a fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 141 of IPC",
        "text": "An unlawful assembly of five or more persons with a common object to commit an offence is punishable under this section.",
        "example": "A mob assembling to obstruct public officials during a demolition drive.",
        "punishment": "Imprisonment up to 6 months, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 66D of IT Act, 2000",
        "text": "Cheating by impersonation using a computer resource or communication device is a punishable offence.",
        "example": "Scammers impersonating bank officials over email to extract sensitive customer data.",
        "punishment": "Imprisonment up to 3 years and a fine of up to ₹1,00,000."
    },
    {
        "sectionNumber": "Section 326 of IPC",
        "text": "Voluntarily causing grievous hurt by dangerous weapons or means is punishable under this section.",
        "example": "Attacking someone with acid during an altercation.",
        "punishment": "Imprisonment for a term of 10 years or life, along with a fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 25 of Arms Act, 1959",
        "text": "Possessing unlicensed firearms or ammunition is a punishable offence under this act.",
        "example": "Carrying an unlicensed pistol in public.",
        "punishment": "Imprisonment up to 3 years, which may extend to 7 years, along with a fine."
    },
    {
        "sectionNumber": "Section 3 of Environment Protection Act, 1986",
        "text": "Any act or omission causing significant harm to the environment or violating government rules for environmental protection is punishable under this act.",
        "example": "Discharging untreated industrial waste into a river.",
        "punishment": "Imprisonment up to 5 years, or fine up to ₹1,00,000, or both. Continuous violations may lead to extended imprisonment."
    },
    {
        "sectionNumber": "Section 11 of Prevention of Cruelty to Animals Act, 1960",
        "text": "Causing unnecessary pain or suffering to any animal is a punishable offence under this section.",
        "example": "Beating or starving a pet or stray animal intentionally.",
        "punishment": "Fine of ₹10 to ₹50 for the first offence. Subsequent offences may lead to imprisonment up to 3 months and/or higher fines."
    },
    {
        "sectionNumber": "Section 138 of Negotiable Instruments Act, 1881",
        "text": "Dishonoring a cheque due to insufficient funds or exceeding arrangement is punishable under this section.",
        "example": "Issuing a cheque that bounces due to lack of funds in the account.",
        "punishment": "Imprisonment up to 2 years, or fine up to twice the cheque amount, or both."
    },
    {
        "sectionNumber": "Section 269 of IPC",
        "text": "Negligent acts likely to spread infection of a dangerous disease to life are punishable under this section.",
        "example": "Hosting a large gathering during a pandemic without proper health precautions.",
        "punishment": "Imprisonment up to 6 months, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 124A of IPC",
        "text": "Sedition, involving acts that incite violence or hatred against the government, is punishable under this section.",
        "example": "Delivering speeches to incite violence against the Indian government.",
        "punishment": "Imprisonment for life, with or without a fine, or imprisonment up to 3 years. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 10 of the Passports Act, 1967",
        "text": "Using a passport or travel document that is forged or altered is punishable under this act.",
        "example": "Using a fake passport to travel internationally.",
        "punishment": "Imprisonment up to 2 years and/or a fine up to ₹5,000."
    },
    {
        "sectionNumber": "Section 23 of POCSO Act, 2012",
        "text": "Disclosing the identity of a child involved in sexual offences is a punishable offence.",
        "example": "Publishing a victim's name or identifiable details in news reports or social media posts.",
        "punishment": "Imprisonment up to 1 year, or fine, or both."
    },
    {
        "sectionNumber": "Section 107 of IPC",
        "text": "Abetment of a criminal offence by instigating or aiding the act is punishable under this section.",
        "example": "Encouraging someone to commit suicide through verbal persuasion or threats.",
        "punishment": "Punishment varies based on the crime abetted, but it may be the same as the principal offence. The offence is bailable in most cases."
    },
    {
        "sectionNumber": "Section 67 of IT Act, 2000",
        "text": "Publishing or transmitting obscene material in electronic form is a punishable offence.",
        "example": "Sharing pornographic videos or explicit content through messaging apps or social media.",
        "punishment": "Imprisonment up to 3 years and a fine up to ₹5,00,000 for the first offence. Subsequent offences may lead to 5 years of imprisonment."
    },
    {
        "sectionNumber": "Section 279 of IPC",
        "text": "Rash driving or riding on a public way endangering human life is punishable under this section.",
        "example": "Driving at excessive speed on crowded streets without regard for safety.",
        "punishment": "Imprisonment up to 6 months, or fine up to ₹1,000, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 62 of Representation of People Act, 1951",
        "text": "Voting in an election despite being disqualified is punishable under this section.",
        "example": "Casting a vote while knowingly being disqualified due to criminal convictions.",
        "punishment": "Imprisonment up to 1 year, or fine, or both."
    },
    {
        "sectionNumber": "Section 304A of IPC",
        "text": "Causing death by negligence is punishable under this section.",
        "example": "A driver hitting a pedestrian due to reckless driving resulting in the pedestrian's death.",
        "punishment": "Imprisonment up to 2 years, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 375 of IPC",
        "text": "Rape, defined as sexual intercourse without consent under certain circumstances, is punishable under this section.",
        "example": "Forcing sexual intercourse with a woman against her will.",
        "punishment": "Rigorous imprisonment for a term of 7 years to life and a fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 509 of IPC",
        "text": "Word, gesture, or act intended to insult the modesty of a woman is a punishable offence.",
        "example": "Making sexually explicit comments towards a woman on public transport.",
        "punishment": "Imprisonment up to 1 year, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 125 of CrPC",
        "text": "A person legally bound to maintain his wife, children, or parents and neglects or refuses to do so is punishable under this section.",
        "example": "A husband refusing to provide financial support to his estranged wife and children.",
        "punishment": "The court may order monthly maintenance. Non-compliance can lead to imprisonment up to 1 month or until payment."
    },
    {
        "sectionNumber": "Section 23 of Indian Contract Act, 1872",
        "text": "Agreements entered into for unlawful consideration or object are void and unenforceable under this section.",
        "example": "A contract made for selling illegal drugs.",
        "punishment": "The agreement is void, and no legal remedy is provided. However, associated criminal acts are prosecuted separately."
    },
    {
        "sectionNumber": "Section 141 of Motor Vehicle Act, 1988",
        "text": "Drunk driving, where the blood alcohol level exceeds the permissible limit, is punishable under this section.",
        "example": "A person driving with a blood alcohol concentration of 0.05% or higher.",
        "punishment": "Imprisonment up to 6 months and/or a fine up to ₹10,000 for the first offence. Repeat offences can lead to higher penalties."
    },
    {
        "sectionNumber": "Section 11 of Hindu Marriage Act, 1955",
        "text": "Bigamy, or marrying another person while the first marriage is subsisting, is punishable under this section.",
        "example": "A man marrying a second woman without legally divorcing his first wife.",
        "punishment": "Imprisonment up to 7 years, or fine, or both."
    },
    {
        "sectionNumber": "Section 45 of The Indian Evidence Act, 1872",
        "text": "Any falsified expert opinion used in a court case is punishable under this section.",
        "example": "Submitting a fake forensic report to mislead the court during a trial.",
        "punishment": "The individual may face contempt of court proceedings and penalties under perjury-related sections."
    },
    {
        "sectionNumber": "Section 20 of Domestic Violence Act, 2005",
        "text": "Failure to pay monetary relief, compensation, or maintenance as ordered under this act is punishable.",
        "example": "A husband refusing to pay court-ordered maintenance to his abused wife.",
        "punishment": "Imprisonment up to 1 year, fine, or both, as determined by the court."
    },
    {
        "sectionNumber": "Section 195A of IPC",
        "text": "Threatening or inducing any person to give false evidence is punishable under this section.",
        "example": "A gang leader intimidating a witness to provide false testimony in court.",
        "punishment": "Imprisonment up to 7 years, and a fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 498A of IPC",
        "text": "Husband or relative of a husband subjecting a woman to cruelty is punishable under this section.",
        "example": "A woman being physically and mentally tortured by her in-laws for dowry.",
        "punishment": "Imprisonment up to 3 years and a fine. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 276C of Income Tax Act, 1961",
        "text": "Wilful attempt to evade tax is a punishable offence under this section.",
        "example": "Filing false income declarations to avoid paying taxes.",
        "punishment": "Imprisonment of 6 months to 7 years, along with a fine."
    },
    {
        "sectionNumber": "Section 145 of IPC",
        "text": "Joining or continuing in unlawful assembly, knowing it has been ordered to disperse, is punishable under this section.",
        "example": "A mob refusing to leave a protest site despite a police dispersal order.",
        "punishment": "Imprisonment up to 2 years, or fine, or both."
    },
    {
        "sectionNumber": "Section 146 of IPC",
        "text": "Rioting, where force or violence is used by an unlawful assembly or any member thereof, is punishable under this section.",
        "example": "Vandalizing property and attacking pedestrians during a protest.",
        "punishment": "Imprisonment up to 2 years, or fine, or both."
    },
    {
        "sectionNumber": "Section 31 of Protection of Women from Domestic Violence Act, 2005",
        "text": "Breach of protection orders by the respondent is punishable under this section.",
        "example": "A husband violating a court order by attempting to contact his estranged wife.",
        "punishment": "Imprisonment up to 1 year, or fine up to ₹20,000, or both."
    },
    {
        "sectionNumber": "Section 5 of The Official Secrets Act, 1923",
        "text": "Disclosure of classified government information likely to affect sovereignty, security, or relations with foreign states is punishable under this act.",
        "example": "Leaking sensitive defence-related documents to unauthorized persons.",
        "punishment": "Imprisonment up to 14 years, or fine, or both."
    },
    {
        "sectionNumber": "Section 134 of IPC",
        "text": "Abetment of assault by a soldier, sailor, or airman in the army, navy, or air force of India is punishable under this section.",
        "example": "Instigating a soldier to desert his post during active duty.",
        "punishment": "Imprisonment up to 7 years and a fine."
    },
    {
        "sectionNumber": "Section 76 of Juvenile Justice Act, 2015",
        "text": "Employment of children for begging is a punishable offence.",
        "example": "Engaging or coercing minors to beg at traffic signals or public spaces.",
        "punishment": "Imprisonment up to 5 years and a fine of ₹1,00,000."
    },
    {
        "sectionNumber": "Section 406 of IPC",
        "text": "Criminal breach of trust by a person entrusted with property is punishable under this section.",
        "example": "A banker misappropriating funds deposited by clients for personal gain.",
        "punishment": "Imprisonment up to 3 years, or fine, or both. The offence is bailable."
    },
    {
        "sectionNumber": "Section 20 of Narcotic Drugs and Psychotropic Substances Act, 1985",
        "text": "Possession, sale, or use of cannabis is punishable under this act.",
        "example": "Possessing marijuana without authorization for personal or commercial use.",
        "punishment": "Rigorous imprisonment for a term of 6 months to 10 years, depending on the quantity, along with a fine."
    },
    {
        "sectionNumber": "Section 304B of IPC",
        "text": "Dowry death, where a woman dies under abnormal circumstances within 7 years of marriage due to cruelty or harassment related to dowry demands, is punishable under this section.",
        "example": "A newlywed woman succumbing to burns after repeated dowry harassment by her in-laws.",
        "punishment": "Imprisonment for a minimum of 7 years, which may extend to life imprisonment. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 312 of IPC",
        "text": "Causing miscarriage without the consent of the woman is punishable under this section.",
        "example": "A person forcibly administering drugs to terminate a pregnancy without the woman's permission.",
        "punishment": "Imprisonment up to 3 years, or fine, or both. If the woman is 'quick with child,' imprisonment may extend to 7 years."
    },
    {
        "sectionNumber": "Section 153A of IPC",
        "text": "Promoting enmity between different groups on grounds of religion, race, or language is punishable under this section.",
        "example": "Delivering hate speeches to incite violence between two religious communities.",
        "punishment": "Imprisonment up to 3 years, or fine, or both. The offence is non-bailable."
    },
    {
        "sectionNumber": "Section 171E of IPC",
        "text": "Bribery during elections is punishable under this section.",
        "example": "Offering money or gifts to voters in exchange for their votes.",
        "punishment": "Imprisonment up to 1 year, or fine, or both."
    },
    {
        "sectionNumber": "Section 354D of IPC",
        "text": "Stalking, defined as repeated unwanted contact or following of a woman, is punishable under this section.",
        "example": "A man persistently following a woman to her workplace despite her objections.",
        "punishment": "Imprisonment up to 3 years and a fine for the first offence. Subsequent offences may lead to imprisonment up to 5 years."
    },
    {
        "sectionNumber": "Section 277 of IPC",
        "text": "Fouling water of a public spring or reservoir, making it unfit for human consumption, is punishable under this section.",
        "example": "Dumping industrial waste into a river used for drinking water.",
        "punishment": "Imprisonment up to 3 months, or fine up to ₹500, or both."
    },
    {
        "sectionNumber": "Section 336 of IPC",
        "text": "Acts endangering the life or personal safety of others through negligence are punishable under this section.",
        "example": "Bursting firecrackers recklessly in a crowded area.",
        "punishment": "Imprisonment up to 3 months, or fine up to ₹250, or both."
    },
    {
        "sectionNumber": "Section 11 of The Child Labour (Prohibition and Regulation) Act, 1986",
        "text": "Employing children below the age of 14 in hazardous occupations is punishable under this act.",
        "example": "Engaging minors to work in factories involving hazardous chemicals.",
        "punishment": "Imprisonment up to 2 years, or fine up to ₹50,000, or both."
    },
    {
        "sectionNumber": "Section 292 of IPC",
        "text": "Sale, distribution, or public exhibition of obscene materials is punishable under this section.",
        "example": "Selling pornographic DVDs in public markets.",
        "punishment": "Imprisonment up to 2 years and a fine of ₹2,000 for the first offence. Subsequent offences may lead to harsher penalties."
    },
    {
        "sectionNumber": "Section 25 of Arms Act, 1959",
        "text": "Possession, acquisition, or use of illegal arms and ammunition is punishable under this act.",
        "example": "Owning a firearm without proper licensing.",
        "punishment": "Imprisonment up to 3 years, which may extend to life imprisonment, along with a fine."
    },
    {
        "sectionNumber": "Section 120B of IPC",
        "text": "Criminal conspiracy, where two or more persons conspire to commit an illegal act, is punishable under this section.",
        "example": "Two people planning and coordinating a robbery in a bank.",
        "punishment": "Imprisonment up to 6 months or a fine, or both. For more serious offences, imprisonment can extend to life or 10 years."
    },
    {
        "sectionNumber": "Section 54 of IPC",
        "text": "Making an unlawful assembly with the intention to commit an offence is punishable under this section.",
        "example": "A group of individuals gathering with the intention to commit vandalism or riot.",
        "punishment": "Imprisonment up to 1 year, or a fine, or both."
    },
    {
        "sectionNumber": "Section 53 of IPC",
        "text": "Punishments for criminal offences include imprisonment, fine, and death penalty as per the seriousness of the crime.",
        "example": "Punishment for murder may be the death penalty, while theft may result in imprisonment.",
        "punishment": "Varies by offence: Imprisonment, fine, or death sentence."
    },
    {
        "sectionNumber": "Section 4 of Prevention of Money Laundering Act, 2002",
        "text": "Money laundering, defined as concealing or disguising illicit origins of money, is punishable under this act.",
        "example": "Investing illegally acquired money in legal businesses to hide the source.",
        "punishment": "Rigorous imprisonment from 3 years to 7 years and fine up to ₹5 lakhs."
    },
    {
        "sectionNumber": "Section 5 of Official Secrets Act, 1923",
        "text": "Disclosing or attempting to disclose official secrets related to India's defence or diplomatic relations is punishable under this act.",
        "example": "Leaking top-secret government documents related to national security.",
        "punishment": "Imprisonment up to 14 years, or fine, or both."
    },
    {
        "sectionNumber": "Section 134 of CrPC",
        "text": "A person can file a complaint to a magistrate for an offence committed under the IPC and can ask for a summons or warrant under this section.",
        "example": "Filing a complaint with the magistrate after being robbed.",
        "punishment": "N/A – This section deals with the procedure for filing complaints."
    },
    {
        "sectionNumber": "Section 72 of The Information Technology Act, 2000",
        "text": "Breaching the confidentiality of information without the consent of the person is punishable under this section.",
        "example": "Accessing and leaking someone's private emails or data without permission.",
        "punishment": "Imprisonment up to 2 years, or a fine of up to ₹1 lakh, or both."
    },
    {
        "sectionNumber": "Section 75 of IT Act, 2000",
        "text": "Cybercrimes like hacking, identity theft, and computer-related fraud are punishable under this section.",
        "example": "Using someones credit card details to make unauthorized transactions online.",
        "punishment": "Imprisonment up to 3 years and a fine up to ₹5 lakh."
    },
    {
        "sectionNumber": "Section 21 of Indian Forest Act, 1927",
        "text": "Unauthorized felling of trees, illegal mining, and poaching in protected forests are punishable under this act.",
        "example": "Cutting down trees in a reserved forest without permission for commercial use.",
        "punishment": "Imprisonment up to 3 years and a fine up to ₹10,000."
    },
    {
        "sectionNumber": "Section 19 of Prevention of Corruption Act, 1988",
        "text": "Bribing a public servant to influence their official decisions is punishable under this section.",
        "example": "Offering a bribe to a government official for issuing a construction permit illegally.",
        "punishment": "Imprisonment from 6 months to 5 years, and a fine."
    }

];


const App = () => {
    const location = useLocation();

    return (
        <div className="App">
            <Navbar />

            <Routes>
                {/* Define routes for the components */}
                <Route path="/" element={
                    <>
                        <Introduction />
                        <SectionDisplay sections={sections} />
                        <NewsSection />
                    </>
                } />
                <Route path="/guess-the-penalty" element={<GuessThePenalty />} />
                <Route path="/games" element={<GamesSection />} />
                <Route path="/external-assistance" element={<ExternalAssistance />} />
                <Route path="/your-rights-in-action" element={<YourRightsInAction/>}/>
                <Route path="/spot-the-lawbreaker" element={<SpotTheLawbreaker/>}/>
            </Routes>

            {/* Always show the Footer */}
            <Footer />

            {/* Show FloatingChatbot only on routes other than /games */}
            {location.pathname !== "/games" && <FloatingChatbot />}
        </div>
    );
};

export default App;