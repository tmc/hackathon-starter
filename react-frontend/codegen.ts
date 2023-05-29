import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: '../gateway/supergraph.graphql',
    documents: ['src/**/*.tsx'],
    ignoreNoDocuments: true,
    generates: {
        './src/gql/': {
            preset: 'client'
        }
    }
}


export default config
