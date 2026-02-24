module.exports = {
  permalink: (data) => {
    let pagePath = data.page.inputPath
      .replace(/^\.\/pages/, "")
      .replace(/\.(md|html|njk)$/, "");

    if (pagePath.endsWith("/index")) {
      pagePath = pagePath.replace(/\/index$/, "/");
    } else {
      pagePath += "/index.html";
    }

    return pagePath;
  },
};
