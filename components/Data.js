import { AlertTriangle, ArrowDownUp, Banknote, BarChart3, BarChart4, Briefcase, Building2, Calendar, CalendarClock, CheckCircle, CircleDollarSign, ClipboardList, Coins, Database, Download, EyeOff, FileCheck, FileSearch, FileText, FileUp, FileUpIcon, Globe, GlobeIcon, Handshake, IndianRupee, Landmark, Layers, LayoutDashboard, LocateFixed, Lock, Mail, MapPin, Percent, Phone, Receipt, RefreshCcw, RotateCcw, Search, Settings, Share2, Shield, ShieldCheck, ShieldOff, Split, Timer, TrendingUp, Truck, User, UserCheck, Users, Wallet, Warehouse, Workflow, Zap } from "lucide-react";

export const navItems = [
    { name: "LeDoc", href: "/ledoc" },
    { name: "LeRemitt", href: "/leremitt" },
    { name: "LeFin", href: "/trade-finance-solution" },
    { name: "About Us", href: "/about" },
    {
        name: "Resources",
        subItems: [
            { name: "Blogs", href: "/blogs" },
            { name: "Media", href: "/media" },
            { name: "FAQs", href: "/faqs" },
        ],
    },
    { name: "Contact Us", href: "/contact" },
    {
        name: "Sign In",
        subItems: [
            { name: "LeRemitt", },
            { name: "LeDoc", },
        ],
    },
];

export const footerLinks = [
    {
        title: "Quick Links", links: [
            { name: "Resources", href: "/blogs" },
            { name: "Connect with Us", href: "/contact" },
            { name: "LeCheck", href: "/lecheck" }
        ]
    },
    {
        title: "Products", links: [
            { name: "LeDoc", href: "/ledoc" },
            { name: "LeRemitt", href: "/leremitt" },
            { name: "LeFin", href: "/trade-finance-solution" }
        ]
    },
    {
        title: "Company", links: [
            { name: "About Us", href: "/about" },
            { name: "Media", href: "/media" }
        ]
    },
    {
        title: "Blogs", links: [
            { name: "Founder's Desk", href: "/blogs", category: "Founder's Desk" },
            { name: "EXIM Landscape", href: "/blogs", category: "EXIM Landscape" },
            { name: "Remittance", href: "/blogs", category: "Remittance" },
            { name: "Trade Documentation", href: "/blogs", category: "Trade Documentation" }
        ]
    },
    {
        title: "Contact Us", links: [
            { icon: Mail, text: "connect@axodian.com", href: "mailto:connect@axodian.com" },
            { icon: Phone, text: "+91 80500 87593", href: "tel:+918050087593" },
            { icon: MapPin, text: "1st Floor, Obeya Tranquil, Next to Sapna Book House, 1185, 5th Main Road, 7th Sector, HSR Layout Bengaluru, 560102", href: "https://maps.app.goo.gl/zC1fd9SiQDfTZo1g8" }
        ]
    }
];

export const homeFeatures = [
    { id: 1, percentage: '40%', title: 'FASTER', description: 'Faster trade document processing with AI' },
    { id: 2, percentage: '500+', title: 'COMPANIES', description: 'Exporters & MSMEs trust our platform' },
    { id: 3, percentage: '90%', title: 'REDUCTION', description: 'Reduction in manual errors & compliance risks' },
    { id: 4, percentage: '50%', title: 'SAVINGS', description: 'Cost savings on Inward Remittance fees' },
    { id: 5, percentage: '100%', title: 'TRANSPARENCY', description: 'Transparency in remittance processes & fees' },
];

export const leRemittFeatures = [
    { id: 1, title: "Receive International Payments Effortlessly", description: "Collect payments from 140+ countries in 33+ currencies", image: "/images/LeremittFeatures-01.webp" },
    { id: 2, title: "Collect locally via Multi Currency Accounts", description: "Get FCY Accounts in USD, GBP, EUR, and CAD", image: "/images/LeremittFeatures-02.webp" },
    { id: 3, title: "Complete Transparency", description: "Conversions at InterBank Rates, No hidden fees", image: "/images/LeremittFeatures-03.webp" },
    { id: 4, title: "Economical Fees", description: "Transparent Charges, 50% cheaper than Banks", image: "/images/LeremittFeatures-04.webp" },
    { id: 5, title: "Instant e-FIRA Generation", description: "Get your e-FIRA in your email", image: "/images/LeremittFeatures-05.webp" },
    { id: 6, title: "Dedicated Customer Support", description: "Assistance for every step of the transaction", image: "/images/LeremittFeatures-06.webp" },
];

export const leDocFeatures = [
    { id: 1, title: "Update or Sync Documents", description: "Connects with your ERP & existing systems", image: "/images/LeDocWorks_01.webp" },
    { id: 2, title: "AI-Powered Document Generation", description: "Auto-fills data & validates accuracy", image: "/images/LeDocWorks_02.webp" },
    { id: 3, title: "Instant Sharing & Submission", description: "Send documents to banks, Freight-Forwarders and partners", image: "/images/LeDocWorks_03.webp" },
    { id: 4, title: "Compliance & Approval Checks", description: "Ensures regulatory adherence before submission e.g., Shipping Bill Validation", image: "/images/LeDocWorks_04.webp" },
    { id: 5, title: "Auto Compliance Management", description: "Seamless eBRC generation, Advance Authorization tracking, and EPCG obligation export monitoring", image: "/images/LeDocWorks_05.webp" },
    { id: 6, title: "Tracking & Audits", description: "Full visibility into the document lifecycle", image: "/images/LeDocWorks_06.webp" },
];

export const leFinFeatures = [
    { id: 1, title: "Hassle-Free Approvals", description: "Digital applications with minimal paperwork.", image: "/images/ChooseLeFin-01.webp" },
    { id: 2, title: "Multiple Financing Options", description: "Choose from unsecured loans, secured loans, and bill discounting.", image: "/images/ChooseLeFin-02.webp" },
    { id: 3, title: "Competitive Rates & Flexible Terms", description: "Get market-best rates with repayment plans that suit your cashflows.", image: "/images/ChooseLeFin-03.webp" }
];

export const aboutFeatures = [
    { id: 1, title: "Seamless International Payments", description: "Secure, fast, and transparent transactions across borders.", image: "/images/WhatWeDo-01.webp" },
    { id: 2, title: "Automated Trade Documentation & Real-Time Compliance", description: "AI-driven document generation, storage, and compliance tracking.", image: "/images/WhatWeDo-02.webp" },
    { id: 3, title: "Export & Trade Finance", description: "Tailored financing solutions for global businesses. ", image: "/images/WhatWeDo-03.webp" }
];

export const leRemittChoose = [
    { id: 1, description: "No negotiations with bank relationship managers", icon: Handshake },
    { id: 2, description: "Conversions at interbank rate", icon: CircleDollarSign },
    { id: 3, description: "50% cheaper than your banking partner", icon: ArrowDownUp },
    { id: 4, description: "Global coverage – receive payments from 180+ countries", icon: GlobeIcon },
    { id: 5, description: "Real-time payment tracking – know exactly where your money is", icon: LocateFixed },
];

