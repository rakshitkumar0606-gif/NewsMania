import type { Language, NewsCategory } from "./news-types";

export interface UIStrings {
  // Header / nav
  signIn: string;
  signOut: string;
  savedNews: string;
  settings: string;
  account: string;
  logoutConfirm: string;
  // Search
  searchPlaceholder: string;
  voiceStart: string;
  voiceStop: string;
  voiceUnsupported: string;
  clearSearch: string;
  resultsFor: string;
  sortedRecent: string;
  typeSomething: string;
  // Home
  todaysTopStories: string;
  topStoriesAccent: string;
  newsFromIndia: string;
  indiaAccent: string;
  homeSubtitle: string;
  // Categories
  cat_general: string;
  cat_nation: string;
  cat_technology: string;
  cat_business: string;
  cat_sports: string;
  cat_health: string;
  cat_entertainment: string;
  cat_science: string;
  // Card
  summarize: string;
  hide: string;
  aiSummary: string;
  saveArticle: string;
  removeBookmark: string;
  openArticle: string;
  justNow: string;
  minAgo: string;
  hourAgo: string;
  dayAgo: string;
  // Feed
  loadMore: string;
  reachedEnd: string;
  noResults: string;
  noResultsHint: string;
  couldntLoad: string;
  retry: string;
  savedToast: string;
  removedToast: string;
  // Saved page
  savedTitle: string;
  savedAccent: string;
  syncedToAccount: string;
  savedToDevice: string;
  signInToSync: string;
  loading: string;
  nothingSaved: string;
  nothingSavedHint: string;
  browseNews: string;
  // Settings dialog
  settingsTitle: string;
  settingsDesc: string;
  theme: string;
  light: string;
  dark: string;
  language: string;
  langHint: string;
  // Auth page
  signInTab: string;
  createAccountTab: string;
  email: string;
  password: string;
  username: string;
  createAccount: string;
  welcomeBack: string;
  accountCreated: string;
  passwordTooShort: string;
  authFooter: string;
}

const en: UIStrings = {
  signIn: "Sign in",
  signOut: "Log out",
  savedNews: "Saved News",
  settings: "Settings",
  account: "Account",
  logoutConfirm: "Log out of NewsMania?",
  searchPlaceholder: "Search news, topics, or sources…",
  voiceStart: "Start voice search",
  voiceStop: "Stop voice search",
  voiceUnsupported: "Voice search isn't supported in this browser",
  clearSearch: "Clear search",
  resultsFor: "Results for",
  sortedRecent: "Sorted by most recent",
  typeSomething: "Type something in the search bar above.",
  todaysTopStories: "Today's",
  topStoriesAccent: "Top Stories",
  newsFromIndia: "News from",
  indiaAccent: "India",
  homeSubtitle: "Real-time news, AI-summarized. Updated continuously.",
  cat_general: "Top Stories",
  cat_nation: "India",
  cat_technology: "Technology",
  cat_business: "Business",
  cat_sports: "Sports",
  cat_health: "Health",
  cat_entertainment: "Entertainment",
  cat_science: "Science",
  summarize: "Summarize",
  hide: "Hide",
  aiSummary: "AI Summary",
  saveArticle: "Save article",
  removeBookmark: "Remove bookmark",
  openArticle: "Open article",
  justNow: "just now",
  minAgo: "m ago",
  hourAgo: "h ago",
  dayAgo: "d ago",
  loadMore: "Load more",
  reachedEnd: "You've reached the end",
  noResults: "No results found",
  noResultsHint: "Try a different search or category.",
  couldntLoad: "Couldn't load news",
  retry: "Retry",
  savedToast: "Saved for later",
  removedToast: "Removed from saved",
  savedTitle: "Saved",
  savedAccent: "News",
  syncedToAccount: "Synced to your account",
  savedToDevice: "Saved to this device — sign in to sync",
  signInToSync: "Sign in to sync bookmarks across devices.",
  loading: "Loading…",
  nothingSaved: "Nothing saved yet",
  nothingSavedHint: "Tap the bookmark icon on any article to save it here.",
  browseNews: "Browse news",
  settingsTitle: "Settings",
  settingsDesc: "Personalize your NewsMania experience.",
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  language: "Language",
  langHint: "Non-English languages use AI translation for article content.",
  signInTab: "Sign in",
  createAccountTab: "Create account",
  email: "Email",
  password: "Password",
  username: "Username",
  createAccount: "Create account",
  welcomeBack: "Welcome back!",
  accountCreated: "Account created! Welcome to NewsMania.",
  passwordTooShort: "Password must be at least 6 characters",
  authFooter: "By continuing, you agree to use NewsMania AI's news aggregation service.",
};

const hi: UIStrings = {
  signIn: "साइन इन करें",
  signOut: "लॉग आउट",
  savedNews: "सहेजे गए समाचार",
  settings: "सेटिंग्स",
  account: "खाता",
  logoutConfirm: "NewsMania से लॉग आउट करें?",
  searchPlaceholder: "समाचार, विषय या स्रोत खोजें…",
  voiceStart: "वॉइस सर्च शुरू करें",
  voiceStop: "वॉइस सर्च रोकें",
  voiceUnsupported: "इस ब्राउज़र में वॉइस सर्च समर्थित नहीं है",
  clearSearch: "खोज साफ़ करें",
  resultsFor: "के लिए परिणाम",
  sortedRecent: "नवीनतम के अनुसार क्रमबद्ध",
  typeSomething: "ऊपर सर्च बार में कुछ टाइप करें।",
  todaysTopStories: "आज की",
  topStoriesAccent: "मुख्य खबरें",
  newsFromIndia: "समाचार",
  indiaAccent: "भारत से",
  homeSubtitle: "रीयल-टाइम समाचार, AI द्वारा सारांशित। लगातार अपडेट होते हैं।",
  cat_general: "मुख्य खबरें",
  cat_nation: "भारत",
  cat_technology: "तकनीक",
  cat_business: "व्यापार",
  cat_sports: "खेल",
  cat_health: "स्वास्थ्य",
  cat_entertainment: "मनोरंजन",
  cat_science: "विज्ञान",
  summarize: "सारांश",
  hide: "छिपाएँ",
  aiSummary: "AI सारांश",
  saveArticle: "लेख सहेजें",
  removeBookmark: "बुकमार्क हटाएँ",
  openArticle: "लेख खोलें",
  justNow: "अभी",
  minAgo: "मि. पहले",
  hourAgo: "घं. पहले",
  dayAgo: "दिन पहले",
  loadMore: "और लोड करें",
  reachedEnd: "आप अंत तक पहुँच गए हैं",
  noResults: "कोई परिणाम नहीं मिला",
  noResultsHint: "कोई दूसरी खोज या श्रेणी आज़माएँ।",
  couldntLoad: "समाचार लोड नहीं हो सका",
  retry: "पुनः प्रयास करें",
  savedToast: "बाद के लिए सहेजा गया",
  removedToast: "सहेजे गए से हटाया गया",
  savedTitle: "सहेजे गए",
  savedAccent: "समाचार",
  syncedToAccount: "आपके खाते से सिंक्ड",
  savedToDevice: "इस डिवाइस पर सहेजा गया — सिंक करने के लिए साइन इन करें",
  signInToSync: "डिवाइसों में बुकमार्क सिंक करने के लिए साइन इन करें।",
  loading: "लोड हो रहा है…",
  nothingSaved: "अभी तक कुछ भी सहेजा नहीं गया",
  nothingSavedHint: "किसी भी लेख पर बुकमार्क आइकन पर टैप करके यहाँ सहेजें।",
  browseNews: "समाचार ब्राउज़ करें",
  settingsTitle: "सेटिंग्स",
  settingsDesc: "अपने NewsMania अनुभव को निजीकृत करें।",
  theme: "थीम",
  light: "हल्की",
  dark: "गहरी",
  language: "भाषा",
  langHint: "अंग्रेज़ी के अलावा भाषाओं के लिए लेख सामग्री का AI अनुवाद होता है।",
  signInTab: "साइन इन",
  createAccountTab: "खाता बनाएँ",
  email: "ईमेल",
  password: "पासवर्ड",
  username: "उपयोगकर्ता नाम",
  createAccount: "खाता बनाएँ",
  welcomeBack: "वापस स्वागत है!",
  accountCreated: "खाता बना! NewsMania में आपका स्वागत है।",
  passwordTooShort: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए",
  authFooter: "जारी रखकर, आप NewsMania AI की समाचार सेवा के उपयोग से सहमत हैं।",
};

