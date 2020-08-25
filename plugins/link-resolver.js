/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function(doc) {
  let lang;
  if (doc.lang) lang = doc.lang.split("-")[0];
  if (doc.link_type === "Web") {
    return doc.url;
  }
  if (doc.isBroken) {
    return "/" + lang + "/not-found";
  }
  if (doc.type === "page" && doc.uid === "home") {
    return "/";
  }
  if (doc.type === "page") {
    return "/" + lang + "/" + doc.uid;
  }

  if (doc.type === "post") {
    return "/" + lang + "/post/" + doc.uid;
  }

  return "/not-found";
}
