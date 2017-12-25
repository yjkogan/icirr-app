import _ from 'lodash';
import LocalizedStrings from 'react-localization';

import servicesConstants from 'constants/servicesConstants';

import kyr from 'static/kyr';
import kyrSpanish from 'static/kyr-spanish';

// Since `en` is listed first, it becomes the default language. If any keys are missing
// it will fall back onto english;
const strings = new LocalizedStrings({
  en: {
    header: {
      back: 'Back',
    },
    discover: {
      footerLink: 'ICIRR',
      footerText: 'Built with love by',
      infoHeader: "I'm looking for information about...",
      orgHeader: 'I need someone to help me with...',
      items: {
        [servicesConstants.hasNaturalizationClasses]: 'Passing the Naturalization Interview',
        [servicesConstants.hasLegalAid]: 'Applying for citizenship',
        [servicesConstants.hasOutreachAndEducation]: 'Finding resources for citizenship',
        kyr: 'My rights',
        nextWorkshop: 'The next citizenship workshop',
        citizenshipRequirements: 'Requirements to become a citizen',
        workshopWhatToBring: 'What to bring to a workshop',
        lowCostLegalAidProviders: 'Low-cost immigration legal services providers',
      },
    },
    kyr: {
      content: kyr,
    },
    map: {
      filterLabels: {
        [servicesConstants.hasNaturalizationClasses]: 'Nat. Int.',
        [servicesConstants.hasLegalAid]: 'Applying',
        [servicesConstants.hasOutreachAndEducation]: 'Resources',
      },
    },
    navigation: {
      list: 'List',
      map: 'Map',
    },
    partner: {
      getDirections: 'Get Directions',
      phone: 'Phone',
    },
  },
  es: {
    header: {
      back: 'Regrese',
    },
    discover: {
      footerLink: 'ICIRR',
      footerText: 'Desarrollado con cariño por',
      infoHeader: 'Estoy buscando información de...',
      orgHeader: 'Necesito que alguien me ayude con...',
      items: {
        [servicesConstants.hasNaturalizationClasses]: 'Ciudadanía',
        [servicesConstants.hasLegalAid]: 'Ayuda Legal',
        [servicesConstants.hasOutreachAndEducation]: 'En mi comunidad',
        kyr: 'Mis derechos',
        nextWorkshop: 'The next citizenship workshop (SP)',
        citizenshipRequirements: 'Requirements to become a citizen (SP)',
        workshopWhatToBring: 'What to bring to a workshop (SP)',
        lowCostLegalAidProviders: 'Low-cost immigration legal services providers  (SP)',

      },
    },
    kyr: {
      content: kyrSpanish,
    },
    map: {
      filterLabels: {
        [servicesConstants.hasNaturalizationClasses]: 'Ciudadanía',
        [servicesConstants.hasLegalAid]: 'Abogado',
        [servicesConstants.hasOutreachAndEducation]: 'Educación',
      },
    },
    navigation: {
      list: 'Lista',
      map: 'Mapa',
    },
    partner: {
      getDirections: 'Obtenga las direcciones',
      phone: 'Teléfono',
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
