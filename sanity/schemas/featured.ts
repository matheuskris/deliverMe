import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
