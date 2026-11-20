// ==========================================
// WILDBREEZE — DATA & TRANSLATIONS (data.js)
// ==========================================

// 1. Otaq Xüsusiyyətləri (4 Dildə)
const amenities = {
  fridge: { en: "❄️ Refrigerator", az: "❄️ Soyuducu", ru: "❄️ Холодильник", ar: "❄️ ثلاجة" },
  minifridge: { en: "❄️ Mini Refrigerator", az: "❄️ Mini Soyuducu", ru: "❄️ Мини-холодильник", ar: "❄️ ثلاجة صغيرة" },
  ac: { en: "🌡️ Air Conditioning", az: "🌡️ Kondisioner", ru: "🌡️ Кондиционер", ar: "🌡️ تكييف هواء" },
  microwave: { en: "♨️ Microwave", az: "♨️ Mikrodalğalı soba", ru: "♨️ Микроволновая печь", ar: "♨️ ميكروويف" },
  tv: { en: "📺 Flat-screen TV", az: "📺 Düz ekran TV", ru: "📺 Телевизор с плоским экраном", ar: "📺 شاشة تلفزيون مسطحة" },
  reception: { en: "🛎️ 24/7 Front Desk", az: "🛎️ 7/24 Resepşn Dəstəyi", ru: "🛎️ Ресепшн 24/7", ar: "🛎️ استقبال 24/7" },
  linens: { en: "🛏️ Clean Towels & Bed Linen", az: "🛏️ Təmiz Dəsmal və Yataq Dəsti", ru: "🛏️ Чистые полотенца и белье", ar: "🛏️ بياضات ومناشف نظيفة" },
  cleaning: { en: "🧹 Daily Housekeeping", az: "🧹 Gündəlik Otaq Təmizliyi", ru: "🧹 Ежедневная уборка", ar: "🧹 خدمة تنظيف يومية" },
  kitchen: { en: "🍳 Kitchenette & Electric Stove", az: "🍳 Mətbəx Mebeli və Elektrik Sobası", ru: "🍳 Мини-кухня и электроплита", ar: "🍳 مطبخ صغير وموقد كهربائي" },
  kettle: { en: "☕ Electric Kettle & Tea Set", az: "☕ Elektrik Çaydanı", ru: "☕ Электрочайник", ar: "☕ غلاية كهربائية" },
  laundry: { en: "🧺 Laundry Service (Extra Cost)", az: "🧺 Camaşırxana (Əlavə ödənişlə)", ru: "🧺 Прачечная (за доп. плату)", ar: "🧺 غسيل الملابس (بتكلفة إضافية)" },
  water: { en: "🚿 24/7 Hot Water & Private Bath", az: "🚿 Daimi İsti Su və Xüsusi Hamam", ru: "🚿 Горячая вода 24/7 и санузел", ar: "🚿 مياه ساخنة 24/7 وحمام خاص" },
  wifi: { en: "📶 Free High-Speed Wi-Fi", az: "📶 Pulsuz Sürətli Wi-Fi", ru: "📶 Бесплатный скоростной Wi-Fi", ar: "📶 واي فاي مجاني سريع" },
  toiletries: { en: "🧴 Complimentary Toiletries", az: "🧴 Gigiyenik Vasitələr", ru: "🧴 Гигиенические принадлежности", ar: "🧴 مستلزمات استحمام مجانية" }
};

// City Apartment Baku üçün otaq xüsusiyyətləri siyahısı
const caFeatures = [
  amenities.fridge, amenities.ac, amenities.microwave, amenities.kitchen,
  amenities.tv, amenities.wifi, amenities.water, amenities.toiletries,
  amenities.linens, amenities.cleaning, amenities.reception, amenities.laundry
];

// Miraj Hotel Baku üçün otaq xüsusiyyətləri siyahısı (Standart Otel Konsepti)
const mhFeatures = [
  amenities.ac, amenities.tv, amenities.wifi, amenities.minifridge,
  amenities.kettle, amenities.water, amenities.toiletries,
  amenities.linens, amenities.cleaning, amenities.reception, amenities.laundry
];