const mr: UIStrings = {
  signIn: "साइन इन",
  signOut: "लॉग आउट",
  savedNews: "जतन केलेल्या बातम्या",
  settings: "सेटिंग्ज",
  account: "खाते",
  logoutConfirm: "NewsMania मधून लॉग आउट करायचे?",
  searchPlaceholder: "बातम्या, विषय किंवा स्रोत शोधा…",
  voiceStart: "व्हॉइस सर्च सुरू करा",
  voiceStop: "व्हॉइस सर्च थांबवा",
  voiceUnsupported: "या ब्राउझरमध्ये व्हॉइस सर्च समर्थित नाही",
  clearSearch: "शोध साफ करा",
  resultsFor: "साठीचे निकाल",
  sortedRecent: "अलीकडील क्रमाने",
  typeSomething: "वरील सर्च बारमध्ये काहीतरी टाइप करा.",
  todaysTopStories: "आजच्या",
  topStoriesAccent: "मुख्य बातम्या",
  newsFromIndia: "बातम्या",
  indiaAccent: "भारतातून",
  homeSubtitle: "रिअल-टाइम बातम्या, AI सारांश. सतत अपडेट.",
  cat_general: "मुख्य बातम्या",
  cat_nation: "भारत",
  cat_technology: "तंत्रज्ञान",
  cat_business: "व्यवसाय",
  cat_sports: "क्रीडा",
  cat_health: "आरोग्य",
  cat_entertainment: "मनोरंजन",
  cat_science: "विज्ञान",
  summarize: "सारांश",
  hide: "लपवा",
  aiSummary: "AI सारांश",
  saveArticle: "लेख जतन करा",
  removeBookmark: "बुकमार्क काढा",
  openArticle: "लेख उघडा",
  justNow: "आत्ताच",
  minAgo: "मि. पूर्वी",
  hourAgo: "तास पूर्वी",
  dayAgo: "दिवस पूर्वी",
  loadMore: "अधिक लोड करा",
  reachedEnd: "तुम्ही शेवटी पोहोचलात",
  noResults: "कोणतेही निकाल नाहीत",
  noResultsHint: "वेगळा शोध किंवा वर्ग वापरून पहा.",
  couldntLoad: "बातम्या लोड होऊ शकल्या नाहीत",
  retry: "पुन्हा प्रयत्न करा",
  savedToast: "नंतरसाठी जतन केले",
  removedToast: "जतन केलेल्यांमधून काढले",
  savedTitle: "जतन केलेल्या",
  savedAccent: "बातम्या",
  syncedToAccount: "तुमच्या खात्याशी सिंक केले",
  savedToDevice: "या डिव्हाइसवर जतन — सिंकसाठी साइन इन करा",
  signInToSync: "डिव्हाइसेसमध्ये बुकमार्क सिंक करण्यासाठी साइन इन करा.",
  loading: "लोड होत आहे…",
  nothingSaved: "अद्याप काहीही जतन केलेले नाही",
  nothingSavedHint: "कोणत्याही लेखावर बुकमार्क आयकन वर टॅप करून जतन करा.",
  browseNews: "बातम्या ब्राउझ करा",
  settingsTitle: "सेटिंग्ज",
  settingsDesc: "तुमचा NewsMania अनुभव वैयक्तिक करा.",
  theme: "थीम",
  light: "हलकी",
  dark: "गडद",
  language: "भाषा",
  langHint: "इंग्रजी सोडून इतर भाषांसाठी लेखाची सामग्री AI ने अनुवादित होते.",
  signInTab: "साइन इन",
  createAccountTab: "खाते बनवा",
  email: "ईमेल",
  password: "पासवर्ड",
  username: "वापरकर्तानाव",
  createAccount: "खाते बनवा",
  welcomeBack: "पुन्हा स्वागत!",
  accountCreated: "खाते तयार! NewsMania मध्ये स्वागत.",
  passwordTooShort: "पासवर्ड किमान 6 अक्षरांचा हवा",
  authFooter: "पुढे जाऊन, तुम्ही NewsMania AI ची बातमी सेवा वापरण्यास सहमत आहात.",
};

const bn: UIStrings = {
  signIn: "সাইন ইন", signOut: "লগ আউট", savedNews: "সংরক্ষিত খবর", settings: "সেটিংস", account: "অ্যাকাউন্ট",
  logoutConfirm: "NewsMania থেকে লগ আউট করবেন?",
  searchPlaceholder: "খবর, বিষয় বা উৎস খুঁজুন…",
  voiceStart: "ভয়েস সার্চ শুরু করুন", voiceStop: "ভয়েস সার্চ থামান",
  voiceUnsupported: "এই ব্রাউজারে ভয়েস সার্চ সমর্থিত নয়",
  clearSearch: "অনুসন্ধান মুছুন", resultsFor: "এর জন্য ফলাফল",
  sortedRecent: "সাম্প্রতিক অনুযায়ী সাজানো",
  typeSomething: "উপরের সার্চ বারে কিছু টাইপ করুন।",
  todaysTopStories: "আজকের", topStoriesAccent: "শীর্ষ খবর",
  newsFromIndia: "খবর", indiaAccent: "ভারত থেকে",
  homeSubtitle: "রিয়েল-টাইম খবর, AI সারসংক্ষেপ। ক্রমাগত আপডেট।",
  cat_general: "শীর্ষ খবর", cat_nation: "ভারত", cat_technology: "প্রযুক্তি", cat_business: "ব্যবসা",
  cat_sports: "খেলা", cat_health: "স্বাস্থ্য", cat_entertainment: "বিনোদন", cat_science: "বিজ্ঞান",
  summarize: "সারসংক্ষেপ", hide: "লুকান", aiSummary: "AI সারসংক্ষেপ",
  saveArticle: "নিবন্ধ সংরক্ষণ", removeBookmark: "বুকমার্ক সরান", openArticle: "নিবন্ধ খুলুন",
  justNow: "এইমাত্র", minAgo: "মি. আগে", hourAgo: "ঘ. আগে", dayAgo: "দিন আগে",
  loadMore: "আরও লোড করুন", reachedEnd: "আপনি শেষে পৌঁছেছেন",
  noResults: "কোনো ফলাফল নেই", noResultsHint: "অন্য অনুসন্ধান বা বিভাগ চেষ্টা করুন।",
  couldntLoad: "খবর লোড করা যায়নি", retry: "আবার চেষ্টা",
  savedToast: "পরের জন্য সংরক্ষিত", removedToast: "সংরক্ষিত থেকে সরানো",
  savedTitle: "সংরক্ষিত", savedAccent: "খবর",
  syncedToAccount: "আপনার অ্যাকাউন্টে সিঙ্ক", savedToDevice: "এই ডিভাইসে সংরক্ষিত — সিঙ্কের জন্য সাইন ইন",
  signInToSync: "ডিভাইস জুড়ে বুকমার্ক সিঙ্ক করতে সাইন ইন করুন।",
  loading: "লোড হচ্ছে…", nothingSaved: "এখনো কিছু সংরক্ষিত নেই",
  nothingSavedHint: "যেকোনো নিবন্ধে বুকমার্ক আইকনে ট্যাপ করুন।",
  browseNews: "খবর ব্রাউজ করুন",
  settingsTitle: "সেটিংস", settingsDesc: "আপনার NewsMania অভিজ্ঞতা ব্যক্তিগত করুন।",
  theme: "থিম", light: "হালকা", dark: "অন্ধকার", language: "ভাষা",
  langHint: "ইংরেজি ছাড়া অন্য ভাষায় নিবন্ধের বিষয়বস্তু AI অনুবাদ ব্যবহার করে।",
  signInTab: "সাইন ইন", createAccountTab: "অ্যাকাউন্ট তৈরি করুন",
  email: "ইমেইল", password: "পাসওয়ার্ড", username: "ব্যবহারকারীর নাম",
  createAccount: "অ্যাকাউন্ট তৈরি করুন",
  welcomeBack: "আবার স্বাগতম!", accountCreated: "অ্যাকাউন্ট তৈরি হয়েছে! NewsMania-এ স্বাগতম।",
  passwordTooShort: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হতে হবে",
  authFooter: "চালিয়ে গেলে, আপনি NewsMania AI ব্যবহারে সম্মত হন।",
};

