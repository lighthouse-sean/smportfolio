module.exports = {
  // General settings
  pathPrefix: "/", // If you deploy your site to yourdomain.tld/blog/ your pathPrefix should be "blog/"
  title: "technosheen", // Navigation and Site Title
  titleTemplate: "%s", // To Add extra part in title. the title replace the %s. Example: `%s | Site title`
  description: "Software and web developer specializing in AEM and Hubspot.",
  siteUrl: "localhost:8080", // Domain address of your site. Do not add trailing slash!
  siteLanguage: "en", // Language Tag on <html> element

  // place logo images in static/images folder - Used as site logo
  logoLight: "/images/arun-light-theme-logo.svg",
  logoDark: "/images/arun-dark-theme-logo.svg",

  // sticky nav style
  stickyNav: true,

  //place default cover image in static/images folder - used in home page cover
  cover: "/images/cover.jpg",

  // number of featured posts to show on home page
  featuredPostCount: 2,

  // number of latest posts to show on home page before load more button
  postPerPage: 8,

  disqusShortName: "example", // disqus shortname for disqus comment

  // JSONLD / Manifest for SEO
  titleAlt: "Sean Mahoney - AEM and Hubspot Software Developer", // Title for JSONLD
  headline: "Developer specializing in Adobe Experience Managager and Hubspot", // Headline for schema.org JSONLD
  favicon: "src/assets/images/icon.png", // Used for manifest favicon generation
  shortName: "Technosheen", // shortname for manifest. MUST be shorter than 12 characters
  author: "Sean Mahoney", // Author for schemaORGJSONLD
  themeColor: "#0057ff",
  backgroundColor: "#ffffff",

  //Twitter and facebook data for SEO
  twitterUsername: "@yourusername", // Twitter Username
  facebook: "example-page", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "XX-XXXXXXXXX-X",

  // mailchimp endpoint.
  // To know how to get it see plugin documentation https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
  mailchimpEndpoint:
    "https://example.us10.list-manage.com/subscribe/post?u=b9ef2fdd3edXXXXXXXXXXXXX&amp;id=XXXXXXXXXXX",
}
