"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let heading = document.querySelector('.time');
let orderedList = document.querySelector("ol");
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let AmPm = 'AM';
    if (hour > 12) {
        hour -= 12;
        AmPm = 'PM';
    }
    if (hour == 0) {
        hour = 12;
        AmPm = 'AM';
    }
    if (heading) {
        heading.textContent = ((hour < 10) ? "0" + hour : hour) + ':' + ((min < 10) ? "0" + min : min) + ':' + ((sec < 10) ? "0" + sec : sec) + ' ' + AmPm;
    }
}
setInterval(showTime, 1000);
function github() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.github.com/repositories/692739619/pulls');
        const theArray = yield response.json();
        return theArray;
    });
}
github().then((data) => {
    for (const x of data) {
        let list = document.createElement("li");
        list.textContent = x.title;
        orderedList === null || orderedList === void 0 ? void 0 : orderedList.append(list);
    }
});
//rss fetch api skipped cause that needs a proxy server which seems like a hard thing to find, probably next time
