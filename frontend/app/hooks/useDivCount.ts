import { useEffect, useState } from "react"
import { useLocation } from "react-router"

const INITIAL_DIV = 2

interface DOMMetrics {
    divCount: number
    depth: number
    totalElements: number
    renderTime: number
    domSize: string // Formatted size


    avgChildren: number

}

export const useDivCount = (): DOMMetrics => {
    const [metrics, setMetrics] = useState<DOMMetrics>({
        divCount: 0,
        depth: 0,
        totalElements: 0,
        renderTime: 0,
        domSize: '0 KB',
        avgChildren: 0

    })

    const location = useLocation()

    useEffect(() => {
        const startTime = performance.now()

        // Basic counts
        const allElements = document.querySelectorAll('*')
        const divs = document.querySelectorAll('div')

        // Depth calculation
        function getMaxDepth(element: Element, depth = 0): number {
            if (!element.children || element.children.length === 0) {
                return depth
            }
            let max = depth
            for (let child of element.children) {
                max = Math.max(max, getMaxDepth(child, depth + 1))
            }
            return max
        }

        const maxDepth = getMaxDepth(document.body)

        // Complexity metrics
        let totalChildren = 0

        allElements.forEach(el => {
            totalChildren += el.children.length
        })

        const avgChildren = allElements.length > 0 ? totalChildren / allElements.length : 0

        // Performance
        const endTime = performance.now()
        const renderTime = endTime - startTime
        const domSizeBytes = new Blob([document.documentElement.outerHTML]).size
        const domSize = domSizeBytes > 1024 ?
            `${(domSizeBytes / 1024).toFixed(1)} KB` :
            `${domSizeBytes} B`

        setMetrics({
            divCount: divs.length - INITIAL_DIV,
            depth: maxDepth,
            totalElements: allElements.length,

            renderTime: Math.round(renderTime),
            domSize,

            avgChildren: Math.round(avgChildren * 10) / 10

        })
    }, [location.pathname])

    return metrics
}