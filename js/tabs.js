function tabClick() {
  const tabs = document.querySelectorAll("#tabs .tab")
  const tabContents = document.querySelectorAll("#contents .content")

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab")

      tabContents.forEach((content) => {
        content.style.display = "none"
      })
      tabs.forEach((tabss) => {
        tabss.classList.remove("border-b-2", "border-b-mintDark", "font-bold")
      })

      // Знаходимо відповідний вмістовий блок і показуємо його
      const selectedTab = document.querySelector(`.content.${tabId}`)
      selectedTab.style.display = "block"
      tab.classList.add("border-b-2", "border-b-mintDark", "font-bold")
    })
  })
}

tabClick()