export const allReviews = [
    // leremittReviews
    { id: 1, name: "Shitalkumar Dagade, CEO", company: "@M/S Samyak Software", body: "Thanks to Leremitt, I can manage my export remittances digitally without stepping into a bank. It's efficient, reliable, and tailored for small businesses.", image: "/images/Shitalkumar.webp" },
    { id: 2, name: "Jyothi Prasad Asapu, Partner", company: "@Beansoft LLP", body: "LeRemitt has significantly reduced our cross-border remittance costs by eliminating SWIFT charges and providing real-time payment tracking. It's a fast, cost-effective solution with full transparency, ensuring smoother transactions, better cash flow management, and easy compliance with regulations. Jyothi Prasad Asapu — Beansoft LLP", image: "/images/Jyothi.webp" },
    { id: 3, name: "Abhijith HK, Founder & CEO", company: "@Codewave Technologies", body: "As a company driving digital transformation - through Agentic AI, GenAI, and smart automations - we could really appreciate how LeRemitt takes the manual effort out of managing cross-border payments. No chasing, no surprises. The platform's simple, transparent, and just works. We get real-time updates, zero delays, and a support team that's available a call away. LeRemitt has been a reliable partner in our growth journey, and we'd gladly recommend them!", image: "/images/Abhijith.webp" },
    { id: 4, name: "Prakash Noronha, Managing Director", company: "@Joslia Exports", body: "LeRemitt has revolutionized our international payments. As exporters, we now enjoy faster remittances, transparent fees, and seamless integration with our workflows. Their platform is reliable, easy to use, and backed by excellent support. It's helped us grow confidently into new markets with secure, timely payments and zero banking hassles.", image: "/images/Prakash.webp" },
    { id: 5, name: "", company: "@A software service Exporter", body: "Being a very small business in technology services, we understand how powerful tech can be in saving money and LeRemitt has proven to be a right blend of a finance and a tech platform – we save more and receiving money hasn't been this efficient before." },
    { id: 6, name: "Krishna Kumar, Co-founder", company: "@PepperTree.AI Pvt Ltd", body: "We were stuck with conventional banking process of collecting trade receivables from our cross-border customers. Though Banks have dependable systems, there is a lot of uncertainty with FOREX charges and even processes that required manual intervention many a times. Forex documentation management was another issue. We adopted LeRemitt with a belief that it'll reduce manual processes, improve documentation process, better customer relationship, and bring transparency with forex charges. LeRemitt has delivered on every aspect we wished for and in fact more with quick processing, and dependable and responsive support team. It's now my go-to platform for remittances!", image: "/images/Krishna.webp" },
    { id: 7, name: "Bharath Bade, Director", company: "@ITGS", body: "LeRemitt has made international payments seamless for my small business. The process is fast, secure, and incredibly easy to use. Also, the transparency in forex rates and fees is unmatched, saving me both time and money. I truly appreciate their dedication to customer satisfaction. Highly recommend their services!", image: "/images/Bharath.webp" },
    { id: 8, name: "", company: "@An MSME Service Exporter", body: "As an MSME, every penny counts. We don't always have the time to keep negotiating for better rates with our relationship managers. LeRemitt has been a huge revelation for us, and we've been able to save so much more." },
    { id: 9, name: 'Arbaz Khan', company: '@Exporter', body: 'We export leather saddles and accessories to buyers in the Middle East, Europe, Australia, and the U.S. — managing so many locations and international transactions used to be challenging. Leremitt changed that completely. Their remittance system is fast, clear, and reliable. I can now track every export payment without worrying about delays or confusion related to speed, hidden charges and conversion. The Leremitt team truly understands exporters’ requirements and provides complete peace of mind by covering all required aspects in their dashboard. I always recommend Leremitt to other exporters who want smooth and secure global payments.' },

    // ledocReviews
    { id: 10, name: "Uday Kumar, CEO", company: "@Deprocon Controls", body: "It is indeed a privilege to have been associated in the development of the product. The initiative is novel and an excellent one and meets the requirements of the export fraternity which has to handle multitude of documents with several stakeholders. We wish LeDoc unbound success in their venture." },
    { id: 11, name: "Nikhilesh K", company: "@Exporter", body: "LeDoc's centralized and indexed storage system has streamlined our document management, allowing for efficient organization and quick retrieval. LeDoc has truly simplified our compliance processes and improved our overall operational efficiency. The team is very responsive to any requirements, and we believe that the product will help us in generating all our business tracking reports." },
    { id: 12, name: "Shobha Prasad, Partner", company: "Yashashwi Exports", body: "We have been using LeDoc for around 3 months now, and we are happy to state that the whole platform is very convenient for people engaged in exporting business. Before LeDoc we used to store our data in the drives in our computers, which was very primitive, because every time we wanted any document, we needed access to that computer to retrieve our data. But now our data is saved in a very systematic manner and can be accessed anytime and anywhere. The customer support is also the best, where issues are solved in very efficient manner.  And whole platform is customizable and is very suitable to our needs. Overall, our experience with the platform and the team is good and will be looking forward to use the platform to its full extent." },
    { id: 13, name: "Llewellyn Alan Monis", company: "@CM Envirosystems", body: "Our experience with LeDoc has been great. The platform has allowed us to create both processes and a data center for export and import related documentation.We now look forward to using the collaboration capability with external partners and other new developments to increase our efficiency on this front." },
    { id: 14, name: "Nagarjun Reddy, Director", company: "@Virupaksha Organics Ltd", body: "LeDoc’s centralized and indexed storage system has transformed the way we manage documents. It enables efficient organization and fast retrieval, simplifying compliance processes and boosting our operational efficiency. The LeDoc team is highly responsive to our needs, and we’re confident that their platform will support us in generating comprehensive business tracking reports — helping us stay ahead in our operations." },
    // { id: , name: "", company: "@", body: "" },
];

// 🔥 Split reviews
export const leremittReviews = allReviews.filter(r => r.id <= 9);
export const ledocReviews = allReviews.filter(r => r.id >= 10);

export const leDocBenefits = [
    { id: 1, title: "Error-Free Compliance", description: "Generation of compliance Documents & Pre-checks ensure regulatory compliance", icon: FileText },
    { id: 2, title: "Automated Documentation", description: "AI-driven generation & validation of trade documents", icon: Layers },
    { id: 3, title: "Seamless Integration", description: "Works with your existing ERP, Accounting, HRMS or any other existing systems", icon: ShieldCheck },
    { id: 4, title: "Centralized Document Storage", description: "All shipment documents in one place", icon: TrendingUp },
    { id: 5, title: "Indexed Documents", description: "Making retrieval and search effortless", icon: Search },
];

export const teamFounders = [
    { id: 1, image: "/images/Sheetal.webp", fullName: "Sheetal Jain", inlink: "https://www.linkedin.com/in/jainsheetal/", role: "Co-founder & CEO", description: "Sheetal has led businesses of early stage to Series B fintech startups and has been part of the BFS ecosystem for over 2 decades" },
    { id: 2, image: "/images/Hari_Cto.webp", fullName: "Hari Ambati", inlink: "https://www.linkedin.com/in/hambati/", role: "Co-founder & CTO", description: "Hari has built marquee products for startups over the last 2 decades and his last stint was with Tailatrix a US based, Felons oriented security solutions." }
];

export const teamMembers = [
    { id: 1, fullName: "Bhargav Chandra Mutyala", role: "Backend Lead", image: "/images/Bhargav.webp", link: "https://www.linkedin.com/in/bhargav-m-94784014b/" },
    { id: 2, fullName: "Nagesh Pannati", role: "Frontend Lead", image: "/images/Nagesh.webp", link: "https://www.linkedin.com/in/nagesh-pannati-904503145/" },
    { id: 3, fullName: "Sai Rahul Kommineni", role: "Software Developer", image: "/images/SaiRahul.webp", link: "https://www.linkedin.com/in/sai-rahul-kommineni-514a54123/" },
    { id: 4, fullName: "Mohan Chandra Mutyala", role: "Software Engineer", image: "/images/Mohan.webp", link: "https://www.linkedin.com/in/mohan-mutyala-9201911b7/" },
    { id: 5, fullName: "Sultana Tabassum K", role: "Lead - Customer Success", image: "/images/SultanaT.webp", link: "https://www.linkedin.com/in/sultana-tabassum-k-b37aa1153/" },
    { id: 6, fullName: "Palguna Suggu", role: "Software Engineer", image: "/images/Palguna.webp", link: "https://www.linkedin.com/in/palgunasuggu/" },
    { id: 7, fullName: "Irfan Khan", role: "Frontend Developer", image: "/images/Irfan.webp", link: "https://www.linkedin.com/in/irfan-khan-b63a66107/" },
    { id: 8, fullName: "Anusha Pothureddypalli", role: "Junior Software Engineer", image: "/images/Anusha.webp", link: "https://www.linkedin.com/in/anusha-pothureddypalli-0a16771b0/" },
    { id: 9, fullName: "Sudhir Singh", role: "Business Development Manager", image: "/images/SudhirSingh.webp", link: "https://www.linkedin.com/in/realsudhirsingh/" },
    { id: 10, fullName: "Gowtham Vegi", role: "Junior Software Engineer", image: "/images/Gowtham.webp", link: "https://www.linkedin.com/in/gowthamvegi/" },
    { id: 11, fullName: "Lakshay Kumar", role: "Business Development Executive", image: "/images/Kumar.webp", link: "www.linkedin.com/in/lakshay-kumar-7443bb259" }
];

export const leremittFaqs = [
    { id: 1, question: "What is LeRemitt?", answer: "LeRemitt is an innovative B2B cross-border platform that simplifies international trade. Our flagship product, 'Receive Money,' enables businesses to collect payments from over 180 countries in USD, CAD, GBP, and EUR. Additionally, LeRemitt provides FCY accounts in these currencies to support seamless local transfers." },
    { id: 2, question: "How does LeRemitt work?", answer: "LeRemitt streamlines cross-border transactions with a user-friendly platform. Users can register effortlessly and start receiving payments in USD, GBP, EUR, and CAD. Acting as a trusted intermediary, we ensure secure, efficient, and hassle-free remittances between you and your customers." },
    { id: 3, question: "What countries does LeRemitt serve?", answer: "LeRemitt enables Indian customers to receive funds in USD, GBP, EUR, and CAD from over 180 countries. We are constantly expanding our reach to include more regions, ensuring greater global access to our services." },
    { id: 4, question: "How do I create an account on LeRemitt?", answer: "Creating an account on LeRemitt is a straightforward process. Please click [here](https://app.leremitt.com/#/registrationscreen/defaultregistrationscreen) and follow the registration prompts. We'll ask for some basic information and email verification to get you started. Please reach out to our customer support for further assistance." },
    { id: 5, question: "How are transactions conducted on LeRemitt?", answer: "LeRemitt partners with leading banks and payment providers worldwide to ensure a seamless transaction experience for our customers. Upon completing registration and KYC, users instantly receive an FCY account in their preferred currencies. They can then collect funds from designated countries at a low cost, benefiting both the remitter and the beneficiary." },
    { id: 6, question: "Are there fees associated with using LeRemitt?", answer: "LeRemitt ensures transparency in transaction fees by clearly communicating all applicable charges, fostering trust and clarity in financial transactions on the platform." },
    { id: 7, question: "How does LeRemitt handle currency conversion for international transactions?", answer: "LeRemitt offers mid-market exchange rates for international transactions in your chosen currency pair. Our platform provides real-time price displays and conversions based on current exchange rates, ensuring users have a clear understanding of market rates." },
    { id: 8, question: "What is the dispute resolution process on LeRemitt?", answer: "LeRemitt conducts multiple checks to ensure your payments reach your account safely. In the event of a dispute, we provide a structured resolution process where users can initiate a claim, and our team will mediate to resolve it as quickly as possible." },
    { id: 9, question: "How do I contact customer support for assistance?", answer: "For any questions or assistance, our dedicated customer support team is ready to help. Contact us at Leconnect@leremitt.com or +918050087593, and we'll promptly address your inquiries." },
    { id: 10, question: "Does LeRemitt keep my personal information private?", answer: "We value your privacy and handle your data with the utmost care. Rest assured, your information remains confidential and is managed in strict accordance with our Privacy Policy. Your trust is our priority, and your data is secure with us." }
];

