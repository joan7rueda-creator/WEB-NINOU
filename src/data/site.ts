// Datos objetivos del negocio (independientes del idioma).
// Editar aquí actualiza automáticamente footer, cabecera, botones de contacto y SEO estructurado.

const RAW_ADDRESS = 'Carrer Major 140, 08470 Sant Celoni, Barcelona';

export const SITE = {
  name: 'Ninou Marroquineria',
  foundedYear: 1893,

  address: {
    street: 'Carrer Major, 140',
    postalCode: '08470',
    city: 'Sant Celoni',
    region: 'Barcelona',
    country: 'ES',
  },

  contact: {
    phone: '+34938671048',
    phoneDisplay: '938 671 048',
    whatsapp: '+34609839028',
    whatsappDisplay: '609 839 028',
    email: 'ninou.marroquineria@gmail.com',
  },

  social: {
    instagram: 'https://www.instagram.com/ninou.marroquineria/',
    instagramHandle: '@ninou.marroquineria',
  },

  // Días sin horario (`ranges`) se consideran cerrados.
  hours: [
    { day: 'monday', ranges: [] as [string, string][] },
    { day: 'tuesday', ranges: [['10:00', '13:00'], ['17:00', '20:30']] as [string, string][] },
    { day: 'wednesday', ranges: [['10:00', '13:00'], ['17:00', '20:30']] as [string, string][] },
    { day: 'thursday', ranges: [['10:00', '13:00'], ['17:00', '20:30']] as [string, string][] },
    { day: 'friday', ranges: [['10:00', '13:00'], ['17:00', '20:30']] as [string, string][] },
    { day: 'saturday', ranges: [['10:00', '13:00'], ['17:00', '20:30']] as [string, string][] },
    { day: 'sunday', ranges: [] as [string, string][] },
  ],

  maps: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(RAW_ADDRESS)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RAW_ADDRESS)}`,
  },

  whatsappUrl(message: string) {
    return `https://wa.me/${this.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
  },

  // TODO: crear una clave gratuita en https://web3forms.com con el correo
  // ninou.marroquineria@gmail.com y pegarla aquí para activar el formulario de contacto.
  web3FormsAccessKey: '',
} as const;

export type WeekDay = (typeof SITE.hours)[number]['day'];
