const view = {
    animate: {
        countUp: (element, endValue, dur) => {
            let startTime
            let startValue = parseInt(element.innerHTML)
            if (endValue - startValue <= 1) {
                element.innerHTML = endValue
                return
            }
            const loop = (time) => {
                if (!startTime) startTime = time
                const remaining = Math.min((time - startTime) / dur, 1)
                element.innerHTML = Math.round(
                    remaining * (endValue - startValue) + startValue
                )
                if (remaining < 1) {
                    window.requestAnimationFrame(loop)
                }
            }
            window.requestAnimationFrame(loop)
        },
    },
}
