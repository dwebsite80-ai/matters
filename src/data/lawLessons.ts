import { Lesson, Question } from '../types';

export const LAW_LESSONS: Lesson[] = [
  {
    id: 'lesson-law-1',
    topic_id: 'law-1',
    subject_id: 'law-rights',
    title: 'Fundamental Rights & Citizen Shields',
    subtitle: 'The core constitutional protections that belong to you from birth',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Imagine receiving an arbitrary fine or facing sudden discrimination at a public restaurant with no right to question it. In a constitutional democracy, your Fundamental Rights act as an impenetrable legal shield.',
    sections: [
      {
        title: 'What Are Fundamental Rights?',
        content: 'Part III of the Indian Constitution guarantees six broad categories of Fundamental Rights: Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural & Educational Rights, and the Right to Constitutional Remedies.',
        highlight: 'Fundamental Rights are enforceable directly against state action through the High Courts (Article 226) and Supreme Court (Article 32).',
        iconType: 'concept'
      },
      {
        title: 'Article 14 & 19: Equality and Speech',
        content: 'Article 14 ensures "Equality before law and equal protection of laws" within Indian territory. Article 19(1)(a) protects freedom of speech and expression, peaceful assembly, movement across India, and practicing any lawful profession.',
        highlight: 'Reasonable restrictions apply for public order, decency, sovereignty, and state security, but restrictions must never be arbitrary.',
        iconType: 'tip'
      },
      {
        title: 'Article 32: The Heart of the Constitution',
        content: 'Dr. B.R. Ambedkar called Article 32 the "Heart and Soul of the Constitution" because a right without a remedy is meaningless. If any state body violates your fundamental rights, you have the constitutional right to petition the Supreme Court directly for Writs like Habeas Corpus, Mandamus, and Prohibition.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'A state municipality passes an oral order banning women or people from certain regions from using a public municipal park.',
      analysis: 'This directly violates Article 15 (prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth) and Article 19(1)(d) (right to move freely throughout the territory of India).',
      actionable_tip: 'Any affected citizen can challenge this arbitrary order in the High Court under Article 226 without needing special permission.'
    },
    key_takeaways: [
      'Fundamental rights protect individuals primarily against unjust or discriminatory state actions.',
      'Article 14 guarantees non-arbitrary equal treatment under the law.',
      'Article 32 & 226 allow direct judicial intervention via constitutional writs.',
      'Rights come with reasonable restrictions, but restrictions must be backed by valid law.'
    ]
  },
  {
    id: 'lesson-law-2',
    topic_id: 'law-2',
    subject_id: 'law-rights',
    title: 'Article 21: Life, Privacy & Dignity',
    subtitle: 'The most expansive right in modern Indian jurisprudence',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Can a government tap your private phone calls without due procedure, or can a hospital deny emergency care if you cannot pay immediately? Article 21 is why they cannot.',
    sections: [
      {
        title: 'Beyond Biological Existence',
        content: 'Article 21 states: "No person shall be deprived of his life or personal liberty except according to procedure established by law." The Supreme Court (in Maneka Gandhi and subsequent landmark cases) ruled that "Life" does not mean mere animal existence, but living with human dignity, clean water, healthcare, and shelter.',
        highlight: 'Article 21 protects every human being, including foreign nationals, not just Indian citizens.',
        iconType: 'concept'
      },
      {
        title: 'Right to Privacy (Puttaswamy Judgment)',
        content: 'In 2017, a 9-judge constitutional bench declared Privacy to be an intrinsic part of Article 21. Your digital data, personal biometric records, informational privacy, and bodily autonomy cannot be infringed without a legitimate, proportional, and legally enacted state purpose.',
        iconType: 'tip'
      },
      {
        title: 'Emergency Medical Care & Speedy Trial',
        content: 'Article 21 mandates that every doctor and hospital must provide life-saving emergency medical treatment to an accident victim without waiting for police paperwork or upfront payment (Parmanand Katara case).',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'A private app demands full access to your photos, contacts, and microphone to provide a simple calculator tool, then threatens to leak contacts if a loan is late.',
      analysis: 'Harassment and extortion using unauthorized personal data violates personal privacy and constitutional liberty standards under Article 21 and Section 66E of the IT Act.',
      actionable_tip: 'Never grant unnecessary app permissions. If threatened, immediately lodge a cybercrime complaint at cybercrime.gov.in.'
    },
    key_takeaways: [
      'Article 21 guarantees life with dignity, personal liberty, and due process.',
      'Right to privacy is a fundamental right declared in the KS Puttaswamy ruling.',
      'Emergency medical care cannot be denied to accident victims over paperwork.',
      'Applies to both Indian citizens and foreign nationals.'
    ]
  },
  {
    id: 'lesson-law-3',
    topic_id: 'law-3',
    subject_id: 'law-rights',
    title: 'FIR Basics: Filing a Police Complaint',
    subtitle: 'Understanding First Information Reports, Zero FIR, and citizen entitlements',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'If your phone or wallet is snatched at a transit station 50 kilometers from your hometown, do you have to travel all the way back or can you file an FIR right where you are?',
    sections: [
      {
        title: 'What is an FIR?',
        content: 'A First Information Report (FIR) is a written document prepared by police upon receiving information about the commission of a cognizable offence (serious offences like theft, assault, fraud, or robbery where police can investigate without a court warrant).',
        highlight: 'Police are legally mandated to register an FIR if information discloses a cognizable offence (Lalita Kumari ruling).',
        iconType: 'concept'
      },
      {
        title: 'The Power of Zero FIR',
        content: 'A Zero FIR allows any police station to register an FIR regardless of territorial jurisdiction where the incident occurred. Once recorded, the station assigns it a number "0" and promptly transfers the case to the competent jurisdictional police station.',
        iconType: 'tip'
      },
      {
        title: 'Your 3 Entitlements as an Informant',
        content: '1. You have the right to have the FIR read back to you before signing. 2. You are entitled to receive a certified copy of the FIR FREE of cost immediately. 3. If an officer refuses to register it, you can send the written complaint to the Superintendent of Police (SP) or approach the Judicial Magistrate under Section 156(3).',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'A local officer tells someone: "This bag snatching happened in the next district, go to that police station to file your complaint."',
      analysis: 'The officer is legally required to accept a Zero FIR, start urgent evidence preservation (CCTV checks), and transfer the file.',
      actionable_tip: 'Politely request the officer on duty to register a Zero FIR and provide your free stamped copy.'
    },
    key_takeaways: [
      'An FIR initiates official police investigation in cognizable offences.',
      'Zero FIR allows reporting at any police station irrespective of crime location.',
      'You are entitled to a 100% free certified copy of the registered FIR.',
      'Refusal by police can be escalated to the District SP or local Magistrate.'
    ]
  },
  {
    id: 'lesson-law-4',
    topic_id: 'law-4',
    subject_id: 'law-rights',
    title: 'Arrest & Detention: 5 Golden Protections',
    subtitle: 'The landmark D.K. Basu guidelines for every citizen',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Police authority is not unlimited. The Supreme Court laid down strict binding guidelines (D.K. Basu v. State of West Bengal) to prevent unlawful custodial harassment.',
    sections: [
      {
        title: '1. Clear Identification & Grounds of Arrest',
        content: 'Every police personnel carrying out an arrest must wear clear identification and name tags with designations. The arrested individual has a constitutional right to be informed of the exact grounds of arrest immediately.',
        iconType: 'concept'
      },
      {
        title: '2. The Arrest Memo & Friend/Family Intimation',
        content: 'An official Arrest Memo must be prepared at the time of arrest, signed by at least one witness (a family member or respectable local citizen), and countersigned by the arrestee. The police must inform a designated relative or friend within 8-12 hours.',
        iconType: 'tip'
      },
      {
        title: '3. The 24-Hour Magistrate Rule & Medical Exam',
        content: 'Article 22(2) guarantees that any arrested person MUST be produced before the nearest Judicial Magistrate within 24 hours (excluding journey time). Also, an arrestee has the right to be medically examined upon arrest and every 48 hours in custody.',
        highlight: 'Custodial detention beyond 24 hours without explicit Magistrate approval is unconstitutional and illegal.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'A person is detained for questioning and kept overnight at a police station for two days without family notification or court production.',
      analysis: 'This violates Section 57 CrPC and Article 22(2), constituting illegal confinement.',
      actionable_tip: 'Family or counsel can file a Habeas Corpus writ petition or approach the Chief Judicial Magistrate immediately.'
    },
    key_takeaways: [
      'Arresting officers must display clear name tags and state explicit legal grounds.',
      'An Arrest Memo with a witness signature must be generated at the spot.',
      'A designated friend or family member must be informed promptly.',
      'Production before a Judicial Magistrate within 24 hours is non-negotiable.'
    ]
  },
  {
    id: 'lesson-law-5',
    topic_id: 'law-5',
    subject_id: 'law-rights',
    title: 'Consumer Rights & Online Claims',
    subtitle: 'Consumer Protection Act 2019, E-Daakhil, and unfair trade practices',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Bought a laptop online that broke in 2 days and the seller refuses replacement saying "goods once sold cannot be returned"? That clause is legally invalid under consumer law.',
    sections: [
      {
        title: 'Consumer Protection Act 2019',
        content: 'The Consumer Protection Act 2019 protects 6 basic rights: Right to Safety, Right to Information, Right to Choose, Right to be Heard, Right to Redressal, and Right to Consumer Education. E-commerce platforms are explicitly liable for deceptive practices and counterfeit products.',
        iconType: 'concept'
      },
      {
        title: 'Unfair Trade Practices & Misleading Ads',
        content: 'Clauses like "No Return Under Any Circumstances" for defective products or charging above Maximum Retail Price (MRP) are prohibited unfair trade practices. Endorsers and manufacturers can also face penalties for misleading claims.',
        highlight: 'MRP is the maximum legal retail price inclusive of all taxes. No shop or airport vendor can legally charge above MRP.',
        iconType: 'warning'
      },
      {
        title: 'Filing Claims with E-Daakhil',
        content: 'You no longer need expensive lawyers or physical court visits to file consumer disputes. The national portal (edaakhil.nic.in) lets you file digital complaints from home with minimal court fees for disputes up to ₹50 Lakhs (District Commission).',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'A phone manufacturer charges you ₹3,000 for a motherboard repair that failed within the 1-year warranty period due to manufacturing defects.',
      analysis: 'Refusing warranty service for inherent defects constitutes a deficiency in service under Consumer Protection Act.',
      actionable_tip: 'Send a formal written notice with invoice and service logs. If ignored within 15 days, file on the E-Daakhil portal or National Consumer Helpline (1915).'
    },
    key_takeaways: [
      'Charging above MRP or disclaiming all product liabilities is illegal.',
      'Consumer Protection Act 2019 covers both offline stores and e-commerce platforms.',
      'E-Daakhil enables fast online dispute filing without hiring an advocate.',
      'National Consumer Helpline (NCH 1915) provides pre-litigation dispute resolution.'
    ]
  },
  {
    id: 'lesson-law-6',
    topic_id: 'law-6',
    subject_id: 'law-rights',
    title: 'RTI Act: Demanding Transparency',
    subtitle: 'Right to Information Act 2005 as a tool for governance accountability',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Ever wondered why a road in your neighborhood broke down within 3 months of construction, or why a passport application is stuck with no updates? The RTI Act lets you inspect official files for just ₹10.',
    sections: [
      {
        title: 'The Purpose of RTI',
        content: 'Passed in 2005, the Right to Information Act empowers every Indian citizen to request certified information, inspect government work, take certified samples of materials, and inspect official records from any Public Authority.',
        iconType: 'concept'
      },
      {
        title: 'Timelines and Mandatory Responses',
        content: 'The Public Information Officer (PIO) must provide requested information within 30 days of receiving the application. If the information concerns the life or liberty of a person, it must be provided within 48 hours!',
        highlight: 'If the PIO fails to respond without reasonable cause, the Information Commission can levy a personal penalty of ₹250 per day (up to ₹25,000) on the officer.',
        iconType: 'tip'
      },
      {
        title: 'Filing an RTI Online',
        content: 'For central ministries, departments, and public sector banks, applications can be filed easily via rtionline.gov.in. State government portals handle state-level departments.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'A municipal tender allocated ₹40 lakhs for storm drainage repair, but no physical work started for 6 months.',
      analysis: 'Citizens can file an RTI requesting the sanctioned budget, work order copy, completion timeline, and contractor inspection log.',
      actionable_tip: 'Keep questions objective and factual. Ask for copies of documents and records rather than theoretical "why" questions.'
    },
    key_takeaways: [
      'RTI allows citizens to inspect public works, certified records, and material samples.',
      'Standard response timeline is 30 days (48 hours for life & liberty matters).',
      'Officers face daily financial penalties for deliberate delay or refusal.',
      'Central applications can be submitted online with a standard ₹10 fee.'
    ]
  },
  {
    id: 'lesson-law-7',
    topic_id: 'law-7',
    subject_id: 'law-rights',
    title: 'Cybercrime & Financial Fraud Emergency',
    subtitle: 'The 1930 Helpline, freezing illicit money trails, and digital evidence',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'If someone falls for an OTP scam or fake courier link and loses ₹50,000, the first 2 to 3 hours are known as the "Golden Hours". Acting immediately can recover your money before scammers withdraw it.',
    sections: [
      {
        title: 'Dial 1930: National Cybercrime Helpline',
        content: 'The Ministry of Home Affairs operates the Citizen Financial Cyber Fraud Reporting System via helpline 1930 and cybercrime.gov.in. When you report fraud immediately, the system alerts intermediary banks and payment gateways to freeze the recipient bank accounts instantly.',
        highlight: 'Reporting within the first 1-2 hours offers the highest probability of halting fund withdrawals across intermediary mules.',
        iconType: 'tip'
      },
      {
        title: 'Golden Rules of Digital Hygiene',
        content: '1. You NEVER need to enter your UPI PIN to RECEIVE money. UPI PIN is only required to SEND money. 2. Never download remote access tools (AnyDesk, TeamViewer) on requests from unknown callers. 3. Bank employees never ask for full card CVV or OTP.',
        iconType: 'warning'
      },
      {
        title: 'RBI Zero Liability Framework',
        content: 'According to Reserve Bank of India guidelines on unauthorized electronic banking transactions, if a customer notifies the bank of third-party fraud within 3 working days, customer liability is ZERO.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'A seller on an online marketplace receives a QR code with the buyer saying: "Scan this QR and enter your 6-digit PIN to collect the ₹5,000 payment."',
      analysis: 'Scanning a QR code and entering a UPI PIN debits money from your account, it never deposits money.',
      actionable_tip: 'Never enter a PIN to receive payments. If clicked by accident, dial 1930 and lock your net banking immediately.'
    },
    key_takeaways: [
      'Dial 1930 immediately for financial cyber fraud to freeze recipient accounts.',
      'Entering a UPI PIN ALWAYS sends money, never receives money.',
      'Notify your bank within 3 working days to claim RBI zero-liability protection.',
      'Take screenshots of transaction IDs, phone numbers, and chat logs as evidence.'
    ]
  },
  {
    id: 'lesson-law-8',
    topic_id: 'law-8',
    subject_id: 'law-rights',
    title: 'Traffic Stops, Challans & Document Checks',
    subtitle: 'DigiLocker validity, Motor Vehicles Act rules, and on-spot protocols',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Can a traffic constable snatch your car keys, force you to step out without a woman officer present after dark, or reject electronic documents shown on government apps like DigiLocker or mParivahan?',
    sections: [
      {
        title: 'Digital Documents are Legally Valid',
        content: 'Under Rule 139 of the Central Motor Vehicles Rules and IT Act Section 4, digital copies of your Driving License, RC, Insurance, and PUC stored in government-approved DigiLocker or mParivahan apps have the same legal standing as physical original documents.',
        highlight: 'Police officers cannot insist on physical copies if verified digital documents are presented.',
        iconType: 'concept'
      },
      {
        title: 'Officer Ranks & Challan Authority',
        content: 'Only officers of the rank of Assistant Sub-Inspector (ASI), Sub-Inspector (SI), or Inspector typically carry the legal authority to issue compounding spot fines. Constables cannot confiscate your keys or issue challans unless authorized by official e-challan machines.',
        iconType: 'tip'
      },
      {
        title: 'Key Snatching is Illegal',
        content: 'Police officers are not permitted by law to forcibly remove ignition keys from a running vehicle, puncture tires, or physically harass drivers. If you feel unsafe, you have the right to request a formal receipt and identity verification.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'A traffic officer stops a driver and claims: "DigiLocker is not accepted in this state, pay a fine for not having original physical RC book."',
      analysis: 'Ministry of Road Transport and Highways (MoRTH) circulars explicitly bind all state traffic departments to accept DigiLocker and mParivahan.',
      actionable_tip: 'Politely show the official DigiLocker certificate and reference MoRTH notification RT-11036/64/2017-MVL.'
    },
    key_takeaways: [
      'DigiLocker and mParivahan documents are legally equivalent to physical originals.',
      'Officers cannot arbitrarily snatch keys from vehicles.',
      'Spot fines require authorized officers with official electronic challan machines.',
      'Every payment must be accompanied by an official printed or SMS e-challan receipt.'
    ]
  },
  {
    id: 'lesson-law-9',
    topic_id: 'law-9',
    subject_id: 'law-rights',
    title: 'Rental Agreements & Tenant Protections',
    subtitle: 'Security deposits, 11-month lease logic, maintenance disputes, and eviction rules',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Why are almost all standard rental agreements signed for exactly 11 months, and can a landlord unilaterally lock you out of your apartment over a deposit disagreement?',
    sections: [
      {
        title: 'Why the 11-Month Duration?',
        content: 'Under the Registration Act 1908 (Section 17), leases exceeding 11 months (i.e. 12 months or more) mandate formal compulsory registration and high stamp duty. An 11-month agreement can be executed on non-judicial stamp paper with notarization, saving registration friction.',
        iconType: 'concept'
      },
      {
        title: 'Security Deposit & Deductions',
        content: 'Security deposits are meant to cover unpaid utility bills or actual physical property damages beyond reasonable wear and tear. Landlords cannot make arbitrary deductions without providing itemized repair receipts.',
        highlight: 'Model Tenancy Act recommendations cap residential security deposits at a maximum of 2 months rent.',
        iconType: 'tip'
      },
      {
        title: 'Unlawful Eviction is Illegal',
        content: 'A landlord cannot physically lock out a tenant, disconnect water/electricity utilities, or throw belongings onto the street without following due legal notice periods (typically 30 days) and obtaining a court order for recovery of possession.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'A landlord cuts off electricity to force an immediate eviction because the tenant asked for a 2-week grace period on rent.',
      analysis: 'Cutting off essential utilities violates basic tenancy laws and common law protections under the Transfer of Property Act.',
      actionable_tip: 'Always keep signed copies of the lease and digital rent receipts. You can report utility disconnection to the local Rent Authority or police.'
    },
    key_takeaways: [
      '11-month agreements avoid mandatory court registration requirements under Registration Act.',
      'Security deposit deductions require documented proof of non-wear-and-tear damage.',
      'Cutting off electricity or water to force eviction is strictly illegal.',
      'Notice periods specified in the signed agreement bind both landlord and tenant.'
    ]
  },
  {
    id: 'lesson-law-10',
    topic_id: 'law-10',
    subject_id: 'law-rights',
    title: 'Contracts & Notarization Essentials',
    subtitle: 'What makes an agreement legally valid under the Indian Contract Act 1872',
    estimated_minutes: 10,
    difficulty: 'Advanced',
    hook: 'Is an agreement written on a plain sheet of paper or agreed over WhatsApp messages legally binding in court, or does everything need a ₹500 stamp paper with notary seal?',
    sections: [
      {
        title: 'The 4 Pillars of a Valid Contract',
        content: 'Under Section 10 of the Indian Contract Act 1872, an agreement is a valid contract if it has: 1. Free Consent (no coercion, fraud, or undue influence), 2. Competent Parties (age of majority, sound mind), 3. Lawful Consideration & Object (not illegal/against public policy), 4. Not expressly declared void.',
        iconType: 'concept'
      },
      {
        title: 'Notary vs Registration',
        content: 'A Notary Public merely verifies the identity of the signing parties to prevent fraud. Registration (under the Registration Act) creates a permanent public record with the Sub-Registrar and is mandatory for property transfers, sales, and long-term leases.',
        highlight: 'Notarizing a document does NOT substitute for mandatory registration when the law requires registration.',
        iconType: 'warning'
      },
      {
        title: 'Digital Agreements & Electronic Signatures',
        content: 'Under Section 10A of the Information Technology Act 2000, electronic contracts formed via email, digital platforms, or Aadhaar e-Sign are recognized as legally valid and admissible as evidence.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'Two freelance partners agree via signed email agreement with clear milestone deliverables and payment terms.',
      analysis: 'This constitutes a binding, enforceable digital contract under the Contract Act and IT Act.',
      actionable_tip: 'Always define deliverables, timelines, payment schedules, and dispute resolution mechanisms in writing before starting work.'
    },
    key_takeaways: [
      'A valid contract requires offer, acceptance, lawful consideration, and free mutual consent.',
      'Notarization verifies identity; registration creates a legally binding public title record.',
      'Electronic contracts and emails are legally enforceable under IT Act Section 10A.',
      'Agreements lacking lawful consideration or obtained under coercion are null and void.'
    ]
  }
];

export const LAW_QUESTIONS: Question[] = [
  // Lesson 1 questions
  {
    id: 'q-law-1-1',
    lesson_id: 'lesson-law-1',
    subject_id: 'law-rights',
    question: 'Which constitutional article was described by Dr. B.R. Ambedkar as the "Heart and Soul of the Constitution"?',
    option_a: 'Article 14 (Equality Before Law)',
    option_b: 'Article 19 (Freedom of Speech)',
    option_c: 'Article 32 (Right to Constitutional Remedies)',
    option_d: 'Article 51A (Fundamental Duties)',
    correct_answer: 'C',
    explanation: 'Article 32 guarantees direct access to the Supreme Court for enforcement of Fundamental Rights via constitutional writs.'
  },
  {
    id: 'q-law-1-2',
    lesson_id: 'lesson-law-1',
    subject_id: 'law-rights',
    question: 'Fundamental Rights in India are primarily enforceable against which of the following?',
    option_a: 'Private family members only',
    option_b: 'State bodies and government authorities',
    option_c: 'Foreign international organizations only',
    option_d: 'Solely private employers',
    correct_answer: 'B',
    explanation: 'Fundamental Rights protect citizens primarily against arbitrary or discriminatory actions of the State.'
  },
  {
    id: 'q-law-1-3',
    lesson_id: 'lesson-law-1',
    subject_id: 'law-rights',
    question: 'Under which article can a citizen approach a State High Court for violation of fundamental rights?',
    option_a: 'Article 226',
    option_b: 'Article 370',
    option_c: 'Article 356',
    option_d: 'Article 100',
    correct_answer: 'A',
    explanation: 'Article 226 empowers High Courts to issue writs for the enforcement of fundamental rights and other legal rights.'
  },

  // Lesson 2 questions
  {
    id: 'q-law-2-1',
    lesson_id: 'lesson-law-2',
    subject_id: 'law-rights',
    question: 'In which landmark case did a 9-judge Supreme Court bench declare the Right to Privacy as a fundamental right under Article 21?',
    option_a: 'Kesavananda Bharati case',
    option_b: 'K.S. Puttaswamy v. Union of India',
    option_c: 'Golaknath case',
    option_d: 'Vishaka v. State of Rajasthan',
    correct_answer: 'B',
    explanation: 'The 2017 Justice K.S. Puttaswamy judgment established privacy as an intrinsic component of Article 21.'
  },
  {
    id: 'q-law-2-2',
    lesson_id: 'lesson-law-2',
    subject_id: 'law-rights',
    question: 'Can a hospital deny emergency life-saving treatment to an accident victim citing pending police paperwork?',
    option_a: 'Yes, police approval is always mandatory first',
    option_b: 'No, hospitals must provide emergency care immediately (Parmanand Katara ruling)',
    option_c: 'Yes, if the hospital is privately owned',
    option_d: 'Only if the patient is accompanied by two witnesses',
    correct_answer: 'B',
    explanation: 'Under Article 21 jurisprudence, saving life takes absolute precedence over procedural paperwork.'
  },

  // Lesson 3 questions
  {
    id: 'q-law-3-1',
    lesson_id: 'lesson-law-3',
    subject_id: 'law-rights',
    question: 'What is a "Zero FIR"?',
    option_a: 'An FIR that has zero investigative value',
    option_b: 'An FIR registered at any police station regardless of jurisdiction',
    option_c: 'An FIR registered with zero court fees',
    option_d: 'An FIR for minor traffic violations only',
    correct_answer: 'B',
    explanation: 'A Zero FIR can be lodged at any police station, which initiates immediate action and then transfers it to the proper jurisdiction.'
  },
  {
    id: 'q-law-3-2',
    lesson_id: 'lesson-law-3',
    subject_id: 'law-rights',
    question: 'How much are you legally required to pay for a certified copy of your registered FIR?',
    option_a: '₹500 application fee',
    option_b: '₹100 processing charge',
    option_c: 'It is 100% Free of cost under law',
    option_d: '1% of the stolen asset value',
    correct_answer: 'C',
    explanation: 'Section 154 CrPC mandates that a copy of the recorded FIR must be given to the informant immediately and free of cost.'
  },

  // Lesson 4 questions
  {
    id: 'q-law-4-1',
    lesson_id: 'lesson-law-4',
    subject_id: 'law-rights',
    question: 'Within how many hours must an arrested individual be produced before the nearest Judicial Magistrate?',
    option_a: '12 hours',
    option_b: '24 hours (excluding journey time)',
    option_c: '48 hours',
    option_d: '7 days',
    correct_answer: 'B',
    explanation: 'Article 22(2) and Section 57 CrPC strictly require production before a magistrate within 24 hours.'
  },
  {
    id: 'q-law-4-2',
    lesson_id: 'lesson-law-4',
    subject_id: 'law-rights',
    question: 'Which set of landmark Supreme Court guidelines governs arrest and detention procedures in India?',
    option_a: 'D.K. Basu Guidelines',
    option_b: 'Macaulay Guidelines',
    option_c: 'Hunter Commission Rules',
    option_d: 'Radcliffe Protocol',
    correct_answer: 'A',
    explanation: 'The D.K. Basu v. State of West Bengal guidelines set strict procedural rules for arrest memos, medical checks, and family notification.'
  },

  // Lesson 5 questions
  {
    id: 'q-law-5-1',
    lesson_id: 'lesson-law-5',
    subject_id: 'law-rights',
    question: 'What is the official online portal to file consumer court complaints directly from home?',
    option_a: 'E-Daakhil',
    option_b: 'FastTrack-Gov',
    option_c: 'DigiCourt-Now',
    option_d: 'InsolvencyPortal',
    correct_answer: 'A',
    explanation: 'E-Daakhil (edaakhil.nic.in) enables digital filing of consumer complaints across District, State, and National commissions.'
  },
  {
    id: 'q-law-5-2',
    lesson_id: 'lesson-law-5',
    subject_id: 'law-rights',
    question: 'Can a retail shop or airport kiosk legally charge higher than the Maximum Retail Price (MRP)?',
    option_a: 'Yes, if they have higher air conditioning costs',
    option_b: 'No, MRP is the legal upper ceiling inclusive of all taxes',
    option_c: 'Yes, if the customer agrees verbally',
    option_d: 'Only after 8:00 PM',
    correct_answer: 'B',
    explanation: 'Under Legal Metrology Rules and Consumer Protection Act, charging above MRP is a punishable unfair trade practice.'
  },

  // Lesson 6 questions
  {
    id: 'q-law-6-1',
    lesson_id: 'lesson-law-6',
    subject_id: 'law-rights',
    question: 'What is the standard response time for a Public Information Officer (PIO) under the RTI Act 2005?',
    option_a: '7 days',
    option_b: '30 days (48 hours for life & liberty matters)',
    option_c: '90 days',
    option_d: '6 months',
    correct_answer: 'B',
    explanation: 'The RTI Act specifies 30 days for standard requests and an expedited 48-hour window if it relates to life or liberty.'
  },

  // Lesson 7 questions
  {
    id: 'q-law-7-1',
    lesson_id: 'lesson-law-7',
    subject_id: 'law-rights',
    question: 'What is the National Financial Cybercrime Helpline number to report online banking frauds immediately?',
    option_a: '100',
    option_b: '1930',
    option_c: '1098',
    option_d: '112',
    correct_answer: 'B',
    explanation: '1930 connects directly to the Citizen Financial Cyber Fraud Reporting System to freeze fraudulent money flows.'
  },
  {
    id: 'q-law-7-2',
    lesson_id: 'lesson-law-7',
    subject_id: 'law-rights',
    question: 'When do you need to enter your UPI PIN?',
    option_a: 'Only when SENDING or paying money out of your account',
    option_b: 'When receiving money from a customer',
    option_c: 'When claiming cashback vouchers',
    option_d: 'To unlock incoming transfers',
    correct_answer: 'A',
    explanation: 'UPI PIN is exclusively for authorizing debits (sending money). Receiving money never requires a PIN.'
  },

  // Lesson 8 questions
  {
    id: 'q-law-8-1',
    lesson_id: 'lesson-law-8',
    subject_id: 'law-rights',
    question: 'Are digital vehicle documents stored in DigiLocker or mParivahan legally valid during traffic checks?',
    option_a: 'No, physical originals are always required',
    option_b: 'Yes, they have equal legal standing under IT Act and Motor Vehicle Rules',
    option_c: 'Only if printed on paper first',
    option_d: 'Only in your home district',
    correct_answer: 'B',
    explanation: 'Central Motor Vehicles Rules Section 139 and IT Act Section 4 legally equate DigiLocker documents with physical originals.'
  },

  // Lesson 9 questions
  {
    id: 'q-law-9-1',
    lesson_id: 'lesson-law-9',
    subject_id: 'law-rights',
    question: 'Why are standard residential tenancy agreements commonly drafted for 11 months?',
    option_a: 'Leases for 12 months or more require mandatory registration and higher stamp duty',
    option_b: 'Tenants cannot stay in one place for a full year',
    option_c: 'Indian contract law caps rental periods at 11 months',
    option_d: 'To align with the financial tax year',
    correct_answer: 'A',
    explanation: 'Under the Registration Act 1908, leases under 1 year (11 months) are exempt from compulsory Sub-Registrar registration.'
  },

  // Lesson 10 questions
  {
    id: 'q-law-10-1',
    lesson_id: 'lesson-law-10',
    subject_id: 'law-rights',
    question: 'Does a Notary Public seal make an unregistered real estate sale deed permanently legal?',
    option_a: 'Yes, a notary replaces all court registration',
    option_b: 'No, notary only verifies identity; property sales require mandatory Sub-Registrar registration',
    option_c: 'Yes, if signed by two bank managers',
    option_d: 'Only for commercial properties',
    correct_answer: 'B',
    explanation: 'Notarization verifies signatures and identities, but cannot override statutory registration requirements for immovable property.'
  }
];
