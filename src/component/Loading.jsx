import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="black" />
    </div>
  );
}