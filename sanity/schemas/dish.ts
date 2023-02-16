import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price in BRL',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Dish Pic',
      type: 'image',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //   },
  // },
})
