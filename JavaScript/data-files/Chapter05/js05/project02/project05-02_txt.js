"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Layne Heim
      Date: 11/20/2026

      Filename: project05-02.js
*/

var images = document.querySelectorAll("img");
var photoBucket = document.getElementById("photo_bucket");
var photoList = document.getElementById("photo_list");

for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("click", function(){
            
            if (this.parentElement.id === "photo_bucket") {
               const newItem = document.createElement("li");
               photoList.appendChild(newItem);
               newItem.appendChild(this);
            } else {
               const oldItem = this.parentElement;
               photoBucket.appendChild(this);
               oldItem.parentElement.removeChild(oldItem);
            }
      })
}