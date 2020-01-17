export default {
  computed: {
    user () {
      if (this.$store.getters.getUser != null) {
        return this.$store.getters.getUser
      } else {
        return {
          id: null,
          email: 'email@email.com',
          name: 'Nothing',
          headers: {
            auth: 'nothing nothing'
          }
        }
      }
    },
    version () {
      return this.$store.getters.getVersion
    },
    cTypeMethods () {
      return this.$store.getters.getTypeMethods
    },
    cTypeCodes () {
      return this.$store.getters.getTypeCodes
    },
    cApi () {
      return this.$store.getters.getApiData
    },
    cTag () {
      return this.$store.getters.getTag
    },
    cPath () {
      return this.$store.getters.getPath
    },
    cResponse () {
      return this.$store.getters.getResponse
    },
    tagIndex () {
      return this.$store.getters.getTagIndex
    },
    pathIndex () {
      return this.$store.getters.getPathIndex
    },
    responseIndex () {
      return this.$store.getters.getResponseIndex
    },
    rulesId () {
      return this.$store.getters.getRulesId
    }
  }
}
