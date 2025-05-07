"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, RefreshCw } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const CameraCapture = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize camera when component mounts
  useEffect(() => {
    initializeCamera();

    // Cleanup function to stop camera when component unmounts
    return () => {
      stopCamera();
    };
  }, []);

  const initializeCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: "user", // Use front camera for selfies
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCameraReady(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setIsCameraReady(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraReady(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      // Set canvas dimensions to match video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw video frame onto canvas
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert canvas to image data URL
        const imageDataUrl = canvas.toDataURL("image/jpeg");
        setCapturedImage(imageDataUrl);

        // Stop camera after capturing
        stopCamera();
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    initializeCamera();
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-4">
      <Card className="w-full overflow-hidden">
        <CardContent className="p-0">
          {capturedImage ? (
            // Display captured image
            <div className="relative">
              <img
                src={capturedImage}
                alt="Captured photo"
                className="w-full h-auto"
              />
            </div>
          ) : (
            // Display camera preview
            <div className="relative bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-auto"
                onCanPlay={() => setIsCameraReady(true)}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Hidden canvas for capturing photos */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="mt-4 w-full">
        {capturedImage ? (
          // Show retake button after capture
          <Button
            onClick={retakePhoto}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <RefreshCw className="h-5 w-5" />
            Retake
          </Button>
        ) : (
          // Show capture button during preview
          <Button
            onClick={capturePhoto}
            disabled={!isCameraReady}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Camera className="h-5 w-5" />
            Capture
          </Button>
        )}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={agreedToTerms}
          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            terms & conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            privacy policy
          </a>
          .
        </Label>
      </div>
    </div>
  );
};

export default CameraCapture;
