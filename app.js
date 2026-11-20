// ==========================================
// WILDBREEZE — INTERACTIVE LOGIC & BOOKING ENGINE (app.js)
// ==========================================

let currentLang = localStorage.getItem('wb_lang') || 'en';
let activeRoomKey = null;
let lastGeneratedTemplate = { whatsappUrl: '', mailtoUrl: '' };

// 1. Otel seçildikdə həmin otelin otaq kateqoriyalarını formadakı siyahıya doldurur
function populateRoomDropdown(selectedHotel, preselectedRoomKey = '') {
  const roomSelect = document.getElementById('room-select');
  if (!roomSelect) return;

  const t = translations[currentLang] || translations.en;
  roomSelect.innerHTML = '';

  // Standart "İstənilən uyğun otaq" seçimi
  const defaultOpt = document.createElement('option');
  defaultOpt.value = 'Any Available Room';
  defaultOpt.setAttribute('data-i18n', 'opt_room_any');
  defaultOpt.textContent = t.opt_room_any || 'Any Available Room / Best Offer';
  roomSelect.appendChild(defaultOpt);

  // Seçilmiş otelə uyğun otaqları əlavə et
  Object.keys(roomDatabase).forEach((key) => {
    const room = roomDatabase[key];
    if (selectedHotel === 'General Inquiry' || room.hotel === selectedHotel) {
      const opt = document.createElement('option');
      opt.value = key;
      const roomTitle = room.details[currentLang]?.title || room.details.en.title;
      opt.textContent = `${room.hotel.includes('City') ? 'CA' : 'MH'} — ${roomTitle} (${room.size})`;
      if (preselectedRoomKey === key) {
        opt.selected = true;
      }
      roomSelect.appendChild(opt);
    }
  });
}

// 2. Dil Dəyişdirmə Funksiyası (4 Dil + RTL Dəstəyi)
function setLang(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('wb_lang', lang);

  const htmlEl = document.documentElement;
  htmlEl.setAttribute('lang', lang);
  htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Aktiv dil düyməsinin rəngini yenilə (Loqo rəngi: brandGreen)
  ['en', 'az', 'ru', 'ar'].forEach((l) => {
    const btn = document.getElementById('btn-' + l);
    if (btn) {
      if (l === lang) {
        btn.className = 'lang-btn px-2.5 py-1 text-xs font-semibold rounded-md transition-all bg-brandGreen text-white shadow-sm';
      } else {
        btn.className = 'lang-btn px-2.5 py-1 text-xs font-semibold rounded-md transition-all text-slateText hover:text-charcoal';
      }
    }
  });

  // Bütün data-i18n elementlərini tərcümə et
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Gizli dil xanasını yenilə
  const hiddenLangInput = document.getElementById('form-lang-input');
  if (hiddenLangInput) hiddenLangInput.value = lang.toUpperCase();

  // Otaq siyahısını cari dildə yenilə
  const hotelSelect = document.getElementById('hotel-select');
  const roomSelect = document.getElementById('room-select');
  if (hotelSelect && roomSelect) {
    populateRoomDropdown(hotelSelect.value, roomSelect.value);
  }

  // Əgər otaq pəncərəsi (modal) açıqdırsa, onu da cari dildə yenilə
  const modal = document.getElementById('room-modal');
  if (activeRoomKey && modal && !modal.classList.contains('hidden')) {
    openRoomModal(activeRoomKey);
  }
}

