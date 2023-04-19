(() => {
    const refs = {
      openFooterTeamModalLink: document.querySelector("[data-modal-team-open]"),
      closeFooterTeamModalBtn: document.querySelector("[data-modal-team-close]"),
      footerTeamModal: document.querySelector("[data-modal-team]"),
      hiddenClass: "is-hidden-backdrop-team",
      backdrop: document.querySelector(".backdrop-team"),

    };
  
    refs.openFooterTeamModalLink.addEventListener("click", toggleModal);
    refs.closeFooterTeamModalBtn.addEventListener("click", toggleModal);
    refs.backdrop.addEventListener("click", function(event) {
      if(!refs.footerTeamModal.classList.contains(refs.hiddenClass)) {
        toggleModal(event);

      }
    });
    document.addEventListener("keydown", function (event) {
      if(event.code === 'Escape' && !refs.footerTeamModal.classList.contains(refs.hiddenClass)) {
        toggleModal(event);
      };
    });
   

  
    function toggleModal(event) {
      event.preventDefault();
      refs.footerTeamModal.classList.toggle(refs.hiddenClass);
    }

  })();
