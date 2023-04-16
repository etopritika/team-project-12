(() => {
    const refs = {
      openFooterTeamModalLink: document.querySelector("[data-modal-team-open]"),
      closeFooterTeamModalBtn: document.querySelector("[data-modal-team-close]"),
      footerTeamModal: document.querySelector("[data-modal-team]"),
      
      closeFooterTeamModalEsc: document.addEventListener("keydown", function (event) {
        if(event.keyCode === 27) {
        toggleModal(event);
        };
      }),      
    };
  
    refs.openFooterTeamModalLink.addEventListener("click", toggleModal);
    refs.closeFooterTeamModalBtn.addEventListener("click", toggleModal);

  
    function toggleModal(event) {
      event.preventDefault();
      refs.footerTeamModal.classList.toggle("is-hidden-backdrop-team");
    }
  })();
