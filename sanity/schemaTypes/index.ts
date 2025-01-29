import { type SchemaTypeDefinition } from 'sanity'
import car from '../car'
import author from '../author'
import category from '../category'


import product from '../product'
import post from '../post'

import code from '../code'
import blockContent from '../blockContent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, category, post, product, car, blockContent,code],
}