export const leDocFaqs = [
    { id: 1, question: "What is LeDoc?", answer: "LeDoc is a document and compliance management platform tailored for exporters and importers, helping them streamline, organize, and secure their trade-related documents." },
    { id: 2, question: "Who can use LeDoc?", answer: "LeDoc is perfect for exporters, importers, freight forwarders, customs brokers, and logistics companies seeking to streamline their document workflows." },
    { id: 3, question: "How does LeDoc help my business?", answer: "LeDoc streamlines trade document management, ensures compliance, minimizes manual paperwork, and enhances collaboration among stakeholders." },
    { id: 4, question: "Can I share documents with my team and external partners?", answer: "LeDoc enables you to securely share documents with your team and external stakeholders." },
    { id: 5, question: "Does LeDoc support electronic signatures?", answer: "Yes, LeDoc offers e-signature capabilities for seamless approval and authentication of trade documents." },
    { id: 6, question: "How secure is my data on LeDoc?", answer: "LeDoc safeguards your business documents with end-to-end encryption, access controls, and secure cloud storage, ensuring protection against unauthorized access." },
    { id: 7, question: "Does LeDoc help with regulatory compliance?", answer: "LeDoc helps in shipping bill validations, integrates into DGFT for EBRC generations, outputs required for EDPMS closures, Advance Authorization tracking, and EPCG Obligation tracking." },
    { id: 8, question: "Can LeDoc integrate with other business tools?", answer: "Yes, LeDoc integrates with popular ERPs, accounting software, and logistics platforms for seamless workflow automation." },
    { id: 9, question: "How much does LeDoc cost?", answer: "LeDoc provides flexible pricing plans tailored to your business needs. Reach out to us for a personalized quote." },
    { id: 10, question: "Can I try LeDoc before purchasing?", answer: "Yes, we offer a free trial, allowing you to explore LeDoc’s features before making a commitment." },
    { id: 11, question: "How does the platform safeguard sensitive documents?", answer: "The platform employs advanced encryption to safeguard documents, ensuring access is restricted to authorized users. Security is reinforced with OTP authentication, role-based permissions, and comprehensive access logs." },
    { id: 12, question: "What is the role of AI on the LeDoc platform?", answer: "AI is utilized to intelligently analyze uploaded documents, improving document management and ensuring precise information extraction and categorization." },
    { id: 13, question: "How does LeDoc help with export/import documentation?", answer: "LeDoc provides a single dashboard to manage trade-related documents such as FIRC, eBRC, AWB/BL, invoices, and bank documents. It automates workflows, improves visibility, and ensures compliance with trade regulations." },
    { id: 14, question: "What are the key pain points LeDoc solves?", answer: "LeDoc solves issues related to scattered trade documents stored across different team members or systems, difficulty in searching documents, version handling, insecure sharing with external stakeholders, manual compliance filing, and lack of business insights." },
    { id: 15, question: "Can multiple stakeholders collaborate on LeDoc?", answer: "Yes, LeDoc enables multi-user access with role-based permissions, allowing teams from finance, operations, and logistics to collaborate efficiently." },
    { id: 16, question: "How can I get started with LeDoc?", answer: "You can reach out to our team for a demo and onboarding process. We provide training and support to ensure a smooth transition to LeDoc." },
    { id: 17, question: "How does LeDoc handle bulk document management?", answer: "LeDoc provides a bulk upload and bulk download feature, allowing businesses to process multiple documents efficiently, reducing manual effort." }
];

// Define subcategories for LeFin FAQs

export const leFinSubcategories = [
    { key: "unsecured", label: "Unsecured Loans" },
    { key: "secured", label: "Secured Loans" },
    { key: "post-shipment", label: "Post-Shipment Finance" },
    { key: "factoring", label: "Factoring" }
];

export const leFinFaqs = [
    // 🔓 Unsecured
    {
        id: 1,
        subcategory: "unsecured",
        question: "What is the required business vintage for unsecured finance?",
        answer: "A minimum operational history, typically ranging from 2 to 3 years, demonstrating stability and experience in export activities."
    },
    {
        id: 2,
        subcategory: "unsecured",
        question: "How important is creditworthiness?",
        answer: "A satisfactory credit score and a clean repayment record, indicating financial discipline and reliability."
    },
    {
        id: 3,
        subcategory: "unsecured",
        question: "Are export orders necessary for eligibility?",
        answer: "Confirmed export orders or irrevocable letters of credit from reputable buyers, serving as assurance of future receivables."
    },
    {
        id: 4,
        subcategory: "unsecured",
        question: "Do I need to submit financial statements?",
        answer: "Audited financial statements for the past 2 to 3 years, showcasing the company's financial health and profitability."
    },
    {
        id: 5,
        subcategory: "unsecured",
        question: "Is there a turnover requirement?",
        answer: "A minimum annual turnover, which may vary by institution, to ensure the business has sufficient scale."
    },
    {
        id: 6,
        subcategory: "unsecured",
        question: "What kind of regulatory compliance is needed?",
        answer: "Adherence to Foreign Exchange Management Act (FEMA) regulations and other export-related guidelines set by Indian authorities."
    },

    // 🏦 Secured
    {
        id: 7,
        subcategory: "secured",
        question: "What is the required business vintage for secured loans?",
        answer: "A minimum operational history of 2 to 3 years, with experience in export activities."
    },
    {
        id: 8,
        subcategory: "secured",
        question: "What defines creditworthiness for secured finance?",
        answer: "Good credit score and repayment track record. No major defaults or negative remarks in credit history."
    },
    {
        id: 9,
        subcategory: "secured",
        question: "Are export orders or LCs required?",
        answer: "Confirmed export orders from overseas buyers. Irrevocable letters of credit (LC) or export contracts."
    },
    {
        id: 10,
        subcategory: "secured",
        question: "What financial documentation is needed?",
        answer: "Audited financials for the last 2–3 years, showing profitability and financial stability. Minimum turnover threshold, as per lender requirements."
    },
    {
        id: 11,
        subcategory: "secured",
        question: "What compliance is expected?",
        answer: "Compliance with Foreign Exchange Management Act (FEMA) and other export finance guidelines."
    },
    {
        id: 12,
        subcategory: "secured",
        question: "Is margin money required?",
        answer: "Borrowers must contribute a certain margin percentage (typically 10-25%), depending on the lender's risk assessment."
    },
    {
        id: 13,
        subcategory: "secured",
        question: "What is the tenure and repayment structure?",
        answer: "Short-term financing, typically up to 180–270 days (may be extended based on lender discretion). Repayment through proceeds from the export bill."
    },
    {
        id: 14,
        subcategory: "secured",
        question: "What kind of collateral is needed?",
        answer: "Stock-in-process/raw materials, export receivables, fixed assets like land or machinery, and personal or corporate guarantees."
    },

    // 📤 Post-Shipment
    {
        id: 15,
        subcategory: "post-shipment",
        question: "What is the required business vintage?",
        answer: "Minimum operational history of 2 to 3 years in export activities."
    },
    {
        id: 16,
        subcategory: "post-shipment",
        question: "What defines acceptable creditworthiness?",
        answer: "Good credit score and clean repayment record. No history of defaults or major irregularities in past transactions."
    },
    {
        id: 17,
        subcategory: "post-shipment",
        question: "What documents are needed to prove shipments?",
        answer: "Exporters must submit bills of exchange, shipping documents, and invoices. Irrevocable LCs or confirmed buyer acceptance increases eligibility."
    },
    {
        id: 18,
        subcategory: "post-shipment",
        question: "Are financial statements required?",
        answer: "Audited financial statements for the past 2–3 years, demonstrating a stable financial position. Minimum annual turnover requirement varies by lender."
    },
    {
        id: 19,
        subcategory: "post-shipment",
        question: "What are the compliance requirements?",
        answer: "Compliant with FEMA, RBI export finance norms, and customs regulations."
    },
    {
        id: 20,
        subcategory: "post-shipment",
        question: "Is collateral required?",
        answer: "The bill itself acts as collateral, but additional security may be required for high-risk exporters. Personal guarantees may also be needed."
    },
    {
        id: 21,
        subcategory: "post-shipment",
        question: "What are the charges involved?",
        answer: "Interest rate based on risk, tenor, and buyer credibility. Processing fees, forex hedging charges, and other costs as per lender policy."
    },
    {
        id: 22,
        subcategory: "post-shipment",
        question: "What is the typical loan tenure?",
        answer: "Typically 30 to 180 days, depending on the credit terms agreed with the overseas buyer. Loan repaid once the buyer settles the invoice."
    },

    // 🔁 Factoring
    {
        id: 23,
        subcategory: "factoring",
        question: "What types of business entities are eligible?",
        answer: "MSMEs, Large Corporates, Proprietorships, LLPs, Partnership Firms, and Private/Public Limited Companies registered with GST, MCA, Udyam, etc."
    },
    {
        id: 24,
        subcategory: "factoring",
        question: "What are the turnover and financial requirements?",
        answer: "Minimum turnover of Rs. 20 cr. Stable cash flow with no major irregularities. Positive profitability and net worth. Audited financials for the last 2–3 years."
    },
    {
        id: 25,
        subcategory: "factoring",
        question: "How old should the business be?",
        answer: "Operational for at least 1–2 years. Some lenders may prefer businesses with a track record of at least 3 years."
    },
    {
        id: 26,
        subcategory: "factoring",
        question: "What kind of invoices are eligible?",
        answer: "Only commercial invoices raised on reputed buyers. Invoices must be undisputed and due for payment (typically within 30–90 days). No advance or related-party transactions."
    },
    {
        id: 27,
        subcategory: "factoring",
        question: "What about the buyer's profile?",
        answer: "Buyers should have a good credit rating and a stable financial position. Lenders may require an approved buyers' list and review payment track records."
    },
    {
        id: 28,
        subcategory: "factoring",
        question: "What documents are needed?",
        answer: "PAN, GST, Udyam Certificate, Bank statements (6–12 months), Invoices, Agreements, Debtor confirmation (sometimes), Financial statements (last 2–3 years)."
    },
    {
        id: 29,
        subcategory: "factoring",
        question: "Is CIBIL score important?",
        answer: "Yes. The business and promoters should have a good CIBIL Score (typically 700+) with no defaults or NPA classification."
    },
    {
        id: 30,
        subcategory: "factoring",
        question: "Are some industries excluded?",
        answer: "Yes. Factoring is generally not extended to Gems & Jewellery, Real Estate, or speculative businesses."
    },
    {
        id: 31,
        subcategory: "factoring",
        question: "Is collateral required for factoring?",
        answer: "Factoring is mostly unsecured, but collateral or personal guarantees may be required based on the lender’s risk assessment."
    }
];

