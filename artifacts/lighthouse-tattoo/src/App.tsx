import { useState, useEffect, useCallback } from 'react'

const translations: Record<string, Record<string, string>> = {
  de: {
    heroSub: 'BLACK & GREY · REALISMO · BLACKWORK',
    heroTagline: 'PREMIUM UNDERGROUND TATTOO COLLECTIVE',
    studioWhatsApp: 'STUDIO KONTAKT',
    bookNow: 'TERMIN ANFRAGEN',
    artistsTitle: 'UNSERE KÜNSTLER',
    specLabel: 'Spezialisierung',
    specJuan: 'Blackwork, Dotwork',
    specChar: 'Realismo, Black & Grey',
    specMagatha: 'Fineline, Geometrisch',
    bookArtist: 'JETZT BUCHEN',
    aboutTitle: 'DAS STUDIO',
    aboutText: 'Lighthouse Tattoo ist ein Premium-Tattoo-Kollektiv im Herzen von Laureles, Medellín. Wir sind spezialisiert auf Black & Grey, Realismo und Blackwork. Jedes Tattoo ist ein individuelles Kunstwerk.',
    addressLabel: 'Adresse',
    hoursLabel: 'Öffnungszeiten',
    hoursValue: 'Freitag 10–20 Uhr, sonst nach Vereinbarung',
    piercingText: 'Piercing verfügbar',
    contactTitle: 'KONTAKT',
    followUs: 'FOLGE UNS',
    galleryTitle: 'GALERIE',
    copyright: '© 2026 LIGHTHOUSE TATTOO MEDELLÍN',
    bookingTitle: 'WUNSCHTERMIN WÄHLEN',
    bookingSubtitle: 'Wähle deinen bevorzugten Tag für',
    bookingConfirm: 'TERMIN ANFRAGEN',
    bookingCancel: 'ABBRECHEN',
    monthNames: 'Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember',
    dayNames: 'Mo,Di,Mi,Do,Fr,Sa,So',
  },
  en: {
    heroSub: 'BLACK & GREY · REALISM · BLACKWORK',
    heroTagline: 'PREMIUM UNDERGROUND TATTOO COLLECTIVE',
    studioWhatsApp: 'STUDIO CONTACT',
    bookNow: 'BOOK NOW',
    artistsTitle: 'OUR ARTISTS',
    specLabel: 'Specialization',
    specJuan: 'Blackwork, Dotwork',
    specChar: 'Realism, Black & Grey',
    specMagatha: 'Fineline, Geometric',
    bookArtist: 'BOOK NOW',
    aboutTitle: 'THE STUDIO',
    aboutText: 'Lighthouse Tattoo is a premium tattoo collective in the heart of Laureles, Medellín. We specialize in Black & Grey, Realism and Blackwork. Every tattoo is a unique piece of art.',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    hoursValue: 'Friday 10am–8pm, otherwise by appointment',
    piercingText: 'Piercing available',
    contactTitle: 'CONTACT',
    followUs: 'FOLLOW US',
    galleryTitle: 'GALLERY',
    copyright: '© 2026 LIGHTHOUSE TATTOO MEDELLÍN',
    bookingTitle: 'SELECT YOUR DATE',
    bookingSubtitle: 'Choose your preferred day for',
    bookingConfirm: 'REQUEST APPOINTMENT',
    bookingCancel: 'CANCEL',
    monthNames: 'January,February,March,April,May,June,July,August,September,October,November,December',
    dayNames: 'Mon,Tue,Wed,Thu,Fri,Sat,Sun',
  },
  es: {
    heroSub: 'BLACK & GREY · REALISMO · BLACKWORK',
    heroTagline: 'COLECTIVO DE TATUAJES UNDERGROUND PREMIUM',
    studioWhatsApp: 'CONTACTO STUDIO',
    bookNow: 'RESERVAR CITA',
    artistsTitle: 'NUESTROS ARTISTAS',
    specLabel: 'Especialización',
    specJuan: 'Blackwork, Dotwork',
    specChar: 'Realismo, Black & Grey',
    specMagatha: 'Fineline, Geométrico',
    bookArtist: 'RESERVAR AHORA',
    aboutTitle: 'EL ESTUDIO',
    aboutText: 'Lighthouse Tattoo es un colectivo de tatuajes premium en el corazón de Laureles, Medellín. Nos especializamos en Black & Grey, Realismo y Blackwork. Cada tatuaje es una obra de arte única.',
    addressLabel: 'Dirección',
    hoursLabel: 'Horario',
    hoursValue: 'Viernes 10–20h, resto con cita previa',
    piercingText: 'Piercing disponible',
    contactTitle: 'CONTACTO',
    followUs: 'SÍGUENOS',
    galleryTitle: 'GALERÍA',
    copyright: '© 2026 LIGHTHOUSE TATTOO MEDELLÍN',
    bookingTitle: 'ELIGE TU FECHA',
    bookingSubtitle: 'Selecciona tu día preferido para',
    bookingConfirm: 'SOLICITAR CITA',
    bookingCancel: 'CANCELAR',
    monthNames: 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre',
    dayNames: 'Lun,Mar,Mié,Jue,Vie,Sáb,Dom',
  },
  pt: {
    heroSub: 'BLACK & GREY · REALISMO · BLACKWORK',
    heroTagline: 'COLETIVO DE TATUAGEM UNDERGROUND PREMIUM',
    studioWhatsApp: 'CONTATO ESTÚDIO',
    bookNow: 'AGENDAR',
    artistsTitle: 'NOSSOS ARTISTAS',
    specLabel: 'Especialização',
    specJuan: 'Blackwork, Dotwork',
    specChar: 'Realismo, Black & Grey',
    specMagatha: 'Fineline, Geométrico',
    bookArtist: 'AGENDAR AGORA',
    aboutTitle: 'O ESTÚDIO',
    aboutText: 'Lighthouse Tattoo é um coletivo de tatuagem premium no coração de Laureles, Medellín. Somos especializados em Black & Grey, Realismo e Blackwork. Cada tatuagem é uma obra de arte única.',
    addressLabel: 'Endereço',
    hoursLabel: 'Horário',
    hoursValue: 'Sexta 10–20h, outros dias com agendamento',
    piercingText: 'Piercing disponível',
    contactTitle: 'CONTATO',
    followUs: 'SIGA-NOS',
    galleryTitle: 'GALERIA',
    copyright: '© 2026 LIGHTHOUSE TATTOO MEDELLÍN',
    bookingTitle: 'ESCOLHA SUA DATA',
    bookingSubtitle: 'Selecione seu dia preferido para',
    bookingConfirm: 'SOLICITAR AGENDAMENTO',
    bookingCancel: 'CANCELAR',
    monthNames: 'Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro',
    dayNames: 'Seg,Ter,Qua,Qui,Sex,Sáb,Dom',
  },
  fr: {
    heroSub: 'BLACK & GREY · RÉALISME · BLACKWORK',
    heroTagline: 'COLLECTIF DE TATOUAGE UNDERGROUND PREMIUM',
    studioWhatsApp: 'CONTACT STUDIO',
    bookNow: 'RÉSERVER',
    artistsTitle: 'NOS ARTISTES',
    specLabel: 'Spécialisation',
    specJuan: 'Blackwork, Dotwork',
    specChar: 'Réalisme, Black & Grey',
    specMagatha: 'Fineline, Géométrique',
    bookArtist: 'RÉSERVER',
    aboutTitle: 'LE STUDIO',
    aboutText: "Lighthouse Tattoo est un collectif de tatouage premium au cœur de Laureles, Medellín. Nous sommes spécialisés dans le Black & Grey, le Réalisme et le Blackwork. Chaque tatouage est une œuvre d'art unique.",
    addressLabel: 'Adresse',
    hoursLabel: 'Horaires',
    hoursValue: 'Vendredi 10h–20h, sinon sur rendez-vous',
    piercingText: 'Piercing disponible',
    contactTitle: 'CONTACT',
    followUs: 'SUIVEZ-NOUS',
    galleryTitle: 'GALERIE',
    copyright: '© 2026 LIGHTHOUSE TATTOO MEDELLÍN',
    bookingTitle: 'CHOISISSEZ VOTRE DATE',
    bookingSubtitle: 'Sélectionnez votre jour préféré pour',
    bookingConfirm: 'DEMANDER UN RENDEZ-VOUS',
    bookingCancel: 'ANNULER',
    monthNames: 'Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre',
    dayNames: 'Lun,Mar,Mer,Jeu,Ven,Sam,Dim',
  },
}

