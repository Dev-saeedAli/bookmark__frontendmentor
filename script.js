
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  const myFunc = (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.remove("was-validated")
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  
  const slider = document.querySelector(".slider");
  const firstSlide = slider.querySelector(".slider__first")
  const secondSlide = slider.querySelector(".slider__second")
  const thirdSlide = slider.querySelector(".slider__third")
  const tabs = Array.from(document.querySelectorAll(".tabs"));
  const tabsPara = Array.from(document.querySelectorAll(".tabs p"));
  const tabOne = document.querySelector(".tab1");
  const tabTwo = document.querySelector(".tab2");
  const tabThree = document.querySelector(".tab3");


  tabs.forEach((tab) => {
    tab.addEventListener("click", (event)=> {
        if(event.target.dataset.count == '1') {
          slider.style.transform = `translateX(${0}vw)`,
          tabOne.classList.add("active"),
          tabTwo.classList.remove("active"),
          tabThree.classList.remove("active"),
          firstSlide.classList.add("active"),
          secondSlide.classList.remove("active"),
          thirdSlide.classList.remove("active")
        }
        if(event.target.dataset.count == '2') {
            slider.style.transform = `translateX(${-100}vw)`,
            tabTwo.classList.add("active"),
            tabOne.classList.remove("active"),
            tabThree.classList.remove("active"),
            secondSlide.classList.add("active"),
            firstSlide.classList.remove("active"),
            thirdSlide.classList.remove("active")
        }
        if(event.target.dataset.count == '3') {
            slider.style.transform = `translateX(${-200}vw)`,
            tabThree.classList.add("active"),
            tabOne.classList.remove("active"),
            tabTwo.classList.remove("active"),
            thirdSlide.classList.add("active"),
            firstSlide.classList.remove("active"),
            secondSlide.classList.remove("active")
        }
    })
  });

  tabsPara.forEach((tab) => {
    tab.addEventListener("click", (event)=> {
        if(event.target.dataset.count == '1') {
            slider.style.transform = `translateX(${0}vw)`,
            tabOne.classList.add("active"),
            tabTwo.classList.remove("active"),
            tabThree.classList.remove("active"),
            firstSlide.classList.add("active"),
            secondSlide.classList.remove("active"),
            thirdSlide.classList.remove("active")
        }
        if(event.target.dataset.count == '2') {
          slider.style.transform = `translateX(${-100}vw)`,
          tabTwo.classList.add("active"),
          tabOne.classList.remove("active"),
          tabThree.classList.remove("active"),
          secondSlide.classList.add("active"),
          firstSlide.classList.remove("active"),
          thirdSlide.classList.remove("active")
        }
        if(event.target.dataset.count == '3') {
            slider.style.transform = `translateX(${-200}vw)`,
            tabThree.classList.add("active"),
            tabOne.classList.remove("active"),
            tabTwo.classList.remove("active"),
            thirdSlide.classList.add("active"),
            firstSlide.classList.remove("active"),
            secondSlide.classList.remove("active")
        }
    })
  });



  