const ta: UIStrings = {
  signIn: "உள்நுழை", signOut: "வெளியேறு", savedNews: "சேமித்த செய்திகள்", settings: "அமைப்புகள்", account: "கணக்கு",
  logoutConfirm: "NewsMania-இலிருந்து வெளியேறவா?",
  searchPlaceholder: "செய்திகள், தலைப்புகள் அல்லது மூலங்களைத் தேடுங்கள்…",
  voiceStart: "குரல் தேடலைத் தொடங்கு", voiceStop: "குரல் தேடலை நிறுத்து",
  voiceUnsupported: "இந்த உலாவியில் குரல் தேடல் ஆதரிக்கப்படவில்லை",
  clearSearch: "தேடலை அழி", resultsFor: "க்கான முடிவுகள்",
  sortedRecent: "சமீபத்திய வரிசையில்",
  typeSomething: "மேலே உள்ள தேடல் பட்டியில் ஏதாவது தட்டச்சு செய்யவும்.",
  todaysTopStories: "இன்றைய", topStoriesAccent: "முக்கிய செய்திகள்",
  newsFromIndia: "செய்திகள்", indiaAccent: "இந்தியாவிலிருந்து",
  homeSubtitle: "நேரடி செய்திகள், AI சுருக்கம். தொடர்ந்து புதுப்பிக்கப்படுகிறது.",
  cat_general: "முக்கிய செய்திகள்", cat_nation: "இந்தியா", cat_technology: "தொழில்நுட்பம்", cat_business: "வணிகம்",
  cat_sports: "விளையாட்டு", cat_health: "ஆரோக்கியம்", cat_entertainment: "பொழுதுபோக்கு", cat_science: "அறிவியல்",
  summarize: "சுருக்கு", hide: "மறை", aiSummary: "AI சுருக்கம்",
  saveArticle: "கட்டுரையைச் சேமி", removeBookmark: "புத்தகக்குறியை அகற்று", openArticle: "கட்டுரையைத் திற",
  justNow: "இப்போதே", minAgo: "நி. முன்", hourAgo: "ம. முன்", dayAgo: "நா. முன்",
  loadMore: "மேலும் ஏற்று", reachedEnd: "முடிவை அடைந்துவிட்டீர்கள்",
  noResults: "முடிவுகள் இல்லை", noResultsHint: "வேறு தேடல் அல்லது பிரிவை முயற்சிக்கவும்.",
  couldntLoad: "செய்திகளை ஏற்ற முடியவில்லை", retry: "மீண்டும் முயற்சி",
  savedToast: "பின்னர் பார்க்க சேமிக்கப்பட்டது", removedToast: "சேமிப்பிலிருந்து அகற்றப்பட்டது",
  savedTitle: "சேமித்த", savedAccent: "செய்திகள்",
  syncedToAccount: "உங்கள் கணக்கில் ஒத்திசைக்கப்பட்டது", savedToDevice: "இந்த சாதனத்தில் சேமிக்கப்பட்டது — ஒத்திசைக்க உள்நுழையவும்",
  signInToSync: "சாதனங்களில் புத்தகக்குறிகளை ஒத்திசைக்க உள்நுழையவும்.",
  loading: "ஏற்றுகிறது…", nothingSaved: "இதுவரை எதுவும் சேமிக்கப்படவில்லை",
  nothingSavedHint: "எந்த கட்டுரையிலும் புத்தகக்குறி ஐகானைத் தட்டவும்.",
  browseNews: "செய்திகளை உலாவவும்",
  settingsTitle: "அமைப்புகள்", settingsDesc: "உங்கள் NewsMania அனுபவத்தை தனிப்பயனாக்கவும்.",
  theme: "தீம்", light: "வெளிச்சம்", dark: "இருண்ட", language: "மொழி",
  langHint: "ஆங்கிலம் அல்லாத மொழிகளுக்கு கட்டுரை உள்ளடக்கம் AI மொழிபெயர்ப்பைப் பயன்படுத்துகிறது.",
  signInTab: "உள்நுழை", createAccountTab: "கணக்கை உருவாக்கு",
  email: "மின்னஞ்சல்", password: "கடவுச்சொல்", username: "பயனர்பெயர்",
  createAccount: "கணக்கை உருவாக்கு",
  welcomeBack: "மீண்டும் வரவேற்கிறோம்!", accountCreated: "கணக்கு உருவாக்கப்பட்டது! NewsMania-க்கு வரவேற்கிறோம்.",
  passwordTooShort: "கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்",
  authFooter: "தொடர்வதன் மூலம், NewsMania AI பயன்படுத்த ஒப்புக்கொள்கிறீர்கள்.",
};

const te: UIStrings = {
  signIn: "సైన్ ఇన్", signOut: "లాగ్ అవుట్", savedNews: "సేవ్ చేసిన వార్తలు", settings: "సెట్టింగ్‌లు", account: "ఖాతా",
  logoutConfirm: "NewsMania నుండి లాగ్ అవుట్ చేయాలా?",
  searchPlaceholder: "వార్తలు, అంశాలు లేదా మూలాలను శోధించండి…",
  voiceStart: "వాయిస్ సెర్చ్ ప్రారంభించండి", voiceStop: "వాయిస్ సెర్చ్ ఆపండి",
  voiceUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ సెర్చ్ మద్దతు లేదు",
  clearSearch: "శోధనను క్లియర్ చేయండి", resultsFor: "కోసం ఫలితాలు",
  sortedRecent: "ఇటీవలి ప్రకారం", typeSomething: "పైన ఉన్న సెర్చ్ బార్‌లో ఏదైనా టైప్ చేయండి.",
  todaysTopStories: "నేటి", topStoriesAccent: "ముఖ్య కథనాలు",
  newsFromIndia: "వార్తలు", indiaAccent: "భారతదేశం నుండి",
  homeSubtitle: "రియల్-టైమ్ వార్తలు, AI సారాంశం. నిరంతరం నవీకరించబడుతుంది.",
  cat_general: "ముఖ్య కథనాలు", cat_nation: "భారతదేశం", cat_technology: "సాంకేతికత", cat_business: "వ్యాపారం",
  cat_sports: "క్రీడలు", cat_health: "ఆరోగ్యం", cat_entertainment: "వినోదం", cat_science: "సైన్స్",
  summarize: "సారాంశం", hide: "దాచు", aiSummary: "AI సారాంశం",
  saveArticle: "కథనాన్ని సేవ్ చేయండి", removeBookmark: "బుక్‌మార్క్ తొలగించు", openArticle: "కథనం తెరువు",
  justNow: "ఇప్పుడే", minAgo: "ని. క్రితం", hourAgo: "గం. క్రితం", dayAgo: "రోజు క్రితం",
  loadMore: "మరిన్ని లోడ్ చేయండి", reachedEnd: "మీరు చివరికి చేరుకున్నారు",
  noResults: "ఫలితాలు లేవు", noResultsHint: "వేరే శోధన లేదా వర్గం ప్రయత్నించండి.",
  couldntLoad: "వార్తలు లోడ్ చేయలేకపోయాం", retry: "మళ్లీ ప్రయత్నించు",
  savedToast: "తర్వాత కోసం సేవ్ చేయబడింది", removedToast: "సేవ్ నుండి తొలగించబడింది",
  savedTitle: "సేవ్ చేసిన", savedAccent: "వార్తలు",
  syncedToAccount: "మీ ఖాతాతో సింక్ చేయబడింది", savedToDevice: "ఈ పరికరంలో సేవ్ — సింక్ కోసం సైన్ ఇన్",
  signInToSync: "పరికరాల మధ్య బుక్‌మార్క్‌లను సింక్ చేయడానికి సైన్ ఇన్ చేయండి.",
  loading: "లోడ్ అవుతోంది…", nothingSaved: "ఇంకా ఏమీ సేవ్ చేయలేదు",
  nothingSavedHint: "ఏదైనా కథనంపై బుక్‌మార్క్ ఐకాన్‌ను నొక్కండి.",
  browseNews: "వార్తలను బ్రౌజ్ చేయండి",
  settingsTitle: "సెట్టింగ్‌లు", settingsDesc: "మీ NewsMania అనుభవాన్ని వ్యక్తిగతీకరించండి.",
  theme: "థీమ్", light: "లైట్", dark: "డార్క్", language: "భాష",
  langHint: "ఇంగ్లీష్ కాని భాషలకు కథన కంటెంట్ AI అనువాదాన్ని ఉపయోగిస్తుంది.",
  signInTab: "సైన్ ఇన్", createAccountTab: "ఖాతా సృష్టించండి",
  email: "ఇమెయిల్", password: "పాస్‌వర్డ్", username: "వినియోగదారు పేరు",
  createAccount: "ఖాతా సృష్టించండి",
  welcomeBack: "తిరిగి స్వాగతం!", accountCreated: "ఖాతా సృష్టించబడింది! NewsManiaకు స్వాగతం.",
  passwordTooShort: "పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి",
  authFooter: "కొనసాగించడం ద్వారా, మీరు NewsMania AI ఉపయోగించడానికి అంగీకరిస్తున్నారు.",
};