const artists = [
  {
    name: 'JUAN DANIEL',
    instagram: '@juandanie_ink',
    instagramUrl: 'https://instagram.com/juandanie_ink',
    specKey: 'specJuan',
    motto: '"Libera tu mente"',
    phone: '573103431772',
    portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778821350902-Jr8W713VOO46Gn3Lhrt3Vyzz38p2v5.png',
    works: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-48-00-407_com.instagram.android-edit-52ZOojaLludo4Hpy7MVDP4u9ZlHnHB.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-47-33-061_com.instagram.android-edit-kDVPqOoIhLsbI36PepU8QMZJRd2XKR.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-48-34-178_com.instagram.android-edit-e5fTu7iXDIarN8rfNu2a9zfdhKnQGk.jpg',
    ],
  },
  {
    name: 'CHAR',
    instagram: '@chartattooer',
    instagramUrl: 'https://instagram.com/chartattooer',
    specKey: 'specChar',
    motto: '"Smart, be nice"',
    phone: '573015581100',
    portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778821175040-6p2xFtC5rPGNa7sxuCPVuumHp50TOl.png',
    works: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-51-03-339_com.instagram.android-edit-Xb8ny8rnxtGALX5xkWFI9o4DJZQ7J6.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260514_235348-iYC4JIA3FXSHvPzABLW0Sy5GfkKudS.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-50-42-915_com.instagram.android-edit-pENpy9Wg1sDeIdApSbazdv1hTAbsUP.jpg',
    ],
  },
  {
    name: 'MAGATHA CRUZ',
    instagram: '@magatha.cruz',
    instagramUrl: 'https://instagram.com/magatha.cruz',
    specKey: 'specMagatha',
    motto: '"Made in Medellin"',
    phone: '573015581100',
    portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-45-49-886_com.instagram.android-edit-B4QXk06t3OXiD8MqRMO2lF9yQblcjy.jpg',
    works: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-44-16-792_com.instagram.android-edit-FzV3aLdT97wBWBWVrWfQsmBXrrW1MD.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-14-23-44-54-900_com.instagram.android-edit-MZ5yWAuRoAYr9VugIxAleVqtzHwtaz.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-15-15-28-06-902_com.instagram.android-edit-uZz3lxTGnX9W04cYwCiKPL16l2WtdS.jpg',
    ],
  },
]

