import { Lesson, Question } from '../types';

export const ECONOMICS_LESSONS: Lesson[] = [
  {
    id: 'lesson-eco-1',
    topic_id: 'eco-1',
    subject_id: 'economics',
    title: 'What is Economics & Opportunity Cost?',
    subtitle: 'The science of scarcity, trade-offs, and everyday decision-making',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Economics is not about money and stock tickers—it is fundamentally about human choice under scarcity. Every time you say "yes" to one option, you are saying "no" to something else.',
    sections: [
      {
        title: 'The Core Problem: Scarcity',
        content: 'Human wants and needs are virtually limitless, but resources (time, money, labor, raw materials) are strictly finite. Economics is the study of how individuals, businesses, and societies allocate these scarce resources to satisfy competing objectives.',
        iconType: 'concept'
      },
      {
        title: 'What is Opportunity Cost?',
        content: 'The Opportunity Cost of any choice is the value of the NEXT BEST alternative you sacrificed. If you spend ₹200 and 2 hours watching a movie on a Friday night, the true cost is not just the ₹200 ticket—it is also what else you could have done with those 2 hours (sleeping, learning a skill, or earning income).',
        highlight: 'Recognizing opportunity cost prevents you from falling into the trap of thinking "free" things have zero cost.',
        iconType: 'tip'
      },
      {
        title: 'Sunk Cost Fallacy',
        content: 'A sunk cost is money or time already spent that cannot be recovered. Rational decision-making means ignoring sunk costs and focusing purely on future marginal benefits. Never sit through a terrible 3-hour movie just because you paid for the ticket.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'You are offered a free concert ticket for Sunday evening, but you had planned to work a freelance gig earning ₹4,000.',
      analysis: 'The concert is not "free"—its real economic opportunity cost is the ₹4,000 in lost income you gave up.',
      actionable_tip: 'Always ask: "What am I giving up to do this?" before committing time or money.'
    },
    key_takeaways: [
      'Economics is the study of decision-making under resource scarcity.',
      'Opportunity cost is the value of the foregone next-best alternative.',
      'Time is your most scarce, non-renewable economic resource.',
      'Ignore sunk costs—make decisions based on future marginal value.'
    ]
  },
  {
    id: 'lesson-eco-2',
    topic_id: 'eco-2',
    subject_id: 'economics',
    title: 'Demand & Supply: Price Formation',
    subtitle: 'The invisible hand that determines the price of everything around you',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Why do umbrella prices surge during a sudden torrential rainstorm, or why do flight tickets skyrocket during festive holidays? It is the pure interplay of Demand and Supply.',
    sections: [
      {
        title: 'The Law of Demand',
        content: 'All else being equal (ceteris paribus), as the price of a good increases, consumer quantity demanded falls. Conversely, when prices drop, quantity demanded rises. The demand curve slopes downward.',
        iconType: 'concept'
      },
      {
        title: 'The Law of Supply',
        content: 'As the market price of a good increases, suppliers are incentivized to produce and sell MORE of that good to maximize profits. When prices plunge, suppliers cut back production.',
        iconType: 'concept'
      },
      {
        title: 'Market Equilibrium & Price Elasticity',
        content: 'The price where quantity demanded equals quantity supplied is called the Equilibrium Price. If price is too high, a surplus forms (forcing discounts). If price is too low, a shortage forms (driving prices up). Essential items (like insulin or basic food) have "inelastic demand"—people must buy them regardless of price hikes.',
        highlight: 'Price elasticity measures how sensitive buyer demand is to price fluctuations.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'A frost destroys 40% of the country\'s tomato crop while household demand remains steady.',
      analysis: 'Supply shifts sharply to the left. With fewer tomatoes in mandis and constant buyer demand, the equilibrium price spikes until marginal buyers substitute with other ingredients.',
      actionable_tip: 'When prices of an elastic commodity surge due to temporary supply shocks, switch to available substitutes.'
    },
    key_takeaways: [
      'Demand drops when prices rise; supply increases when prices rise.',
      'Equilibrium is the natural balance point where supply meets demand.',
      'Shortages push prices up; gluts and surpluses push prices down.',
      'Elastic goods are price-sensitive, while inelastic necessities are not.'
    ]
  },
  {
    id: 'lesson-eco-3',
    topic_id: 'eco-3',
    subject_id: 'economics',
    title: 'Understanding Inflation & CPI Baskets',
    subtitle: 'Why prices rise: demand-pull vs cost-push, and measuring the cost of living',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Last year your family could buy a full month of groceries for ₹5,000. This year the exact same groceries cost ₹5,700. What explains this 14% jump? You are experiencing inflation in action.',
    sections: [
      {
        title: 'What is Inflation?',
        content: 'Inflation is a broad, sustained increase in the general price level of goods and services across an economy over time. When inflation occurs, every unit of currency purchases fewer goods and services—reducing your purchasing power.',
        highlight: 'Inflation is not just one product getting expensive; it is the overall general price level rising.',
        iconType: 'concept'
      },
      {
        title: 'The Two Main Drivers',
        content: '1. Demand-Pull Inflation: "Too much money chasing too few goods" (e.g. after massive stimulus when everyone wants to travel and hotels are booked out). 2. Cost-Push Inflation: Rising production costs (e.g. global crude oil spikes making transport and fertilizer more expensive, driving up food prices).',
        iconType: 'concept'
      },
      {
        title: 'How It is Measured: The CPI Basket',
        content: 'The Consumer Price Index (CPI) tracks the price change of a weighted "basket" of goods and services typically bought by households (food, fuel, housing, healthcare, education). Central banks use CPI to monitor economic health.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'Global crude oil prices jump from $70 to $110 per barrel. Within weeks, truck freight rates rise, milk packets cost ₹4 more, and vegetable delivery charges increase.',
      analysis: 'This is classic Cost-Push inflation: transportation is an essential input across all consumer goods.',
      actionable_tip: 'To protect your future standard of living against 6-7% inflation, your income and investment portfolio must grow faster than the inflation rate.'
    },
    key_takeaways: [
      'Inflation represents the general decrease in currency purchasing power.',
      'Demand-pull occurs when buyer demand outstrips production capacity.',
      'Cost-push happens when raw materials, energy, or labor costs spike.',
      'The CPI index tracks a standardized representative basket of household items.'
    ]
  },
  {
    id: 'lesson-eco-4',
    topic_id: 'eco-4',
    subject_id: 'economics',
    title: 'GDP & Economic Growth Explained',
    subtitle: 'Gross Domestic Product: How the size of a nation\'s economy is calculated',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'News channels celebrate when GDP expands by 7% or panic when it drops. But what does GDP actually count, and does a higher GDP mean every citizen is wealthier?',
    sections: [
      {
        title: 'The Definition of GDP',
        content: 'Gross Domestic Product (GDP) is the total monetary value of all final goods and services produced within a country\'s geographic borders during a specific period (usually a year or quarter).',
        highlight: 'GDP only counts FINAL goods to prevent double counting (e.g. counts the final car, not both the car AND the steel sold to the carmaker).',
        iconType: 'concept'
      },
      {
        title: 'The Expenditure Formula: C + I + G + (X - M)',
        content: 'Economists calculate GDP via 4 engines: C = Private Household Consumption, I = Business Investment (factories, machinery), G = Government Spending on infrastructure/services, (X - M) = Net Exports (Exports minus Imports).',
        iconType: 'concept'
      },
      {
        title: 'Real GDP vs Nominal GDP',
        content: 'Nominal GDP measures output at current market prices without adjusting for inflation. Real GDP strips out inflation using constant base-year prices, showing true physical growth in goods and services produced.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'A country produces 100 shirts at $10 in Year 1 (GDP = $1,000). In Year 2, it produces the same 100 shirts but inflation made them $12 (Nominal GDP = $1,200).',
      analysis: 'Nominal GDP grew 20%, but Real GDP growth is 0% because the country produced zero additional shirts.',
      actionable_tip: 'Always look at Real GDP growth figures to judge genuine economic progress.'
    },
    key_takeaways: [
      'GDP is the total market value of all final goods and services produced in a country.',
      'The 4 pillars are Consumption, Investment, Government Spending, and Net Exports.',
      'Real GDP adjusts for inflation to measure actual physical production growth.',
      'GDP per capita divides GDP by total population to estimate average living standards.'
    ]
  },
  {
    id: 'lesson-eco-5',
    topic_id: 'eco-5',
    subject_id: 'economics',
    title: 'Unemployment & Labor Dynamics',
    subtitle: 'Understanding the labor force, structural shifts, and cyclical job trends',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'If someone is not working, are they automatically counted as unemployed? Not in economic terms. Understanding labor statistics reveals how job markets actually work.',
    sections: [
      {
        title: 'Who is Economically Unemployed?',
        content: 'An unemployed person is someone who is in the working-age population, actively seeking a job, but unable to find work. Students, retirees, and discouraged workers who gave up looking are classified as "out of the labor force", not unemployed.',
        iconType: 'concept'
      },
      {
        title: 'The 3 Main Types of Unemployment',
        content: '1. Frictional: Temporary transition while moving between jobs or graduating. 2. Structural: A mismatch between workers\' skills and market demands (e.g. AI replacing manual data entry). 3. Cyclical: Caused by overall economic downturns and recessions.',
        highlight: 'Structural unemployment requires reskilling, while cyclical unemployment requires macroeconomic stimulus.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'An assembly line automates robotic welding. 200 manual welders lose jobs while the plant hires 20 robotics software technicians.',
      analysis: 'This is structural unemployment: total jobs might exist, but the required skill set has fundamentally changed.',
      actionable_tip: 'Continuous learning and skill updating are your best insurance against structural obsolescence.'
    },
    key_takeaways: [
      'Unemployment measures active job seekers without work relative to the total labor force.',
      'Frictional unemployment is normal and healthy during career transitions.',
      'Structural unemployment stems from technological shifts and skill mismatches.',
      'Cyclical unemployment rises during economic recessions and falls in booms.'
    ]
  },
  {
    id: 'lesson-eco-6',
    topic_id: 'eco-6',
    subject_id: 'economics',
    title: 'Central Banks & The Repo Rate',
    subtitle: 'How central bank interest decisions directly impact your home loan and FD returns',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'When the RBI or US Federal Reserve changes interest rates by just 0.25%, global stock markets sway and millions of mortgage payments adjust. Why does this single lever carry such immense power?',
    sections: [
      {
        title: 'What is the Repo Rate?',
        content: 'The Repo Rate (Repurchase Rate) is the interest rate at which the Central Bank (like RBI in India) lends short-term money to commercial banks against government securities. It is the baseline benchmark for the entire financial system.',
        iconType: 'concept'
      },
      {
        title: 'The Rate Hike Mechanism (Fighting Inflation)',
        content: 'When inflation runs too hot, the central bank RAISES the repo rate. Commercial banks pass this hike to borrowers: home loans, car loans, and business credits get more expensive. People borrow and spend less, cooling down demand and lowering inflation.',
        highlight: 'When repo rates go up, loan EMIs rise, but Fixed Deposit interest rates also increase.',
        iconType: 'tip'
      },
      {
        title: 'The Rate Cut Mechanism (Boosting Growth)',
        content: 'During economic slowdowns or recessions, the central bank CUTS interest rates. Borrowing becomes cheap, encouraging businesses to build factories and consumers to buy homes, stimulating GDP growth.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'RBI hikes the repo rate by 100 bps (1.0%). A family\'s floating home loan interest rate moves from 8.0% to 9.0%.',
      analysis: 'Their monthly EMI increases or their total loan tenure extends by 4 years, reducing discretionary household spending.',
      actionable_tip: 'When interest rates are rising, make prepayments towards your loan principal to prevent tenure extension.'
    },
    key_takeaways: [
      'The Repo Rate is the key interest rate set by the central bank for commercial banks.',
      'Rate hikes cool runaway inflation by making borrowing more expensive.',
      'Rate cuts stimulate sluggish economic growth by making credit cheap.',
      'Central banks walk a fine line balancing low inflation with healthy economic growth.'
    ]
  },
  {
    id: 'lesson-eco-7',
    topic_id: 'eco-7',
    subject_id: 'economics',
    title: 'Monetary Policy & Money Supply',
    subtitle: 'How fractional reserve banking and open market operations expand credit',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Did you know that over 90% of the money circulating in a modern economy does not exist as physical cash printed by the government, but was created digitally through commercial bank loans?',
    sections: [
      {
        title: 'Fractional Reserve Banking',
        content: 'When you deposit ₹10,000 in a bank, the bank does not lock it in a vault. Under Cash Reserve Ratio (CRR) rules, it holds a small fraction (e.g. 4.5% or ₹450) and lends out the remaining ₹9,550 to someone else, who deposits it in another bank. This creates the "Money Multiplier" effect.',
        iconType: 'concept'
      },
      {
        title: 'Quantitative Easing & Tightening',
        content: 'In severe crises, central banks inject liquidity directly by purchasing government bonds from the open market (Quantitative Easing or QE). When liquidity is excessive, they sell bonds to soak up surplus cash (Quantitative Tightening).',
        highlight: 'Excessive unchecked money printing without corresponding economic output inevitably triggers hyperinflation.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'In response to the 2020 pandemic crash, global central banks expanded money supply by trillions of dollars.',
      analysis: 'This prevented financial collapse, but later contributed to a worldwide surge in consumer price inflation in 2022-2023.',
      actionable_tip: 'Monitor central bank liquidity announcements to understand broad stock market and bond trends.'
    },
    key_takeaways: [
      'Commercial banks create money through the fractional reserve lending process.',
      'Cash Reserve Ratio (CRR) mandates the percentage of deposits banks must keep with the central bank.',
      'Open Market Operations (buying/selling bonds) manage system-wide liquidity.',
      'Uncontrolled growth in money supply debases the value of the currency.'
    ]
  },
  {
    id: 'lesson-eco-8',
    topic_id: 'eco-8',
    subject_id: 'economics',
    title: 'Fiscal Policy & Government Deficits',
    subtitle: 'Taxes, public infrastructure spending, debt, and the annual budget',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Every year, the Finance Minister presents the Union Budget. While Monetary Policy is run by the independent Central Bank, Fiscal Policy is run directly by the elected Government.',
    sections: [
      {
        title: 'What is Fiscal Policy?',
        content: 'Fiscal policy refers to government decisions regarding Taxation (revenue collection) and Public Expenditure (spending on defense, highways, railways, subsidies, healthcare, and education).',
        iconType: 'concept'
      },
      {
        title: 'Fiscal Deficit Explained',
        content: 'When government total expenditure exceeds total revenue (excluding borrowings), the gap is called the Fiscal Deficit. Governments fund this deficit by borrowing money through Sovereign Bonds from domestic investors, banks, and foreign institutions.',
        highlight: 'A moderate fiscal deficit (3-4% of GDP) invested in productive capital infrastructure boosts long-term GDP.',
        iconType: 'tip'
      },
      {
        title: 'Capital Expenditure (Capex) vs Revenue Expenditure',
        content: 'Capex builds durable assets (airports, expressways, power grids) that generate future returns. Revenue expenditure pays ongoing operational costs (salaries, pensions, interest on past loans). High Capex creates higher multiplier benefits for the economy.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'The government allocates ₹10 Lakh Crores to build dedicated freight railway corridors and highway networks.',
      analysis: 'This Capital Expenditure reduces logistics costs for all businesses, making domestic goods globally competitive for decades.',
      actionable_tip: 'Pay attention to Capex allocations in the national budget to identify fast-growing economic sectors.'
    },
    key_takeaways: [
      'Fiscal policy is managed by the government through taxation and spending.',
      'Fiscal deficit is the annual shortfall funded by sovereign market borrowing.',
      'Capital expenditure (Capex) builds productive infrastructure that generates future growth.',
      'Excessive unproductive fiscal deficits lead to high debt burdens and sovereign rating downgrades.'
    ]
  },
  {
    id: 'lesson-eco-9',
    topic_id: 'eco-9',
    subject_id: 'economics',
    title: 'Recessions & The Business Cycle',
    subtitle: 'Why economies expand and contract, yield curves, and recession readiness',
    estimated_minutes: 10,
    difficulty: 'Advanced',
    hook: 'Economic growth is never a straight upward line. Free-market economies naturally flow through predictable cycles of expansion, peak, contraction (recession), and trough.',
    sections: [
      {
        title: 'What Constitutes a Recession?',
        content: 'A technical recession is commonly defined as two consecutive quarters (6 months) of negative Real GDP growth. During recessions, consumer spending slows, business revenues drop, hiring freezes, and unemployment increases.',
        iconType: 'concept'
      },
      {
        title: 'The Inverted Yield Curve Indicator',
        content: 'Normally, lending money for 10 years pays a higher interest rate than lending for 2 years. When 2-year bond yields rise ABOVE 10-year yields (an Inverted Yield Curve), bond markets are signaling high risk of an upcoming recession within 12-18 months.',
        highlight: 'The inverted yield curve has accurately preceded almost every modern recession.',
        iconType: 'tip'
      },
      {
        title: 'Recession Proofing Your Life',
        content: 'You cannot prevent a macroeconomic recession, but you can build resilience: 1. Maintain 6 months of liquid emergency funds, 2. Keep debt levels low, 3. Develop high-demand transferable skills, 4. Continue long-term dollar-cost averaging in broad index funds when others panic.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'During the 2008 or 2020 economic downturns, stock markets fell by 30-40%. Disciplined investors who kept investing monthly through SIPs achieved massive wealth multiplication over the following decade.',
      analysis: 'Recessions offer generational asset buying opportunities for those with cash reserves and job stability.',
      actionable_tip: 'Never panic-sell your long-term equity portfolio during a recession.'
    },
    key_takeaways: [
      'Business cycles consist of expansion, peak, recession, and recovery phases.',
      'A technical recession means two consecutive quarters of contracting real GDP.',
      'Inverted yield curves often signal incoming economic downturns.',
      'Emergency savings and low fixed debt provide the ultimate individual recession armor.'
    ]
  },
  {
    id: 'lesson-eco-10',
    topic_id: 'eco-10',
    subject_id: 'economics',
    title: 'Foreign Exchange & Trade Balances',
    subtitle: 'Why currencies strengthen or depreciate and how imports/exports impact everyday life',
    estimated_minutes: 10,
    difficulty: 'Advanced',
    hook: 'Why does the exchange rate of 1 USD vs INR fluctuate, and does a weaker domestic currency always harm the economy or can it help domestic exporters?',
    sections: [
      {
        title: 'What Determines Exchange Rates?',
        content: 'In floating exchange rate regimes, a currency\'s value is determined by global supply and demand. Demand for a currency rises when foreign investors invest in domestic stock markets, when foreign buyers buy domestic exports, or when interest rates are attractive.',
        iconType: 'concept'
      },
      {
        title: 'Current Account Deficit (CAD)',
        content: 'If a country imports more goods and services (like crude oil, electronics, and gold) than it exports, it has a trade deficit. To pay for the excess imports, it must sell its domestic currency and buy foreign currencies (like USD), creating downward pressure on the local currency.',
        highlight: 'A weaker currency makes imported goods (like fuel and smartphones) more expensive, but makes domestic software and textile exports cheaper and more competitive globally.',
        iconType: 'tip'
      },
      {
        title: 'Foreign Exchange Reserves (Forex)',
        content: 'Central banks hold billions of dollars in foreign currencies, gold, and US Treasuries. These Forex reserves provide a buffer to prevent sudden currency crashes and guarantee payments for essential imports during global crises.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'The US Dollar strengthens from ₹80 to ₹86. A laptop manufacturer assembling laptops in India using imported chips must pay more for parts.',
      analysis: 'Imported electronic gadgets become more expensive for consumers. Simultaneously, an Indian IT company billing clients in USD earns higher rupee revenue for the same software services.',
      actionable_tip: 'Countries that build self-reliance in energy and high-tech manufacturing protect their currency value over the long run.'
    },
    key_takeaways: [
      'Exchange rates reflect global trade flows, capital investments, and interest rate differentials.',
      'Trade deficits put downward pressure on a country\'s currency.',
      'Currency depreciation increases import costs but aids export competitiveness.',
      'Adequate Forex reserves safeguard economic stability against global financial shocks.'
    ]
  }
];

export const ECONOMICS_QUESTIONS: Question[] = [
  // Lesson 1 questions
  {
    id: 'q-eco-1-1',
    lesson_id: 'lesson-eco-1',
    subject_id: 'economics',
    question: 'What is "Opportunity Cost" in economics?',
    option_a: 'The accounting price of a product',
    option_b: 'The value of the next best alternative given up when making a decision',
    option_c: 'The cost of opening a new business opportunity',
    option_d: 'The discounts offered during festive sales',
    correct_answer: 'B',
    explanation: 'Opportunity cost is the highest-value option sacrificed when making any choice under resource constraints.'
  },
  {
    id: 'q-eco-1-2',
    lesson_id: 'lesson-eco-1',
    subject_id: 'economics',
    question: 'What is the "Sunk Cost Fallacy"?',
    option_a: 'Failing to invest in maritime shipping',
    option_b: 'Continuing a failing activity merely because you have already invested unrecoverable time or money into it',
    option_c: 'Ignoring future investment gains',
    option_d: 'Underestimating tax obligations',
    correct_answer: 'B',
    explanation: 'The sunk cost fallacy occurs when past unrecoverable costs improperly dictate future rational choices.'
  },

  // Lesson 2 questions
  {
    id: 'q-eco-2-1',
    lesson_id: 'lesson-eco-2',
    subject_id: 'economics',
    question: 'According to the Law of Demand, what happens to consumer quantity demanded when the price of a good rises (ceteris paribus)?',
    option_a: 'Quantity demanded increases',
    option_b: 'Quantity demanded decreases',
    option_c: 'Quantity demanded remains exactly identical',
    option_d: 'Quantity supplied instantly falls to zero',
    correct_answer: 'B',
    explanation: 'The Law of Demand states that price and quantity demanded have an inverse relationship.'
  },

  // Lesson 3 questions
  {
    id: 'q-eco-3-1',
    lesson_id: 'lesson-eco-3',
    subject_id: 'economics',
    question: 'What type of inflation is caused when global crude oil price spikes increase transportation and manufacturing costs?',
    option_a: 'Demand-Pull Inflation',
    option_b: 'Cost-Push Inflation',
    option_c: 'Deflationary Spiral',
    option_d: 'Hyper-Velocity Inflation',
    correct_answer: 'B',
    explanation: 'Cost-Push inflation occurs when aggregate supply decreases due to higher production and input costs.'
  },
  {
    id: 'q-eco-3-2',
    lesson_id: 'lesson-eco-3',
    subject_id: 'economics',
    question: 'What does the Consumer Price Index (CPI) measure?',
    option_a: 'The price change of a weighted basket of goods and services consumed by typical households',
    option_b: 'The stock market index of the top 50 retail companies',
    option_c: 'The profits of supermarket chains',
    option_d: 'The foreign exchange reserves of the central bank',
    correct_answer: 'A',
    explanation: 'CPI tracks the price movements of a representative basket of household goods and services to measure retail inflation.'
  },

  // Lesson 4 questions
  {
    id: 'q-eco-4-1',
    lesson_id: 'lesson-eco-4',
    subject_id: 'economics',
    question: 'Why does Real GDP provide a more accurate measure of economic growth than Nominal GDP?',
    option_a: 'Real GDP includes black market cash transactions',
    option_b: 'Real GDP adjusts for inflation, showing true changes in physical output produced',
    option_c: 'Real GDP only counts government spending',
    option_d: 'Real GDP ignores population size',
    correct_answer: 'B',
    explanation: 'Real GDP strips out price inflation using base-year prices to measure genuine output volume growth.'
  },

  // Lesson 5 questions
  {
    id: 'q-eco-5-1',
    lesson_id: 'lesson-eco-5',
    subject_id: 'economics',
    question: 'What is "Structural Unemployment"?',
    option_a: 'Workers temporarily switching between jobs',
    option_b: 'A fundamental mismatch between workers\' existing skills and the skills demanded by modern employers',
    option_c: 'Seasonal unemployment during monsoon months',
    option_d: 'People choosing not to work voluntarily',
    correct_answer: 'B',
    explanation: 'Structural unemployment arises when technological shifts or industrial changes make existing skill sets obsolete.'
  },

  // Lesson 6 questions
  {
    id: 'q-eco-6-1',
    lesson_id: 'lesson-eco-6',
    subject_id: 'economics',
    question: 'When a Central Bank raises the Repo Rate, what is the expected effect on the economy?',
    option_a: 'Borrowing becomes cheaper and spending explodes',
    option_b: 'Loan interest rates rise, borrowing slows down, and inflationary pressures cool',
    option_c: 'All stock prices immediately double',
    option_d: 'Commercial banks stop accepting deposits',
    correct_answer: 'B',
    explanation: 'Higher repo rates make credit more expensive across the economy, slowing down demand to bring inflation under control.'
  },

  // Lesson 7 questions
  {
    id: 'q-eco-7-1',
    lesson_id: 'lesson-eco-7',
    subject_id: 'economics',
    question: 'How do commercial banks create money in a modern financial system?',
    option_a: 'By physically operating printing presses in branch basements',
    option_b: 'Through Fractional Reserve Banking, lending out a majority of deposits while holding a reserve fraction',
    option_c: 'By trading foreign currencies only',
    option_d: 'By distributing free gold coins',
    correct_answer: 'B',
    explanation: 'Banks keep a reserve ratio (CRR) and lend out the rest, generating bank credit and expanding the broad money supply.'
  },

  // Lesson 8 questions
  {
    id: 'q-eco-8-1',
    lesson_id: 'lesson-eco-8',
    subject_id: 'economics',
    question: 'What is the key difference between Capital Expenditure (Capex) and Revenue Expenditure in government budgets?',
    option_a: 'Capex creates durable long-term assets (roads, railways, power); Revenue expenditure funds routine operational costs',
    option_b: 'Capex is only for defense salaries',
    option_c: 'Revenue expenditure builds space rockets',
    option_d: 'Capex is illegal under fiscal law',
    correct_answer: 'A',
    explanation: 'Capex creates productive physical infrastructure that yields economic dividends for decades.'
  },

  // Lesson 9 questions
  {
    id: 'q-eco-9-1',
    lesson_id: 'lesson-eco-9',
    subject_id: 'economics',
    question: 'What is the standard technical definition of an economic recession?',
    option_a: 'Stock market dropping 5% in a single day',
    option_b: 'Two consecutive quarters (6 months) of negative Real GDP growth',
    option_c: 'Any increase in the price of petrol',
    option_d: 'A single quarter with higher taxes',
    correct_answer: 'B',
    explanation: 'Two consecutive quarters of contracting real GDP defines a technical macroeconomic recession.'
  },

  // Lesson 10 questions
  {
    id: 'q-eco-10-1',
    lesson_id: 'lesson-eco-10',
    subject_id: 'economics',
    question: 'When a country experiences a large Trade Deficit (importing far more goods than it exports), what pressure is exerted on its currency?',
    option_a: 'Downward depreciation pressure because domestic currency is sold to buy foreign currencies for imports',
    option_b: 'The domestic currency automatically strengthens tenfold',
    option_c: 'No effect on exchange rates whatsoever',
    option_d: 'All foreign exchange markets shut down',
    correct_answer: 'A',
    explanation: 'Excessive import demand requires selling local currency to buy foreign reserves, causing depreciation pressure.'
  }
];
