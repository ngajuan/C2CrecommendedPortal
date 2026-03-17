// Shared mock data for the CertifID workflow system

export type RequestStatus = 'sent' | 'opened' | 'started' | 'payment_submitted' | 'certified';
export type PaymentStatus = 'pending_debiting' | 'pending_processing' | 'pending_crediting' | 'completed' | 'failed' | 'unable_to_process';
export type PaymentPath = 'digital' | 'wire' | 'undetermined';
export type GenericRequestType = 'collect' | 'confirm';
export type GenericRequestStatus = 'sent' | 'opened' | 'started' | 'complete';

export interface TimelineEvent {
  label: string;
  byPerson?: string;
  date: string;
  time: string;
  type: 'status' | 'action'; // action = orange dot (e.g. wire download)
}

export interface PaymentRequest {
  id: string;
  fileNumber: string;
  propertyAddress: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  clientHomeAddress?: string;
  paymentMethod?: string;
  purpose: 'cash_to_close' | 'earnest_money';
  amount: string;
  closingDate: string;
  closingDateTime?: string; // Full formatted date+time e.g. "Tuesday, February 3, 2026 at 2:00 PM"
  sentBy: string;
  senderEmail?: string;
  office: string;
  requestStatus: RequestStatus;
  paymentStatus?: PaymentStatus;
  paymentPath: PaymentPath;
  paymentMethodsOffered?: string; // e.g. "Wire Instructions", "Instant Payment, Wire Transfer"
  timeline: TimelineEvent[];
  // Payment details (only when digital payment submitted)
  destinationAccount?: string;
  transactionId?: string;
  referenceId?: string;
  debitId?: string;
  transferType?: string;
  // Wire details (only when wire path)
  bankName?: string;
  routingNumber?: string;
  accountNumber?: string;
  accountName?: string;
  wireReference?: string;
  // Dates
  sentDate: string;
  estimatedArrival?: string;
  depositedDate?: string;
  lastUpdated: string;
  // Whether buyer has accessed wire instructions (but not yet certified)
  wireInstructionsAccessed?: boolean;
}

export interface FileRecord {
  id: string;
  fileNumber: string;
  propertyAddress: string;
  initiatedBy: string;
  dateStarted: string;
  items: FileItem[];
}

export interface FileItem {
  type: 'Payment Request' | 'Collect' | 'Identity' | 'Payoff' | 'Confirm' | 'Business' | 'Payment';
  purpose?: string;
  status: string;
  statusColor: string;
  client: string;
  clientRole: string;
  initiatedBy: string;
  lastUpdated: string;
  linkedRequestId?: string;
}

export interface GenericRequest {
  kind: 'generic';
  id: string;
  type: GenericRequestType;
  requestStatus: GenericRequestStatus;
  fileNumber: string;
  propertyAddress?: string;
  clientName: string;
  clientRole: string;
  sentBy: string;
  senderEmail?: string;
  office: string;
  sentDate: string;
  lastUpdated: string;
  timeline: TimelineEvent[];
  statusMessage?: string;
  statusDetail?: string;
  // Confirm-specific fields
  recipientRole?: string;
  requestTypeLabel?: string;
  recipientType?: string;
  trustName?: string;
  address?: string;
  representativeName?: string;
  representativeEmail?: string;
  representativePhone?: string;
  transactionAmount?: string;
  expectedSettlementDate?: string;
  // Bank details (for Confirm)
  bankInfoMessage?: string;
  bankName?: string;
  bankAddress?: string;
  bankPhone?: string;
  wireRoutingNumber?: string;
  achRoutingNumber?: string;
  creditToAccountHolder?: string;
  creditToAccountNumber?: string;
  finalCreditToName?: string;
  finalCreditToAccountNumber?: string;
  // Collect-specific fields
  collectDocumentType?: string;
  collectDescription?: string;
}

// Union type for all request types
export type AnyRequest = (PaymentRequest & { kind?: 'payment' }) | GenericRequest;

export function isGenericRequest(req: AnyRequest): req is GenericRequest {
  return (req as GenericRequest).kind === 'generic';
}

export function isPaymentRequest(req: AnyRequest): req is PaymentRequest {
  return !isGenericRequest(req);
}