// OneCompliance Faqs

export const oneComplianceFaqs = [
    {
        id: 1,
        question: "What is OneCompliance?",
        answer: "OneCompliance is a unified workspace module to manage EBRC tracking, EDPMS reconciliation, invoice–payment matching, and compliance visibility in one place.",
    },
    {
        id: 2,
        question: "What does the beta include?",
        answer: (
            <div className="space-y-2">
                <p>The Beta currently includes:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Invoice–Shipping Bill–Payment reconciliation engine</li>
                    <li>EDPMS rule-based matching</li>
                    <li>DGFT API integration for EBRC data fetch</li>
                    <li>Centralised compliance dashboard</li>
                    <li>Status tracking & exception handling</li>
                    <li>Document uploads & audit trail</li>
                </ul>
                <p className="italic text-sm text-gray-500 mt-2">
                    Note: Automated bank submission is not live yet. You will continue
                    to submit reconciliation to your bank manually.
                </p>
            </div>
        ),
    },
    {
        id: 3,
        question: "Is it free during beta?",
        answer:
            "Yes. One Compliance is completely FREE during the Beta phase. There are no charges during Beta usage. Commercial pricing will be introduced only after Beta ends, with prior notice.",
    },
    {
        id: 4,
        question: "Will it integrate with banks?",
        answer: (
            <div className="space-y-2">
                <p>Direct bank integrations will be introduced in phases. During Beta:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>You can generate and export reconciliation</li>
                    <li>You submit this to your bank via email or portal</li>
                </ul>
                <p>Future versions will support automated bank-side EDPMS updates.</p>
            </div>
        ),
    },
    {
        id: 5,
        question: "How secure is my data?",
        answer: "All data is encrypted, stored securely, and accessible only to authorised users.",
    },
    {
        id: 6,
        question: "Can I use it for multiple entities?",
        answer: "In the beta phase, single entity setup is supported. However, in next versions multiple entity setups will be supported.",
    },
    {
        id: 7,
        question: "Do I need training?",
        answer: "Yes. The product is designed with guided workflows, but support will be provided.",
    },
    {
        id: 8,
        question: "Does One Compliance replace my CA or bank?",
        answer: "No. One Compliance does not replace your CA, banker, or compliance advisor. It organises your data, improves accuracy, and speeds up reconciliation, so your submissions are cleaner and faster.",
    },
    {
        id: 9,
        question: "Can One Compliance file EBRC or EDPMS on my behalf?",
        answer: (
            <div className="space-y-2">
                <p>During Beta:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>EBRC data is fetched via DGFT APIs</li>
                    <li>EDPMS submission to the bank is manual</li>
                </ul>
                <p>Automated submission will be introduced in future phases.</p>
            </div>
        ),
    },
    {
        id: 10,
        question: "What types of exporters can use One Compliance?",
        answer: (
            <div className="space-y-2">
                <p>One Compliance works best for:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Goods exporters</li>
                    <li>Service exporters</li>
                    <li>D2C sellers</li>
                    <li>Marketplace exporters</li>
                    <li>Agencies, consultants, and export houses</li>
                </ul>
            </div>
        ),
    },
    {
        id: 11,
        question: "Can I download reports for audit or bank submission?",
        answer: (
            <div className="space-y-2">
                <p>Yes. You can export:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Reconciliation reports</li>
                    <li>EBRC status reports</li>
                    <li>Exception & mismatch reports</li>
                    <li>Transaction summaries</li>
                </ul>
                <p className="mt-2">These can be shared with:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Banks</li>
                    <li>Auditors</li>
                    <li>Finance teams</li>
                </ul>
            </div>
        ),
    },
    {
        id: 12,
        question: "What happens to my data after Beta ends?",
        answer: (
            <div className="space-y-2">
                <p>You will have the option to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Continue on a paid plan</li>
                    <li>Export your full data</li>
                    <li>Or discontinue usage</li>
                </ul>
                <p>
                    You will be informed well in advance before any pricing is activated.
                </p>
            </div>
        ),
    },
]

export const pressReleaseData = [
    {
        id: 10,
        title: "6Point3 Technologies Partners with IBDIC to Power India’s Digital Trade Evolution",
        description: "Through this partnership with IBDIC’s OneTrade platform, 6Point3 Technologies will help simplify and digitize key trade compliances, strengthening India’s shift toward a fully digital trade ecosystem.",
        source: "LinkedIn",
        date: "Oct 13, 2025",
        image: "/images/articaldata-14.webp",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7383515419254587392 ",
    },
    {
        id: 9,
        title: "LeRemitt Launches LeDoc: A Next-Gen Document Management Solution for International Trade",
        description: "Dr. Jacob Crasta, the Founder & Chairman of CM Envirosystems Pvt. Ltd, ex-president KASSIA, FKCCI and ASSOCHAM-South, launched AI-powered LeDoc - a Next-Gen Document Management Solution to ease out compliance handling and tracking for International Trade.",
        source: "Deccan Herald",
        date: "Feb 11, 2025",
        image: "/images/articaldata-01.webp",
        link: "https://www.deccanherald.com/dhbrandspot-pr/leremitt-launches-ledoc-a-next-gen-document-management-solution-for-international-trade-3400258",
    },
    {
        id: 8,
        title: "Brand Torque's Synods Event In Bengaluru",
        description: "With a keynote speech on “Wellness as a Lifestyle: Integrating Wellness into the High-Net-Worth Lifestyle”, networking continued after the successful event.",
        source: "Hindustan Times",
        date: "Apr 03, 2025",
        image: "/images/hindustantimes.webp",
        link: "https://www.hindustantimes.com/genesis/brand-torques-synods-event-in-bengaluru-101743667983275.html",
    },
    {
        id: 7,
        title: "LeRemitt unveils LeDoc, a document management solution for foreign trade ",
        description: "LeRemitt, a fintech platform focused on facilitating cross-border payments for MSME goods and services exporters has announced the launch of LeDoc, an Al-powered platform designed to streamline trade documentation and compliance management.",
        source: "The Hindu Bureau",
        date: "Feb 11, 2025",
        image: "/images/articaldata-02.webp",
        link: "https://www.thehindu.com/business/leremitt-releases-ledoc-a-document-management-solution-for-foreign-trade/article69206073.ece",
    },
    {
        id: 6,
        title: "LeRemitt Unveils Document Management Solution For Foreign Trade",
        description: "LeDoc is the latest addition to LeRemitt’s Global Trade Verse, an integrated cross-border platform that leverages technology and industry expertise to simplify global trade.",
        source: "FPJ News Service",
        date: "Feb 15, 2025",
        image: "/images/articaldata-03.webp",
        link: "https://www.freepressjournal.in/business/leremitt-unveils-document-management-solution-for-foreign-trade",
    },
    {
        id: 5,
        title: "LeRemitt Launches LeDoc: A Next-Gen Document Management Solution for International Trade",
        description: "LeDoc is an AI-powered platform developed by LeRemitt, designed to streamline trade documentation and compliance management for exporters. It offers intelligent storage and enhanced security.",
        source: "CIOL Bureau",
        date: "Feb 14, 2025",
        image: "/images/articaldata-04.webp",
        link: "https://www.ciol.com/news/leremitt-launches-ledoc-a-next-gen-document-management-solution-for-international-trade-8719508",
    },
    {
        id: 4,
        title: "LeRemitt launches its Cross-Border Platform for MSMEs in Partnership with YES BANK",
        description: "LeRemitt, in partnership with YES BANK, has developed a user-friendly platform that enables MSME players to easily conduct international transactions in key currencies such as USD, EURO, GBP, and CAD. This innovative solution simplifies cross-border payments.",
        source: "Cxotoday",
        date: "Feb 19, 2024",
        image: "/images/articaldata-05.webp",
        link: "https://cxotoday.com/press-release/leremitt-launches-its-cross-border-platform-for-msmes-in-partnership-with-yes-bank/",
    },
    {
        id: 3,
        title: "Yes Bank, LeRemitt in pact to enable smooth cross-border transactions for MSMEs",
        description: "Fintech startup LeRemitt and Yes Bank have partnered to introduce a cross-border platform that enables micro, small and medium enterprises (MSMEs) to conduct international transactions in key currencies.",
        source: "The Economic Times",
        date: "July 9, 2022",
        image: "/images/articaldata-06.webp",
        link: "https://economictimes.indiatimes.com/tech/technology/yes-bank-leremmitt-in-pact-to-enable-smooth-cross-border-transactions-for-msmes/articleshow/107480167.cms?from=mdr",
    },
    {
        id: 2,
        title: "Fintech startup LeRemitt raises $1.25 million in funding from Axilor Ventures, others",
        description: "Fintech startup LeRemitt on Friday announced that it has raised $1.25 million in a funding round led by early-stage investor Axilor Ventures. The round also saw participation from Capital A along with other founders and angel investors.",
        source: "The Economic Times Tech",
        date: "July 29, 2023",
        image: "/images/articaldata-07.webp",
        link: "https://economictimes.indiatimes.com/tech/funding/fintech-startup-leremitt-raises-1-25-million-in-funding-from-axilor-ventures-others/articleshow/102222902.cms",
    },
    {
        id: 1,
        title: "Fintech Startup LeRemitt Secures Funding To Simplify Cross-Border Transactions For MSMEs",
        description: "Founded in 2022 by Sheetal Jain, Mahesh Kumar Barate, and Hari Ambati, LeRemitt helps businesses, especially MSMEs, to streamline overseas transactions. The freshly raised funds will be used for hiring, global expansion, product development, and exploring strategic partnerships.",
        source: "Inc42",
        date: "July 27, 2023",
        image: "/images/articaldata-08.webp",
        link: "https://inc42.com/buzz/fintech-startup-leremitt-secures-funding-to-simplify-cross-border-transactions-for-msmes/",
    },
];