// 3. Otaq Detalları və Qalereya Pəncərəsini (Modal) Açmaq
function openRoomModal(roomKey) {
  const room = roomDatabase[roomKey];
  if (!room) return;
  activeRoomKey = roomKey;

  const lang = currentLang || 'en';
  const rData = room.details[lang] || room.details.en;

  document.getElementById('modal-hotel-name').textContent = room.hotel;
  document.getElementById('modal-room-title').textContent = rData.title;
  document.getElementById('modal-room-size').textContent = room.size;
  document.getElementById('modal-room-capacity').textContent = rData.capacity;

  const descEl = document.getElementById('modal-room-desc');
  if (descEl) descEl.textContent = rData.desc || '';

  // Otaq imkanlarını doldur
  const featuresContainer = document.getElementById('modal-features-list');
  if (featuresContainer) {
    const features = room.hotel === 'City Apartment Baku' ? caFeatures : mhFeatures;
    featuresContainer.innerHTML = features
      .map(
        (f) =>
          `<span class="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white text-charcoal border border-borderGray shadow-2xs">${
            f[lang] || f.en
          }</span>`
      )
      .join('');
  }

  // Əsas Şəkil və Kiçik Şəkillər (Thumbnails)
  const mainImg = document.getElementById('modal-main-img');
  const fallbackImg = room.hotel === 'City Apartment Baku' ? 'cityapartmentjpeg.jpeg' : 'miraj.jpeg';
  mainImg.onerror = function () {
    this.onerror = null;
    this.src = fallbackImg;
  };
  mainImg.src = room.images[0];

  const thumbContainer = document.getElementById('modal-thumbnails');
  thumbContainer.innerHTML = '';
  room.images.forEach((imgSrc, index) => {
    const thumbDiv = document.createElement('div');
    thumbDiv.className = `h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
      index === 0 ? 'border-brandGreen shadow-sm' : 'border-borderGray opacity-75 hover:opacity-100'
    }`;

    const thumbImg = document.createElement('img');
    thumbImg.src = imgSrc;
    thumbImg.alt = `${rData.title} photo ${index + 1}`;
    thumbImg.loading = 'lazy';
    thumbImg.className = 'w-full h-full object-cover';
    thumbImg.onerror = function () {
      this.onerror = null;
      this.src = fallbackImg;
    };

    thumbDiv.appendChild(thumbImg);
    thumbDiv.onclick = () => {
      mainImg.src = thumbImg.src;
      document.querySelectorAll('#modal-thumbnails > div').forEach((d) => {
        d.classList.remove('border-brandGreen', 'shadow-sm');
        d.classList.add('border-borderGray', 'opacity-75');
      });
      thumbDiv.classList.remove('border-borderGray', 'opacity-75');
      thumbDiv.classList.add('border-brandGreen', 'shadow-sm');
    };
    thumbContainer.appendChild(thumbDiv);
  });

  const modal = document.getElementById('room-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeRoomModal() {
  const modal = document.getElementById('room-modal');
  if (modal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

// 4. Otel kartından və ya Modaldan birbaşa Rezervasiya Formasına Keçid
function selectHotel(hotelName, roomKey = '') {
  const hotelSelect = document.getElementById('hotel-select');
  if (hotelSelect) {
    hotelSelect.value = hotelName;
    populateRoomDropdown(hotelName, roomKey);
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function bookThisRoomFromModal() {
  if (!activeRoomKey) return;
  const room = roomDatabase[activeRoomKey];
  if (!room) return;

  const selectedKey = activeRoomKey;
  closeRoomModal();
  selectHotel(room.hotel, selectedKey);
}

// 5. Tarix Hesablaması (Keçmiş tarixləri bloklayır və gecə sayını tapır)
function initDatePickers() {
  const checkinInput = document.getElementById('checkin-date');
  const checkoutInput = document.getElementById('checkout-date');
  if (!checkinInput || !checkoutInput) return;

  const today = new Date().toISOString().split('T')[0];
  checkinInput.min = today;
  checkoutInput.min = today;

  checkinInput.addEventListener('change', () => {
    if (checkinInput.value) {
      const nextDay = new Date(checkinInput.value);
      nextDay.setDate(nextDay.getDate() + 1);
      const minCheckout = nextDay.toISOString().split('T')[0];
      checkoutInput.min = minCheckout;
      if (!checkoutInput.value || checkoutInput.value <= checkinInput.value) {
        checkoutInput.value = minCheckout;
      }
    }
  });
}

function calculateNights(checkin, checkout) {
  if (!checkin || !checkout) return 0;
  const d1 = new Date(checkin);
  const d2 = new Date(checkout);
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

// 6. Rezervasiya Şablonu Generatoru və Göndərmə Seçimi (WhatsApp + Email)
function handleReservationSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const guestName = document.getElementById('guest-name')?.value.trim() || '-';
  const guestContact = document.getElementById('guest-contact')?.value.trim() || '-';
  const property = document.getElementById('hotel-select')?.value || 'City Apartment Baku';
  const roomKey = document.getElementById('room-select')?.value || 'Any Available Room';
  const checkin = document.getElementById('checkin-date')?.value || 'Not specified';
  const checkout = document.getElementById('checkout-date')?.value || 'Not specified';
  const adults = document.getElementById('adults-count')?.value || '2';
  const children = document.getElementById('children-count')?.value || '0';
  const notes = document.getElementById('form-message-box')?.value.trim() || 'None';

  const roomObj = roomDatabase[roomKey];
  const roomNameEn = roomObj ? `${roomObj.details.en.title} (${roomObj.size})` : 'Any Available Room / Best Offer';
  const nights = calculateNights(checkin, checkout);
  const nightsText = nights > 0 ? ` (${nights} ${nights === 1 ? 'Night' : 'Nights'})` : '';

  // Seçilmiş əlavə xidmətləri topla
  const selectedAddons = Array.from(form.querySelectorAll('input[name="addons"]:checked')).map((cb) => cb.value);
  const addonsText = selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None';

  // Peşəkar Otelçilik Rezervasiya Şablonu
  const messageLines = [
    `Hello Wildbreeze Reservations Team,`,
    `I would like to request availability and the best direct rate (Book Now, Pay at Check-in):`,
    ``,
    `Property: ${property}`,
    `Room Category: ${roomNameEn}`,
    `Check-in: ${checkin}`,
    `Check-out: ${checkout}${nightsText}`,
    `Guests: ${adults} Adults, ${children} Children`,
    `Add-on Services: ${addonsText}`,
    `Guest / Agency Name: ${guestName}`,
    `Contact: ${guestContact}`,
    `Special Requests: ${notes}`,
    ``,
    `Please confirm availability and total rate for these dates.`
  ];

  const fullText = messageLines.join('\n');
  const subject = `Reservation & Rate Request — ${property} (${checkin} to ${checkout})`;

  lastGeneratedTemplate.whatsappUrl = `https://wa.me/994553446660?text=${encodeURIComponent(fullText)}`;
  lastGeneratedTemplate.mailtoUrl = `mailto:info@gowildbreeze.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullText)}`;

  const summaryInput = document.getElementById('formatted-summary-input');
  if (summaryInput) summaryInput.value = fullText;

  // Qonaq üçün WhatsApp / Email seçim pəncərəsini göstər
  const previewBox = document.getElementById('template-preview-text');
  if (previewBox) previewBox.textContent = fullText;

  const sendModal = document.getElementById('send-choice-modal');
  if (sendModal) {
    sendModal.classList.remove('hidden');
    sendModal.classList.add('flex');
  }
}

function triggerWhatsAppSend() {
  if (lastGeneratedTemplate.whatsappUrl) {
    window.open(lastGeneratedTemplate.whatsappUrl, '_blank', 'noopener');
  }
  closeSendChoiceModal();
}

function triggerEmailSend() {
  if (lastGeneratedTemplate.mailtoUrl) {
    window.location.href = lastGeneratedTemplate.mailtoUrl;
  }
  closeSendChoiceModal();
}

function closeSendChoiceModal() {
  const sendModal = document.getElementById('send-choice-modal');
  if (sendModal) {
    sendModal.classList.remove('flex');
    sendModal.classList.add('hidden');
  }
  const successBanner = document.getElementById('form-success');
  if (successBanner) {
    successBanner.classList.remove('hidden');
  }
}

// 7. Səhifə Yükləndikdə İnisializasiya
document.addEventListener('DOMContentLoaded', () => {
  initDatePickers();

  const hotelSelect = document.getElementById('hotel-select');
  if (hotelSelect) {
    populateRoomDropdown(hotelSelect.value);
    hotelSelect.addEventListener('change', (e) => {
      populateRoomDropdown(e.target.value);
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleReservationSubmit);
  }

  // Modal kənarına və ya ESC düyməsinə basdıqda bağlanma
  const roomModal = document.getElementById('room-modal');
  if (roomModal) {
    roomModal.addEventListener('click', (e) => {
      if (e.target === roomModal) closeRoomModal();
    });
  }

  const sendModal = document.getElementById('send-choice-modal');
  if (sendModal) {
    sendModal.addEventListener('click', (e) => {
      if (e.target === sendModal) closeSendChoiceModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeRoomModal();
      closeSendChoiceModal();
    }
  });

  setLang(currentLang);
});