// ── Payment Requests ──
export const paymentRequests: PaymentRequest[] = [
  {
    id: 'req-001',
    fileNumber: '4561247',
    propertyAddress: '1234 Rivers Road, Pensacola, Florida, 32503',
    clientName: 'Jessie Owens',
    clientEmail: 'm****@g***.com',
    clientPhone: '(***) ***-5321',
    clientHomeAddress: '717 Brooks Ave, Austin, Texas, 78710',
    paymentMethod: 'Capital One ***4621',
    purpose: 'cash_to_close',
    amount: '$3,000.00',
    closingDate: '01/29/2026',
    sentBy: 'Ramon Susa',
    office: 'Pinpoint Title - Jacksonville',
    requestStatus: 'payment_submitted',
    paymentStatus: 'completed',
    paymentPath: 'digital',
    destinationAccount: 'Chase Escrow 2001***',
    transactionId: '24aSF452afa',
    referenceId: 'CERTIFID-EMD-20251120-ABC123XYZ',
    debitId: 'jcaksUWO21',
    transferType: 'Instant Payment',
    sentDate: '01/14/2026',
    estimatedArrival: 'January 16',
    depositedDate: 'January 16, 2025',
    lastUpdated: '01/16/2026',
    timeline: [
      { label: 'Credited', date: '01/16/2026', time: '11:05 AM', type: 'status' },
      { label: 'Processed', date: '01/15/2026', time: '2:30 PM', type: 'status' },
      { label: 'Debited', date: '01/14/2026', time: '9:15 AM', type: 'status' },
      { label: 'Payment submitted', byPerson: 'Jessie Owens', date: '01/14/2026', time: '9:05 AM', type: 'status' },
      { label: 'Request Started', byPerson: 'Jessie Owens', date: '01/14/2026', time: '9:03 AM', type: 'status' },
      { label: 'Request Opened', byPerson: 'Jessie Owens', date: '01/14/2026', time: '9:00 AM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Ramon Susa', date: '01/14/2026', time: '8:45 AM', type: 'status' },
    ],
  },
  {
    id: 'req-002',
    fileNumber: 'afs123',
    propertyAddress: '49 James Street, Austin, Texas, 78701',
    clientName: 'Courtney Williams',
    clientEmail: 'c****@y***.com',
    clientPhone: '(***) ***-8834',
    clientHomeAddress: '222 Elm St, Austin, Texas, 78702',
    purpose: 'earnest_money',
    amount: '$2,500.00',
    closingDate: '02/15/2026',
    sentBy: 'Laura Adams',
    office: 'Pinpoint Title - Austin',
    requestStatus: 'opened',
    paymentPath: 'wire',
    paymentMethodsOffered: 'Wire Instructions',
    wireInstructionsAccessed: true,
    bankName: 'Wells Fargo Bank',
    routingNumber: '121000248',
    accountNumber: '\u2022\u2022\u2022\u2022\u2022\u20223921',
    accountName: 'Pinpoint Title Escrow',
    wireReference: '49 James Street, Austin, TX 78701',
    sentDate: '02/01/2026',
    lastUpdated: '02/03/2026',
    timeline: [
      { label: 'Buyer Downloaded Wire Instructions', byPerson: '', date: '02/03/2026', time: '10:22 AM', type: 'action' },
      { label: 'Request Opened', byPerson: 'Courtney Williams', date: '02/01/2026', time: '4:10 PM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Laura Adams', date: '02/01/2026', time: '9:00 AM', type: 'status' },
    ],
  },
  {
    id: 'req-003',
    fileNumber: 'ght453',
    propertyAddress: '717 Brooks Ave, Austin, Texas, 78710',
    clientName: 'Jamarcus Russell',
    clientEmail: 'j****@g***.com',
    clientPhone: '(***) ***-2241',
    purpose: 'cash_to_close',
    amount: '$3,000.00',
    closingDate: '02/20/2026',
    sentBy: 'Laura Adams',
    office: 'Pinpoint Title - Austin',
    requestStatus: 'payment_submitted',
    paymentStatus: 'pending_debiting',
    paymentPath: 'digital',
    destinationAccount: 'Pinpoint Escrow 3405***',
    transferType: 'Instant Payment',
    sentDate: '02/05/2026',
    estimatedArrival: 'February 10',
    lastUpdated: '02/07/2026',
    timeline: [
      { label: 'Debiting', date: '02/07/2026', time: '11:00 AM', type: 'status' },
      { label: 'Payment submitted', byPerson: 'Jamarcus Russell', date: '02/07/2026', time: '10:45 AM', type: 'status' },
      { label: 'Request Started', byPerson: 'Jamarcus Russell', date: '02/07/2026', time: '10:30 AM', type: 'status' },
      { label: 'Request Opened', byPerson: 'Jamarcus Russell', date: '02/06/2026', time: '3:00 PM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Laura Adams', date: '02/05/2026', time: '9:00 AM', type: 'status' },
    ],
  },
  {
    id: 'req-004',
    fileNumber: 'afaf321',
    propertyAddress: '429 29th Street, Austin, Texas, 78705',
    clientName: 'Sarah Johnson',
    clientEmail: 's****@g***.com',
    clientPhone: '(***) ***-7742',
    purpose: 'cash_to_close',
    amount: '$2,500.00',
    closingDate: '03/01/2026',
    sentBy: 'Laura Adams',
    office: 'Pinpoint Title - Austin',
    requestStatus: 'started',
    paymentPath: 'undetermined',
    sentDate: '02/10/2026',
    lastUpdated: '02/12/2026',
    timeline: [
      { label: 'Request Started', byPerson: 'Sarah Johnson', date: '02/12/2026', time: '2:00 PM', type: 'status' },
      { label: 'Request Opened', byPerson: 'Sarah Johnson', date: '02/11/2026', time: '10:00 AM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Laura Adams', date: '02/10/2026', time: '9:00 AM', type: 'status' },
    ],
  },
  {
    id: 'req-005',
    fileNumber: 'bcd789',
    propertyAddress: '27 Courtney Ave, Austin, Texas, 78704',
    clientName: 'Liliana Brown',
    purpose: 'cash_to_close',
    amount: '$4,000.00',
    closingDate: '03/10/2026',
    sentBy: 'Laura Adams',
    office: 'Pinpoint Title - Austin',
    requestStatus: 'opened',
    paymentPath: 'undetermined',
    sentDate: '02/15/2026',
    lastUpdated: '02/16/2026',
    timeline: [
      { label: 'Wire instructions downloaded', byPerson: 'Liliana Brown', date: '02/16/2026', time: '11:30 AM', type: 'action' },
      { label: 'Request Opened', byPerson: 'Liliana Brown', date: '02/16/2026', time: '9:00 AM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Laura Adams', date: '02/15/2026', time: '9:00 AM', type: 'status' },
    ],
  },
  {
    id: 'req-006',
    fileNumber: 'xyz456',
    propertyAddress: '4453 Ram Road, Austin, Texas, 78723',
    clientName: 'Tina Holmes',
    purpose: 'earnest_money',
    amount: '$3,000.00',
    closingDate: '03/15/2026',
    sentBy: 'Ramon Susa',
    office: 'Pinpoint Title - Jacksonville',
    requestStatus: 'sent',
    paymentPath: 'wire',
    paymentMethodsOffered: 'Wire Instructions',
    bankName: 'Bank of Texas',
    routingNumber: '113000609',
    accountNumber: '\u2022\u2022\u2022\u2022\u2022\u20228823',
    accountName: 'Pinpoint Title Escrow',
    wireReference: '4453 Ram Road, Austin, TX 78723',
    sentDate: '02/20/2026',
    lastUpdated: '02/20/2026',
    timeline: [
      { label: 'Request Sent', byPerson: 'Ramon Susa', date: '02/20/2026', time: '10:00 AM', type: 'status' },
    ],
  },
  {
    id: 'req-007',
    fileNumber: 'mno321',
    propertyAddress: '1539 Congress St, Austin, Texas, 78701',
    clientName: 'Bonnie Randall',
    clientEmail: 'b****@g****.com',
    clientPhone: '(512) ***-**19',
    purpose: 'cash_to_close',
    amount: '$12,000.00',
    closingDate: '02/28/2026',
    closingDateTime: 'Friday, February 28, 2026 at 10:00 AM',
    sentBy: 'Laura Adams',
    senderEmail: 'l****@s****.com',
    office: 'Pinpoint Title — Austin Office',
    requestStatus: 'certified',
    paymentPath: 'wire',
    paymentMethodsOffered: 'Wire Instructions',
    bankName: 'Chase Bank',
    routingNumber: '021000021',
    accountNumber: '\u2022\u2022\u2022\u2022\u2022\u20224832',
    accountName: 'Pinpoint Title Escrow',
    wireReference: '1539 Congress St, Austin, TX 78701',
    sentDate: '02/01/2026',
    lastUpdated: '02/10/2026',
    timeline: [
      { label: 'CertifID', date: '02/10/2026', time: '3:00 PM', type: 'status' },
      { label: 'Buyer Downloaded Wire Instructions', byPerson: '', date: '02/05/2026', time: '11:00 AM', type: 'action' },
      { label: 'Request Opened', byPerson: 'Bonnie Randall', date: '02/03/2026', time: '2:00 PM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Laura Adams', date: '02/01/2026', time: '9:00 AM', type: 'status' },
    ],
  },
  {
    id: 'req-008',
    fileNumber: 'aseQ131',
    propertyAddress: '23 Telephone Street, Austin, Texas, 78702',
    clientName: 'Charles Rogers',
    clientEmail: 'c****@h***.com',
    clientPhone: '(***) ***-9981',
    clientHomeAddress: '45 Oak Lane, Austin, Texas, 78703',
    purpose: 'earnest_money',
    amount: '$4,000.00',
    closingDate: '02/25/2026',
    closingDateTime: 'Tuesday, February 25, 2026 at 1:00 PM',
    sentBy: 'Laura Adams',
    senderEmail: 'l****@s****.com',
    office: 'Pinpoint Title - Austin',
    requestStatus: 'certified',
    paymentPath: 'wire',
    paymentMethodsOffered: 'Wire Instructions',
    bankName: 'Bank of America',
    routingNumber: '026009593',
    accountNumber: '\u2022\u2022\u2022\u2022\u2022\u20223345',
    accountName: 'Pinpoint Title Escrow',
    wireReference: '23 Telephone Street, Austin, TX 78702',
    sentDate: '02/08/2026',
    lastUpdated: '02/12/2026',
    timeline: [
      { label: 'CertifID', date: '02/12/2026', time: '9:00 AM', type: 'status' },
      { label: 'Buyer Downloaded Wire Instructions', byPerson: '', date: '02/10/2026', time: '11:00 AM', type: 'action' },
      { label: 'Request Opened', byPerson: 'Charles Rogers', date: '02/09/2026', time: '8:00 AM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Laura Adams', date: '02/08/2026', time: '9:00 AM', type: 'status' },
    ],
  },
  // Wire flow - Wire Instructions Accessed (not yet certified)
  {
    id: 'req-009',
    fileNumber: '2026-0127-SI',
    propertyAddress: '1234 Rivers Road, Austin, TX 78732',
    clientName: 'Sarah Johnson',
    clientEmail: 's****@g****.com',
    clientPhone: '(512) ***-**47',
    purpose: 'cash_to_close',
    amount: '$47,500.00',
    closingDate: '02/03/2026',
    closingDateTime: 'Tuesday, February 3, 2026 at 2:00 PM',
    sentBy: 'Rachel Martinez',
    senderEmail: 'r****@p****.com',
    office: 'Pinpoint Title — 6th/Lamar Office',
    requestStatus: 'opened',
    paymentPath: 'wire',
    paymentMethodsOffered: 'Wire Instructions',
    wireInstructionsAccessed: true,
    bankName: 'First National Bank',
    routingNumber: '111000025',
    accountNumber: '\u2022\u2022\u2022\u2022\u2022\u20227890',
    accountName: 'Pinpoint Title Escrow',
    wireReference: '1234 Rivers Road, Austin, TX 78732',
    sentDate: '01/27/2026',
    lastUpdated: '01/27/2026',
    timeline: [
      { label: 'Buyer Downloaded Wire Instructions', byPerson: '', date: '01/27/2026', time: '4:01 PM', type: 'action' },
      { label: 'Request Opened', byPerson: 'Sarah Johnson', date: '01/27/2026', time: '3:42 PM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Rachel Martinez', date: '01/27/2026', time: '2:15 PM', type: 'status' },
    ],
  },
  // Wire flow - CertifID (same Sarah Johnson, different file)
  {
    id: 'req-010',
    fileNumber: '2026-0127-SI',
    propertyAddress: '1234 Rivers Road, Austin, TX 78732',
    clientName: 'Sarah Johnson',
    clientEmail: 's****@g****.com',
    clientPhone: '(512) ***-**47',
    purpose: 'cash_to_close',
    amount: '$47,500.00',
    closingDate: '02/03/2026',
    closingDateTime: 'Tuesday, February 3, 2026 at 2:00 PM',
    sentBy: 'Rachel Martinez',
    senderEmail: 'r****@p****.com',
    office: 'Pinpoint Title — 6th/Lamar Office',
    requestStatus: 'certified',
    paymentPath: 'wire',
    paymentMethodsOffered: 'Wire Instructions',
    bankName: 'First National Bank',
    routingNumber: '111000025',
    accountNumber: '\u2022\u2022\u2022\u2022\u2022\u20227890',
    accountName: 'Pinpoint Title Escrow',
    wireReference: '1234 Rivers Road, Austin, TX 78732',
    sentDate: '01/27/2026',
    lastUpdated: '01/28/2026',
    timeline: [
      { label: 'CertifID', date: '01/28/2026', time: '11:00 AM', type: 'status' },
      { label: 'Buyer Downloaded Wire Instructions', byPerson: '', date: '01/27/2026', time: '4:01 PM', type: 'action' },
      { label: 'Request Opened', byPerson: 'Sarah Johnson', date: '01/27/2026', time: '3:42 PM', type: 'status' },
      { label: 'Request Sent', byPerson: 'Rachel Martinez', date: '01/27/2026', time: '2:15 PM', type: 'status' },
    ],
  },
];

