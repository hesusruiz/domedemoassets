function initModal() {
    // Modal
    document.querySelectorAll(".grid-item", ".cat-details").forEach(function (el) {
      el.addEventListener("click", function (e) {
        var modal = new tingle.modal({
          footer: true,
          stickyFooter: false,
          closeMethods: ["overlay", "button", "escape"],
          closeLabel: "Close",
          cssClass: ["custom-class-1", "custom-class-2"],
          onOpen: function () {
            console.log("modal open");
          },
          onClose: function () {
            console.log("modal closed");
          },
          beforeClose: function () {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
          },
        });

        function createModalContent(tingleModalData) {
          var modalHtml = "";
          console.warn(tingleModalData);

          modalHtml += "<div class='credits-modal'>";

          modalHtml +=
            '<img src="' +
            tingleModalData.badge +
            '" class="cat-badge-modal" />';

          modalHtml += "</div>";

          modalHtml += "<div class='info-modal'>";

          modalHtml += "<div class='bio-modal'>";

          if (tingleModalData.content != "null") {
            modalHtml += "<p>" + tingleModalData.content + "</p>";
          }
          modalHtml += "</div>";

          modalHtml += "<div class='visual-modal'>";

          modalHtml += "<div class='social-modal'>";

          if (tingleModalData.company != "null") {
            modalHtml +=
              '<a class="company-link" target="_blank" href="' +
              tingleModalData["company-link"] +
              '">' +
              '<span id="ico-info" class="material-icons-outlined">open_in_new</span>' +
              tingleModalData.company +
              "</a>";
          }

          modalHtml += "</div>";

          modalHtml += "</div>";

          modalHtml += "</div>";

          return modalHtml;
        }

        // set content
        modal.setContent(createModalContent(modalData[el.dataset.modal]));

        // open modal
        modal.open();
      });
    });
  }