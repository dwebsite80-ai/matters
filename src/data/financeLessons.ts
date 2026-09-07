import { Lesson, Question } from '../types';

export const FINANCE_LESSONS: Lesson[] = [
  {
    id: 'lesson-fin-1',
    topic_id: 'fin-1',
    subject_id: 'money-finance',
    title: 'The 50/30/20 Rule & Cash Flow Mastery',
    subtitle: 'The foundational formula for managing take-home income',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Ever reach the 20th of the month and wonder where your entire salary disappeared? You do not need complex accounting software—just three basic buckets.',
    sections: [
      {
        title: 'The 50/30/20 Allocation',
        content: 'Popularized by financial experts, this rule divides your post-tax monthly income into three simple categories: 50% for Needs, 30% for Wants, and 20% for Savings & Debt Payoff.',
        highlight: 'Needs are non-negotiable: rent/EMI, groceries, utilities, basic transportation, and minimum debt payments.',
        iconType: 'concept'
      },
      {
        title: 'Controlling the 30% Wants Bucket',
        content: 'Wants include dining out, streaming subscriptions, weekend trips, and latest gadgets. The beauty of this system is that it gives you guilt-free spending up to 30% without risking your financial future.',
        iconType: 'tip'
      },
      {
        title: 'Automating the 20% Wealth Builder',
        content: 'The secret to wealth is "paying yourself first". Set up an automatic transfer on salary day to move 20% straight into emergency funds, mutual fund SIPs, or retirement accounts before you spend a single rupee on discretionary items.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'You earn ₹50,000 net per month. Under the 50/30/20 framework, how should this be organized?',
      analysis: 'Needs (Rent, food, bills): ₹25,000 max. Wants (Dining, entertainment): ₹15,000 max. Savings & Investments (SIPs, Emergency Fund): ₹10,000 min.',
      actionable_tip: 'Set up an automated SIP for ₹10,000 on the 2nd of every month so you never accidentally spend your investment portion.'
    },
    key_takeaways: [
      '50% goes to survival essentials (needs), 30% to lifestyle (wants), and 20% to savings.',
      'Always pay yourself first by automating the 20% investment bucket on day one.',
      'Lifestyle creep happens when wants expand into the savings bucket.',
      'Review your allocations every 6 months or whenever your income changes.'
    ]
  },
  {
    id: 'lesson-fin-2',
    topic_id: 'fin-2',
    subject_id: 'money-finance',
    title: 'Saving vs Inflation: The Silent Tax',
    subtitle: 'Why keeping cash in a savings bank account slowly erodes purchasing power',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'If you keep ₹1,00,000 locked in a bank account earning 3% annual interest while inflation runs at 6%, you did not make money—your real wealth shrank by 3% each year.',
    sections: [
      {
        title: 'Real Return vs Nominal Return',
        content: 'Nominal return is the raw interest percentage your bank advertises. Real Return = Nominal Interest Rate - Inflation Rate. If your savings account gives 3% and consumer inflation is 6%, your real return is -3% per year.',
        highlight: 'Over 10 years, a -3% real return destroys almost 26% of your money purchasing capacity without you losing a single physical note.',
        iconType: 'warning'
      },
      {
        title: 'The Purpose of Different Assets',
        content: 'Bank savings accounts and FDs are designed for safety and immediate liquidity, not wealth creation. To beat inflation over 5+ years, your capital must be deployed into growth assets like equities, index funds, or sovereign debt.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'A family saves ₹5 Lakhs in cash under a mattress for 15 years. Prices of everyday goods double over that period.',
      analysis: 'Though the ₹5,00,000 notes are intact, they can now only buy what ₹2,50,000 could buy originally.',
      actionable_tip: 'Keep only 3-6 months of expenses in liquid savings/FD, and invest long-term capital where expected CAGR exceeds inflation.'
    },
    key_takeaways: [
      'Inflation silently erodes the purchasing power of idle cash.',
      'Real Return = Nominal Interest Rate minus Inflation.',
      'Savings accounts guarantee negative real returns during high inflation periods.',
      'Long-term savings must outpace inflation through diversified growth assets.'
    ]
  },
  {
    id: 'lesson-fin-3',
    topic_id: 'fin-3',
    subject_id: 'money-finance',
    title: 'Emergency Funds: 6 Months of Liquid Peace',
    subtitle: 'Your personal financial shock absorber before taking investment risks',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'What happens if you face a sudden job layoff, family medical emergency, or sudden vehicle breakdown? Without an emergency fund, people are forced to borrow high-interest personal loans or sell investments at a loss.',
    sections: [
      {
        title: 'How Much Do You Need?',
        content: 'An emergency fund should cover 3 to 6 months of mandatory living expenses (rent, groceries, EMIs, insurance premiums, essential utilities). If you have freelance or variable income, aim for 6 to 9 months.',
        iconType: 'concept'
      },
      {
        title: 'Where Should It Be Stored?',
        content: 'An emergency fund is for peace of mind, not high returns. Keep 50% in a high-yield savings account and 50% in a sweep-in Fixed Deposit or Liquid Mutual Fund that can be withdrawn within 24 hours with zero exit penalty.',
        highlight: 'Never lock emergency funds in stock trading accounts, volatile crypto, or illiquid real estate.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'Your monthly mandatory expenses are ₹30,000. Your target emergency cushion is 6 months.',
      analysis: '30,000 x 6 = ₹1,80,000. Store ₹60,000 in your primary bank savings and ₹1,20,000 in an instant-redemption liquid fund or auto-sweep FD.',
      actionable_tip: 'Build this buffer before jumping into high-risk stock trading or crypto speculations.'
    },
    key_takeaways: [
      'An emergency fund protects you from high-interest debt during unforeseen crises.',
      'Target 3-6 months of bare minimum monthly living expenses.',
      'Prioritize instant liquidity and capital preservation over high returns.',
      'Replenish the fund immediately after utilizing it.'
    ]
  },
  {
    id: 'lesson-fin-4',
    topic_id: 'fin-4',
    subject_id: 'money-finance',
    title: 'Compound Interest & The Rule of 72',
    subtitle: 'How exponential math creates life-changing long-term wealth',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'Albert Einstein famously called compound interest the "Eighth Wonder of the World". Those who understand it earn it; those who don\'t, pay it.',
    sections: [
      {
        title: 'Simple vs Compound Growth',
        content: 'Simple interest only earns interest on your original principal. Compound interest earns interest on your principal PLUS all previously accumulated interest. Over long periods, this creates a hockey-stick exponential growth curve.',
        iconType: 'concept'
      },
      {
        title: 'The Mental Shortcut: Rule of 72',
        content: 'Want to know how many years it takes for your investment to double? Divide 72 by your annual interest rate. At 12% annual return: 72 / 12 = 6 years to double. At 6% return: 72 / 6 = 12 years to double.',
        highlight: 'The Rule of 72 gives you an instant estimation of doubling time without needing complex financial calculators.',
        iconType: 'tip'
      },
      {
        title: 'The Cost of Delay',
        content: 'Starting an investment of ₹5,000/month at age 22 vs starting at age 32 at 12% return results in more than DOUBLE the total corpus at age 55, purely due to the 10 extra years of compounding.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'You invest ₹10,000 monthly at 12% estimated annual return. In 10 years you invest ₹12 Lakhs and it grows to ~₹23 Lakhs. In 20 years, investing ₹24 Lakhs grows to nearly ~₹1 Crore!',
      analysis: 'Notice how the second 10 years created almost 4x more growth than the first 10 years—that is compounding acceleration.',
      actionable_tip: 'Time in the market beats timing the market. Start early, even with modest monthly amounts.'
    },
    key_takeaways: [
      'Compound interest earns returns on prior returns.',
      'Rule of 72: Divide 72 by interest rate to calculate doubling time.',
      'The biggest variable in compounding is time, not initial capital.',
      'Compounding works in reverse on credit card debt and loans, compounding against you.'
    ]
  },
  {
    id: 'lesson-fin-5',
    topic_id: 'fin-5',
    subject_id: 'money-finance',
    title: 'UPI & Digital Banking Hygiene',
    subtitle: 'Protecting your funds against evolving social engineering scams',
    estimated_minutes: 10,
    difficulty: 'Beginner',
    hook: 'India processes billions of UPI payments each month. Yet thousands fall victim each day to simple psychological tricks rather than technological hacks.',
    sections: [
      {
        title: 'The Core UPI Rule',
        content: 'Entering your 4 or 6 digit UPI PIN is ONLY needed for sending money or checking bank balances. You will NEVER need to enter a PIN to receive a payment, refund, lottery reward, or cashback.',
        highlight: 'If someone asks you to "enter your PIN to receive money", it is 100% a scam.',
        iconType: 'warning'
      },
      {
        title: 'Screen Sharing & Remote Access Traps',
        content: 'Fraudsters pose as bank executives or courier customer care and ask you to install apps like AnyDesk, TeamViewer QuickSupport, or RustDesk. These apps broadcast your mobile screen, exposing OTPs and credentials.',
        iconType: 'warning'
      },
      {
        title: 'Two-Account Strategy for Safety',
        content: 'Maintain a secondary savings account for daily UPI payments and merchant scans with a modest balance (₹5,000–₹10,000). Keep your primary life savings in a main account without UPI activated or linked to apps.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'A caller claims your electricity connection will be disconnected in 2 hours unless you click an SMS link and pay a ₹10 test verification fee.',
      analysis: 'The link installs malware or triggers an unauthorized debit mandate.',
      actionable_tip: 'Never click links in SMS. Always check your official electricity provider portal or electricity bill app directly.'
    },
    key_takeaways: [
      'UPI PIN is strictly for debiting money, never for receiving.',
      'Never download screen-sharing tools on instructions from unknown callers.',
      'Use a secondary bank account for day-to-day UPI tap-and-pay transactions.',
      'Report any suspicious transaction immediately to 1930 and your bank.'
    ]
  },
  {
    id: 'lesson-fin-6',
    topic_id: 'fin-6',
    subject_id: 'money-finance',
    title: 'Credit Scores (CIBIL) & Credit Health',
    subtitle: 'How your 3-digit score determines your future loan approvals and interest rates',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'A credit score of 780 vs 650 can mean the difference of hundreds of thousands of rupees in lower home loan interest rates over 20 years.',
    sections: [
      {
        title: 'What Makes Up Your Credit Score?',
        content: 'Credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) assign scores ranging from 300 to 900. Key components: 1. Payment History (35% - on-time payments), 2. Credit Utilization Ratio (30% - keeping card usage under 30% of limit), 3. Credit Age (15%), 4. Credit Mix (10% - secured vs unsecured), 5. Hard Enquiries (10%).',
        iconType: 'concept'
      },
      {
        title: 'The Credit Utilization Golden Rule',
        content: 'If your credit card has a limit of ₹1,00,000, keep your monthly spending below ₹30,000 (30% utilization). Maxing out your card every month flags high credit hunger and drags down your score, even if paid in full.',
        highlight: 'A score of 750+ is generally considered the threshold for prime interest rates and instant approvals.',
        iconType: 'tip'
      }
    ],
    practical_example: {
      scenario: 'You want to buy an item for ₹80,000 on a card with a ₹1,00,000 limit. If the bill generates at ₹80k, your utilization is 80%.',
      analysis: 'Your score will dip temporarily due to high utilization.',
      actionable_tip: 'Pay down ₹55,000 before the statement generation date so the reported balance is under ₹25,000 (25% utilization).'
    },
    key_takeaways: [
      'Credit scores range from 300 to 900; 750+ opens access to prime rates.',
      'Payment history is the single heaviest factor—never miss an EMI due date.',
      'Maintain credit utilization below 30% of your total credit limit.',
      'Avoid applying for multiple credit cards or personal loans simultaneously.'
    ]
  },
  {
    id: 'lesson-fin-7',
    topic_id: 'fin-7',
    subject_id: 'money-finance',
    title: 'Good Debt vs Bad Debt & Real EMI Costs',
    subtitle: 'Understanding reducing balance interest and the myth of zero-cost EMIs',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Is "No Cost EMI" truly free, or are banks and retailers cleverly factoring in processing fees, GST, and lost cash discounts into the sticker price?',
    sections: [
      {
        title: 'Good Debt vs Bad Debt',
        content: 'Good debt finances appreciating assets or income-generating tools (e.g. an education loan that boosts earning power, a prudent business loan, or an affordable home loan). Bad debt finances depreciating consumer luxuries (e.g. personal loans for vacations, luxury phones, or wedding expenses).',
        iconType: 'concept'
      },
      {
        title: 'The Truth About "Zero Cost EMI"',
        content: 'Under RBI regulations, banks cannot offer 0% interest loans. In "No Cost EMI", the merchant provides an upfront discount equal to the interest charged by the bank. However, you still pay 18% GST on the interest component plus a processing fee (₹199+GST).',
        highlight: 'Furthermore, choosing No Cost EMI often forfeits instant 10-15% upfront cash/card discount offers.',
        iconType: 'warning'
      },
      {
        title: 'Flat Rate vs Reducing Balance Trap',
        content: 'A flat interest rate of 10% on a loan is actually equivalent to nearly ~18% reducing balance interest rate because you continue paying interest on the full initial principal even after repaying half the debt.',
        iconType: 'concept'
      }
    ],
    practical_example: {
      scenario: 'A phone costs ₹60,000 on 6-month "No-Cost EMI" vs ₹54,000 if paid upfront with an instant card discount.',
      analysis: 'Taking the "No-Cost EMI" actually costs you ₹6,000 more (the lost cash discount) plus GST on interest.',
      actionable_tip: 'Always compare the total cash-outflow of paying upfront with discount vs EMI.'
    },
    key_takeaways: [
      'Good debt builds wealth or earning capability; bad debt funds depreciating consumption.',
      'No Cost EMIs involve processing fees, 18% GST on interest, and lost cash discounts.',
      'Never borrow flat-rate loans without calculating the true reducing balance rate.',
      'Keep total monthly EMIs strictly under 40% of your net monthly income.'
    ]
  },
  {
    id: 'lesson-fin-8',
    topic_id: 'fin-8',
    subject_id: 'money-finance',
    title: 'Credit Cards: Maximum Rewards, Zero Interest',
    subtitle: 'Leveraging 45-day interest-free grace periods while avoiding the 42% APR trap',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Credit cards are an incredible financial tool if you use them as a charge card—and a catastrophic debt trap if you treat them as free borrowed money.',
    sections: [
      {
        title: 'The Grace Period (45-50 Days)',
        content: 'When you purchase an item on Day 1 of your 30-day billing cycle, you have 30 days until statement generation + 15 to 20 days until the due date. That is up to 50 days of interest-free credit.',
        iconType: 'concept'
      },
      {
        title: 'The "Minimum Amount Due" Nightmare',
        content: 'Credit card companies love when you pay only the "Minimum Amount Due" (typically 5%). The remaining 95% is charged astronomical interest rates of 3.5% per month (42% to 48% annualized APR) compounded daily! Moreover, all new purchases immediately lose their grace period.',
        highlight: 'Always pay the Total Amount Due in full before the due date. Never pay just the Minimum Amount Due.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'You have a ₹50,000 credit card balance. If you pay only the ₹2,500 minimum due each month at 42% APR, it will take over 8 years to clear and cost over ₹60,000 in interest alone!',
      analysis: 'The compounding interest on credit card debt is designed to trap revolving balances.',
      actionable_tip: 'Enable Auto-Debit for "Total Amount Due" from your primary bank account so you never miss a payment.'
    },
    key_takeaways: [
      'Credit cards provide up to 45-50 days of interest-free capital when paid in full.',
      'Paying only the minimum due triggers punitive 40%+ annual interest rates.',
      'Missing a payment removes the grace period on all subsequent purchases.',
      'Always set up auto-pay for the Total Outstanding Amount.'
    ]
  },
  {
    id: 'lesson-fin-9',
    topic_id: 'fin-9',
    subject_id: 'money-finance',
    title: 'Term Insurance vs Health Insurance',
    subtitle: 'Separating pure protection from low-yield investment-insurance hybrid traps',
    estimated_minutes: 10,
    difficulty: 'Intermediate',
    hook: 'Insurance is risk protection, not an investment. Yet millions buy endowment policies and ULIPs that provide mediocre 4% returns and inadequate life cover.',
    sections: [
      {
        title: 'Pure Term Insurance (10-20x Annual Income)',
        content: 'Term insurance is pure life insurance. If the policyholder passes away during the term, the nominee receives a substantial death benefit (e.g. ₹1 Crore to ₹2 Crore). If the policyholder survives, there is zero maturity payout. Because there is no investment component, premiums are remarkably inexpensive.',
        iconType: 'concept'
      },
      {
        title: 'Health Insurance: The Medical Shield',
        content: 'A single major surgery or ICU hospitalization can deplete years of savings. Secure a comprehensive individual or family-floater health policy (₹10–25 Lakhs) with: 1. No room rent sub-limits, 2. No co-payment clauses, 3. Low pre-existing disease waiting periods.',
        highlight: 'Never rely solely on your employer health insurance, as it vanishes the day you switch or lose your job.',
        iconType: 'tip'
      },
      {
        title: 'Avoid Mixing Insurance with Investment',
        content: 'Endowment policies, Money-Back plans, and traditional ULIPs offer the worst of both worlds: poor life coverage and poor returns that fail to beat inflation. Buy pure term insurance + pure index mutual funds instead.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'A 28-year-old buys a ₹1 Crore term plan for ~₹900/month and invests ₹5,000/month in equity index funds vs paying ₹6,000/month for an endowment plan offering only ₹10 Lakh cover.',
      analysis: 'The term + mutual fund combo provides 10x higher family protection AND generates an exponentially larger wealth corpus.',
      actionable_tip: 'Never combine investment and insurance. Keep them strictly separate.'
    },
    key_takeaways: [
      'Term insurance provides high life cover at low premiums to secure dependents.',
      'Always have a personal health insurance policy separate from employer cover.',
      'Watch out for room rent caps and co-pay clauses in health policies.',
      'Avoid endowment and money-back plans that deliver sub-inflationary 4-5% returns.'
    ]
  },
  {
    id: 'lesson-fin-10',
    topic_id: 'fin-10',
    subject_id: 'money-finance',
    title: 'Index Funds & Systematic Investing (SIP)',
    subtitle: 'Low-cost passive investing and the power of Rupee Cost Averaging',
    estimated_minutes: 10,
    difficulty: 'Advanced',
    hook: 'Over 85% of active fund managers fail to beat the broader market index (like Nifty 50 or S&P 500) over 10-15 year horizons after accounting for fees. Why pay high fees to underperform?',
    sections: [
      {
        title: 'What is an Index Fund?',
        content: 'An index fund passively replicates a major stock market index (e.g., Nifty 50 or Sensex). Instead of an expensive fund manager picking stocks, the fund owns the top 50 companies proportional to their market weight. This keeps expense ratios extremely low (0.1% vs 1.5-2.0% for active funds).',
        iconType: 'concept'
      },
      {
        title: 'Rupee Cost Averaging via SIP',
        content: 'A Systematic Investment Plan (SIP) invests a fixed amount every month regardless of whether the market is up or down. When markets crash, your fixed monthly sum buys MORE units. When markets rise, your units appreciate in value.',
        highlight: 'SIP removes emotion and guesswork. You never have to predict market peaks or bottoms.',
        iconType: 'tip'
      },
      {
        title: 'Direct Plans vs Regular Plans',
        content: 'Always choose the "Direct-Growth" plan of a mutual fund instead of "Regular-Growth". Regular plans pay ongoing commissions to distributors, which can eat up 20% to 30% of your total gains over a 25-year compounding journey.',
        iconType: 'warning'
      }
    ],
    practical_example: {
      scenario: 'You invest ₹5,000 every month via direct index SIP starting at age 25. Over 30 years at 12% average CAGR, you invest ₹18 Lakhs.',
      analysis: 'Your final corpus at age 55 grows to approximately ₹1.76 Crores!',
      actionable_tip: 'Select a broad low-cost Nifty 50 Direct Index Fund and increase your SIP amount by 10% each year as your income grows (Step-Up SIP).'
    },
    key_takeaways: [
      'Index funds provide broad diversification at fraction of active fund fees.',
      'SIP leverages rupee cost averaging to turn market volatility to your advantage.',
      'Always invest in "Direct" mutual fund plans to avoid distributor commission drag.',
      'Step-up your SIP contributions annually to supercharge your retirement corpus.'
    ]
  }
];

export const FINANCE_QUESTIONS: Question[] = [
  // Lesson 1 questions
  {
    id: 'q-fin-1-1',
    lesson_id: 'lesson-fin-1',
    subject_id: 'money-finance',
    question: 'In the 50/30/20 budgeting rule, what does the 20% portion represent?',
    option_a: 'Discretionary dining out and entertainment',
    option_b: 'Savings, investments, and debt prepayment',
    option_c: 'Rental expenses and house maintenance',
    option_d: 'Taxes and government cess',
    correct_answer: 'B',
    explanation: 'The 20% bucket is dedicated to building wealth and future financial security (SIPs, emergency funds, debt reduction).'
  },
  {
    id: 'q-fin-1-2',
    lesson_id: 'lesson-fin-1',
    subject_id: 'money-finance',
    question: 'What does "paying yourself first" mean?',
    option_a: 'Buying luxury items before paying rent',
    option_b: 'Automatically transferring your savings portion into investments on salary day before spending',
    option_c: 'Withdrawing all salary in cash',
    option_d: 'Paying off friends before bills',
    correct_answer: 'B',
    explanation: 'Paying yourself first means prioritizing long-term savings by automating investments the day income arrives.'
  },

  // Lesson 2 questions
  {
    id: 'q-fin-2-1',
    lesson_id: 'lesson-fin-2',
    subject_id: 'money-finance',
    question: 'If your savings account earns 3% annual interest while consumer inflation is 6%, what is your Real Return?',
    option_a: '+9%',
    option_b: '+3%',
    option_c: '-3%',
    option_d: '0%',
    correct_answer: 'C',
    explanation: 'Real Return = Nominal Rate (3%) - Inflation (6%) = -3% per year in purchasing power.'
  },

  // Lesson 3 questions
  {
    id: 'q-fin-3-1',
    lesson_id: 'lesson-fin-3',
    subject_id: 'money-finance',
    question: 'What is the recommended size for an adequate personal emergency fund?',
    option_a: '1 week of pocket money',
    option_b: '3 to 6 months of essential living expenses',
    option_c: '5 years of luxury lifestyle spending',
    option_d: 'Equal to your total credit card limit',
    correct_answer: 'B',
    explanation: '3 to 6 months of mandatory living expenses provides adequate safety against sudden job loss or medical crises.'
  },

  // Lesson 4 questions
  {
    id: 'q-fin-4-1',
    lesson_id: 'lesson-fin-4',
    subject_id: 'money-finance',
    question: 'According to the Rule of 72, approximately how many years will it take for money to double at a 12% annual return?',
    option_a: '12 years',
    option_b: '6 years',
    option_c: '7.2 years',
    option_d: '24 years',
    correct_answer: 'B',
    explanation: '72 divided by 12 = 6 years to double your investment.'
  },

  // Lesson 5 questions
  {
    id: 'q-fin-5-1',
    lesson_id: 'lesson-fin-5',
    subject_id: 'money-finance',
    question: 'When is a user required to enter their UPI PIN on payment apps?',
    option_a: 'Only when SENDING money or checking account balance',
    option_b: 'When receiving money from a stranger',
    option_c: 'When claiming cashback vouchers',
    option_d: 'To receive a customer refund',
    correct_answer: 'A',
    explanation: 'Entering a UPI PIN authorizes a debit from your account. Receiving funds NEVER requires entering a PIN.'
  },

  // Lesson 6 questions
  {
    id: 'q-fin-6-1',
    lesson_id: 'lesson-fin-6',
    subject_id: 'money-finance',
    question: 'To maintain a healthy credit score, what is the ideal credit utilization ratio ceiling?',
    option_a: '100% of your limit',
    option_b: 'Below 30% of your total credit limit',
    option_c: 'Exactly 75%',
    option_d: 'Above 90%',
    correct_answer: 'B',
    explanation: 'Keeping credit utilization below 30% demonstrates disciplined credit management to bureaus.'
  },

  // Lesson 7 questions
  {
    id: 'q-fin-7-1',
    lesson_id: 'lesson-fin-7',
    subject_id: 'money-finance',
    question: 'Why are "No Cost EMIs" not completely free of extra charges?',
    option_a: 'Banks add secret penalties',
    option_b: 'You still pay 18% GST on the interest component, processing fees, and often miss instant cash discounts',
    option_c: 'They convert your card to a debit card',
    option_d: 'They require property collateral',
    correct_answer: 'B',
    explanation: 'No Cost EMIs incur processing fees and mandatory 18% GST on interest, while forfeiting upfront cash discounts.'
  },

  // Lesson 8 questions
  {
    id: 'q-fin-8-1',
    lesson_id: 'lesson-fin-8',
    subject_id: 'money-finance',
    question: 'What happens if you pay only the "Minimum Amount Due" on a credit card statement?',
    option_a: 'The remaining balance is forgiven by the bank',
    option_b: 'You are charged 36-48% annual interest on the revolving balance and lose the interest-free grace period',
    option_c: 'Your credit limit doubles',
    option_d: 'You earn bonus reward points',
    correct_answer: 'B',
    explanation: 'Paying only minimum due triggers steep revolving interest rates (up to 42%+ APR) and cancels interest-free grace periods.'
  },

  // Lesson 9 questions
  {
    id: 'q-fin-9-1',
    lesson_id: 'lesson-fin-9',
    subject_id: 'money-finance',
    question: 'Why is pure Term Insurance preferred over endowment or money-back policies for life coverage?',
    option_a: 'It offers high life coverage at remarkably affordable premiums without diluting returns',
    option_b: 'It pays guaranteed lottery prizes every 5 years',
    option_c: 'It covers stock market losses',
    option_d: 'It has no medical requirements ever',
    correct_answer: 'A',
    explanation: 'Term plans focus purely on risk protection, giving maximum financial cover to your family at the lowest cost.'
  },

  // Lesson 10 questions
  {
    id: 'q-fin-10-1',
    lesson_id: 'lesson-fin-10',
    subject_id: 'money-finance',
    question: 'Why should long-term investors choose "Direct" mutual fund plans instead of "Regular" plans?',
    option_a: 'Direct plans eliminate intermediary distributor commissions, compounding into higher long-term wealth',
    option_b: 'Direct plans are guaranteed not to drop in price',
    option_c: 'Regular plans are illegal',
    option_d: 'Direct plans have higher tax exemptions',
    correct_answer: 'A',
    explanation: 'Direct plans have lower expense ratios because no ongoing distributor commission is deducted from your corpus.'
  }
];