// ── Files ──
export const fileRecords: FileRecord[] = [
  {
    id: 'file-001',
    fileNumber: 'B2468102Y',
    propertyAddress: '2897 Brookstone Way, Cedar Ridge, TX 78104',
    initiatedBy: 'Laura Adams',
    dateStarted: '01/16/2025',
    items: [
      { type: 'Collect', status: 'SENT', statusColor: '#102754', client: 'Elena Torres', clientRole: 'Seller', initiatedBy: 'Laura Adams', lastUpdated: '01/16/2025' },
      { type: 'Identity', status: 'SENT', statusColor: '#102754', client: 'Hugh Forman', clientRole: 'Buyer', initiatedBy: 'Laura Adams', lastUpdated: '04/18/2025' },
      { type: 'Payoff', status: 'CERTIFID', statusColor: '#00A566', client: 'Elena Torres', clientRole: 'Borrower', initiatedBy: 'James Roberts', lastUpdated: '01/27/2025' },
      { type: 'Confirm', status: 'CERTIFID', statusColor: '#00A566', client: 'Abby Forman', clientRole: 'Other', initiatedBy: 'Laura Adams', lastUpdated: '1/16/2025' },
      { type: 'Business', status: 'CERTIFID', statusColor: '#00A566', client: 'Heathrow LLC ...', clientRole: 'Business', initiatedBy: 'Laura Adams', lastUpdated: '1/18/2025' },
      { type: 'Payment Request', purpose: 'Earnest money', status: 'PENDING', statusColor: '#102754', client: 'Jessie Zamboroso', clientRole: 'Buyer', initiatedBy: '--', lastUpdated: '1/18/2025', linkedRequestId: 'req-001' },
    ],
  },
  {
    id: 'file-002',
    fileNumber: 'afs123',
    propertyAddress: '49 James Street, Austin, Texas, 78701',
    initiatedBy: 'Laura Adams',
    dateStarted: '02/03/2026',
    items: [
      { type: 'Payment Request', purpose: 'Earnest money', status: 'STARTED', statusColor: '#102754', client: 'Courtney Williams', clientRole: 'Buyer', initiatedBy: 'Laura Adams', lastUpdated: '02/03/2026', linkedRequestId: 'req-002' },
    ],
  },
  {
    id: 'file-003',
    fileNumber: 'ght453',
    propertyAddress: '717 Brooks Ave, Austin, Texas, 78710',
    initiatedBy: 'Laura Adams',
    dateStarted: '02/07/2026',
    items: [
      { type: 'Payment Request', purpose: 'Cash to close', status: 'DEBITING', statusColor: '#102754', client: 'Jamarcus Russell', clientRole: 'Buyer', initiatedBy: 'Laura Adams', lastUpdated: '02/07/2026', linkedRequestId: 'req-003' },
    ],
  },
  {
    id: 'file-004',
    fileNumber: 'mno321',
    propertyAddress: '1539 Congress St, Austin, Texas, 78701',
    initiatedBy: 'Laura Adams',
    dateStarted: '02/10/2026',
    items: [
      { type: 'Payment Request', purpose: 'Cash to close', status: 'CERTIFID', statusColor: '#00A566', client: 'Bonnie Randall', clientRole: 'Buyer', initiatedBy: 'Laura Adams', lastUpdated: '02/10/2026', linkedRequestId: 'req-007' },
    ],
  },
  {
    id: 'file-005',
    fileNumber: 'aseQ131',
    propertyAddress: '23 Telephone Street, Austin, Texas, 78702',
    initiatedBy: 'Laura Adams',
    dateStarted: '02/08/2026',
    items: [
      { type: 'Payment Request', purpose: 'Earnest money', status: 'CERTIFID', statusColor: '#00A566', client: 'Charles Rogers', clientRole: 'Buyer', initiatedBy: 'Laura Adams', lastUpdated: '02/12/2026', linkedRequestId: 'req-008' },
    ],
  },
];