type Artist = typeof artists[0]

const galleryImages = [
  { src: '/gallery-1.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-2.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-3.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-4.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-5.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-6.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-7.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-8.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
  { src: '/gallery-9.webp', alt: 'Tattoo by Lighthouse Tattoo Medell\u00edn' },
]

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">&times;</button>
        <img src={src} alt={alt} className="lightbox-image max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain" />
      </div>
    </div>
  )
}

function BookingModal({
  artist, t, onClose, onConfirm,
}: {
  artist: Artist; t: (key: string) => string; onClose: () => void; onConfirm: (date: Date) => void
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const monthNames = t('monthNames').split(',')
  const dayNames = t('dayNames').split(',')

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startingDay = (firstDay.getDay() + 6) % 7
    const days: (number | null)[] = []
    for (let i = 0; i < startingDay; i++) days.push(null)
    for (let i = 1; i <= lastDay.getDate(); i++) days.push(i)
    return days
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date < today
  }

  const handleDateClick = (day: number) => {
    if (!isDateDisabled(day)) {
      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
    }
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const days = getDaysInMonth(currentMonth)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div className="bg-black-card border-2 border-red-primary p-6 md:p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-serif text-2xl md:text-3xl text-red-primary text-center mb-2">{t('bookingTitle')}</h3>
        <p className="text-white text-center mb-6">
          {t('bookingSubtitle')} <span className="text-red-primary font-bold">{artist.name}</span>
        </p>
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="text-white hover:text-red-primary transition-colors text-2xl px-3 py-1">&larr;</button>
          <span className="text-white font-semibold text-lg">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
          <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="text-white hover:text-red-primary transition-colors text-2xl px-3 py-1">&rarr;</button>
        </div>
        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-3">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-gray-500 text-xs py-2 font-semibold uppercase tracking-wider border-b border-[#1a1a1a] pb-2">{day}</div>
          ))}
        </div>
        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1 mb-6">
          {days.map((day, idx) => {
            if (day === null) return <div key={idx} className="aspect-square" />
            const isToday =
              day === today.getDate() &&
              currentMonth.getMonth() === today.getMonth() &&
              currentMonth.getFullYear() === today.getFullYear()
            const isSelected =
              selectedDate &&
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === currentMonth.getMonth() &&
              selectedDate.getFullYear() === currentMonth.getFullYear()
            const disabled = isDateDisabled(day)
            return (
              <div key={idx} className="aspect-square p-0.5">
                <button
                  onClick={() => handleDateClick(day)}
                  disabled={disabled}
                  className={`w-full h-full flex items-center justify-center text-sm rounded-sm transition-all duration-200 relative
                    ${disabled
                      ? 'text-gray-600 cursor-not-allowed line-through decoration-gray-600'
                      : isSelected
                        ? 'bg-red-primary text-white font-bold shadow-[0_0_12px_rgba(230,0,0,0.6)] scale-105'
                        : isToday
                          ? 'text-white border border-red-primary/60 font-semibold hover:bg-red-primary hover:text-white'
                          : 'text-gray-300 hover:bg-red-primary hover:text-white'
                    }
                  `}
                >
                  {day}
                  {isToday && !disabled && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-primary" />}
                </button>
              </div>
            )
          })}
        </div>
        {/* Selected date preview */}
        {selectedDate && (
          <p className="text-center text-white mb-4 text-sm">
            <span className="text-gray-500">{t('bookingSubtitle')}</span>{' '}
            <span className="text-red-primary font-bold">{artist.name}</span>{' '}
            <span className="text-gray-500">&mdash;</span>{' '}
            <span className="font-semibold">{selectedDate.getDate()}. {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
          </p>
        )}
        {/* Action buttons */}
        <div className="flex gap-4">
          <button onClick={onClose} className="flex-1 py-3 border border-white/30 text-white/70 hover:bg-white/10 hover:text-white hover:border-white transition-colors uppercase font-bold tracking-wider text-sm">
            {t('bookingCancel')}
          </button>
          <button
            onClick={() => selectedDate && onConfirm(selectedDate)}
            disabled={!selectedDate}
            className={`flex-1 py-3 uppercase font-bold tracking-wider text-sm transition-all ${selectedDate ? 'bg-red-primary text-white hover:bg-red-700 shadow-[0_0_20px_rgba(230,0,0,0.4)]' : 'bg-[#1a1a1a] text-gray-600 cursor-not-allowed'}`}
          >
            {t('bookingConfirm')}
          </button>
        </div>
      </div>
    </div>
  )
}