const gu: UIStrings = {
  signIn: "સાઇન ઇન", signOut: "લૉગ આઉટ", savedNews: "સેવ કરેલ સમાચાર", settings: "સેટિંગ્સ", account: "એકાઉન્ટ",
  logoutConfirm: "NewsMania માંથી લૉગ આઉટ કરશો?",
  searchPlaceholder: "સમાચાર, વિષય અથવા સ્રોત શોધો…",
  voiceStart: "વૉઇસ સર્ચ શરૂ કરો", voiceStop: "વૉઇસ સર્ચ બંધ કરો",
  voiceUnsupported: "આ બ્રાઉઝરમાં વૉઇસ સર્ચ સપોર્ટેડ નથી",
  clearSearch: "શોધ સાફ કરો", resultsFor: "માટેના પરિણામો",
  sortedRecent: "તાજેતરના ક્રમે", typeSomething: "ઉપરના સર્ચ બારમાં કંઈક ટાઇપ કરો.",
  todaysTopStories: "આજના", topStoriesAccent: "મુખ્ય સમાચાર",
  newsFromIndia: "સમાચાર", indiaAccent: "ભારતમાંથી",
  homeSubtitle: "રીઅલ-ટાઇમ સમાચાર, AI સારાંશ. સતત અપડેટ થાય છે.",
  cat_general: "મુખ્ય સમાચાર", cat_nation: "ભારત", cat_technology: "ટેકનોલોજી", cat_business: "વ્યવસાય",
  cat_sports: "રમતગમત", cat_health: "આરોગ્ય", cat_entertainment: "મનોરંજન", cat_science: "વિજ્ઞાન",
  summarize: "સારાંશ", hide: "છુપાવો", aiSummary: "AI સારાંશ",
  saveArticle: "લેખ સેવ કરો", removeBookmark: "બુકમાર્ક દૂર કરો", openArticle: "લેખ ખોલો",
  justNow: "હમણાં જ", minAgo: "મિ. પહેલાં", hourAgo: "ક. પહેલાં", dayAgo: "દિવસ પહેલાં",
  loadMore: "વધુ લોડ કરો", reachedEnd: "તમે અંત સુધી પહોંચી ગયા છો",
  noResults: "કોઈ પરિણામ નથી", noResultsHint: "બીજી શોધ અથવા શ્રેણી અજમાવો.",
  couldntLoad: "સમાચાર લોડ થઈ શક્યા નથી", retry: "ફરી પ્રયાસ કરો",
  savedToast: "પછી માટે સેવ કર્યું", removedToast: "સેવ કરેલમાંથી દૂર કર્યું",
  savedTitle: "સેવ કરેલ", savedAccent: "સમાચાર",
  syncedToAccount: "તમારા એકાઉન્ટ સાથે સિંક", savedToDevice: "આ ઉપકરણ પર સેવ — સિંક માટે સાઇન ઇન કરો",
  signInToSync: "ઉપકરણો વચ્ચે બુકમાર્ક સિંક કરવા સાઇન ઇન કરો.",
  loading: "લોડ થઈ રહ્યું છે…", nothingSaved: "હજી કંઈ સેવ કર્યું નથી",
  nothingSavedHint: "કોઈપણ લેખ પર બુકમાર્ક આઇકન પર ટૅપ કરો.",
  browseNews: "સમાચાર બ્રાઉઝ કરો",
  settingsTitle: "સેટિંગ્સ", settingsDesc: "તમારા NewsMania અનુભવને વ્યક્તિગત કરો.",
  theme: "થીમ", light: "લાઇટ", dark: "ડાર્ક", language: "ભાષા",
  langHint: "બિન-અંગ્રેજી ભાષાઓ માટે લેખ સામગ્રી AI અનુવાદનો ઉપયોગ કરે છે.",
  signInTab: "સાઇન ઇન", createAccountTab: "એકાઉન્ટ બનાવો",
  email: "ઇમેઇલ", password: "પાસવર્ડ", username: "વપરાશકર્તા નામ",
  createAccount: "એકાઉન્ટ બનાવો",
  welcomeBack: "પાછા સ્વાગત છે!", accountCreated: "એકાઉન્ટ બન્યું! NewsManiaમાં સ્વાગત.",
  passwordTooShort: "પાસવર્ડ ઓછામાં ઓછા 6 અક્ષરોનો હોવો જોઈએ",
  authFooter: "ચાલુ રાખીને, તમે NewsMania AI નો ઉપયોગ કરવા સંમત થાઓ છો.",
};

