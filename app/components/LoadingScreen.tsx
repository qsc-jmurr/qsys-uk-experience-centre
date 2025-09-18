export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <video 
        autoPlay 
        loop 
        muted 
        preload="auto"
        className="w-48 h-48"
      >
        <source src="/animations/loading.webm" type="video/webm" />
      </video>
      <p className="mt-4 text-gray-700">Establishing Connection to Q-SYS Core...</p>
      <p className="mt-2 text-gray-500">Please wait while we connect...</p>
    </div>
  );
}