export const articleData = [
    {
        id: 5,
        title: "Fintechs Invest in Making Cross Border Payments More Efficient",
        description: "According to some reports, the global cross-border payments market was valued at USD 181.9 trillion in 2022, and is projected to reach USD 356.5 trillion by 2032, growing at a CAGR of 7.3 per cent from 2023 to 2032.",
        source: "Entrepreneur",
        date: "Mar 20, 2025",
        image: "/images/Entrepreneur.webp",
        link: "https://www.entrepreneur.com/en-in/finance/fintechs-invest-in-making-cross-border-payments-more/488790",
    },
    {
        id: 4,
        title: "LeRemitt unveils LeDoc to simplify trade documentation for MSMEs",
        description: "LeRemitt, a cross-border trade platform for MSMEs, has announced the launch of LeDoc, an Al-powered platform designed to streamline trade documentation and compliance management through intelligent storage, enhanced security, seamless sharing and real-time collaboration.",
        source: "IBSintelligence",
        date: "Feb 18, 2025",
        image: "/images/articaldata-09.webp",
        link: "https://ibsintelligence.com/ibsi-news/leremitt-unveils-ledoc-to-simplify-trade-documentation-for-msmes/",
    },
    {
        id: 3,
        title: "Sheetal Jain, CEO - LeRemitt Awarded ET Inspiring Women Leaders Award 2024 by The ET Women Conclave 2024",
        description: "Our Co-Founder & CEO, Sheetal Jain has been awarded by the ET conclave as the ET Inspiring Women Leader amongst the many woman leaders who have made significant strides in the ecosystem. The event honoured women leaders from diverse industries and backgrounds, and addressed pressing issues ...",
        source: "The Economic Times",
        date: "July 13, 2024",
        image: "/images/articaldata-10.webp",
        link: "https://economictimes.indiatimes.com/news/company/corporate-trends/unleashing-potential-embracing-diversity-a-symphony-of-womens-voices/articleshow/108821524.cms"
    },
    {
        id: 2,
        title: "LeRemitt, a Cross Border Platform, wishes to empower MSMEs in India with their platform for enhancing the global trade experience",
        description: "LeRemitt platform is an international payments platform meant for MSMEs. An MSME can bring payments in 4 major currencies through Virtual accounts provided through a digital, RBI complaint and AI-driven secure platform. Targets to expand services across geographies connecting MSMEs across the globe",
        source: "CXOToday",
        date: "Jun 27, 2024",
        image: "/images/articaldata-11.webp",
        link: "https://cxotoday.com/press-release/leremitt-a-cross-border-platform-wishes-to-empower-msmes-in-india-with-their-platform-for-enhancing-the-global-trade-experience/",
    },
    {
        id: 1,
        title: "Fintech at the crossroads: Disruption and regulation",
        description: "In the last one month, RBI has made the following two announcements back-to-back which have sent shockwaves through the entire fintech industry leaving stakeholders on both sides of the debate pondering the implications and the path forward",
        source: "ETEdgeINSIGHTS",
        date: "Mar 05, 2024",
        image: "/images/articaldata-12.webp",
        link: "https://etedge-insights.com/technology/fintech/fintech-at-the-crossroads-disruption-and-regulation/",
    },
    {
        id: 0,
        title: "LeRemitt Honored with Fintech Start-up of the Year (Payments) Award by MSME India Business Awards 2024",
        description: "We are thrilled to announce that LeRemitt has been named Fintech Start-up of the Year (Payments) at the MSME India Business Awards 2024. This award honors our commitment to innovation and excellence in fintech. Thank you to our dedicated team, partners, and customers for their unwavering support.",
        source: "ETEdgeINSIGHTS",
        image: "/images/articaldata-13.webp",
        link: ""
    },
];

export const podcastData = [
    {
        id: 5,
        title: "I was told women don't have to work, till I proved them wrong | Sheetal Jain | Iti Rawat",
        description: "How many times we have normalised women taking career break and not having their financial freedom, but same doesn’t apply for men. Have you heard men being asked to take a break from their career because women of the house is already earning well? Why is there a gender bias for women?",
        source: "Asmee",
        date: "Jun 15, 2024",
        image: "/images/podcasts-01.webp",
        link: "https://asmee.co.in/ep-17-i-was-told-women-dont-have-to-work-till-i-proved-them-wrong-sheetal-jain-iti-rawat/"
    },
    {
        id: 4,
        title: "MSME TALK Episode 35, Why to Use LeRemitt for Export Remittances",
        description: "Sheetal Jain, CEO of LeRemitt, delves into fintech's role in easing export remittances for MSMEs. This episode sheds light on LeRemitt's mission to streamline cross-border payments with transparent costs and efficient processes, empowering small business exporters to navigate the complexities of global trade.",
        source: "MSME TALK",
        date: "May 16, 2024",
        image: "/images/podcasts-02.webp",
        link: "https://msmetalk.com/podcast/why-to-use-leremitt-for-export-remittances/",
    },
    {
        id: 3,
        title: "Revolutionizing International Trade for MSMEs: A Conversation with Sheetal Jain, CEO of LeRemitt",
        description: "As she shares her inspiring journey from corporate lending to pioneering fintech solutions. Discover how Sheetal's expertise and vision are reshaping the landscape for MSMEs in international trade, tackling age-old challenges with innovative strategies. Gain valuable insights into the pivotal role of data analytics and technology..",
        source: "The Mohua Show",
        date: "Feb 09, 2024",
        image: "/images/podcasts-03.webp",
        link: "https://podcasts.apple.com/us/podcast/revolutionizing-international-trade-for-msmes-a/id1514604403?i=1000644739736",
    },
    {
        id: 2,
        title: "How to Launch a Successful Cross-Border Payments Startup: Lessons from LeRemitt",
        description: "As she shares her inspiring journey from corporate lending to pioneering fintech solutions. Discover how Sheetal's expertise and vision are reshaping the landscape for MSMEs in international trade, tackling age-old challenges with innovative strategies. Gain valuable insights into the pivotal role of data analytics and technology..",
        source: "Eli podcast",
        date: "Jun 26, 2024",
        image: "/images/articaldata-09.webp",
        link: "https://www.themohuashow.com/podcast/revolutionizing-international-trade-for-msmes-a-conversation-with-sheetal-jain-ceo-of-le-remitt/",
    },
    {
        id: 1,
        title: "How is LeRemitt transforming cross-border payments for Indian MSMEs?",
        description: "Sheetal Jain, CEO & Co-founder of LeRemitt, discusses with Gloria Mathias of IBS Intelligence how the evolving financial landscape is transforming MSMEs, India’s second-largest employer. Learn how the creation of digital platforms is driving significant benefits for MSMEs in international trade.",
        source: "IBSi Fintech Podcast",
        date: "Aug 13, 2024",
        image: "/images/podcasts-05.webp",
        link: "https://podcasts.apple.com/us/podcast/ep739-how-is-leremitt-transforming-cross-border-payments/id1534855710?i=1000665148901",
    },
];