// ── Generic Requests (Collect, Confirm) ──
export const genericRequests: GenericRequest[] = [
  {
    kind: 'generic',
    id: 'gen-001',
    type: 'confirm',
    requestStatus: 'started',
    fileNumber: 'Test-100001',
    address: '1234 Fake St, Grand Rapids, MI 49505',
    clientName: 'Trsut Test',
    clientRole: 'Buyer',
    sentBy: 'Ngawang Salaka',
    senderEmail: 'n*****@c****.com',
    office: 'Central Bank Corp',
    sentDate: '07/02/2025',
    lastUpdated: '07/02/2025',
    statusMessage: 'Your request has been started.',
    statusDetail: 'Noah has started the identity verification process.',
    recipientRole: 'Buyer',
    requestTypeLabel: 'Confirm bank details',
    recipientType: 'Trust',
    trustName: 'Trsut Test',
    representativeName: 'Noah ReswareTrust',
    representativeEmail: 'v*****@y****.com',
    representativePhone: '(***) ***-0630',
    transactionAmount: '$***,***',
    expectedSettlementDate: '02/23/2022',
    bankInfoMessage: 'Your client included an ACH routing number. We\'ve matched the bank details they added with the correct wire routing number. Please use this for this transaction.',
    bankName: 'Bank of America, National Association',
    bankAddress: '1455 Stockton St\nSan Francisco, CA 94133\n(415) 622-2155',
    bankPhone: '(415) 622-2155',
    wireRoutingNumber: '026009593',
    achRoutingNumber: '122101706',
    creditToAccountHolder: 'Megamind Corp',
    creditToAccountNumber: '********8146',
    finalCreditToName: 'Jacob Jackson',
    finalCreditToAccountNumber: '********5441',
    timeline: [
      { label: 'Started', byPerson: 'Noah ReswareTrust', date: '07/02/2025', time: '11:30 AM', type: 'status' },
      { label: 'Opened', byPerson: 'Noah ReswareTrust', date: '07/02/2025', time: '10:15 AM', type: 'status' },
      { label: 'Invite Sent', date: '07/02/2025', time: '9:00 AM', type: 'status' },
      { label: 'Created', date: '07/02/2025', time: '8:45 AM', type: 'status' },
    ],
  },
  {
    kind: 'generic',
    id: 'gen-002',
    type: 'confirm',
    requestStatus: 'complete',
    fileNumber: 'CNF-20260115',
    address: '8920 Maple Drive, Dallas, TX 75201',
    clientName: 'Marcus Webb',
    clientRole: 'Seller',
    sentBy: 'Laura Adams',
    senderEmail: 'l****@s****.com',
    office: 'Pinpoint Title - Austin',
    sentDate: '01/15/2026',
    lastUpdated: '01/20/2026',
    statusMessage: 'Verification complete.',
    statusDetail: 'Marcus has confirmed bank details successfully.',
    recipientRole: 'Seller',
    requestTypeLabel: 'Confirm bank details',
    recipientType: 'Individual',
    representativeName: 'Marcus Webb',
    representativeEmail: 'm****@g****.com',
    representativePhone: '(214) ***-7823',
    transactionAmount: '$185,000.00',
    expectedSettlementDate: '02/01/2026',
    bankName: 'Wells Fargo Bank',
    bankAddress: '420 Montgomery St\nSan Francisco, CA 94104',
    wireRoutingNumber: '121000248',
    achRoutingNumber: '121000248',
    creditToAccountHolder: 'Marcus Webb',
    creditToAccountNumber: '********3921',
    timeline: [
      { label: 'Complete', date: '01/20/2026', time: '2:00 PM', type: 'status' },
      { label: 'Started', byPerson: 'Marcus Webb', date: '01/18/2026', time: '3:30 PM', type: 'status' },
      { label: 'Opened', byPerson: 'Marcus Webb', date: '01/17/2026', time: '9:00 AM', type: 'status' },
      { label: 'Invite Sent', date: '01/15/2026', time: '10:00 AM', type: 'status' },
      { label: 'Created', date: '01/15/2026', time: '9:45 AM', type: 'status' },
    ],
  },
  {
    kind: 'generic',
    id: 'gen-003',
    type: 'collect',
    requestStatus: 'sent',
    fileNumber: 'COL-20260210',
    address: '2897 Brookstone Way, Cedar Ridge, TX 78104',
    clientName: 'Elena Torres',
    clientRole: 'Seller',
    sentBy: 'Laura Adams',
    senderEmail: 'l****@s****.com',
    office: 'Pinpoint Title - Austin',
    sentDate: '02/10/2026',
    lastUpdated: '02/10/2026',
    collectDocumentType: 'Settlement statement',
    collectDescription: 'Please upload a copy of your signed settlement statement for file processing.',
    timeline: [
      { label: 'Invite Sent', date: '02/10/2026', time: '9:00 AM', type: 'status' },
      { label: 'Created', date: '02/10/2026', time: '8:50 AM', type: 'status' },
    ],
  },
  {
    kind: 'generic',
    id: 'gen-004',
    type: 'collect',
    requestStatus: 'started',
    fileNumber: 'COL-20260205',
    address: '710 E 5th St, Austin, Texas, 78702',
    clientName: 'David Chen',
    clientRole: 'Buyer',
    sentBy: 'James Roberts',
    senderEmail: 'j****@s****.com',
    office: 'Pinpoint Title - Austin',
    sentDate: '02/05/2026',
    lastUpdated: '02/08/2026',
    statusMessage: 'Your request has been started.',
    statusDetail: 'David has begun uploading the requested documents.',
    collectDocumentType: 'Proof of funds',
    collectDescription: 'Please provide proof of funds for the earnest money deposit.',
    timeline: [
      { label: 'Started', byPerson: 'David Chen', date: '02/08/2026', time: '11:00 AM', type: 'status' },
      { label: 'Opened', byPerson: 'David Chen', date: '02/07/2026', time: '2:00 PM', type: 'status' },
      { label: 'Invite Sent', date: '02/05/2026', time: '10:00 AM', type: 'status' },
      { label: 'Created', date: '02/05/2026', time: '9:30 AM', type: 'status' },
    ],
  },
  {
    kind: 'generic',
    id: 'gen-005',
    type: 'confirm',
    requestStatus: 'opened',
    fileNumber: 'CNF-20260220',
    address: '333 Commerce St, Fort Worth, TX 76102',
    clientName: 'Angela Martinez',
    clientRole: 'Buyer',
    sentBy: 'Ramon Susa',
    senderEmail: 'r****@s****.com',
    office: 'Pinpoint Title - Jacksonville',
    sentDate: '02/20/2026',
    lastUpdated: '02/22/2026',
    statusMessage: 'Waiting for recipient to start.',
    statusDetail: 'Angela has opened the request but hasn\'t started yet.',
    recipientRole: 'Buyer',
    requestTypeLabel: 'Confirm bank details',
    recipientType: 'Individual',
    representativeName: 'Angela Martinez',
    representativeEmail: 'a****@g****.com',
    representativePhone: '(817) ***-4410',
    transactionAmount: '$52,000.00',
    expectedSettlementDate: '03/10/2026',
    bankName: 'Chase Bank',
    bankAddress: '270 Park Ave\nNew York, NY 10017',
    wireRoutingNumber: '021000021',
    creditToAccountHolder: 'Angela Martinez',
    creditToAccountNumber: '********6702',
    timeline: [
      { label: 'Opened', byPerson: 'Angela Martinez', date: '02/22/2026', time: '10:30 AM', type: 'status' },
      { label: 'Invite Sent', date: '02/20/2026', time: '3:00 PM', type: 'status' },
      { label: 'Created', date: '02/20/2026', time: '2:45 PM', type: 'status' },
    ],
  },
];

