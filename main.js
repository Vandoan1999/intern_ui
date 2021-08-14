$(function () {
  //banner
  $(".chevron-right").on("click", function () {
    $(".carousel-container").animate(
      {
        right: "-100%",
      },
      500,
      function () {
        $(".carousel-container").css({ right: "auto" });
        $(".carousel-container").prepend(
          $(".carousel-container").children().last()
        );
      }
    );
  });

  $(".chevron-left").on("click", function () {
    $(".carousel-container").animate(
      {
        left: "-100%",
      },
      500,
      function () {
        $(".carousel-container").append(
          $(".carousel-container").children().first()
        );
        $(".carousel-container").css({
          left: "auto",
        });
      }
    );
  });

  var w = window.innerWidth;

  if(w<=1024){
    $("#btn-crs-r").on("click", function () {
      $(".row.row-no-wrap").animate(
        {
          right: "-100%",
        },
        500,
        function () {
          $(".row.row-no-wrap").css({ right: "auto" });
          $(".row.row-no-wrap").prepend(
            $(".row.row-no-wrap").children().last()
          );
        }
      );
    });
  
    $("#btn-crs-l").on("click", function () {
      $(".row.row-no-wrap").animate(
        {
          left: "-100%",
        },
        500,
        function () {
          $(".row.row-no-wrap").append(
            $(".row.row-no-wrap").children().first()
          );
          $(".row.row-no-wrap").css({
            left: "auto",
          });
        }
      );
    });
  }
  else{

    $("#btn-crs-r").on("click", function () {
      $(".row.row-no-wrap").animate(
        {
          right: "-33.333%",
        },
        500,
        function () {
          $(".row.row-no-wrap").css({ right: "auto" });
          $(".row.row-no-wrap").prepend(
            $(".row.row-no-wrap").children().last()
          );
        }
      );
    });
  
    $("#btn-crs-l").on("click", function () {
      $(".row.row-no-wrap").animate(
        {
          left: "-33.333%",
        },
        500,
        function () {
          $(".row.row-no-wrap").append(
            $(".row.row-no-wrap").children().first()
          );
          $(".row.row-no-wrap").css({
            left: "auto",
          });
        }
      );
    });
  }

  //card

  $('.my-navbar-icon').click(function(){
    $('.nav-bar-sm').toggleClass('toggle-nav-bar-sm')
    $('.nav-moda-reponsive').toggle()
 })
 $('.nav-bar-sm-brand-icon-close').click(function(){
     $('.nav-bar-sm').removeClass('toggle-nav-bar-sm')
    $('.nav-moda-reponsive').toggle()
 })
 $('.nav-moda-reponsive').click(function(){
     $('.nav-bar-sm').removeClass('toggle-nav-bar-sm')
     $('.nav-moda-reponsive').toggle()
 })

 $('.nav-bar-sm-items_icon').click(function(){
     $(this).parent().siblings().slideToggle("slow");
 })
 
 // option select
 $('.select').on('click',function(){
   $(this).find('.select-option_list').fadeToggle(300);
 })
 $('.select-option_list').on('click',function(e){
   e.stopPropagation()
 })
 $('.select-option_item').on('click',function(){
  $(this).parent().siblings('.select_title').text( $(this).text())
  $(this).parent().fadeToggle(300);
  $(this).append( $(this).siblings('.selected_color').find('i.selected_color'))
  $(this).siblings('.selected_color').removeClass('selected_color')
  $(this).addClass('selected_color')
  
 
 })

});


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



function scroll_to_fix_navbar(){

    
  if($(document).width() >= 992)
  {
     if($('html').scrollTop() >= 500)
     {
         $('.my-container').addClass('my-container-bg')
         $('.my-navbar').addClass('navbar-fix-lg ')
 
         $('.nav-cart').removeClass('cart-plus')
         $('.nav-cart').addClass('cart-plus-fix')
 
         $('.nav-login').addClass('login-fix')
         $('.nav-logout').addClass('logout-fix')
        //  $('.my-container').css('background','linear-gradient(rgba(0,0,0,1), rgba(255,255,255,1))')

     }
     else{
         $('.my-container').removeClass('my-container-bg')
         $('.my-navbar').removeClass('navbar-fix-lg')
         $('.nav-cart').addClass('cart-plus')
         $('.nav-cart').removeClass('cart-plus-fix')
         $('.nav-login').removeClass('login-fix')
         $('.nav-logout').removeClass('logout-fix')
        //  $('.my-container').css('background','linear-gradient(rgba(0,0,0,5), rgba(255,255,255,0.0))')
     }

 }




}