export const mediaFeatures = [
    {
        id: 1,
        title: "6Point3 Technologies Partners with IBDIC to Power India’s Digital Trade Evolution",
        description: "Through this partnership with IBDIC’s OneTrade platform, 6Point3 Technologies will help simplify and digitize key trade compliances, strengthening India’s shift toward a fully digital trade ecosystem.",
        source: "LinkedIn",
        date: "Oct 13, 2025",
        image: "/images/articaldata-14.webp",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7383515419254587392 ",
    },
    {
        id: 1,
        title: "LeRemitt Launches LeDoc: A Next-Gen Document Management Solution for International Trade",
        description: "Dr. Jacob Crasta, the Founder & Chairman of CM Envirosystems Pvt. Ltd, ex-president KASSIA, FKCCI and ASSOCHAM-South, launched AI-powered LeDoc - a Next-Gen Document Management Solution to ease out compliance handling and tracking for International Trade.",
        source: "Deccan Herald",
        date: "Feb 11, 2025",
        image: "/images/articaldata-01.webp",
        link: "https://www.deccanherald.com/dhbrandspot-pr/leremitt-launches-ledoc-a-next-gen-document-management-solution-for-international-trade-3400258",
    },
    {
        id: 2,
        title: "LeRemitt unveils LeDoc, a document management solution for foreign trade ",
        description: "LeRemitt, a fintech platform focused on facilitating cross-border payments for MSME goods and services exporters has announced the launch of LeDoc, an Al-powered platform designed to streamline trade documentation and compliance management.",
        source: "The Hindu Bureau",
        date: "Feb 11, 2025",
        image: "/images/articaldata-02.webp",
        link: "https://www.thehindu.com/business/leremitt-releases-ledoc-a-document-management-solution-for-foreign-trade/article69206073.ece",
    },
    {
        id: 3,
        title: "LeRemitt Unveils Document Management Solution For Foreign Trade",
        description: "LeDoc is the latest addition to LeRemitt’s Global Trade Verse, an integrated cross-border platform that leverages technology and industry expertise to simplify global trade.",
        source: "FPJ News Service",
        date: "Feb 15, 2025",
        image: "/images/articaldata-03.webp",
        link: "https://www.freepressjournal.in/business/leremitt-unveils-document-management-solution-for-foreign-trade",
    },
    {
        id: 4,
        title: "LeRemitt Launches LeDoc: A Next-Gen Document Management Solution for International Trade",
        description: "LeDoc is an AI-powered platform developed by LeRemitt, designed to streamline trade documentation and compliance management for exporters. It offers intelligent storage and enhanced security.",
        source: "CIOL Bureau",
        date: "Feb 14, 2025",
        image: "/images/articaldata-04.webp",
        link: "https://www.ciol.com/news/leremitt-launches-ledoc-a-next-gen-document-management-solution-for-international-trade-8719508",
    },
    {
        id: 5,
        title: "LeRemitt launches its Cross-Border Platform for MSMEs in Partnership with YES BANK",
        description: "LeRemitt, in partnership with YES BANK, has developed a user-friendly platform that enables MSME players to easily conduct international transactions in key currencies such as USD, EURO, GBP, and CAD. This innovative solution simplifies cross-border payments.",
        source: "CXOToday",
        date: "Feb 19, 2024",
        image: "/images/articaldata-05.webp",
        link: "https://cxotoday.com/press-release/leremitt-launches-its-cross-border-platform-for-msmes-in-partnership-with-yes-bank/",
    },
    {
        id: 6,
        title: "Yes Bank, LeRemitt in pact to enable smooth cross-border transactions for MSMEs",
        description: "Fintech startup LeRemitt and Yes Bank have partnered to introduce a cross-border platform that enables micro, small and medium enterprises (MSMEs) to conduct international transactions in key currencies.",
        source: "The Economic Times",
        date: "July 9, 2022",
        image: "/images/articaldata-06.webp",
        link: "https://economictimes.indiatimes.com/tech/technology/yes-bank-leremmitt-in-pact-to-enable-smooth-cross-border-transactions-for-msmes/articleshow/107480167.cms?from=mdr",
    },
    {
        id: 7,
        title: "Fintech startup LeRemitt raises $1.25 million in funding from Axilor Ventures, others",
        description: "Fintech startup LeRemitt on Friday announced that it has raised $1.25 million in a funding round led by early-stage investor Axilor Ventures. The round also saw participation from Capital A along with other founders and angel investors.",
        source: "The Economic Times Tech",
        date: "July 29, 2023",
        author: "— By Jessica Rajan",
        image: "/images/articaldata-07.webp",
        link: "https://economictimes.indiatimes.com/tech/funding/fintech-startup-leremitt-raises-1-25-million-in-funding-from-axilor-ventures-others/articleshow/102222902.cms",
    },
    {
        id: 8,
        title: "Fintech Startup LeRemitt Secures Funding To Simplify Cross-Border Transactions For MSMEs",
        description: "Founded in 2022 by Sheetal Jain, Mahesh Kumar Barate, and Hari Ambati, LeRemitt helps businesses, especially MSMEs, to streamline overseas transactions. The freshly raised funds will be used for hiring, global expansion, product development, and exploring strategic partnerships.",
        source: "Inc42",
        date: "July 27, 2023",
        image: "/images/articaldata-08.webp",
        link: "https://inc42.com/buzz/fintech-startup-leremitt-secures-funding-to-simplify-cross-border-transactions-for-msmes/",
    },
    {
        id: 9,
        title: "LeRemitt unveils LeDoc to simplify trade documentation for MSMEs",
        description: "LeRemitt, a cross-border trade platform for MSMEs, has announced the launch of LeDoc, an Al-powered platform designed to streamline trade documentation and compliance management through intelligent storage, enhanced security, seamless sharing and real-time collaboration.",
        source: "IBSintelligence",
        date: "Feb 18, 2025",
        image: "/images/articaldata-09.webp",
        link: "https://ibsintelligence.com/ibsi-news/leremitt-unveils-ledoc-to-simplify-trade-documentation-for-msmes/",
    },
    {
        id: 10,
        title: "Sheetal Jain, CEO - LeRemitt Awarded ET Inspiring Women Leaders Award 2024 by The ET Women Conclave 2024",
        description: "Our Co-Founder & CEO, Sheetal Jain has been awarded by the ET conclave as the ET Inspiring Women Leader amongst the many woman leaders who have made significant strides in the ecosystem. The event honoured women leaders from diverse industries and backgrounds, and addressed pressing issues ...",
        source: "The Economic Times",
        date: "July 13, 2024",
        image: "/images/articaldata-10.webp",
        link: "https://economictimes.indiatimes.com/news/company/corporate-trends/unleashing-potential-embracing-diversity-a-symphony-of-womens-voices/articleshow/108821524.cms"
    },
    {
        id: 11,
        title: "LeRemitt, a Cross Border Platform, wishes to empower MSMEs in India with their platform for enhancing the global trade experience",
        description: "LeRemitt platform is an international payments platform meant for MSMEs. An MSME can bring payments in 4 major currencies through Virtual accounts provided through a digital, RBI complaint and AI-driven secure platform. Targets to expand services across geographies connecting MSMEs across the globe",
        source: "CXOToday",
        date: "Jun 27, 2024",
        image: "/images/articaldata-11.webp",
        link: "https://cxotoday.com/press-release/leremitt-a-cross-border-platform-wishes-to-empower-msmes-in-india-with-their-platform-for-enhancing-the-global-trade-experience/",
    },
    {
        id: 12,
        title: "Fintech at the crossroads: Disruption and regulation",
        description: "In the last one month, RBI has made the following two announcements back-to-back which have sent shockwaves through the entire fintech industry leaving stakeholders on both sides of the debate pondering the implications and the path forward",
        source: "ETEdgeINSIGHTS",
        date: "Mar 05, 2024",
        image: "/images/articaldata-12.webp",
        link: "https://etedge-insights.com/technology/fintech/fintech-at-the-crossroads-disruption-and-regulation/",
    },
    {
        id: 13,
        title: "LeRemitt Honored with Fintech Start-up of the Year (Payments) Award by MSME India Business Awards 2024",
        description: "We are thrilled to announce that LeRemitt has been named Fintech Start-up of the Year (Payments) at the MSME India Business Awards 2024. This award honors our commitment to innovation and excellence in fintech. Thank you to our dedicated team, partners, and customers for their unwavering support.",
        source: "ETEdgeINSIGHTS",
        date: "2024",
        image: "/images/articaldata-13.webp",
    },
];


