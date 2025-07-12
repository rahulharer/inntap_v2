enableTabListPanel = function () {
  $(".tabs-list li").on("click", function () {
    let tabId = $(this).find("a").attr("data-target");
    $(".tabs-list li, .tab").removeClass("active");   // removing active class from tab

    $(".tab").hide();    // hiding open tab
    $("#" + tabId).show();    // show tab
    $(this).addClass("active"); //  adding active class to clicked tab
  });
}

enableParentTabOfTable = function (sectionCode) {
  $(".tabs-list li").find("a[data-target='" + sectionCode + "']").parents("li").trigger("click");
}

enableMenuHeadTab = function () {
  $(".tabs-list li").on("click", function () {
    let tabId = $(this).find("a").attr("data-target");
    $(".tabs-list li, .tab").removeClass("active");   // removing active class from tab

    $(".tab").hide();    // hiding open tab
    $("#" + tabId).show();    // show tab
    $(this).addClass("active"); //  adding active class to clicked tab
  });

  $(".menu_head_wrapper li a").on("click", function (e) {
    e.preventDefault();
  });

  $(".menu_head_wrapper li").on("click", function (e) {
    let tabId = $(this).find("a").attr("data-target");
    $(".menu_head_wrapper li, .menu_head_tab").removeClass("menu_head_active");

    $(".menu_head_tab").hide();
    $("#" + tabId).show();
    $(this).addClass("menu_head_active");
    $("#" + tabId).find(".tabs-list li:first").find("a").click();
  });

  displayItemNameOnHover();
}


displayItemNameOnHover = function () {
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}

toggleHeaderOption = function () {
  $('.hdr_menu').on("click", function () {
    $('.hdr_drp_dwn').slideToggle();
    $('.clr_indctr_lst, .view_levl_lst').slideUp();
  });
  $('.clr_indctr_icon button').on("click", function () {
    $('.clr_indctr_lst').slideToggle();
    $('.hdr_drp_dwn, .view_levl_lst').slideUp();
  });
  $('.view_levl_optn > button').on("click", function () {
    $('.view_levl_lst').slideToggle();
    $('.clr_indctr_lst, .hdr_drp_dwn').slideUp();
  });
  $('.sub_header_parnt, .main_cnt_blk').on("click", function () {
    $('.hdr_drp_dwn, .clr_indctr_lst, .view_levl_lst').hide();
  });
  $('.mob_menu').on('click', function () {
    $('.user_login_parnt').toggleClass('panel_open');
  });
  $('.info_btn').on("click", function () {
    $('.sub_btn_grp').toggleClass('open');
  });
}

toggleTableTransferModal = function () {
  $("#tableTransferModal").modal('show');
}

showErrorMessage = function () {
  $("#WarningModal").modal('show');
}

toggleSubscriptionModal = function () {
  $("#subscriptionModal").modal('show');
}

toggleBusinessDateModal = function () {
  $("#nightAuditModal").modal('show');
}

functionExpandCollapse = function () {
  // When an element with the class 'width_tggle' is clickedf
  $('.width_tggle').click(function () {
    // Toggle the 'width_tggle_active' class on the clicked element
    $(this).toggleClass('width_tggle_active');

    // Toggle the 'width_lg' class on all elements with the class 'main_cnt_blk'
    $('.main_cnt_blk').toggleClass('width_lg');
  });
}

initializeKeyboard = function (targetInput) {
  let enableVirtualKeyboard = JSON.parse(localStorage.getItem("enableVirtualKeyboard"));

  if (enableVirtualKeyboard && enableVirtualKeyboard == "Y") {
    $('.fixd_keypad_parnt').toggleClass("fixd_keypad_up");
    $('.keyboard').initKeypad(targetInput);
    $('.keyboard').click();
  }
}

saveReportPdf = function (report) {
  //Create Printer Settings
  //  PrinterSettings printerSettings = new PrinterSettings();

  //  //Set Printer to Use for Printing
  //  printerSettings.PrinterName = "MyPrinterName";

  //  //Direct Print - Don't Show Print Dialog
  //  report.Print(false, printerSettings);

  // // Create an PDF settings instance. You can change export settings.
  var settings = new Stimulsoft.Report.Export.StiPdfExportSettings();
  // Create an PDF service instance.
  var service = new Stimulsoft.Report.Export.StiPdfExportService();

  // Create a MemoryStream object.
  var stream = new Stimulsoft.System.IO.MemoryStream();
  // Export PDF using MemoryStream.
  service.exportToAsync(function () {
    // Get PDF data from MemoryStream object
    var data = stream.toArray();
    // Get report file name
    var fileName = report.reportAlias ? report.reportName : report.reportAlias;
    // Save data to file
    Stimulsoft.System.StiObject.saveAs(data, "KOT.pdf", "application/pdf");
  }, report, stream, settings);


  // report.renderAsync(function () {
  //   debugger
  //   let fileData = report.exportDocument(Stimulsoft.Report.StiExportFormat.Pdf);

  //   let data = {};
  //   data.format = "application/pdf";
  //   data.file_extension = "pdf"
  //   data.file = Stimulsoft.System.Convert.toBase64String(fileData);
  //   //data.file_name = .replaceAll("/","_").replaceAll("\\", "_");

  // $.ajax({
  //   type: "POST",
  //   cache: false,
  //   url: $("#hdnSaveFilePath").val(),
  //   async: true,
  //   data: data,
  //   beforeSend: function () {
  //     $("#pageLoader").show();
  //   },
  //   complete: function () {
  //     $("#pageLoader").hide();
  //   },
  //   success: function (response) {
  //     return true;
  //   },
  //   error: function (msg) {
  //     console.log(msg);
  //   }
  // });
  //})
}


subCategoryJs = function () {
  var element = $('.tab-container > li');
  var slider = $('.tab-container');
  var sliderWrapper = $('.wrapper');
  var totalWidth = sliderWrapper.innerWidth();
  var elementWidth = element.outerWidth();
  var sliderWidth = 0;
  var positionSlideX = slider.position().left;
  var newPositionSlideX = 0;

  sliderWrapper.append('<span class="prev-slide"><i class="fa fa-chevron-left" aria-hidden="true"></i></span><span class="next-slide"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>');

  element.each(function () {
    sliderWidth = sliderWidth + $(this).outerWidth() + 1;
  });

  slider.css({
    'width': sliderWidth
  });

  $('.next-slide').click(function () {
    if (newPositionSlideX > (totalWidth - sliderWidth)) {
      newPositionSlideX = newPositionSlideX - elementWidth;
      slider.css({
        'left': newPositionSlideX
      }, check());
    };
  });

  $('.prev-slide').click(function () {
    if (newPositionSlideX >= -sliderWidth) {
      newPositionSlideX = newPositionSlideX + elementWidth;
      slider.css({
        'left': newPositionSlideX
      }, check());
    };
  });

  function check() {
    ;
    if (sliderWidth >= totalWidth && newPositionSlideX > (totalWidth - sliderWidth)) {
      $('.next-slide').css({
        'right': 0
      });
    } else {
      $('.next-slide').css({
        'right': -$(this).width()
      });
    };

    if (newPositionSlideX < 0) {
      $('.prev-slide').css({
        'left': 0
      });
    } else {
      $('.prev-slide').css({
        'left': -$(this).width()
      });
    };
  };

  $(window).resize(function () {
    totalWidth = sliderWrapper.innerWidth();
    check();
  });
  check();
}