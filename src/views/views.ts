let heading = document.querySelector('.time');
let orderedList = document.querySelector("ol");

function showTime(): void {
  let time: Date = new Date();
  let hour: number = time.getHours();
  let min: number = time.getMinutes();
  let sec: number = time.getSeconds();
  
  let AmPm: string = 'AM';
  if (hour > 12) {
    hour -= 12;
    AmPm = 'PM';
  }
  if (hour == 0) {
    hour = 12;
    AmPm = 'AM';
  }
  if(heading)
  {
    heading.textContent = ((hour < 10) ? "0" + hour : hour) + ':' + ((min < 10) ? "0" + min : min) + ':' + ((sec < 10) ? "0" + sec : sec) + ' ' + AmPm;
  }
}

setInterval(showTime, 1000);

async function github(): Promise<{ title: string }[]> { // means resolved promise will yield an array of objects, each having a title property of type string.
    const response = await fetch('https://api.github.com/repositories/692739619/pulls');
    const theArray = await response.json();
    return theArray;
}

github().then((data) => {
    for (const x of data) {
        let list = document.createElement("li");
        list.textContent = x.title;
        orderedList?.append(list);
    }
})

//rss fetch api skipped cause that needs a proxy server which seems like a hard thing to find, probably next time