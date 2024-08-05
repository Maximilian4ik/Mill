document.getElementById("menu-burger").addEventListener("click", function (e) {
  document.querySelector(".mob-menu").classList.toggle("active");
  document.querySelector(".menu-burger").classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const tabHeaders = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".modal-form");

  tabHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const activeTab = this.getAttribute("data-tab");

      tabHeaders.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(activeTab).classList.add("active");
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const tabHeaders = document.querySelectorAll(".user-tab");
//   const tabContents = document.querySelectorAll(".user-tab-content");

//   tabHeaders.forEach((header) => {
//     header.addEventListener("click", function () {
//       const activeTab = this.getAttribute("data-tab");

//       tabHeaders.forEach((item) => item.classList.remove("active"));
//       tabContents.forEach((item) => item.classList.remove("active"));

//       this.classList.add("active");
//       document.getElementById(activeTab).classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const tabHeaders = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".modal-form");

  tabHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const activeTab = this.getAttribute("data-tab");

      tabHeaders.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(activeTab).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".sms-code-input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
});

$(document).ready(function () {
  $(".main-slider").slick({
    arrows: false,
    slidesToShow: 1,
    dots: false,
    // dotsClass: "main-slider-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
  });
});

// ------------------------------------------------------------------------------

// $(document).ready(function () {
//   $(".order-slider-package").slick({
//     arrows: false,
//     slidesToShow: 1,
//     dots: false,
//     asNavFor: ".nav-slider-tab1",
//   });
// });

// $(document).ready(function () {
//   $(".order-slider-cardboard").slick({
//     arrows: false,
//     slidesToShow: 1,
//     dots: false,
//     asNavFor: ".nav-slider-tab2",
//   });
// });

// $(document).ready(function () {
//   $(".nav-slider-tab1").slick({
//     arrows: true,
//     // slidesToShow: 3,
//     dots: false,
//     variableWidth: true,
//     centerMode: true,
//     prevArrow: $(".next1"),
//     nextArrow: $(".prev1"),
//     asNavFor: ".order-slider-package",
//   });
// });

// $(document).ready(function () {
//   $(".nav-slider-tab2").slick({
//     arrows: true,
//     // slidesToShow: 3,
//     dots: false,
//     variableWidth: true,
//     centerMode: true,
//     prevArrow: $(".next2"),
//     nextArrow: $(".prev2"),
//     asNavFor: ".order-slider-cardboard",
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const tabHeaders = document.querySelectorAll(".order-tab-btn");
//   const tabContents = document.querySelectorAll(".order-tab-content");

//   tabHeaders.forEach((header) => {
//     header.addEventListener("click", function () {
//       const activeTab = this.getAttribute("data-tab");

//       tabHeaders.forEach((item) => item.classList.remove("active"));
//       tabContents.forEach((item) => item.classList.remove("active"));

//       this.classList.add("active");
//       document.getElementById(activeTab).classList.add("active");
//     });
//   });
// });

$(document).ready(function () {
  // Инициализация первого слайдера, который виден изначально
  $(".order-slider-package").slick({
    arrows: false,
    slidesToShow: 1,
    dots: false,
    asNavFor: ".nav-slider-tab1",
  });

  $(".nav-slider-tab1").slick({
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: true,
    prevArrow: $(".next1"),
    nextArrow: $(".prev1"),
    asNavFor: ".order-slider-package",
  });

  // Устанавливаем флаги для отслеживания инициализации
  let isPackageSliderInitialized = true; // Изначально инициализирован
  let isCardboardSliderInitialized = false;

  // Обработчик для переключения вкладок
  $(".order-tab-btn").on("click", function () {
    const activeTab = $(this).data("tab");

    $(".order-tab-btn").removeClass("active");
    $(this).addClass("active");

    $(".order-tab-content").removeClass("active");
    $("#" + activeTab).addClass("active");

    // Инициализация слайдеров при переключении на вкладку
    if (activeTab === "cardboard" && !isCardboardSliderInitialized) {
      // Инициализация слайдеров для второй вкладки
      $(".order-slider-cardboard").slick({
        arrows: false,
        slidesToShow: 1,
        dots: false,
        asNavFor: ".nav-slider-tab2",
      });

      $(".nav-slider-tab2").slick({
        arrows: true,
        dots: false,
        variableWidth: true,
        centerMode: true,
        prevArrow: $(".next2"),
        nextArrow: $(".prev2"),
        asNavFor: ".order-slider-cardboard",
      });

      // Устанавливаем флаг, чтобы не повторять инициализацию
      isCardboardSliderInitialized = true;
    }

    // Если требуется повторная инициализация для первой вкладки, можно включить аналогичный блок для неё.
    // Например, при переключении обратно на первую вкладку.

    // Добавляем перезапуск слайдеров при их повторном показе (не обязательно, но может помочь)
    if (activeTab === "package" && isPackageSliderInitialized) {
      $(".order-slider-package").slick("setPosition");
      $(".nav-slider-tab1").slick("setPosition");
    } else if (activeTab === "cardboard" && isCardboardSliderInitialized) {
      $(".order-slider-cardboard").slick("setPosition");
      $(".nav-slider-tab2").slick("setPosition");
    }
  });
});

