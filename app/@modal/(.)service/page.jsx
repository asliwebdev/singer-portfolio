import { Modal } from "./modal";

export default function VideoModal() {
  return (
    <Modal>
      <video
        width="600"
        height="600"
        controls
        autoPlay
        preload="none"
        className="object-cover w-full max-h-[685px] border-none rounded-xl"
      >
        <source src="/service.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Modal>
  );
}