// Eligibility Arrays with updated content from the provided text
export const unsecuredEligibility = [
    {
        title: "Business Vintage",
        description: [
            "A minimum operational history, typically ranging from 2 to 3 years, demonstrating stability and experience in export activities."
        ],
        icon: Timer
    },
    {
        title: "Creditworthiness",
        description: [
            "A satisfactory credit score and a clean repayment record, indicating financial discipline and reliability."
        ],
        icon: UserCheck
    },
    {
        title: "Export Orders",
        description: [
            "Confirmed export orders or irrevocable letters of credit from reputable buyers, serving as assurance of future receivables."
        ],
        icon: FileText
    },
    {
        title: "Financial Statements",
        description: [
            "Audited financial statements for the past 2 to 3 years, showcasing the company's financial health and profitability."
        ],
        icon: BarChart4
    },
    {
        title: "Turnover Threshold",
        description: [
            "A minimum annual turnover, which may vary by institution, to ensure the business has sufficient scale."
        ],
        icon: Percent
    },
    {
        title: "Regulatory Compliance",
        description: [
            "Adherence to Foreign Exchange Management Act (FEMA) regulations and other export-related guidelines set by Indian authorities."
        ],
        icon: ShieldCheck
    }
];

export const securedEligibility = [
    {
        title: "Business Vintage",
        description: [
            "A minimum operational history of 2 to 3 years, with experience in export activities."
        ],
        icon: Timer
    },
    {
        title: "Creditworthiness",
        description: [
            "Good credit score and repayment track record.",
            "No major defaults or negative remarks in credit history.",
        ],
        icon: Landmark
    },
    {
        title: "Export Orders or Letters of Credit",
        description: [
            "Confirmed export orders from overseas buyers.",
            "Irrevocable letters of credit (LC) or export contracts."
        ],
        icon: Coins
    },
    {
        title: "Financial Statements",
        description: [
            "Audited financials for the last 2–3 years, showing profitability and financial stability.",
            "Minimum turnover threshold, as per lender requirements."
        ],
        icon: FileText
    },
    {
        title: "Regulatory Compliance",
        description: [
            "Compliance with Foreign Exchange Management Act (FEMA) and other export finance guidelines.",
        ],
        icon: UserCheck
    },
    {
        title: "Margin Money Contribution",
        description: [
            "Borrowers must contribute a certain margin percentage (typically 10-25%), depending on the lender's risk assessment.",
        ],
        icon: Percent
    },
    {
        title: "Loan Tenure & Repayment",
        description: [
            "hort-term financing, typically up to 180–270 days (may be extended based on lender discretion).",
            "Repayment through proceeds from the export bill.",
        ],
        icon: RotateCcw
    },
    {
        title: "Collateral Requirement",
        description: [
            "Stock-in-process/raw materials (pledged to the lender).",
            "Export receivables or expected proceeds.",
            "Fixed assets, such as land, building, or machinery (in some cases).",
            "Personal or corporate guarantees (depending on loan amount)."
        ],
        icon: Warehouse
    },
];

// Complete Bill Discounting eligibility criteria from the document
export const postShipmentEligibility = [
    {
        title: "Business Vintage",
        description: [
            "Minimum operational history of 2 to 3 years in export activities"
        ],
        icon: Timer
    },
    {
        title: "Creditworthiness",
        description: [
            "Good credit score and clean repayment record",
            "No history of defaults or major irregularities in past transactions"
        ],
        icon: UserCheck
    },
    {
        title: "Documentary Proof",
        description: [
            "Exporters must submit bills of exchange, shipping documents, and invoices as proof of goods shipped",
            "Irrevocable Letters of Credit (LCs) or confirmed buyer acceptance increases eligibility"
        ],
        icon: FileCheck
    },
    {
        title: "Financial Statements",
        description: [
            "Audited financial statements for the past 2–3 years, demonstrating a stable financial position",
            "Minimum annual turnover requirement, varying by lender"
        ],
        icon: BarChart4
    },
    {
        title: "Regulatory Compliance",
        description: [
            "Compliant with FEMA, RBI export finance norms, and customs regulations"
        ],
        icon: Shield
    },
    {
        title: "Collateral Requirement",
        description: [
            "The bill itself acts as collateral, but additional security may be required for high-risk exporters",
            "Personal guarantees or additional collateral (depending on risk assessment)"
        ],
        icon: Landmark
    },
    {
        title: "Discounting Rate & Charges",
        description: [
            "Interest rate based on risk, tenor, and buyer credibility",
            "Processing fees, forex hedging charges, and other costs as per lender policy"
        ],
        icon: Percent
    },
    {
        title: "Loan Tenure & Repayment",
        description: [
            "Typically 30 to 180 days, depending on the credit terms agreed with the overseas buyer",
            "Loan repaid once the buyer settles the invoice"
        ],
        icon: Calendar
    }
];

// Complete Factoring eligibility criteria from the document
export const factoringEligibility = [
    {
        title: "Business Entity Type",
        description: [
            "Micro, Small & Medium Enterprises (MSMEs), Large Corporates, and Proprietorships",
            "Public and Private Limited Companies, LLPs, and Partnership Firms",
            "Should be registered under relevant authorities (GST, MCA, Udyam, etc.)"
        ],
        icon: Building2
    },
    {
        title: "Turnover & Financial Stability",
        description: [
            "Minimum turnover requirement of Rs. 20 cr",
            "Stable cash flow with no major irregularities in bank transactions",
            "Positive profitability & net worth (in some cases)",
            "Audited financials for the last 2-3 years"
        ],
        icon: BarChart4
    },
    {
        title: "Business Age & Vintage",
        description: [
            "The business should be operational for at least 1-2 years",
            "Some lenders may prefer businesses with a track record of at least 3 years"
        ],
        icon: Timer
    },
    {
        title: "Nature of Invoices",
        description: [
            "Only commercial invoices raised on reputed buyers (corporates, PSUs, government entities, or well-rated companies) are considered",
            "Invoices should be undisputed and due for payment (typically within 30-90 days)",
            "No bills related to advance payments or related-party transactions"
        ],
        icon: FileText
    },
    {
        title: "Buyer's Creditworthiness",
        description: [
            "Buyers should have a good credit rating and a stable financial position",
            "Some lenders check the buyer's past payment track record",
            "Approved buyers' list may be required"
        ],
        icon: UserCheck
    },
    {
        title: "KYC & Documentation",
        description: [
            "PAN, GST, Udyam Certificate (for MSMEs), and Business Registration Certificate",
            "Bank statements (last 6-12 months)",
            "Invoices to be factored and supporting agreements",
            "Debtor confirmation (sometimes required)",
            "Financial statements (P&L, balance sheet, ITR for last 2-3 years)"
        ],
        icon: ClipboardList
    },
    {
        title: "CIBIL Score & Creditworthiness",
        description: [
            "The business and promoters should have a good CIBIL Score (typically 700+)",
            "No history of loan defaults or NPA classification"
        ],
        icon: ShieldCheck
    },
    {
        title: "Industry & Sector Considerations",
        description: [
            "Preference for industries with stable demand and predictable cash flows",
            "No Gems & Jewellery, No Realestate or any speculative business"
        ],
        icon: Briefcase
    },
    {
        title: "Collateral & Personal Guarantee",
        description: [
            "Factoring is mostly unsecured, but some lenders may ask for collateral (depending on risk)",
            "A personal guarantee from promoters may be required in some cases"
        ],
        icon: User
    }
];

// Loan Arrays
// export const preShipmentLoans = [
//     {
//         id: "unsecured",
//         title: "Unsecured Loans",
//         description: "For exporters needing working capital before shipment without collateral.",
//         link: "/apply/unsecured-loans",
//         benefits: [
//             { text: "Hassle-free approval for loans up to ₹50 lakh", icon: Banknote },
//             { text: "Generate loan offers from 100+ financial institutions", icon: Building2 },
//             { text: "No collateral required", icon: ShieldOff },
//             { text: "Interest rates as low as 1.2% per month", icon: Percent },
//             { text: "Minimal documentation required", icon: FileText },
//         ],
//         eligibility: unsecuredEligibility,
//         defaultSelected: ["unsecured_loans"],
//     },
//     {
//         id: "secured",
//         title: "Secured Loans",
//         description: "For exporters looking for higher funding backed by collateral.",
//         link: "/apply/secured-loans",
//         benefits: [
//             { text: "Interest rates starting from 9% per annum", icon: BarChart4 },
//             { text: "Funding up to 100% of collateral value", icon: Coins },
//             { text: "Approval within 48 hours", icon: Timer },
//             { text: "Expert banking support", icon: UserCheck },
//             { text: "Flexible repayment plans", icon: RefreshCcw },
//         ],
//         eligibility: securedEligibility,
//         defaultSelected: ["secured_loans"],
//     },
// ];

// export const postShipmentLoans = [
//     {
//         id: "post-shipment",
//         title: "Bill Discounting",
//         description: "Businesses waiting for payments after shipment.",
//         link: "/apply/post-shipment-finance",
//         benefits: [
//             { text: "Timely access to working capital", icon: Truck },
//             { text: "Financing up to 90% of invoice value", icon: Coins },
//             { text: "No collateral required", icon: ShieldOff },
//             { text: "Competitive discount rates from 1-3% per month", icon: Percent },
//             { text: "100% digital application & quick approvals", icon: Zap },
//         ],
//         eligibility: postShipmentEligibility,
//         defaultSelected: ["bill_of_discounting"],
//     },
//     {
//         id: "factoring",
//         title: "Factoring Loans",
//         description: "Invoice factoring solutions for businesses with established buyers.",
//         link: "/apply/factoring-loans",
//         benefits: [
//             { text: "Non-recourse buyer-led financing", icon: Banknote },
//             { text: "Off balancesheet financing", icon: Receipt },
//             { text: "Buyer gets up to 120 days credit period", icon: CalendarClock },
//             { text: "Get upto 80% of invoice paid upfront", icon: Wallet },
//             { text: "Suitable for businesses that have established buyers in developed economies", icon: Globe },
//         ],
//         eligibility: factoringEligibility,
//         defaultSelected: ["factoring_loans"],
//     }
// ];

