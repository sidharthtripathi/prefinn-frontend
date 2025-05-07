"use client"

import { useState, useRef, useEffect, MouseEvent } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function CameraCapture() {
  const [isCameraActive, setIsCameraActive] = useState(true)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [agreed, setAgreed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Initialize camera
  useEffect(() => {
    if (isCameraActive) {
      startCamera()
    } else {
      stopCamera()
    }

    return () => {
      stopCamera()
    }
  }, [isCameraActive])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const captureImage = (e : MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d")

      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth
        canvasRef.current.height = videoRef.current.videoHeight

        context.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight)

        const imageDataUrl = canvasRef.current.toDataURL("image/png")
        setCapturedImage(imageDataUrl)
        setIsCameraActive(false)
      }
    }
  }

  const retakePhoto = (e : MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    setCapturedImage(null)
    setIsCameraActive(true)
  }

  const handleSubmit = () => {
    if (!capturedImage || !agreed) return

    // Here you would typically send the image to your server
    console.log("Submitting image:", capturedImage)
    alert("Image submitted successfully!")
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Capture a Selfie</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-4">
        {isCameraActive ? (
          <>
            <div className="relative w-full aspect-[4/3] bg-black rounded-md overflow-hidden">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
            </div>
            <Button onClick={captureImage} className="w-full">
              Capture
            </Button>
          </>
        ) : (
          <>
            <div className="w-full aspect-[4/3] bg-black rounded-md overflow-hidden">
              {capturedImage && (
                <img
                  src={capturedImage || "/placeholder.svg"}
                  alt="Captured selfie"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <Button onClick={retakePhoto} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
              Retake
            </Button>
          </>
        )}

        <div className="flex items-start space-x-2 w-full mt-4">
          <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
          <label
            htmlFor="terms"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              terms & conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              privacy policy
            </Link>
            .
          </label>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleSubmit}
          disabled={!capturedImage || !agreed}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Submit
        </Button>
      </CardFooter>

      {/* Hidden canvas for capturing the image */}
      <canvas ref={canvasRef} className="hidden" />
    </Card>
  )
}
