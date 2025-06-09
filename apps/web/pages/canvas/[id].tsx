import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useClerk } from '@clerk/nextjs'

const ReactFlow = dynamic(() => import('react-flow-renderer'), { ssr: false })

export default function CanvasPage() {
  const router = useRouter()
  const { id } = router.query
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])

  useEffect(() => {
    // TODO: load data via GraphQL
  }, [id])

  useEffect(() => {
    // TODO: listen WebSocket events
  }, [])

  return (
    <div className="w-full h-screen">
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  )
}
