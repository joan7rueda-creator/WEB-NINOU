export const languages = {
  ca: 'Català',
  es: 'Castellano',
} as const;

export const defaultLang = 'ca' as const;

export const dayLabels = {
  ca: {
    monday: 'Dilluns',
    tuesday: 'Dimarts',
    wednesday: 'Dimecres',
    thursday: 'Dijous',
    friday: 'Divendres',
    saturday: 'Dissabte',
    sunday: 'Diumenge',
  },
  es: {
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
  },
} as const;

export const ui = {
  ca: {
    'site.tagline': "L'elegància que et fa brillar",
    'site.description':
      "Marroquineria familiar a Sant Celoni des de 1893. Cinc generacions dedicades a l'elegància, la qualitat i un tracte proper.",

    'nav.home': 'Inici',
    'nav.about': 'Qui som',
    'nav.products': 'Productes',
    'nav.gallery': 'Galeria',
    'nav.storeInfo': 'La botiga',
    'nav.contact': 'Contacte',

    'hero.eyebrow': 'Des de 1893 a Sant Celoni',
    'hero.title': 'Ninou Marroquineria',
    'hero.subtitle': "L'elegància que et fa brillar",
    'hero.cta.primary': 'Visita’ns',
    'hero.cta.secondary': 'Truca’ns ara',

    'about.eyebrow': 'La nostra història',
    'about.title': '130 anys cuidant de tu',
    'about.p1':
      'La història de Ninou Marroquineria comença l’any 1893 a Sant Celoni, quan la germana gran de l’avi Josep Ninou Serra va obrir una petita botiga coneguda com «Ca l’Esparter». Allà es venien articles d’espart: cordes, catifes, llitets de canalla... peces fetes a mà amb paciència i dedicació.',
    'about.p2':
      'Als anys 60, la mare de la Teresa va agafar el relleu i va transformar la botiga, introduint bosses, complements i articles de marroquineria, amb una aposta clara per la qualitat i el bon gust.',
    'about.p3':
      'Des de petita, la Teresa hi ajudava, aprenent entre mostradors, tractes i clientela fidel. Ja fa 35 anys que n’està al capdavant, buscant cada temporada peces úniques, textures naturals i dissenys atemporals que t’acompanyin molts anys.',
    'about.p4':
      'Perquè a Ninou no venem només bosses o vestits: venem elegància, durabilitat i un assessorament proper, sincer i amb ànima.',
    'about.stat1.value': '130+',
    'about.stat1.label': 'anys d’història',
    'about.stat2.value': '5',
    'about.stat2.label': 'generacions',
    'about.stat3.value': '35',
    'about.stat3.label': 'anys amb la Teresa al capdavant',

    'products.eyebrow': 'Què hi trobaràs',
    'products.title': 'Productes',
    'products.subtitle': 'Peces seleccionades amb criteri, pensades per durar-te molts anys.',
    'products.cta': 'Vine a descobrir-ho a la botiga',
    'products.cat.bags': 'Bosses',
    'products.cat.bags.desc': 'Bosses de pell i marroquineria triades per la seva qualitat i disseny atemporal.',
    'products.cat.complements': 'Complements',
    'products.cat.complements.desc': 'Cinturons, carteres, moneders i altres detalls que marquen la diferència.',
    'products.cat.clothing': 'Roba',
    'products.cat.clothing.desc': 'Peces de vestir triades amb el mateix criteri de sempre: qualitat i bon gust.',
    'products.cat.footwear': 'Calçat',
    'products.cat.footwear.desc': 'Calçat còmode i elegant per a qualsevol ocasió.',
    'products.category.back': 'Tornar a Productes',
    'products.category.comingSoon': 'Estem preparant aquesta categoria. Molt aviat hi trobaràs aquí les peces seleccionades.',

    'gallery.eyebrow': 'Un cop d’ull',
    'gallery.title': 'Galeria',
    'gallery.alt.1': 'Bossa daurada perforada, model exhibit a la botiga Ninou',
    'gallery.alt.2': 'Bossa de palla amb detall daurat i nansa de bambú',
    'gallery.alt.3': 'Bossa de tela amb estampat floral brodat',
    'gallery.alt.4': 'Bossa bandolera blanca i marró de la marca Martina K',
    'gallery.alt.5': 'Bossa de ràfia negra i blanca Rive Gauche Paris',
    'gallery.alt.6': 'Bossa de palla amb panell blau Cacharel',

    'storeInfo.eyebrow': 'Informació',
    'storeInfo.title': 'La botiga',
    'storeInfo.address': 'Adreça',
    'storeInfo.phone': 'Telèfon',
    'storeInfo.email': 'Correu electrònic',
    'storeInfo.social': 'Xarxes socials',

    'hours.title': 'Horari',
    'hours.closed': 'Tancat',
    'hours.openNow': 'Obert ara',
    'hours.closedNow': 'Tancat ara',

    'location.cta': 'Com arribar-hi',

    'contact.eyebrow': 'Contacte',
    'contact.title': 'Escriu-nos',
    'contact.subtitle':
      'Resoldrem els teus dubtes tan aviat com puguem.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Correu electrònic',
    'contact.form.phone': 'Telèfon (opcional)',
    'contact.form.message': 'Missatge',
    'contact.form.submit': 'Enviar missatge',
    'contact.form.sending': 'Enviant...',
    'contact.form.success': 'Missatge enviat! Et respondrem aviat.',
    'contact.form.error': 'Hi ha hagut un error. Torna-ho a provar o truca’ns.',

    'cta.call': 'Truca’ns',
    'cta.whatsapp': 'WhatsApp',
    'cta.whatsapp.message': 'Hola! M’agradaria consultar-vos...',

    'footer.legal.rights': 'Tots els drets reservats.',
    'footer.legal.madeWith': 'Lloc web dissenyat amb cura.',

    'a11y.skipToContent': 'Ves al contingut principal',
    'a11y.openMenu': 'Obrir menú',
    'a11y.closeMenu': 'Tancar menú',
    'a11y.languageSwitcher': 'Canviar idioma',
  },
  es: {
    'site.tagline': 'La elegancia que te hace brillar',
    'site.description':
      'Marroquinería familiar en Sant Celoni desde 1893. Cinco generaciones dedicadas a la elegancia, la calidad y un trato cercano.',

    'nav.home': 'Inicio',
    'nav.about': 'Quiénes somos',
    'nav.products': 'Productos',
    'nav.gallery': 'Galería',
    'nav.storeInfo': 'La tienda',
    'nav.contact': 'Contacto',

    'hero.eyebrow': 'Desde 1893 en Sant Celoni',
    'hero.title': 'Ninou Marroquinería',
    'hero.subtitle': 'La elegancia que te hace brillar',
    'hero.cta.primary': 'Visítanos',
    'hero.cta.secondary': 'Llámanos ahora',

    'about.eyebrow': 'Nuestra historia',
    'about.title': '130 años cuidando de ti',
    'about.p1':
      'La historia de Ninou Marroquinería comienza en 1893 en Sant Celoni, cuando la hermana mayor del abuelo Josep Ninou Serra abrió una pequeña tienda conocida como «Ca l’Esparter». Allí se vendían artículos de esparto: cuerdas, alfombras, cunas de mimbre... piezas hechas a mano con paciencia y dedicación.',
    'about.p2':
      'En los años 60, la madre de Teresa tomó el relevo y transformó la tienda, introduciendo bolsos, complementos y artículos de marroquinería, apostando claramente por la calidad y el buen gusto.',
    'about.p3':
      'Desde pequeña, Teresa ayudaba en la tienda, aprendiendo entre mostradores, trato con clientes y clientela fiel. Hace ya 35 años que está al frente, buscando cada temporada piezas únicas, texturas naturales y diseños atemporales que te acompañen muchos años.',
    'about.p4':
      'Porque en Ninou no vendemos solo bolsos o ropa: vendemos elegancia, durabilidad y un asesoramiento cercano, sincero y con alma.',
    'about.stat1.value': '130+',
    'about.stat1.label': 'años de historia',
    'about.stat2.value': '5',
    'about.stat2.label': 'generaciones',
    'about.stat3.value': '35',
    'about.stat3.label': 'años con Teresa al frente',

    'products.eyebrow': 'Qué encontrarás',
    'products.title': 'Productos',
    'products.subtitle': 'Piezas seleccionadas con criterio, pensadas para durarte muchos años.',
    'products.cta': 'Ven a descubrirlo a la tienda',
    'products.cat.bags': 'Bolsos',
    'products.cat.bags.desc': 'Bolsos de piel y marroquinería elegidos por su calidad y diseño atemporal.',
    'products.cat.complements': 'Complementos',
    'products.cat.complements.desc': 'Cinturones, carteras, monederos y otros detalles que marcan la diferencia.',
    'products.cat.clothing': 'Ropa',
    'products.cat.clothing.desc': 'Prendas elegidas con el mismo criterio de siempre: calidad y buen gusto.',
    'products.cat.footwear': 'Calzado',
    'products.cat.footwear.desc': 'Calzado cómodo y elegante para cualquier ocasión.',
    'products.category.back': 'Volver a Productos',
    'products.category.comingSoon': 'Estamos preparando esta categoría. Muy pronto encontrarás aquí las piezas seleccionadas.',

    'gallery.eyebrow': 'Un vistazo',
    'gallery.title': 'Galería',
    'gallery.alt.1': 'Bolso dorado perforado, modelo expuesto en la tienda Ninou',
    'gallery.alt.2': 'Bolso de paja con detalle dorado y asa de bambú',
    'gallery.alt.3': 'Bolso de tela con estampado floral bordado',
    'gallery.alt.4': 'Bolso bandolera blanco y marrón de la marca Martina K',
    'gallery.alt.5': 'Bolso de rafia negro y blanco Rive Gauche Paris',
    'gallery.alt.6': 'Bolso de paja con panel azul Cacharel',

    'storeInfo.eyebrow': 'Información',
    'storeInfo.title': 'La tienda',
    'storeInfo.address': 'Dirección',
    'storeInfo.phone': 'Teléfono',
    'storeInfo.email': 'Correo electrónico',
    'storeInfo.social': 'Redes sociales',

    'hours.title': 'Horario',
    'hours.closed': 'Cerrado',
    'hours.openNow': 'Abierto ahora',
    'hours.closedNow': 'Cerrado ahora',

    'location.cta': 'Cómo llegar',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Escríbenos',
    'contact.subtitle': 'Resolveremos tus dudas lo antes posible.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono (opcional)',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado! Te responderemos pronto.',
    'contact.form.error':
      'Ha habido un error. Inténtalo de nuevo o llámanos.',

    'cta.call': 'Llamar',
    'cta.whatsapp': 'WhatsApp',
    'cta.whatsapp.message': '¡Hola! Me gustaría consultaros...',

    'footer.legal.rights': 'Todos los derechos reservados.',
    'footer.legal.madeWith': 'Sitio web diseñado con cuidado.',

    'a11y.skipToContent': 'Ir al contenido principal',
    'a11y.openMenu': 'Abrir menú',
    'a11y.closeMenu': 'Cerrar menú',
    'a11y.languageSwitcher': 'Cambiar idioma',
  },
} as const;