// ------------------------------------------------------------------------------
$(document).ready(function () {
  $(".lk-slider").slick({
    arrows: false,
    slidesToShow: 4,
    dots: false,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 805,
        settings: {
          // slidesToShow: 3,
          variableWidth: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".lk-list-slider").slick({
    arrows: false,
    slidesToShow: 4,
    dots: false,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1069,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
});

// $(document).ready(function () {
//   $(".lk-list-slider2").slick({
//     arrows: false,
//     slidesToShow: 4,
//     dots: false,
//     // variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 1240,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1069,
//         settings: {
//           slidesToShow: 1,
//           variableWidth: true,
//         },
//       },
//     ],
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const tabHeaders = document.querySelectorAll(".user-tab");
  const tabContents = document.querySelectorAll(".user-tab-content");

  // Инициализация слайдера для первой вкладки по умолчанию
  initializeSlider(".lk-list-slider1");

  tabHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const activeTab = this.getAttribute("data-tab");

      tabHeaders.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(activeTab).classList.add("active");

      // Проверяем, есть ли уже инициализированный слайдер
      if (
        activeTab === "user-tab-1" &&
        !document.querySelector(".lk-list-slider1.slick-initialized")
      ) {
        initializeSlider(".lk-list-slider1");
      }
      if (
        activeTab === "user-tab-2" &&
        !document.querySelector(".lk-list-slider2.slick-initialized")
      ) {
        initializeSlider(".lk-list-slider2");
      }

      // Если слайдер уже инициализирован, то обновляем его состояние
      if (
        activeTab === "user-tab-1" &&
        document.querySelector(".lk-list-slider1.slick-initialized")
      ) {
        $(".lk-list-slider1").slick("setPosition");
      }
      if (
        activeTab === "user-tab-2" &&
        document.querySelector(".lk-list-slider2.slick-initialized")
      ) {
        $(".lk-list-slider2").slick("setPosition");
      }
    });
  });
});

// Функция для инициализации слайдера
function initializeSlider(selector) {
  $(document).ready(function () {
    $(selector).slick({
      arrows: false,
      slidesToShow: 4,
      dots: false,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1069,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
          },
        },
      ],
    });
  });
}

// ------------------------------------------------

$(function () {
  $(".phone-input").mask("+7(999) 999-99-99");
});

$(function () {
  // $(".phone-input").mask("+7(999) 999-99-99");
  $(".card-num").mask("9999 9999 9999 9999");
});

// --------------------------------------------

// if (document.querySelector("[data-fancybox]")) {
//   Fancybox.bind("[data-fancybox]", {
//     // overlayColor: "green",
//   });
// }

// --------------------------------------------

// -----------------------------------------

new AirDatepicker("#calendar", {
  inline: true,
  navTitles: {
    days: "MMMM", // Показать только месяц
  },

  // startDay: 0,
  // locale: {
  //   daysMin: ["  " , "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" , "  "], // Кастомизация дней недели
  // },
});
