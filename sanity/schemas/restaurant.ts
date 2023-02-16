import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurantes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Restaurant picture',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'adress',
      title: 'Restaurant adress',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1-5 stars)',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (rule) => rule.required(),
    }),
  ],

  //   preview: {
  //     select: {
  //       title: 'title',
  //       author: 'author.name',
  //       media: 'mainImage',
  //     },
  //     prepare(selection) {
  //       const {author} = selection
  //       return {...selection, subtitle: author && `by ${author}`}
  //     },
  //   },
})
