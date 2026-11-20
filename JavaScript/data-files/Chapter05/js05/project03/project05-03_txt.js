"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Layne Heim
      Date: 11/20/2026

      Filename: project05-03.js
*/
var sourceDoc = document.getElementById("source_doc");
var toc = document.getElementById("toc");
var headingCount = 1;
const heading = "h2";

for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
      console.log(n.nodeName);
  if (n.nodeName === heading) {
      var anchor = document.createElement("a");
      console.log(anchor);
      anchor.setAttribute("name", "doclink" + headingCount);
      n.insertBefore(anchor, n.firstChild);
      var listItem = document.createElement("li");
      console.log(listItem);
      var link = document.createElement("a");
      console.log(link);
      listItem.appendChild(link);
      link.textContent = n.textContent;
      link.setAttribute("href", "#doclink" + headingCount);
      console.log(link);
      toc.appendChild(listItem);
      headingCount++;
      console.log(toc);
  }
}