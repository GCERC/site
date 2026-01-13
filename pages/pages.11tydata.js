module.exports = {
  permalink: (data) => {
    let pagePath = data.page.inputPath
      .replace(/^\.\/pages/, "")
      .replace(/\.(md|html|njk)$/, "");

    if (pagePath.endsWith("/index") || pagePath.endsWith("/_index")) {
      pagePath = pagePath.replace(/\/_?index$/, "/");
    } else {
      pagePath += "/index.html";
    }

    return pagePath;
  },
};
