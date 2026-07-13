import profilePhoto from '../assets/photo.png';

export default function AboutPortrait() {
  return (
    <div className="relative">
      <img
        src={profilePhoto}
        alt="Ishtikhar"
        className="w-72 h-72 object-cover rounded-[24px] border border-surface-3 grayscale contrast-[1.05] hover:grayscale-0 transition-[filter,border-color] duration-500 hover:border-primary/50"
      />
    </div>
  );
}
