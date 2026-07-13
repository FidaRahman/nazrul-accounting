// src/data/services.js
// Single source of truth for services. Home and Services both read from here,
// so the content can never drift apart. This will also feed the chatbot.

export const SERVICE_LIST = [
  'Financial Statements Compilation',
  'E-Filing',
  'Bookkeeping',
  'Payroll',
  'GST/HST',
  'Personal tax return',
  'Corporate tax return',
  'Charity and not for profit organization accounting',
  'Incorporation and business registration',
  'Tax advice',
]

export const SEGMENTS = ['Corporate', 'Personal', 'Charity', 'Not For Profit']

export const SERVICE_PILLARS = [
  {
    id: 'personal-tax',
    kicker: 'Individuals',
    title: 'Personal Tax',
    body: 'We have 10+ years of experience in the preparation of personal tax returns. We analyze each individual\u2019s tax situation through an interview process and consider every aspect of the income tax procedure to maximize your tax refund.',
    listTitle: 'We do',
    items: [
      'Individual tax return',
      'Rental income',
      'Capital gain',
      'Investment income',
      'Business income',
      'Uber / Lyft',
    ],
  },
  {
    id: 'corporation-tax',
    kicker: 'Corporations',
    title: 'Corporation Tax',
    body: 'Corporate tax returns are crucial to corporations and require planning ahead of time. We approach each client independently based on their unique situation. We focus on our clients\u2019 needs while they focus on their business goals \u2014 helping them succeed by maximizing their tax returns and providing optimal tax solutions and advice.',
    listTitle: 'Our corporate services',
    items: [
      'Financial statement preparation',
      'Corporate income tax filing',
      'GST/HST filing',
    ],
  },
  {
    id: 'payroll',
    kicker: 'Employers',
    title: 'Payroll',
    body: 'Reliable payroll support, so your team is paid correctly and your remittances stay on schedule all year.',
    listTitle: 'Our payroll services are',
    items: [
      'Periodic pay stubs',
      'Yearly issuance of T4, T4A, T5, etc.',
      'Periodic remittance calculation for clients',
    ],
  },
  {
    id: 'bookkeeping',
    kicker: 'Businesses',
    title: 'Bookkeeping',
    body: 'We focus on our client\u2019s business accounting so the client can focus on their business growth. Our aim is to provide financial information to clients on time so they can make informed decisions. We also interpret and analyze that information to help with the strategic decision-making process.',
    listTitle: 'We do bookkeeping for',
    items: [
      'Wellness centres (physiotherapy, osteopathy, massage therapy)',
      'Construction companies',
      'Pharmacies',
      'Churches',
      'Charitable organizations',
      'Grocery stores',
    ],
  },
]

export const INDUSTRIES = [
  'Health care clinics',
  'Pharmacies',
  'Construction',
  'Churches',
  'Charitable organizations',
  'Retail grocery stores',
  'Wellness centres',
  'Uber / Lyft drivers',
]