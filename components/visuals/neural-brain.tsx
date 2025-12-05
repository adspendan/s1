"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useScroll, useTransform, motion } from "framer-motion"
import { useTheme } from "next-themes"

function generateSpherePoints(count: number, radius: number) {
    const points = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const u = Math.random()
        const v = Math.random()
        const theta = 2 * Math.PI * u
        const phi = Math.acos(2 * v - 1)
        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)
        points[i * 3] = x
        points[i * 3 + 1] = y
        points[i * 3 + 2] = z
    }
    return points
}

function BrainParticles(props: any) {
    const ref = useRef<any>(null)
    const { theme } = useTheme()

    // Generate random points on a sphere manually to avoid NaN issues
    const sphere = useMemo(() => generateSpherePoints(5000, 1.5), [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    const color = theme === "dark" ? "#C1FF72" : "#7F00FF"

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export function NeuralBrain() {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <motion.div style={{ y, opacity, scale }} className="w-full h-full">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <BrainParticles />
                </Canvas>
            </motion.div>
        </div>
    )
}