const kn: UIStrings = {
  signIn: "ಸೈನ್ ಇನ್", signOut: "ಲಾಗ್ ಔಟ್", savedNews: "ಉಳಿಸಿದ ಸುದ್ದಿ", settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು", account: "ಖಾತೆ",
  logoutConfirm: "NewsMania ನಿಂದ ಲಾಗ್ ಔಟ್ ಮಾಡಬೇಕೇ?",
  searchPlaceholder: "ಸುದ್ದಿ, ವಿಷಯಗಳು ಅಥವಾ ಮೂಲಗಳನ್ನು ಹುಡುಕಿ…",
  voiceStart: "ಧ್ವನಿ ಹುಡುಕಾಟ ಪ್ರಾರಂಭಿಸಿ", voiceStop: "ಧ್ವನಿ ಹುಡುಕಾಟ ನಿಲ್ಲಿಸಿ",
  voiceUnsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಹುಡುಕಾಟ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ",
  clearSearch: "ಹುಡುಕಾಟ ಅಳಿಸಿ", resultsFor: "ಗಾಗಿ ಫಲಿತಾಂಶಗಳು",
  sortedRecent: "ಇತ್ತೀಚಿನ ಪ್ರಕಾರ", typeSomething: "ಮೇಲಿನ ಹುಡುಕಾಟ ಪಟ್ಟಿಯಲ್ಲಿ ಏನಾದರೂ ಟೈಪ್ ಮಾಡಿ.",
  todaysTopStories: "ಇಂದಿನ", topStoriesAccent: "ಮುಖ್ಯ ಸುದ್ದಿ",
  newsFromIndia: "ಸುದ್ದಿ", indiaAccent: "ಭಾರತದಿಂದ",
  homeSubtitle: "ರಿಯಲ್-ಟೈಮ್ ಸುದ್ದಿ, AI ಸಾರಾಂಶ. ನಿರಂತರವಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ.",
  cat_general: "ಮುಖ್ಯ ಸುದ್ದಿ", cat_nation: "ಭಾರತ", cat_technology: "ತಂತ್ರಜ್ಞಾನ", cat_business: "ವ್ಯಾಪಾರ",
  cat_sports: "ಕ್ರೀಡೆ", cat_health: "ಆರೋಗ್ಯ", cat_entertainment: "ಮನರಂಜನೆ", cat_science: "ವಿಜ್ಞಾನ",
  summarize: "ಸಾರಾಂಶ", hide: "ಮರೆಮಾಡಿ", aiSummary: "AI ಸಾರಾಂಶ",
  saveArticle: "ಲೇಖನ ಉಳಿಸಿ", removeBookmark: "ಬುಕ್‌ಮಾರ್ಕ್ ತೆಗೆದುಹಾಕಿ", openArticle: "ಲೇಖನ ತೆರೆಯಿರಿ",
  justNow: "ಈಗಷ್ಟೇ", minAgo: "ನಿ. ಹಿಂದೆ", hourAgo: "ಗಂ. ಹಿಂದೆ", dayAgo: "ದಿನ ಹಿಂದೆ",
  loadMore: "ಇನ್ನಷ್ಟು ಲೋಡ್ ಮಾಡಿ", reachedEnd: "ನೀವು ಕೊನೆಯನ್ನು ತಲುಪಿದ್ದೀರಿ",
  noResults: "ಫಲಿತಾಂಶಗಳಿಲ್ಲ", noResultsHint: "ಬೇರೆ ಹುಡುಕಾಟ ಅಥವಾ ವರ್ಗ ಪ್ರಯತ್ನಿಸಿ.",
  couldntLoad: "ಸುದ್ದಿ ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ", retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
  savedToast: "ನಂತರಕ್ಕಾಗಿ ಉಳಿಸಲಾಗಿದೆ", removedToast: "ಉಳಿಸಿದ್ದರಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
  savedTitle: "ಉಳಿಸಿದ", savedAccent: "ಸುದ್ದಿ",
  syncedToAccount: "ನಿಮ್ಮ ಖಾತೆಗೆ ಸಿಂಕ್ ಮಾಡಲಾಗಿದೆ", savedToDevice: "ಈ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ — ಸಿಂಕ್ ಮಾಡಲು ಸೈನ್ ಇನ್ ಮಾಡಿ",
  signInToSync: "ಸಾಧನಗಳಾದ್ಯಂತ ಬುಕ್‌ಮಾರ್ಕ್‌ಗಳನ್ನು ಸಿಂಕ್ ಮಾಡಲು ಸೈನ್ ಇನ್ ಮಾಡಿ.",
  loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ…", nothingSaved: "ಇನ್ನೂ ಏನೂ ಉಳಿಸಿಲ್ಲ",
  nothingSavedHint: "ಯಾವುದೇ ಲೇಖನದಲ್ಲಿ ಬುಕ್‌ಮಾರ್ಕ್ ಐಕಾನ್ ಟ್ಯಾಪ್ ಮಾಡಿ.",
  browseNews: "ಸುದ್ದಿ ಬ್ರೌಸ್ ಮಾಡಿ",
  settingsTitle: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು", settingsDesc: "ನಿಮ್ಮ NewsMania ಅನುಭವವನ್ನು ವೈಯಕ್ತೀಕರಿಸಿ.",
  theme: "ಥೀಮ್", light: "ಲೈಟ್", dark: "ಡಾರ್ಕ್", language: "ಭಾಷೆ",
  langHint: "ಇಂಗ್ಲಿಷೇತರ ಭಾಷೆಗಳಿಗೆ ಲೇಖನ ವಿಷಯಕ್ಕೆ AI ಅನುವಾದ ಬಳಸಲಾಗುತ್ತದೆ.",
  signInTab: "ಸೈನ್ ಇನ್", createAccountTab: "ಖಾತೆ ರಚಿಸಿ",
  email: "ಇಮೇಲ್", password: "ಪಾಸ್‌ವರ್ಡ್", username: "ಬಳಕೆದಾರ ಹೆಸರು",
  createAccount: "ಖಾತೆ ರಚಿಸಿ",
  welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ!", accountCreated: "ಖಾತೆ ರಚಿಸಲಾಗಿದೆ! NewsManiaಗೆ ಸ್ವಾಗತ.",
  passwordTooShort: "ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳಾಗಿರಬೇಕು",
  authFooter: "ಮುಂದುವರಿಸುವ ಮೂಲಕ, ನೀವು NewsMania AI ಬಳಸಲು ಒಪ್ಪುತ್ತೀರಿ.",
};

const ml: UIStrings = {
  signIn: "സൈൻ ഇൻ", signOut: "ലോഗ് ഔട്ട്", savedNews: "സേവ് ചെയ്ത വാർത്തകൾ", settings: "ക്രമീകരണങ്ങൾ", account: "അക്കൗണ്ട്",
  logoutConfirm: "NewsMania-ൽ നിന്ന് ലോഗ് ഔട്ട് ചെയ്യണോ?",
  searchPlaceholder: "വാർത്തകൾ, വിഷയങ്ങൾ അല്ലെങ്കിൽ ഉറവിടങ്ങൾ തിരയുക…",
  voiceStart: "വോയ്സ് സെർച്ച് ആരംഭിക്കുക", voiceStop: "വോയ്സ് സെർച്ച് നിർത്തുക",
  voiceUnsupported: "ഈ ബ്രൗസറിൽ വോയ്സ് സെർച്ച് പിന്തുണയ്ക്കുന്നില്ല",
  clearSearch: "തിരയൽ മായ്ക്കുക", resultsFor: "ഫലങ്ങൾ",
  sortedRecent: "ഏറ്റവും പുതിയത് ആദ്യം", typeSomething: "മുകളിലെ സെർച്ച് ബാറിൽ എന്തെങ്കിലും ടൈപ്പ് ചെയ്യുക.",
  todaysTopStories: "ഇന്നത്തെ", topStoriesAccent: "പ്രധാന വാർത്തകൾ",
  newsFromIndia: "വാർത്തകൾ", indiaAccent: "ഇന്ത്യയിൽ നിന്ന്",
  homeSubtitle: "തത്സമയ വാർത്തകൾ, AI സംഗ്രഹം. നിരന്തരം അപ്ഡേറ്റ് ചെയ്യപ്പെടുന്നു.",
  cat_general: "പ്രധാന വാർത്തകൾ", cat_nation: "ഇന്ത്യ", cat_technology: "സാങ്കേതികവിദ്യ", cat_business: "ബിസിനസ്",
  cat_sports: "സ്പോർട്സ്", cat_health: "ആരോഗ്യം", cat_entertainment: "വിനോദം", cat_science: "ശാസ്ത്രം",
  summarize: "സംഗ്രഹിക്കുക", hide: "മറയ്ക്കുക", aiSummary: "AI സംഗ്രഹം",
  saveArticle: "ലേഖനം സേവ് ചെയ്യുക", removeBookmark: "ബുക്ക്മാർക്ക് നീക്കം ചെയ്യുക", openArticle: "ലേഖനം തുറക്കുക",
  justNow: "ഇപ്പോൾ", minAgo: "മി. മുമ്പ്", hourAgo: "മ. മുമ്പ്", dayAgo: "ദിവ. മുമ്പ്",
  loadMore: "കൂടുതൽ ലോഡ് ചെയ്യുക", reachedEnd: "നിങ്ങൾ അവസാനത്തിൽ എത്തി",
  noResults: "ഫലങ്ങളൊന്നുമില്ല", noResultsHint: "മറ്റൊരു തിരയൽ അല്ലെങ്കിൽ വിഭാഗം പരീക്ഷിക്കുക.",
  couldntLoad: "വാർത്തകൾ ലോഡ് ചെയ്യാനായില്ല", retry: "വീണ്ടും ശ്രമിക്കുക",
  savedToast: "പിന്നീടത്തേക്ക് സേവ് ചെയ്തു", removedToast: "സേവ് ചെയ്തവയിൽ നിന്ന് നീക്കം ചെയ്തു",
  savedTitle: "സേവ് ചെയ്ത", savedAccent: "വാർത്തകൾ",
  syncedToAccount: "നിങ്ങളുടെ അക്കൗണ്ടിലേക്ക് സിങ്ക് ചെയ്തു", savedToDevice: "ഈ ഉപകരണത്തിൽ സേവ് — സിങ്കിന് സൈൻ ഇൻ",
  signInToSync: "ഉപകരണങ്ങളിലുടനീളം ബുക്ക്മാർക്കുകൾ സിങ്ക് ചെയ്യാൻ സൈൻ ഇൻ ചെയ്യുക.",
  loading: "ലോഡ് ചെയ്യുന്നു…", nothingSaved: "ഇതുവരെ ഒന്നും സേവ് ചെയ്തിട്ടില്ല",
  nothingSavedHint: "ഏതെങ്കിലും ലേഖനത്തിൽ ബുക്ക്മാർക്ക് ഐക്കൺ ടാപ്പ് ചെയ്യുക.",
  browseNews: "വാർത്തകൾ ബ്രൗസ് ചെയ്യുക",
  settingsTitle: "ക്രമീകരണങ്ങൾ", settingsDesc: "നിങ്ങളുടെ NewsMania അനുഭവം വ്യക്തിഗതമാക്കുക.",
  theme: "തീം", light: "ലൈറ്റ്", dark: "ഡാർക്ക്", language: "ഭാഷ",
  langHint: "ഇംഗ്ലീഷ് അല്ലാത്ത ഭാഷകൾക്ക് ലേഖന ഉള്ളടക്കം AI വിവർത്തനം ഉപയോഗിക്കുന്നു.",
  signInTab: "സൈൻ ഇൻ", createAccountTab: "അക്കൗണ്ട് സൃഷ്ടിക്കുക",
  email: "ഇമെയിൽ", password: "പാസ്‌വേഡ്", username: "ഉപയോക്തൃനാമം",
  createAccount: "അക്കൗണ്ട് സൃഷ്ടിക്കുക",
  welcomeBack: "വീണ്ടും സ്വാഗതം!", accountCreated: "അക്കൗണ്ട് സൃഷ്ടിച്ചു! NewsMania-ലേക്ക് സ്വാഗതം.",
  passwordTooShort: "പാസ്‌വേഡിന് കുറഞ്ഞത് 6 അക്ഷരങ്ങൾ വേണം",
  authFooter: "തുടരുന്നതിലൂടെ, NewsMania AI ഉപയോഗിക്കാൻ നിങ്ങൾ സമ്മതിക്കുന്നു.",
};

