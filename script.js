var data = {
  metadata: {
    startDate: "18/02/2022",
  },
  links: [
    {
      title: "Build A Rust Frontend (Really FAST Web Apps with Yew)",
      link: "https://youtu.be/MddGbXgIt2E",
    },
    {
      title:
        "Things That Don't Scale, The Software Edition – Dalton Caldwell and Michael Seibel",
      link: "https://youtu.be/TCPjk8Tpb5c",
    },
    {
      title: "Phishing with Unicode Domains",
      link: "https://www.xudongz.com/blog/2017/idn-phishing/",
    },
  ],
};

var link = document.querySelector(".link");
var index = document.querySelector("#index");

var links = data.links;
var len = links.length - 1;
var currLink = links.pop();

link.href = currLink.link;
link.innerHTML = currLink.title;
link.onclick = function () {
  window.mixpanel.track("link opened", { id: len });
};

index.innerHTML = `#${len}`;
