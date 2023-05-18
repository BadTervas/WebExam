$(document).ready(function () {
    $(".menu-card").on("click", function (event) {
        if (!$(event.target).hasClass("quantity-input")) {
            var quantityCounter = $(this).find(".quantity-counter");

            if (quantityCounter.length === 0) {
                quantityCounter = $("<div>", {
                    class: "quantity-counter"
                });
                var quantityInput = $("<input>", {
                    type: "number",
                    class: "quantity-input",
                    min: "0",
                    step: "1",
                    value: "0"
                });

                quantityCounter.append(quantityInput);
                $(this).append(quantityCounter);

                var menuContainer = $(".menu-container");
                menuContainer.css("flex-wrap", "wrap");
            } else {
                quantityCounter.remove();
                var menuContainer = $(".menu-container");
                menuContainer.css("flex-wrap", "nowrap");
            }
        }
    });

  $(".btn").on("click", function() {

    var manager = $("#manager-select option:selected").text();
    var firstName = $("[name='first-name']").val();
    var lastName = $("[name='last-name']").val();
    var middleName = $("[name='middle-name']").val();
    var orderDetails = "";
    var totalPrice = 0;


    $(".menu-card").each(function() {
      var quantity = $(this).find(".quantity-input").val();
      if (parseInt(quantity) > 0) {
        var menuTitle = $(this).find(".menu-title").text();
        var menuPrice = $(this).find(".menu-price").text();
        var menuTotal = menuPrice.replace("Цена: $", "");
        var total = parseInt(quantity) * parseFloat(menuTotal);
         totalPrice += total;
        orderDetails += quantity + " x " + menuTitle + " - " + menuPrice + "<br>";
      }
    });
    
    
     var modalContent = "<p><strong>Выбранный менеджер:</strong> " + manager + "</p>" +
                       "<p><strong>ФИО клиента:</strong> " + lastName + " " + firstName + " " + middleName + "</p>" +
                       "<p><strong>Детали заказа:</strong></p>" +
                       "<p>" + orderDetails + "</p>" +
                       "<p><strong>Сумма заказа:</strong>$" + totalPrice + "</p>" +
                       "<button class='submit-button confirm-btn'>Подтвердить заказ</button>";


    $("#modal-order-details").html(modalContent);


    $("#modal").css("display", "block");
  });


  $(".close").on("click", function() {

    $("#modal").css("display", "none");
  });


  $(document).on("click", ".confirm-btn", function() {
    alert("Заказ подтвержден!");
    $("#modal").css("display", "none");
  });
});

