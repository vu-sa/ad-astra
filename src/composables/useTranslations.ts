import { ref, computed } from 'vue'

type Language = 'lt' | 'en'

const currentLanguage = ref<Language>('lt')

const translations = {
  lt: {
    subtitle: 'VILNIAUS UNIVERSITETE',
    description: 'Studentų (-čių) integracijos festivalis',
    whatIsAdAstra: 'Kas yra Ad Astra?',
    aboutText1:
      'Jau sutikus naujus mokslo metus, į Vilniaus universitetą tradiciškai, jau 7-ąjį kartą kviečia VU SA integracijos festivalis „Ad Astra"!',
    aboutText2:
      'Vilniaus universiteto Studentų atstovybės (VU SA) organizuojame festivalyje pajusk tikrąją studentišką dvasią per kontaktų mugę su universitete veikiančiomis studentiškomis iniciatyvomis, diskusijas studentui (-ei) aktualiomis temomis, uždaromąjį koncertą ir dar daugiau.',
    aboutText3: 'Būtent čia susirinks Universiteto bendruomenė, todėl nepražiopsok!',
    eventDate: 'Rugsėjo 4 d.',
    eventTime: '13:00-22:00',
    eventLocation: 'Vilniaus universiteto Centriniai rūmai',
    eventAddress: 'Universiteto g. 3, Vilnius',
    registrationTitle: 'REGISTRACIJA',
    registrationUrl:
      'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=XVfIeiHvL0yhJSx6Ldsk1hCQ6uNu0HRJvgeS5u4PK9BUNTlHMDFOVVpYOE05OVVSRUpISkRNUUVOTy4u',
    freeEntry: 'Dalyvavimas NEMOKAMAS!',
    freeParticipation: 'NEMOKAMA',
    eventInfoTitle: 'Renginio informacija',
    dateLabel: 'Data',
    timeLabel: 'Laikas',
    locationLabel: 'Vieta',
    participationLabel: 'Dalyvavimas',
    whyAdAstraTitle: 'KODĖL AD ASTRA?',
    whyAdAstraText:
      'Nes pradedant nuo čia kylama į žvaigždes! Taigi, ko tu lauki? Mes atsakytume – Tavęs! Nesvarbu ar esi šviežiai įstojęs (-usi) ar studentas (-ė), VU bendruomenės narys (-ė) ar svečias Vilniuje, nesi dalyvavęs ar gal nė vieno festivalio nepraleidęs (-usi) – „Ad Astra" ko nors įdomaus atras kiekvienas (-a)!',
    programTitle: 'Programa',
    mapTitle: 'Žemėlapis',
    scientificZone: 'Moksliniai pranešimai',
    scientificZoneDesc:
      'Studentai pristatys savo tyrimų darbus, projektus ir inovatyvius sprendimus. Puiki galimybė sužinoti, kokius mokslinius pasiekimus daro mūsų bendruomenės nariai.',
    contactFair: 'Kontaktų mugė',
    contactFairDesc:
      'Susipažinkite su organizacijomis, įmonėmis ir iniciatyvomis, kurios siūlo praktikos vietas, darbo galimybes ir bendradarbiavimo projektus studentams.',
    discussionZone: 'Diskusijos',
    discussionZoneDesc:
      'Atviros diskusijos aktualiais studentų gyvenimo, mokslo ir bendruomenės klausimais. Galimybė išreikšti savo nuomonę ir išgirsti kitų argumentus.',
    concertPart: 'Koncertas',
    concertPartDesc:
      'Muzikiniai pasirodymai, kurie sukurs šventišką atmosferą ir suburs bendruomenę bendram kultūriniam patyrimui.',
    newsTitle: 'Sekite naujienas apie renginį',
    newsDescription:
      'Sekite naujausią informaciją apie renginį, programą ir svarbius pranešimus apie Ad Astra festivalį.',
    facebookEvent: 'Facebook renginys',
    facebookEventDesc:
      'Apsilankykite Ad Astra renginio Facebook puslapyje, kuriame rasite naujausią informaciją',
    viewEvent: 'Peržiūrėti renginį',
    vusaWebsite: 'VU SA svetainė',
    vusaWebsiteDesc: 'VU SA svetainėje, sekite Ad Astra ir kitus VU SA organizuojamus renginius',
    readMore: 'Daugiau renginių',
    partnersTitle: 'Partneriai',
    partnersDescription:
      'Ad Astra festivalis vyksta tik dėka nuolatinio partnerių palaikymo ir bendradarbiavimo. Dėkojame visiems, kurie prisideda prie šios iniciatyvos sėkmės.',
    vusaPartner: 'Vilniaus universiteto Studentų atstovybė',
    vusaPartnerDesc: 'Pagrindinis organizatorius ir festivalo iniciatorius',
    vuPartner: 'Vilniaus universitetas',
    vuPartnerDesc: 'Institucinis partneris ir festivalio šeimininkas',
    facultiesPartner: '15 VU fakultetų',
    facultiesPartnerDesc: 'Aktyvūs dalyviai ir programos formuotojai',
    partnershipText: 'Norite tapti partneru? Susisiekite su mumis ir kartu kurkime puikų renginį!',
    contactEmail: 'adastra@vusa.lt',
    organizatoriaiTitle: 'Organizatoriai',
    // Teams links section
    teamsLinksTitle: 'Vertimas',
    teamsLinksSubtitle:
      'Festivalio metu vyksta gyvas vertimas. Prisijunkite prie kiemų transliacijų:',
    onlineWithInterpretation: 'Su vertimu',
    teamsJoinDescription: 'Paspauskite, kad prisijungtumėte per Microsoft Teams.',
    joinMeeting: 'Prisijungti',
    // Detailed Program
    detailedProgramTitle: 'Detalus renginių tvarkaraštis',
    detailedProgramDescription:
      'Išsamus festivalo programos išdėstymas pagal kiekvieną kiemą ir laiko tarpą:',
    vuGrandCourtyard: 'VU DIDYSIS KIEMAS',
    sarbiviusCourtyard: 'SARBIEVIJAUS KIEMAS',
    observatoryCourtyard: 'OBSERVATORIJOS KIEMAS',
    sirwydasCourtyard: 'SIRVYDO KIEMAS',
    rectorLecture: 'VU REKTORIAUS PASKAITA',
    vuUpClose: 'VU ARTIMIAU: PADALINIŲ PANORAMA',
    studentLife: 'STUDENTAS(-Ė) IRGI ŽMOGUS: VISA TIESA APIE STUDENTIŠKĄ GYVENIMĄ',
    networkingFair: 'KONTAKTŲ MUGĖ',
    concert: 'KONCERTAS',
    studentsToStudentsPt1: 'STUDENTAI(-ĖS) STUDENTAMS(-ĖMS): MOKSLAS IR MOBILUMAS (PT.1)',
    timeToAct:
      "GANA SCROLL'INTI- LAIKAS VEIKTI: SUŽINOK, KAIP TU GALI PRISIDĖTI PRIE LIETUVOS SAUGUMO",
    studentsToStudentsPt2: 'STUDENTAI(-ĖS) STUDENTAMS(-ĖMS): MOKSLAS IR MOBILUMAS (PT.2)',
    aiDiscussion: 'DI: NAUDOTI NEGALIMA DRAUSTI. KUR DĖTI KABLELĮ IR KAIP NAUDOTI?',
    workshopCycle: 'DIRBTUVIŲ CIKLAS: NUO SĖKLOS IKI SPRENDIMO',
    prepareForSuccess: 'PASIRUOŠK SĖKMEI: NUO CV IKI PIRMO DARBO',
    mobileBioclass: 'MOBILIOS BIOKLASĖS DIRBTUVĖS: D20N1R1',
    boardGames: 'LAISVALAIKIO DRAUGIJA "KAULIUKAS" STALO ŽAIDIMAI',
    programNote: 'Programa gali keistis. Sekite naujausius pranešimus socialiniuose tinkluose.',
    // Navigation
    navHome: 'Pradžia',
    navCurrentEvent: 'Dabar vyksta',
    navAbout: 'Apie',
    navEvent: 'Renginys',
    navWhy: 'Kodėl',
    navProgram: 'Programa',
    navMap: 'Žemėlapis',
    navInterpretation: 'Vertimas',
    navNews: 'Naujienos',
    navOrganizers: 'Organizatoriai',
    navPartners: 'Partneriai',
    // Scroll hint
    scrollDown: 'Slinkti žemyn',
    // Current event section
    currentEventTitle: 'Dabar vyksta',
    noCurrentEvent: 'Šiuo metu nevyksta joks renginys.',
    eventCountdown: 'Iki renginio pradžios liko',
    eventEnded: 'Renginys baigėsi',
    eventEndedMessage: 'Ad Astra festivalis jau pasibaigė. Ačiū visiems dalyvavusiems!',
    days: 'dienos',
    hours: 'valandos',
    minutes: 'minutės',
    seconds: 'sekundės',
  },
  en: {
    subtitle: 'IN VILNIUS UNIVERSITY',
    description: "Students' Integration Festival",
    whatIsAdAstra: 'What is Ad Astra?',
    aboutText1:
      'With the new academic year already underway, Vilnius University is hosting the 6th annual VU SA integration festival, Ad Astra!',
    aboutText2:
      "The Vilnius University Students' Representation (VU SR) is organizing a festival where you can feel the true student spirit through a contact fair with student initiatives operating at the university, discussions on topics relevant to students, a closing concert, and much more.",
    aboutText3: "This is where the university community will gather, so don't miss it!",
    eventDate: 'September 4',
    eventTime: '13:00-22:00',
    eventLocation: 'Vilnius University Central Campus',
    eventAddress: 'Universiteto g. 3, Vilnius',
    registrationTitle: 'REGISTRATION',
    registrationUrl:
      'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=XVfIeiHvL0yhJSx6Ldsk1hCQ6uNu0HRJvgeS5u4PK9BUNTlHMDFOVVpYOE05OVVSRUpISkRNUUVOTy4u',
    freeEntry: 'Entry is FREE!',
    freeParticipation: 'FREE',
    eventInfoTitle: 'Event Information',
    dateLabel: 'Date',
    timeLabel: 'Time',
    locationLabel: 'Location',
    participationLabel: 'Participation',
    whyAdAstraTitle: 'WHY AD ASTRA?',
    whyAdAstraText:
      'Because this is where the journey to the stars begins! So, what are you waiting for? We would say – you! Whether you are a new student or a current student, a member of the VU community or a guest in Vilnius, whether you have never participated or have never missed a single festival – everyone will find something interesting at Ad Astro!',
    programTitle: 'Program',
    mapTitle: 'Map',
    scientificZone: 'Scientific Presentations',
    scientificZoneDesc:
      'Students will present their research work, projects and innovative solutions. A great opportunity to learn about the scientific achievements of our community members.',
    contactFair: 'Contact Fair',
    contactFairDesc:
      'Meet organizations, companies and initiatives that offer internships, job opportunities and collaboration projects for students.',
    discussionZone: 'Discussions',
    discussionZoneDesc:
      'Open discussions on current student life, science and community issues. An opportunity to express your opinion and hear other arguments.',
    concertPart: 'Concert',
    concertPartDesc:
      'Musical performances that will create a festive atmosphere and bring the community together for a shared cultural experience.',
    newsTitle: 'Follow News and Updates',
    newsDescription:
      'Stay informed about the latest news, program changes and important announcements about the Ad Astra festival.',
    facebookEvent: 'Facebook Event',
    facebookEventDesc: 'Visit the Ad Astra event Facebook page for the latest information.',
    viewEvent: 'View Event',
    vusaWebsite: 'VU SR Website',
    vusaWebsiteDesc: 'On the VU SR website, follow Ad Astra and other events organized by VU SR.',
    readMore: 'More events',
    partnersTitle: 'Partners',
    partnersDescription:
      'The Ad Astra festival takes place only thanks to the constant support and cooperation of partners. We thank everyone who contributes to the success of this initiative.',
    vusaPartner: 'Vilnius University Student Representation',
    vusaPartnerDesc: 'Main organizer and festival initiator',
    vuPartner: 'Vilnius University',
    vuPartnerDesc: 'Institutional partner and festival host',
    facultiesPartner: '15 VU Faculties',
    facultiesPartnerDesc: 'Active participants and program developers',
    partnershipText:
      "Want to become a partner? Contact us and let's create a great event together!",
    contactEmail: 'adastra@vusa.lt',
    organizatoriaiTitle: 'Organizers',
    // Teams links section
    teamsLinksTitle: 'Interpretation',
    teamsLinksSubtitle:
      'During the festival, live interpretation will available. Join the courtyard streams:',
    onlineWithInterpretation: 'With interpretation',
    teamsJoinDescription: 'Click to join via Microsoft Teams.',
    joinMeeting: 'Join meeting',
    // Detailed Program
    detailedProgramTitle: 'Detailed Event Schedule',
    detailedProgramDescription: 'Comprehensive festival program layout by courtyard and time slot:',
    vuGrandCourtyard: 'VU GRAND COURTYARD',
    sarbiviusCourtyard: 'M. K. SARBIEVIUS COURTYARD',
    observatoryCourtyard: 'ASTRONOMICAL OBSERVATORY COURTYARD',
    sirwydasCourtyard: 'KONSTANTINAS SIRVYDAS COURTYARD',
    rectorLecture: "VU RECTOR'S LECTURE",
    vuUpClose: 'VU UP CLOSE: A PANORAMA OF FACULTIES',
    studentLife: 'STUDENT IS ALSO A HUMAN: THE WHOLE TRUTH ABOUT STUDENT LIFE',
    networkingFair: 'NETWORKING FAIR',
    concert: 'CONCERT',
    studentsToStudentsPt1: 'STUDENTS TO STUDENTS: RESEARCH AND EXCHANGE (PT.1)',
    timeToAct:
      "ENOUGH SCROLLING- TIME TO ACT: FIND OUT HOW YOU CAN CONTRIBUTE TO LITHUANIA'S SECURITY",
    studentsToStudentsPt2: 'STUDENTS TO STUDENTS: RESEARCH AND EXCHANGE (PT.2)',
    aiDiscussion: "AI: USING IT, BANNING IT...WHERE'S THE LINE?",
    workshopCycle: 'WORKSHOP: FROM SEED TO SOLUTION',
    prepareForSuccess: 'GET READY FOR SUCCESS: FROM CV TO THE FIRST JOB',
    mobileBioclass: 'MOBILE BIOCLASS: D20N1A1',
    boardGames: 'CLUB "KAULIUKAS" BOARD GAMES',
    programNote: 'Program may change. Follow the latest announcements on social networks.',
    // Navigation
    navHome: 'Home',
    navCurrentEvent: 'Current Event',
    navAbout: 'About',
    navEvent: 'Event',
    navWhy: 'Why',
    navProgram: 'Program',
    navMap: 'Map',
    navInterpretation: 'Interpretation',
    navNews: 'News',
    navOrganizers: 'Organizers',
    navPartners: 'Partners',
    // Scroll hint
    scrollDown: 'Scroll down',
    // Current event section
    currentEventTitle: 'Happening now',
    noCurrentEvent: 'There are no events currently in progress.',
    eventCountdown: 'Time until event starts',
    eventEnded: 'Event ended',
    eventEndedMessage: 'The Ad Astra festival has ended. Thank you to everyone who participated!',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
  },
}

export function useTranslations() {
  const t = computed(() => translations[currentLanguage.value])

  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'lt' ? 'en' : 'lt'
  }

  return {
    currentLanguage,
    t,
    toggleLanguage,
  }
}
