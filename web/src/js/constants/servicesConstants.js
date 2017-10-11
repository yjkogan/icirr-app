import keyMirror from 'key-mirror';

const servicesConstants = keyMirror({
  hasCitizenshipClasses: null,
  hasEnglishClasses: null,
  hasLegalAid: null,
  hasOutreachAndEducation: null,
});

export const servicesFilterOptions = [{
  label: 'Citizenship',
  value: servicesConstants.hasCitizenshipClasses,
}, {
  label: 'English classes',
  value: servicesConstants.hasEnglishClasses,
}, {
  label: 'Legal aid',
  value: servicesConstants.hasLegalAid,
}, {
  label: 'In my community',
  value: servicesConstants.hasOutreachAndEducation,
}];

export default servicesConstants;