const pa: UIStrings = {
  signIn: "ਸਾਈਨ ਇਨ", signOut: "ਲੌਗ ਆਉਟ", savedNews: "ਸੰਭਾਲੀਆਂ ਖ਼ਬਰਾਂ", settings: "ਸੈਟਿੰਗਾਂ", account: "ਖਾਤਾ",
  logoutConfirm: "NewsMania ਤੋਂ ਲੌਗ ਆਉਟ ਕਰੀਏ?",
  searchPlaceholder: "ਖ਼ਬਰਾਂ, ਵਿਸ਼ੇ ਜਾਂ ਸਰੋਤ ਖੋਜੋ…",
  voiceStart: "ਵੌਇਸ ਖੋਜ ਸ਼ੁਰੂ ਕਰੋ", voiceStop: "ਵੌਇਸ ਖੋਜ ਰੋਕੋ",
  voiceUnsupported: "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੌਇਸ ਖੋਜ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ",
  clearSearch: "ਖੋਜ ਸਾਫ਼ ਕਰੋ", resultsFor: "ਲਈ ਨਤੀਜੇ",
  sortedRecent: "ਨਵੀਨਤਮ ਅਨੁਸਾਰ ਛਾਂਟੇ", typeSomething: "ਉੱਪਰਲੀ ਖੋਜ ਪੱਟੀ ਵਿੱਚ ਕੁਝ ਟਾਈਪ ਕਰੋ।",
  todaysTopStories: "ਅੱਜ ਦੀਆਂ", topStoriesAccent: "ਮੁੱਖ ਖ਼ਬਰਾਂ",
  newsFromIndia: "ਖ਼ਬਰਾਂ", indiaAccent: "ਭਾਰਤ ਤੋਂ",
  homeSubtitle: "ਰੀਅਲ-ਟਾਈਮ ਖ਼ਬਰਾਂ, AI ਸਾਰ। ਲਗਾਤਾਰ ਅੱਪਡੇਟ।",
  cat_general: "ਮੁੱਖ ਖ਼ਬਰਾਂ", cat_nation: "ਭਾਰਤ", cat_technology: "ਤਕਨਾਲੋਜੀ", cat_business: "ਕਾਰੋਬਾਰ",
  cat_sports: "ਖੇਡਾਂ", cat_health: "ਸਿਹਤ", cat_entertainment: "ਮਨੋਰੰਜਨ", cat_science: "ਵਿਗਿਆਨ",
  summarize: "ਸਾਰ", hide: "ਲੁਕਾਓ", aiSummary: "AI ਸਾਰ",
  saveArticle: "ਲੇਖ ਸੰਭਾਲੋ", removeBookmark: "ਬੁੱਕਮਾਰਕ ਹਟਾਓ", openArticle: "ਲੇਖ ਖੋਲ੍ਹੋ",
  justNow: "ਹੁਣੇ", minAgo: "ਮਿੰ. ਪਹਿਲਾਂ", hourAgo: "ਘੰ. ਪਹਿਲਾਂ", dayAgo: "ਦਿਨ ਪਹਿਲਾਂ",
  loadMore: "ਹੋਰ ਲੋਡ ਕਰੋ", reachedEnd: "ਤੁਸੀਂ ਅੰਤ ਤੱਕ ਪਹੁੰਚ ਗਏ ਹੋ",
  noResults: "ਕੋਈ ਨਤੀਜਾ ਨਹੀਂ", noResultsHint: "ਵੱਖਰੀ ਖੋਜ ਜਾਂ ਸ਼੍ਰੇਣੀ ਅਜ਼ਮਾਓ।",
  couldntLoad: "ਖ਼ਬਰਾਂ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੀਆਂ", retry: "ਮੁੜ ਕੋਸ਼ਿਸ਼",
  savedToast: "ਬਾਅਦ ਲਈ ਸੰਭਾਲਿਆ", removedToast: "ਸੰਭਾਲੇ ਤੋਂ ਹਟਾਇਆ",
  savedTitle: "ਸੰਭਾਲੀਆਂ", savedAccent: "ਖ਼ਬਰਾਂ",
  syncedToAccount: "ਤੁਹਾਡੇ ਖਾਤੇ ਨਾਲ ਸਿੰਕ", savedToDevice: "ਇਸ ਡਿਵਾਈਸ 'ਤੇ ਸੰਭਾਲਿਆ — ਸਿੰਕ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ",
  signInToSync: "ਡਿਵਾਈਸਾਂ ਵਿੱਚ ਬੁੱਕਮਾਰਕ ਸਿੰਕ ਕਰਨ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ।",
  loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…", nothingSaved: "ਅਜੇ ਕੁਝ ਵੀ ਸੰਭਾਲਿਆ ਨਹੀਂ",
  nothingSavedHint: "ਕਿਸੇ ਵੀ ਲੇਖ 'ਤੇ ਬੁੱਕਮਾਰਕ ਆਈਕਨ ਟੈਪ ਕਰੋ।",
  browseNews: "ਖ਼ਬਰਾਂ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
  settingsTitle: "ਸੈਟਿੰਗਾਂ", settingsDesc: "ਆਪਣੇ NewsMania ਅਨੁਭਵ ਨੂੰ ਨਿੱਜੀ ਬਣਾਓ।",
  theme: "ਥੀਮ", light: "ਲਾਈਟ", dark: "ਡਾਰਕ", language: "ਭਾਸ਼ਾ",
  langHint: "ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਇਲਾਵਾ ਭਾਸ਼ਾਵਾਂ ਲਈ ਲੇਖ ਸਮੱਗਰੀ AI ਅਨੁਵਾਦ ਵਰਤਦੀ ਹੈ।",
  signInTab: "ਸਾਈਨ ਇਨ", createAccountTab: "ਖਾਤਾ ਬਣਾਓ",
  email: "ਈਮੇਲ", password: "ਪਾਸਵਰਡ", username: "ਯੂਜ਼ਰਨੇਮ",
  createAccount: "ਖਾਤਾ ਬਣਾਓ",
  welcomeBack: "ਮੁੜ ਸੁਆਗਤ!", accountCreated: "ਖਾਤਾ ਬਣਿਆ! NewsMania ਵਿੱਚ ਸੁਆਗਤ।",
  passwordTooShort: "ਪਾਸਵਰਡ ਘੱਟੋ-ਘੱਟ 6 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ",
  authFooter: "ਜਾਰੀ ਰੱਖਣ ਨਾਲ, ਤੁਸੀਂ NewsMania AI ਵਰਤਣ ਲਈ ਸਹਿਮਤ ਹੋ।",
};

