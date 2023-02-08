//Loading
function openbox(e) {
  e.preventDefault();
  document.getElementById("loadingText").style.visibility = "visible";
  // let container = document.getElementById("container");
  let loading = document.getElementById("loadingContent");
  console.log("click");
  loading.style = "display:visible";
}
$("#formInput").submit(openbox);
let myurl = document.getElementById("inputUrl");
let downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", () => {
  //Loading
  document.getElementById("loadingContent").style = "display:initial";
  const cors = "https://corsvkr.up.railway.app/";
  var myParamV = myurl.value;
  function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return ".";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  if (myParamV) {
    $.ajax({
      url: "https://www.vijaykumar.gq/server/api/trial.php?vkr=" + myParamV,
      type: "GET",
      async: true,
      crossDomain: true,
      dataType: "json",
      jsonp: true,
      cache: true,
      success: function (data) {
        const obj = data;
        document.getElementById("container").style = "display:block";
        document.getElementById("loadingContent").style = "display:none";

        // Define

        if (!$.trim(data)) {
          alert("1 - Unable To Get Download Link Please Check URL");
          document.getElementById("loadingContent").style = "display:none";
        } else {
          document.getElementById("loadingContent").style = "display:none";
          let vidTitle = obj.title;
          let vidId = obj.id;
          let vidThumb = obj.thumbnail;
          let vidDescription = obj.description;
          let vidUploader = obj.uploader;
          let vidDuration = obj.duration;
          let vidExtractor = obj.extractor;
          let vidUrl = obj.url;
          let thumbV = document.getElementById("thumb");
          let titleV = document.getElementById("title");
          let descriptionV = document.getElementById("description");
          let uploaderV = document.getElementById("uploader");
          let durationV = document.getElementById("duration");
          let extractorV = document.getElementById("extractor");
          let urlV = document.getElementById("downloadURL");
          let downloadV = document.getElementById("download");

          // Checking That Object is Exist Or Not
          var regExp =
            /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
          var match = myParamV.match(regExp);
          if (match && match[2].length == 11) {
            VTHUMB = "https://i.ytimg.com/vi/" + match[2] + "/sddefault.jpg";
          } else {
            VTHUMB = vidThumb;
          }
          if (vidThumb) {
            thumbV.innerHTML = "<img src='" + VTHUMB + "' width='220px'>";
          } else {
            thumbV.innerHTML = "<img src='logo.png' width='220px'>";
          }
          if (vidTitle) {
            titleV.innerHTML = "<h5>" + vidTitle + "</h5>";
            document.title = "Download " + vidTitle + " YTdownloader";
          }
          if (vidDescription) {
            descriptionV.innerHTML =
              "<h6><details> <summary>View Description</summary>" +
              vidDescription +
              "</details></h6>";
          }
          if (vidUploader) {
            uploaderV.innerHTML = "<h5>" + vidUploader + "</h5>";
          }
          if (vidDuration) {
            durationV.innerHTML = "<h5>" + vidDuration + "</h5>";
          }
          if (vidExtractor) {
            extractorV.innerHTML = "<h5>" + vidExtractor + "</h5>";
          }
          // show open thumbnail img link & link of video - starts here
          if (vidUrl) {
            // urlV.innerHTML = "";
            // urlV.innerHTML =
            //   "<a href='" +
            //   vidUrl +
            //   // "'><button class='dlbtn'>Video</button></a>"; //dsaf
            //   "'><button class='dlbtn btnDesign'>Open Video</button></a>";
            if (vidThumb) {
              urlV.innerHTML +=
                "<a href='" +
                VTHUMB +
                // "'><button class='dlbtn '>Download Thumbnail </button></a>"; //dsaf
                "'><button class='dlbtn btnDesign'>Download Thumbnail </button></a>";
            }
          }
          // show open thumbnail img link & link of video -  here
          if (obj.entries) {
            urlV.innerHTML = "";
            urlV.innerHTML +=
              "<a href='" +
              obj.entries[0].url +
              "'><button class='dlbtn'>Download Video</button></a>";
          } else if (obj.formats) {
            downloadV.innerHTML = "";
            for (var i = 1; i < obj.formats.length; i++) {
              let myParam =
                " - " + getParameterByName("itag", obj.formats[i].url);
              let bgcol = "";
              // if (
              //   myParam == " - 22" ||
              //   myParam == " - 18" ||
              //   myParam == " - 204"
              // ) {
              //   bgcol = "green";
              //   downloadV.innerHTML +=
              //     "<a href='" +
              //     obj.formats[i].url +
              //     "'><button style='background:" +
              //     bgcol +
              //     "' class='dlbtns btnDesign'>" +
              //     obj.formats[i].quality +
              //     myParam +
              //     "Download Video" +
              //     "</button></a>";
              // }
              if (myParam == " - 18") {
                bgcol = "green";
                downloadV.innerHTML +=
                  "<a href='" +
                  obj.formats[i].url +
                  "'><button style='background:" +
                  bgcol +
                  "' class='dlbtns btnDesign'>" +
                  " 360p Download Video" +
                  "</button></a>";
              }
              if (myParam == " - 22") {
                bgcol = "green";
                downloadV.innerHTML +=
                  "<a href='" +
                  obj.formats[i].url +
                  "'><button style='background:" +
                  bgcol +
                  "' class='dlbtns btnDesign'>" +
                  " 720p Download Video" +
                  "</button></a>";
              }
              if (
                myParam == " - 17" ||
                myParam == " - 139" ||
                myParam == " - 140" ||
                myParam == " - 141" ||
                myParam == " - 249" ||
                myParam == " - 250" ||
                myParam == " - 251" ||
                myParam == " - 599" ||
                myParam == " - 600"
              ) {
                bgcol = "#1269ff";
                downloadV.innerHTML +=
                  "<a href='" +
                  obj.formats[i].url +
                  "'><button style='background:" +
                  bgcol +
                  "' class='dlbtns btnDesign'>" +
                  obj.formats[i].quality +
                  myParam +
                  "Download Audio" +
                  "</button></a>";
              }
            }
          } else if (obj.medias) {
            downloadV.innerHTML = "";
            for (var i = 0; i < obj.medias.length; i++) {
              let myParam =
                " - " + getParameterByName("itag", obj.medias[i].url);
              let bgcol = "";
              if (myParam == " - 22" || myParam == " - 18") {
                bgcol = "green";
                downloadV.innerHTML +=
                  "<a href='" +
                  obj.formats[i].url +
                  "'><button style='background:" +
                  bgcol +
                  "' class='dlbtns btnDesign'>" +
                  obj.formats[i].quality +
                  myParam +
                  "Download Video" +
                  "</button></a>";
              }
              // if (myParam == " - 18") {
              //   bgcol = "green";
              // }
              // if (myParam == " - 22") {
              //   bgcol = "green";
              // }
              if (
                myParam == " - 17" ||
                myParam == " - 139" ||
                myParam == " - 140" ||
                myParam == " - 141" ||
                myParam == " - 249" ||
                myParam == " - 250" ||
                myParam == " - 251" ||
                myParam == " - 599" ||
                myParam == " - 600"
              ) {
                bgcol = "#1269ff";
                downloadV.innerHTML +=
                  "<a href='" +
                  obj.formats[i].url +
                  "'><button style='background:" +
                  bgcol +
                  "' class='dlbtns btnDesign'>" +
                  obj.formats[i].quality +
                  myParam +
                  "Download Audio" +
                  "</button></a>";
              }
            }
          } else {
            alert("2 -Server Down due to Too Many Requests");
            document.getElementById("container").style = "display:none";
            location.href =
              "http://vkrfork.ml/data/download.php?vkr=" + myParam;
          }
        }
      },
    });
  }
});
