import _ from 'lodash';
import LocalizedStrings from 'react-localization';

// Since `en` is listed first, it becomes the default language. If any keys are missing
// it will fall back onto english;
const strings = new LocalizedStrings({
  en: {
    aboutICIRR: {
      content: 'About ICIRR goes here',
    },
    header: {
      back: 'Back',
    },
    more: {
      aboutICIRRLink: 'About ICIRR',
      getInvolved: 'Get Involved',
    },
    navigation: {
      tabs: {
        emergency: 'Emergency',
        map: 'Map',
        more: 'More',
        myRights: 'My Rights',
      },
    },
    settings: {
      header: 'Settings',
      languageLabel: 'Language',
      lawyerNumberLabel:'Lawyer\'s number',
    },
    signup: {
      buttonText: 'Sign Up',
      emailPlaceholder: 'Email',
      namePlaceholder: 'Name',
      title: 'Join the movement to Rise Up & Organize',
    },
  },
  es: {
    aboutICIRR: {
      content: 'Spanish About ICIRR goes here',
    },
    header: {
      back: 'Espalda',
    },
    more: {
      aboutICIRRLink: 'Acerca de ICIRR',
      getInvolved: 'Involucrarse',
    },
    navigation: {
      tabs: {
        emergency: 'Emergencia',
        map: 'Mapa',
        more: 'Más',
        myRights: 'Mis Derechos',
      },
    },
    settings: {
      header: 'Ajustes',
      languageLabel: 'Idioma',
      lawyerNumberLabel: 'Número de abogado',
    },
    signup: {
      buttonText: 'Regístrate',
      emailPlaceholder: 'Email',
      namePlaceholder: 'Nombre',
      title: 'Únete al movimiento de Rise Up & Organize',
    },
  },
});

export function getLanguageOptions() {
  // TODO (YK 2017-04-18): memoize this on a per-language basis if we really care about performance
  return _.map(strings.getAvailableLanguages(), (availableLanguage) => {
    return {
      label: strings.settings.languageOptions[availableLanguage],
      value: availableLanguage,
    };
  });
}

export default strings;