const or: UIStrings = {
  signIn: "ସାଇନ୍ ଇନ୍", signOut: "ଲଗ୍ ଆଉଟ୍", savedNews: "ସଞ୍ଚିତ ଖବର", settings: "ସେଟିଂସ୍", account: "ଆକାଉଣ୍ଟ୍",
  logoutConfirm: "NewsMania ରୁ ଲଗ୍ ଆଉଟ୍ କରିବେ?",
  searchPlaceholder: "ଖବର, ବିଷୟ କିମ୍ବା ସ୍ରୋତ ଖୋଜନ୍ତୁ…",
  voiceStart: "ଭଏସ୍ ସର୍ଚ୍ଚ ଆରମ୍ଭ", voiceStop: "ଭଏସ୍ ସର୍ଚ୍ଚ ବନ୍ଦ",
  voiceUnsupported: "ଏହି ବ୍ରାଉଜରରେ ଭଏସ୍ ସର୍ଚ୍ଚ ସମର୍ଥିତ ନୁହେଁ",
  clearSearch: "ଖୋଜା ସଫା", resultsFor: "ପାଇଁ ଫଳାଫଳ",
  sortedRecent: "ସଦ୍ୟତମ ଅନୁସାରେ", typeSomething: "ଉପର ସର୍ଚ୍ଚ ବାରରେ କିଛି ଟାଇପ୍ କରନ୍ତୁ।",
  todaysTopStories: "ଆଜିର", topStoriesAccent: "ମୁଖ୍ୟ ଖବର",
  newsFromIndia: "ଖବର", indiaAccent: "ଭାରତରୁ",
  homeSubtitle: "ରିଅଲ୍-ଟାଇମ୍ ଖବର, AI ସାରାଂଶ। ନିରନ୍ତର ଅପଡେଟ୍।",
  cat_general: "ମୁଖ୍ୟ ଖବର", cat_nation: "ଭାରତ", cat_technology: "ପ୍ରଯୁକ୍ତି", cat_business: "ବ୍ୟବସାୟ",
  cat_sports: "କ୍ରୀଡ଼ା", cat_health: "ସ୍ୱାସ୍ଥ୍ୟ", cat_entertainment: "ମନୋରଞ୍ଜନ", cat_science: "ବିଜ୍ଞାନ",
  summarize: "ସାରାଂଶ", hide: "ଲୁଚାନ୍ତୁ", aiSummary: "AI ସାରାଂଶ",
  saveArticle: "ଲେଖା ସଞ୍ଚୟ", removeBookmark: "ବୁକମାର୍କ ହଟାନ୍ତୁ", openArticle: "ଲେଖା ଖୋଲନ୍ତୁ",
  justNow: "ଏବେ", minAgo: "ମି. ପୂର୍ବେ", hourAgo: "ଘ. ପୂର୍ବେ", dayAgo: "ଦିନ ପୂର୍ବେ",
  loadMore: "ଅଧିକ ଲୋଡ୍", reachedEnd: "ଆପଣ ଶେଷରେ ପହଞ୍ଚିଲେ",
  noResults: "କୌଣସି ଫଳାଫଳ ନାହିଁ", noResultsHint: "ଭିନ୍ନ ଖୋଜା କିମ୍ବା ବର୍ଗ ଚେଷ୍ଟା କରନ୍ତୁ।",
  couldntLoad: "ଖବର ଲୋଡ୍ ହୋଇପାରିଲା ନାହିଁ", retry: "ପୁଣି ଚେଷ୍ଟା",
  savedToast: "ପରେ ପାଇଁ ସଞ୍ଚିତ", removedToast: "ସଞ୍ଚିତରୁ ହଟାଗଲା",
  savedTitle: "ସଞ୍ଚିତ", savedAccent: "ଖବର",
  syncedToAccount: "ଆପଣଙ୍କ ଆକାଉଣ୍ଟ ସହ ସିଙ୍କ", savedToDevice: "ଏହି ଡିଭାଇସରେ ସଞ୍ଚିତ — ସିଙ୍କ ପାଇଁ ସାଇନ୍ ଇନ୍",
  signInToSync: "ଡିଭାଇସ ମଧ୍ୟରେ ବୁକମାର୍କ ସିଙ୍କ କରିବାକୁ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ।",
  loading: "ଲୋଡ୍ ହେଉଛି…", nothingSaved: "ଏପର୍ଯ୍ୟନ୍ତ କିଛି ସଞ୍ଚିତ ନାହିଁ",
  nothingSavedHint: "ଯେକୌଣସି ଲେଖାରେ ବୁକମାର୍କ ଆଇକନ୍ ଟ୍ୟାପ୍ କରନ୍ତୁ।",
  browseNews: "ଖବର ବ୍ରାଉଜ୍ କରନ୍ତୁ",
  settingsTitle: "ସେଟିଂସ୍", settingsDesc: "ଆପଣଙ୍କ NewsMania ଅନୁଭୂତି ବ୍ୟକ୍ତିଗତ କରନ୍ତୁ।",
  theme: "ଥିମ୍", light: "ଲାଇଟ୍", dark: "ଡାର୍କ", language: "ଭାଷା",
  langHint: "ଇଂରାଜୀ ବ୍ୟତୀତ ଭାଷା ପାଇଁ ଲେଖା ବିଷୟବସ୍ତୁ AI ଅନୁବାଦ ବ୍ୟବହାର କରେ।",
  signInTab: "ସାଇନ୍ ଇନ୍", createAccountTab: "ଆକାଉଣ୍ଟ୍ ତିଆରି କରନ୍ତୁ",
  email: "ଇମେଲ୍", password: "ପାସୱର୍ଡ", username: "ୟୁଜରନେମ୍",
  createAccount: "ଆକାଉଣ୍ଟ୍ ତିଆରି",
  welcomeBack: "ପୁଣି ସ୍ୱାଗତ!", accountCreated: "ଆକାଉଣ୍ଟ୍ ତିଆରି ହେଲା!",
  passwordTooShort: "ପାସୱର୍ଡ ଅତି କମରେ ୬ ଅକ୍ଷର ହେବା ଆବଶ୍ୟକ",
  authFooter: "ଜାରି ରଖି, ଆପଣ NewsMania AI ବ୍ୟବହାର କରିବାକୁ ସମ୍ମତ ହୁଅନ୍ତି।",
};