// Combined list for the Requests table
export function getAllRequests(): AnyRequest[] {
  return [
    ...paymentRequests.map(r => ({ ...r, kind: 'payment' as const })),
    ...genericRequests,
  ];
}

// Get table status for any request type
export function getAnyRequestTableStatus(req: AnyRequest): string {
  if (isGenericRequest(req)) {
    if (req.requestStatus === 'complete') return 'COMPLETE';
    if (req.requestStatus === 'started' || req.requestStatus === 'opened') return 'STARTED';
    return 'SENT';
  }
  return getRequestTableStatus(req);
}

// Get type label for any request
export function getAnyRequestType(req: AnyRequest): string {
  if (isGenericRequest(req)) {
    return req.type === 'collect' ? 'Collect' : 'Confirm';
  }
  return 'Send';
}

// Get sub-label for any request
export function getAnyRequestSubtype(req: AnyRequest): string {
  if (isGenericRequest(req)) {
    if (req.type === 'confirm') return 'Bank details';
    return 'Bank details';
  }
  return (req as PaymentRequest).purpose === 'cash_to_close' ? 'Cash to close' : 'Earnest money';
}

// Determine which sidebar tab should host the detail view for any request
export function getAnyDetailHostTab(req: AnyRequest): 'payments' | 'requests' {
  if (isGenericRequest(req)) return 'requests';
  return getDetailHostTab(req as PaymentRequest);
}