// 2. Otaq Kateqoriyaları Bazası (CA1-CA6 və MH1-MH3)
const roomDatabase = {
  CA1: {
    hotel: "City Apartment Baku",
    size: "60 m²",
    images: ["s1b-1.jpeg", "s1b-2.jpeg", "s1b-3.jpeg", "s1b-4.jpeg"],
    details: {
      en: {
        title: "1-Bedroom Standard Apartment (With & Without Balcony)",
        capacity: "Max Occupancy: 2 Adults + 1 Child • Bedding: 1 King Bed & 1 Sofa",
        desc: "Spacious 60 m² serviced apartment featuring a separate bedroom, living area with sofa, fully equipped kitchenette, and private bathroom. Available with or without a balcony."
      },
      az: {
        title: "1 Yataq Otaqlı Standart Apartament (Balkonlu və Balkonsuz)",
        capacity: "Maksimum Tutum: 2 Böyük + 1 Uşaq • Yataq: 1 King Çarpayı və 1 Divan",
        desc: "Ayrı yataq otağı, divanlı qonaq zonası, tam təchiz olunmuş mətbəx guşəsi və xüsusi vanna otağından ibarət geniş 60 m² apartament. Balkonlu və ya balkonsuz seçim mövcuddur."
      },
      ru: {
        title: "Стандартные апартаменты с 1 спальней (С балконом и без)",
        capacity: "Вместимость: до 2 взрослых + 1 ребенка • Кровати: 1 King и 1 диван",
        desc: "Просторные апартаменты площадью 60 м² с отдельной спальней, гостиной зоной с диваном, оборудованной мини-кухней и ванной комнатой. Доступны варианты с балконом и без."
      },
      ar: {
        title: "شقة قياسية بغرفة نوم واحدة (مع شرفة أو بدون)",
        capacity: "السعة القصوى: 2 بالغين + طفل واحد • الأسرّة: سرير كينج وأريكة",
        desc: "شقة فندقية واسعة بمساحة 60 متر مربع تضم غرفة نوم منفصلة وصالة جلوس ومطبخ صغير مجهز وحمام خاص. متوفرة بخيار مع شرفة أو بدون شرفة."
      }
    }
  },
  CA2: {
    hotel: "City Apartment Baku",
    size: "100 m²",
    images: ["s2b-1.jpeg", "s2b-2.jpeg", "s2b-3.jpeg", "s2b-4.jpeg", "s2b-5.jpeg", "s2b-6.jpeg"],
    details: {
      en: {
        title: "2-Bedroom Standard Apartment with Balcony",
        capacity: "Max Occupancy: 4 Adults + 2 Children • Bedding: 2 King Beds & 1 Sofa",
        desc: "Expansive 100 m² family apartment offering two separate bedrooms, a generous living room, private balcony, kitchen with electric stove and microwave, and full guest amenities."
      },
      az: {
        title: "2 Yataq Otaqlı Standart Apartament (Balkonlu)",
        capacity: "Maksimum Tutum: 4 Böyük + 2 Uşaq • Yataq: 2 King Çarpayı və 1 Divan",
        desc: "Ailələr və qruplar üçün ideal 100 m² genişliyində apartament: 2 ayrı yataq otağı, geniş qonaq otağı, şəxsi balkon, tam mətbəx avadanlığı və yüksək komfort."
      },
      ru: {
        title: "Стандартные апартаменты с 2 спальнями и балконом",
        capacity: "Вместимость: до 4 взрослых + 2 детей • Кровати: 2 King и 1 диван",
        desc: "Большие семейные апартаменты площадью 100 м² с двумя отдельными спальнями, просторной гостиной, собственным балконом и полностью оборудованной кухней."
      },
      ar: {
        title: "شقة قياسية بغرفتي نوم مع شرفة",
        capacity: "السعة القصوى: 4 بالغين + طفلين • الأسرّة: 2 سرير كينج وأريكة",
        desc: "شقة عائلية فسيحة بمساحة 100 متر مربع تضم غرفتي نوم منفصلتين وصالة معيشة واسعة وشرفة خاصة ومطبخ مجهز بالكامل."
      }
    }
  },
  CA3: {
    hotel: "City Apartment Baku",
    size: "60 m²",
    images: ["s2bwl-1.jpeg", "s2bwl-2.jpeg", "s2bwl-3.jpeg", "s2bwl-4.jpeg"],
    details: {
      en: {
        title: "2-Bedroom Standard Apartment (Without Living Room)",
        capacity: "Max Occupancy: 3–4 Adults + 1 Child • Bedding: 1 King Bed & 1 Queen Bed",
        desc: "Practical 60 m² two-bedroom unit designed for guests prioritizing separate private sleeping quarters, equipped with kitchenette facilities, AC, and modern bathroom."
      },
      az: {
        title: "2 Yataq Otaqlı Standart Apartament (Qonaq Otağı Olmadan)",
        capacity: "Maksimum Tutum: 3–4 Böyük + 1 Uşaq • Yataq: 1 King və 1 Queen Çarpayı",
        desc: "Ayrı yataq otaqlarına üstünlük verən qonaqlar və ailələr üçün nəzərdə tutulmuş 60 m² funksional apartament. Mətbəx guşəsi, kondisioner və xüsusi vanna otağı ilə təchiz olunub."
      },
      ru: {
        title: "Стандартные апартаменты с 2 спальнями (Без гостиной)",
        capacity: "Вместимость: 3–4 взрослых + 1 ребенок • Кровати: 1 King и 1 Queen",
        desc: "Функциональные двухкомнатные апартаменты (60 м²) с двумя отдельными спальнями без гостиной зоны, оснащенные мини-кухней, кондиционером и ванной комнатой."
      },
      ar: {
        title: "شقة قياسية بغرفتي نوم (بدون غرفة معيشة)",
        capacity: "السعة القصوى: 3-4 بالغين + طفل واحد • الأسرّة: سرير كينج وسرير كوين",
        desc: "وحدة عملية بمساحة 60 متر مربع تضم غرفتي نوم منفصلتين لخصوصية تامة، مع مطبخ صغير وتكييف وحمام خاص."
      }
    }
  },
  CA4: {
    hotel: "City Apartment Baku",
    size: "60 m²",
    images: ["s1bwt-1.jpeg", "s1bwt-2.jpeg", "s1bwt-3.jpeg", "s1bwt-4.jpeg", "s1bwt-5.jpeg"],
    details: {
      en: {
        title: "1-Bedroom Standard Apartment with Private Terrace",
        capacity: "Max Occupancy: 2 Adults + 1 Child • Bedding: 1 King Bed & 1 Sofa",
        desc: "Comfortable 60 m² apartment highlighted by a spacious private outdoor terrace, ideal for relaxing outdoors while enjoying full home-style kitchen and living amenities."
      },
      az: {
        title: "1 Yataq Otaqlı Standart Apartament (Terraslı)",
        capacity: "Maksimum Tutum: 2 Böyük + 1 Uşaq • Yataq: 1 King Çarpayı və 1 Divan",
        desc: "Geniş şəxsi açıq terrası ilə seçilən 60 m² apartament. Həm açıq havada istirahət, həm də tam ev rahatlığında mətbəx və qonaq otağı imkanları təqdim edir."
      },
      ru: {
        title: "Стандартные апартаменты с 1 спальней и террасой",
        capacity: "Вместимость: до 2 взрослых + 1 ребенка • Кровати: 1 King и 1 диван",
        desc: "Уютные апартаменты площадью 60 м² с собственной просторной террасой для отдыха на свежем воздухе, спальней, гостиной зоной и кухней."
      },
      ar: {
        title: "شقة قياسية بغرفة نوم واحدة مع تراس خاص",
        capacity: "السعة القصوى: 2 بالغين + طفل واحد • الأسرّة: سرير كينج وأريكة",
        desc: "شقة مميزة بمساحة 60 متر مربع مزودة بتراس خارجي خاص، مثالية للاسترخاء مع كافة مرافق المطبخ والمعيشة."
      }
    }
  },
  CA5: {
    hotel: "City Apartment Baku",
    size: "70 m²",
    images: ["d1b-1.jpeg", "d1b-2.jpeg", "d1b-3.jpeg", "d1b-4.jpeg"],
    details: {
      en: {
        title: "1-Bedroom Deluxe Apartment (Open-Plan & French Balcony)",
        capacity: "Max Occupancy: 2 Adults + 1 Child • Bedding: 1 King Bed & 1 Sofa",
        desc: "Upgraded 70 m² deluxe apartment featuring a bright open-plan living area, elegant French balcony, modern kitchen cabinetry, and refined interior finishes."
      },
      az: {
        title: "1 Yataq Otaqlı Deluxe Apartament (Açıq Planlı, Fransız Balkonlu)",
        capacity: "Maksimum Tutum: 2 Böyük + 1 Uşaq • Yataq: 1 King Çarpayı və 1 Divan",
        desc: "İşıqlı açıq-plan (open-plan) qonaq zonası, zərif Fransız balkonu və müasir interyer dizaynı ilə təchiz edilmiş 70 m² genişliyində Deluxe kateqoriyalı apartament."
      },
      ru: {
        title: "Делюкс апартаменты с 1 спальней (Французский балкон)",
        capacity: "Вместимость: до 2 взрослых + 1 ребенка • Кровати: 1 King и 1 диван",
        desc: "Улучшенные апартаменты Делюкс (70 м²) со светлой гостиной открытой планировки, элегантным французским балконом и современным кухонным гарнитуром."
      },
      ar: {
        title: "شقة ديلوكس بغرفة نوم واحدة (صالة مفتوحة وشرفة فرنسية)",
        capacity: "السعة القصوى: 2 بالغين + طفل واحد • الأسرّة: سرير كينج وأريكة",
        desc: "شقة ديلوكس راقية بمساحة 70 متر مربع تتميز بمنطقة معيشة ذات تصميم مفتوح وشرفة فرنسية أنيقة وتجهيزات حديثة."
      }
    }
  },
  CA6: {
    hotel: "City Apartment Baku",
    size: "95 m²",
    images: ["d2b-1.jpeg", "d2b-2.jpeg", "d2b-3.jpeg", "d2b-4.jpeg", "d2b-5.jpeg", "d2b-6.jpeg"],
    details: {
      en: {
        title: "2-Bedroom Deluxe Apartment (Open-Plan & French Balcony)",
        capacity: "Max Occupancy: 4 Adults + 1 Child • Bedding: 1 King, 1 Twin/Queen Bed & 1 Sofa",
        desc: "Premium 95 m² two-bedroom deluxe residence with an airy open-plan living space, French balcony, full kitchen appliances, and superior comfort for families or executives."
      },
      az: {
        title: "2 Yataq Otaqlı Deluxe Apartament (Açıq Planlı, Fransız Balkonlu)",
        capacity: "Maksimum Tutum: 4 Böyük + 1 Uşaq • Yataq: 1 King, 1 Twin/Queen Çarpayı və 1 Divan",
        desc: "95 m² sahəyə malik 2 yataq otaqlı Deluxe rezidensiya. Açıq-plan geniş zalı, Fransız balkonu və tam mətbəx təchizatı ilə ailələr və işgüzar qonaqlar üçün ən yüksək rahatlığı təmin edir."
      },
      ru: {
        title: "Делюкс апартаменты с 2 спальнями (Французский балкон)",
        capacity: "Вместимость: до 4 взрослых + 1 ребенка • Кровати: 1 King, 1 Twin/Queen и 1 диван",
        desc: "Премиальные апартаменты Делюкс площадью 95 м² с двумя спальнями, просторной гостиной открытой планировки, французским балконом и полным оснащением."
      },
      ar: {
        title: "شقة ديلوكس بغرفتي نوم (صالة مفتوحة وشرفة فرنسية)",
        capacity: "السعة القصوى: 4 بالغين + طفل واحد • الأسرّة: سرير كينج، سرير كوين/مفرد وأريكة",
        desc: "إقامة ديلوكس فاخرة بمساحة 95 متر مربع تضم غرفتي نوم وصالة مفتوحة وشرفة فرنسية مع كافة وسائل الراحة العائلية."
      }
    }
  },
  MH1: {
    hotel: "Miraj Hotel Baku",
    size: "20 m²",
    images: ["mh1-1.jpeg", "mh1-2.jpeg", "mh1-3.jpeg", "mh1-4.jpeg"],
    details: {
      en: {
        title: "Standard Double Room",
        capacity: "Max Occupancy: 2 Adults • Bedding: 1 Double / Queen Bed",
        desc: "Cozy and well-appointed 20 m² hotel room featuring comfortable double bedding, climate control, flat-screen TV, high-speed Wi-Fi, and a modern private bathroom."
      },
      az: {
        title: "Standart İki Nəfərlik Otaq",
        capacity: "Maksimum Tutum: 2 Böyük • Yataq: 1 İki nəfərlik Çarpayı",
        desc: "Rahat iki nəfərlik çarpayı, kondisioner, düz ekran TV, sürətli Wi-Fi və müasir xüsusi vanna otağı ilə təchiz olunmuş 20 m² standart otel otağı."
      },
      ru: {
        title: "Стандартный двухместный номер",
        capacity: "Вместимость: до 2 взрослых • Кровать: 1 двуспальная кровать",
        desc: "Уютный гостиничный номер площадью 20 м² с удобной двуспальной кроватью, кондиционером, телевизором, скоростным Wi-Fi и собственной ванной комнатой."
      },
      ar: {
        title: "غرفة قياسية مزدوجة",
        capacity: "السعة القصوى: 2 بالغين • الأسرّة: سرير مزدوج واحد",
        desc: "غرفة فندقية مريحة بمساحة 20 متر مربع مجهزة بسرير مزدوج وتكييف وشاشة تلفزيون وواي فاي سريع وحمام خاص حديث."
      }
    }
  },
  MH2: {
    hotel: "Miraj Hotel Baku",
    size: "27 m²",
    images: ["mh2-1.jpeg", "mh2-2.jpeg", "mh2-3.jpeg", "mh2-4.jpeg"],
    details: {
      en: {
        title: "Deluxe Double Room",
        capacity: "Max Occupancy: 2 Adults (+1 Extra Bed option) • Bedding: 1 King Bed",
        desc: "Spacious 27 m² deluxe hotel room offering extra living space, refined boutique decor, king-size bedding, seating area, and 24/7 attentive front desk & housekeeping care."
      },
      az: {
        title: "Deluxe İki Nəfərlik Otaq",
        capacity: "Maksimum Tutum: 2 Böyük (+Əlavə yataq imkanı) • Yataq: 1 King Çarpayı",
        desc: "Daha geniş sahəyə (27 m²) malik Deluxe otel otağı. King-size yataq, oturma guşəsi, zərif interyer və 24/7 qeydiyyat masası dəstəyi ilə yüksək komfort təqdim edir."
      },
      ru: {
        title: "Двухместный номер Делюкс",
        capacity: "Вместимость: 2 взрослых (+доп. кровать) • Кровать: 1 большая кровать King",
        desc: "Просторный номер Делюкс площадью 27 м² с большой кроватью King-size, зоной отдыха, элегантным интерьером и круглосуточным гостиничным сервисом."
      },
      ar: {
        title: "غرفة ديلوكس مزدوجة",
        capacity: "السعة القصوى: 2 بالغين (+إمكانية سرير إضافي) • الأسرّة: سرير كينج",
        desc: "غرفة ديلوكس واسعة بمساحة 27 متر مربع توفر مساحة إضافية للجلوس وسرير كينج مريح وخدمة فندقية على مدار الساعة."
      }
    }
  },
  MH3: {
    hotel: "Miraj Hotel Baku",
    size: "29 m²",
    images: ["mh3-1.jpeg", "mh3-2.jpeg", "mh3-3.jpeg", "mh3-4.jpeg"],
    details: {
      en: {
        title: "Deluxe Double Room with Balcony",
        capacity: "Max Occupancy: 2 Adults (+1 Extra Bed option) • Bedding: 1 King Bed",
        desc: "Our premier 29 m² room at Miraj Hotel Baku featuring a private balcony, generous floor space, plush king bed, full bathroom amenities, and daily housekeeping."
      },
      az: {
        title: "Balkonlu Deluxe İki Nəfərlik Otaq",
        capacity: "Maksimum Tutum: 2 Böyük (+Əlavə yataq imkanı) • Yataq: 1 King Çarpayı",
        desc: "Miraj Hotel-in şəxsi balkonlu, 29 m² sahəyə malik ən üstün otaq kateqoriyası. Geniş və işıqlı otaq, King çarpayı, tam gigiyenik dəst və gündəlik təmizlik xidməti daxildir."
      },
      ru: {
        title: "Двухместный номер Делюкс с балконом",
        capacity: "Вместимость: 2 взрослых (+доп. кровать) • Кровать: 1 большая кровать King",
        desc: "Премиальный номер площадью 29 м² с собственным балконом, просторной планировкой, кроватью King-size и полным спектром гостиничных удобств."
      },
      ar: {
        title: "غرفة ديلوكس مزدوجة مع شرفة",
        capacity: "السعة القصوى: 2 بالغين (+إمكانية سرير إضافي) • الأسرّة: سرير كينج",
        desc: "أفضل فئة غرف في فندق ميراج بمساحة 29 متر مربع مع شرفة خاصة وإطلالة مميزة وسرير كينج فاخر وكافة المرافق الفندقية."
      }
    }
  }
};

