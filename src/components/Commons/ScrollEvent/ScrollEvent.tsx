const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
          toggled = true
        }
      })
    },
    {
      root: null,
      threshold,
    }
  )
  const unobserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === false) {
          toggled = false
        }
      })
    },
    {
      root: null,
      rootMargin: '100px',
      threshold: 0,
    }
  )
  observer.observe(imgs)
  unobserver.observe(imgs)