// Helper to get display-friendly status
export function getDisplayStatus(req: PaymentRequest): { label: string; sub?: string; color: string } {
  if (req.paymentStatus === 'completed') return { label: 'Completed', sub: 'Deposited', color: '#00A566' };
  if (req.paymentStatus === 'pending_crediting') return { label: 'Pending', sub: 'Crediting', color: '#102754' };
  if (req.paymentStatus === 'pending_processing') return { label: 'Pending', sub: 'Processing', color: '#102754' };
  if (req.paymentStatus === 'pending_debiting') return { label: 'Pending', sub: 'Debiting', color: '#102754' };
  if (req.paymentStatus === 'failed') return { label: 'Failed', color: '#E74C3C' };
  if (req.paymentStatus === 'unable_to_process') return { label: 'Unable to Process', color: '#E74C3C' };
  if (req.requestStatus === 'certified') return { label: 'CertifID', color: '#00A566' };
  if (req.requestStatus === 'started' || req.requestStatus === 'opened') return { label: 'Started', color: '#102754' };
  if (req.requestStatus === 'sent') return { label: 'Sent', color: '#102754' };
  return { label: 'Unknown', color: '#555' };
}

// For the Requests table
export function getRequestTableStatus(req: PaymentRequest): string {
  if (req.paymentStatus === 'completed') return 'PAYMENT COMPLETED';
  if (req.paymentPath === 'digital' && req.paymentStatus) return 'PAYMENT PENDING';
  if (req.requestStatus === 'certified') return 'CERTIFID';
  if (req.requestStatus === 'started' || req.requestStatus === 'opened') return 'STARTED';
  return 'SENT';
}

// For the Payments table - only digital payments that have been submitted
export function getPaymentsTableEntries(): PaymentRequest[] {
  return paymentRequests.filter(r => r.paymentPath === 'digital' && r.paymentStatus);
}

// Request type for the requests table
export function getRequestType(req: PaymentRequest): string {
  return 'Payment Request';
}

// Determine which sidebar tab should host the detail view for a given request
export function getDetailHostTab(req: PaymentRequest): 'payments' | 'requests' {
  // Digital payments that have been submitted → Payments tab
  if (req.requestStatus === 'payment_submitted' && req.paymentPath === 'digital' && req.paymentStatus) {
    return 'payments';
  }
  // Everything else (sent, opened, started, certified) → Requests tab
  return 'requests';
}