// 3. Bütün Səhifə Üçün 4 Dilli Tam Tərcümə Lüğəti
const translations = {
  en: {
    nav_tagline: "Booking Partner",
    nav_about: "About",
    nav_hotels: "Partner Properties",
    nav_services: "Guest Services",
    nav_contact: "Direct Booking",
    hero_badge: "Hospitality & Direct Booking Network",
    hero_title: "Curated Stays & Seamless Booking Partnerships",
    hero_desc: "Direct booking privileges, commission-free rates, and 24/7 support connecting travelers and agencies with verified partner properties.",
    hero_cta_primary: "Explore Partner Properties",
    hero_cta_secondary: "Request Availability & Best Rate",
    stat1_title: "Best Direct Rates",
    stat1_desc: "No hidden platform fees",
    stat2_title: "Pay at Check-in",
    stat2_desc: "No upfront online payment",
    stat3_title: "B2B & FIT Ready",
    stat3_desc: "24/7 guest & agency support",
    hotels_eyebrow: "Official Portfolio",
    hotels_title: "Our Partner Properties",
    hotels_subtitle: "Click on any room category below to view room photos, capacity, and included amenities.",
    hotel1_tag: "Serviced Apartments",
    hotel1_address: "Narimanov district, Ismayil Hidayetzade 174, Baku",
    hotel1_desc: "Spacious, modern apartment-style accommodations ideal for families, long-stay travelers, and business guests seeking privacy and home comfort in central Baku.",
    hotel1_loc_title: "Location & Neighborhood Highlights",
    hotel1_loc_desc: "Situated right next to the iconic Heydar Aliyev Center and just 600 meters (7-min walk) from Nariman Narimanov Metro Station. The immediate neighborhood offers 24/7 supermarkets, pharmacies, a hospital, and a police station for complete convenience and safety.",
    hotel2_tag: "Boutique Hotel",
    hotel2_address: "Yasamal district, Huseyn Javid Ave 520, Baku",
    hotel2_desc: "Refined hotel hospitality in Yasamal offering attentive 24/7 front-desk service, comfortable guest rooms, and convenient access to Baku's business and cultural hubs.",
    hotel2_loc_title: "Location & Neighborhood Highlights",
    hotel2_loc_desc: "Located in the prestigious Huseyn Javid Avenue area, just 400 meters (5-min walk) from Elmler Akademiyasi Metro Station. Surrounded by parks, cafés, 24/7 supermarkets, and pharmacies.",
    verified_partner: "Official Partner",
    rooms_label: "Room Categories (Click to View Details & Photos)",
    click_photo_hint: "Click room to open",
    room_ca_1: "1-Bedroom Standard Apartment (With / Without Balcony)",
    room_ca_2: "2-Bedroom Standard Apartment with Balcony",
    room_ca_3: "2-Bedroom Standard Apartment (Without Living Room)",
    room_ca_4: "1-Bedroom Standard Apartment with Terrace",
    room_ca_5: "1-Bedroom Deluxe Apartment (Open-Plan, French Balcony)",
    room_ca_6: "2-Bedroom Deluxe Apartment (Open-Plan, French Balcony)",
    room_mh_1: "Standard Double Room",
    room_mh_2: "Deluxe Double Room",
    room_mh_3: "Deluxe Double Room with Balcony",
    whatsapp_quick: "WhatsApp Direct",
    inquire_btn: "Request Best Rate →",
    modal_gallery: "Room Photo Gallery",
    modal_overview: "Room Overview",
    modal_occupancy: "Maximum Capacity & Bedding",
    modal_amenities: "In-Room Amenities & Services",
    modal_pay_checkin: "✓ Best Direct Rate • Pay at Check-in",
    modal_select_btn: "Select Room & Get Rate →",
    services_eyebrow: "Transparent Hospitality Policy",
    services_title: "Additional Services & Extra Charge Policy",
    services_subtitle: "In line with international booking standards, optional services below can be requested upon reservation at an additional fee.",
    badge_extra: "Extra Charge",
    badge_duration: "Based on Duration",
    srv1_title: "Airport Transfer (GYD)",
    srv1_desc: "Private sedan or minivan pick-up and drop-off between Heydar Aliyev International Airport and your property.",
    srv2_title: "Early Check-in / Late Check-out",
    srv2_desc: "Subject to room availability; extra charge is calculated based on the number of additional hours requested.",
    srv3_title: "Laundry & Dry Cleaning",
    srv3_desc: "Professional garment care, washing, and ironing services available on request during your stay.",
    srv4_title: "Extra Bed & Room Setup",
    srv4_desc: "Additional rollaway beds or customized room arrangements for larger families and groups at a per-night surcharge.",
    contact_eyebrow: "Direct Booking Desk",
    contact_title: "Request Availability & Best Direct Rate",
    contact_desc: "Select your preferred property, room category, dates, and guest count. No upfront payment is required — book now and pay at check-in.",
    phone_label: "Phone & WhatsApp (24/7)",
    email_label: "Official Reservations Email",
    location_label: "Headquarters",
    location_val: "Baku, Azerbaijan",
    form_name: "Full Name / Travel Agency",
    form_contact: "Your WhatsApp Number or Email",
    form_property: "Select Property",
    form_room: "Select Room Category",
    opt_general: "B2B / General Partnership Inquiry",
    opt_hotel1: "City Apartment Baku (Narimanov)",
    opt_hotel2: "Miraj Hotel Baku (Yasamal)",
    opt_room_any: "Any Available Room / Best Offer",
    form_checkin: "Check-in Date",
    form_checkout: "Check-out Date",
    form_adults: "Adults",
    form_children: "Children",
    form_addons_label: "Optional Add-on Services (Extra Charge)",
    chk_transfer: "Airport Transfer (GYD)",
    chk_early_late: "Early Check-in / Late Check-out",
    chk_laundry: "Laundry & Dry Cleaning",
    chk_extrabed: "Extra Bed",
    form_message: "Special Requests / Flight Details (Optional)",
    form_submit: "Send a Reservation Request",
    form_note: "No instant payment required. Click above to send your ready reservation request via WhatsApp or Official Email.",
    send_modal_title: "Choose How to Send Your Request",
    send_modal_desc: "Your reservation details have been formatted. Select your preferred channel for the fastest confirmation:",
    send_whatsapp_btn: "Send via WhatsApp (Instant)",
    send_email_btn: "Send via Official Email",
    form_success_msg: "Thank you! Your reservation request has been generated.",
    rights: "All rights reserved."
  },
  az: {
    nav_tagline: "Rezervasiya Tərəfdaşı",
    nav_about: "Haqqımızda",
    nav_hotels: "Tərəfdaş Otellər",
    nav_services: "Əlavə Xidmətlər",
    nav_contact: "Birbaşa Rezervasiya",
    hero_badge: "Qonaqpərvərlik və Birbaşa Rezervasiya Şəbəkəsi",
    hero_title: "Seçilmiş Otellər və Birbaşa Rezervasiya Mərkəzi",
    hero_desc: "Fərdi qonaqları, korporativ müştəriləri və turizm agentliklərini etibarlı tərəfdaş otellərlə birləşdirən komissiyasız birbaşa rezervasiya və 24/7 dəstək.",
    hero_cta_primary: "Otellərə və Otaqlara Bax",
    hero_cta_secondary: "Mövcudluğu və Qiyməti Sorğula",
    stat1_title: "Ən Sərfəli Qiymət",
    stat1_desc: "Komissiyasız birbaşa tarif",
    stat2_title: "Girişdə Ödəniş",
    stat2_desc: "Öncədən kartla ödəniş yoxdur",
    stat3_title: "B2B və Fərdi",
    stat3_desc: "7/24 qonaq və agentlik dəstəyi",
    hotels_eyebrow: "Rəsmi Portfolio",
    hotels_title: "Tərəfdaş Otel və Apartamentlərimiz",
    hotels_subtitle: "Otaqların şəkillərinə, qonaq tutumuna və daxili imkanlarına baxmaq üçün istənilən otaq kateqoriyasının üzərinə klikləyin.",
    hotel1_tag: "Apartament Otel",
    hotel1_address: "Nərimanov rayonu, İsmayıl Hidayətzadə 174, Bakı",
    hotel1_desc: "Bakının mərkəzində ailələr, uzunmüddətli qonaqlar və işgüzar səfərlər üçün ev rahatlığı və məxfilik təklif edən geniş, müasir servis apartamentləri.",
    hotel1_loc_title: "Lokasiya və Ətraf Mühit Üstünlükləri",
    hotel1_loc_desc: "Heydər Əliyev Mərkəzi ilə tam yan-yana, Nəriman Nərimanov metrostansiyasına cəmi 600 metr (7 dəqiqəlik piyada) məsafədə yerləşir. Yaxınlıqda 7/24 fəaliyyət göstərən supermarket, xəstəxana, aptek və polis məntəqəsi mövcuddur.",
    hotel2_tag: "Butik Otel",
    hotel2_address: "Yasamal rayonu, Hüseyn Cavid pr. 520, Bakı",
    hotel2_desc: "Yasamalda 24/7 peşəkar qeydiyyat masası, rahat otaqlar və şəhərin əsas işgüzar və mədəni mərkəzlərinə sürətli çıxış imkanı təqdim edən klassik otel.",
    hotel2_loc_title: "Lokasiya və Ətraf Mühit Üstünlükləri",
    hotel2_loc_desc: "Prestijli Hüseyn Cavid prospektində, Elmlər Akademiyası metrostansiyasına cəmi 400 metr (5 dəqiqəlik piyada) məsafədə yerləşir. Ətrafında parklar, kafelər, 7/24 market və apteklər var.",
    verified_partner: "Rəsmi Tərəfdaş",
    rooms_label: "Otaq Kateqoriyaları (Şəkillər və Detallar Üçün Klikləyin)",
    click_photo_hint: "Baxmaq üçün klikləyin",
    room_ca_1: "1 Yataq Otaqlı Standart Apartament (Balkonlu / Balkonsuz)",
    room_ca_2: "2 Yataq Otaqlı Standart Apartament (Balkonlu)",
    room_ca_3: "2 Yataq Otaqlı Standart Apartament (Qonaq Otağı Olmadan)",
    room_ca_4: "1 Yataq Otaqlı Standart Apartament (Terraslı)",
    room_ca_5: "1 Yataq Otaqlı Deluxe Apartament (Fransız Balkonlu)",
    room_ca_6: "2 Yataq Otaqlı Deluxe Apartament (Fransız Balkonlu)",
    room_mh_1: "Standart İki Nəfərlik Otaq",
    room_mh_2: "Deluxe İki Nəfərlik Otaq",
    room_mh_3: "Balkonlu Deluxe İki Nəfərlik Otaq",
    whatsapp_quick: "Birbaşa WhatsApp",
    inquire_btn: "Qiymət Sorğula →",
    modal_gallery: "Otaq Qalereyası",
    modal_overview: "Otaq Haqqında Məlumat",
    modal_occupancy: "Maksimum Tutum və Yataq Konfiqurasiyası",
    modal_amenities: "Otaqdaxili İmkanlar və Servis",
    modal_pay_checkin: "✓ Ən Yaxşı Qiymət • Girişdə Ödəniş",
    modal_select_btn: "Otağı Seç və Qiymət Al →",
    services_eyebrow: "Şəffaf Xidmət Siyasəti",
    services_title: "Əlavə Servislər və Ödəniş Qaydaları",
    services_subtitle: "Beynəlxalq otelçilik standartlarına uyğun olaraq, aşağıdakı xidmətlər rezervasiya zamanı əlavə ödənişlə sifariş edilə bilər.",
    badge_extra: "Əlavə Ödənişlə",
    badge_duration: "Müddətdən Asılıdır",
    srv1_title: "Hava Limanı Transferi (GYD)",
    srv1_desc: "Heydər Əliyev Beynəlxalq Aeroportu ilə otel arasında fərdi sedan və ya minivenlə qarşılama və yola salma.",
    srv2_title: "Erkən Giriş / Gec Çıxış",
    srv2_desc: "Otaq mövcudluğundan asılı olaraq təqdim edilir; əlavə ödəniş tələb olunan saat müddətinə uyğun hesablanır.",
    srv3_title: "Camaşırxana və Ütüləmə",
    srv3_desc: "Qonaqlama müddətində geyimlərin peşəkar yuyulması, quru təmizlənməsi və ütülənməsi xidməti.",
    srv4_title: "Əlavə Yataq (Extra Bed)",
    srv4_desc: "Ailələr və qruplar üçün otağa gecəlik əlavə ödənişlə əlavə çarpayının yerləşdirilməsi.",
    contact_eyebrow: "Birbaşa Rezervasiya Masası",
    contact_title: "Otaq Mövcudluğu və Ən Sərfəli Qiymət Sorğusu",
    contact_desc: "Oteli, otaq kateqoriyasını, tarixləri və qonaq sayını seçin. Öncədən ödəniş tələb olunmur — indi rezerv edin, ödənişi otelə giriş zamanı (check-in) edin.",
    phone_label: "Telefon və WhatsApp (7/24)",
    email_label: "Rəsmi Rezervasiya E-poçtu",
    location_label: "Baş Ofis",
    location_val: "Bakı, Azərbaycan",
    form_name: "Ad Soyad / Turizm Agentliyi",
    form_contact: "WhatsApp Nömrəniz və ya E-poçtunuz",
    form_property: "Oteli Seçin",
    form_room: "Otaq Kateqoriyasını Seçin",
    opt_general: "B2B / Ümumi Əməkdaşlıq Sorğusu",
    opt_hotel1: "City Apartment Baku (Nərimanov)",
    opt_hotel2: "Miraj Hotel Baku (Yasamal)",
    opt_room_any: "İstənilən Uyğun Otaq / Ən Yaxşı Təklif",
    form_checkin: "Giriş Tarixi (Check-in)",
    form_checkout: "Çıxış Tarixi (Check-out)",
    form_adults: "Böyük Sayı",
    form_children: "Uşaq Sayı",
    form_addons_label: "Əlavə Xidmətlər (Extra Charge)",
    chk_transfer: "Hava Limanı Transferi (GYD)",
    chk_early_late: "Erkən Giriş / Gec Çıxış",
    chk_laundry: "Camaşırxana və Ütüləmə",
    chk_extrabed: "Əlavə Yataq (Extra Bed)",
    form_message: "Xüsusi Qeydlər / Reys Məlumatı (İstəyə bağlı)",
    form_submit: "Rezervasiya Sorğusu Göndər",
    form_note: "Öncədən ödəniş tələb olunmur. Hazır rezervasiya sorğunuzu WhatsApp və ya E-poçt vasitəsilə göndərmək üçün yuxarıdakı düyməyə klikləyin.",
    send_modal_title: "Sorğunu Göndərmə Üsulunu Seçin",
    send_modal_desc: "Rezervasiya məlumatlarınız şablon halına salındı. Sürətli təsdiq və qiymət təklifi üçün birini seçin:",
    send_whatsapp_btn: "WhatsApp ilə Göndər (Anında)",
    send_email_btn: "Rəsmi E-poçt ilə Göndər",
    form_success_msg: "Təşəkkür edirik! Rezervasiya sorğunuz hazırlandı.",
    rights: "Bütün hüquqlar qorunur."
  },
  ru: {
    nav_tagline: "Партнер по бронированию",
    nav_about: "О нас",
    nav_hotels: "Отели-партнеры",
    nav_services: "Услуги",
    nav_contact: "Прямое бронирование",
    hero_badge: "Сеть гостеприимства и прямого бронирования",
    hero_title: "Избранные отели и прямое бронирование",
    hero_desc: "Прямые цены без комиссий и поддержка 24/7 для индивидуальных гостей, корпоративных клиентов и турагентств.",
    hero_cta_primary: "Смотреть отели и номера",
    hero_cta_secondary: "Запросить наличие и лучшую цену",
    stat1_title: "Лучшие прямые цены",
    stat1_desc: "Без скрытых комиссий",
    stat2_title: "Оплата при заезде",
    stat2_desc: "Без предоплаты онлайн",
    stat3_title: "B2B и FIT",
    stat3_desc: "Поддержка гостей и агентств 24/7",
    hotels_eyebrow: "Официальное портфолио",
    hotels_title: "Наши отели и апартаменты",
    hotels_subtitle: "Нажмите на любую категорию номера ниже, чтобы посмотреть фотографии, вместимость и список удобств.",
    hotel1_tag: "Апарт-отель",
    hotel1_address: "Наримановский район, ул. Исмаила Хидаятзаде 174, Баку",
    hotel1_desc: "Просторные современные апартаменты в центре Баку — идеальный выбор для семей, длительного проживания и деловых поездок.",
    hotel1_loc_title: "Расположение и инфраструктура района",
    hotel1_loc_desc: "Расположен прямо рядом с Центром Гейдара Алиева и всего в 600 метрах (7 минут пешком) от станции метро «Нариман Нариманов». Рядом находятся круглосуточный супермаркет 24/7, больница, аптека и отделение полиции.",
    hotel2_tag: "Бутик-отель",
    hotel2_address: "Ясамальский район, пр. Гусейна Джавида 520, Баку",
    hotel2_desc: "Комфортабельный отель в Ясамале с круглосуточной стойкой регистрации, уютными номерами и удобным доступом к деловым центрам Баку.",
    hotel2_loc_title: "Расположение и инфраструктура района",
    hotel2_loc_desc: "Находится на престижном проспекте Гусейна Джавида, всего в 400 метрах (5 минут пешком) от станции метро «Эльмляр Академиясы». В шаговой доступности парки, круглосуточные маркеты 24/7 и аптеки.",
    verified_partner: "Официальный партнер",
    rooms_label: "Категории номеров (Нажмите для фото и описания)",
    click_photo_hint: "Нажмите для просмотра",
    room_ca_1: "Стандартные апартаменты с 1 спальней (С балконом / без)",
    room_ca_2: "Стандартные апартаменты с 2 спальнями и балконом",
    room_ca_3: "Стандартные апартаменты с 2 спальнями (Без гостиной)",
    room_ca_4: "Стандартные апартаменты с 1 спальней и террасой",
    room_ca_5: "Делюкс апартаменты с 1 спальней (Французский балкон)",
    room_ca_6: "Делюкс апартаменты с 2 спальнями (Французский балкон)",
    room_mh_1: "Стандартный двухместный номер",
    room_mh_2: "Двухместный номер Делюкс",
    room_mh_3: "Двухместный номер Делюкс с балконом",
    whatsapp_quick: "Написать в WhatsApp",
    inquire_btn: "Узнать лучшую цену →",
    modal_gallery: "Фотогалерея номера",
    modal_overview: "Описание номера",
    modal_occupancy: "Вместимость и спальные места",
    modal_amenities: "Удобства и сервис в номере",
    modal_pay_checkin: "✓ Лучшая цена • Оплата при заезде",
    modal_select_btn: "Выбрать номер и узнать цену →",
    services_eyebrow: "Прозрачные условия",
    services_title: "Дополнительные услуги (Extra Charge)",
    services_subtitle: "В соответствии с международными стандартами, следующие услуги предоставляются по запросу за дополнительную плату.",
    badge_extra: "Платная услуга",
    badge_duration: "Зависит от времени",
    srv1_title: "Трансфер из аэропорта (GYD)",
    srv1_desc: "Индивидуальная встреча и трансфер на седане или минивэне из аэропорта Гейдар Алиев в отель.",
    srv2_title: "Ранний заезд / Поздний выезд",
    srv2_desc: "Предоставляется при наличии свободных номеров; доплата зависит от количества дополнительных часов.",
    srv3_title: "Прачечная и глажка",
    srv3_desc: "Профессиональная стирка, химчистка и глажка одежды по запросу во время проживания.",
    srv4_title: "Дополнительная кровать",
    srv4_desc: "Установка дополнительного спального места для семей и групп за посуточную доплату.",
    contact_eyebrow: "Отдел прямого бронирования",
    contact_title: "Запрос наличия мест и лучшей цены",
    contact_desc: "Выберите отель, категорию номера, даты и количество гостей. Предоплата не требуется — бронируйте сейчас, оплачивайте при заезде.",
    phone_label: "Телефон и WhatsApp (24/7)",
    email_label: "Официальный Email",
    location_label: "Главный офис",
    location_val: "Баку, Азербайджан",
    form_name: "Имя Фамилия / Турагентство",
    form_contact: "Ваш WhatsApp или Email",
    form_property: "Выберите отель",
    form_room: "Выберите категорию номера",
    opt_general: "B2B / Запрос о сотрудничестве",
    opt_hotel1: "City Apartment Baku (Нариманов)",
    opt_hotel2: "Miraj Hotel Baku (Ясамал)",
    opt_room_any: "Любой доступный номер / Лучшее предложение",
    form_checkin: "Дата заезда",
    form_checkout: "Дата выезда",
    form_adults: "Взрослые",
    form_children: "Дети",
    form_addons_label: "Дополнительные услуги (за отдельную плату)",
    chk_transfer: "Трансфер из/в аэропорт (GYD)",
    chk_early_late: "Ранний заезд / Поздний выезд",
    chk_laundry: "Прачечная и химчистка",
    chk_extrabed: "Дополнительная кровать",
    form_message: "Особые пожелания / Номер рейса (Необязательно)",
    form_submit: "Отправить запрос на бронирование",
    form_note: "Предоплата не требуется. Нажмите кнопку выше, чтобы отправить готовый запрос через WhatsApp или Email.",
    send_modal_title: "Выберите способ отправки запроса",
    send_modal_desc: "Ваш запрос сформирован. Выберите удобный канал для быстрого подтверждения и получения цены:",
    send_whatsapp_btn: "Отправить через WhatsApp",
    send_email_btn: "Отправить по официальному Email",
    form_success_msg: "Спасибо! Ваш запрос на бронирование сформирован.",
    rights: "Все права защищены."
  },
  ar: {
    nav_tagline: "شريك الحجوزات",
    nav_about: "من نحن",
    nav_hotels: "الفنادق الشريكة",
    nav_services: "خدمات الضيوف",
    nav_contact: "الحجز المباشر",
    hero_badge: "شبكة الضيافة والحجز المباشر",
    hero_title: "إقامات مختارة وحجز مباشر بأفضل الأسعار",
    hero_desc: "أسعار مباشرة بدون عمولات ودعم متواصل 24/7 يربط المسافرين والشركات ووكالات السفر بأفضل الفنادق الشريكة.",
    hero_cta_primary: "استكشف الفنادق والغرف",
    hero_cta_secondary: "اطلب التوفر وأفضل سعر",
    stat1_title: "أفضل سعر مباشر",
    stat1_desc: "بدون عمولات خفية",
    stat2_title: "ادفع عند الوصول",
    stat2_desc: "لا يتطلب دفع مسبق",
    stat3_title: "للأفراد والشركات",
    stat3_desc: "دعم متواصل 24/7",
    hotels_eyebrow: "محفظتنا الرسمية",
    hotels_title: "الفنادق والشقق الفندقية الشريكة",
    hotels_subtitle: "اضغط على أي فئة غرفة أدناه لمشاهدة الصور والسعة والمرافق المشمولة.",
    hotel1_tag: "شقق فندقية",
    hotel1_address: "منطقة ناريمانوف، شارع إسماعيل هدايت زاده 174، باكو",
    hotel1_desc: "شقق فندقية واسعة وعصرية بالقرب من وسط باكو، مثالية للعائلات والإقامات الطويلة ورجال الأعمال الباحثين عن الراحة والخصوصية.",
    hotel1_loc_title: "مميزات الموقع والمنطقة المحيطة",
    hotel1_loc_desc: "يقع مباشرة بجوار مركز حيدر علييف الشهير وعلى بعد 600 متر فقط من محطة مترو ناريمان ناريمانوف. يتوفر في الجوار المباشر سوبر ماركت 24/7 ومستشفى وصيدلية ومركز شرطة لراحتكم وأمانكم.",
    hotel2_tag: "فندق بوتيك",
    hotel2_address: "منطقة ياسامال، شارع حسين جاويد 520، باكو",
    hotel2_desc: "ضيافة فندقية راقية في ياسامال مع خدمة استقبال على مدار 24 ساعة وغرف مريحة وسهولة الوصول إلى المراكز التجارية والثقافية في باكو.",
    hotel2_loc_title: "مميزات الموقع والمنطقة المحيطة",
    hotel2_loc_desc: "يقع في جادة حسين جاويد الراقية على بعد 400 متر فقط من محطة مترو أكاديمية العلوم (Elmler Akademiyasi)، وبالقرب من الحدائق وسوبر ماركت وصيدلية 24/7.",
    verified_partner: "شريك رسمي",
    rooms_label: "فئات الغرف (اضغط لعرض الصور والتفاصيل)",
    click_photo_hint: "اضغط للتفاصيل",
    room_ca_1: "شقة قياسية بغرفة نوم واحدة (مع شرفة / بدون)",
    room_ca_2: "شقة قياسية بغرفتي نوم مع شرفة",
    room_ca_3: "شقة قياسية بغرفتي نوم (بدون غرفة معيشة)",
    room_ca_4: "شقة قياسية بغرفة نوم واحدة مع تراس",
    room_ca_5: "شقة ديلوكس بغرفة نوم واحدة (صالة مفتوحة وشرفة فرنسية)",
    room_ca_6: "شقة ديلوكس بغرفتي نوم (صالة مفتوحة وشرفة فرنسية)",
    room_mh_1: "غرفة قياسية مزدوجة",
    room_mh_2: "غرفة ديلوكس مزدوجة",
    room_mh_3: "غرفة ديلوكس مزدوجة مع شرفة",
    whatsapp_quick: "تواصل عبر واتساب",
    inquire_btn: "اطلب أفضل سعر ←",
    modal_gallery: "معرض صور الغرفة",
    modal_overview: "تفاصيل الغرفة",
    modal_occupancy: "السعة القصوى والأسرّة",
    modal_amenities: "مرافق وخدمات الغرفة",
    modal_pay_checkin: "✓ أفضل سعر مباشر • الدفع عند الوصول",
    modal_select_btn: "اختر الغرفة واحصل على السعر ←",
    services_eyebrow: "سياسة ضيافة شفافة",
    services_title: "الخدمات الإضافية وسياسة الرسوم",
    services_subtitle: "وفقاً لمعايير الحجز العالمية، يمكن طلب الخدمات الاختيارية أدناه عند الحجز مقابل رسوم إضافية.",
    badge_extra: "بتكلفة إضافية",
    badge_duration: "حسب المدة",
    srv1_title: "خدمة النقل من المطار (GYD)",
    srv1_desc: "استقبال وتوصيل خاص بسيارة سيدان أو ميني فان بين مطار حيدر علييف الدولي ومكان إقامتك.",
    srv2_title: "وصول مبكر / مغادرة متأخرة",
    srv2_desc: "يخضع لتوفر الغرف؛ يتم احتساب الرسوم الإضافية بناءً على عدد الساعات المطلوبة.",
    srv3_title: "غسيل وكي الملابس",
    srv3_desc: "خدمات غسيل وتنظيف جاف وكي الملابس متوفرة عند الطلب طوال فترة إقامتك.",
    srv4_title: "سرير إضافي وتجهيز الغرف",
    srv4_desc: "توفير أسرة إضافية للعائلات والمجموعات مقابل رسوم إضافية لكل ليلة.",
    contact_eyebrow: "مكتب الحجز المباشر",
    contact_title: "طلب التوفر وأفضل سعر مباشر",
    contact_desc: "اختر الفندق وفئة الغرفة والتواريخ وعدد الضيوف. لا يلزم الدفع المسبق — احجز الآن وادفع عند تسجيل الوصول.",
    phone_label: "الهاتف وواتساب (24/7)",
    email_label: "البريد الإلكتروني الرسمي",
    location_label: "المقر الرئيسي",
    location_val: "باكو، أذربيجان",
    form_name: "الاسم الكامل / وكالة السفر",
    form_contact: "رقم الواتساب أو البريد الإلكتروني",
    form_property: "اختر الفندق",
    form_room: "اختر فئة الغرفة",
    opt_general: "استفسار عام / شراكة B2B",
    opt_hotel1: "City Apartment Baku (ناريمانوف)",
    opt_hotel2: "Miraj Hotel Baku (ياسامال)",
    opt_room_any: "أي غرفة متاحة / أفضل عرض",
    form_checkin: "تاريخ الوصول",
    form_checkout: "تاريخ المغادرة",
    form_adults: "البالغين",
    form_children: "الأطفال",
    form_addons_label: "خدمات إضافية (بتكلفة إضافية)",
    chk_transfer: "النقل من المطار (GYD)",
    chk_early_late: "وصول مبكر / مغادرة متأخرة",
    chk_laundry: "غسيل وكي الملابس",
    chk_extrabed: "سرير إضافي",
    form_message: "طلبات خاصة / تفاصيل الرحلة (اختياري)",
    form_submit: "إرسال طلب الحجز",
    form_note: "لا يلزم الدفع الفوري. اضغط أعلاه لإرسال طلب الحجز الجاهز عبر واتساب أو البريد الإلكتروني الرسمي.",
    send_modal_title: "اختر طريقة إرسال طلب الحجز",
    send_modal_desc: "تم تجهيز تفاصيل حجزك. اختر القناة المفضلة للحصول على تأكيد وسعر فوري:",
    send_whatsapp_btn: "إرسال عبر واتساب (فوري)",
    send_email_btn: "إرسال عبر البريد الإلكتروني الرسمي",
    form_success_msg: "شكراً لك! تم تجهيز طلب الحجز الخاص بك.",
    rights: "جميع الحقوق محفوظة."
  }
};