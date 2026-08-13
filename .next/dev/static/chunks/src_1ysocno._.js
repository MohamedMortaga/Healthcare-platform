(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/uiStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUiStore",
    ()=>useUiStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useUiStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        theme: 'light',
        themeIsExplicit: false,
        locale: 'en',
        view: 'home',
        selectedDoctorId: 'doc-ahmed',
        selectedDateKey: 'today',
        selectedTimeSlot: '05:30 PM',
        demoOpen: false,
        setTheme: (t, explicit = false)=>set({
                theme: t,
                themeIsExplicit: explicit || undefined ? explicit : false
            }),
        toggleTheme: ()=>set((s)=>({
                    theme: s.theme === 'light' ? 'dark' : 'light',
                    themeIsExplicit: true
                })),
        toggleLocale: ()=>set((s)=>({
                    locale: s.locale === 'en' ? 'ar' : 'en'
                })),
        navigate: (v)=>set({
                view: v
            }),
        selectDoctor: (id)=>set({
                selectedDoctorId: id
            }),
        selectDate: (key)=>set({
                selectedDateKey: key
            }),
        selectTimeSlot: (slot)=>set({
                selectedTimeSlot: slot
            }),
        toggleDemo: ()=>set((s)=>({
                    demoOpen: !s.demoOpen
                }))
    }), {
    name: 'chc-ui-storage',
    partialize: (s)=>({
            theme: s.theme,
            themeIsExplicit: s.themeIsExplicit,
            locale: s.locale
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/en.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "nav": {
        "home": "Home",
        "doctors": "Our Doctors",
        "services": "Services",
        "about": "About",
        "signin": "Sign In",
        "logout": "Logout",
        "book": "Book Appointment"
    },
    "hero": {
        "badge": "Premium Cardiac Care · Nasr City",
        "title": "Expert Heart Care in the Heart of Cairo",
        "subtitle": "Since 2009, {clinic} has combined decades of clinical excellence with state-of-the-art imaging to deliver comprehensive cardiology and internal medicine care.",
        "cta1": "Book an appointment",
        "cta2": "Explore services",
        "statPatients": "Patients Treated",
        "statSpecialists": "Specialists",
        "statRating": "Patient Rating"
    },
    "services": {
        "label": "What We Offer",
        "title": "Comprehensive cardiac & internal medicine services"
    },
    "doctorsHome": {
        "label": "Our Specialists",
        "title": "Board-certified experts",
        "viewAll": "View all doctors →",
        "book": "Book"
    },
    "about": {
        "label": "About The Clinic",
        "title": "Fifteen years of trusted cardiac care in Nasr City",
        "p1": "Founded in 2009, {clinic} began as a small consultation practice and has grown into one of the most respected private cardiology clinics in Cairo.",
        "p2": "Today, our team of {doctors} specialists sees over {patients} patients each year — combining international standards of care with the personal touch of a neighborhood clinic.",
        "excellenceTitle": "Excellence",
        "excellenceText": "Internationally trained specialists using current clinical protocols.",
        "transparencyTitle": "Transparency",
        "transparencyText": "Clear fees, transparent deposit model, ETA e-receipts on every payment.",
        "continuityTitle": "Continuity",
        "continuityText": "Every patient sees the same consultant for follow-up visits and care.",
        "accessibilityTitle": "Accessibility",
        "accessibilityText": "WhatsApp-first communication, Fawry and Vodafone Cash payment options."
    },
    "steps": {
        "label": "How Booking Works",
        "title": "Four steps. No account required.",
        "s1t": "Choose your doctor",
        "s1d": "Browse our specialists and pick the right expert for your visit.",
        "s2t": "Reserve a slot",
        "s2d": "Pick your date and time in seconds — no account required.",
        "s3t": "Pay the deposit",
        "s3d": "Confirm with a small deposit via Card, Fawry, or Vodafone Cash.",
        "s4t": "Get WhatsApp reminders",
        "s4d": "We'll message you 48h and 2h before your visit."
    },
    "cta": {
        "title": "Ready to book your visit?",
        "subtitle": "Choose your specialist, pick a time that works, and secure your slot with a small deposit. No account required.",
        "button": "Book an appointment"
    },
    "footer": {
        "tagline": "Excellence in cardiovascular care since 2009. Serving Cairo from our Nasr City facility.",
        "visitUs": "Visit Us",
        "explore": "Explore",
        "hours": "Hours",
        "rights": "Licensed by the Egyptian Ministry of Health.",
        "poweredBy": "Powered by Cliniqo"
    },
    "doctorsPage": {
        "breadcrumb": "Home",
        "title": "Browse our clinical specialists",
        "subtitle": "Certified physicians of {clinic}. Book secure consultations instantly, no registration required.",
        "searchLabel": "Search",
        "searchPlaceholder": "Search by doctor name or specialty...",
        "specialtyLabel": "Specialty",
        "allSpecialties": "All Specialties",
        "sortLabel": "Sort By",
        "sortRating": "Highest Rating",
        "sortExperience": "Years of Experience",
        "sortPriceAsc": "Price: Low to High",
        "sortPriceDesc": "Price: High to Low",
        "noResultsTitle": "No Specialists Found",
        "noResultsSubtitle": "Try clearing your search filters.",
        "clear": "Clear Filters",
        "book": "Book"
    },
    "profile": {
        "aboutPrefix": "About Dr.",
        "education": "Education & Certifications",
        "timeline": "Work Experience Timeline",
        "reviews": "Recent Patient Reviews",
        "bookingTitle": "Live Appointment Booking",
        "bookingSubtitle": "Select your date and time. Your slot is held during checkout.",
        "selectDate": "1. Select Date",
        "selectTime": "2. Select Time",
        "depositModel": "Deposit Model",
        "payOnline": "Pay Online Now",
        "payClinic": "Pay at Clinic",
        "secureButton": "Secure Session — Proceed to Checkout",
        "guestNote": "Guest checkout enabled · No registration required"
    },
    "reservation": {
        "step1": "Patient Info",
        "step2": "Payment",
        "step3": "Confirm",
        "completeTitle": "Complete Your Reservation",
        "fullName": "Patient Full Name *",
        "mobile": "Mobile Number (+20) *",
        "nationalId": "National ID (Optional, 14 digits)",
        "email": "Email (Optional)",
        "visitPathway": "Visit Pathway",
        "inPersonTitle": "In-Person Visit",
        "inPersonDesc": "Nasr City branch face-to-face diagnostics.",
        "videoTitle": "Telehealth Video",
        "videoDesc": "Secure link sent via WhatsApp.",
        "notes": "Symptoms / Notes (Optional)",
        "notesPlaceholder": "Chest tightness, medication list, previous stent details...",
        "back": "Back",
        "proceed": "Proceed to Payment",
        "overviewTitle": "Booking Overview",
        "date": "Date:",
        "time": "Time:",
        "totalFee": "Total Fee:",
        "depositNow": "Deposit Now:"
    },
    "payment": {
        "title": "Secure Deposit Checkout",
        "tabCard": "Card",
        "tabFawry": "Fawry",
        "tabVodafone": "VF Cash",
        "tabClinic": "At Clinic",
        "cardholder": "Cardholder Name",
        "cardNumber": "4000 1234 5678 9010",
        "fawryHint": "Pay this code at any Fawry kiosk or via the FawryPay app within 4 hours to confirm your booking.",
        "kioskLabel": "Kiosk Payment Code",
        "copyCode": "Copy Code",
        "copied": "Copied!",
        "sendOtp": "Send OTP",
        "otpPlaceholder": "6-digit OTP",
        "clinicNote": "Zero deposit — pay the full amount of {price} on arrival at reception. Priority is given to online-paid reservations.",
        "back": "Back",
        "submitDefault": "Complete Secure Checkout",
        "submitClinic": "Confirm Booking",
        "summaryTitle": "Checkout Summary",
        "depositNow": "Deposit Now:"
    },
    "confirmation": {
        "badge": "Booking Confirmed",
        "title": "Appointment Secured!",
        "subtitle": "A digital receipt has been generated for your visit.",
        "refLabel": "Reference Code",
        "confirmed": "Confirmed",
        "patient": "Patient:",
        "physician": "Physician:",
        "date": "Date:",
        "time": "Time:",
        "remaining": "Remaining at Clinic:",
        "whatsapp": "A WhatsApp confirmation with directions has been sent to {phone}. Reminders fire 48h and 2h before your visit.",
        "secureTitle": "Secure Your Clinical History",
        "passwordPlaceholder": "Create portal password",
        "activate": "Activate",
        "activated": "Portal activated successfully!",
        "backHome": "Back to {clinic}"
    },
    "login": {
        "portalLabel": "Secure Patient Portal",
        "unlockTitle": "Unlock Your Electronic Medical File",
        "benefit1": "Access diagnostic reports and imaging",
        "benefit2": "Digital tax e-receipts for every visit",
        "benefit3": "Live queue tracking on visit day",
        "pdpl": "Encrypted in compliance with Egypt's PDPL Law No. 151 of 2020.",
        "signInTitle": "Patient Portal Sign In",
        "signInSubtitle": "Sign in with your registered mobile number.",
        "phonePlaceholder": "+20 10 1234 5678",
        "passwordPlaceholder": "••••••••",
        "signIn": "Sign In to Portal",
        "noAccount": "No account?",
        "registerFree": "Register free",
        "skipGuest": "← Skip to guest booking"
    },
    "register": {
        "title": "Establish Patient File",
        "subtitle": "Free registration under {clinic}.",
        "namePlaceholder": "Full name (as in National ID)",
        "phonePlaceholder": "+20 10 1234 5678",
        "emailPlaceholder": "Email (optional)",
        "passwordPlaceholder": "Create password",
        "consent": "I consent to data processing under Egypt's PDPL Law No. 151 of 2020.",
        "button": "Register Patient File",
        "already": "Already registered?",
        "signIn": "Sign in"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/ar.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "nav": {
        "home": "الرئيسية",
        "doctors": "أطباؤنا",
        "services": "الخدمات",
        "about": "من نحن",
        "signin": "تسجيل الدخول",
        "logout": "تسجيل الخروج",
        "book": "احجز موعد"
    },
    "hero": {
        "badge": "رعاية قلبية متميزة · مدينة نصر",
        "title": "رعاية قلبية متخصصة في قلب القاهرة",
        "subtitle": "منذ عام 2009، يجمع {clinic} بين عقود من التميز السريري وأحدث تقنيات التصوير لتقديم رعاية شاملة في أمراض القلب والباطنة.",
        "cta1": "احجز موعدًا",
        "cta2": "استكشف الخدمات",
        "statPatients": "مريض تمت رعايته",
        "statSpecialists": "استشاري",
        "statRating": "تقييم المرضى"
    },
    "services": {
        "label": "خدماتنا",
        "title": "خدمات شاملة لأمراض القلب والباطنة"
    },
    "doctorsHome": {
        "label": "نخبة الاستشاريين",
        "title": "خبراء معتمدون",
        "viewAll": "عرض جميع الأطباء ←",
        "book": "احجز"
    },
    "about": {
        "label": "عن العيادة",
        "title": "خمسة عشر عامًا من الرعاية القلبية الموثوقة في مدينة نصر",
        "p1": "تأسس {clinic} عام 2009 كعيادة استشارات صغيرة، ونما ليصبح واحدًا من أكثر عيادات القلب الخاصة احترامًا في القاهرة.",
        "p2": "اليوم، يستقبل فريقنا المكوّن من {doctors} استشاريين أكثر من {patients} مريض سنويًا، جامعين بين المعايير الدولية ولمسة العيادة القريبة من المريض.",
        "excellenceTitle": "التميّز",
        "excellenceText": "استشاريون مدربون دوليًا يتبعون أحدث البروتوكولات السريرية.",
        "transparencyTitle": "الشفافية",
        "transparencyText": "رسوم واضحة، نظام عربون شفاف، وإيصالات إلكترونية ضريبية مع كل دفعة.",
        "continuityTitle": "الاستمرارية",
        "continuityText": "كل مريض يتابع مع نفس الاستشاري في الزيارات التالية.",
        "accessibilityTitle": "سهولة الوصول",
        "accessibilityText": "تواصل عبر واتساب، مع خيارات الدفع بفوري وفودافون كاش."
    },
    "steps": {
        "label": "كيف يتم الحجز",
        "title": "أربع خطوات فقط. بدون حساب.",
        "s1t": "اختر طبيبك",
        "s1d": "تصفح استشاريينا واختر الأنسب لزيارتك.",
        "s2t": "احجز موعدًا",
        "s2d": "اختر التاريخ والوقت خلال ثوانٍ، بدون حساب.",
        "s3t": "ادفع العربون",
        "s3d": "أكّد الحجز بعربون بسيط عبر البطاقة أو فوري أو فودافون كاش.",
        "s4t": "تذكيرات عبر واتساب",
        "s4d": "سنرسل لك تذكيرًا قبل 48 و2 ساعة من الموعد."
    },
    "cta": {
        "title": "جاهز لحجز زيارتك؟",
        "subtitle": "اختر استشاريك، وحدد الوقت المناسب، وأكّد حجزك بعربون بسيط. بدون حساب.",
        "button": "احجز موعدًا"
    },
    "footer": {
        "tagline": "تميّز في رعاية القلب والأوعية الدموية منذ 2009، نخدم القاهرة من مقرنا بمدينة نصر.",
        "visitUs": "زورونا",
        "explore": "استكشف",
        "hours": "مواعيد العمل",
        "rights": "مرخّصة من وزارة الصحة المصرية.",
        "poweredBy": "بدعم من كلينيكو"
    },
    "doctorsPage": {
        "breadcrumb": "الرئيسية",
        "title": "تصفح استشاريينا",
        "subtitle": "أطباء معتمدون لدى {clinic}. احجز استشارتك فورًا دون الحاجة لتسجيل.",
        "searchLabel": "بحث",
        "searchPlaceholder": "ابحث باسم الطبيب أو التخصص...",
        "specialtyLabel": "التخصص",
        "allSpecialties": "كل التخصصات",
        "sortLabel": "ترتيب حسب",
        "sortRating": "الأعلى تقييمًا",
        "sortExperience": "سنوات الخبرة",
        "sortPriceAsc": "السعر: من الأقل للأعلى",
        "sortPriceDesc": "السعر: من الأعلى للأقل",
        "noResultsTitle": "لا يوجد استشاريون مطابقون",
        "noResultsSubtitle": "جرّب إعادة ضبط عوامل التصفية.",
        "clear": "مسح عوامل التصفية",
        "book": "احجز"
    },
    "profile": {
        "aboutPrefix": "عن د.",
        "education": "المؤهلات والشهادات",
        "timeline": "المسيرة المهنية",
        "reviews": "آراء المرضى",
        "bookingTitle": "حجز موعد مباشر",
        "bookingSubtitle": "اختر التاريخ والوقت المناسبين. يُحجز موعدك مؤقتًا أثناء إتمام الدفع.",
        "selectDate": "١. اختر التاريخ",
        "selectTime": "٢. اختر الوقت",
        "depositModel": "نظام العربون",
        "payOnline": "ادفع الآن عبر الإنترنت",
        "payClinic": "يُدفع في العيادة",
        "secureButton": "تأكيد الموعد — المتابعة للدفع",
        "guestNote": "الحجز كضيف متاح · بدون تسجيل"
    },
    "reservation": {
        "step1": "بيانات المريض",
        "step2": "الدفع",
        "step3": "التأكيد",
        "completeTitle": "أكمل بيانات حجزك",
        "fullName": "اسم المريض بالكامل *",
        "mobile": "رقم الهاتف (+20) *",
        "nationalId": "الرقم القومي (اختياري، 14 رقمًا)",
        "email": "البريد الإلكتروني (اختياري)",
        "visitPathway": "نوع الزيارة",
        "inPersonTitle": "زيارة حضورية",
        "inPersonDesc": "تشخيص وجهًا لوجه في فرع مدينة نصر.",
        "videoTitle": "استشارة فيديو",
        "videoDesc": "رابط آمن يُرسل عبر واتساب.",
        "notes": "الأعراض / ملاحظات (اختياري)",
        "notesPlaceholder": "ضيق في الصدر، قائمة الأدوية، تفاصيل دعامة سابقة...",
        "back": "رجوع",
        "proceed": "المتابعة للدفع",
        "overviewTitle": "ملخص الحجز",
        "date": "التاريخ:",
        "time": "الوقت:",
        "totalFee": "إجمالي الرسوم:",
        "depositNow": "العربون الآن:"
    },
    "payment": {
        "title": "دفع العربون بأمان",
        "tabCard": "بطاقة",
        "tabFawry": "فوري",
        "tabVodafone": "فودافون كاش",
        "tabClinic": "في العيادة",
        "cardholder": "اسم حامل البطاقة",
        "cardNumber": "4000 1234 5678 9010",
        "fawryHint": "ادفع هذا الكود في أي منفذ فوري أو عبر تطبيق FawryPay خلال 4 ساعات لتأكيد حجزك.",
        "kioskLabel": "كود الدفع بفوري",
        "copyCode": "نسخ الكود",
        "copied": "تم النسخ!",
        "sendOtp": "إرسال الرمز",
        "otpPlaceholder": "رمز مكوّن من 6 أرقام",
        "clinicNote": "بدون عربون — ادفع المبلغ كاملًا {price} عند الوصول للاستقبال. الأولوية للحجوزات المدفوعة إلكترونيًا.",
        "back": "رجوع",
        "submitDefault": "إتمام الدفع الآمن",
        "submitClinic": "تأكيد الحجز",
        "summaryTitle": "ملخص الدفع",
        "depositNow": "العربون الآن:"
    },
    "confirmation": {
        "badge": "تم تأكيد الحجز",
        "title": "تم تأكيد الموعد!",
        "subtitle": "تم إصدار إيصال إلكتروني لزيارتك.",
        "refLabel": "رقم المرجع",
        "confirmed": "مؤكد",
        "patient": "المريض:",
        "physician": "الطبيب:",
        "date": "التاريخ:",
        "time": "الوقت:",
        "remaining": "المتبقي في العيادة:",
        "whatsapp": "تم إرسال تأكيد عبر واتساب مع الاتجاهات إلى {phone}. ستصلك تذكيرات قبل 48 و2 ساعة من الموعد.",
        "secureTitle": "أمّن ملفك الطبي",
        "passwordPlaceholder": "أنشئ كلمة مرور للبوابة",
        "activate": "تفعيل",
        "activated": "تم تفعيل البوابة بنجاح!",
        "backHome": "العودة إلى {clinic}"
    },
    "login": {
        "portalLabel": "بوابة المريض الآمنة",
        "unlockTitle": "افتح ملفك الطبي الإلكتروني",
        "benefit1": "الوصول إلى التقارير التشخيصية والصور",
        "benefit2": "إيصالات ضريبية إلكترونية لكل زيارة",
        "benefit3": "متابعة الدور مباشرة يوم الزيارة",
        "pdpl": "بيانات مشفّرة وفقًا لقانون حماية البيانات المصري رقم 151 لسنة 2020.",
        "signInTitle": "تسجيل دخول بوابة المريض",
        "signInSubtitle": "سجّل الدخول برقم هاتفك المسجل.",
        "phonePlaceholder": "+20 10 1234 5678",
        "passwordPlaceholder": "••••••••",
        "signIn": "تسجيل الدخول للبوابة",
        "noAccount": "ليس لديك حساب؟",
        "registerFree": "سجّل مجانًا",
        "skipGuest": "← تخطَّ إلى الحجز كضيف"
    },
    "register": {
        "title": "إنشاء ملف مريض",
        "subtitle": "تسجيل مجاني لدى {clinic}.",
        "namePlaceholder": "الاسم بالكامل (كما في البطاقة)",
        "phonePlaceholder": "+20 10 1234 5678",
        "emailPlaceholder": "البريد الإلكتروني (اختياري)",
        "passwordPlaceholder": "أنشئ كلمة مرور",
        "consent": "أوافق على معالجة بياناتي وفقًا لقانون حماية البيانات المصري رقم 151 لسنة 2020.",
        "button": "تسجيل ملف المريض",
        "already": "لديك حساب بالفعل؟",
        "signIn": "تسجيل الدخول"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DICTIONARIES",
    ()=>DICTIONARIES,
    "interpolate",
    ()=>interpolate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/en.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$ar$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/ar.json.[json].cjs [app-client] (ecmascript)");
;
;
const DICTIONARIES = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$ar$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function interpolate(str, vars) {
    return str.replace(/\{(\w+)\}/g, (m, k)=>vars[k] != null ? String(vars[k]) : m);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useT.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useT() {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "useT.useUiStore[locale]": (s)=>s.locale
    }["useT.useUiStore[locale]"]);
    const dict = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DICTIONARIES"][locale];
    return {
        t: dict,
        locale,
        isRtl: locale === 'ar'
    };
}
_s(useT, "Yg0YnYiojKUtHi3CeeHEXVo/YUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/authApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginRequest",
    ()=>loginRequest,
    "registerRequest",
    ()=>registerRequest
]);
async function loginRequest(phone, _password) {
    // const { data } = await apiClient.post<AuthUser>('/auth/login', { phone, password: _password });
    // return data;
    await new Promise((r)=>setTimeout(r, 350));
    let name = 'Sherif El-Gendy';
    if (phone.includes('10')) name = 'Maged Farouk';
    else if (phone.includes('12')) name = 'Nadine Mansour';
    return {
        name,
        phone,
        email: `${phone.replace(/\+/g, '')}@clinical.eg`,
        role: 'patient'
    };
}
async function registerRequest(input) {
    // const { data } = await apiClient.post<AuthUser>('/auth/register', input);
    // return data;
    await new Promise((r)=>setTimeout(r, 350));
    return {
        name: input.name,
        phone: input.phone,
        email: input.email || `${input.phone.replace(/\+/g, '')}@clinical.eg`,
        role: 'patient'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/authStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/authApi.ts [app-client] (ecmascript)");
;
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        user: null,
        isLoggedIn: false,
        login: async (phone, password)=>{
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginRequest"])(phone, password);
            set({
                user,
                isLoggedIn: true
            });
            return user;
        },
        register: async (input)=>{
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerRequest"])(input);
            set({
                user,
                isLoggedIn: true
            });
            return user;
        },
        setUser: (user)=>set({
                user,
                isLoggedIn: true
            }),
        logout: ()=>set({
                user: null,
                isLoggedIn: false
            })
    }), {
    name: 'chc-auth-storage'
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_DATES",
    ()=>AVAILABLE_DATES,
    "CLINIC",
    ()=>CLINIC,
    "DEMO_SCREENS",
    ()=>DEMO_SCREENS,
    "MOCK_DOCTORS",
    ()=>MOCK_DOCTORS,
    "MOCK_REVIEWS",
    ()=>MOCK_REVIEWS,
    "MOCK_SERVICES",
    ()=>MOCK_SERVICES,
    "TIME_SLOTS",
    ()=>TIME_SLOTS
]);
const MOCK_DOCTORS = [
    {
        id: 'doc-ahmed',
        name: 'Dr. Ahmed Samir',
        title: 'Consultant Cardiologist',
        specialty: 'General Cardiology & Rhythm Disorders',
        experienceYears: 10,
        patientsTreated: 3200,
        rating: 4.9,
        reviewCount: 312,
        price: 350,
        deposit: 100,
        nextAvailable: 'today',
        bio: 'Dr. Ahmed Samir is a renowned Consultant Cardiologist specializing in electrophysiology, cardiac pacing, and preventive cardiology. With over a decade of dedicated clinical practice in Cairo and Europe, he focuses on personalized heart care.',
        education: [
            'MD in Cardiology - Cairo University (Kasr Al-Ainy)',
            'Fellowship in Cardiac Rhythm Management - ESC',
            'Member, Egyptian Society of Cardiology'
        ],
        timeline: [
            {
                year: '2018 - Present',
                title: 'Senior Cardiology Consultant',
                institution: 'Cairo Heart Center'
            },
            {
                year: '2014 - 2018',
                title: 'Assistant Professor of Cardiology',
                institution: 'Cairo University Hospital'
            },
            {
                year: '2011 - 2014',
                title: 'Cardiology Registrar',
                institution: 'National Heart Institute'
            }
        ]
    },
    {
        id: 'doc-sara',
        name: 'Dr. Sara Mansour',
        title: 'Internal Medicine Specialist',
        specialty: 'Internal Medicine & Metabolic Health',
        experienceYears: 7,
        patientsTreated: 2100,
        rating: 4.8,
        reviewCount: 185,
        price: 250,
        deposit: 75,
        nextAvailable: 'tomorrow',
        bio: 'Dr. Sara Mansour specializes in comprehensive internal medicine, managing chronic conditions like hypertension, diabetes, and metabolic syndrome, with a focus on cardiometabolic health.',
        education: [
            "Master's in Internal Medicine - Ain Shams University",
            'Diploma in Diabetes & Endocrinology - RCP, UK',
            'Egyptian Board of Internal Medicine'
        ],
        timeline: [
            {
                year: '2020 - Present',
                title: 'Internal Medicine Specialist',
                institution: 'Cairo Heart Center'
            },
            {
                year: '2017 - 2020',
                title: 'Internal Medicine Specialist',
                institution: 'Demerdash Hospital'
            },
            {
                year: '2015 - 2017',
                title: 'Resident Physician',
                institution: 'Ain Shams University Hospitals'
            }
        ]
    },
    {
        id: 'doc-omar',
        name: 'Dr. Omar Khalil',
        title: 'Interventional Cardiology Consultant',
        specialty: 'Interventional Cardiology & Coronary Stenting',
        experienceYears: 14,
        patientsTreated: 4500,
        rating: 4.95,
        reviewCount: 540,
        price: 500,
        deposit: 150,
        nextAvailable: 'today',
        bio: 'Dr. Omar Khalil is a pioneer in interventional cardiology in Cairo, having performed thousands of complex coronary angioplasties, stenting, and transcatheter valve replacements.',
        education: [
            'PhD in Interventional Cardiology - Cairo University',
            'Fellowship - Cleveland Clinic, USA',
            'Fellow, American College of Cardiology (FACC)'
        ],
        timeline: [
            {
                year: '2015 - Present',
                title: 'Head of Interventional Unit',
                institution: 'Cairo Heart Center'
            },
            {
                year: '2011 - 2015',
                title: 'Consultant Interventionalist',
                institution: 'Dar Al Fouad Hospital'
            },
            {
                year: '2008 - 2011',
                title: 'Cardiology Fellow',
                institution: 'Kasr Al-Ainy University Hospital'
            }
        ]
    },
    {
        id: 'doc-nour',
        name: 'Dr. Nour Hassan',
        title: 'Cardiac Imaging Specialist',
        specialty: 'Cardiac Ultrasound, MRI & CT Scan',
        experienceYears: 8,
        patientsTreated: 1800,
        rating: 4.85,
        reviewCount: 122,
        price: 300,
        deposit: 100,
        nextAvailable: 'monday',
        bio: 'Dr. Nour Hassan focuses on advanced diagnostic cardiac imaging, including stress echocardiography, cardiac MRI, and multi-slice coronary CT, ensuring accurate disease staging.',
        education: [
            'M.Sc. in Cardiovascular Medicine - Cairo University',
            'Certified in Advanced Cardiac MRI - EACVI',
            'Member, Society of Cardiovascular CT (SCCT)'
        ],
        timeline: [
            {
                year: '2021 - Present',
                title: 'Lead Cardiac Imaging Specialist',
                institution: 'Cairo Heart Center'
            },
            {
                year: '2018 - 2021',
                title: 'Cardiovascular Imaging Specialist',
                institution: 'National Heart Institute'
            },
            {
                year: '2014 - 2018',
                title: 'Cardiology Specialist Registrar',
                institution: 'Cairo University Hospital'
            }
        ]
    }
];
const MOCK_SERVICES = [
    {
        id: 'serv-consult',
        title: 'Comprehensive Cardiac Consultation',
        description: 'Detailed evaluation of heart health, symptom review, and risk factor assessment.'
    },
    {
        id: 'serv-ecg',
        title: 'ECG & Stress Testing',
        description: 'Electrocardiogram monitoring at rest and under exercise to detect rhythm abnormalities.'
    },
    {
        id: 'serv-echo',
        title: 'Transthoracic Echocardiography',
        description: 'High-resolution cardiac ultrasound mapping blood flow and valve efficiency.'
    },
    {
        id: 'serv-holter',
        title: '24/48-Hour Holter Monitoring',
        description: 'Continuous ambulatory ECG recording to trace transient arrhythmias.'
    },
    {
        id: 'serv-imaging',
        title: 'Cardiac Imaging & CT Angiography',
        description: 'Non-invasive imaging detailing coronary artery structures and calcification.'
    }
];
const MOCK_REVIEWS = [
    {
        id: 'rev-1',
        author: 'Mohamed El-Tayeb',
        date: 'Jul 12, 2026',
        comment: 'Excellent care and professionalism. Dr. Ahmed spent 45 minutes explaining my ECG results in detail.'
    },
    {
        id: 'rev-2',
        author: 'Fatma Abdel Rahman',
        date: 'Jul 05, 2026',
        comment: "Cleanest clinic in Nasr City. Dr. Sara is amazing and has managed my mother's hypertension with high caution."
    },
    {
        id: 'rev-3',
        author: 'Youssef Shenouda',
        date: 'Jun 28, 2026',
        comment: 'Dr. Omar Khalil is a master in coronary interventions. I still visit annually for stress tests.'
    }
];
const CLINIC = {
    name: 'Cairo Heart Center',
    tagline: 'Nasr City · Since 2009',
    phone: '+20 2 2401 9988',
    address: '14 Abbas El Akkad St, Nasr City, Cairo',
    hours: 'Sun – Thu · 9:00 AM – 9:00 PM\nSat · 10:00 AM – 6:00 PM\nFri · Closed',
    patientsCount: '12,000+',
    doctorsCount: 8,
    rating: 4.9
};
const AVAILABLE_DATES = [
    {
        key: 'today',
        dayName: 'Sun',
        dayNum: 19,
        full: 'Today, July 19, 2026'
    },
    {
        key: 'tomorrow',
        dayName: 'Mon',
        dayNum: 20,
        full: 'Tomorrow, July 20, 2026'
    },
    {
        key: 'tue',
        dayName: 'Tue',
        dayNum: 21,
        full: 'Tuesday, July 21, 2026'
    },
    {
        key: 'wed',
        dayName: 'Wed',
        dayNum: 22,
        full: 'Wednesday, July 22, 2026'
    },
    {
        key: 'thu',
        dayName: 'Thu',
        dayNum: 23,
        full: 'Thursday, July 23, 2026'
    }
];
const TIME_SLOTS = [
    '11:30 AM',
    '12:15 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
    '08:30 PM'
];
const DEMO_SCREENS = [
    {
        key: 'home',
        label: '1. Home'
    },
    {
        key: 'doctors',
        label: '2. Our Doctors'
    },
    {
        key: 'profile',
        label: '3. Doctor Profile'
    },
    {
        key: 'reservation',
        label: '4. Reservation Form'
    },
    {
        key: 'payment',
        label: '5. Payment'
    },
    {
        key: 'confirmation',
        label: '6. Confirmation'
    },
    {
        key: 'login',
        label: '7. Patient Login'
    },
    {
        key: 'register',
        label: '8. Patient Register'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThemeToggle() {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "ThemeToggle.useUiStore[theme]": (s)=>s.theme
    }["ThemeToggle.useUiStore[theme]"]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "ThemeToggle.useUiStore[toggleTheme]": (s)=>s.toggleTheme
    }["ThemeToggle.useUiStore[toggleTheme]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        title: "Toggle theme",
        className: "w-9 h-9 rounded-full flex items-center justify-center bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-navyDark text-base transition-transform active:scale-90",
        children: theme === 'dark' ? '☀' : '🌙'
    }, void 0, false, {
        fileName: "[project]/src/components/atoms/ThemeToggle.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "3vwdoCR8acxKkttg5KjRPRBjTsE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/LocaleToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function LocaleToggle() {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "LocaleToggle.useUiStore[locale]": (s)=>s.locale
    }["LocaleToggle.useUiStore[locale]"]);
    const toggleLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "LocaleToggle.useUiStore[toggleLocale]": (s)=>s.toggleLocale
    }["LocaleToggle.useUiStore[toggleLocale]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleLocale,
        title: "Change language",
        className: "px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-navyDark",
        children: locale === 'en' ? 'العربية' : 'English'
    }, void 0, false, {
        fileName: "[project]/src/components/atoms/LocaleToggle.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(LocaleToggle, "ihsfVH2HCDxGJ7fswAw8tM7pkQw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = LocaleToggle;
var _c;
__turbopack_context__.k.register(_c, "LocaleToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...parts) {
    return parts.filter(Boolean).join(' ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
const VARIANTS = {
    primary: 'bg-brand-navy dark:bg-brand-navyDark text-white hover:opacity-90',
    secondary: 'bg-white dark:bg-brand-surfaceDark text-brand-navy dark:text-brand-inkDark border border-brand-border2 dark:border-brand-border2Dark hover:bg-brand-cream dark:hover:bg-brand-bgDark',
    ghost: 'bg-transparent text-brand-navy dark:text-brand-inkDark hover:bg-brand-accentBg dark:hover:bg-brand-accentBgDark',
    accentSoft: 'bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-accent dark:text-brand-accentDark hover:opacity-90'
};
function Button({ variant = 'primary', size = 'md', className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full font-semibold transition-all duration-150 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed', size === 'md' ? 'px-6 py-3 text-sm' : 'px-4 py-2 text-xs', VARIANTS[variant], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/atoms/Button.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$LocaleToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/LocaleToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "Navbar.useUiStore[view]": (s)=>s.view
    }["Navbar.useUiStore[view]"]);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "Navbar.useUiStore[navigate]": (s)=>s.navigate
    }["Navbar.useUiStore[navigate]"]);
    const { user, isLoggedIn, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const navBtn = (active)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors', active ? 'bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-inkDark font-semibold' : 'text-brand-body dark:text-brand-bodyDark hover:bg-black/5 dark:hover:bg-white/5');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full bg-white dark:bg-brand-surfaceDark border-b border-brand-border dark:border-brand-borderDark sticky top-0 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between gap-4 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>navigate('home'),
                    className: "flex items-center gap-3 text-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[38px] h-[38px] rounded-[10px] bg-brand-navy dark:bg-brand-navyDark flex items-center justify-center text-white font-serif italic font-semibold text-lg flex-shrink-0",
                            children: "C"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[17px] font-semibold leading-tight font-serif",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-semibold text-brand-muted dark:text-brand-mutedDark mt-0.5 uppercase tracking-wide",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].tagline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center gap-1.5 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: navBtn(view === 'home'),
                            onClick: ()=>navigate('home'),
                            children: t.nav.home
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: navBtn(view === 'doctors' || view === 'profile'),
                            onClick: ()=>navigate('doctors'),
                            children: t.nav.doctors
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$LocaleToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        isLoggedIn && user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 bg-brand-cream dark:bg-brand-bgDark pl-3 pr-1.5 py-1.5 rounded-xl border border-brand-border dark:border-brand-borderDark",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[26px] h-[26px] rounded-full bg-brand-navy dark:bg-brand-navyDark text-white flex items-center justify-center text-[11px] font-bold",
                                    children: user.name.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-semibold leading-tight",
                                    children: user.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    className: "px-2 py-1 text-brand-muted dark:text-brand-mutedDark text-xs font-semibold whitespace-nowrap",
                                    children: t.nav.logout
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>navigate('login'),
                            className: "px-3.5 py-2 text-[13px] font-semibold text-brand-navy dark:text-brand-inkDark whitespace-nowrap",
                            children: t.nav.signin
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "sm",
                            onClick: ()=>navigate('doctors'),
                            className: "whitespace-nowrap",
                            children: t.nav.book
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/Navbar.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/organisms/Navbar.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/organisms/Navbar.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/organisms/Navbar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Navbar, "mO0CBKVjwJQkBnQ7wHhovzes8lQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Footer() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "Footer.useUiStore[navigate]": (s)=>s.navigate
    }["Footer.useUiStore[navigate]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white dark:bg-brand-surfaceDark border-t border-brand-border dark:border-brand-borderDark pt-14 px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[30px] h-[30px] rounded-lg bg-brand-navy dark:bg-brand-navyDark flex items-center justify-center text-white font-serif italic text-sm",
                                        children: "C"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/Footer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-serif text-sm",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/Footer.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11.5px] text-brand-muted dark:text-brand-mutedDark leading-relaxed max-w-[260px]",
                                children: t.footer.tagline
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/Footer.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide mb-3.5",
                                children: t.footer.visitUs
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-brand-body dark:text-brand-bodyDark leading-loose",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].address,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/organisms/Footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/Footer.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide mb-3.5",
                                children: t.footer.explore
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 text-xs text-brand-body dark:text-brand-bodyDark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cursor-pointer",
                                        onClick: ()=>navigate('doctors'),
                                        children: t.nav.doctors
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/Footer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cursor-pointer",
                                        onClick: ()=>navigate('home'),
                                        children: t.nav.services
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/Footer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cursor-pointer",
                                        onClick: ()=>navigate('home'),
                                        children: t.nav.about
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/Footer.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cursor-pointer",
                                        onClick: ()=>navigate('login'),
                                        children: t.nav.signin
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/Footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide mb-3.5",
                                children: t.footer.hours
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-brand-body dark:text-brand-bodyDark leading-loose whitespace-pre-line",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].hours
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/Footer.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/Footer.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/Footer.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-brand-border dark:border-brand-borderDark py-4 flex justify-between flex-wrap gap-2 text-[11px] text-brand-muted dark:text-brand-mutedDark max-w-[1280px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "© 2026 ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name,
                            ". ",
                            t.footer.rights
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/Footer.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t.footer.poweredBy
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/Footer.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/Footer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/Footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Footer, "NqiRCzjBgUdDIpk6DCNasG3nlmA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/DemoScreenSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoScreenSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DemoScreenSwitcher() {
    _s();
    const { demoOpen, toggleDemo, view, navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-5 left-5 z-50",
        children: demoOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[220px] bg-brand-midnight rounded-2xl overflow-hidden shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-3.5 py-3 border-b border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-white",
                            children: "Preview Screens"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleDemo,
                            className: "text-slate-300 text-xs",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[260px] overflow-y-auto p-1.5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_SCREENS"].map((scr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                navigate(scr.key);
                                toggleDemo();
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full text-start px-3 py-2 rounded-lg text-[11.5px] mb-0.5', scr.key === view ? 'bg-brand-navy text-white font-semibold' : 'text-slate-300 hover:bg-white/5'),
                            children: scr.label
                        }, scr.key, false, {
                            fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
                            lineNumber: 22,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleDemo,
            className: "px-4 py-2.5 bg-brand-midnight text-white rounded-full text-[11.5px] font-bold shadow-xl",
            children: "⌗ Preview Screens"
        }, void 0, false, {
            fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
            lineNumber: 39,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/organisms/DemoScreenSwitcher.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(DemoScreenSwitcher, "qORHbunmxLCfCgFYBo1yoxLo0Ac=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = DemoScreenSwitcher;
var _c;
__turbopack_context__.k.register(_c, "DemoScreenSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/ImagePlaceholder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImagePlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
function ImagePlaceholder({ label, shape = 'rounded', className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center text-center bg-brand-accentBg dark:bg-brand-accentBgDark border-2 border-dashed border-brand-navy/20 dark:border-brand-navyDark/40 text-brand-navy dark:text-brand-navyDark text-[11px] font-medium px-2', shape === 'circle' ? 'rounded-full' : 'rounded-2xl', className),
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/atoms/ImagePlaceholder.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ImagePlaceholder;
var _c;
__turbopack_context__.k.register(_c, "ImagePlaceholder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/StatItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function StatItem({ value, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold font-serif text-brand-navy dark:text-brand-navyDark",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/StatItem.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[11px] text-brand-muted dark:text-brand-mutedDark mt-0.5 uppercase tracking-wide",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/StatItem.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/StatItem.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = StatItem;
var _c;
__turbopack_context__.k.register(_c, "StatItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/ImagePlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/StatItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function HeroSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "HeroSection.useUiStore[navigate]": (s)=>s.navigate
    }["HeroSection.useUiStore[navigate]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-[1280px] mx-auto px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-accent dark:text-brand-accentDark text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-6",
                        children: t.hero.badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/HeroSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[46px] leading-[1.12] font-semibold font-serif text-balance",
                        children: t.hero.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/HeroSection.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[15px] text-brand-body dark:text-brand-bodyDark mt-5 max-w-[480px] leading-relaxed",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t.hero.subtitle, {
                            clinic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/HeroSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3.5 mt-8 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>navigate('doctors'),
                                children: t.hero.cta1
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "secondary",
                                onClick: ()=>navigate('home'),
                                children: t.hero.cta2
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/HeroSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 mt-11",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].patientsCount,
                                label: t.hero.statPatients
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-[34px] bg-brand-border2 dark:bg-brand-border2Dark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].doctorsCount,
                                label: t.hero.statSpecialists
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-[34px] bg-brand-border2 dark:bg-brand-border2Dark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].rating,
                                label: t.hero.statRating
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/HeroSection.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Clinic interior photo",
                        className: "w-full h-[480px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/HeroSection.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-6 -bottom-7 max-w-[280px] bg-white dark:bg-brand-surfaceDark rounded-2xl border border-brand-border dark:border-brand-borderDark shadow-xl p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12.5px] italic text-brand-body dark:text-brand-bodyDark leading-relaxed",
                                children: "“The most professional cardiac care I’ve received in Egypt. Thorough, calm, unhurried.”"
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold text-brand-navy dark:text-brand-inkDark mt-2.5",
                                children: "— Mahmoud Youssef, patient"
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/HeroSection.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/HeroSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/HeroSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "NqiRCzjBgUdDIpk6DCNasG3nlmA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/ServiceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ServiceCard({ service }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-brand-cream dark:bg-brand-bgDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-xl bg-brand-accentBg dark:bg-brand-accentBgDark flex items-center justify-center mb-4 text-brand-accent dark:text-brand-accentDark",
                children: "♥"
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/ServiceCard.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-[15px] font-bold font-serif",
                children: service.title
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/ServiceCard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[12.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed mt-2",
                children: service.description
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/ServiceCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/ServiceCard.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ServiceCard;
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/ServiceCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ServicesSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services-section",
        className: "max-w-[1280px] mx-auto px-8 pt-24 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide",
                children: t.services.label
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/ServicesSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[32px] font-semibold font-serif mt-2.5 mb-10 max-w-[640px] text-balance",
                children: t.services.title
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/ServicesSection.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_SERVICES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$ServiceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        service: s
                    }, s.id, false, {
                        fileName: "[project]/src/components/organisms/ServicesSection.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/ServicesSection.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/ServicesSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(ServicesSection, "ButTCEMFbNz5RhPo3+jXg4nAtj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/DoctorCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/ImagePlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AVAIL_LABEL = {
    today: 'Available Today',
    tomorrow: 'Next: Tomorrow',
    monday: 'Next: Monday'
};
function DoctorCard({ doctor, onSelect, onBook }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cursor-pointer group",
        onClick: onSelect,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: doctor.name,
                        className: "w-full h-[190px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: 'absolute top-2.5 left-2.5 text-[9.5px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ' + (doctor.nextAvailable === 'today' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-accent dark:text-brand-accentDark'),
                        children: AVAIL_LABEL[doctor.nextAvailable]
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-[15px] font-bold font-serif mt-3.5",
                children: doctor.name
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10.5px] font-bold text-brand-accent dark:text-brand-accentDark mt-1 uppercase tracking-wide",
                children: doctor.title
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mt-2.5 pt-2.5 border-t border-brand-border dark:border-brand-borderDark text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-muted dark:text-brand-mutedDark",
                        children: [
                            "EGP ",
                            doctor.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "sm",
                        variant: "secondary",
                        onClick: (e)=>{
                            e.stopPropagation();
                            onBook();
                        },
                        children: t.doctorsHome.book
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/molecules/DoctorCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/DoctorCard.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(DoctorCard, "ButTCEMFbNz5RhPo3+jXg4nAtj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = DoctorCard;
var _c;
__turbopack_context__.k.register(_c, "DoctorCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/DoctorsPreviewSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorsPreviewSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$DoctorCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/DoctorCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function DoctorsPreviewSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "DoctorsPreviewSection.useUiStore[navigate]": (s)=>s.navigate
    }["DoctorsPreviewSection.useUiStore[navigate]"]);
    const selectDoctor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "DoctorsPreviewSection.useUiStore[selectDoctor]": (s)=>s.selectDoctor
    }["DoctorsPreviewSection.useUiStore[selectDoctor]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-[1280px] mx-auto px-8 py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end mb-10 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide",
                                children: t.doctorsHome.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[32px] font-semibold font-serif mt-2.5",
                                children: t.doctorsHome.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>navigate('doctors'),
                        className: "text-[13px] font-semibold text-brand-navy dark:text-brand-inkDark",
                        children: t.doctorsHome.viewAll
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$DoctorCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        doctor: d,
                        onSelect: ()=>{
                            selectDoctor(d.id);
                            navigate('profile');
                        },
                        onBook: ()=>{
                            selectDoctor(d.id);
                            navigate('profile');
                        }
                    }, d.id, false, {
                        fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/DoctorsPreviewSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(DoctorsPreviewSection, "8Ego5iesF1mFNncYcEwWHJQx0Gk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = DoctorsPreviewSection;
var _c;
__turbopack_context__.k.register(_c, "DoctorsPreviewSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AboutSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const cards = [
        {
            title: t.about.excellenceTitle,
            text: t.about.excellenceText
        },
        {
            title: t.about.transparencyTitle,
            text: t.about.transparencyText
        },
        {
            title: t.about.continuityTitle,
            text: t.about.continuityText
        },
        {
            title: t.about.accessibilityTitle,
            text: t.about.accessibilityText
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about-clinic",
        className: "bg-brand-midnight text-white py-24 px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-blue-300 uppercase tracking-wide",
                            children: t.about.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/AboutSection.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[30px] font-semibold font-serif mt-2.5 mb-5 text-balance",
                            children: t.about.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/AboutSection.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13.5px] text-slate-300 leading-relaxed",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t.about.p1, {
                                clinic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/AboutSection.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13.5px] text-slate-300 leading-relaxed mt-4",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t.about.p2, {
                                doctors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].doctorsCount,
                                patients: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].patientsCount
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/organisms/AboutSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/organisms/AboutSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                    children: cards.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 border border-white/10 rounded-2xl p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-[13px] font-bold text-blue-300 font-serif",
                                    children: c.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/AboutSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11.5px] text-slate-300 leading-relaxed mt-2",
                                    children: c.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/organisms/AboutSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, c.title, true, {
                            fileName: "[project]/src/components/organisms/AboutSection.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/organisms/AboutSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/organisms/AboutSection.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/organisms/AboutSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "ButTCEMFbNz5RhPo3+jXg4nAtj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/HowItWorksSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorksSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function HowItWorksSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const steps = [
        {
            num: '01',
            title: t.steps.s1t,
            desc: t.steps.s1d
        },
        {
            num: '02',
            title: t.steps.s2t,
            desc: t.steps.s2d
        },
        {
            num: '03',
            title: t.steps.s3t,
            desc: t.steps.s3d
        },
        {
            num: '04',
            title: t.steps.s4t,
            desc: t.steps.s4d
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-[1280px] mx-auto px-8 py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-bold text-brand-accent dark:text-brand-accentDark uppercase tracking-wide",
                children: t.steps.label
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[30px] font-semibold font-serif mt-2.5 mb-11",
                children: t.steps.title
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: steps.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[34px] font-bold font-serif text-brand-border2 dark:text-brand-border2Dark mb-1.5",
                                children: s.num
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-[14.5px] font-bold font-serif",
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed mt-2",
                                children: s.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.num, true, {
                        fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/HowItWorksSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(HowItWorksSection, "ButTCEMFbNz5RhPo3+jXg4nAtj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = HowItWorksSection;
var _c;
__turbopack_context__.k.register(_c, "HowItWorksSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/CtaBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CtaBanner() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "CtaBanner.useUiStore[navigate]": (s)=>s.navigate
    }["CtaBanner.useUiStore[navigate]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-[1280px] mx-auto px-8 pb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-brand-navy dark:bg-brand-navyDark rounded-3xl py-14 px-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[28px] font-semibold font-serif text-white",
                    children: t.cta.title
                }, void 0, false, {
                    fileName: "[project]/src/components/organisms/CtaBanner.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13.5px] text-blue-100/80 mt-3.5 max-w-[460px] mx-auto leading-relaxed",
                    children: t.cta.subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/organisms/CtaBanner.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "accentSoft",
                    className: "mt-6",
                    onClick: ()=>navigate('doctors'),
                    children: t.cta.button
                }, void 0, false, {
                    fileName: "[project]/src/components/organisms/CtaBanner.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/organisms/CtaBanner.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/organisms/CtaBanner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(CtaBanner, "NqiRCzjBgUdDIpk6DCNasG3nlmA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = CtaBanner;
var _c;
__turbopack_context__.k.register(_c, "CtaBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/HomeView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/ServicesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$DoctorsPreviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/DoctorsPreviewSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$HowItWorksSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/HowItWorksSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$CtaBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/CtaBanner.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function HomeView() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/HomeView.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/HomeView.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$DoctorsPreviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/HomeView.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/HomeView.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$HowItWorksSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/HomeView.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$CtaBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/HomeView.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/HomeView.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = HomeView;
var _c;
__turbopack_context__.k.register(_c, "HomeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/DoctorListItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/ImagePlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DoctorListItem({ doctor, onBook }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const bioShort = doctor.bio.length > 130 ? doctor.bio.slice(0, 130) + '…' : doctor.bio;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: doctor.name,
                        className: "w-[88px] h-[88px] flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[15px] font-bold font-serif",
                                children: doctor.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold text-brand-accent dark:text-brand-accentDark mt-1 uppercase tracking-wide",
                                children: doctor.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-1.5",
                                children: [
                                    "★ ",
                                    doctor.rating,
                                    " (",
                                    doctor.reviewCount,
                                    ") · ",
                                    doctor.experienceYears,
                                    " yrs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-brand-body dark:text-brand-bodyDark leading-relaxed px-5 pb-4",
                children: bioShort
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center bg-brand-cream dark:bg-brand-bgDark px-5 py-4 border-t border-brand-border dark:border-brand-borderDark",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[12.5px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    "EGP ",
                                    doctor.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-muted dark:text-brand-mutedDark",
                                children: [
                                    "· EGP ",
                                    doctor.deposit,
                                    " deposit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "sm",
                        onClick: onBook,
                        children: t.doctorsPage.book
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/DoctorListItem.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(DoctorListItem, "ButTCEMFbNz5RhPo3+jXg4nAtj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = DoctorListItem;
var _c;
__turbopack_context__.k.register(_c, "DoctorListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/DoctorsListView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorsListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$DoctorListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/DoctorListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DoctorsListView() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { navigate, selectDoctor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [specialty, setSpecialty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('rating');
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DoctorsListView.useMemo[filtered]": ()=>{
            const q = search.toLowerCase();
            let list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"].filter({
                "DoctorsListView.useMemo[filtered].list": (d)=>{
                    const matchesSearch = !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q) || d.title.toLowerCase().includes(q);
                    const matchesSpecialty = specialty === 'all' || specialty === 'cardiology' && d.specialty.includes('Cardiology') && !d.specialty.includes('Interventional') || specialty === 'interventional' && d.specialty.includes('Interventional') || specialty === 'internal' && d.specialty.includes('Internal');
                    return matchesSearch && matchesSpecialty;
                }
            }["DoctorsListView.useMemo[filtered].list"]);
            list = [
                ...list
            ].sort({
                "DoctorsListView.useMemo[filtered]": (a, b)=>{
                    if (sortBy === 'rating') return b.rating - a.rating;
                    if (sortBy === 'price-asc') return a.price - b.price;
                    if (sortBy === 'price-desc') return b.price - a.price;
                    return b.experienceYears - a.experienceYears;
                }
            }["DoctorsListView.useMemo[filtered]"]);
            return list;
        }
    }["DoctorsListView.useMemo[filtered]"], [
        search,
        specialty,
        sortBy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1280px] mx-auto px-8 py-14 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-brand-muted dark:text-brand-mutedDark mb-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cursor-pointer",
                        onClick: ()=>navigate('home'),
                        children: t.doctorsPage.breadcrumb
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    " /",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-navy dark:text-brand-inkDark font-semibold",
                        children: t.doctorsHome.title
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DoctorsListView.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[30px] font-semibold font-serif",
                children: t.doctorsPage.title
            }, void 0, false, {
                fileName: "[project]/src/views/DoctorsListView.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[13px] text-brand-body dark:text-brand-bodyDark mt-2.5",
                children: t.doctorsPage.subtitle
            }, void 0, false, {
                fileName: "[project]/src/views/DoctorsListView.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-5 my-7 flex flex-wrap gap-3.5 items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[220px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-1.5",
                                children: t.doctorsPage.searchLabel
                            }, void 0, false, {
                                fileName: "[project]/src/views/DoctorsListView.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: t.doctorsPage.searchPlaceholder,
                                className: "w-full box-border bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark rounded-lg px-3.5 py-2.5 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/views/DoctorsListView.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[170px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-1.5",
                                children: t.doctorsPage.specialtyLabel
                            }, void 0, false, {
                                fileName: "[project]/src/views/DoctorsListView.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: specialty,
                                onChange: (e)=>setSpecialty(e.target.value),
                                className: "w-full bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark rounded-lg px-3 py-2.5 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: t.doctorsPage.allSpecialties
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "cardiology",
                                        children: "General Cardiology"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "interventional",
                                        children: "Interventional Cardiology"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "internal",
                                        children: "Internal Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DoctorsListView.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[150px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-1.5",
                                children: t.doctorsPage.sortLabel
                            }, void 0, false, {
                                fileName: "[project]/src/views/DoctorsListView.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                className: "w-full bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark rounded-lg px-3 py-2.5 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "rating",
                                        children: t.doctorsPage.sortRating
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "experience",
                                        children: t.doctorsPage.sortExperience
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-asc",
                                        children: t.doctorsPage.sortPriceAsc
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-desc",
                                        children: t.doctorsPage.sortPriceDesc
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorsListView.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DoctorsListView.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DoctorsListView.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: filtered.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$DoctorListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        doctor: d,
                        onBook: ()=>{
                            selectDoctor(d.id);
                            navigate('profile');
                        }
                    }, d.id, false, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/views/DoctorsListView.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-14 text-center max-w-[440px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-bold",
                        children: t.doctorsPage.noResultsTitle
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-brand-muted dark:text-brand-mutedDark mt-2",
                        children: t.doctorsPage.noResultsSubtitle
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "sm",
                        variant: "accentSoft",
                        className: "mt-4",
                        onClick: ()=>{
                            setSearch('');
                            setSpecialty('all');
                            setSortBy('rating');
                        },
                        children: t.doctorsPage.clear
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorsListView.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DoctorsListView.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DoctorsListView.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(DoctorsListView, "wHMii6QHj9xthq3YQTZK0qp7CA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = DoctorsListView;
var _c;
__turbopack_context__.k.register(_c, "DoctorsListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/DateChip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateChip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
function DateChip({ dayName, dayNum, selected, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-shrink-0 w-[52px] py-2.5 rounded-xl text-center transition-colors', selected ? 'bg-brand-navy dark:bg-brand-navyDark text-white' : 'border border-brand-border2 dark:border-brand-border2Dark bg-brand-cream dark:bg-brand-bgDark text-brand-body dark:text-brand-bodyDark'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-[9.5px] uppercase",
                children: dayName
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/DateChip.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block text-xs font-bold mt-0.5",
                children: dayNum
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/DateChip.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/DateChip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = DateChip;
var _c;
__turbopack_context__.k.register(_c, "DateChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/TimeSlotButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimeSlotButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
function TimeSlotButton({ label, selected, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-2.5 px-1 rounded-lg text-xs font-mono font-semibold transition-colors', selected ? 'bg-brand-midnight text-white' : 'border border-brand-border2 dark:border-brand-border2Dark bg-white dark:bg-brand-surfaceDark text-brand-body dark:text-brand-bodyDark'),
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/molecules/TimeSlotButton.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = TimeSlotButton;
var _c;
__turbopack_context__.k.register(_c, "TimeSlotButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/BookingWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$DateChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/DateChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$TimeSlotButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/TimeSlotButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function BookingWidget({ doctor }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { selectedDateKey, selectedTimeSlot, selectDate, selectTimeSlot, navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-brand-surfaceDark border border-brand-border2 dark:border-brand-border2Dark rounded-2xl p-6 sticky top-[88px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-bold font-serif mb-1.5",
                children: t.profile.bookingTitle
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-brand-body dark:text-brand-bodyDark leading-relaxed mb-5",
                children: t.profile.bookingSubtitle
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[10px] font-bold uppercase tracking-wide text-brand-muted dark:text-brand-mutedDark mb-2",
                children: t.profile.selectDate
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 flex-wrap mb-5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AVAILABLE_DATES"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$DateChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        dayName: d.dayName,
                        dayNum: d.dayNum,
                        selected: d.key === selectedDateKey,
                        onClick: ()=>selectDate(d.key)
                    }, d.key, false, {
                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[10px] font-bold uppercase tracking-wide text-brand-muted dark:text-brand-mutedDark mb-2",
                children: t.profile.selectTime
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2 mb-5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIME_SLOTS"].map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$TimeSlotButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: slot,
                        selected: slot === selectedTimeSlot,
                        onClick: ()=>selectTimeSlot(slot)
                    }, slot, false, {
                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-brand-accentBg dark:bg-brand-accentBgDark rounded-2xl p-4 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold text-brand-accent dark:text-brand-accentDark uppercase",
                        children: t.profile.depositModel
                    }, void 0, false, {
                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mt-2.5 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-brand-body dark:text-brand-bodyDark text-[10px]",
                                        children: t.profile.payOnline
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-brand-navy dark:text-brand-inkDark text-[15px]",
                                        children: [
                                            "EGP ",
                                            doctor.deposit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-brand-body dark:text-brand-bodyDark text-[10px]",
                                        children: t.profile.payClinic
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[15px]",
                                        children: [
                                            "EGP ",
                                            doctor.price - doctor.deposit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "w-full",
                onClick: ()=>navigate('reservation'),
                children: t.profile.secureButton
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[10.5px] text-brand-muted dark:text-brand-mutedDark mt-3",
                children: t.profile.guestNote
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/BookingWidget.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/organisms/BookingWidget.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(BookingWidget, "khXVhX79GWBgLSZGftd2Jkjp6Zg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = BookingWidget;
var _c;
__turbopack_context__.k.register(_c, "BookingWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/DoctorProfileView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DoctorProfileView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/ImagePlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$BookingWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/BookingWidget.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function DoctorProfileView() {
    _s();
    const { ta } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { selectedDoctorId, navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const doctor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"].find((d)=>d.id === selectedDoctorId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"][0];
    const lastName = doctor.name.split(' ').slice(-1)[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1280px] mx-auto px-8 py-14 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-brand-muted dark:text-brand-mutedDark mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cursor-pointer",
                        onClick: ()=>navigate('doctors'),
                        children: t.doctorsHome.title
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    " /",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-navy dark:text-brand-inkDark font-semibold",
                        children: doctor.name
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DoctorProfileView.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-7 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6 flex gap-5 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: doctor.name,
                                        className: "w-[110px] h-[110px] flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold font-serif",
                                                children: doctor.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                lineNumber: 25,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] font-bold text-brand-accent dark:text-brand-accentDark mt-1.5",
                                                children: doctor.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                lineNumber: 26,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-brand-muted dark:text-brand-mutedDark mt-1",
                                                children: doctor.specialty
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                lineNumber: 27,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4.5 gap-x-5 mt-3.5 pt-3.5 border-t border-brand-border dark:border-brand-borderDark text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    doctor.experienceYears,
                                                                    " yrs"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-brand-muted dark:text-brand-mutedDark text-[10.5px]",
                                                                children: "Experience"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    doctor.patientsTreated,
                                                                    "+"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 34,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-brand-muted dark:text-brand-mutedDark text-[10.5px]",
                                                                children: "Patients"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    "★ ",
                                                                    doctor.rating
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 38,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-brand-muted dark:text-brand-mutedDark text-[10.5px]",
                                                                children: [
                                                                    doctor.reviewCount,
                                                                    " reviews"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 39,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                lineNumber: 28,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-3.5 font-serif",
                                        children: [
                                            t.profile.aboutPrefix,
                                            " ",
                                            lastName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed",
                                        children: doctor.bio
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-3.5 font-serif",
                                        children: t.profile.education
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    doctor.education.map((edu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2.5 items-start mb-2.5 text-[12.5px] text-brand-body dark:text-brand-bodyDark",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-brand-accent dark:bg-brand-accentDark mt-1.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: edu
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, edu, true, {
                                            fileName: "[project]/src/views/DoctorProfileView.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-4.5 font-serif",
                                        children: t.profile.timeline
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-s-2 border-brand-accentBg dark:border-brand-accentBgDark ms-1 ps-4.5 flex flex-col gap-4.5",
                                        children: doctor.timeline.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono font-bold text-brand-accent dark:text-brand-accentDark bg-brand-accentBg dark:bg-brand-accentBgDark px-2 py-0.5 rounded",
                                                        children: item.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-[12.5px] font-bold mt-2",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-0.5",
                                                        children: item.institution
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.year, true, {
                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[13px] font-bold uppercase tracking-wide border-s-[3px] border-brand-accent dark:border-brand-accentDark ps-2.5 mb-4.5 font-serif",
                                        children: t.profile.reviews
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3.5",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_REVIEWS"].map((rev)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-brand-cream dark:bg-brand-bgDark rounded-xl p-4 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between mb-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: rev.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-brand-muted dark:text-brand-mutedDark text-[10.5px]",
                                                                children: rev.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-brand-body dark:text-brand-bodyDark italic leading-relaxed",
                                                        children: [
                                                            "“",
                                                            rev.comment,
                                                            "”"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, rev.id, true, {
                                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/DoctorProfileView.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$BookingWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        doctor: doctor
                    }, void 0, false, {
                        fileName: "[project]/src/views/DoctorProfileView.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/DoctorProfileView.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/DoctorProfileView.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(DoctorProfileView, "FnyqdNmKkUjPiCMBXjwVvN9BGvs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = DoctorProfileView;
var _c;
__turbopack_context__.k.register(_c, "DoctorProfileView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/schemas/validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginSchema",
    ()=>loginSchema,
    "registerSchema",
    ()=>registerSchema,
    "reservationSchema",
    ()=>reservationSchema,
    "zodErrorsToFieldMap",
    ()=>zodErrorsToFieldMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
// Egyptian mobile: optional +20/0 prefix, then 1[0125] + 8 digits.
const egyptianPhone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Egyptian mobile number is required').regex(/^(\+20|0)?1[0125]\d{8}$/, 'Please enter a valid Egyptian phone number');
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Phone number is required'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Password is required')
});
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Full name is required'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Phone number is required'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6, 'Password must be at least 6 characters'),
    consent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
}).refine((data)=>data.consent, {
    message: 'You must accept the PDPL data processing consent',
    path: [
        'consent'
    ]
});
const reservationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(5, 'Please enter your full name as printed on national ID'),
    phone: egyptianPhone,
    nationalId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional().refine((v)=>!v || /^\d{14}$/.test(v), {
        message: 'Egyptian National ID must be exactly 14 digits'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(''))
});
function zodErrorsToFieldMap(error) {
    const out = {};
    for (const issue of error.issues){
        const key = issue.path[0];
        if (key && !out[key]) out[key] = issue.message;
    }
    return out;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
}); // Uncomment once the backend issues auth tokens:
 // apiClient.interceptors.request.use((config) => {
 //   const token = localStorage.getItem('chc-token');
 //   if (token) config.headers.Authorization = `Bearer ${token}`;
 //   return config;
 // });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/bookingApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBookingRequest",
    ()=>createBookingRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/client.ts [app-client] (ecmascript)");
;
async function createBookingRequest(payload) {
    // const { data } = await apiClient.post<{ referenceNumber: string }>('/bookings', payload);
    // return data;
    void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"];
    await new Promise((r)=>setTimeout(r, 450));
    return {
        referenceNumber: `CHC-${Math.floor(1000 + Math.random() * 9000)}-EGP`
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/bookingStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBookingStore",
    ()=>useBookingStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/schemas/validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$bookingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/bookingApi.ts [app-client] (ecmascript)");
;
;
;
const useBookingStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((set, get)=>({
        resName: '',
        resPhone: '',
        resEmail: '',
        resNationalId: '',
        visitType: 'in-person',
        doctorNotes: '',
        resErrors: {},
        paymentMethod: 'card',
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvv: '',
        vfWallet: '',
        vfOtp: '',
        vfOtpSent: false,
        fawryCopied: false,
        referenceNumber: '',
        ccPassword: '',
        accountCreated: false,
        setField: (key, value)=>set({
                [key]: value
            }),
        setVisitType: (t)=>set({
                visitType: t
            }),
        setPaymentMethod: (m)=>set({
                paymentMethod: m
            }),
        prefill: (name, phone, email)=>set({
                resName: name,
                resPhone: phone,
                resEmail: email
            }),
        // Validated with the shared Zod schema (src/schemas/validation.ts) — same
        // rules the backend will re-enforce server-side.
        validateReservation: ()=>{
            const { resName, resPhone, resNationalId, resEmail } = get();
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reservationSchema"].safeParse({
                name: resName,
                phone: resPhone,
                nationalId: resNationalId,
                email: resEmail
            });
            if (!result.success) {
                set({
                    resErrors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodErrorsToFieldMap"])(result.error)
                });
                return false;
            }
            set({
                resErrors: {}
            });
            return true;
        },
        submitPayment: async (doctorId, dateKey, timeSlot)=>{
            const { resName, resPhone, paymentMethod } = get();
            const { referenceNumber } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$bookingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBookingRequest"])({
                doctorId,
                dateKey,
                timeSlot,
                patientName: resName,
                patientPhone: resPhone,
                paymentMethod
            });
            set({
                referenceNumber
            });
            return referenceNumber;
        },
        markAccountCreated: ()=>set({
                accountCreated: true
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/StepIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function StepIndicator({ current, labels }) {
    const stateFor = (n)=>n < current ? 'done' : n === current ? 'active' : 'todo';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[440px] mx-auto mb-10 flex items-center justify-between text-[11.5px]",
        children: labels.map((label, i)=>{
            const n = i + 1;
            const st = stateFor(n);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center flex-1 last:flex-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: st === 'todo' ? 'text-brand-muted dark:text-brand-mutedDark' : 'text-brand-navy dark:text-brand-inkDark font-bold',
                        children: [
                            st === 'done' ? '✓' : `①②③`[n - 1],
                            " ",
                            label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/molecules/StepIndicator.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    n < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: 'flex-1 h-px mx-3 ' + (st === 'done' ? 'bg-brand-navy dark:bg-brand-navyDark' : 'bg-brand-border2 dark:bg-brand-border2Dark')
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/StepIndicator.tsx",
                        lineNumber: 21,
                        columnNumber: 15
                    }, this)
                ]
            }, label, true, {
                fileName: "[project]/src/components/molecules/StepIndicator.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/molecules/StepIndicator.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = StepIndicator;
var _c;
__turbopack_context__.k.register(_c, "StepIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, mono, className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[10.5px] font-bold uppercase tracking-wide text-brand-muted dark:text-brand-mutedDark mb-1.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/atoms/Input.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full box-border rounded-lg px-3.5 py-2.5 text-sm bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark text-brand-ink dark:text-brand-inkDark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 transition-shadow', mono && 'font-mono', className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/atoms/Input.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-red-600 mt-1.5",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/atoms/Input.tsx",
                lineNumber: 27,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atoms/Input.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Input;
Input.displayName = 'Input';
const __TURBOPACK__default__export__ = Input;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/Textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[10.5px] font-bold uppercase tracking-wide text-brand-muted dark:text-brand-mutedDark mb-1.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/atoms/Textarea.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full box-border rounded-lg px-3.5 py-2.5 text-sm bg-brand-cream dark:bg-brand-bgDark border border-brand-border2 dark:border-brand-border2Dark text-brand-ink dark:text-brand-inkDark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 font-sans', className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/atoms/Textarea.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atoms/Textarea.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Textarea;
Textarea.displayName = 'Textarea';
const __TURBOPACK__default__export__ = Textarea;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/ReservationFormView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReservationFormView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/bookingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/StepIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/ImagePlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function ReservationFormView() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { selectedDoctorId, selectedDateKey, selectedTimeSlot, navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"])();
    const doctor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"].find((d)=>d.id === selectedDoctorId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"][0];
    const dateFull = [
        'today',
        'tomorrow',
        'tue',
        'wed',
        'thu'
    ].includes(selectedDateKey) ? selectedDateKey : selectedDateKey;
    const submit = (e)=>{
        e.preventDefault();
        if (!b.validateReservation()) return;
        navigate('payment');
    };
    const visitCardClass = (active)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-3.5 rounded-xl text-start transition-colors', active ? 'border-[1.5px] border-brand-navy dark:border-brand-navyDark bg-brand-accentBg dark:bg-brand-accentBgDark' : 'border border-brand-border2 dark:border-brand-border2Dark bg-brand-cream dark:bg-brand-bgDark');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1100px] mx-auto px-8 py-14 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                current: 1,
                labels: [
                    t.reservation.step1,
                    t.reservation.step2,
                    t.reservation.step3
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/ReservationFormView.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold font-serif mb-5",
                                children: t.reservation.completeTitle
                            }, void 0, false, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: submit,
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: t.reservation.fullName,
                                        value: b.resName || user?.name || '',
                                        onChange: (e)=>b.setField('resName', e.target.value),
                                        placeholder: "Ahmed Aly El-Sherif",
                                        error: b.resErrors.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: t.reservation.mobile,
                                        value: b.resPhone || user?.phone || '',
                                        onChange: (e)=>b.setField('resPhone', e.target.value),
                                        placeholder: "+20 10 1234 5678",
                                        mono: true,
                                        error: b.resErrors.phone
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: t.reservation.nationalId,
                                        value: b.resNationalId,
                                        onChange: (e)=>b.setField('resNationalId', e.target.value),
                                        placeholder: "29012345678901",
                                        mono: true,
                                        error: b.resErrors.nationalId
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: t.reservation.email,
                                        type: "email",
                                        value: b.resEmail || user?.email || '',
                                        onChange: (e)=>b.setField('resEmail', e.target.value),
                                        placeholder: "patient@example.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10.5px] font-bold uppercase text-brand-muted dark:text-brand-mutedDark mb-2",
                                                children: t.reservation.visitPathway
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: visitCardClass(b.visitType === 'in-person'),
                                                        onClick: ()=>b.setVisitType('in-person'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "block text-[12.5px]",
                                                                children: t.reservation.inPersonTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10.5px] text-brand-muted dark:text-brand-mutedDark",
                                                                children: t.reservation.inPersonDesc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: visitCardClass(b.visitType === 'video'),
                                                        onClick: ()=>b.setVisitType('video'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "block text-[12.5px]",
                                                                children: t.reservation.videoTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10.5px] text-brand-muted dark:text-brand-mutedDark",
                                                                children: t.reservation.videoDesc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: t.reservation.notes,
                                        rows: 3,
                                        value: b.doctorNotes,
                                        onChange: (e)=>b.setField('doctorNotes', e.target.value),
                                        placeholder: t.reservation.notesPlaceholder
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center pt-2.5 border-t border-brand-border dark:border-brand-borderDark",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>navigate('profile'),
                                                className: "text-brand-muted dark:text-brand-mutedDark text-[12.5px] font-semibold",
                                                children: [
                                                    "← ",
                                                    t.reservation.back
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                type: "submit",
                                                children: t.reservation.proceed
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ReservationFormView.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6 sticky top-[88px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase mb-4 pb-2.5 border-b border-brand-border dark:border-brand-borderDark",
                                children: t.reservation.overviewTitle
                            }, void 0, false, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 items-center bg-brand-cream dark:bg-brand-bgDark p-3 rounded-xl mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: doctor.name,
                                        className: "w-12 h-12 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-[12.5px]",
                                                children: doctor.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-brand-accent dark:text-brand-accentDark font-semibold",
                                                children: doctor.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 text-[12.5px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-muted dark:text-brand-mutedDark",
                                                children: t.reservation.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: dateFull
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-muted dark:text-brand-mutedDark",
                                                children: t.reservation.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "font-mono",
                                                children: selectedTimeSlot
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-brand-border dark:border-brand-borderDark my-4"
                            }, void 0, false, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[12.5px] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-muted dark:text-brand-mutedDark",
                                        children: t.reservation.totalFee
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "EGP ",
                                            doctor.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between bg-brand-accentBg dark:bg-brand-accentBgDark p-2.5 rounded-lg text-[12.5px] font-bold text-brand-accent dark:text-brand-accentDark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.reservation.depositNow
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "EGP ",
                                            doctor.deposit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/ReservationFormView.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/ReservationFormView.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/ReservationFormView.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/ReservationFormView.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/ReservationFormView.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(ReservationFormView, "8GpZLmUPSzVB9gqAuZ+XrflM/Qs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"]
    ];
});
_c = ReservationFormView;
var _c;
__turbopack_context__.k.register(_c, "ReservationFormView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/molecules/PaymentTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
const METHODS = [
    'card',
    'fawry',
    'vodafone',
    'clinic'
];
function PaymentTabs({ active, onChange, labels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-4 gap-2 mb-6",
        children: METHODS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onChange(m),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-3 px-1 rounded-xl text-xs font-bold transition-colors', m === active ? 'border-[1.5px] border-brand-navy dark:border-brand-navyDark bg-brand-accentBg dark:bg-brand-accentBgDark text-brand-navy dark:text-brand-inkDark' : 'border border-brand-border2 dark:border-brand-border2Dark bg-brand-cream dark:bg-brand-bgDark text-brand-body dark:text-brand-bodyDark'),
                children: labels[m]
            }, m, false, {
                fileName: "[project]/src/components/molecules/PaymentTabs.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/molecules/PaymentTabs.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = PaymentTabs;
var _c;
__turbopack_context__.k.register(_c, "PaymentTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/PaymentView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/bookingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/StepIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$PaymentTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/molecules/PaymentTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function PaymentView() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { selectedDoctorId, selectedDateKey, selectedTimeSlot, navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"])();
    const doctor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"].find((d)=>d.id === selectedDoctorId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"][0];
    const submit = async (e)=>{
        e.preventDefault();
        await b.submitPayment(doctor.id, selectedDateKey, selectedTimeSlot);
        navigate('confirmation');
    };
    const copyFawry = ()=>{
        navigator.clipboard?.writeText('918362754').catch(()=>{});
        b.setField('fawryCopied', true);
        setTimeout(()=>b.setField('fawryCopied', false), 2000);
    };
    const depositNowLabel = b.paymentMethod === 'clinic' ? 'EGP 0' : `EGP ${doctor.deposit}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1100px] mx-auto px-8 py-14 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                current: 2,
                labels: [
                    t.reservation.step1,
                    t.reservation.step2,
                    t.reservation.step3
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/PaymentView.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold font-serif mb-5",
                                children: t.payment.title
                            }, void 0, false, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$PaymentTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                active: b.paymentMethod,
                                onChange: (m)=>b.setPaymentMethod(m),
                                labels: {
                                    card: t.payment.tabCard,
                                    fawry: t.payment.tabFawry,
                                    vodafone: t.payment.tabVodafone,
                                    clinic: t.payment.tabClinic
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: submit,
                                className: "flex flex-col gap-4",
                                children: [
                                    b.paymentMethod === 'card' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                value: b.cardName,
                                                onChange: (e)=>b.setField('cardName', e.target.value),
                                                placeholder: t.payment.cardholder
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                value: b.cardNumber,
                                                onChange: (e)=>b.setField('cardNumber', e.target.value),
                                                placeholder: t.payment.cardNumber,
                                                mono: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        value: b.cardExpiry,
                                                        onChange: (e)=>b.setField('cardExpiry', e.target.value),
                                                        placeholder: "MM/YY",
                                                        mono: true,
                                                        className: "text-center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/PaymentView.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        type: "password",
                                                        value: b.cardCvv,
                                                        onChange: (e)=>b.setField('cardCvv', e.target.value),
                                                        placeholder: "CVV",
                                                        mono: true,
                                                        className: "text-center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/PaymentView.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    b.paymentMethod === 'fawry' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-brand-midnight text-white rounded-2xl p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-300 uppercase tracking-wide",
                                                        children: t.payment.kioskLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/PaymentView.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-mono text-blue-300 my-2 tracking-widest",
                                                        children: "918 362 754"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/PaymentView.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: copyFawry,
                                                        className: "mt-1.5 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-lg text-slate-200 text-[11.5px]",
                                                        children: b.fawryCopied ? t.payment.copied : t.payment.copyCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/PaymentView.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11.5px] text-brand-body dark:text-brand-bodyDark leading-relaxed",
                                                children: t.payment.fawryHint
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    b.paymentMethod === 'vodafone' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "flex-1",
                                                        value: b.vfWallet,
                                                        onChange: (e)=>b.setField('vfWallet', e.target.value),
                                                        placeholder: "+20 10 1234 5678",
                                                        mono: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/PaymentView.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this),
                                                    !b.vfOtpSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        type: "button",
                                                        size: "sm",
                                                        onClick: ()=>b.setField('vfOtpSent', true),
                                                        className: "whitespace-nowrap",
                                                        children: t.payment.sendOtp
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/PaymentView.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            b.vfOtpSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                type: "password",
                                                value: b.vfOtp,
                                                onChange: (e)=>b.setField('vfOtp', e.target.value),
                                                placeholder: t.payment.otpPlaceholder,
                                                mono: true,
                                                className: "text-center tracking-[0.3em]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    b.paymentMethod === 'clinic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 text-[12.5px] text-emerald-800 dark:text-emerald-300 leading-relaxed",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t.payment.clinicNote, {
                                            price: `EGP ${doctor.price}`
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center pt-3.5 border-t border-brand-border dark:border-brand-borderDark",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>navigate('reservation'),
                                                className: "text-brand-muted dark:text-brand-mutedDark text-[12.5px] font-semibold",
                                                children: [
                                                    "← ",
                                                    t.payment.back
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                type: "submit",
                                                children: b.paymentMethod === 'clinic' ? t.payment.submitClinic : t.payment.submitDefault
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/PaymentView.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/PaymentView.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-2xl p-6 sticky top-[88px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase mb-4 pb-2.5 border-b border-brand-border dark:border-brand-borderDark",
                                children: t.payment.summaryTitle
                            }, void 0, false, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[12.5px] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-muted dark:text-brand-mutedDark",
                                        children: t.reservation.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: selectedDateKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[12.5px] mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-muted dark:text-brand-mutedDark",
                                        children: t.reservation.time
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-mono",
                                        children: selectedTimeSlot
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-brand-border dark:border-brand-borderDark mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between bg-brand-accentBg dark:bg-brand-accentBgDark p-2.5 rounded-lg text-[12.5px] font-bold text-brand-accent dark:text-brand-accentDark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.payment.depositNow
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: depositNowLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/PaymentView.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/PaymentView.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/PaymentView.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/PaymentView.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/PaymentView.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(PaymentView, "1p0QmigXoLOn8M6tPm5Ifl+Nnlw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"]
    ];
});
_c = PaymentView;
var _c;
__turbopack_context__.k.register(_c, "PaymentView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/ConfirmationView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmationView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/bookingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function ConfirmationView() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { selectedDoctorId, selectedDateKey, selectedTimeSlot, navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"])();
    const doctor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"].find((d)=>d.id === selectedDoctorId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_DOCTORS"][0];
    const remaining = b.paymentMethod === 'clinic' ? doctor.price : doctor.price - doctor.deposit;
    const activate = (e)=>{
        e.preventDefault();
        if (!b.ccPassword.trim()) return;
        setUser({
            name: b.resName || 'Valued Patient',
            phone: b.resPhone || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].phone,
            email: b.resEmail || 'patient@clinical.eg',
            role: 'patient'
        });
        b.markAccountCreated();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[640px] mx-auto px-8 py-16 animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-3xl p-9",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[60px] h-[60px] rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-2xl text-emerald-600 mx-auto mb-4 animate-gentle-bounce",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10.5px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full uppercase",
                            children: t.confirmation.badge
                        }, void 0, false, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold font-serif mt-3.5",
                            children: t.confirmation.title
                        }, void 0, false, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12.5px] text-brand-body dark:text-brand-bodyDark mt-2",
                            children: t.confirmation.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/ConfirmationView.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-brand-midnight text-white rounded-2xl p-4.5 flex justify-between items-center mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-slate-300 uppercase",
                                    children: t.confirmation.refLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[17px] font-mono text-blue-300 mt-1",
                                    children: b.referenceNumber || `CHC-${1000}-EGP`
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-emerald-400",
                            children: [
                                "● ",
                                t.confirmation.confirmed
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/ConfirmationView.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-brand-cream dark:bg-brand-bgDark rounded-2xl p-5 mb-5 flex flex-col gap-2.5 text-[12.5px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-muted dark:text-brand-mutedDark",
                                    children: t.confirmation.patient
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: b.resName
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-muted dark:text-brand-mutedDark",
                                    children: t.confirmation.physician
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: doctor.name
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-muted dark:text-brand-mutedDark",
                                    children: t.confirmation.date
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: selectedDateKey
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-muted dark:text-brand-mutedDark",
                                    children: t.confirmation.time
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "font-mono",
                                    children: selectedTimeSlot
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-2.5 border-t border-brand-border2 dark:border-brand-border2Dark",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-muted dark:text-brand-mutedDark",
                                    children: t.confirmation.remaining
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-brand-accent dark:text-brand-accentDark",
                                    children: [
                                        "EGP ",
                                        remaining
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/ConfirmationView.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 mb-5 text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t.confirmation.whatsapp, {
                        phone: b.resPhone || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].phone
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/ConfirmationView.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                !b.accountCreated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-[1.5px] border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-5 mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-[12.5px] font-bold mb-2.5",
                            children: t.confirmation.secureTitle
                        }, void 0, false, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: activate,
                            className: "flex gap-2.5 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "password",
                                    value: b.ccPassword,
                                    onChange: (e)=>b.setField('ccPassword', e.target.value),
                                    placeholder: t.confirmation.passwordPlaceholder,
                                    className: "flex-1 min-w-[180px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "submit",
                                    size: "sm",
                                    children: t.confirmation.activate
                                }, void 0, false, {
                                    fileName: "[project]/src/views/ConfirmationView.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/ConfirmationView.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/ConfirmationView.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-3.5 mb-5 text-xs text-emerald-800 dark:text-emerald-300",
                    children: t.confirmation.activated
                }, void 0, false, {
                    fileName: "[project]/src/views/ConfirmationView.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: ()=>navigate('home'),
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t.confirmation.backHome, {
                            clinic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/views/ConfirmationView.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/ConfirmationView.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/ConfirmationView.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/ConfirmationView.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ConfirmationView, "KjVlbwwcF+IUN+XP2WzSP6qF5u4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"]
    ];
});
_c = ConfirmationView;
var _c;
__turbopack_context__.k.register(_c, "ConfirmationView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/LoginView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/bookingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/schemas/validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function LoginView() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { prefill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"])();
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const submit = async (e)=>{
        e.preventDefault();
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginSchema"].safeParse({
            phone,
            password
        });
        if (!result.success) {
            setError(result.error.issues[0]?.message ?? 'Please fill in all credentials');
            return;
        }
        const user = await login(phone, password);
        prefill(user.name, user.phone, user.email);
        setError('');
        navigate('home');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[900px] mx-auto px-8 py-16 animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-3xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-brand-midnight text-white p-9 flex flex-col justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-semibold font-serif",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name
                                }, void 0, false, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10.5px] text-blue-300 uppercase mt-1.5",
                                    children: t.login.portalLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[15px] font-semibold font-serif mt-7 mb-4",
                                    children: t.login.unlockTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3.5 text-[11.5px] text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "✓ ",
                                                t.login.benefit1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/LoginView.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "✓ ",
                                                t.login.benefit2
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/LoginView.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "✓ ",
                                                t.login.benefit3
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/LoginView.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10.5px] text-slate-400 leading-relaxed mt-6 pt-4 border-t border-white/10",
                            children: t.login.pdpl
                        }, void 0, false, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/LoginView.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-9",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[17px] font-semibold font-serif",
                            children: t.login.signInTitle
                        }, void 0, false, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-1.5 mb-5",
                            children: t.login.signInSubtitle
                        }, void 0, false, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-[11.5px] px-3.5 py-2.5 rounded-lg mb-3.5",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: submit,
                            className: "flex flex-col gap-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: phone,
                                    onChange: (e)=>setPhone(e.target.value),
                                    placeholder: t.login.phonePlaceholder,
                                    mono: true
                                }, void 0, false, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    placeholder: t.login.passwordPlaceholder
                                }, void 0, false, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "submit",
                                    className: "w-full mt-1.5",
                                    children: t.login.signIn
                                }, void 0, false, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 pt-4 border-t border-brand-border dark:border-brand-borderDark text-center text-xs text-brand-muted dark:text-brand-mutedDark",
                            children: [
                                t.login.noAccount,
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-accent dark:text-brand-accentDark font-semibold cursor-pointer",
                                    onClick: ()=>navigate('register'),
                                    children: t.login.registerFree
                                }, void 0, false, {
                                    fileName: "[project]/src/views/LoginView.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11.5px] text-brand-muted dark:text-brand-mutedDark cursor-pointer",
                                onClick: ()=>navigate('doctors'),
                                children: t.login.skipGuest
                            }, void 0, false, {
                                fileName: "[project]/src/views/LoginView.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/LoginView.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/LoginView.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/LoginView.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/LoginView.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(LoginView, "53t9QrYCE8eruQoFmAjqcLU8cjg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"]
    ];
});
_c = LoginView;
var _c;
__turbopack_context__.k.register(_c, "LoginView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/RegisterView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/bookingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/schemas/validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function RegisterView() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { register } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { prefill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const submit = async (e)=>{
        e.preventDefault();
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$schemas$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSchema"].safeParse({
            name,
            phone,
            email,
            password,
            consent
        });
        if (!result.success) {
            setError(result.error.issues[0]?.message ?? 'Please complete all required fields');
            return;
        }
        const user = await register({
            name,
            phone,
            email
        });
        prefill(user.name, user.phone, user.email);
        setError('');
        navigate('home');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[460px] mx-auto px-8 py-16 animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-brand-surfaceDark border border-brand-border dark:border-brand-borderDark rounded-3xl p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[17px] font-semibold font-serif",
                    children: t.register.title
                }, void 0, false, {
                    fileName: "[project]/src/views/RegisterView.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11.5px] text-brand-muted dark:text-brand-mutedDark mt-1.5 mb-5",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t.register.subtitle, {
                        clinic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLINIC"].name
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/RegisterView.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-[11.5px] px-3.5 py-2.5 rounded-lg mb-3.5",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/views/RegisterView.tsx",
                    lineNumber: 43,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: submit,
                    className: "flex flex-col gap-3.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            placeholder: t.register.namePlaceholder
                        }, void 0, false, {
                            fileName: "[project]/src/views/RegisterView.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: phone,
                            onChange: (e)=>setPhone(e.target.value),
                            placeholder: t.register.phonePlaceholder,
                            mono: true
                        }, void 0, false, {
                            fileName: "[project]/src/views/RegisterView.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            placeholder: t.register.emailPlaceholder
                        }, void 0, false, {
                            fileName: "[project]/src/views/RegisterView.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "password",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            placeholder: t.register.passwordPlaceholder
                        }, void 0, false, {
                            fileName: "[project]/src/views/RegisterView.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex gap-2.5 items-start text-[11px] text-brand-body dark:text-brand-bodyDark leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: consent,
                                    onChange: (e)=>setConsent(e.target.checked),
                                    className: "mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/RegisterView.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t.register.consent
                                }, void 0, false, {
                                    fileName: "[project]/src/views/RegisterView.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/RegisterView.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "submit",
                            className: "w-full mt-1",
                            children: t.register.button
                        }, void 0, false, {
                            fileName: "[project]/src/views/RegisterView.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/RegisterView.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 pt-4 border-t border-brand-border dark:border-brand-borderDark text-center text-xs text-brand-muted dark:text-brand-mutedDark",
                    children: [
                        t.register.already,
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-brand-accent dark:text-brand-accentDark font-semibold cursor-pointer",
                            onClick: ()=>navigate('login'),
                            children: t.register.signIn
                        }, void 0, false, {
                            fileName: "[project]/src/views/RegisterView.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/RegisterView.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/RegisterView.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/RegisterView.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(RegisterView, "TqC68kAeg0r3kd7OjyKQvoHU0k0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$bookingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingStore"]
    ];
});
_c = RegisterView;
var _c;
__turbopack_context__.k.register(_c, "RegisterView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$DemoScreenSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/organisms/DemoScreenSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$HomeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/HomeView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DoctorsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/DoctorsListView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DoctorProfileView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/DoctorProfileView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ReservationFormView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/ReservationFormView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$PaymentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/PaymentView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ConfirmationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/ConfirmationView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$LoginView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/LoginView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$RegisterView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/RegisterView.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const VIEWS = {
    home: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$HomeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    doctors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DoctorsListView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$DoctorProfileView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    reservation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ReservationFormView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    payment: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$PaymentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    confirmation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$ConfirmationView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    login: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$LoginView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    register: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$RegisterView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function App() {
    _s();
    const { theme, themeIsExplicit, setTheme, view } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])();
    const { isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    // Follow the device/OS color scheme until the patient explicitly toggles
    // the theme; from then on their explicit choice wins (persisted).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.matchMedia) return;
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            if (!themeIsExplicit) setTheme(mq.matches ? 'dark' : 'light');
            const listener = {
                "App.useEffect.listener": (e)=>{
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"].getState().themeIsExplicit) setTheme(e.matches ? 'dark' : 'light');
                }
            }["App.useEffect.listener"];
            mq.addEventListener('change', listener);
            return ({
                "App.useEffect": ()=>mq.removeEventListener('change', listener)
            })["App.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["App.useEffect"], []);
    const ActiveView = VIEWS[view];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: isRtl ? 'rtl' : 'ltr',
        className: (theme === 'dark' ? 'dark ' : '') + (isRtl ? 'font-arabic' : 'font-sans'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full bg-brand-cream dark:bg-brand-bgDark text-brand-ink dark:text-brand-inkDark flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveView, {}, void 0, false, {
                        fileName: "[project]/src/components/App.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$DemoScreenSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/App.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/App.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/App.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(App, "tW19QqME9LhGefY1RoyLxvbTebA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ysocno._.js.map