import csv
from sets import Set

rows_to_write = []
with open('nai_partners_contact_list.csv', 'rb') as csvfile:
  partners = csv.DictReader(csvfile)
  for partner in partners:
    if partner['Street Address'] and partner['City'] and partner['State']:
      rows_to_write.append({
        'address': '%s, %s, %s, %s' % (partner['Street Address'], partner['City'], partner['State'], partner['Zipcode']),
        'hasCitizenshipClasses': partner['Citizenship Classes'] == 'y',
        'hasEnglishClasses': partner['English Language Classes'] == 'y',
        'hasLegalAid': partner['Legal Assistance Provided by Attorney or BIA Accredited Representative'] == 'y',
        'hasOutreachAndEducation': partner['Citizenship Outreach and Community Education'] == 'y',
        'name': partner['Organization Name'],
        'phone': partner['Phone'],
        'website': partner['Website'],
      })

      
with open('naiPartners.csv', 'w') as outfile:
  writer = csv.DictWriter(outfile, fieldnames=rows_to_write[0].keys(), quoting=csv.QUOTE_ALL)
  writer.writeheader()
  for row in rows_to_write:
    writer.writerow(row)
