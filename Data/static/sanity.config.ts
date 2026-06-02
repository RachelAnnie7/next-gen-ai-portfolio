import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '9z8dcsq1',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema,
})
