module.exports = {
  client: {
    service: {
      name: "sw",
      localSchemaFile: "./src/graphql/__generated__/schema.graphql"
    },
    includes: ["src/**/*.{js,jsx,ts,tsx,vue,gql}"]
  }
};
