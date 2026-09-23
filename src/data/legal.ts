export interface LegalSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  sections: LegalSection[];
}

// Real legal copy supplied by the user (2026-09-25), verbatim — this is a legal
// document, so the text below is not paraphrased or shortened anywhere.
export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    sections: [
      {
        paragraphs: [
          "This document is an electronic record as per provisions of Information Technology Act, 2000 and rules thereunder as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000.",
          "This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and Regulations, Terms of Use for access or usage of website of iD Fresh Food (India) Pvt. Ltd.",
          "This Website on domain name, www.idfresh.in, (hereinafter referred to as “Website”) is owned by iD Fresh Food (India) Pvt. Ltd, a company incorporated under the Companies Act, 1956 with its registered office at Bangalore, India, (hereinafter referred to as “iD Fresh”).",
          "Use of the Website is governed by the following terms and conditions (“Terms of Use”) as applicable to the Website.",
          "iD Fresh reserve the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without notice.",
          "By mere accessing, browsing or otherwise using the website, users agree to all the terms and conditions under these terms of use, so please read the terms of use carefully before proceeding. If the user disagrees with any part of these terms and conditions, user must not use this website.",
          "This Website is for general information and use only.",
          "Logos, names, images and trademarks on the website are proprietary rights of iD Fresh. Nothing on the website confers on any user the right to use any such logo, name, image or trademark. The entire content included in this website, including but not limited to text, design, graphics, interfaces, works or code(s) and the selection and arrangements thereof (hereinafter referred to as “Materials”) are the property of iD Fresh and iD Fresh Food (India) Pvt. Ltd., is the registered owner of ” iD Fresh ” trademarks/trade names.",
          "The content on the website is rationalized from time to time. All information or advice provided as part of this website is intended to be general in nature and should not rely on it in connection with the making of any decision. While iD Fresh attempts to keep its website information accurate and timely, it neither guarantees nor endorses the content, accuracy, or completeness of the information, text, graphics, hyperlinks, and other items contained on this server or any other server.",
          "As a result of updates and corrections, website materials are subject to change without notice from iD Fresh. The information, including details of products and services, and any offers included in this website are compiled from a variety of sources and are subject to change at any time without notice. Commercial use of website materials is prohibited without the written permission of iD Fresh.",
          "A single copy of the Materials may be downloaded or otherwise copied from this website for non-commercial personal use only, provided however, that all copyright and other proprietary notices are kept intact. Any further copying, reproduction, publication, posting, transmission or distribution of any part of this website in any way is prohibited. Except as provided herein, no license or right, express or implied, is granted to any person under any intellectual property right. Modification of the Materials or use of the Materials for any other purpose is a violation of copyright and other proprietary rights of the iD Fresh.",
          "iD Fresh Food (India) Pvt. Ltd. is not responsible for the content of external websites. We do not produce or maintain these websites, and therefore iD Fresh will accept no responsibility or liability in respect of the material on any such websites. By allowing links with third party websites iD Fresh does not intend to solicit business or offer any security to any person in any country, directly or indirectly.",
          "Any material/contents downloaded or otherwise obtained through the use of the website is done at your own discretion and risk. Although iD Fresh takes full precaution and care against viruses in the Content present or sent through the website but iD Fresh and/or its associates and affiliates do not warrant that this website, its servers, or any mail sent from iD Fresh and/or its associates and affiliates will not have viruses or harmful components. If any damage is caused to your computer system and any losses accrue it will not be the responsibility of iD Fresh and/or its associates and affiliates. You will be solely responsible for any damage to your computer system or loss of data or any other harm that results from the usage of any such material.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    sections: [
      {
        heading: "General Information",
        paragraphs: [
          "This is the official web site of iD Fresh. All the contents of this website are only for general information or use only.",
        ],
      },
      {
        heading: "Accuracy of Information",
        paragraphs: [
          "While we endeavor to keep the data/information up to date and correct, there is no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance on such information is therefore strictly at your own risk. In no event will iD Fresh be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.",
        ],
      },
      {
        heading: "Data protection",
        paragraphs: [
          "Any personal information submitted via this website, whether by email or other means, will be used solely by iD Fresh and will not be disclosed to any third parties.",
        ],
      },
      {
        heading: "Website browsing & links",
        paragraphs: [
          "Any material/contents downloaded or otherwise obtained through the use of the website is done at your own discretion and risk. Although iD Fresh takes full precaution and care against viruses in the Content present or sent through the website but iD Fresh and/or its associates and affiliates do not warrant that this website, its servers, or any mail sent from iD Fresh will not have viruses or harmful components. If any damage is caused to your computer system and any losses accrue it will not be the responsibility of iD Fresh. You will be solely responsible for any damage to your computer system or loss of data or any other harm that results from the usage of any such material.",
        ],
      },
      {
        heading: "Copyright & Trademarks",
        paragraphs: [
          "Unless otherwise stated, copyright and all intellectual property rights in all material presented on the website including but not limited to text, audio, video or graphical images, trademarks and logos appearing on this website are the property of iD Fresh, its affiliates and associates and are protected under applicable Indian laws. Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.",
        ],
      },
      {
        heading: "Jurisdiction",
        paragraphs: [
          "Terms of Use shall be governed by and interpreted and construed in accordance with the laws of India. All disputes relating to this notice shall be subject to the exclusive jurisdiction of Bangalore court.",
        ],
      },
      {
        heading: "Indemnity",
        paragraphs: [
          "User shall indemnify and hold harmless iD Fresh, its owner, licensee, affiliates, subsidiaries, group companies (as applicable) and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys' fees, made by any third party or penalty imposed due to or arising out of user’s breach of this Terms of Use and other Policies, or user violation of any laws, rules or regulations or the rights (including infringement of intellectual property rights) of a third party.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "IN NO EVENT SHALL ID FRESH BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND IN CONNECTION WITH THESE TERMS OF USE, EVEN IF USER HAS BEEN INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES.",
        ],
      },
      {
        heading: "Grievance officer",
        paragraphs: [
          "In accordance with Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below.",
          "iD Fresh Food (India) Private Limited. 5th floor, Trifecta Adatto, 21, ITPL Main Rd, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048, India. Email: customercare@idfreshfood.com",
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    sections: [
      {
        paragraphs: [
          "‘https://www.idfreshfood.com/’ (“Website”) is a property of and operated by ID Fresh Food (India) Private Limited (“ID Fresh”) registered under the Companies Act, 2013, and having its registered office at Sy.Nos. 515/2, 515/3, 515/4, 516/2, 516/3, 516/4, 533, Madivala village, Kasaba Hobli, Anekal Taluk Bangalore, Karnataka, 562107, India. By accessing or using any version of the Website (“Platform”), you signify that you have read, understood and agree to be bound by these Terms of Use (“Terms of Use”) and any other applicable law. As used herein, “Users” shall mean anyone who uses or accesses the Platform on any computer, mobile phone, tablet, console or other device (collectively, “Device”). Your continued use of the Platform shall be constituted as your acceptance to the Terms of Use, as revised from time to time. If you do not agree with these Terms of Use, please do not access and use the Platform. For the purposes of these Terms of Use, “we”, “our” and “us” shall mean ID Fresh, and/or third-party service providers engaged by ID Fresh to render certain services on the Platform and “you” and “your” shall mean a User who meets the eligibility criteria set out below.",
          "We reserve the right to update or modify these Terms of Use at any time without prior notice. Your access and use of the Platform following any such change constitutes your agreement to follow and be bound by these Terms of Use, as updated or modified. For this reason, we encourage you to review these Terms of Use each time you access and use the Platform.",
        ],
      },
      {
        heading: "Disclaimers",
        paragraphs: [
          "You acknowledge and agree that:",
          "Although We strive to provide on this Platform the latest developments relating to Our products and services, and other information about Our Company, We do not warrant the accuracy, effectiveness and suitability of any information contained in this Platform. User of this Platform assumes full responsibility and all risks arising from use of this Platform. The information is presented “AS IS” and may include technical inaccuracies or typographical errors. ID Fresh reserves the right to make additions, deletions, or modifications to the information at any time without any prior notification.",
          "Id Fresh makes no representations or warranties of any kind or nature with respect to the information or content posted on this Platform. ID Fresh hereby disclaims all representations and warranties, whether express or implied, created by law, contract or otherwise, including, without limitation, any warranties of merchantability, fitness for a particular purpose, title or non-infringement. In no event shall ID Fresh be liable for any damages of any kind or nature, including, without limitation, direct, indirect, special (including loss of profit) consequential or incidental damages arising from or in connection with the existence or use of this internet site and/or the information or content posted on this Platform, regardless of whether ID Fresh has been advised as to the possibility of such damages.",
          "ID Fresh is not responsible, and provides no warranty whatsoever, for the accuracy, effectiveness, timeliness and suitability of any information or content obtained from third parties, including any hyperlinks to or from third-party sites. Except as otherwise provided on this Platform, ID Fresh will not edit, censor or otherwise control any content provided by third parties on any bulletin board, chat room or other similar forums posted on its Platform. Such information should, therefore, be considered as suspect and is not endorsed by ID Fresh.",
          "This Platform may contain forward-looking statements that reflect ID Fresh’s current expectation regarding future events and business development. The forward-looking statements involve risks and uncertainties. Actual developments or results could differ materially from those projected and depend on a number of factors including, but not limited to the general economic conditions. ID Fresh intends to update this site on a regular basis but assumes no obligation to update any of the content.",
          "The Platform and the functions and features therein are provided on an “as is” and on an “as available” basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
        ],
      },
      {
        heading: "Your Use",
        paragraphs: [
          "You understand, acknowledge, and agree to the following:",
          "By using this Platform, You agree not to disrupt or intercept Our electronic information posted on this Platform or on any of Our servers. You also agree not to attempt to circumvent any security features of Our Platform, and to abide by all applicable, local, state, federal and international laws, rules and regulations.",
          "You voluntarily grant to ID Fresh the consent and right to use all content You upload or otherwise transmit to this Platform, subject to these Terms of Use and ID Fresh Privacy Policy in any manner ID Fresh chooses, including, but not limited, to collect, use, store, transfer (including outside of India), process, disclose, copy, display, perform or publish it in any format whatsoever, modifying it, incorporating it into other material or making a derivative work based on it.",
          "Except as expressly stated and agreed upon in advance by ID Fresh, no confidential relationship shall be established in the event that any User of this Platform makes any oral, written or electronic communication to ID Fresh (such as feedback, questions, comments, suggestions, ideas, etc.). If any ID Fresh Platform requires or requests that such information be provided, and that such information contains personal identifying information (e.g., name, address, phone number), ID Fresh shall obtain, use and maintain it in a manner consistent with Our Privacy Policy. Otherwise, such communication and any information submitted therewith shall be considered non-confidential, and ID Fresh shall be free to reproduce, publish or otherwise use such information for any purposes whatsoever including, without limitation, the research, development, manufacture, use or sale of products incorporating such information. The sender of any information to ID Fresh is fully responsible for its content, including its truthfulness and accuracy and its non-infringement of any other person’s proprietary or privacy rights.",
          "We will do our utmost to ensure that availability of the Platform will be uninterrupted and that transmissions will be error-free. However, due to the nature of the internet, this cannot be guaranteed. Also, your access to the Platform may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services at any time without any prior notice. We will attempt to limit the frequency and duration of such suspension or restriction.",
          "In consideration of ID Fresh granting You the rights hereunder, You hereby agree not to use the Platform for any purpose that is unlawful under any applicable laws and/or in violation of the terms of these Terms of Use and our Privacy Policy. You shall not use the Platform in any manner that could damage, disable, overburden, or impair our server, or any network(s) connected to any ID Fresh server, or interfere with any other party’s use and enjoyment of the Platform. You shall not attempt to gain unauthorized access to any functions and features, other User accounts, computer systems or networks in any manner, including, through hacking, password mining or any other means.",
          "The Platform is made available to you for your own personal and non-commercial use alone. You shall not allow third parties to: (i) make and/or distribute copies of the Platform or any deliverable generated by the Platform; (ii) attempt to copy, reproduce, alter, modify and/or reverse engineer the Platform; and/or (iii) create derivative works of the Platform. You shall not copy, reproduce, distribute, or create derivative works of our content that is available on the Platform. Also, you shall not reverse engineer or reverse compile our technology that is available on the Platform, as may be associated with the Platform from time to time.",
          "You accept that any and all operations emanating from your Device shall be assumed to have been initiated by you.",
          "You shall request ID Fresh, to block the Account and change the passcode immediately for the Account, if your Device has been lost or stolen.",
          "You are responsible for any and all activities that occur in your Account. You agree to notify ID Fresh immediately of any unauthorized use of the Account or any other breach of security. ID Fresh shall not be liable for any loss to you or your organization owing to negligent actions or a failure on your part to inform ID Fresh within a reasonable time, about loss or theft of your Device and/or any unauthorized access in your Account, either with or without your knowledge.",
          "You shall be liable for losses incurred by ID Fresh or any other party due to a third party’s use of the Account. You shall not use any other person’s account at any time, without the permission of the account holder and ID Fresh.",
          "ID Fresh shall make all reasonable efforts to ensure that your information is kept confidential. However, ID Fresh shall not be responsible for any disclosure or leakage of confidential information and/or loss or damage of the Device due to theft, negligence or failure on your part to practice safe computing.",
          "You shall ensure that while using the functions and features, all prevailing and applicable laws, rules and regulations, shall at all times, be strictly complied with by You and ID Fresh shall not be liable in any manner whatsoever for default of any nature, by you, regarding the same.",
          "You understand and acknowledge that upon using the Platform, you authorize us to access third party sites designated by you, on your behalf, to retrieve such information requested by you, and to register for accounts requested by you. For all purposes hereof, you hereby grant us a limited powers and hereby authorize us with the full power of substitution and re-substitution, for you and in your name, place and stead, in any and all capacities, to access third party internet sites, servers or documents, retrieve information, and use your information, all as described above, with the full power and authority to do and perform each and every act and thing requisite and necessary to be done in connection with services and facilities available on the Platform, as fully to all intents and purposes as you might or could do in person. YOU ACKNOWLEDGE AND AGREE THAT WHEN WE ACCESSES AND RETRIEVE INFORMATION FROM THIRD PARTY SITES, WE ARE ACTING AS YOUR AGENT, AND NOT THE AGENT OR ON BEHALF OF THE THIRD PARTY. You agree that such third parties shall be entitled to rely on the foregoing authorization, agency granted by you.",
          "You shall not to host, display, upload, modify, publish, transmit, store, update or share any information that:",
        ],
        list: [
          "belongs to another person and to which the user does not have any right;",
          "is defamatory, obscene, pornographic, paedophilic, invasive of another’s privacy, including bodily privacy, insulting or harassing on the basis of gender, libellous, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or otherwise inconsistent with or contrary to the laws in force;",
          "is harmful to child;",
          "infringes any patent, trademark, copyright or other proprietary rights;",
          "any law for the time being in force;",
          "deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact;",
          "impersonates another person;",
          "threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting other nation;",
          "contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource;",
          "is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "You represent and warrant that you are competent and eligible to enter into a legally binding agreement and be bound by these Term of Use. You shall not access and use the Platform if you are not competent to contract under the applicable laws, rules and regulations.",
        ],
      },
      {
        heading: "User Account, Password and Security",
        paragraphs: [
          "You have an option to set a security passcode on the Platform once you are approved for a credit limit. You are responsible for maintaining the confidentiality of the passcode and your account (“Account”) and are fully responsible for all activities that occur under your passcode or Account. You agree to: (i) immediately notify us of any unauthorized use of your passcode or Account or any other breach of security; and (ii) ensure that you exit from your Account at the end of each session. We cannot and will not be liable for any loss or damage arising from your failure to comply with this Clause 4.",
          "You hereby acknowledge that the deletion of the Platform from the Device does not constitute termination of your Account and agree to undertake the process detailed herein in order to complete de-registration. If and when you are desirous of having your name and other details removed from the records of ID Fresh, immediately upon receiving your written request to that effect ID Fresh shall remove and/delete all such information.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "The information, documents, and related graphics published on the Platform (the “Information”) are the sole property of ID Fresh except for information provided by third-party providers under contract to ID Fresh, its subsidiaries or affiliates. Permission to use the Information is granted, provided that (1) the above copyright notice appears on all copies; (2) use of the Information is for informational and non-commercial or personal use only; (3) the Information is not modified in any way; and (4) no graphics available from this Platform are used separate from accompanying text. ID Fresh is not responsible for content provided by third-party providers, and You are prohibited from distribution of such material without permission of the owner of the copyright therein. Except as permitted above, no license or right, express or implied, is granted to any person under any patent, trademark or other proprietary right of ID Fresh.",
          "No use of any ID Fresh trademark, trade names, trade dress and products on the Platform may be made without the prior written authorization of ID Fresh, except to identify the product or services of the company.",
          "If You believe that Your work has been copied and is accessible on this site in a way that constitutes copyright infringement, You may notify ID Fresh by providing us with the following in writing:",
        ],
        list: [
          "Identification of the copyrighted work that You claim has been infringed;",
          "Identification of the material that is claimed to be infringing and information reasonably sufficient to permit ID Fresh to locate the material;",
          "Your name, address, telephone number, and email address;",
          "An affidavit (duly sworn before a notary) containing a statement by You that You have a good faith and belief that the disputed use is infringing and not authorized; and that the above information in Your notice is accurate and that You are the copyright owner or are authorized to act on the copyright owner’s behalf.",
          "The physical signature of the copyright owner or a person authorized to act on the copyright owner’s behalf.",
        ],
      },
      {
        paragraphs: [
          "To submit a notification of claimed infringement, please contact ID Fresh at info@idfreshfood.com.",
          "All of the content on the Platform, including, without limitation, all of the page headers, images, illustrations, graphics, audio clips, video clips or text, reports generated, trademarks, tradenames (“Platform Content”), constitute our and our licensors’ intellectual property. Copyright laws in all applicable jurisdictions protect the Platform and the Platform Content.",
          "You may access the Platform, avail of the features and facilities and utilize the Platform Content for your personal or internal requirements only. You are not entitled to duplicate, distribute, create derivative works of, display, or commercially exploit the Platform Content, features or facilities, directly or indirectly, without our prior written permission. If you would like to request permission to commercially exploit any particular Platform Content, you could contact us in the manner provided for herein.",
          "ID Fresh and its licensors, if any, are the sole owners of the underlying software and source code associated with the Platform and all the trademarks, copyright and any other intellectual property rights of any nature in the Platform.",
        ],
      },
      {
        heading: "Privacy and Security",
        paragraphs: [
          "ID Fresh is committed to safeguarding Your privacy online. We understand the importance of privacy to Our Users and visitors to Our Platform. Our use of personally identifiable information is governed by Our Privacy Policy and by accessing and using Our Platform; You agree to be bound by that policy. Please check our Privacy Policy on how ID Fresh uses the confidential information provided by its Users.",
        ],
      },
      {
        heading: "Indemnification",
        paragraphs: [
          "You agree to protect, defend and indemnify Us and hold Us and Our representatives harmless from and against any and all claims, damages, costs and expenses, including attorneys’ fees, arising from or related to your access and use of the Platform in violation of these Terms of Use and/or your infringement, or infringement by any other user of your Account, of any intellectual property or other right of anyone.",
          "The terms of this clause will survive any termination or cancellation of these Terms of Use or Your use of the Platform.",
          "ID Fresh shall not be liable for the loss and/or damage of the confidential information or data of the User arising as a result of an event or a series of related events, that is beyond the control of ID Fresh including failures of or problems with the internet or part of the internet, attempted hacker attacks, hacker attacks, denial of service attacks and/or viruses or other malicious software attacks or infections.",
          "Any material downloaded or otherwise obtained through the Platform is done at your own discretion and risk and you are solely responsible for any damage to your Device or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from us through or from the service will create any warranty not expressly stated in these Terms of Use.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "ID Fresh does not assume any liability for the materials, information and opinions provided on, posted to, or otherwise available through, this Platform. Reliance on these materials, information and opinions is solely at your own risk. ID Fresh disclaims any liability for injury or damages resulting from the use of this Platform, or the content contained thereon.",
          "THIS ID FRESH PLATFORM, THE SITE CONTENT, AND THE PRODUCTS AND SERVICES PROVIDED ON OR AVAILABLE THROUGH THIS PLATFORM ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITH ALL FAULTS. IN NO EVENT SHALL ID FRESH, OR ITS SUBSIDIARIES, AFFILIATES, VENDORS, OR THEIR RESPECTIVE DIRECTORS, EMPLOYEES OR AGENTS (HEREINAFTER “ID FRESH PARTIES”) BE LIABLE FOR ANY DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THIS PLATFORM, THE SITE CONTENT, ANY SERVICES PROVIDED ON OR THROUGH THIS PLATFORM OR ANY LINKED SITE, INCLUDING ANY SPECIAL, INDIRECT, PUNITIVE, INCIDENTAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING, BUT NOT LIMITED TO, PERSONAL INJURY, LOST PROFITS OR DAMAGES RESULTING FROM DELAY, INTERRUPTION IN SERVICE, VIRUSES, DELETION OF FILES OR ELECTRONIC COMMUNICATIONS, OR ERRORS, OMISSIONS OR OTHER INACCURACIES IN THIS PLATFORM OR THE SITE CONTENT, WHETHER OR NOT THERE IS NEGLIGENCE BY ID FRESH AND WHETHER OR NOT ID FRESH HAS BEEN ADVISED OF THE POSSIBILITY OF ANY SUCH DAMAGES.",
          "PLEASE BE AWARE THAT ADDITIONAL LEGAL NOTICES, DISCLAIMERS, AND OTHER TERMS OF USE MAY APPLY TO THIS AND OTHER PLATFORM OWNED OR OPERATED BY ID FRESH, ITS SUBSIDIARIES OR AFFILIATES.",
          "In no event shall we be liable for any direct, indirect, punitive, incidental, special or consequential damages or for any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the access, use or performance of the Platform’s functions and features or for interruptions, delay, etc., even if we were advised of the possibility of damages resulting from the cost of getting substitute facilities on the Platform, any products, data, information or services purchased or obtained or messages received or transactions entered into through or from the Platform, unauthorized access to or alteration of your transmissions or data statements or conduct of anyone on the Platform, or inability to use the Platform, the provision of or failure to provide the functions and features, whether based on contract, tort, negligence, strict liability or otherwise. This clause shall survive in perpetuity.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "ID Fresh may terminate the use of the Platform at any time after giving notice of the termination to you.",
          "Upon termination, the rights and license granted to you herein shall terminate and you must cease all use of the Platform.",
        ],
      },
      {
        heading: "Severability",
        paragraphs: [
          "If any provision of these Terms of Use is deemed invalid, unlawful, void or for any other reason unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any of the remaining provisions.",
        ],
      },
      {
        heading: "Assignment",
        paragraphs: [
          "You shall not assign or transfer any rights, obligations, or privileges that you have under these Terms of Use, without the prior written consent of ID Fresh. Subject to the foregoing, these Terms of Use will be binding on the successors and permitted assignees of ID Fresh. Any assignment or transfer in violation of this clause will be deemed null and void.",
        ],
      },
      {
        heading: "Governing Law and Dispute Resolution",
        paragraphs: [
          "These Terms of Use (and by extension, the Privacy Policy) are governed and construed in accordance with Indian law. By using the Platform, you hereby irrevocably consent to the exclusive jurisdiction and venue of courts in Bangalore, in the event of any disputes arising out of or in relation to your access to and use of the Platform.",
        ],
      },
      {
        heading: "General",
        paragraphs: [
          "You agree that these Terms of Use describe the entire agreement between us with respect to its subject matter. ID Fresh Platform was created and is operated under the laws of India. The laws of India will control the terms and conditions provided in these Terms and Conditions, without giving effect to any principles of conflict of laws. You agree that regardless of any applicable law to the contrary, You cannot file a claim or cause of action arising out of or related to ID Fresh Platform or these Terms of Use more than one (1) year after such claim or cause of action arose.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    sections: [
      {
        paragraphs: [
          "ID Fresh Food (India) Private Limited (“ID Fresh”/“We”/“Us”) is committed to upholding the privacy and security of the information supplied by every person (“User”/“You”) accessing and using any version of ‘https://www.idfreshfood.com/’ (“Website”). This Privacy Policy explains the manner in which We collect and use User information. By accessing or using the Website (“Platform”) and through our offline interactions with You (collectively, the “iD Services”), You signify that You have read, understood and agree to be bound by this Privacy Policy. This Privacy Policy does not apply to information collected from residents of countries other than India.",
          "Your access and use of the Platform following any such change constitutes your agreement to follow and be bound by this Privacy Policy, as updated or modified. For this reason, We encourage You to review this Privacy Policy each time You access and use the Platform. Your use of the Platform and any disputes arising therefrom, is subject to this Privacy Policy.",
          "We reserve the right to update or modify this Privacy Policy at any time without prior notice and such changes shall be effective immediately upon posting the updated or modified Privacy Policy on the Platform and We shall not be bound to inform you of any modifications hereof.",
          "On occasion, ID Fresh may offer apps, special programs, activities, events or promotions (“Programs”) that have unique or additional specific terms, privacy notices and/or consent forms that explain how any information You provide will be processed in connection with the Programs. You should review the applicable terms before interacting or participating in the Programs.",
        ],
      },
      {
        heading: "Personal Information",
        paragraphs: [
          "We shall collect personal information of the User, by which he/she/it, as a person can be identified, including without limitation, name, gender, age, date of birth, height, weight, mobile number, address, email address, any identity proof number, phone number, health and fitness related information etc (“Personal Data” or “Personal Information”) as set forth in clause 3 of this Privacy Policy. It is hereby clarified that:",
        ],
        list: [
          "While some User information has to be mandatorily provided, others are optional and certain portions of the information shall remain private and some shall be displayed to other Users; We shall always let the User know which is which.",
          "Additional information may be gathered during subsequent use of the Platform by the User, whenever the User chooses to provide it.",
        ],
      },
      {
        heading: "How does iD Fresh collect Personal Information?",
        paragraphs: [
          "We may also automatically receive and collect certain information from your participation in ID Fresh programs or contests, industry and associations, and other anonymous information in standard usage logs through the web server, including mobile-identification information obtained from the equivalent of “cookies” sent to the Platform, including mobile network information, standard web log information, traffic to and from our Platform, tracking inside the Platform and any other available information, from:",
        ],
        list: [
          "an IP address, assigned to the device used by the User;",
          "the domain server through which the User accesses the Platform and the functions and features therein; and",
          "the type of device used by the User (“Device”).",
        ],
      },
      {
        paragraphs: [
          "It is hereby clarified that such usage information collected is not associated with any Personal Data and is tagged to the unique identifier of a particular Device.",
          "In order to enhance our ability to provide valuable services and experiences to the User, We may:",
        ],
        list: [
          "automatically receive, collect and analyse your location information which may be accessed through a variety of methods including, inter alia, GPS, IP address, and cell tower location; and",
          "collect information pertaining to your Device and your usage thereof, including, inter alia, the names of the other applications on your mobile Device and how you use them, information about your Device, and information about your use of features or functions on your Device.",
        ],
      },
      {
        heading: "Information Collected",
        paragraphs: ["We may collect the following information, depending on what product and service You use:"],
        list: [
          "Contact information and preferences (such as name, email address, mailing address, phone number, and emergency contact information);",
          "Publicly available information;",
          "Internet activity, such as Your Internet Protocol (“IP”) address, browsing history, Your search history and information on Your interaction with the ID Fresh Services and our advertisements;",
          "Device information; and",
          "Geolocation data, e.g., Your physical location or movements (see “Cookies and Other Tools” below).",
        ],
      },
      {
        heading: "How does iD Fresh use Personal Information?",
        paragraphs: ["Generally, ID Fresh may also use Your information to:"],
        list: [
          "Provide Our products and services to You and make them better,",
          "Develop new products and services,",
          "Fulfill Your requests,",
          "Provide customer service and dealing with requests, enquiries, complaints or disputes and other customer care related activities,",
          "Send You administrative communications regarding ID Fresh’s products or ID Fresh Services,",
          "Notify You about special promotions or offers that may be of interest to You,",
          "Invite You to participate in surveys about our products or services,",
          "Better understand the interests of our customers and visitors who use ID Fresh Services,",
          "Maintain ID Fresh’s online services,",
          "Determine an individual’s eligibility to participate in ID Fresh programs or contests,",
          "Evaluate how You and other Users interact with our online services,",
          "Protect ID Fresh and our Users,",
          "Secure our online services including our Platform,",
          "Conduct audits related to our current interactions with You,",
          "Debug the site and service to identify and repair errors that impair existing intended functionality,",
          "Defend ourselves in litigation and investigations and to prosecute litigations,",
          "Comply with our legal and regulatory obligations.",
        ],
      },
      {
        paragraphs: ["ID Fresh may also use information collected from You or about You to offer You customized content, including to:"],
        list: [
          "Recognize new or past visitors to our Platform,",
          "Remember Your personal preferences, and",
          "Show You more relevant and meaningful advertisements based on Your interests.",
        ],
      },
      {
        paragraphs: [
          "ID Fresh may also use Your information for other purposes disclosed to You from time to time. When You send an email message or otherwise contact ID Fresh through its Platform, ID Fresh may use the information provided by You to respond to Your communication. ID Fresh may also archive such Information and/or use it for future communications with You to inform You regarding updates, newsletters, offers, new services and promotions.",
          "In addition, some of our applications and mobile-optimized sites may have location-based features. To deliver these features, We may collect and use location data provided by Your mobile device. For example, We may offer shopping features that allow You to get information about local merchants. By using such applications, You consent to the collection and use of Your mobile device location data for purposes of delivering these location-based features.",
          "We may use Personal Information for our internal business purposes, such as data analysis, audits, developing new products, enhancing our Platform, improving our ID Fresh Services, identifying usage trends and determining the effectiveness of our promotional campaigns.",
          "We may aggregate and/or de-identify data about customers and site visitors and use it for any purpose, including product and service development and improvement activities.",
          "You acknowledge that you are licensing Us to use, modify, display, distribute and create new material from the information you provide through the Platform to render certain services on the Platform. By providing such information, you automatically agree, or promise that the owner of such information has expressly agreed to allow or license, as the case may be, Us to use the information in the manner set out in this Privacy Policy, without the payment of any fees. We may, to the extent permitted by law, also use, license, reproduce, distribute disclose, and aggregate, non-personally identifiable information that is derived through your use of the Platform and you hereby provide consent for the same.",
        ],
      },
      {
        heading: "Does iD Fresh share Personal Information?",
        paragraphs: [
          "ID Fresh may share Your information within the ID Fresh group companies/associates.",
          "We shall not use User information for any purpose other than in connection with the Platform. We shall not rent, sell or share User information and shall not disclose any of the User’s Personal Information to third parties. However, we share Personal Information with our vendors, contractors, business and service partners, or other third parties (collectively, “Service Providers”). Service Providers may include analysis firms, advertisers, payment processing companies, customer service and support providers, email, IT services and SMS vendors, web hosting and development companies and fulfillment companies.",
          "Some Service Providers may collect personal data on behalf of ID Fresh. These third parties may be provided with access to personal data needed to perform their functions. In addition, ID Fresh’s practice is to require its Service Providers to keep Your Personal Information confidential and to use Personal Information only to perform functions for ID Fresh.",
          "If ID Fresh sells all or part of one of its product lines or divisions, Your information may be transferred to the buyer. ID Fresh reserves the right to disclose Your information to respond to authorized information requests from government authorities, to respond to valid judicial requests, to address national security situations, to provide security and investigate potential fraud, or when otherwise required by applicable law.",
          "ID Fresh may disclose Your Personal Information as required by law to any competent law enforcement body, regulatory or government agency, court or other third party where We believe the disclosure is necessary or appropriate to comply with a regulatory requirement, judicial proceeding, court order, government request or legal process served on Us, or to protect the safety, rights, or property of Our customers, the public, ID Fresh or others, and to exercise, establish or defend ID Fresh’s legal rights.",
          "We will not use User information for any purpose other than in connection with the Platform. We will not rent, sell or share User information and will not disclose any of the User’s personally identifiable information to third parties, unless:",
        ],
        list: [
          "it is pursuant to obtaining the User’s permission;",
          "it is in connection with the services being rendered through the Platform;",
          "it is to help investigate, prevent or take action regarding unlawful and illegal activities; suspected fraud, potential threat to the safety or security of any person, violations of ID Fresh’s terms and conditions (“Terms of Use”), or as defence against legal claims;",
          "it is a case of special circumstances such as compliance with court orders, requests/order, notices from legal authorities or law enforcement agencies compel us to make such disclosure; and",
          "it forms part of the information We share with advertisers on an aggregate basis.",
        ],
      },
      {
        heading: "Cookies and Other Tools",
        paragraphs: [
          "ID Fresh collect information about You by using cookies, tracking pixels, web beacons and other technologies (collectively, “Tools”). We use this information to better understand, customize and improve User experience with Our websites, services and offerings as well as to manage Our advertising. This information can make Your use of Our ID Fresh Services easier and more meaningful by allowing ID Fresh to provide better service, customize sites based on consumer preferences, compile statistics, provide You with more relevant advertisements based on Your interests, analyze trends and otherwise administer and improve Our ID Fresh Services. If We have collected Your Personal Information, We may associate this personal data with information gathered through the Tools.",
          "Your web browser can be set to allow You to control whether You will accept cookies, reject cookies, or to notify You each time a cookie is sent to Your browser. If Your browser is set to reject cookies, websites that are cookie-enabled will not recognize You when You return to the website, and some website functionality may be lost. The Help section of Your browser may tell You how to prevent Your browser from accepting cookies.",
          "In furtherance of clause 3 of this Privacy Policy, the following information is collected when visiting ID Fresh Platform:",
          "Log data: When You use ID Fresh Platform, our servers automatically record information (“Log Data”), including information that Your browser sends whenever You visit a website or Your mobile app sends when You are using it. This log data may include Your Internet Protocol address, the address of the webpages You visited that had ID Fresh features, browser type and settings, the date and time of Your request, how You used websites and cookie data.",
          "Cookie data: Depending on how You are accessing ID Fresh Services, we may use “cookies” (a small text file sent by Your computer each time You visit our sites, unique to Your ID Fresh account or Your browser) or similar technologies, to record log data. When we use cookies, we may use “session” cookies (that last until You close Your browser) or “persistent” cookies (that last until You and/or Your browser delete them). For example, we may use cookies to remember Your personal preferences, such as sections of the website that You visit frequently, Your user ID, or other settings so You do not have to set them up every time You visit, and we may use cookies to serve You relevant advertising tailored to Your interests. Some of the cookies we use are associated with Your ID Fresh account (including Personal Information about You, such as the email address You gave us), and other cookies are not.",
          "Device information: In addition to log data, We may also collect information about the device You are using to access our ID Fresh Services, including what type of device it is, what operating system you are using, device settings, unique device identifiers and crash data. Whether We collect some or all of this information often depends on what type of device You are using and its settings. For example, different types of information are available depending on whether You are using a Mac or a PC, or an iPhone or an Android phone. To learn more about what information Your device may make available to us, please also check the policies of Your device manufacturer or software provider.",
          "Interest Based Advertising: ID Fresh hopes to deliver to You advertising for products and services You need or want. ID Fresh, uses common tracking tools, such as cookies, pixels, web beacons, and similar technologies, to automatically collect information about Users for purposes of enhancing their online experience and delivering more meaningful advertisements. Like many companies, ID Fresh may also utilize third-party advertising vendors and other partners to collect this information.",
          "Like most companies, We place advertisements where we think they will be most relevant to customers. One way We do so is by allowing network advertising companies with whom We work to place their own Tools when an individual visits ID Fresh Website. This enables the network advertising company to recognize individuals who have previously visited ID Fresh Website and to serve You ads based on Your web browsing activity, purchases, interests and/or other information—a practice commonly referred to as interest-based advertising (“IBA”) or online behavioral advertising (“OBA”).",
          "These advertising companies may also use these types of technologies to recognize You across the devices You use, such as a mobile phone or a laptop, and serve You ads on websites You visit and applications You use.",
          "Retargeting: One way in which we deliver more meaningful advertisements is through a common form of online advertising known as “retargeting” or “remarketing.” Retargeting works by serving ads on one site based on an individual’s online activities on a different, unrelated site. For example, if You look at ID Fresh products on an ID Fresh website, You may later see an advertisement for ID Fresh products when You visit third-party sites. To do this, ID Fresh or its advertising vendors may use a device ID, cookie, pixel, web beacon or similar technology placed by ID Fresh or our third-party vendor when You visit ID Fresh Website or third-party websites or apps. The placing of these cookies or other technologies on Your device may enable You to be identified across multiple websites. You should consult the privacy policies of our vendors and other websites that You visit to understand how they collect and use Your data.",
        ],
      },
      {
        heading: "What choices do I have about how iD Fresh collects and uses information about me?",
        paragraphs: [
          "Certain ID Fresh Service may ask whether You wish to opt-out or opt into Our offers, promotions and additional services that may be of interest to You.",
          "Marketing and other communication",
          "You may receive notifications and emails from Us on the contact address/es registered with Us. If You no longer wish to receive such materials from Us on a going-forward basis, You may opt-out of receiving such materials. You may send an opt-out request to info@idfreshfood.com. We will endeavor to comply with Your request as soon as reasonably practicable. It is hereby clarified that ID Fresh shall retain such information as collected for registration for a period of one hundred and eighty days after any cancellation or withdrawal of the User’s registration, as the case may be.",
          "However, even if You opt out of receiving such communications, We retain the right to send You non-marketing communications (such as security alerts, administrative messages and information about changes to Our Privacy Policy).",
          "The User may correct or update any information online. In the event of loss of access details, the User may retrieve the same or receive new access details by sending an e-mail to: info@idfreshfood.com.",
          "Your privacy choices",
          "You may have certain rights and choices regarding Our processing of Your personal data. Depending on Your jurisdiction, applicable law may entitle You to additional consumer rights, including the right (with certain limitations and exceptions) to:",
        ],
        list: [
          "Know the categories and/or specific pieces of Personal Information collected about You, including whether Your Personal Information is sold or disclosed, and with whom Your Personal Information was shared;",
          "Access a copy of the Personal Information We retain about You; and",
          "Request deletion of Your Personal Information.",
        ],
      },
      {
        paragraphs: [
          "If and when user is having his or her name and other details removed from our records, immediately upon receiving the User’s written request to that effect We shall, subject to the terms hereof, remove and/delete all such information.",
          "If the User no longer wishes to receive notifications about our services, the User may change his/her notification preferences by contacting us at info@idfreshfood.com. We reserve the right to close the User account if the User opts out of receiving certain crucial notices that are required by Us to perform the services through the Platform.",
          "We reserve the right to verify Your identity in connection with any requests regarding Personal Information to help ensure that We provide the information We maintain to the individuals to whom it pertains, and allow only those individuals or their authorized representatives to exercise rights with respect to that information. If You are an authorized agent making a request on behalf of a consumer, We may require and request additional information to verify that You are authorized to make that request.",
          "We reserve the right to deny Your request if We cannot verify Your identify. Where We deny Your request in whole or in part, We will endeavor to inform You of the denial and provide an explanation of our actions and the reasons for the denial.",
          "We will not restrict or deny You access to our ID Fresh Service because of choices and requests You make in connection with Your Personal Information. Please note, certain choices may affect our ability to deliver the ID Fresh Service. For example, if You sign up to receive marketing communications by email, then ask ID Fresh to delete all of Your information, We will be unable to send You marketing communications.",
        ],
      },
      {
        heading: "How does iD Fresh secure information?",
        paragraphs: [
          "ID Fresh will take reasonable steps to protect the security of Your information during transmission from Your computer and/or mobile to our servers, as well as to protect Personal Information in Our possession from unauthorized access, disclosure, alteration or destruction however, the confidentiality of information transmitted over the Internet cannot be guaranteed. We urge You to exercise caution when transmitting Personal Information over the internet. ID Fresh cannot guarantee that unauthorized third parties will not gain access to Your information; therefore, when submitting Personal Information to ID Fresh Platform, You must weigh both the benefits and the risks.",
          "We shall use generally accepted industry standards to protect the User information submitted to Us, both during transmission and upon receipt. However, please be advised that, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, even though we strive to use commercially acceptable means to protect user information, we cannot guarantee its absolute security and Your use of the Platform is at Your sole risk and discretion. ID Fresh Platform may link to third-party websites that are not controlled by ID Fresh or subject to an ID Fresh Privacy Policy. You should check the privacy policies of such third-party websites before submitting Personal Information.",
          "If a password is used to help protect User accounts and account information, it is the responsibility of the User to keep the password confidential. You have to ensure that You always log out, before sharing the device with a third party and it is advised that the User utilize a service to protect access to the User’s Device.",
        ],
      },
      {
        heading: "Website is not for minor",
        paragraphs: [
          "The Platform should only be used or accessed by persons who are competent to enter into a legally binding contract under the Indian Contract, 1872. If You are a minor (i.e. You are under the age of 18 years), You may use the Platform only with the involvement of Your parent or guardian. ID Fresh does not knowingly collect or use any information from minors. We do not knowingly allow minors to order Our products, communicate with Us, or use any of Our online services. If You are a parent and become aware that Your child has provided Us with information, please contact us on the website or by e-mailing us at info@idfreshfood.com.",
        ],
      },
      {
        heading: "Third Party Sites",
        paragraphs: [
          "We may provide links to websites and other third-party content that is not owned or operated by ID Fresh. The websites and third-party content to which we link may have separate privacy notices or policies. ID Fresh is not responsible for the privacy practices of any entity that it does not own or control.",
          "If You provide any Personal Information through a third-party site, Your interaction and Your Personal Information will be collected by, and controlled by the privacy policy of, that third party site. By using the services, You agree that we will not be liable for any damage or loss caused by Your use of or reliance on any content, advertising, products, or other materials on or available from these third party websites. We recommend that You familiarize yourself with the privacy policies and practices of any such third parties, which are not governed by this Privacy Policy.",
        ],
      },
      {
        heading: "How can I contact iD Fresh?",
        paragraphs: [
          "If You have questions about Your information, please contact us by clicking on the “Contact Us” link on the website You are visiting or by e-mailing us at info@idfreshfood.com.",
          "In all communications to ID Fresh, please include the email address used for registration (if applicable), the website address or the specific ID Fresh program to which You provided Personal Information and a detailed explanation of Your request. We will do our best to respond to all reasonable requests in a timely manner.",
        ],
      },
      {
        heading: "Grievance officer",
        paragraphs: [
          "In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of our Grievance Officer are provided below:",
          "Name: Evelyn NCD",
          "Address: 91 Springboard, 5th Floor, Trifecta Adatto, 21, ITPL Main Road, Garudachar Palya, Mahadevpura, Bengaluru-560048",
          "Tel: +91 9739910521",
          "Email: evelyn@idfreshfood.com",
          "The Grievance Officer shall acknowledge the complaint within twenty four hours and dispose off such complaint within a period of fifteen days from the date of its receipt.",
          "ID Fresh shall, within twenty-four hours from the receipt of a complaint made by a User, in relation to any content which is prima facie in the nature of any material which exposes the private area of such individual, shows such individual in full or partial nudity or shows or depicts such individual in any sexual act or conduct, or is in the nature of impersonation in an electronic form, including artificially morphed images of such individual, take all reasonable and practicable measures to remove or disable access to such content which is hosted, stored, published or transmitted by it.",
          "The Company shall implement a mechanism for the receipt of complaints under the above clause which may enable the individual or person to provide details, as may be necessary, in relation to such content or communication link.",
        ],
      },
      {
        heading: "How will I know whether iD Fresh has updated this policy?",
        paragraphs: [
          "ID Fresh shall periodically inform its Users, at least once every year, that in case of non-compliance with the Terms of Use or this Privacy Policy, it has the right to terminate the access or usage rights of the Users to the Platform immediately or remove non-compliant information or both, as the case may be.",
          "ID Fresh shall periodically, and at least once in a year, inform the Users of its Terms of Use or this Privacy Policy or any change thereof, as the case may be.",
        ],
      },
    ],
  },
];
