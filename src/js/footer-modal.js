(() => {
    const refs = {
      openFooterTeamModalLink: document.querySelector("[data-modal-team-open]"),
      closeFooterTeamModalBtn: document.querySelector("[data-modal-team-close]"),
      footerTeamModal: document.querySelector("[data-modal-team]"),
    };
  
    refs.openFooterTeamModalLink.addEventListener("click", toggleModal);
    refs.closeFooterTeamModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal(event) {
        event.preventDefault();
      refs.footerTeamModal.classList.toggle("is-hidden");
    }
  })();