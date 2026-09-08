// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".topbar__toggle");
  const menu = document.querySelector(".topbar__menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Reports filter (only present on reports.html)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const entries = document.querySelectorAll(".log-entry");
  const emptyState = document.querySelector(".empty-state");
  if (filterBtns.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const filter = btn.dataset.filter;
        let visibleCount = 0;
        entries.forEach((entry) => {
          const match = filter === "all" || entry.dataset.track === filter;
          entry.style.display = match ? "" : "none";
          if (match) visibleCount++;
        });
        if (emptyState) {
          emptyState.classList.toggle("is-visible", visibleCount === 0);
        }
      });
    });
  }
});