const as: UIStrings = {
  signIn: "ছাইন ইন", signOut: "লগ আউট", savedNews: "সংৰক্ষিত বাতৰি", settings: "ছেটিংছ", account: "একাউণ্ট",
  logoutConfirm: "NewsMania ৰ পৰা লগ আউট কৰিবনে?",
  searchPlaceholder: "বাতৰি, বিষয় বা উৎস বিচাৰক…",
  voiceStart: "ভইচ ছাৰ্চ আৰম্ভ", voiceStop: "ভইচ ছাৰ্চ বন্ধ",
  voiceUnsupported: "এই ব্ৰাউজাৰত ভইচ ছাৰ্চ সমৰ্থিত নহয়",
  clearSearch: "অনুসন্ধান পৰিষ্কাৰ", resultsFor: "ৰ বাবে ফলাফল",
  sortedRecent: "শেহতীয়া অনুসৰি", typeSomething: "ওপৰৰ ছাৰ্চ বাৰত কিবা টাইপ কৰক।",
  todaysTopStories: "আজিৰ", topStoriesAccent: "মুখ্য বাতৰি",
  newsFromIndia: "বাতৰি", indiaAccent: "ভাৰতৰ পৰা",
  homeSubtitle: "ৰিয়েল-টাইম বাতৰি, AI সাৰাংশ। নিৰন্তৰ আপডেট।",
  cat_general: "মুখ্য বাতৰি", cat_nation: "ভাৰত", cat_technology: "প্ৰযুক্তি", cat_business: "ব্যৱসায়",
  cat_sports: "ক্ৰীড়া", cat_health: "স্বাস্থ্য", cat_entertainment: "মনোৰঞ্জন", cat_science: "বিজ্ঞান",
  summarize: "সাৰাংশ", hide: "লুকুৱাওক", aiSummary: "AI সাৰাংশ",
  saveArticle: "প্ৰবন্ধ সংৰক্ষণ", removeBookmark: "বুকমাৰ্ক আঁতৰাওক", openArticle: "প্ৰবন্ধ খোলক",
  justNow: "এতিয়াই", minAgo: "মি. পূৰ্বে", hourAgo: "ঘ. পূৰ্বে", dayAgo: "দিন পূৰ্বে",
  loadMore: "অধিক লোড", reachedEnd: "আপুনি শেষলৈ পাইছে",
  noResults: "কোনো ফলাফল নাই", noResultsHint: "অন্য অনুসন্ধান বা শ্ৰেণী চেষ্টা কৰক।",
  couldntLoad: "বাতৰি লোড কৰিব নোৱাৰিলে", retry: "পুনৰ চেষ্টা",
  savedToast: "পিছৰ বাবে সংৰক্ষিত", removedToast: "সংৰক্ষিতৰ পৰা আঁতৰোৱা হ’ল",
  savedTitle: "সংৰক্ষিত", savedAccent: "বাতৰি",
  syncedToAccount: "আপোনাৰ একাউণ্টৰ সৈতে ছিংক", savedToDevice: "এই ডিভাইচত সংৰক্ষিত — ছিংকৰ বাবে ছাইন ইন",
  signInToSync: "ডিভাইচসমূহৰ মাজত বুকমাৰ্ক ছিংক কৰিবলৈ ছাইন ইন কৰক।",
  loading: "লোড হৈ আছে…", nothingSaved: "এতিয়ালৈ একো সংৰক্ষণ কৰা নাই",
  nothingSavedHint: "যিকোনো প্ৰবন্ধত বুকমাৰ্ক আইকন টেপ কৰক।",
  browseNews: "বাতৰি ব্ৰাউজ কৰক",
  settingsTitle: "ছেটিংছ", settingsDesc: "আপোনাৰ NewsMania অভিজ্ঞতা ব্যক্তিগত কৰক।",
  theme: "থীম", light: "লাইট", dark: "ডাৰ্ক", language: "ভাষা",
  langHint: "ইংৰাজী নোহোৱা ভাষাৰ বাবে প্ৰবন্ধৰ বিষয়বস্তু AI অনুবাদ ব্যৱহাৰ কৰে।",
  signInTab: "ছাইন ইন", createAccountTab: "একাউণ্ট সৃষ্টি",
  email: "ইমেইল", password: "পাছৱৰ্ড", username: "ব্যৱহাৰকাৰীৰ নাম",
  createAccount: "একাউণ্ট সৃষ্টি",
  welcomeBack: "পুনৰ স্বাগতম!", accountCreated: "একাউণ্ট সৃষ্টি হ’ল!",
  passwordTooShort: "পাছৱৰ্ড অন্ততঃ ৬ আখৰৰ হ’ব লাগে",
  authFooter: "অব্যাহত ৰাখি, আপুনি NewsMania AI ব্যৱহাৰ কৰিবলৈ সন্মত হয়।",
};

const ur: UIStrings = {
  signIn: "سائن ان", signOut: "لاگ آؤٹ", savedNews: "محفوظ خبریں", settings: "ترتیبات", account: "اکاؤنٹ",
  logoutConfirm: "کیا NewsMania سے لاگ آؤٹ کریں؟",
  searchPlaceholder: "خبریں، موضوعات یا ذرائع تلاش کریں…",
  voiceStart: "وائس سرچ شروع کریں", voiceStop: "وائس سرچ روکیں",
  voiceUnsupported: "اس براؤزر میں وائس سرچ تعاون یافتہ نہیں ہے",
  clearSearch: "تلاش صاف کریں", resultsFor: "کے نتائج",
  sortedRecent: "تازہ ترین کے مطابق", typeSomething: "اوپر سرچ بار میں کچھ ٹائپ کریں۔",
  todaysTopStories: "آج کی", topStoriesAccent: "اہم خبریں",
  newsFromIndia: "خبریں", indiaAccent: "بھارت سے",
  homeSubtitle: "حقیقی وقت کی خبریں، AI خلاصہ۔ مسلسل اپ ڈیٹ۔",
  cat_general: "اہم خبریں", cat_nation: "بھارت", cat_technology: "ٹیکنالوجی", cat_business: "کاروبار",
  cat_sports: "کھیل", cat_health: "صحت", cat_entertainment: "تفریح", cat_science: "سائنس",
  summarize: "خلاصہ", hide: "چھپائیں", aiSummary: "AI خلاصہ",
  saveArticle: "مضمون محفوظ کریں", removeBookmark: "بک مارک ہٹائیں", openArticle: "مضمون کھولیں",
  justNow: "ابھی", minAgo: "منٹ پہلے", hourAgo: "گھ. پہلے", dayAgo: "دن پہلے",
  loadMore: "مزید لوڈ کریں", reachedEnd: "آپ آخر تک پہنچ گئے ہیں",
  noResults: "کوئی نتیجہ نہیں", noResultsHint: "مختلف تلاش یا زمرہ آزمائیں۔",
  couldntLoad: "خبریں لوڈ نہیں ہو سکیں", retry: "دوبارہ کوشش",
  savedToast: "بعد کے لیے محفوظ", removedToast: "محفوظ شدہ سے ہٹایا گیا",
  savedTitle: "محفوظ", savedAccent: "خبریں",
  syncedToAccount: "آپ کے اکاؤنٹ سے ہم وقت", savedToDevice: "اس ڈیوائس پر محفوظ — ہم وقت کے لیے سائن ان",
  signInToSync: "ڈیوائسز کے درمیان بک مارکس ہم وقت کرنے کے لیے سائن ان کریں۔",
  loading: "لوڈ ہو رہا ہے…", nothingSaved: "ابھی تک کچھ محفوظ نہیں",
  nothingSavedHint: "کسی بھی مضمون پر بک مارک آئیکن پر ٹیپ کریں۔",
  browseNews: "خبریں براؤز کریں",
  settingsTitle: "ترتیبات", settingsDesc: "اپنے NewsMania تجربے کو ذاتی بنائیں۔",
  theme: "تھیم", light: "لائٹ", dark: "ڈارک", language: "زبان",
  langHint: "غیر انگریزی زبانوں کے لیے مضمون کا مواد AI ترجمہ استعمال کرتا ہے۔",
  signInTab: "سائن ان", createAccountTab: "اکاؤنٹ بنائیں",
  email: "ای میل", password: "پاس ورڈ", username: "صارف نام",
  createAccount: "اکاؤنٹ بنائیں",
  welcomeBack: "خوش آمدید!", accountCreated: "اکاؤنٹ بن گیا! NewsMania میں خوش آمدید۔",
  passwordTooShort: "پاس ورڈ کم از کم 6 حروف کا ہونا چاہیے",
  authFooter: "جاری رکھ کر، آپ NewsMania AI استعمال کرنے سے اتفاق کرتے ہیں۔",
};

export const TRANSLATIONS: Record<Language, UIStrings> = {
  en, hi, mr, bn, ta, te, gu, kn, ml, pa, or, as, ur,
};

export function getStrings(lang: Language): UIStrings {
  return TRANSLATIONS[lang] ?? en;
}

export function getCategoryLabel(strings: UIStrings, cat: NewsCategory): string {
  const key = `cat_${cat}` as keyof UIStrings;
  return (strings[key] as string) ?? cat;
}

// RTL languages
export const RTL_LANGUAGES: Language[] = ["ur"];
export function isRTL(lang: Language): boolean {
  return RTL_LANGUAGES.includes(lang);
}