function ArtistCard({ artist, t, onImageClick, onBookClick }: {
  artist: Artist; t: (key: string) => string; onImageClick: (src: string, alt: string) => void; onBookClick: (artist: Artist) => void
}) {
  return (
    <article className="artist-card p-6 md:p-8">
      <div className="image-frame mx-auto mb-6 w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden">
        <img src={artist.portrait} alt={`Portrait ${artist.name}`} className="artist-portrait w-full h-full object-cover" />
      </div>
      <h3 className="font-serif text-3xl md:text-4xl text-center mb-2 tracking-wider text-red-primary">{artist.name}</h3>
      <p className="text-center mb-4">
        <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-red-primary transition-colors text-base tracking-wide group">
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
          {artist.instagram}
        </a>
      </p>
      <p className="text-center mb-2">
        <span className="text-red-primary uppercase tracking-widest text-sm font-semibold">{t('specLabel')}</span>
        <br />
        <span className="text-white text-lg">{t(artist.specKey)}</span>
      </p>
      <p className="text-center italic text-gray-400 mb-6 text-base">{artist.motto}</p>
      <div className="flex justify-center mb-8">
        <button onClick={() => onBookClick(artist)} className="whatsapp-btn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.487 0-4.807-.734-6.752-1.995l-.471-.312-2.97.996.996-2.97-.312-.471A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          {t('bookArtist')}
        </button>
      </div>
      <div className="works-grid">
        {artist.works.map((work, idx) => (
          <div key={idx} className="image-frame">
            <img
              src={work}
              alt={`${artist.name} work ${idx + 1}`}
              className="w-full aspect-square object-cover cursor-pointer"
              onClick={() => onImageClick(work, `${artist.name} work ${idx + 1}`)}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </article>
  )
}

function LanguageSwitch({ currentLang, onLanguageChange }: { currentLang: string; onLanguageChange: (lang: string) => void }) {
  const languages = [
    { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
    { code: 'pt', flag: '🇧🇷', label: 'Português' },
    { code: 'fr', flag: '🇫🇷', label: 'Français' },
  ]
  return (
    <div className="language-switch" role="navigation" aria-label="Language selection">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={currentLang === lang.code ? 'active' : ''}
          aria-current={currentLang === lang.code ? 'true' : undefined}
          aria-label={lang.label}
          title={lang.label}
        >
          <span>{lang.flag}</span>
        </button>
      ))}
    </div>
  )
}

const LOGO = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-05-15-00-48-36-754_com.google.android.googlequicksearchbox-edit-0Kq1CrRxk2vaEeDVzRmt8mv3htM1ct.jpg'

export default function App() {
  const [language, setLanguage] = useState('de')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
  const [bookingArtist, setBookingArtist] = useState<Artist | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('lighthouse-lang')
    if (saved && translations[saved]) setLanguage(saved)
  }, [])

  const handleLanguageChange = useCallback((lang: string) => {
    setLanguage(lang)
    localStorage.setItem('lighthouse-lang', lang)
  }, [])

  const t = useCallback((key: string): string => {
    return translations[language]?.[key] || translations['de'][key] || key
  }, [language])

  const openLightbox = useCallback((src: string, alt: string) => setLightboxImage({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightboxImage(null), [])
  const openBooking = useCallback((artist: Artist) => setBookingArtist(artist), [])
  const closeBooking = useCallback(() => setBookingArtist(null), [])

  const handleBookingConfirm = useCallback((date: Date) => {
    if (!bookingArtist) return
    const msgLang = language === 'es' ? 'es' : 'en'
    const englishMonths = 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',')
    const spanishMonths = 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre'.split(',')
    const monthNames = msgLang === 'es' ? spanishMonths : englishMonths
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    const messageTemplate = msgLang === 'es'
      ? 'Hola! Me gustaría reservar una cita con {artist} el {date}.'
      : 'Hi! I would like to book an appointment with {artist} on {date}.'
    const message = messageTemplate.replace('{artist}', bookingArtist.name).replace('{date}', formattedDate)
    window.open(`https://wa.me/${bookingArtist.phone}?text=${encodeURIComponent(message)}`, '_blank')
    closeBooking()
  }, [bookingArtist, language, closeBooking])

  const scrollToArtists = () => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })

  if (!mounted) {
    return (
      <div style={{ minHeight: '100vh', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 48, height: 48, border: '2px solid #e60000', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      </div>
    )
  }

  return (
    <>
      <LanguageSwitch currentLang={language} onLanguageChange={handleLanguageChange} />

      {lightboxImage && <Lightbox src={lightboxImage.src} alt={lightboxImage.alt} onClose={closeLightbox} />}
      {bookingArtist && <BookingModal artist={bookingArtist} t={t} onClose={closeBooking} onConfirm={handleBookingConfirm} />}

      <main className="min-h-screen">
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'rgba(230,0,0,0.08)', filter: 'blur(120px)' }} />
          </div>
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <img src={LOGO} alt="Lighthouse Tattoo Logo" className="mx-auto w-32 h-32 md:w-40 md:h-40 object-contain" />
            </div>
            <h1 className="hero-title font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 tracking-wider">
              <span className="text-red-primary">LIGHTHOUSE</span>{' '}
              <span className="text-white">TATTOO</span>
            </h1>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-6 tracking-widest">MEDELLÍN</p>
            <div className="red-line mx-auto mb-6" />
            <p className="text-white text-base md:text-lg tracking-[0.3em] mb-3 uppercase font-medium">{t('heroSub')}</p>
            <p className="text-red-primary text-xs md:text-sm tracking-[0.25em] mb-12 uppercase">{t('heroTagline')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/573015581100?text=${encodeURIComponent(language === 'es' ? 'Hola! Estoy interesado en un tatuaje en Lighthouse Tattoo Medellín.' : 'Hi! I am interested in getting a tattoo at Lighthouse Tattoo Medellín.')}`}
                target="_blank" rel="noopener noreferrer" className="whatsapp-btn whatsapp-btn-pulse"
              >
                <WhatsAppIcon />
                {t('studioWhatsApp')}
              </a>
              <button onClick={scrollToArtists} className="whatsapp-btn !bg-transparent border border-[#e60000] hover:!bg-[rgba(230,0,0,0.2)]">
                {t('bookNow')}
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-red-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <div className="section-divider" />

        {/* ARTISTS */}
        <section id="artists" className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4 text-red-primary">{t('artistsTitle')}</h2>
              <div className="red-line mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {artists.map((artist) => (
                <ArtistCard key={artist.name} artist={artist} t={t} onImageClick={openLightbox} onBookClick={openBooking} />
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ABOUT */}
        <section id="about" className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4 text-red-primary">{t('aboutTitle')}</h2>
              <div className="red-line mx-auto" />
            </div>
            <div className="artist-card p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <img src={LOGO} alt="Lighthouse Tattoo Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80" />
              </div>
              <p className="text-white text-center text-lg md:text-xl leading-relaxed mb-8">{t('aboutText')}</p>
              <div className="border-t border-[rgba(230,0,0,0.3)] pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                <div>
                  <p className="text-red-primary uppercase tracking-widest text-sm mb-3 font-semibold">{t('addressLabel')}</p>
                  <p className="text-white text-lg leading-relaxed">Carrera 74 #43-18<br />Laureles, Medellín<br />Antioquia 050031</p>
                </div>
                <div>
                  <p className="text-red-primary uppercase tracking-widest text-sm mb-3 font-semibold">{t('hoursLabel')}</p>
                  <p className="text-white text-lg">{t('hoursValue')}</p>
                  <p className="text-white mt-3 text-lg">{t('piercingText')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* CONTACT */}
        <section id="contact" className="py-16 md:py-24 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4 text-red-primary">{t('contactTitle')}</h2>
            <div className="red-line mx-auto mb-12" />
            <a
              href={`https://wa.me/573015581100?text=${encodeURIComponent(language === 'es' ? 'Hola! Tengo una pregunta sobre Lighthouse Tattoo Medellín.' : 'Hi! I have a question about Lighthouse Tattoo Medellín.')}`}
              target="_blank" rel="noopener noreferrer"
              className="whatsapp-btn whatsapp-btn-pulse text-lg px-12 py-5 mb-8 inline-flex"
            >
              <WhatsAppIcon className="w-6 h-6" />
              WHATSAPP
            </a>
            <div className="mt-8">
              <p className="text-red-primary uppercase tracking-widest text-xs mb-4">{t('followUs')}</p>
              <a href="https://instagram.com/lighthousetattoo.medellin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-red-primary transition-colors text-lg">
                <InstagramIcon />
                @lighthousetattoo.medellin
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* GALLERY */}
        <section id="gallery" className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4 text-red-primary">{t('galleryTitle')}</h2>
              <div className="red-line mx-auto" />
            </div>
            <div className="gallery-grid">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="gallery-item image-frame" onClick={() => openLightbox(img.src, img.alt)}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="gallery-img w-full h-full object-cover cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-4 border-t border-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-sm tracking-widest mb-6">{t('copyright')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <span className="watermark">MARTIAL CULTURAL</span>
              <span className="watermark">AMERICA \u00b7 COLOMBIA \u00b7 RIO DE JANEIRO \u00b7 BRASIL</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.487 0-4.807-.734-6.752-1.995l-.471-.312-2.97.996.996-2.97-.312-.471A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  )
}