export const shipmentLoanTypes = [
    {
        id: "unsecured",
        category: "Pre-Shipment Loans",
        categoryIcon: CheckCircle,
        title: "Unsecured Loans",
        defaultSelected: ["unsecured_loans"],
        link: "/apply/unsecured-loans",
        description: "For exporters needing working capital before shipment without collateral.",
        benefits: [
            {
                text: "Hassle-free approval for loans up to ₹50 lakh",
                icon: Banknote,
                details: "Quick and easy approval process."
            },
            {
                text: "Generate loan offers from 100+ financial institutions",
                icon: Building2,
                details: "Access to a wide range of institutions."
            },
            {
                text: "No collateral required",
                icon: ShieldOff,
                details: "No assets needed for loan approval."
            },
            {
                text: "Interest rates as low as 1.2% per month",
                icon: Percent,
                details: "Competitive rates based on your profile."
            },
            {
                text: "Minimal documentation required",
                icon: FileText,
                details: "Simple paperwork process."
            }
        ]
    },
    {
        id: "secured",
        title: "Secured Loans",
        category: "Pre-Shipment Loans",
        categoryIcon: Lock,
        defaultSelected: ["secured_loans"],
        link: "/apply/secured-loans",
        description: "For exporters looking for higher funding backed by collateral.",
        benefits: [
            {
                text: "Interest rates starting from 9% per annum",
                icon: BarChart4,
                details: "Rates start from competitive 9% per year."
            },
            {
                text: "Funding up to 100% of collateral value",
                icon: Coins,
                details: "Get financing up to the full value of your collateral."
            },
            {
                text: "Approval within 48 hours",
                icon: Timer,
                details: "Fast and efficient loan approval process."
            },
            {
                text: "Expert banking support",
                icon: UserCheck,
                details: "Guidance from experienced professionals."
            },
            {
                text: "Flexible repayment plans",
                icon: RefreshCcw,
                details: "Customized repayment options to suit your needs."
            }
        ]
    },
    {
        id: "bill-discounting",
        title: "Bill Discounting",
        category: "Post-Shipment Loans",
        categoryIcon: Truck,
        defaultSelected: ["bill_of_discounting"],
        link: "/apply/post-shipment-finance",
        description: "For businesses waiting for payments after shipment.",
        benefits: [
            {
                text: "Timely access to working capital",
                icon: Truck,
                details: "Quick access to funds without waiting for payment."
            },
            {
                text: "Financing up to 90% of invoice value",
                icon: Coins,
                details: "Access to most of the invoice value upfront."
            },
            {
                text: "No collateral required",
                icon: ShieldOff,
                details: "Financing based on the invoice, no collateral needed."
            },
            {
                text: "Competitive discount rates from 1-3% per month",
                icon: Percent,
                details: "Flexible rates based on your invoice value."
            },
            {
                text: "100% digital application & quick approvals",
                icon: Zap,
                details: "Fast and hassle-free digital process."
            }
        ]
    },
    {
        id: "factoring",
        title: "Factoring",
        category: "Post-Shipment Loans",
        categoryIcon: IndianRupee,
        defaultSelected: ["factoring_loans"],
        link: "/apply/factoring-loans",
        description: "Invoice factoring solutions for businesses with established buyers.",
        benefits: [
            {
                text: "Non-recourse buyer-led financing",
                icon: Banknote,
                details: "Buyer assumes responsibility for repayment."
            },
            {
                text: "Off-balance-sheet financing",
                icon: Receipt,
                details: "Helps improve financial statements."
            },
            {
                text: "Buyer gets up to 120 days credit period",
                icon: CalendarClock,
                details: "Offers flexibility to your buyer."
            },
            {
                text: "Get up to 80% of invoice paid upfront",
                icon: Wallet,
                details: "Immediate cash flow from your receivables."
            },
            {
                text: "Suitable for businesses that have established buyers in developed economies",
                icon: Globe,
                details: "Ideal for international trade."
            }
        ]
    }
];

export const LeDocHomeSteps = [
    { title: "Set up Users and Partners", description: " Effortlessly onboard internal teams and external partners, providing them with user-controlled access tailored to your needs", icon: Users, color: "from-blue-600 to-blue-300" },
    { title: "Set up your document and Shipment Workflow", description: "Customize your document types and workflow to fit your needs, ensuring the system adapts to you, not the other way around", icon: Workflow, color: "from-purple-600 to-purple-300" },
    { title: "Upload or sync Documents", description: "Seamlessly upload or sync documents from your ERP, emails, or  opt for manual upload, ensuring indexed storage of all your documents", icon: FileUp, color: "from-teal-600 to-teal-300" },
    { title: "Ready to share amongst users and Partners", description: "Ready to share seamlessly and collborate real time among internal users and external partners, ensuring everyone has a single view to the shipment documents", icon: Share2, color: "from-red-600 to-red-300" },
    { title: "Automated Compliance Management", description: "Automate Shipping bill validations, Advance Authorisation Tracking, EPCG Obligation tracking, EBRC generation ", icon: ShieldCheck, color: "from-yellow-600 to-yellow-300" },
    { title: "Reports and Analytics", description: "Reports and Analytics provide comprehensive insights and data-driven decision-making tools to monitor, evaluate, and optimize business performance", icon: BarChart3, color: "from-cyan-600 to-cyan-300" },
];


export const OneComplianceSteps = [
    {
        title: "EDPMS Reconciliation Workspace",
        points: [
            "Invoices, shipping bills and bank inward remittance data at one place",
            "Map and match transactions",
            "Set up rules for auto reconciliations"
        ],
        icon: LayoutDashboard,
    },
    {
        title: "EBRC Tracking & Management",
        points: [
            "Track which invoices are EBRC-ready, pending, or complete",
            "Pull IRM data via DGFT APIs",
            "Link invoices and shipping bills to payments"
        ],
        icon: FileCheck,
    },
    {
        title: "Central Compliance Data Hub",
        points: [
            "View DGFT, ICEGATE and bank-level data in one interface",
            "Search across invoices, SBs, buyers or currencies"
        ],
        icon: Database,
    },
    {
        title: "Rule Engine Dashboard",
        points: [
            "Configure rules for allocations & mismatches",
            "View pending EBRCs & unmatched entries",
            "Focus only on exceptions—not scanning everything manually"
        ],
        icon: Settings,
    },
    {
        title: "Workflows, Roles & Audit Trail",
        points: [
            "Maker–checker approval flows",
            "Full activity logs with timestamps"
        ],
        icon: ShieldCheck,
    }
];

export const oneComplianceSolves = [
    {
        title: "Broken, manual reconciliation",
        description: "No more juggling spreadsheets, PDFs and mails to figure out which invoices are closed, which payments are pending, and what’s ageing.",
        icon: Split,
    },
    {
        title: "Zero visibility on EBRC status",
        description: "Know exactly which invoices have EBRCs, what’s pending, and what’s stuck – without chasing different portals and branches.",
        icon: EyeOff,
    },
    {
        title: "Fragmented data across systems",
        description: "Bring data from DGFT, ICEGATE and banks into a single view for better control, internal reviews and audits.",
        icon: Layers,
    },
    {
        title: "Last-minute compliance fire-fighting",
        description: "Review your unmatched entries and missing documentation instead of discovering issues during audits or bank reviews.",
        icon: AlertTriangle,
    },
];

export const LeRemittHowItWorks = [
    { id: 1, title: "Register, Complete your KYC", description: "KYC verification & onboarding", image: "/images/HowLeRemWorks-01.webp" },
    { id: 2, title: "Get FCY Account", description: "Get Accounts in 4 Currencies- USD, EUR, GBP, CAD", image: "/images/HowLeRemWorks-02.webp" },
    { id: 3, title: "Upload Invoice & Receive Money", description: "Funds are credited directly to your Indian account ", image: "/images/HowLeRemWorks-03.webp" },
    { id: 4, title: "Download e-FIRA", description: "Automated regulatory reporting for hassle-free compliance ", image: "/images/HowLeRemWorks-04.webp" },
];

export const OneComplianceHowItWorks = [
    {
        title: "Onboard your data",
        points: [
            "Connect DGFT and ICEGATE",
            "Import or upload bank inward remittance data",
        ],
        icon: FileUp,
    },
    {
        title: "Reconcile with smart matching",
        points: [
            "AI suggests matches between invoices, SBs and payments",
            "Review, confirm or correct with exception flags",
        ],
        icon: Split,
    },
    {
        title: "Prepare bank-ready reconciliation packs",
        points: [
            "Generate clean bank-wise reconciliation summaries",
            "Share packs for EDPMS closure",
        ],
        icon: FileCheck,
    },
    {
        title: "Track EBRCs and closures",
        points: [
            "Track EBRC-ready and completed records",
            "Link EBRCs to underlying transactions",
        ],
        icon: Timer,
    },
    {
        title: "Monitor, review and export",
        points: [
            "Dashboards for closures, delays and risks",
            "Export reports for management and auditors",
        ],
        icon: BarChart3,
    },
];